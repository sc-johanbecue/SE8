// import React from 'react'; //{ useState }
// import { Container, Row, Col } from 'react-bootstrap';
// import Logo from './Logo';
// import SocialIcons from './social-icons';
// import FooterNavigation from './footer-navigation';
// import { TextField } from '@sitecore-jss/sitecore-jss-nextjs';
// import 'animate.css';

// interface Fields {
//   logoSrc?: string;
//   logoAlt?: string;
//   socialIcons?: Array<{
//     name: string;
//     icon: string;
//     url: string;
//   }>;
//   navigationSections?: Array<{
//     title: string;
//     links: Array<{
//       text: string;
//       href: string;
//     }>;
//   }>;
//   copyrightText?: string;
// }

// type FooterProps = {
//   params: { [key: string]: string };
//   fields: Fields;
// };

// const FooterDefaultComponent = (props: FooterProps): JSX.Element => (
//   <div className={`component Footer ${props.params.styles}`}>
//     <div className="component-content">
//       <span className="is-empty-hint">Footer</span>
//     </div>
//   </div>
// );

// export const Default = (props: FooterProps): JSX.Element => {
//   if (props.fields) {
//     return (
//       <Container>
//         <div className="footer-top pb-4 border-bottom">
//           <Row className="align-items-center">
//             <Col xs={12} md={6}>
//               <Logo src={props.fields.logoSrc} alt={props.fields.logoAlt} />
//             </Col>
//             <Col xs={12} md={6} className="mt-3 mt-md-0">
//               <div className="d-flex justify-content-md-end">
//                 <SocialIcons icons={props.fields.socialIcons} />
//               </div>
//             </Col>
//           </Row>
//         </div>

//         <div className="footer-middle py-5">
//           <FooterNavigation sections={props.fields.navigationSections} />
//         </div>

//         <div className="footer-bottom py-3">
//           <Row>
//             <Col>
//               <p className="mb-0 text-muted">{props.fields.copyrightText}</p>
//             </Col>
//           </Row>
//         </div>
//       </Container>
//     );
//   }
//   return <FooterDefaultComponent {...props} />;
// };
