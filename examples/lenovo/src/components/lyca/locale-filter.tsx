// /* eslint-disable @typescript-eslint/no-unused-vars */
// /* eslint-disable @typescript-eslint/no-explicit-any */
// 'use client';

// import { type ReactNode, type ReactElement, cloneElement, isValidElement, Children } from 'react';

// /**
//  * LocaleFilter component filters out the locale prop from React 19/Next.js
//  * to prevent "Received `false` for a non-boolean attribute `locale`" errors
//  */
// export function LocaleFilter({ children }: { children: ReactNode }) {
//   const filterLocaleFromChildren = (child: ReactNode): ReactNode => {
//     if (!isValidElement(child)) {
//       return child;
//     }

//     const element = child as ReactElement<any>;

//     // Filter out locale prop if it exists
//     const { locale, ...filteredProps } = element.props || {};

//     // Recursively filter children
//     const filteredChildren = element.props?.children
//       ? Children.map(element.props.children, filterLocaleFromChildren)
//       : element.props?.children;

//     // Clone element with filtered props
//     return cloneElement(element, filteredProps, filteredChildren);
//   };

//   return <>{Children.map(children, filterLocaleFromChildren)}</>;
// }
