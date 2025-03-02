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

  // Define all possible animation classes, delays, speeds, and iterations
  const animations: string[] = [
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

  const animationDelays: string[] = [
    'animate__delay-1s',
    'animate__delay-2s',
    'animate__delay-3s',
    'animate__delay-4s',
    'animate__delay-5s',
  ];

  const animationSpeed: string[] = [
    'animate__slow',
    'animate__slower',
    'animate__faster',
    'animate__fast',
  ];

  const animationIteration: string[] = [
    'animate__repeat-1',
    'animate__repeat-2',
    'animate__repeat-3',
    'animate__infinite',
  ];

  // Split the `props.params.styles` into an array of classes
  const stylesArray = props.params.styles.split(' ');

  // Find the matching classes for each category
  const animateClassName = stylesArray.find((style) => animations.includes(style));
  const animateDelayClassName = stylesArray.find((style) => animationDelays.includes(style));
  const animateSpeedClassName = stylesArray.find((style) => animationSpeed.includes(style));
  const animateIterationClassName = stylesArray.find((style) => animationIteration.includes(style));

  // Combine all the found classes into a single string with spaces
  const animationClassNames = [
    animateClassName,
    animateDelayClassName,
    animateSpeedClassName,
    animateIterationClassName,
  ]
    .filter(Boolean) // Remove any undefined values
    .join(' '); // Join them with a space

  if (props.fields) {
    return (
      //surrounding div added as  workaround for a bug, because classNames are not rendered on the <a> tag.
      <div
        className={`btn btn-primary btn-modern font-weight-bold text-3 py-3 btn-px-5 mt-1 appear-animation animated appear-animation-visible ${animationClassNames}`}
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
