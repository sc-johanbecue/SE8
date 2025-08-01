// import React, { JSX } from 'react';
// import { ComponentRendering, ComponentParams, Placeholder } from '@sitecore-content-sdk/nextjs';
// import { getChildren } from '../../lib/SolutionEngineering/XMC-Content';

// type SocialsContainerProps = {
//   rendering: ComponentRendering & { params: ComponentParams };
//   params: ComponentParams;
//   dataSource: string;
//   children?: string[];
// };

// export const Default = (props: SocialsContainerProps): JSX.Element => {
//   const id = props.params.RenderingIdentifier;
//   const phKey = `socialsContainer-${props.params.DynamicPlaceholderId}`;

//   return (
//     <div className={`component socialsContainer ${props.params.styles}`} id={id ? id : undefined}>
//       AA
//       <Placeholder name={phKey} rendering={props.rendering} />
//       BB
//       {props.rendering.dataSource && (
//         <div className="datasource-info">{props.rendering.dataSource}</div>
//       )}
//     </div>
//   );
// };
