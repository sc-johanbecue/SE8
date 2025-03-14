// Import React and the startTransition function to schedule non-urgent updates.
import React, { startTransition } from 'react';

// Define an interface for mapping container classes (with a prefix) to a target element.
export interface ClassMapping {
  // A React ref pointing to the target HTMLElement that will receive classes.
  targetRef: React.RefObject<HTMLElement>;
  // The prefix used to identify which classes in the container should be transferred.
  prefix: string;
}

/**
 * Transfers classes from the container element to target elements.
 * Classes on the container that begin with the given prefix are transferred
 * (with the prefix removed) to the target elements.
 * The transferred classes are tracked via a data attribute.
 *
 * When isEditing is true, a MutationObserver is set up to watch for changes on the container's class attribute.
 * The update logic is wrapped in startTransition to avoid hydration issues.
 *
 * Additionally, if the container element is removed from the DOM,
 * the observer is automatically disconnected.
 *
 * @param containerRef - A ref to the container element.
 * @param mappings - An array of mappings defining which target element receives which classes.
 * @param isEditing - Whether the page is in editing mode.
 * @returns A MutationObserver if one is set up, otherwise undefined.
 */
export function transferPrefixedClasses(
  containerRef: React.RefObject<HTMLElement>,
  mappings: ClassMapping[],
  isEditing: boolean = false // Default to non-editing mode.
): MutationObserver | undefined {
  // If the container reference is not available, exit early.
  if (!containerRef.current) return;

  // Variable to hold a possible MutationObserver instance.
  let observer: MutationObserver | undefined = undefined;

  // Function that updates target elements with the transformed classes.
  const updateClasses = () => {
    // Wrap the update in startTransition to schedule this update as low priority,
    // which helps avoid hydration issues in Suspense boundaries.
    startTransition(() => {
      // Check if the container still exists in the DOM.
      // If it has been removed, disconnect the observer and skip further updates.
      if (!containerRef.current || !document.body.contains(containerRef.current)) {
        observer?.disconnect();
        return;
      }

      // Split the container's className into an array of individual classes,
      // filtering out any empty strings.
      const containerClasses = containerRef.current.className.split(' ').filter(Boolean);

      // Iterate over each mapping to update the respective target element.
      mappings.forEach(({ targetRef, prefix }) => {
        // If the target element does not exist, skip this mapping.
        if (!targetRef.current) return;

        // Filter container classes that start with the specified prefix.
        // Then, remove the prefix from each class so that the target element
        // gets the clean class name.
        const newClasses = containerClasses
          .filter((cls) => cls.startsWith(prefix))
          .map((cls) => cls.replace(prefix, ''));

        // Retrieve any classes that were previously transferred to the target element,
        // which are stored in a custom data attribute.
        const oldClassesString = targetRef.current.getAttribute('data-transferred-classes');
        const oldClasses = oldClassesString ? oldClassesString.split(' ').filter(Boolean) : [];

        // For each previously transferred class, if it is no longer present
        // in newClasses, remove it from the target element.
        oldClasses.forEach((cls) => {
          if (!newClasses.includes(cls)) {
            targetRef.current?.classList.remove(cls);
          }
        });

        // For each new class that hasn't already been added,
        // add it to the target element.
        newClasses.forEach((cls) => {
          if (!oldClasses.includes(cls)) {
            targetRef.current?.classList.add(cls);
          }
        });

        // Update the data attribute on the target element with the current
        // set of transferred classes.
        targetRef.current.setAttribute('data-transferred-classes', newClasses.join(' '));
      });
    });
  };

  // Always perform an initial update to sync the target elements
  // with the container's classes.
  updateClasses();

  // Only set up the MutationObserver if the page is in editing mode.
  if (isEditing) {
    // Create a MutationObserver that will listen for changes to the container's
    // class attribute.
    observer = new MutationObserver((mutationsList) => {
      // Iterate over each mutation record.
      for (const mutation of mutationsList) {
        // Check if the mutation is related to the 'class' attribute.
        if (mutation.attributeName === 'class') {
          // If so, update the target elements with the new class list.
          updateClasses();
        }
      }
    });
    // Start observing the container element for attribute changes,
    // specifically the 'class' attribute.
    observer.observe(containerRef.current, { attributes: true, attributeFilter: ['class'] });
  }

  // Return the MutationObserver if it was created (useful for cleanup),
  // otherwise undefined.
  return observer;
}
