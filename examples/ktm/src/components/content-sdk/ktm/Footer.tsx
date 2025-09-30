import {
  ComponentParams,
  ComponentRendering,
  TextField,
  LinkField,
  RichTextField,
  ImageField,
} from '@sitecore-content-sdk/nextjs';
import Link from 'next/link';
import Image from 'next/image';
import React, { JSX } from 'react';

type ItemFields = {
  Title: TextField;
  Image: ImageField;
  Text: RichTextField;
  ButtonLabel: TextField;
  Link: LinkField;
};

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: ItemFields;
};

export const Default = (props: ComponentProps): JSX.Element => {
  console.log('ktm footer props:', JSON.stringify(props));
  return (
    <>
      <div className="c-footer__additional-text">
        <p>
          The stated discount is exclusively available at participating, authorized KTM dealers. All
          information is non-binding. Printing, layout, and typographical errors as well as other
          mistakes are reserved. Information may be changed at any time without prior notice.
        </p>
        <p>
          The illustrated vehicles may vary in selected details from the production models and some
          illustrations feature optional equipment available at additional cost. All information
          concerning the scope of supply, appearance, services, dimensions and weights is
          non-binding and specified with the proviso that errors, for instance in printing, setting
          and/or typing, may occur; such information is subject to change without notice. Please
          note that model specifications may vary from country to country. In the case of coated
          surfaces, there may be color differences due to the usual process fluctuations. The
          consumption values stated refer to the roadworthy series condition of the vehicles at the
          time of factory delivery.
        </p>
      </div>
      <div className="c-footer">
        <div className="container">
          <nav>
            <div className="c-footer__col" data-opened="false">
              <div className="c-footer__title">The Company</div>
              <ul>
                <li>
                  <Link
                    href="https://ktmgroup.com/en/home/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    KTM AG
                  </Link>
                </li>
                <li>
                  <Link href="https://www.ktm.com/en-be/contact.html" target="_self">
                    CONTACT
                  </Link>
                </li>
                <li>
                  <Link href="https://jobs.ktm.com/Jobs" target="_blank" rel="noopener noreferrer">
                    CAREERS
                  </Link>
                </li>
                <li>
                  <Link href="https://press.ktm.com" target="_blank" rel="noopener noreferrer">
                    PRESS CENTER
                  </Link>
                </li>
                <li>
                  <Link href="https://ktmgroup.com/procurement/" target="_self">
                    PROCUREMENT
                  </Link>
                </li>
                <li>
                  <Link href="https://media.ktm.com" target="_blank" rel="noopener noreferrer">
                    MEDIA LIBRARY
                  </Link>
                </li>
                <li>
                  <Link href="https://www.ktm.com/en-be/ktm-world/brand-values.html" target="_self">
                    BRAND VALUES
                  </Link>
                </li>
                <li>
                  <Link href="https://www.ktm.com/en-be/become-a-dealer.html" target="_self">
                    BECOME A DEALER
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://ktmgroup.com/en/die-ktm-aktie/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    INVESTOR RELATIONS
                  </Link>
                </li>
              </ul>
            </div>
            <div className="c-footer__col" data-opened="false">
              <div className="c-footer__title">KTM World</div>
              <ul>
                <li>
                  <Link href="https://www.ktm.com/en-be/ktm-world/news.html" target="_self">
                    NEWS
                  </Link>
                </li>
                <li>
                  <Link href="https://www.ktm.com/en-be/racing.html" target="_self">
                    RACING
                  </Link>
                </li>
                <li>
                  <Link href="https://www.ktm.com/en-be/ktm-world/ride-ktm.html" target="_self">
                    RIDE KTM
                  </Link>
                </li>
                <li>
                  <Link href="https://www.ktm-motohall.com" target="_self">
                    KTM MOTOHALL
                  </Link>
                </li>
                <li>
                  <Link href="https://www.ktm.com/en-be/tech-guide.html" target="_self">
                    KTM TECH GUIDE
                  </Link>
                </li>
                <li>
                  <Link href="https://www.ktm.com/en-be/ktm-world/newsletter.html" target="_self">
                    KTM NEWSLETTER
                  </Link>
                </li>
                <li>
                  <Link href="https://www.ktm.com/en-be/tech-guide/ktm-app.html" target="_self">
                    KTM CONNECT APP
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.ktm.com/en-be/ktm-world/ktm-adventure-rally.html"
                    target="_self"
                  >
                    KTM ADVENTURE RALLY
                  </Link>
                </li>
                <li>
                  <Link href="https://testride.ktm.com/#/enterByCountry/en-BE">
                    BOOK A TESTRIDE
                  </Link>
                </li>
              </ul>
            </div>
            <div className="c-footer__col" data-opened="false">
              <div className="c-footer__title">Service</div>
              <ul>
                <li>
                  <Link href="https://www.ktm.com/en-be/service/manuals.html" target="_self">
                    MANUALS
                  </Link>
                </li>
                <li>
                  <Link href="https://www.ktm.com/en-be/service/Maintenance.html" target="_self">
                    MAINTENANCE
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://configurator.ktm.com/models/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    CONFIGURATOR
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.ktm.com/en-be/service/Freeride-e-hotline.html"
                    target="_self"
                  >
                    FREERIDE E HOTLINE
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.ktm.com/en-be/service/spare-parts-finder.html"
                    target="_self"
                  >
                    SPARE PARTS FINDER
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.ktm.com/en-be/service/Service-and-safety-check.html"
                    target="_self"
                  >
                    SERVICE & SAFETY CHECK
                  </Link>
                </li>
                <li>
                  <Link href="https://www.ktm.com/en-be/service/Safety.html" target="_self">
                    SAFETY RECALL INFORMATION
                  </Link>
                </li>
              </ul>
            </div>
            <div className="c-footer__col" data-opened="false">
              <div className="c-footer__title">Legal</div>
              <ul>
                <li>
                  <Link href="https://www.ktm.com/en-be/imprint.html" target="_self">
                    IMPRINT
                  </Link>
                </li>
                <li>
                  <Link href="https://www.ktm.com/en-be/legal-notices.html" target="_self">
                    LEGAL NOTICES
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.ktm.com/en-be/legal-notices-and-terms-of-use.html"
                    target="_self"
                  >
                    TERMS OF USE
                  </Link>
                </li>
                <li>
                  <Link href="https://www.ktm.com/en-be/privacy-policy.html" target="_self">
                    PRIVACY POLICY
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.ktm.com/en-be/cyber-security.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    CYBER SECURITY
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.pierermobility.com/en/sustainability/publications"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    CODE OF CONDUCT
                  </Link>
                </li>
              </ul>
            </div>
            <div className="c-footer__icons">
              <div className="icons-title">Connect</div>
              <ul>
                <li>
                  <Link
                    href="http://www.facebook.com/Official.KTM"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="https://www.ktm.com/content/dam/websites/ktm-com/language-masters/en/social-icons/f35px.png"
                      alt="f35px"
                      sizes="100vw"
                      width={0}
                      height={0}
                      style={{ width: '100%', height: 'auto' }}
                      unoptimized
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.instagram.com/ktm_official/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="https://www.ktm.com/content/dam/websites/ktm-com/language-masters/en/social-icons/insta35px.png"
                      alt="insta35px"
                      sizes="100vw"
                      width={0}
                      height={0}
                      style={{ width: '100%', height: 'auto' }}
                      unoptimized
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.youtube.com/ktm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="https://www.ktm.com/content/dam/websites/ktm-com/language-masters/en/social-icons/yt25px.png"
                      alt="yt25px"
                      sizes="100vw"
                      width={0}
                      height={0}
                      style={{ width: '100%', height: 'auto' }}
                      unoptimized
                    />
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <div className="c-footer__legal-text">
            <p className="copyright">
              Copyright 2025 KTM Sportmotorcycle GmbH, all rights reserved
            </p>
            <p className="back-to-top">BACK TO TOP</p>
          </div>
        </div>
      </div>
    </>
  );
};
