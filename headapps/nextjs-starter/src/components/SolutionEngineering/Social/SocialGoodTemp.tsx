// import React, { JSX } from 'react';
// import {
//   Item,
//   TextField,
//   LinkField,
//   ComponentParams,
//   ComponentRendering,
// } from '@sitecore-content-sdk/nextjs';

// import { ColorCssVars } from 'lib/SolutionEngineering/XMC-ColorPalette';

// import * as Icon from '../Icon/Icon';
// const IconComponent = Icon.Default;

// /**
//  * Field definitions expected from Sitecore.
//  */
// interface Fields {
//   Icon: Item & {
//     fields: {
//       Icon: TextField;
//     };
//   };
//   Link: LinkField;
// }

// /**
//  * Presentation-related props resolved from getStaticProps.
//  */
// type SocialPresentationProps = {
//   color?: ColorCssVars;
//   hoverColor?: ColorCssVars;
//   backgroundColor?: ColorCssVars;
//   hoverBackgroundColor?: ColorCssVars;
//   iconSize?: string;
//   backgroundStyle?: string;
//   hoverBackgroundStyle?: string;
// };

// /**
//  * Component props for Social icon link.
//  */
// type SocialProps = {
//   rendering: ComponentRendering & { params: ComponentParams };
//   params: ComponentParams;
//   fields: Fields;
// } & SocialPresentationProps;

// /**
//  * Component displayed when required fields (Icon or Link) are missing.
//  */
// const DefaultContent = (props: SocialProps): JSX.Element => (
//   <div
//     className={`component Social ${props.params.styles ?? ''}`}
//     id={props.params.RenderingIdentifier || undefined}
//   >
//     <div className="component-content">
//       <span className="is-empty-hint">Social Component</span>
//     </div>
//   </div>
// );

// /**
//  * The default exported Social component renders a single icon link
//  * with hover states, background styling, and dynamic coloring.
//  */
// export const Default = (props: SocialProps): JSX.Element => {
//   const {
//     fields,
//     params,
//     iconSize,
//     color,
//     hoverColor,
//     backgroundColor,
//     hoverBackgroundColor,
//     backgroundStyle,
//     hoverBackgroundStyle,
//   } = props;

//   const id = props.rendering.uid + '-social';

//   // Fallback rendering if required values are missing
//   if (!fields?.Link?.value?.url) {
//     return <DefaultContent {...props} />;
//   }

//   return (
//     <a
//       className={`component ${params.styles ?? ''} p-0`}
//       id={id || undefined}
//       href={fields.Link.value.url as string}
//       target={fields.Link.value.target || '_self'}
//       aria-label={fields.Link.value.text}
//     >
//       <IconComponent
//         rendering={{ ...props.rendering, dataSource: fields.Icon.id }}
//         params={params}
//         fields={{
//           Icon: fields.Icon.fields.Icon,
//         }}
//         color={color}
//         hoverColor={hoverColor}
//         backgroundColor={backgroundColor}
//         hoverBackgroundColor={hoverBackgroundColor}
//         iconSize={iconSize}
//         backgroundStyle={backgroundStyle}
//         hoverBackgroundStyle={hoverBackgroundStyle}
//       ></IconComponent>
//     </a>
//   );
// };
