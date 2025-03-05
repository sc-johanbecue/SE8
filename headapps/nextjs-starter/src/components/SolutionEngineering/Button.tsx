import React, { useRef, useEffect, useCallback } from 'react';
import {
  Link as JssLink,
  LinkField,
  ComponentParams,
  ComponentRendering,
  useSitecoreContext,
} from '@sitecore-jss/sitecore-jss-nextjs';
import 'animate.css';

interface Fields {
  Link: LinkField;
}

type ButtonProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: Fields;
};

// A fallback component to render when no valid fields are provided.
const ButtonDefaultComponent = ({ params }: ButtonProps): JSX.Element => (
  <div className={`component Button ${params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint">Button</span>
    </div>
  </div>
);

export const Default = (props: ButtonProps): JSX.Element => {
  // Destructure props for easier access.
  const { params, fields } = props;
  const id = params.RenderingIdentifier;
  const { sitecoreContext } = useSitecoreContext();

  // Create a constant for the shared class name value.
  const commonClassName = `btn ${params.styles}`;

  // Create refs for the link element and the container (used in editing mode).
  const linkRef = useRef<HTMLAnchorElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Update the link's className based on the container's data attribute.
  // This is useful in editing mode when the container may update its class.
  const updateLinkClassName = useCallback(() => {
    if (containerRef.current && linkRef.current) {
      const containerClassName = containerRef.current.getAttribute('data-className');
      if (containerClassName) {
        linkRef.current.className = containerClassName;
      }
    }
  }, []);

  // Effect to initialize the link state and observe changes in the container.
  useEffect(() => {
    // Disable the link if required.
    if (linkRef.current && params.Disabled) {
      linkRef.current.setAttribute('disabled', '');
    }
    // Set initial className based on container's data.
    updateLinkClassName();

    // Setup a MutationObserver to detect changes in the container and update the link.
    let observer: MutationObserver | null = null;
    if (containerRef.current) {
      observer = new MutationObserver((mutationsList) => {
        for (const mutation of mutationsList) {
          if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
            updateLinkClassName();
          }
        }
      });
      observer.observe(containerRef.current, { childList: true, subtree: true });
    }

    // Cleanup the observer when the component unmounts.
    return () => {
      observer?.disconnect();
    };
  }, [params.Disabled, params.styles, updateLinkClassName]);

  // Render the link component if valid fields are provided.
  if (fields) {
    const jssLinkComponent = (
      <JssLink
        ref={linkRef}
        id={id || undefined}
        defaultValue="GET STARTED NOW!"
        field={fields.Link}
        className={commonClassName}
      />
    );

    // In editing mode, wrap the link in a container to allow live updates.
    if (sitecoreContext.pageEditing) {
      return (
        <div ref={containerRef} data-className={commonClassName}>
          {jssLinkComponent}
        </div>
      );
    }

    // Otherwise, render the link directly.
    return jssLinkComponent;
  }

  // Fallback component if no valid fields are available.
  return <ButtonDefaultComponent {...props} />;
};
