import React, { startTransition } from 'react';

export interface ClassMapping {
  targetRef: React.RefObject<HTMLElement>;
  prefix: string;
}

/**
 * Transfers classes from the container element to target elements.
 * Classes on the container that begin with the given prefix are transferred (with the prefix removed)
 * to the target elements. The transferred classes are tracked via a data attribute.
 *
 * When isEditing is true, a MutationObserver is set up to watch for changes on the container's class attribute.
 * The update logic is wrapped in startTransition to avoid hydration issues.
 *
 * @param containerRef - A ref to the container element.
 * @param mappings - An array of mappings defining which target element receives which classes.
 * @param isEditing - Whether the page is in editing mode.
 * @returns A MutationObserver if one is set up, otherwise undefined.
 */
export function transferPrefixedClasses(
  containerRef: React.RefObject<HTMLElement>,
  mappings: ClassMapping[],
  isEditing: boolean = false
): MutationObserver | undefined {
  if (!containerRef.current) return;

  const updateClasses = () => {
    startTransition(() => {
      if (!containerRef.current) return;
      // Get the container's classes as an array.
      const containerClasses = containerRef.current.className.split(' ').filter(Boolean);

      mappings.forEach(({ targetRef, prefix }) => {
        if (!targetRef.current) return;
        // Filter container classes that start with the prefix and remove the prefix.
        const newClasses = containerClasses
          .filter((cls) => cls.startsWith(prefix))
          .map((cls) => cls.replace(prefix, ''));

        // Retrieve previously transferred classes stored in the data attribute.
        const oldClassesString = targetRef.current.getAttribute('data-transferred-classes');
        const oldClasses = oldClassesString ? oldClassesString.split(' ').filter(Boolean) : [];

        // Remove classes that were previously transferred but are no longer present.
        oldClasses.forEach((cls) => {
          if (!newClasses.includes(cls)) {
            targetRef.current?.classList.remove(cls);
          }
        });

        // Add new classes that aren't already present.
        newClasses.forEach((cls) => {
          if (!oldClasses.includes(cls)) {
            targetRef.current?.classList.add(cls);
          }
        });

        // Update the data attribute with the current set of transferred classes.
        targetRef.current.setAttribute('data-transferred-classes', newClasses.join(' '));
      });
    });
  };

  // Always perform an initial update.
  updateClasses();

  let observer: MutationObserver | undefined = undefined;
  // Only set up the MutationObserver if the page is in editing mode.
  if (isEditing) {
    observer = new MutationObserver((mutationsList) => {
      for (const mutation of mutationsList) {
        if (mutation.attributeName === 'class') {
          updateClasses();
        }
      }
    });
    observer.observe(containerRef.current, { attributes: true, attributeFilter: ['class'] });
  }

  return observer;
}
