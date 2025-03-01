import React from 'react';
import {
  Link as JssLink,
  LinkField,
  ComponentParams,
  ComponentRendering,
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

  // Use an array of animation class names instead of a key-value map
  const animationClasses: string[] = [
    'animate__bounce',
    'animate__flash',
    'animate__headShake',
    'animate__heartBeat',
    'animate__jello',
    'animate__pulse',
    'animate__rubberBand',
    'animate__shakeX',
    'animate__shakeY',
    'animate__swing',
    'animate__tada',
    'animate__wobble',
  ];

  // Find the first style that matches a class in the animationClasses array
  const animateClassName = props.params.styles
    .split(' ')
    .find((style) => animationClasses.includes(style));

  if (props.fields) {
    return (
      //surrounding div added as  workaround for a bug, because classNames are not rendered on the <a> tag.
      <div
        className={`btn btn-primary btn-modern font-weight-bold text-3 py-3 btn-px-5 mt-1 appear-animation animated appear-animation-visible ${animateClassName}`}
      >
        <JssLink
          id={id ? id : undefined}
          defaultValue="GET STARTED NOW!"
          field={props.fields.Link}
          style={{ animationDelay: '1800ms' }}
        />
      </div>
    );
  }

  return <ButtonDefaultComponent {...props} />;
};
