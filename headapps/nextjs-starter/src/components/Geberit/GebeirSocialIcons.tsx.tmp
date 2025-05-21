// import type React from 'react';
// import { TextField, LinkField } from '@sitecore-jss/sitecore-jss-nextjs';

// import 'animate.css';
// import Link from 'next/link';

// interface Fields {
//   icons: SocialIcon[];
//   size: TextField;
// }

// interface SocialIcon {
//   name: TextField;
//   icon: TextField;
//   url: LinkField;
// }

// interface MainHeroProps {
//   params: { [key: string]: string };
//   fields: Fields;
// }

// const MainHeroDefaultComponent = (props: MainHeroProps): JSX.Element => (
//   <div className={`component MainHero ${props.params.styles}`}>
//     <div className="component-content">
//       <span className="is-empty-hint">MainHero</span>
//     </div>
//   </div>
// );

// export const Default = (props: MainHeroProps): JSX.Element => {
//   // Use Sitecore fields if available, otherwise use default props
//   const socialIcons = props.fields.icons.map((icon) => ({
//     name: icon.name.value || '',
//     icon: icon.icon.value || '',
//     url: icon.url.value?.href || '#',
//   }));

//   const iconSize = (props.fields?.size?.value as 'sm' | 'md' | 'lg') || size;

//   const sizeClass = {
//     sm: 'fs-6',
//     md: 'fs-5',
//     lg: 'fs-4',
//   }[iconSize];

//   if (props.fields) {
//     return (
//       <div className="social-icons d-flex gap-3">
//         {socialIcons.map((icon, index) => (
//           <Link
//             key={index}
//             href={icon.url}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-decoration-none"
//             aria-label={icon.name}
//           >
//             <i className={`bi bi-${icon.icon} ${sizeClass}`}></i>
//             <span className="visually-hidden">{icon.name}</span>
//           </Link>
//         ))}
//       </div>
//     );
//   }

//   return <MainHeroDefaultComponent {...props} />;
// };
