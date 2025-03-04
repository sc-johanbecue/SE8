import React, { useRef, useEffect } from 'react';
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

const ButtonDefaultComponent = (props: ButtonProps): JSX.Element => (
  <div className={`component Button ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint">Button</span>
    </div>
  </div>
);

export const Default = (props: ButtonProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;
  const { sitecoreContext } = useSitecoreContext();

  // Ref for the JssLink's underlying <a> element.
  const linkRef = useRef<HTMLAnchorElement>(null);
  // Ref for the container div in editing mode.
  const containerRef = useRef<HTMLDivElement>(null);

  // Function to update link's className from container's data-className.
  const updateLinkClassName = () => {
    if (containerRef.current && linkRef.current) {
      const containerClassName = containerRef.current.getAttribute('data-className');
      if (containerClassName) {
        linkRef.current.className = containerClassName;
      }
    }
  };

  useEffect(() => {
    // If the link should be disabled, set its disabled attribute without a value.
    if (linkRef.current && props.params.Disabled) {
      linkRef.current.setAttribute('disabled', '');
    }
    // Initial update of link className from container.
    updateLinkClassName();

    // Create a MutationObserver to detect changes in the container div.
    let observer: MutationObserver;
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

    // Cleanup on unmount.
    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [props.params.Disabled, props.params.styles]);

  let jssLinkComponent;

  if (props.fields) {
    jssLinkComponent = (
      <JssLink
        ref={linkRef}
        id={id || undefined}
        defaultValue="GET STARTED NOW!"
        field={props.fields.Link}
        className={`btn text-3 ${props.params.styles}`}
      />
    );
  }

  if (sitecoreContext.pageEditing) {
    return (
      // In editing mode, wrap the link in a container div.
      // The container's data-className attribute is used to update the link's className.
      <div ref={containerRef} data-className={`btn text-3 ${props.params.styles}`}>
        {jssLinkComponent}
      </div>
    );
  } else {
    return <>{jssLinkComponent}</>;
  }

  return <ButtonDefaultComponent {...props} />;
};

export const DefaultNotGood = (props: ButtonProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;

  // Create a ref to get the underlying <a> element.
  const linkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    // If the link should be disabled, set its attribute without a value.
    if (linkRef.current && props.params.Disabled) {
      linkRef.current.setAttribute('disabled', '');
    }
    // Assign the container's data-className attribute value to the link's className.
  }, [props.params.Disabled, props.params.styles]);

  if (props.fields) {
    return (
      <JssLink
        ref={linkRef}
        id={id ? id : undefined}
        defaultValue="GET STARTED NOW!"
        field={props.fields.Link}
        className={`btn font-weight-bold text-3 py-3 btn-px-5 mt-1 ${props.params.styles}`}
        style={{ animationDelay: '1800ms' }}
      />
    );
  }

  return <ButtonDefaultComponent {...props} />;
};
