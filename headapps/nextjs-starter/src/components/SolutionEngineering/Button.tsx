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

  // Create a ref to get the underlying <a> element.
  const linkRef = useRef<HTMLAnchorElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // If the link should be disabled, set its attribute without a value.
    if (linkRef.current && props.params.Disabled) {
      linkRef.current.setAttribute('disabled', '');
    }
    // Assign the container's data-className attribute value to the link's className.
    if (containerRef.current && linkRef.current) {
      const containerClassName = containerRef.current.getAttribute('data-className');
      if (containerClassName) {
        linkRef.current.className = containerClassName;
      }
    }
  }, [props.params.Disabled, props.params.styles]);

  let jssLinkComponent;

  if (props.fields) {
    jssLinkComponent = (
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

  if (sitecoreContext.pageEditing) {
    return (
      // The container div is used as a workaround for a bug where classNames are not rendered on the <a> tag.
      // Its data-className attribute is updated via useEffect based on the inner JssLink's className.
      <div
        ref={containerRef}
        data-className={`btn font-weight-bold text-3 py-3 btn-px-5 mt-1 ${props.params.styles}`}
      >
        {jssLinkComponent}
      </div>
    );
  } else {
    return <>{jssLinkComponent}</>;
  }

  return <ButtonDefaultComponent {...props} />;
};
