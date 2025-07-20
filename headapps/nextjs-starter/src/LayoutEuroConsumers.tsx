/* eslint-disable @next/next/no-sync-scripts */
/**
 * This Layout is needed for Starter Kit.
 */
import React from 'react';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import {
  Placeholder,
  LayoutServiceData,
  Field,
  HTMLLink,
  ImageField,
} from '@sitecore-jss/sitecore-jss-nextjs';
import config from 'temp/config';
import Scripts from 'src/Scripts';
import Script from 'next/script';
import Link from 'next/link';

// Prefix public assets with a public URL to enable compatibility with Sitecore Experience Editor.
// If you're not supporting the Experience Editor, you can remove this.
const publicUrl = config.publicUrl;

interface LayoutProps {
  layoutData: LayoutServiceData;
  headLinks: HTMLLink[];
}

interface RouteFields {
  [key: string]: unknown;
  Title?: Field;
  OgTitle?: Field;
  OgDescription?: Field;
  OgImage?: ImageField;
}

const Layout = ({ layoutData, headLinks }: LayoutProps): JSX.Element => {
  const { route } = layoutData.sitecore;
  const fields = route?.fields as RouteFields;
  const isPageEditing = layoutData.sitecore.context.pageEditing;
  const mainClassPageEditing = isPageEditing ? 'editing-mode' : 'prod-mode';

  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Scripts />
      <Script id="data-layer-script" strategy="afterInteractive">
        {`
          dataLayer = [{
            "websiteType": "consumers-content",
            "userStatus": "Anonymous",
            "isLogin": "false",
            "commercialStatus": "Prospect",
            "commercialIdentity": "Anonymous User",
            "pageType": "aline-home",
            "contentType": "homepage",
            "culture": "nl-BE",
            "isFake": "false",
            "isTechnical": "false",
            "isInternalHuman": "false",
            "user_status": "not_connected",
            "URLPage": "https://www.test-aankoop.be/",
            "ItemID": "e32cf6f9-2306-4cfd-a661-d03c85b81f12",
            "pageLanguage": "nl"
          }];
        `}
      </Script>

      <Head>
        <title>{fields?.Title?.value?.toString() || 'Page'}</title>
        <link rel="icon" href={`${publicUrl}/favicon.ico`} />
        {headLinks.map((headLink) => (
          <link rel={headLink.rel} key={headLink.href} href={headLink.href} />
        ))}
        <link rel="canonical" href={publicUrl} />
        <meta property="og:title" content={fields?.OgTitle?.value?.toString()} />
        <meta property="og:description" content={fields?.OgDescription?.value?.toString()} />
        <meta property="og:image" content={fields?.OgImage?.value?.src?.toString()} />
        <meta property="og:type" content={route?.templateName} data-attr="JSS-21.6.0" />

        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />

        <script type="text/javascript">var EC = EC || {};</script>

        <title>Testaankoop: Consumentenvereniging</title>

        <meta http-equiv="content-type" content="text/html; charset=UTF-8" />
        <meta http-equiv="content-language" />

        <meta
          name="description"
          content="Testaankoop is een vereniging die de consumenten in Belgi&#235; informeert, verdedigt en vertegenwoordigt. Wij werken in volledige onafhankelijkheid, zowel op financieel, politiek als ideologisch vlak."
        />
        <meta name="keywords" content="" />
        <meta
          name="antiForgeryToken"
          content="c5rb93Vs3IgG-BAn0lYuwrYeLjWAhRhQRim5n45K-3aPYh3tkdfKqocTCtNKIlJ6w5KV8SrzI9vpK-HGjs5gTwDDG9Q1"
        />
        <meta name="canonical" content="https://www.test-aankoop.be/" />
        <meta name="filterType" content="Andere" />
        <meta name="isHub" content="False" />
        <meta name="machine" content="CO-ASCBE-PRWW06" />
        <meta name="routingPrefix" content="" />
        <meta name="scID" content="e32cf6f9-2306-4cfd-a661-d03c85b81f12" />
        <meta name="scLayoutID" content="b6e20cfb-111e-4b89-991f-8bf2ada79468" />
        <meta name="title" content="Testaankoop: Consumentenvereniging" />
        <meta name="virtualFolder" content="/" />
        <meta property="og:locale" content="nl_BE" />
        <meta property="og:site_name" content="Testaankoop" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.test-aankoop.be/" />
        <link rel="alternate" href="https://www.test-achats.be/" hrefLang="fr" />
        <link rel="alternate" href="https://www.test-aankoop.be/" hrefLang="nl" />
        <link rel="alternate" href="https://www.test-aankoop.be/" hrefLang="x-default" />
        <link rel="manifest" title="https://www.test-aankoop.be/manifest-nl-be.json" />
        <link rel="canonical" href="https://www.test-aankoop.be/" />

        <link rel="preconnect" href="https://p.ec-cloud.org" />
        <link rel="dns-prefetch" href="https://p.ec-cloud.org" />
        <link rel="preconnect" href="https://cdn.cookielaw.org" />
        <link rel="dns-prefetch" href="https://cdn.cookielaw.org" />
        <script
          type="text/javascript"
          src="https://try.abtasty.com/2a179a1822ac1f21c70239518213254a.js"
        ></script>

        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="https://www.test-aankoop.be/-/media/ta/favicons2022/ta_192.png?rev=f972c496-f4de-401b-ac26-77b43f74319f&amp;mw=192mh%3d192&amp;hash=F8BF18CAC9D2D6D82ABD723FA69B9EF0"
        />
        <link
          rel="apple-touch-icon"
          type="image/png"
          sizes="114x114"
          href="https://www.test-aankoop.be/-/media/ta/favicons2022/ta_114.png?rev=a796470c-a9a0-41fd-9ac8-dc20afa0976e&amp;mw=114mh%3d114&amp;hash=FAE54D08F688B7123E7156437D359E7E"
        />
        <link
          rel="apple-touch-icon"
          type="image/png"
          sizes="120x120"
          href="https://www.test-aankoop.be/-/media/ta/favicons2022/ta_120.png?rev=fae977ec-751e-436a-999b-457bdf00a329&amp;mw=120mh%3d120&amp;hash=677B0B20DE9C0EAAF55397618E635FF1"
        />
        <link
          rel="apple-touch-icon"
          type="image/png"
          sizes="144x144"
          href="https://www.test-aankoop.be/-/media/ta/favicons2022/ta_144.png?rev=10cdaf36-7990-4307-81a7-e831eacff8a4&amp;mw=144mh%3d144&amp;hash=C781175E7DACCF17D051245539F9C39B"
        />
        <link
          rel="apple-touch-icon"
          type="image/png"
          sizes="152x152"
          href="https://www.test-aankoop.be/-/media/ta/favicons2022/ta_152.png?rev=d812a832-5d19-4cd7-907f-5fe1f9704f71&amp;mw=152mh%3d152&amp;hash=2345AD46391D126031C4BB7BFF1CBD45"
        />
        <link
          rel="apple-touch-icon"
          type="image/png"
          sizes="180x180"
          href="https://www.test-aankoop.be/-/media/ta/favicons2022/ta_180.png?rev=f3c745d7-aca0-49f3-b737-27a8cebe5327&amp;mw=180mh%3d180&amp;hash=727BBA65B918CA56495D6727930D18CF"
        />
        <link
          rel="apple-touch-icon"
          type="image/png"
          sizes="57x57"
          href="https://www.test-aankoop.be/-/media/ta/favicons2022/ta_57.png?rev=088452d5-2ad8-41c2-a30f-d8d04a28250a&amp;mw=57mh%3d57&amp;hash=23E389368AC837CAF3AC8E61BF0DAE17"
        />
        <link
          rel="apple-touch-icon"
          type="image/png"
          sizes="60x60"
          href="https://www.test-aankoop.be/-/media/ta/favicons2022/ta_60.png?rev=4f0cb72e-7936-484b-946e-7a4c489458b0&amp;mw=60mh%3d60&amp;hash=9E641048E0841581AD6D66E8C56A0CD2"
        />
        <link
          rel="apple-touch-icon"
          type="image/png"
          sizes="72x72"
          href="https://www.test-aankoop.be/-/media/ta/favicons2022/ta_72.png?rev=9ee4ba53-26e8-4e45-b01f-1c19f666cd66&amp;mw=72mh%3d72&amp;hash=FA0709A9149695324B6477C29C5E39FE"
        />
        <link
          rel="apple-touch-icon"
          type="image/png"
          sizes="76x76"
          href="https://www.test-aankoop.be/-/media/ta/favicons2022/ta_76.png?rev=b2433839-cbb3-4502-b167-00abaaa36de0&amp;mw=76mh%3d76&amp;hash=1FDFE80D05551E2F735A6C642A9E8310"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="https://www.test-aankoop.be/-/media/ta/favicons2022/ta_16.png?rev=c809f44b-4733-490c-a8b7-9e827fbb2727&amp;mw=16mh%3d16&amp;hash=9E0C09CD7CC60054EC66D1776BA97D7D"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="https://www.test-aankoop.be/-/media/ta/favicons2022/ta_32.png?rev=6c1185f2-15f5-472c-b02a-120868e60447&amp;mw=32mh%3d32&amp;hash=006311977B41FB97C548A558A5C06829"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="https://www.test-aankoop.be/-/media/ta/favicons2022/ta_96.png?rev=f198fb2f-2fe7-4e0b-928b-9c239aca609a&amp;mw=96mh%3d96&amp;hash=E38BA6FA0E03C57291CA7294606B58B7"
        />
        <link
          rel="preload"
          href="https://p.ec-cloud.org/aline/fonts/nl-be/garet-regular.woff2"
          as="font"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="https://p.ec-cloud.org/aline/fonts/nl-be/garet-bold.woff2"
          as="font"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://p.ec-cloud.org/vendor/jquery-ui/1.13.2-ec.1/jquery-ui.min.css"
          as="style"
        />
        <noscript>
          <link
            rel="stylesheet"
            href="https://p.ec-cloud.org/vendor/jquery-ui/1.13.2-ec.1/jquery-ui.min.css"
          />
        </noscript>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossOrigin="anonymous"
        />
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
          crossOrigin="anonymous"
        />
        <link
          href="https://p.ec-cloud.org/aline/components/layout/0.86.0/layout_nl-be.min.css"
          rel="stylesheet"
        />
        <link
          href="https://p.ec-cloud.org/aline/components/layout/0.84.0/carousel_nl-be.min.css"
          rel="stylesheet"
        />
        <link
          href="https://p.ec-cloud.org/aline/components/layout/0.84.0/buttons_nl-be.min.css"
          rel="stylesheet"
        />
        <link
          href="https://p.ec-cloud.org/aline/components/layout/0.84.0/icons_nl-be.min.css"
          rel="stylesheet"
        />
        <link
          href="https://p.ec-cloud.org/common/icons/0.4.0/interface/interface.min.css"
          rel="stylesheet"
        />
        <link
          href="https://p.ec-cloud.org/common/icons/0.4.0/logos/logos.min.css"
          rel="stylesheet"
        />
        <link href="https://p.ec-cloud.org/common/icons/0.4.0/misc/misc.min.css" rel="stylesheet" />
        <link
          href="https://p.ec-cloud.org/common/icons/0.4.0/product-selectors/product-selectors.min.css"
          rel="stylesheet"
        />
        <link
          href="https://p.ec-cloud.org/common/icons/0.4.0/theme-appliances/theme-appliances.min.css"
          rel="stylesheet"
        />
        <link
          href="https://p.ec-cloud.org/common/icons/0.4.0/theme-family/theme-family.min.css"
          rel="stylesheet"
        />
        <link
          href="https://p.ec-cloud.org/common/icons/0.4.0/theme-food/theme-food.min.css"
          rel="stylesheet"
        />
        <link
          href="https://p.ec-cloud.org/common/icons/0.4.0/theme-health/theme-health.min.css"
          rel="stylesheet"
        />
        <link
          href="https://p.ec-cloud.org/common/icons/0.4.0/theme-home/theme-home.min.css"
          rel="stylesheet"
        />
        <link
          href="https://p.ec-cloud.org/common/icons/0.4.0/theme-mobility/theme-mobility.min.css"
          rel="stylesheet"
        />
        <link
          href="https://p.ec-cloud.org/common/icons/0.4.0/theme-money/theme-money.min.css"
          rel="stylesheet"
        />
        <link
          href="https://p.ec-cloud.org/common/icons/0.4.0/theme-technology/theme-technology.min.css"
          rel="stylesheet"
        />
        <link href="https://p.ec-cloud.org/common/icons/0.4.0/caas/caas.min.css" rel="stylesheet" />
        <link
          href="https://p.ec-cloud.org/common/icons/0.4.0/community/community.min.css"
          rel="stylesheet"
        />
        <link
          href="https://p.ec-cloud.org/common/icons/0.4.0/fline/fline.min.css"
          rel="stylesheet"
        />
        <link
          href="https://p.ec-cloud.org/common/icons/0.4.0/decomais/decomais.min.css"
          rel="stylesheet"
        />
        <link
          href="https://p.ec-cloud.org/aline/components/algolia-search/0.74.0/algolia-search_nl-be.min.css"
          rel="stylesheet"
        />
        <link
          href="https://p.ec-cloud.org/aline/components/feom-header/0.40.0/feom-header_nl-be.min.css"
          rel="stylesheet"
        />
        <link
          href="https://p.ec-cloud.org/aline/components/welcome-banner/0.10.0/welcome-banner_nl-be.min.css"
          rel="stylesheet"
        />
        <link
          href="https://p.ec-cloud.org/aline/components/welcome-banner-media/0.14.0/welcome-banner-media_nl-be.min.css"
          rel="stylesheet"
        />
        <link
          href="https://p.ec-cloud.org/aline/components/welcome-banner-media-item/0.12.0/welcome-banner-media-item_nl-be.min.css"
          rel="stylesheet"
        />
        <link
          href="https://p.ec-cloud.org/aline/components/welcome-banner-content/0.9.0/welcome-banner-content_nl-be.min.css"
          rel="stylesheet"
        />
        <link
          href="https://p.ec-cloud.org/aline/components/welcome-banner-content-item/0.8.0/welcome-banner-content-item_nl-be.min.css"
          rel="stylesheet"
        />
        <link
          href="https://p.ec-cloud.org/aline/components/welcome-banner-links/0.18.0/welcome-banner-links_nl-be.min.css"
          rel="stylesheet"
        />
        <link
          rel="preload"
          href="https://p.ec-cloud.org/aline/components/save-and-share/0.59.0/save-and-share_nl-be.min.css"
          as="style"
        />
        <noscript>
          <link
            rel="stylesheet"
            href="https://p.ec-cloud.org/aline/components/save-and-share/0.59.0/save-and-share_nl-be.min.css"
          />
        </noscript>
        <link
          href="https://p.ec-cloud.org/aline/components/spotlight-panel/0.32.0/spotlight-panel_nl-be.min.css"
          rel="stylesheet"
        />
        <link
          href="https://p.ec-cloud.org/aline/components/spotlight-card/0.32.0/spotlight-card_nl-be.min.css"
          rel="stylesheet"
        />
        <link
          href="https://p.ec-cloud.org/aline/components/tools-panel/0.41.0/tools-panel_nl-be.min.css"
          rel="stylesheet"
        />
        <link
          href="https://p.ec-cloud.org/aline/components/magazines-panel/0.14.0/magazines-panel_nl-be.min.css"
          rel="stylesheet"
        />
        <link
          href="https://p.ec-cloud.org/aline/components/magazines-panel-card-item/0.11.0/magazines-panel-card-item_nl-be.min.css"
          rel="stylesheet"
        />
        <link
          rel="preload"
          href="https://p.ec-cloud.org/aline/components/special-campaign/0.27.0/special-campaign_nl-be.min.css"
          as="style"
        />
        <noscript>
          <link
            rel="stylesheet"
            href="https://p.ec-cloud.org/aline/components/special-campaign/0.27.0/special-campaign_nl-be.min.css"
          />
        </noscript>
        <link
          rel="preload"
          href="https://p.ec-cloud.org/aline/components/recommended/0.26.0/recommended_nl-be.min.css"
          as="style"
        />
        <noscript>
          <link
            rel="stylesheet"
            href="https://p.ec-cloud.org/aline/components/recommended/0.26.0/recommended_nl-be.min.css"
          />
        </noscript>
        <link
          rel="preload"
          href="https://p.ec-cloud.org/conversion/aline/components/offer-cards/0.11.0/offer-cards_nl-be.min.css"
          as="style"
        />
        <noscript>
          <link
            rel="stylesheet"
            href="https://p.ec-cloud.org/conversion/aline/components/offer-cards/0.11.0/offer-cards_nl-be.min.css"
          />
        </noscript>
        <link
          href="https://p.ec-cloud.org/aline/components/our-services/0.23.0/our-services_nl-be.min.css"
          rel="stylesheet"
        />
        <link
          rel="preload"
          href="https://p.ec-cloud.org/aline/components/overlay/0.29.0/overlay_nl-be.min.css"
          as="style"
        />
        <noscript>
          <link
            rel="stylesheet"
            href="https://p.ec-cloud.org/aline/components/overlay/0.29.0/overlay_nl-be.min.css"
          />
        </noscript>
        <link
          rel="preload"
          href="https://p.ec-cloud.org/aline/components/footer-2/0.34.0/footer_nl-be.min.css"
          as="style"
        />
        <noscript>
          <link
            rel="stylesheet"
            href="https://p.ec-cloud.org/aline/components/footer-2/0.34.0/footer_nl-be.min.css"
          />
        </noscript>
        <link
          href="https://p.ec-cloud.org/conversion/aline/components/sticky-banner-footer/0.5.0/sticky-banner-footer_nl-be.min.css"
          rel="stylesheet"
        />
        <link
          href="https://p.ec-cloud.org/aline/components/authentication-callout/0.39.0/authentication-callout_nl-be.min.css"
          rel="stylesheet"
        />
        <link
          href="https://p.ec-cloud.org/aline/components/authentication/0.24.0/authentication_nl-be.min.css"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://p.ec-cloud.org/aline/components/layout/0.84.0/forms_nl-be.min.css"
          as="style"
        />
        <noscript>
          <link
            rel="stylesheet"
            href="https://p.ec-cloud.org/aline/components/layout/0.84.0/forms_nl-be.min.css"
          />
        </noscript>
        <script
          async
          type="text/plain"
          src="//tglyr.co/latest.js?n=o"
          className="optanon-category-C0003"
        ></script>
        <style jsx>{`
          .rte-align-center {
            text-align: center;
            align-content: center;
            align-items: center;
          }
        `}</style>
      </Head>

      {/* root placeholder for the app, which we add components to using route data */}
      <div className={mainClassPageEditing}>
        <header className={`FEOMHeader ${isFixed ? 'is-fixed' : ''}`}>
          {route && <Placeholder name="headless-header" rendering={route} />}
        </header>
        <main role="main" id="main" style={{ marginLeft: '30px', marginRight: '30px' }}>
          <div id="content" style={{ paddingTop: `${isFixed ? '' : '100px'}` }}>
            {route && <Placeholder name="headless-main" rendering={route} />}
          </div>
        </main>
        <footer>
          <div id="footer">{route && <Placeholder name="headless-footer" rendering={route} />}</div>
        </footer>
      </div>
      <div
        id="f7cfc672-78d9-4306-a1b4-2870ccebcbc3"
        className="sticky-banner-footer mobile-only hidden"
        data-selector="sticky-banner-footer"
        data-value=""
      >
        <div className="bannerContent">
          <div className="hidden bannerContentHidden">
            <div className="bannerContentHiddenTitle stronger">
              Kies deze airfryer of een van de 150 andere cadeau&quot;s
            </div>
            <Link
              href="https://ontdek.test-aankoop.be/2023/newmarketplace?prm_id_c=MOBBAN1N&cop_id_c=Smartphone&par_id_c=SubscribeButton&server=flbk "
              target=""
            ></Link>
          </div>
          <div className="bannerContentToggler">
            <i className="icon-chevron-up" />
          </div>
          <div className="bannerContentMain">
            <div className="bannerContentMainActions">
              <div className="bannerContentMainActionsLeft" />
              <div className="bannerContentMainActionsCenter">
                <div>
                  <Link
                    href="https://ontdek.test-aankoop.be/2023/newmarketplace?prm_id_c=MOBBAN1N&cop_id_c=Smartphone&par_id_c=SubscribeButton&server=flbk "
                    target=""
                    className="btn btn--pill"
                  >
                    WORD LID
                  </Link>
                </div>
              </div>
              <div className="bannerContentMainActionsRight">
                <div className="bannerContentMainActionsClose hidden">
                  <i className="icon-x" />
                </div>
              </div>
            </div>
            <div className="bannerContentMainCaption uppercase">Ontdek Testaankoop voor €2</div>
          </div>
        </div>
      </div>
      <div className="hidden">
        <div
          id="aline-authentication-modal"
          className="authentication mpf-hide popup"
          data-plugin="iframeAuthentication"
          data-a_theme="aline"
          data-safaricheckanddisable="false"
          data-thirdpartycookiescheck="false"
        >
          <div className="popup__inner popup--large relative">
            <div className="waiting" />
            <iframe
              data-selector="aline-authentication-modal-iframe"
              frameBorder={0}
              height={600}
              style={{ visibility: 'hidden' }}
            />
          </div>
        </div>
      </div>
      <input
        id="errorMessage"
        hidden
        defaultValue="Het spijt ons, dit onderdeel kon niet geladen worden."
        data-elementload="elementload_error"
      />
      {/* temporary fix for the misalignment of the Table of Contents circles */}
      <style
        dangerouslySetInnerHTML={{
          __html:
            '\n#table-of-content ul.list-inline.no-margin {\n    padding-left: 0;\n    margin: 0 !important;\n    padding-top: 15px;\n}\n',
        }}
      />
      {/* Fix for the misalignment of the Authors list pipes on the articles */}
      <style
        type="text/css"
        dangerouslySetInnerHTML={{
          __html:
            '\n.piped-list__item strong, .content-lede__info .piped-list__item.strong{\nwhite-space:normal;\n}\n.content-lede__info ul.piped-list.right {width: 100%; text-align: right;}\n',
        }}
      />
      <style
        dangerouslySetInnerHTML={{
          __html:
            ' \n.component-detail-header__shortcuts--icons .specialist-icon {background: rgb(191,1,111);background: linear-gradient(0deg, rgba(191,1,111,1) 50%, rgba(251,86,40,1) 50%);height: 2.5rem !important;border-radius: 100%;}\n.collapsible-box__head--icon.specialist-icon {width: 3rem !important;height: 3rem !important;background: rgb(191,1,111);background: linear-gradient(0deg, rgba(191,1,111,1) 50%, rgba(251,86,40,1) 50%);border-radius: 100%;}\n\n.popup button.icon-x.mfp-close:before {top: 0.2rem;}\n',
        }}
      />
      <style
        dangerouslySetInnerHTML={{
          __html:
            '\n.compare-table__cell--populated .healthy-scale {display: inline-block;align-items: center;padding-right: 0.5rem;cursor: pointer;} \n\n.compare-table__cell--populated .healthy-scale--1, .compare-table__cell--populated .healthy-scale--2, .compare-table__cell--populated .healthy-scale--3, .compare-table__cell--populated .healthy-scale--4, .compare-table__cell--populated .healthy-scale--5 {width: 5rem;display: inline-block;}\n\n.compare-table__cell--populated .healthy-scale--1--score, .compare-table__cell--populated .healthy-scale--2--score, .compare-table__cell--populated .healthy-scale--3--score, .compare-table__cell--populated .healthy-scale--4--score, .compare-table__cell--populated .healthy-scale--5--score {font-size: 2.5rem;}\n\n.filters-container .filters_button .btn--filters { text-transform: none !important; }\n',
        }}
      />
      <style
        dangerouslySetInnerHTML={{
          __html:
            '\n.icon-stars--0, .icon-stars--0-half, .icon-stars--1, .icon-stars--1-half, .icon-stars--2, .icon-stars--2-half, .icon-stars--3, .icon-stars--3-half, .icon-stars--4, .icon-stars--4-half, .icon-stars--5 { background-repeat: no-repeat !important; content: none !important;}\n\n.icon-stars--0{background-image:url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNy4yLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAzMTAuNCA1Ni44IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzMTAuNCA1Ni44OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZGlzcGxheTpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS1taXRlcmxpbWl0OjEwO30NCgkuc3Qxe2Rpc3BsYXk6bm9uZTtmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQ0KCS5zdDJ7ZGlzcGxheTpub25lO30NCgkuc3Qze2ZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9DQo8L3N0eWxlPg0KPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSIzMC41LC0yNDYuNCAyMy4zLC0yMjYuNCAxLjksLTIyNi40IDE5LjcsLTIxMy42IDEyLjUsLTE5MyAzMC41LC0yMDUuNCA0OC40LC0xOTMgNDEuMywtMjEzLjMgDQoJNTkuMiwtMjI2LjMgMzgsLTIyNi4zICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSI5Mi43LC0yNDYuNCA4NS40LC0yMjYuNCA2NCwtMjI2LjQgODEuOCwtMjEzLjYgNzQuNiwtMTkzIDkyLjcsLTIwNS40IDExMC42LC0xOTMgMTAzLjQsLTIxMy4zIA0KCTEyMS4zLC0yMjYuMyAxMDAuMSwtMjI2LjMgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjE1NC44LC0yNDYuNCAxNDcuNSwtMjI2LjQgMTI2LjEsLTIyNi40IDE0My45LC0yMTMuNiAxMzYuNywtMTkzIDE1NC44LC0yMDUuNCAxNzIuNywtMTkzIA0KCTE2NS41LC0yMTMuMyAxODMuNCwtMjI2LjMgMTYyLjIsLTIyNi4zICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSIyMTYuOSwtMjQ2LjQgMjA5LjYsLTIyNi40IDE4OC4yLC0yMjYuNCAyMDYuMSwtMjEzLjYgMTk4LjgsLTE5MyAyMTYuOSwtMjA1LjQgMjM0LjgsLTE5MyANCgkyMjcuNiwtMjEzLjMgMjQ1LjYsLTIyNi4zIDIyNC4zLC0yMjYuMyAiLz4NCjxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iMjc5LC0yNDYuNCAyNzEuNywtMjI2LjQgMjUwLjQsLTIyNi40IDI2OC4yLC0yMTMuNiAyNjEsLTE5MyAyNzksLTIwNS40IDI5Ni45LC0xOTMgMjg5LjgsLTIxMy4zIA0KCTMwNy43LC0yMjYuMyAyODYuNCwtMjI2LjMgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjMwLjUsLTE4NC42IDIzLjMsLTE2NC42IDEuOSwtMTY0LjYgMTkuNywtMTUxLjggMTIuNSwtMTMxLjIgMzAuNSwtMTQzLjYgNDguNCwtMTMxLjIgNDEuMywtMTUxLjYgDQoJNTkuMiwtMTY0LjUgMzgsLTE2NC41ICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSI5Mi43LC0xODQuNiA4NS40LC0xNjQuNiA2NCwtMTY0LjYgODEuOCwtMTUxLjggNzQuNiwtMTMxLjIgOTIuNywtMTQzLjYgMTEwLjYsLTEzMS4yIDEwMy40LC0xNTEuNiANCgkxMjEuMywtMTY0LjUgMTAwLjEsLTE2NC41ICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSIxNTQuOCwtMTg0LjYgMTQ3LjUsLTE2NC42IDEyNi4xLC0xNjQuNiAxNDMuOSwtMTUxLjggMTM2LjcsLTEzMS4yIDE1NC44LC0xNDMuNiAxNzIuNywtMTMxLjIgDQoJMTY1LjUsLTE1MS42IDE4My40LC0xNjQuNSAxNjIuMiwtMTY0LjUgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjIxNi45LC0xODQuNiAyMDkuNiwtMTY0LjYgMTg4LjIsLTE2NC42IDIwNi4xLC0xNTEuOCAxOTguOCwtMTMxLjIgMjE2LjksLTE0My42IDIzNC44LC0xMzEuMiANCgkyMjcuNiwtMTUxLjYgMjQ1LjYsLTE2NC41IDIyNC4zLC0xNjQuNSAiLz4NCjxwb2x5Z29uIGNsYXNzPSJzdDEiIHBvaW50cz0iMjc5LC0xODQuNiAyNzEuNywtMTY0LjYgMjUwLjQsLTE2NC42IDI2OC4yLC0xNTEuOCAyNjEsLTEzMS4yIDI3OSwtMTQzLjYgMjk2LjksLTEzMS4yIDI4OS44LC0xNTEuNiANCgkzMDcuNywtMTY0LjUgMjg2LjQsLTE2NC41ICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSIzMC41LC0xMjIuMyAyMy4zLC0xMDIuMyAxLjksLTEwMi4zIDE5LjcsLTg5LjUgMTIuNSwtNjguOSAzMC41LC04MS4zIDQ4LjQsLTY4LjkgNDEuMywtODkuMyANCgk1OS4yLC0xMDIuMiAzOCwtMTAyLjIgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjkyLjcsLTEyMi4zIDg1LjQsLTEwMi4zIDY0LC0xMDIuMyA4MS44LC04OS41IDc0LjYsLTY4LjkgOTIuNywtODEuMyAxMTAuNiwtNjguOSAxMDMuNCwtODkuMyANCgkxMjEuMywtMTAyLjIgMTAwLjEsLTEwMi4yICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSIxNTQuOCwtMTIyLjMgMTQ3LjUsLTEwMi4zIDEyNi4xLC0xMDIuMyAxNDMuOSwtODkuNSAxMzYuNywtNjguOSAxNTQuOCwtODEuMyAxNzIuNywtNjguOSAxNjUuNSwtODkuMyANCgkxODMuNCwtMTAyLjIgMTYyLjIsLTEwMi4yICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSIyMTYuOSwtMTIyLjMgMjA5LjYsLTEwMi4zIDE4OC4yLC0xMDIuMyAyMDYuMSwtODkuNSAxOTguOCwtNjguOSAyMTYuOSwtODEuMyAyMzQuOCwtNjguOSAyMjcuNiwtODkuMyANCgkyNDUuNiwtMTAyLjIgMjI0LjMsLTEwMi4yICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSIyNzksLTEyMi4zIDI3MS43LC0xMDIuMyAyNTAuNCwtMTAyLjMgMjY4LjIsLTg5LjUgMjYxLC02OC45IDI3OSwtODEuMyAyOTYuOSwtNjguOSAyODkuOCwtODkuMyANCgkzMDcuNywtMTAyLjIgMjg2LjQsLTEwMi4yICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSIzMC41LC02MC44IDIzLjMsLTQwLjggMS45LC00MC44IDE5LjcsLTI4IDEyLjUsLTcuNCAzMC41LC0xOS44IDQ4LjQsLTcuNCA0MS4zLC0yNy43IDU5LjIsLTQwLjcgDQoJMzgsLTQwLjcgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjkyLjcsLTYwLjggODUuNCwtNDAuOCA2NCwtNDAuOCA4MS44LC0yOCA3NC42LC03LjQgOTIuNywtMTkuOCAxMTAuNiwtNy40IDEwMy40LC0yNy43IDEyMS4zLC00MC43IA0KCTEwMC4xLC00MC43ICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSIxNTQuOCwtNjAuOCAxNDcuNSwtNDAuOCAxMjYuMSwtNDAuOCAxNDMuOSwtMjggMTM2LjcsLTcuNCAxNTQuOCwtMTkuOCAxNzIuNywtNy40IDE2NS41LC0yNy43IA0KCTE4My40LC00MC43IDE2Mi4yLC00MC43ICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSIyMTYuOSwtNjAuOCAyMDkuNiwtNDAuOCAxODguMiwtNDAuOCAyMDYuMSwtMjggMTk4LjgsLTcuNCAyMTYuOSwtMTkuOCAyMzQuOCwtNy40IDIyNy42LC0yNy43IA0KCTI0NS42LC00MC43IDIyNC4zLC00MC43ICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSIyNzksLTYwLjggMjcxLjcsLTQwLjggMjUwLjQsLTQwLjggMjY4LjIsLTI4IDI2MSwtNy40IDI3OSwtMTkuOCAyOTYuOSwtNy40IDI4OS44LC0yNy43IDMwNy43LC00MC43IA0KCTI4Ni40LC00MC43ICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSIzMC41LDIgMjMuMywyMiAxLjksMjIgMTkuNywzNC44IDEyLjUsNTUuNCAzMC41LDQzIDQ4LjQsNTUuNCA0MS4zLDM1LjEgNTkuMiwyMi4xIDM4LDIyLjEgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QxIiBwb2ludHM9IjkyLjcsMiA4NS40LDIyIDY0LDIyIDgxLjgsMzQuOCA3NC42LDU1LjQgOTIuNyw0MyAxMTAuNiw1NS40IDEwMy40LDM1LjEgMTIxLjMsMjIuMSAxMDAuMSwyMi4xICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSIxNTQuOCwyIDE0Ny41LDIyIDEyNi4xLDIyIDE0My45LDM0LjggMTM2LjcsNTUuNCAxNTQuOCw0MyAxNzIuNyw1NS40IDE2NS41LDM1LjEgMTgzLjQsMjIuMSANCgkxNjIuMiwyMi4xICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSIyMTYuOSwyIDIwOS42LDIyIDE4OC4yLDIyIDIwNi4xLDM0LjggMTk4LjgsNTUuNCAyMTYuOSw0MyAyMzQuOCw1NS40IDIyNy42LDM1LjEgMjQ1LjYsMjIuMSANCgkyMjQuMywyMi4xICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSIyNzksMiAyNzEuNywyMiAyNTAuNCwyMiAyNjguMiwzNC44IDI2MSw1NS40IDI3OSw0MyAyOTYuOSw1NS40IDI4OS44LDM1LjEgMzA3LjcsMjIuMSAyODYuNCwyMi4xICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MiIgcG9pbnRzPSIzMC41LDY5LjYgMjMuMyw4OS42IDEuOSw4OS41IDE5LjcsMTAyLjQgMTIuNSwxMjMgMzAuNSwxMTAuNSA0OC4xLDEyMiA0MS4zLDEwMi42IDU5LjIsODkuNyAzOCw4OS43IA0KCSIvPg0KPGNpcmNsZSBjbGFzcz0ic3QzIiBjeD0iMzAuNSIgY3k9IjI4LjciIHI9IjI2LjciLz4NCjxjaXJjbGUgY2xhc3M9InN0MyIgY3g9IjkyLjciIGN5PSIyOC43IiByPSIyNi43Ii8+DQo8Y2lyY2xlIGNsYXNzPSJzdDMiIGN4PSIxNTUuOCIgY3k9IjI4LjciIHI9IjI2LjciLz4NCjxjaXJjbGUgY2xhc3M9InN0MyIgY3g9IjIxNi45IiBjeT0iMjguNyIgcj0iMjYuNyIvPg0KPGVsbGlwc2UgdHJhbnNmb3JtPSJtYXRyaXgoMC4yMjk4IC0wLjk3MzIgMC45NzMyIDAuMjI5OCAxODYuOTY2NyAyOTMuNjQyNikiIGNsYXNzPSJzdDMiIGN4PSIyNzkiIGN5PSIyOC43IiByeD0iMjYuNyIgcnk9IjI2LjciLz4NCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0zMC41LDU1LjRjLTE0LjcsMC0yNi43LTEyLTI2LjctMjYuN1MxNS44LDIsMzAuNSwyVjU1LjR6Ii8+DQo8L3N2Zz4NCg==");}\n\n.icon-stars--0-half{background-image:url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNy4yLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAzMTAuNCA1Ni44IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzMTAuNCA1Ni44OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZGlzcGxheTpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS1taXRlcmxpbWl0OjEwO30NCgkuc3Qxe2Rpc3BsYXk6bm9uZTtmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQ0KCS5zdDJ7ZGlzcGxheTpub25lO30NCgkuc3Qze2ZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9DQoJLnN0NHtzdHJva2U6IzAwMDAwMDtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9DQo8L3N0eWxlPg0KPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSIzMC41LC0yNDYuNCAyMy4zLC0yMjYuNCAxLjksLTIyNi40IDE5LjcsLTIxMy42IDEyLjUsLTE5MyAzMC41LC0yMDUuNCA0OC40LC0xOTMgNDEuMywtMjEzLjMgDQoJNTkuMiwtMjI2LjMgMzgsLTIyNi4zICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSI5Mi43LC0yNDYuNCA4NS40LC0yMjYuNCA2NCwtMjI2LjQgODEuOCwtMjEzLjYgNzQuNiwtMTkzIDkyLjcsLTIwNS40IDExMC42LC0xOTMgMTAzLjQsLTIxMy4zIA0KCTEyMS4zLC0yMjYuMyAxMDAuMSwtMjI2LjMgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjE1NC44LC0yNDYuNCAxNDcuNSwtMjI2LjQgMTI2LjEsLTIyNi40IDE0My45LC0yMTMuNiAxMzYuNywtMTkzIDE1NC44LC0yMDUuNCAxNzIuNywtMTkzIA0KCTE2NS41LC0yMTMuMyAxODMuNCwtMjI2LjMgMTYyLjIsLTIyNi4zICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSIyMTYuOSwtMjQ2LjQgMjA5LjYsLTIyNi40IDE4OC4yLC0yMjYuNCAyMDYuMSwtMjEzLjYgMTk4LjgsLTE5MyAyMTYuOSwtMjA1LjQgMjM0LjgsLTE5MyANCgkyMjcuNiwtMjEzLjMgMjQ1LjYsLTIyNi4zIDIyNC4zLC0yMjYuMyAiLz4NCjxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iMjc5LC0yNDYuNCAyNzEuNywtMjI2LjQgMjUwLjQsLTIyNi40IDI2OC4yLC0yMTMuNiAyNjEsLTE5MyAyNzksLTIwNS40IDI5Ni45LC0xOTMgMjg5LjgsLTIxMy4zIA0KCTMwNy43LC0yMjYuMyAyODYuNCwtMjI2LjMgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjMwLjUsLTE4NC42IDIzLjMsLTE2NC42IDEuOSwtMTY0LjYgMTkuNywtMTUxLjggMTIuNSwtMTMxLjIgMzAuNSwtMTQzLjYgNDguNCwtMTMxLjIgNDEuMywtMTUxLjYgDQoJNTkuMiwtMTY0LjUgMzgsLTE2NC41ICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSI5Mi43LC0xODQuNiA4NS40LC0xNjQuNiA2NCwtMTY0LjYgODEuOCwtMTUxLjggNzQuNiwtMTMxLjIgOTIuNywtMTQzLjYgMTEwLjYsLTEzMS4yIDEwMy40LC0xNTEuNiANCgkxMjEuMywtMTY0LjUgMTAwLjEsLTE2NC41ICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSIxNTQuOCwtMTg0LjYgMTQ3LjUsLTE2NC42IDEyNi4xLC0xNjQuNiAxNDMuOSwtMTUxLjggMTM2LjcsLTEzMS4yIDE1NC44LC0xNDMuNiAxNzIuNywtMTMxLjIgDQoJMTY1LjUsLTE1MS42IDE4My40LC0xNjQuNSAxNjIuMiwtMTY0LjUgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjIxNi45LC0xODQuNiAyMDkuNiwtMTY0LjYgMTg4LjIsLTE2NC42IDIwNi4xLC0xNTEuOCAxOTguOCwtMTMxLjIgMjE2LjksLTE0My42IDIzNC44LC0xMzEuMiANCgkyMjcuNiwtMTUxLjYgMjQ1LjYsLTE2NC41IDIyNC4zLC0xNjQuNSAiLz4NCjxwb2x5Z29uIGNsYXNzPSJzdDEiIHBvaW50cz0iMjc5LC0xODQuNiAyNzEuNywtMTY0LjYgMjUwLjQsLTE2NC42IDI2OC4yLC0xNTEuOCAyNjEsLTEzMS4yIDI3OSwtMTQzLjYgMjk2LjksLTEzMS4yIDI4OS44LC0xNTEuNiANCgkzMDcuNywtMTY0LjUgMjg2LjQsLTE2NC41ICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSIzMC41LC0xMjIuMyAyMy4zLC0xMDIuMyAxLjksLTEwMi4zIDE5LjcsLTg5LjUgMTIuNSwtNjguOSAzMC41LC04MS4zIDQ4LjQsLTY4LjkgNDEuMywtODkuMyANCgk1OS4yLC0xMDIuMiAzOCwtMTAyLjIgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjkyLjcsLTEyMi4zIDg1LjQsLTEwMi4zIDY0LC0xMDIuMyA4MS44LC04OS41IDc0LjYsLTY4LjkgOTIuNywtODEuMyAxMTAuNiwtNjguOSAxMDMuNCwtODkuMyANCgkxMjEuMywtMTAyLjIgMTAwLjEsLTEwMi4yICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSIxNTQuOCwtMTIyLjMgMTQ3LjUsLTEwMi4zIDEyNi4xLC0xMDIuMyAxNDMuOSwtODkuNSAxMzYuNywtNjguOSAxNTQuOCwtODEuMyAxNzIuNywtNjguOSAxNjUuNSwtODkuMyANCgkxODMuNCwtMTAyLjIgMTYyLjIsLTEwMi4yICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSIyMTYuOSwtMTIyLjMgMjA5LjYsLTEwMi4zIDE4OC4yLC0xMDIuMyAyMDYuMSwtODkuNSAxOTguOCwtNjguOSAyMTYuOSwtODEuMyAyMzQuOCwtNjguOSAyMjcuNiwtODkuMyANCgkyNDUuNiwtMTAyLjIgMjI0LjMsLTEwMi4yICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSIyNzksLTEyMi4zIDI3MS43LC0xMDIuMyAyNTAuNCwtMTAyLjMgMjY4LjIsLTg5LjUgMjYxLC02OC45IDI3OSwtODEuMyAyOTYuOSwtNjguOSAyODkuOCwtODkuMyANCgkzMDcuNywtMTAyLjIgMjg2LjQsLTEwMi4yICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSIzMC41LC02MC44IDIzLjMsLTQwLjggMS45LC00MC44IDE5LjcsLTI4IDEyLjUsLTcuNCAzMC41LC0xOS44IDQ4LjQsLTcuNCA0MS4zLC0yNy43IDU5LjIsLTQwLjcgDQoJMzgsLTQwLjcgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjkyLjcsLTYwLjggODUuNCwtNDAuOCA2NCwtNDAuOCA4MS44LC0yOCA3NC42LC03LjQgOTIuNywtMTkuOCAxMTAuNiwtNy40IDEwMy40LC0yNy43IDEyMS4zLC00MC43IA0KCTEwMC4xLC00MC43ICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSIxNTQuOCwtNjAuOCAxNDcuNSwtNDAuOCAxMjYuMSwtNDAuOCAxNDMuOSwtMjggMTM2LjcsLTcuNCAxNTQuOCwtMTkuOCAxNzIuNywtNy40IDE2NS41LC0yNy43IA0KCTE4My40LC00MC43IDE2Mi4yLC00MC43ICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSIyMTYuOSwtNjAuOCAyMDkuNiwtNDAuOCAxODguMiwtNDAuOCAyMDYuMSwtMjggMTk4LjgsLTcuNCAyMTYuOSwtMTkuOCAyMzQuOCwtNy40IDIyNy42LC0yNy43IA0KCTI0NS42LC00MC43IDIyNC4zLC00MC43ICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSIyNzksLTYwLjggMjcxLjcsLTQwLjggMjUwLjQsLTQwLjggMjY4LjIsLTI4IDI2MSwtNy40IDI3OSwtMTkuOCAyOTYuOSwtNy40IDI4OS44LC0yNy43IDMwNy43LC00MC43IA0KCTI4Ni40LC00MC43ICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSIzMC41LDIgMjMuMywyMiAxLjksMjIgMTkuNywzNC44IDEyLjUsNTUuNCAzMC41LDQzIDQ4LjQsNTUuNCA0MS4zLDM1LjEgNTkuMiwyMi4xIDM4LDIyLjEgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QxIiBwb2ludHM9IjkyLjcsMiA4NS40LDIyIDY0LDIyIDgxLjgsMzQuOCA3NC42LDU1LjQgOTIuNyw0MyAxMTAuNiw1NS40IDEwMy40LDM1LjEgMTIxLjMsMjIuMSAxMDAuMSwyMi4xICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSIxNTQuOCwyIDE0Ny41LDIyIDEyNi4xLDIyIDE0My45LDM0LjggMTM2LjcsNTUuNCAxNTQuOCw0MyAxNzIuNyw1NS40IDE2NS41LDM1LjEgMTgzLjQsMjIuMSANCgkxNjIuMiwyMi4xICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSIyMTYuOSwyIDIwOS42LDIyIDE4OC4yLDIyIDIwNi4xLDM0LjggMTk4LjgsNTUuNCAyMTYuOSw0MyAyMzQuOCw1NS40IDIyNy42LDM1LjEgMjQ1LjYsMjIuMSANCgkyMjQuMywyMi4xICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSIyNzksMiAyNzEuNywyMiAyNTAuNCwyMiAyNjguMiwzNC44IDI2MSw1NS40IDI3OSw0MyAyOTYuOSw1NS40IDI4OS44LDM1LjEgMzA3LjcsMjIuMSAyODYuNCwyMi4xICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MiIgcG9pbnRzPSIzMC41LDY5LjYgMjMuMyw4OS42IDEuOSw4OS41IDE5LjcsMTAyLjQgMTIuNSwxMjMgMzAuNSwxMTAuNSA0OC4xLDEyMiA0MS4zLDEwMi42IDU5LjIsODkuNyAzOCw4OS43IA0KCSIvPg0KPGNpcmNsZSBjbGFzcz0ic3QzIiBjeD0iMzAuNSIgY3k9IjI4LjciIHI9IjI2LjciLz4NCjxjaXJjbGUgY2xhc3M9InN0MyIgY3g9IjkyLjciIGN5PSIyOC43IiByPSIyNi43Ii8+DQo8Y2lyY2xlIGNsYXNzPSJzdDMiIGN4PSIxNTUuOCIgY3k9IjI4LjciIHI9IjI2LjciLz4NCjxjaXJjbGUgY2xhc3M9InN0MyIgY3g9IjIxNi45IiBjeT0iMjguNyIgcj0iMjYuNyIvPg0KPGVsbGlwc2UgdHJhbnNmb3JtPSJtYXRyaXgoMC4yMjk4IC0wLjk3MzIgMC45NzMyIDAuMjI5OCAxODYuOTY2NyAyOTMuNjQyNikiIGNsYXNzPSJzdDMiIGN4PSIyNzkiIGN5PSIyOC43IiByeD0iMjYuNyIgcnk9IjI2LjciLz4NCjxwYXRoIGNsYXNzPSJzdDQiIGQ9Ik0zMC41LDU1LjRjLTE0LjcsMC0yNi43LTEyLTI2LjctMjYuN1MxNS44LDIsMzAuNSwyVjU1LjR6Ii8+DQo8L3N2Zz4NCg==");}\n\n.icon-stars--1{background-image:url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNy4yLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAzMTAuNCA1Ni44IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzMTAuNCA1Ni44OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZGlzcGxheTpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS1taXRlcmxpbWl0OjEwO30NCgkuc3Qxe2Rpc3BsYXk6bm9uZTtmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQ0KCS5zdDJ7ZGlzcGxheTpub25lO30NCgkuc3Qze3N0cm9rZTojMDAwMDAwO3N0cm9rZS1taXRlcmxpbWl0OjEwO30NCgkuc3Q0e2ZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9DQo8L3N0eWxlPg0KPGltYWdlIHN0eWxlPSJkaXNwbGF5Om5vbmU7b3ZlcmZsb3c6dmlzaWJsZTtlbmFibGUtYmFja2dyb3VuZDpuZXcgICAgOyIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiB4bGluazpocmVmPSI1RTZEMTM3Qy5wbmciICB0cmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAxIDUuNTUzMiAzLjgyOTgpIj4NCjwvaW1hZ2U+DQo8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjMwLjUsLTI0Ni40IDIzLjMsLTIyNi40IDEuOSwtMjI2LjQgMTkuNywtMjEzLjYgMTIuNSwtMTkzIDMwLjUsLTIwNS40IDQ4LjQsLTE5MyA0MS4zLC0yMTMuMyANCgk1OS4yLC0yMjYuMyAzOCwtMjI2LjMgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjkyLjcsLTI0Ni40IDg1LjQsLTIyNi40IDY0LC0yMjYuNCA4MS44LC0yMTMuNiA3NC42LC0xOTMgOTIuNywtMjA1LjQgMTEwLjYsLTE5MyAxMDMuNCwtMjEzLjMgDQoJMTIxLjMsLTIyNi4zIDEwMC4xLC0yMjYuMyAiLz4NCjxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iMTU0LjgsLTI0Ni40IDE0Ny41LC0yMjYuNCAxMjYuMSwtMjI2LjQgMTQzLjksLTIxMy42IDEzNi43LC0xOTMgMTU0LjgsLTIwNS40IDE3Mi43LC0xOTMgDQoJMTY1LjUsLTIxMy4zIDE4My40LC0yMjYuMyAxNjIuMiwtMjI2LjMgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjIxNi45LC0yNDYuNCAyMDkuNiwtMjI2LjQgMTg4LjIsLTIyNi40IDIwNi4xLC0yMTMuNiAxOTguOCwtMTkzIDIxNi45LC0yMDUuNCAyMzQuOCwtMTkzIA0KCTIyNy42LC0yMTMuMyAyNDUuNiwtMjI2LjMgMjI0LjMsLTIyNi4zICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSIyNzksLTI0Ni40IDI3MS43LC0yMjYuNCAyNTAuNCwtMjI2LjQgMjY4LjIsLTIxMy42IDI2MSwtMTkzIDI3OSwtMjA1LjQgMjk2LjksLTE5MyAyODkuOCwtMjEzLjMgDQoJMzA3LjcsLTIyNi4zIDI4Ni40LC0yMjYuMyAiLz4NCjxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iMzAuNSwtMTg0LjYgMjMuMywtMTY0LjYgMS45LC0xNjQuNiAxOS43LC0xNTEuOCAxMi41LC0xMzEuMiAzMC41LC0xNDMuNiA0OC40LC0xMzEuMiA0MS4zLC0xNTEuNiANCgk1OS4yLC0xNjQuNSAzOCwtMTY0LjUgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjkyLjcsLTE4NC42IDg1LjQsLTE2NC42IDY0LC0xNjQuNiA4MS44LC0xNTEuOCA3NC42LC0xMzEuMiA5Mi43LC0xNDMuNiAxMTAuNiwtMTMxLjIgMTAzLjQsLTE1MS42IA0KCTEyMS4zLC0xNjQuNSAxMDAuMSwtMTY0LjUgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjE1NC44LC0xODQuNiAxNDcuNSwtMTY0LjYgMTI2LjEsLTE2NC42IDE0My45LC0xNTEuOCAxMzYuNywtMTMxLjIgMTU0LjgsLTE0My42IDE3Mi43LC0xMzEuMiANCgkxNjUuNSwtMTUxLjYgMTgzLjQsLTE2NC41IDE2Mi4yLC0xNjQuNSAiLz4NCjxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iMjE2LjksLTE4NC42IDIwOS42LC0xNjQuNiAxODguMiwtMTY0LjYgMjA2LjEsLTE1MS44IDE5OC44LC0xMzEuMiAyMTYuOSwtMTQzLjYgMjM0LjgsLTEzMS4yIA0KCTIyNy42LC0xNTEuNiAyNDUuNiwtMTY0LjUgMjI0LjMsLTE2NC41ICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSIyNzksLTE4NC42IDI3MS43LC0xNjQuNiAyNTAuNCwtMTY0LjYgMjY4LjIsLTE1MS44IDI2MSwtMTMxLjIgMjc5LC0xNDMuNiAyOTYuOSwtMTMxLjIgMjg5LjgsLTE1MS42IA0KCTMwNy43LC0xNjQuNSAyODYuNCwtMTY0LjUgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjMwLjUsLTEyMi4zIDIzLjMsLTEwMi4zIDEuOSwtMTAyLjMgMTkuNywtODkuNSAxMi41LC02OC45IDMwLjUsLTgxLjMgNDguNCwtNjguOSA0MS4zLC04OS4zIA0KCTU5LjIsLTEwMi4yIDM4LC0xMDIuMiAiLz4NCjxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iOTIuNywtMTIyLjMgODUuNCwtMTAyLjMgNjQsLTEwMi4zIDgxLjgsLTg5LjUgNzQuNiwtNjguOSA5Mi43LC04MS4zIDExMC42LC02OC45IDEwMy40LC04OS4zIA0KCTEyMS4zLC0xMDIuMiAxMDAuMSwtMTAyLjIgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjE1NC44LC0xMjIuMyAxNDcuNSwtMTAyLjMgMTI2LjEsLTEwMi4zIDE0My45LC04OS41IDEzNi43LC02OC45IDE1NC44LC04MS4zIDE3Mi43LC02OC45IDE2NS41LC04OS4zIA0KCTE4My40LC0xMDIuMiAxNjIuMiwtMTAyLjIgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QxIiBwb2ludHM9IjIxNi45LC0xMjIuMyAyMDkuNiwtMTAyLjMgMTg4LjIsLTEwMi4zIDIwNi4xLC04OS41IDE5OC44LC02OC45IDIxNi45LC04MS4zIDIzNC44LC02OC45IDIyNy42LC04OS4zIA0KCTI0NS42LC0xMDIuMiAyMjQuMywtMTAyLjIgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QxIiBwb2ludHM9IjI3OSwtMTIyLjMgMjcxLjcsLTEwMi4zIDI1MC40LC0xMDIuMyAyNjguMiwtODkuNSAyNjEsLTY4LjkgMjc5LC04MS4zIDI5Ni45LC02OC45IDI4OS44LC04OS4zIA0KCTMwNy43LC0xMDIuMiAyODYuNCwtMTAyLjIgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjMwLjUsLTYwLjggMjMuMywtNDAuOCAxLjksLTQwLjggMTkuNywtMjggMTIuNSwtNy40IDMwLjUsLTE5LjggNDguNCwtNy40IDQxLjMsLTI3LjcgNTkuMiwtNDAuNyANCgkzOCwtNDAuNyAiLz4NCjxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iOTIuNywtNjAuOCA4NS40LC00MC44IDY0LC00MC44IDgxLjgsLTI4IDc0LjYsLTcuNCA5Mi43LC0xOS44IDExMC42LC03LjQgMTAzLjQsLTI3LjcgMTIxLjMsLTQwLjcgDQoJMTAwLjEsLTQwLjcgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QxIiBwb2ludHM9IjE1NC44LC02MC44IDE0Ny41LC00MC44IDEyNi4xLC00MC44IDE0My45LC0yOCAxMzYuNywtNy40IDE1NC44LC0xOS44IDE3Mi43LC03LjQgMTY1LjUsLTI3LjcgDQoJMTgzLjQsLTQwLjcgMTYyLjIsLTQwLjcgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QxIiBwb2ludHM9IjIxNi45LC02MC44IDIwOS42LC00MC44IDE4OC4yLC00MC44IDIwNi4xLC0yOCAxOTguOCwtNy40IDIxNi45LC0xOS44IDIzNC44LC03LjQgMjI3LjYsLTI3LjcgDQoJMjQ1LjYsLTQwLjcgMjI0LjMsLTQwLjcgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QxIiBwb2ludHM9IjI3OSwtNjAuOCAyNzEuNywtNDAuOCAyNTAuNCwtNDAuOCAyNjguMiwtMjggMjYxLC03LjQgMjc5LC0xOS44IDI5Ni45LC03LjQgMjg5LjgsLTI3LjcgMzA3LjcsLTQwLjcgDQoJMjg2LjQsLTQwLjcgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjMwLjUsMiAyMy4zLDIyIDEuOSwyMiAxOS43LDM0LjggMTIuNSw1NS40IDMwLjUsNDMgNDguNCw1NS40IDQxLjMsMzUuMSA1OS4yLDIyLjEgMzgsMjIuMSAiLz4NCjxwb2x5Z29uIGNsYXNzPSJzdDEiIHBvaW50cz0iOTIuNywyIDg1LjQsMjIgNjQsMjIgODEuOCwzNC44IDc0LjYsNTUuNCA5Mi43LDQzIDExMC42LDU1LjQgMTAzLjQsMzUuMSAxMjEuMywyMi4xIDEwMC4xLDIyLjEgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QxIiBwb2ludHM9IjE1NC44LDIgMTQ3LjUsMjIgMTI2LjEsMjIgMTQzLjksMzQuOCAxMzYuNyw1NS40IDE1NC44LDQzIDE3Mi43LDU1LjQgMTY1LjUsMzUuMSAxODMuNCwyMi4xIA0KCTE2Mi4yLDIyLjEgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QxIiBwb2ludHM9IjIxNi45LDIgMjA5LjYsMjIgMTg4LjIsMjIgMjA2LjEsMzQuOCAxOTguOCw1NS40IDIxNi45LDQzIDIzNC44LDU1LjQgMjI3LjYsMzUuMSAyNDUuNiwyMi4xIA0KCTIyNC4zLDIyLjEgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QxIiBwb2ludHM9IjI3OSwyIDI3MS43LDIyIDI1MC40LDIyIDI2OC4yLDM0LjggMjYxLDU1LjQgMjc5LDQzIDI5Ni45LDU1LjQgMjg5LjgsMzUuMSAzMDcuNywyMi4xIDI4Ni40LDIyLjEgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QyIiBwb2ludHM9IjMwLjUsNjkuNiAyMy4zLDg5LjYgMS45LDg5LjUgMTkuNywxMDIuNCAxMi41LDEyMyAzMC41LDExMC41IDQ4LjEsMTIyIDQxLjMsMTAyLjYgNTkuMiw4OS43IDM4LDg5LjcgDQoJIi8+DQo8Y2lyY2xlIGNsYXNzPSJzdDMiIGN4PSIzMC41IiBjeT0iMjguNyIgcj0iMjYuNyIvPg0KPGNpcmNsZSBjbGFzcz0ic3Q0IiBjeD0iOTIuNyIgY3k9IjI4LjciIHI9IjI2LjciLz4NCjxjaXJjbGUgY2xhc3M9InN0NCIgY3g9IjE1NS44IiBjeT0iMjguNyIgcj0iMjYuNyIvPg0KPGNpcmNsZSBjbGFzcz0ic3Q0IiBjeD0iMjE2LjkiIGN5PSIyOC43IiByPSIyNi43Ii8+DQo8Y2lyY2xlIGNsYXNzPSJzdDQiIGN4PSIyNzkiIGN5PSIyOC43IiByPSIyNi43Ii8+DQo8L3N2Zz4NCg==");}\n\n.icon-stars--1-half{background-image:url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNy4yLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAzMTAuNCA1Ni44IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzMTAuNCA1Ni44OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZGlzcGxheTpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS1taXRlcmxpbWl0OjEwO30NCgkuc3Qxe2Rpc3BsYXk6bm9uZTtmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQ0KCS5zdDJ7ZGlzcGxheTpub25lO30NCgkuc3Qze3N0cm9rZTojMDAwMDAwO3N0cm9rZS1taXRlcmxpbWl0OjEwO30NCgkuc3Q0e2ZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9DQo8L3N0eWxlPg0KPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSIzMC41LC0yNDYuNCAyMy4zLC0yMjYuNCAxLjksLTIyNi40IDE5LjcsLTIxMy42IDEyLjUsLTE5MyAzMC41LC0yMDUuNCA0OC40LC0xOTMgNDEuMywtMjEzLjMgDQoJNTkuMiwtMjI2LjMgMzgsLTIyNi4zICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSI5Mi43LC0yNDYuNCA4NS40LC0yMjYuNCA2NCwtMjI2LjQgODEuOCwtMjEzLjYgNzQuNiwtMTkzIDkyLjcsLTIwNS40IDExMC42LC0xOTMgMTAzLjQsLTIxMy4zIA0KCTEyMS4zLC0yMjYuMyAxMDAuMSwtMjI2LjMgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjE1NC44LC0yNDYuNCAxNDcuNSwtMjI2LjQgMTI2LjEsLTIyNi40IDE0My45LC0yMTMuNiAxMzYuNywtMTkzIDE1NC44LC0yMDUuNCAxNzIuNywtMTkzIA0KCTE2NS41LC0yMTMuMyAxODMuNCwtMjI2LjMgMTYyLjIsLTIyNi4zICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSIyMTYuOSwtMjQ2LjQgMjA5LjYsLTIyNi40IDE4OC4yLC0yMjYuNCAyMDYuMSwtMjEzLjYgMTk4LjgsLTE5MyAyMTYuOSwtMjA1LjQgMjM0LjgsLTE5MyANCgkyMjcuNiwtMjEzLjMgMjQ1LjYsLTIyNi4zIDIyNC4zLC0yMjYuMyAiLz4NCjxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iMjc5LC0yNDYuNCAyNzEuNywtMjI2LjQgMjUwLjQsLTIyNi40IDI2OC4yLC0yMTMuNiAyNjEsLTE5MyAyNzksLTIwNS40IDI5Ni45LC0xOTMgMjg5LjgsLTIxMy4zIA0KCTMwNy43LC0yMjYuMyAyODYuNCwtMjI2LjMgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjMwLjUsLTE4NC42IDIzLjMsLTE2NC42IDEuOSwtMTY0LjYgMTkuNywtMTUxLjggMTIuNSwtMTMxLjIgMzAuNSwtMTQzLjYgNDguNCwtMTMxLjIgNDEuMywtMTUxLjYgDQoJNTkuMiwtMTY0LjUgMzgsLTE2NC41ICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSI5Mi43LC0xODQuNiA4NS40LC0xNjQuNiA2NCwtMTY0LjYgODEuOCwtMTUxLjggNzQuNiwtMTMxLjIgOTIuNywtMTQzLjYgMTEwLjYsLTEzMS4yIDEwMy40LC0xNTEuNiANCgkxMjEuMywtMTY0LjUgMTAwLjEsLTE2NC41ICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSIxNTQuOCwtMTg0LjYgMTQ3LjUsLTE2NC42IDEyNi4xLC0xNjQuNiAxNDMuOSwtMTUxLjggMTM2LjcsLTEzMS4yIDE1NC44LC0xNDMuNiAxNzIuNywtMTMxLjIgDQoJMTY1LjUsLTE1MS42IDE4My40LC0xNjQuNSAxNjIuMiwtMTY0LjUgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjIxNi45LC0xODQuNiAyMDkuNiwtMTY0LjYgMTg4LjIsLTE2NC42IDIwNi4xLC0xNTEuOCAxOTguOCwtMTMxLjIgMjE2LjksLTE0My42IDIzNC44LC0xMzEuMiANCgkyMjcuNiwtMTUxLjYgMjQ1LjYsLTE2NC41IDIyNC4zLC0xNjQuNSAiLz4NCjxwb2x5Z29uIGNsYXNzPSJzdDEiIHBvaW50cz0iMjc5LC0xODQuNiAyNzEuNywtMTY0LjYgMjUwLjQsLTE2NC42IDI2OC4yLC0xNTEuOCAyNjEsLTEzMS4yIDI3OSwtMTQzLjYgMjk2LjksLTEzMS4yIDI4OS44LC0xNTEuNiANCgkzMDcuNywtMTY0LjUgMjg2LjQsLTE2NC41ICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSIzMC41LC0xMjIuMyAyMy4zLC0xMDIuMyAxLjksLTEwMi4zIDE5LjcsLTg5LjUgMTIuNSwtNjguOSAzMC41LC04MS4zIDQ4LjQsLTY4LjkgNDEuMywtODkuMyANCgk1OS4yLC0xMDIuMiAzOCwtMTAyLjIgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjkyLjcsLTEyMi4zIDg1LjQsLTEwMi4zIDY0LC0xMDIuMyA4MS44LC04OS41IDc0LjYsLTY4LjkgOTIuNywtODEuMyAxMTAuNiwtNjguOSAxMDMuNCwtODkuMyANCgkxMjEuMywtMTAyLjIgMTAwLjEsLTEwMi4yICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSIxNTQuOCwtMTIyLjMgMTQ3LjUsLTEwMi4zIDEyNi4xLC0xMDIuMyAxNDMuOSwtODkuNSAxMzYuNywtNjguOSAxNTQuOCwtODEuMyAxNzIuNywtNjguOSAxNjUuNSwtODkuMyANCgkxODMuNCwtMTAyLjIgMTYyLjIsLTEwMi4yICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSIyMTYuOSwtMTIyLjMgMjA5LjYsLTEwMi4zIDE4OC4yLC0xMDIuMyAyMDYuMSwtODkuNSAxOTguOCwtNjguOSAyMTYuOSwtODEuMyAyMzQuOCwtNjguOSAyMjcuNiwtODkuMyANCgkyNDUuNiwtMTAyLjIgMjI0LjMsLTEwMi4yICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSIyNzksLTEyMi4zIDI3MS43LC0xMDIuMyAyNTAuNCwtMTAyLjMgMjY4LjIsLTg5LjUgMjYxLC02OC45IDI3OSwtODEuMyAyOTYuOSwtNjguOSAyODkuOCwtODkuMyANCgkzMDcuNywtMTAyLjIgMjg2LjQsLTEwMi4yICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSIzMC41LC02MC44IDIzLjMsLTQwLjggMS45LC00MC44IDE5LjcsLTI4IDEyLjUsLTcuNCAzMC41LC0xOS44IDQ4LjQsLTcuNCA0MS4zLC0yNy43IDU5LjIsLTQwLjcgDQoJMzgsLTQwLjcgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjkyLjcsLTYwLjggODUuNCwtNDAuOCA2NCwtNDAuOCA4MS44LC0yOCA3NC42LC03LjQgOTIuNywtMTkuOCAxMTAuNiwtNy40IDEwMy40LC0yNy43IDEyMS4zLC00MC43IA0KCTEwMC4xLC00MC43ICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSIxNTQuOCwtNjAuOCAxNDcuNSwtNDAuOCAxMjYuMSwtNDAuOCAxNDMuOSwtMjggMTM2LjcsLTcuNCAxNTQuOCwtMTkuOCAxNzIuNywtNy40IDE2NS41LC0yNy43IA0KCTE4My40LC00MC43IDE2Mi4yLC00MC43ICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSIyMTYuOSwtNjAuOCAyMDkuNiwtNDAuOCAxODguMiwtNDAuOCAyMDYuMSwtMjggMTk4LjgsLTcuNCAyMTYuOSwtMTkuOCAyMzQuOCwtNy40IDIyNy42LC0yNy43IA0KCTI0NS42LC00MC43IDIyNC4zLC00MC43ICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSIyNzksLTYwLjggMjcxLjcsLTQwLjggMjUwLjQsLTQwLjggMjY4LjIsLTI4IDI2MSwtNy40IDI3OSwtMTkuOCAyOTYuOSwtNy40IDI4OS44LC0yNy43IDMwNy43LC00MC43IA0KCTI4Ni40LC00MC43ICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSIzMC41LDIgMjMuMywyMiAxLjksMjIgMTkuNywzNC44IDEyLjUsNTUuNCAzMC41LDQzIDQ4LjQsNTUuNCA0MS4zLDM1LjEgNTkuMiwyMi4xIDM4LDIyLjEgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QxIiBwb2ludHM9IjkyLjcsMiA4NS40LDIyIDY0LDIyIDgxLjgsMzQuOCA3NC42LDU1LjQgOTIuNyw0MyAxMTAuNiw1NS40IDEwMy40LDM1LjEgMTIxLjMsMjIuMSAxMDAuMSwyMi4xICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSIxNTQuOCwyIDE0Ny41LDIyIDEyNi4xLDIyIDE0My45LDM0LjggMTM2LjcsNTUuNCAxNTQuOCw0MyAxNzIuNyw1NS40IDE2NS41LDM1LjEgMTgzLjQsMjIuMSANCgkxNjIuMiwyMi4xICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSIyMTYuOSwyIDIwOS42LDIyIDE4OC4yLDIyIDIwNi4xLDM0LjggMTk4LjgsNTUuNCAyMTYuOSw0MyAyMzQuOCw1NS40IDIyNy42LDM1LjEgMjQ1LjYsMjIuMSANCgkyMjQuMywyMi4xICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSIyNzksMiAyNzEuNywyMiAyNTAuNCwyMiAyNjguMiwzNC44IDI2MSw1NS40IDI3OSw0MyAyOTYuOSw1NS40IDI4OS44LDM1LjEgMzA3LjcsMjIuMSAyODYuNCwyMi4xICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MiIgcG9pbnRzPSIzMC41LDY5LjYgMjMuMyw4OS42IDEuOSw4OS41IDE5LjcsMTAyLjQgMTIuNSwxMjMgMzAuNSwxMTAuNSA0OC4xLDEyMiA0MS4zLDEwMi42IDU5LjIsODkuNyAzOCw4OS43IA0KCSIvPg0KPGNpcmNsZSBjbGFzcz0ic3QzIiBjeD0iMzAuNSIgY3k9IjI4LjciIHI9IjI2LjciLz4NCjxjaXJjbGUgY2xhc3M9InN0NCIgY3g9IjkyLjciIGN5PSIyOC43IiByPSIyNi43Ii8+DQo8Y2lyY2xlIGNsYXNzPSJzdDQiIGN4PSIxNTUuOCIgY3k9IjI4LjciIHI9IjI2LjciLz4NCjxjaXJjbGUgY2xhc3M9InN0NCIgY3g9IjIxNi45IiBjeT0iMjguNyIgcj0iMjYuNyIvPg0KPGVsbGlwc2UgdHJhbnNmb3JtPSJtYXRyaXgoMC4yMjk4IC0wLjk3MzIgMC45NzMyIDAuMjI5OCAxODYuOTY2NyAyOTMuNjQyNikiIGNsYXNzPSJzdDQiIGN4PSIyNzkiIGN5PSIyOC43IiByeD0iMjYuNyIgcnk9IjI2LjciLz4NCjxwYXRoIGNsYXNzPSJzdDMiIGQ9Ik05Mi41LDU1LjRjLTE0LjcsMC0yNi43LTEyLTI2LjctMjYuN1M3Ny44LDIsOTIuNSwyVjU1LjR6Ii8+DQo8L3N2Zz4NCg==");}\n\n.icon-stars--2{background-image:url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNy4yLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAzMTAuNCA1Ni44IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzMTAuNCA1Ni44OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZGlzcGxheTpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS1taXRlcmxpbWl0OjEwO30NCgkuc3Qxe2Rpc3BsYXk6bm9uZTtmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQ0KCS5zdDJ7ZGlzcGxheTpub25lO30NCgkuc3Qze3N0cm9rZTojMDAwMDAwO3N0cm9rZS1taXRlcmxpbWl0OjEwO30NCgkuc3Q0e2ZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9DQo8L3N0eWxlPg0KPGltYWdlIHN0eWxlPSJkaXNwbGF5Om5vbmU7b3ZlcmZsb3c6dmlzaWJsZTtlbmFibGUtYmFja2dyb3VuZDpuZXcgICAgOyIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiB4bGluazpocmVmPSI3NEZBNDI0Ny5wbmciICB0cmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAxIDUuNTUzMiAzLjgyOTgpIj4NCjwvaW1hZ2U+DQo8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjMwLjUsLTI0Ni40IDIzLjMsLTIyNi40IDEuOSwtMjI2LjQgMTkuNywtMjEzLjYgMTIuNSwtMTkzIDMwLjUsLTIwNS40IDQ4LjQsLTE5MyA0MS4zLC0yMTMuMyANCgk1OS4yLC0yMjYuMyAzOCwtMjI2LjMgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjkyLjcsLTI0Ni40IDg1LjQsLTIyNi40IDY0LC0yMjYuNCA4MS44LC0yMTMuNiA3NC42LC0xOTMgOTIuNywtMjA1LjQgMTEwLjYsLTE5MyAxMDMuNCwtMjEzLjMgDQoJMTIxLjMsLTIyNi4zIDEwMC4xLC0yMjYuMyAiLz4NCjxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iMTU0LjgsLTI0Ni40IDE0Ny41LC0yMjYuNCAxMjYuMSwtMjI2LjQgMTQzLjksLTIxMy42IDEzNi43LC0xOTMgMTU0LjgsLTIwNS40IDE3Mi43LC0xOTMgDQoJMTY1LjUsLTIxMy4zIDE4My40LC0yMjYuMyAxNjIuMiwtMjI2LjMgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjIxNi45LC0yNDYuNCAyMDkuNiwtMjI2LjQgMTg4LjIsLTIyNi40IDIwNi4xLC0yMTMuNiAxOTguOCwtMTkzIDIxNi45LC0yMDUuNCAyMzQuOCwtMTkzIA0KCTIyNy42LC0yMTMuMyAyNDUuNiwtMjI2LjMgMjI0LjMsLTIyNi4zICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSIyNzksLTI0Ni40IDI3MS43LC0yMjYuNCAyNTAuNCwtMjI2LjQgMjY4LjIsLTIxMy42IDI2MSwtMTkzIDI3OSwtMjA1LjQgMjk2LjksLTE5MyAyODkuOCwtMjEzLjMgDQoJMzA3LjcsLTIyNi4zIDI4Ni40LC0yMjYuMyAiLz4NCjxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iMzAuNSwtMTg0LjYgMjMuMywtMTY0LjYgMS45LC0xNjQuNiAxOS43LC0xNTEuOCAxMi41LC0xMzEuMiAzMC41LC0xNDMuNiA0OC40LC0xMzEuMiA0MS4zLC0xNTEuNiANCgk1OS4yLC0xNjQuNSAzOCwtMTY0LjUgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjkyLjcsLTE4NC42IDg1LjQsLTE2NC42IDY0LC0xNjQuNiA4MS44LC0xNTEuOCA3NC42LC0xMzEuMiA5Mi43LC0xNDMuNiAxMTAuNiwtMTMxLjIgMTAzLjQsLTE1MS42IA0KCTEyMS4zLC0xNjQuNSAxMDAuMSwtMTY0LjUgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjE1NC44LC0xODQuNiAxNDcuNSwtMTY0LjYgMTI2LjEsLTE2NC42IDE0My45LC0xNTEuOCAxMzYuNywtMTMxLjIgMTU0LjgsLTE0My42IDE3Mi43LC0xMzEuMiANCgkxNjUuNSwtMTUxLjYgMTgzLjQsLTE2NC41IDE2Mi4yLC0xNjQuNSAiLz4NCjxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iMjE2LjksLTE4NC42IDIwOS42LC0xNjQuNiAxODguMiwtMTY0LjYgMjA2LjEsLTE1MS44IDE5OC44LC0xMzEuMiAyMTYuOSwtMTQzLjYgMjM0LjgsLTEzMS4yIA0KCTIyNy42LC0xNTEuNiAyNDUuNiwtMTY0LjUgMjI0LjMsLTE2NC41ICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSIyNzksLTE4NC42IDI3MS43LC0xNjQuNiAyNTAuNCwtMTY0LjYgMjY4LjIsLTE1MS44IDI2MSwtMTMxLjIgMjc5LC0xNDMuNiAyOTYuOSwtMTMxLjIgMjg5LjgsLTE1MS42IA0KCTMwNy43LC0xNjQuNSAyODYuNCwtMTY0LjUgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjMwLjUsLTEyMi4zIDIzLjMsLTEwMi4zIDEuOSwtMTAyLjMgMTkuNywtODkuNSAxMi41LC02OC45IDMwLjUsLTgxLjMgNDguNCwtNjguOSA0MS4zLC04OS4zIA0KCTU5LjIsLTEwMi4yIDM4LC0xMDIuMiAiLz4NCjxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iOTIuNywtMTIyLjMgODUuNCwtMTAyLjMgNjQsLTEwMi4zIDgxLjgsLTg5LjUgNzQuNiwtNjguOSA5Mi43LC04MS4zIDExMC42LC02OC45IDEwMy40LC04OS4zIA0KCTEyMS4zLC0xMDIuMiAxMDAuMSwtMTAyLjIgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjE1NC44LC0xMjIuMyAxNDcuNSwtMTAyLjMgMTI2LjEsLTEwMi4zIDE0My45LC04OS41IDEzNi43LC02OC45IDE1NC44LC04MS4zIDE3Mi43LC02OC45IDE2NS41LC04OS4zIA0KCTE4My40LC0xMDIuMiAxNjIuMiwtMTAyLjIgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QxIiBwb2ludHM9IjIxNi45LC0xMjIuMyAyMDkuNiwtMTAyLjMgMTg4LjIsLTEwMi4zIDIwNi4xLC04OS41IDE5OC44LC02OC45IDIxNi45LC04MS4zIDIzNC44LC02OC45IDIyNy42LC04OS4zIA0KCTI0NS42LC0xMDIuMiAyMjQuMywtMTAyLjIgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QxIiBwb2ludHM9IjI3OSwtMTIyLjMgMjcxLjcsLTEwMi4zIDI1MC40LC0xMDIuMyAyNjguMiwtODkuNSAyNjEsLTY4LjkgMjc5LC04MS4zIDI5Ni45LC02OC45IDI4OS44LC04OS4zIA0KCTMwNy43LC0xMDIuMiAyODYuNCwtMTAyLjIgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjMwLjUsLTYwLjggMjMuMywtNDAuOCAxLjksLTQwLjggMTkuNywtMjggMTIuNSwtNy40IDMwLjUsLTE5LjggNDguNCwtNy40IDQxLjMsLTI3LjcgNTkuMiwtNDAuNyANCgkzOCwtNDAuNyAiLz4NCjxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iOTIuNywtNjAuOCA4NS40LC00MC44IDY0LC00MC44IDgxLjgsLTI4IDc0LjYsLTcuNCA5Mi43LC0xOS44IDExMC42LC03LjQgMTAzLjQsLTI3LjcgMTIxLjMsLTQwLjcgDQoJMTAwLjEsLTQwLjcgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QxIiBwb2ludHM9IjE1NC44LC02MC44IDE0Ny41LC00MC44IDEyNi4xLC00MC44IDE0My45LC0yOCAxMzYuNywtNy40IDE1NC44LC0xOS44IDE3Mi43LC03LjQgMTY1LjUsLTI3LjcgDQoJMTgzLjQsLTQwLjcgMTYyLjIsLTQwLjcgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QxIiBwb2ludHM9IjIxNi45LC02MC44IDIwOS42LC00MC44IDE4OC4yLC00MC44IDIwNi4xLC0yOCAxOTguOCwtNy40IDIxNi45LC0xOS44IDIzNC44LC03LjQgMjI3LjYsLTI3LjcgDQoJMjQ1LjYsLTQwLjcgMjI0LjMsLTQwLjcgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QxIiBwb2ludHM9IjI3OSwtNjAuOCAyNzEuNywtNDAuOCAyNTAuNCwtNDAuOCAyNjguMiwtMjggMjYxLC03LjQgMjc5LC0xOS44IDI5Ni45LC03LjQgMjg5LjgsLTI3LjcgMzA3LjcsLTQwLjcgDQoJMjg2LjQsLTQwLjcgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjMwLjUsMiAyMy4zLDIyIDEuOSwyMiAxOS43LDM0LjggMTIuNSw1NS40IDMwLjUsNDMgNDguNCw1NS40IDQxLjMsMzUuMSA1OS4yLDIyLjEgMzgsMjIuMSAiLz4NCjxwb2x5Z29uIGNsYXNzPSJzdDEiIHBvaW50cz0iOTIuNywyIDg1LjQsMjIgNjQsMjIgODEuOCwzNC44IDc0LjYsNTUuNCA5Mi43LDQzIDExMC42LDU1LjQgMTAzLjQsMzUuMSAxMjEuMywyMi4xIDEwMC4xLDIyLjEgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QxIiBwb2ludHM9IjE1NC44LDIgMTQ3LjUsMjIgMTI2LjEsMjIgMTQzLjksMzQuOCAxMzYuNyw1NS40IDE1NC44LDQzIDE3Mi43LDU1LjQgMTY1LjUsMzUuMSAxODMuNCwyMi4xIA0KCTE2Mi4yLDIyLjEgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QxIiBwb2ludHM9IjIxNi45LDIgMjA5LjYsMjIgMTg4LjIsMjIgMjA2LjEsMzQuOCAxOTguOCw1NS40IDIxNi45LDQzIDIzNC44LDU1LjQgMjI3LjYsMzUuMSAyNDUuNiwyMi4xIA0KCTIyNC4zLDIyLjEgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QxIiBwb2ludHM9IjI3OSwyIDI3MS43LDIyIDI1MC40LDIyIDI2OC4yLDM0LjggMjYxLDU1LjQgMjc5LDQzIDI5Ni45LDU1LjQgMjg5LjgsMzUuMSAzMDcuNywyMi4xIDI4Ni40LDIyLjEgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QyIiBwb2ludHM9IjMwLjUsNjkuNiAyMy4zLDg5LjYgMS45LDg5LjUgMTkuNywxMDIuNCAxMi41LDEyMyAzMC41LDExMC41IDQ4LjEsMTIyIDQxLjMsMTAyLjYgNTkuMiw4OS43IDM4LDg5LjcgDQoJIi8+DQo8Y2lyY2xlIGNsYXNzPSJzdDMiIGN4PSIzMC41IiBjeT0iMjguNyIgcj0iMjYuNyIvPg0KPGNpcmNsZSBjbGFzcz0ic3QzIiBjeD0iOTIuNyIgY3k9IjI4LjciIHI9IjI2LjciLz4NCjxjaXJjbGUgY2xhc3M9InN0NCIgY3g9IjE1NS44IiBjeT0iMjguNyIgcj0iMjYuNyIvPg0KPGNpcmNsZSBjbGFzcz0ic3Q0IiBjeD0iMjE2LjkiIGN5PSIyOC43IiByPSIyNi43Ii8+DQo8Y2lyY2xlIGNsYXNzPSJzdDQiIGN4PSIyNzkiIGN5PSIyOC43IiByPSIyNi43Ii8+DQo8L3N2Zz4NCg==");}\n\n.icon-stars--2-half{background-image:url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNy4yLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAzMTAuNCA1Ni44IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzMTAuNCA1Ni44OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZGlzcGxheTpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS1taXRlcmxpbWl0OjEwO30NCgkuc3Qxe2Rpc3BsYXk6bm9uZTtmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQ0KCS5zdDJ7ZGlzcGxheTpub25lO30NCgkuc3Qze3N0cm9rZTojMDAwMDAwO3N0cm9rZS1taXRlcmxpbWl0OjEwO30NCgkuc3Q0e2ZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9DQo8L3N0eWxlPg0KPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSIzMC41LC0yNDYuNCAyMy4zLC0yMjYuNCAxLjksLTIyNi40IDE5LjcsLTIxMy42IDEyLjUsLTE5MyAzMC41LC0yMDUuNCA0OC40LC0xOTMgNDEuMywtMjEzLjMgDQoJNTkuMiwtMjI2LjMgMzgsLTIyNi4zICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSI5Mi43LC0yNDYuNCA4NS40LC0yMjYuNCA2NCwtMjI2LjQgODEuOCwtMjEzLjYgNzQuNiwtMTkzIDkyLjcsLTIwNS40IDExMC42LC0xOTMgMTAzLjQsLTIxMy4zIA0KCTEyMS4zLC0yMjYuMyAxMDAuMSwtMjI2LjMgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjE1NC44LC0yNDYuNCAxNDcuNSwtMjI2LjQgMTI2LjEsLTIyNi40IDE0My45LC0yMTMuNiAxMzYuNywtMTkzIDE1NC44LC0yMDUuNCAxNzIuNywtMTkzIA0KCTE2NS41LC0yMTMuMyAxODMuNCwtMjI2LjMgMTYyLjIsLTIyNi4zICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSIyMTYuOSwtMjQ2LjQgMjA5LjYsLTIyNi40IDE4OC4yLC0yMjYuNCAyMDYuMSwtMjEzLjYgMTk4LjgsLTE5MyAyMTYuOSwtMjA1LjQgMjM0LjgsLTE5MyANCgkyMjcuNiwtMjEzLjMgMjQ1LjYsLTIyNi4zIDIyNC4zLC0yMjYuMyAiLz4NCjxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iMjc5LC0yNDYuNCAyNzEuNywtMjI2LjQgMjUwLjQsLTIyNi40IDI2OC4yLC0yMTMuNiAyNjEsLTE5MyAyNzksLTIwNS40IDI5Ni45LC0xOTMgMjg5LjgsLTIxMy4zIA0KCTMwNy43LC0yMjYuMyAyODYuNCwtMjI2LjMgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjMwLjUsLTE4NC42IDIzLjMsLTE2NC42IDEuOSwtMTY0LjYgMTkuNywtMTUxLjggMTIuNSwtMTMxLjIgMzAuNSwtMTQzLjYgNDguNCwtMTMxLjIgNDEuMywtMTUxLjYgDQoJNTkuMiwtMTY0LjUgMzgsLTE2NC41ICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSI5Mi43LC0xODQuNiA4NS40LC0xNjQuNiA2NCwtMTY0LjYgODEuOCwtMTUxLjggNzQuNiwtMTMxLjIgOTIuNywtMTQzLjYgMTEwLjYsLTEzMS4yIDEwMy40LC0xNTEuNiANCgkxMjEuMywtMTY0LjUgMTAwLjEsLTE2NC41ICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSIxNTQuOCwtMTg0LjYgMTQ3LjUsLTE2NC42IDEyNi4xLC0xNjQuNiAxNDMuOSwtMTUxLjggMTM2LjcsLTEzMS4yIDE1NC44LC0xNDMuNiAxNzIuNywtMTMxLjIgDQoJMTY1LjUsLTE1MS42IDE4My40LC0xNjQuNSAxNjIuMiwtMTY0LjUgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjIxNi45LC0xODQuNiAyMDkuNiwtMTY0LjYgMTg4LjIsLTE2NC42IDIwNi4xLC0xNTEuOCAxOTguOCwtMTMxLjIgMjE2LjksLTE0My42IDIzNC44LC0xMzEuMiANCgkyMjcuNiwtMTUxLjYgMjQ1LjYsLTE2NC41IDIyNC4zLC0xNjQuNSAiLz4NCjxwb2x5Z29uIGNsYXNzPSJzdDEiIHBvaW50cz0iMjc5LC0xODQuNiAyNzEuNywtMTY0LjYgMjUwLjQsLTE2NC42IDI2OC4yLC0xNTEuOCAyNjEsLTEzMS4yIDI3OSwtMTQzLjYgMjk2LjksLTEzMS4yIDI4OS44LC0xNTEuNiANCgkzMDcuNywtMTY0LjUgMjg2LjQsLTE2NC41ICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSIzMC41LC0xMjIuMyAyMy4zLC0xMDIuMyAxLjksLTEwMi4zIDE5LjcsLTg5LjUgMTIuNSwtNjguOSAzMC41LC04MS4zIDQ4LjQsLTY4LjkgNDEuMywtODkuMyANCgk1OS4yLC0xMDIuMiAzOCwtMTAyLjIgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjkyLjcsLTEyMi4zIDg1LjQsLTEwMi4zIDY0LC0xMDIuMyA4MS44LC04OS41IDc0LjYsLTY4LjkgOTIuNywtODEuMyAxMTAuNiwtNjguOSAxMDMuNCwtODkuMyANCgkxMjEuMywtMTAyLjIgMTAwLjEsLTEwMi4yICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSIxNTQuOCwtMTIyLjMgMTQ3LjUsLTEwMi4zIDEyNi4xLC0xMDIuMyAxNDMuOSwtODkuNSAxMzYuNywtNjguOSAxNTQuOCwtODEuMyAxNzIuNywtNjguOSAxNjUuNSwtODkuMyANCgkxODMuNCwtMTAyLjIgMTYyLjIsLTEwMi4yICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSIyMTYuOSwtMTIyLjMgMjA5LjYsLTEwMi4zIDE4OC4yLC0xMDIuMyAyMDYuMSwtODkuNSAxOTguOCwtNjguOSAyMTYuOSwtODEuMyAyMzQuOCwtNjguOSAyMjcuNiwtODkuMyANCgkyNDUuNiwtMTAyLjIgMjI0LjMsLTEwMi4yICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSIyNzksLTEyMi4zIDI3MS43LC0xMDIuMyAyNTAuNCwtMTAyLjMgMjY4LjIsLTg5LjUgMjYxLC02OC45IDI3OSwtODEuMyAyOTYuOSwtNjguOSAyODkuOCwtODkuMyANCgkzMDcuNywtMTAyLjIgMjg2LjQsLTEwMi4yICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSIzMC41LC02MC44IDIzLjMsLTQwLjggMS45LC00MC44IDE5LjcsLTI4IDEyLjUsLTcuNCAzMC41LC0xOS44IDQ4LjQsLTcuNCA0MS4zLC0yNy43IDU5LjIsLTQwLjcgDQoJMzgsLTQwLjcgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjkyLjcsLTYwLjggODUuNCwtNDAuOCA2NCwtNDAuOCA4MS44LC0yOCA3NC42LC03LjQgOTIuNywtMTkuOCAxMTAuNiwtNy40IDEwMy40LC0yNy43IDEyMS4zLC00MC43IA0KCTEwMC4xLC00MC43ICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSIxNTQuOCwtNjAuOCAxNDcuNSwtNDAuOCAxMjYuMSwtNDAuOCAxNDMuOSwtMjggMTM2LjcsLTcuNCAxNTQuOCwtMTkuOCAxNzIuNywtNy40IDE2NS41LC0yNy43IA0KCTE4My40LC00MC43IDE2Mi4yLC00MC43ICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSIyMTYuOSwtNjAuOCAyMDkuNiwtNDAuOCAxODguMiwtNDAuOCAyMDYuMSwtMjggMTk4LjgsLTcuNCAyMTYuOSwtMTkuOCAyMzQuOCwtNy40IDIyNy42LC0yNy43IA0KCTI0NS42LC00MC43IDIyNC4zLC00MC43ICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSIyNzksLTYwLjggMjcxLjcsLTQwLjggMjUwLjQsLTQwLjggMjY4LjIsLTI4IDI2MSwtNy40IDI3OSwtMTkuOCAyOTYuOSwtNy40IDI4OS44LC0yNy43IDMwNy43LC00MC43IA0KCTI4Ni40LC00MC43ICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSIzMC41LDIgMjMuMywyMiAxLjksMjIgMTkuNywzNC44IDEyLjUsNTUuNCAzMC41LDQzIDQ4LjQsNTUuNCA0MS4zLDM1LjEgNTkuMiwyMi4xIDM4LDIyLjEgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QxIiBwb2ludHM9IjkyLjcsMiA4NS40LDIyIDY0LDIyIDgxLjgsMzQuOCA3NC42LDU1LjQgOTIuNyw0MyAxMTAuNiw1NS40IDEwMy40LDM1LjEgMTIxLjMsMjIuMSAxMDAuMSwyMi4xICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSIxNTQuOCwyIDE0Ny41LDIyIDEyNi4xLDIyIDE0My45LDM0LjggMTM2LjcsNTUuNCAxNTQuOCw0MyAxNzIuNyw1NS40IDE2NS41LDM1LjEgMTgzLjQsMjIuMSANCgkxNjIuMiwyMi4xICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSIyMTYuOSwyIDIwOS42LDIyIDE4OC4yLDIyIDIwNi4xLDM0LjggMTk4LjgsNTUuNCAyMTYuOSw0MyAyMzQuOCw1NS40IDIyNy42LDM1LjEgMjQ1LjYsMjIuMSANCgkyMjQuMywyMi4xICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSIyNzksMiAyNzEuNywyMiAyNTAuNCwyMiAyNjguMiwzNC44IDI2MSw1NS40IDI3OSw0MyAyOTYuOSw1NS40IDI4OS44LDM1LjEgMzA3LjcsMjIuMSAyODYuNCwyMi4xICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MiIgcG9pbnRzPSIzMC41LDY5LjYgMjMuMyw4OS42IDEuOSw4OS41IDE5LjcsMTAyLjQgMTIuNSwxMjMgMzAuNSwxMTAuNSA0OC4xLDEyMiA0MS4zLDEwMi42IDU5LjIsODkuNyAzOCw4OS43IA0KCSIvPg0KPGNpcmNsZSBjbGFzcz0ic3QzIiBjeD0iMzAuNSIgY3k9IjI4LjciIHI9IjI2LjciLz4NCjxjaXJjbGUgY2xhc3M9InN0MyIgY3g9IjkyLjciIGN5PSIyOC43IiByPSIyNi43Ii8+DQo8Y2lyY2xlIGNsYXNzPSJzdDQiIGN4PSIxNTUuOCIgY3k9IjI4LjciIHI9IjI2LjciLz4NCjxjaXJjbGUgY2xhc3M9InN0NCIgY3g9IjIxNi45IiBjeT0iMjguNyIgcj0iMjYuNyIvPg0KPGVsbGlwc2UgdHJhbnNmb3JtPSJtYXRyaXgoMC4yMjk4IC0wLjk3MzIgMC45NzMyIDAuMjI5OCAxODYuOTY2NyAyOTMuNjQyNikiIGNsYXNzPSJzdDQiIGN4PSIyNzkiIGN5PSIyOC43IiByeD0iMjYuNyIgcnk9IjI2LjciLz4NCjxwYXRoIGNsYXNzPSJzdDMiIGQ9Ik0xNTUuOCw1NS40Yy0xNC43LDAtMjYuNy0xMi0yNi43LTI2LjdTMTQxLjEsMiwxNTUuOCwyVjU1LjR6Ii8+DQo8L3N2Zz4NCg==");}\n\n.icon-stars--3{background-image:url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNy4yLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAzMTAuNCA1Ni44IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzMTAuNCA1Ni44OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZGlzcGxheTpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS1taXRlcmxpbWl0OjEwO30NCgkuc3Qxe2Rpc3BsYXk6bm9uZTtmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQ0KCS5zdDJ7ZGlzcGxheTpub25lO30NCgkuc3Qze3N0cm9rZTojMDAwMDAwO3N0cm9rZS1taXRlcmxpbWl0OjEwO30NCgkuc3Q0e2ZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9DQo8L3N0eWxlPg0KPGltYWdlIHN0eWxlPSJkaXNwbGF5Om5vbmU7b3ZlcmZsb3c6dmlzaWJsZTtlbmFibGUtYmFja2dyb3VuZDpuZXcgICAgOyIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiB4bGluazpocmVmPSI4Qjg3NzEwRS5wbmciICB0cmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAxIDUuNTUzMiAzLjgyOTgpIj4NCjwvaW1hZ2U+DQo8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjMwLjUsLTI0Ni40IDIzLjMsLTIyNi40IDEuOSwtMjI2LjQgMTkuNywtMjEzLjYgMTIuNSwtMTkzIDMwLjUsLTIwNS40IDQ4LjQsLTE5MyA0MS4zLC0yMTMuMyANCgk1OS4yLC0yMjYuMyAzOCwtMjI2LjMgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjkyLjcsLTI0Ni40IDg1LjQsLTIyNi40IDY0LC0yMjYuNCA4MS44LC0yMTMuNiA3NC42LC0xOTMgOTIuNywtMjA1LjQgMTEwLjYsLTE5MyAxMDMuNCwtMjEzLjMgDQoJMTIxLjMsLTIyNi4zIDEwMC4xLC0yMjYuMyAiLz4NCjxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iMTU0LjgsLTI0Ni40IDE0Ny41LC0yMjYuNCAxMjYuMSwtMjI2LjQgMTQzLjksLTIxMy42IDEzNi43LC0xOTMgMTU0LjgsLTIwNS40IDE3Mi43LC0xOTMgDQoJMTY1LjUsLTIxMy4zIDE4My40LC0yMjYuMyAxNjIuMiwtMjI2LjMgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjIxNi45LC0yNDYuNCAyMDkuNiwtMjI2LjQgMTg4LjIsLTIyNi40IDIwNi4xLC0yMTMuNiAxOTguOCwtMTkzIDIxNi45LC0yMDUuNCAyMzQuOCwtMTkzIA0KCTIyNy42LC0yMTMuMyAyNDUuNiwtMjI2LjMgMjI0LjMsLTIyNi4zICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSIyNzksLTI0Ni40IDI3MS43LC0yMjYuNCAyNTAuNCwtMjI2LjQgMjY4LjIsLTIxMy42IDI2MSwtMTkzIDI3OSwtMjA1LjQgMjk2LjksLTE5MyAyODkuOCwtMjEzLjMgDQoJMzA3LjcsLTIyNi4zIDI4Ni40LC0yMjYuMyAiLz4NCjxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iMzAuNSwtMTg0LjYgMjMuMywtMTY0LjYgMS45LC0xNjQuNiAxOS43LC0xNTEuOCAxMi41LC0xMzEuMiAzMC41LC0xNDMuNiA0OC40LC0xMzEuMiA0MS4zLC0xNTEuNiANCgk1OS4yLC0xNjQuNSAzOCwtMTY0LjUgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjkyLjcsLTE4NC42IDg1LjQsLTE2NC42IDY0LC0xNjQuNiA4MS44LC0xNTEuOCA3NC42LC0xMzEuMiA5Mi43LC0xNDMuNiAxMTAuNiwtMTMxLjIgMTAzLjQsLTE1MS42IA0KCTEyMS4zLC0xNjQuNSAxMDAuMSwtMTY0LjUgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjE1NC44LC0xODQuNiAxNDcuNSwtMTY0LjYgMTI2LjEsLTE2NC42IDE0My45LC0xNTEuOCAxMzYuNywtMTMxLjIgMTU0LjgsLTE0My42IDE3Mi43LC0xMzEuMiANCgkxNjUuNSwtMTUxLjYgMTgzLjQsLTE2NC41IDE2Mi4yLC0xNjQuNSAiLz4NCjxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iMjE2LjksLTE4NC42IDIwOS42LC0xNjQuNiAxODguMiwtMTY0LjYgMjA2LjEsLTE1MS44IDE5OC44LC0xMzEuMiAyMTYuOSwtMTQzLjYgMjM0LjgsLTEzMS4yIA0KCTIyNy42LC0xNTEuNiAyNDUuNiwtMTY0LjUgMjI0LjMsLTE2NC41ICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSIyNzksLTE4NC42IDI3MS43LC0xNjQuNiAyNTAuNCwtMTY0LjYgMjY4LjIsLTE1MS44IDI2MSwtMTMxLjIgMjc5LC0xNDMuNiAyOTYuOSwtMTMxLjIgMjg5LjgsLTE1MS42IA0KCTMwNy43LC0xNjQuNSAyODYuNCwtMTY0LjUgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjMwLjUsLTEyMi4zIDIzLjMsLTEwMi4zIDEuOSwtMTAyLjMgMTkuNywtODkuNSAxMi41LC02OC45IDMwLjUsLTgxLjMgNDguNCwtNjguOSA0MS4zLC04OS4zIA0KCTU5LjIsLTEwMi4yIDM4LC0xMDIuMiAiLz4NCjxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iOTIuNywtMTIyLjMgODUuNCwtMTAyLjMgNjQsLTEwMi4zIDgxLjgsLTg5LjUgNzQuNiwtNjguOSA5Mi43LC04MS4zIDExMC42LC02OC45IDEwMy40LC04OS4zIA0KCTEyMS4zLC0xMDIuMiAxMDAuMSwtMTAyLjIgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjE1NC44LC0xMjIuMyAxNDcuNSwtMTAyLjMgMTI2LjEsLTEwMi4zIDE0My45LC04OS41IDEzNi43LC02OC45IDE1NC44LC04MS4zIDE3Mi43LC02OC45IDE2NS41LC04OS4zIA0KCTE4My40LC0xMDIuMiAxNjIuMiwtMTAyLjIgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QxIiBwb2ludHM9IjIxNi45LC0xMjIuMyAyMDkuNiwtMTAyLjMgMTg4LjIsLTEwMi4zIDIwNi4xLC04OS41IDE5OC44LC02OC45IDIxNi45LC04MS4zIDIzNC44LC02OC45IDIyNy42LC04OS4zIA0KCTI0NS42LC0xMDIuMiAyMjQuMywtMTAyLjIgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QxIiBwb2ludHM9IjI3OSwtMTIyLjMgMjcxLjcsLTEwMi4zIDI1MC40LC0xMDIuMyAyNjguMiwtODkuNSAyNjEsLTY4LjkgMjc5LC04MS4zIDI5Ni45LC02OC45IDI4OS44LC04OS4zIA0KCTMwNy43LC0xMDIuMiAyODYuNCwtMTAyLjIgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjMwLjUsLTYwLjggMjMuMywtNDAuOCAxLjksLTQwLjggMTkuNywtMjggMTIuNSwtNy40IDMwLjUsLTE5LjggNDguNCwtNy40IDQxLjMsLTI3LjcgNTkuMiwtNDAuNyANCgkzOCwtNDAuNyAiLz4NCjxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iOTIuNywtNjAuOCA4NS40LC00MC44IDY0LC00MC44IDgxLjgsLTI4IDc0LjYsLTcuNCA5Mi43LC0xOS44IDExMC42LC03LjQgMTAzLjQsLTI3LjcgMTIxLjMsLTQwLjcgDQoJMTAwLjEsLTQwLjcgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QxIiBwb2ludHM9IjE1NC44LC02MC44IDE0Ny41LC00MC44IDEyNi4xLC00MC44IDE0My45LC0yOCAxMzYuNywtNy40IDE1NC44LC0xOS44IDE3Mi43LC03LjQgMTY1LjUsLTI3LjcgDQoJMTgzLjQsLTQwLjcgMTYyLjIsLTQwLjcgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QxIiBwb2ludHM9IjIxNi45LC02MC44IDIwOS42LC00MC44IDE4OC4yLC00MC44IDIwNi4xLC0yOCAxOTguOCwtNy40IDIxNi45LC0xOS44IDIzNC44LC03LjQgMjI3LjYsLTI3LjcgDQoJMjQ1LjYsLTQwLjcgMjI0LjMsLTQwLjcgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QxIiBwb2ludHM9IjI3OSwtNjAuOCAyNzEuNywtNDAuOCAyNTAuNCwtNDAuOCAyNjguMiwtMjggMjYxLC03LjQgMjc5LC0xOS44IDI5Ni45LC03LjQgMjg5LjgsLTI3LjcgMzA3LjcsLTQwLjcgDQoJMjg2LjQsLTQwLjcgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjMwLjUsMiAyMy4zLDIyIDEuOSwyMiAxOS43LDM0LjggMTIuNSw1NS40IDMwLjUsNDMgNDguNCw1NS40IDQxLjMsMzUuMSA1OS4yLDIyLjEgMzgsMjIuMSAiLz4NCjxwb2x5Z29uIGNsYXNzPSJzdDEiIHBvaW50cz0iOTIuNywyIDg1LjQsMjIgNjQsMjIgODEuOCwzNC44IDc0LjYsNTUuNCA5Mi43LDQzIDExMC42LDU1LjQgMTAzLjQsMzUuMSAxMjEuMywyMi4xIDEwMC4xLDIyLjEgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QxIiBwb2ludHM9IjE1NC44LDIgMTQ3LjUsMjIgMTI2LjEsMjIgMTQzLjksMzQuOCAxMzYuNyw1NS40IDE1NC44LDQzIDE3Mi43LDU1LjQgMTY1LjUsMzUuMSAxODMuNCwyMi4xIA0KCTE2Mi4yLDIyLjEgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QxIiBwb2ludHM9IjIxNi45LDIgMjA5LjYsMjIgMTg4LjIsMjIgMjA2LjEsMzQuOCAxOTguOCw1NS40IDIxNi45LDQzIDIzNC44LDU1LjQgMjI3LjYsMzUuMSAyNDUuNiwyMi4xIA0KCTIyNC4zLDIyLjEgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QxIiBwb2ludHM9IjI3OSwyIDI3MS43LDIyIDI1MC40LDIyIDI2OC4yLDM0LjggMjYxLDU1LjQgMjc5LDQzIDI5Ni45LDU1LjQgMjg5LjgsMzUuMSAzMDcuNywyMi4xIDI4Ni40LDIyLjEgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QyIiBwb2ludHM9IjMwLjUsNjkuNiAyMy4zLDg5LjYgMS45LDg5LjUgMTkuNywxMDIuNCAxMi41LDEyMyAzMC41LDExMC41IDQ4LjEsMTIyIDQxLjMsMTAyLjYgNTkuMiw4OS43IDM4LDg5LjcgDQoJIi8+DQo8Y2lyY2xlIGNsYXNzPSJzdDMiIGN4PSIzMC41IiBjeT0iMjguNyIgcj0iMjYuNyIvPg0KPGNpcmNsZSBjbGFzcz0ic3QzIiBjeD0iOTIuNyIgY3k9IjI4LjciIHI9IjI2LjciLz4NCjxjaXJjbGUgY2xhc3M9InN0MyIgY3g9IjE1NS44IiBjeT0iMjguNyIgcj0iMjYuNyIvPg0KPGNpcmNsZSBjbGFzcz0ic3Q0IiBjeD0iMjE2LjkiIGN5PSIyOC43IiByPSIyNi43Ii8+DQo8Y2lyY2xlIGNsYXNzPSJzdDQiIGN4PSIyNzkiIGN5PSIyOC43IiByPSIyNi43Ii8+DQo8L3N2Zz4NCg==");}\n\n.icon-stars--3-half{background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNy4yLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAzMTAuNCA1Ni44IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzMTAuNCA1Ni44OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZGlzcGxheTpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS1taXRlcmxpbWl0OjEwO30NCgkuc3Qxe2Rpc3BsYXk6bm9uZTtmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQ0KCS5zdDJ7ZGlzcGxheTpub25lO30NCgkuc3Qze3N0cm9rZTojMDAwMDAwO3N0cm9rZS1taXRlcmxpbWl0OjEwO30NCgkuc3Q0e2ZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9DQo8L3N0eWxlPg0KPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSIzMC41LC0yNDYuNCAyMy4zLC0yMjYuNCAxLjksLTIyNi40IDE5LjcsLTIxMy42IDEyLjUsLTE5MyAzMC41LC0yMDUuNCA0OC40LC0xOTMgNDEuMywtMjEzLjMgDQoJNTkuMiwtMjI2LjMgMzgsLTIyNi4zICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSI5Mi43LC0yNDYuNCA4NS40LC0yMjYuNCA2NCwtMjI2LjQgODEuOCwtMjEzLjYgNzQuNiwtMTkzIDkyLjcsLTIwNS40IDExMC42LC0xOTMgMTAzLjQsLTIxMy4zIA0KCTEyMS4zLC0yMjYuMyAxMDAuMSwtMjI2LjMgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjE1NC44LC0yNDYuNCAxNDcuNSwtMjI2LjQgMTI2LjEsLTIyNi40IDE0My45LC0yMTMuNiAxMzYuNywtMTkzIDE1NC44LC0yMDUuNCAxNzIuNywtMTkzIA0KCTE2NS41LC0yMTMuMyAxODMuNCwtMjI2LjMgMTYyLjIsLTIyNi4zICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSIyMTYuOSwtMjQ2LjQgMjA5LjYsLTIyNi40IDE4OC4yLC0yMjYuNCAyMDYuMSwtMjEzLjYgMTk4LjgsLTE5MyAyMTYuOSwtMjA1LjQgMjM0LjgsLTE5MyANCgkyMjcuNiwtMjEzLjMgMjQ1LjYsLTIyNi4zIDIyNC4zLC0yMjYuMyAiLz4NCjxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iMjc5LC0yNDYuNCAyNzEuNywtMjI2LjQgMjUwLjQsLTIyNi40IDI2OC4yLC0yMTMuNiAyNjEsLTE5MyAyNzksLTIwNS40IDI5Ni45LC0xOTMgMjg5LjgsLTIxMy4zIA0KCTMwNy43LC0yMjYuMyAyODYuNCwtMjI2LjMgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjMwLjUsLTE4NC42IDIzLjMsLTE2NC42IDEuOSwtMTY0LjYgMTkuNywtMTUxLjggMTIuNSwtMTMxLjIgMzAuNSwtMTQzLjYgNDguNCwtMTMxLjIgNDEuMywtMTUxLjYgDQoJNTkuMiwtMTY0LjUgMzgsLTE2NC41ICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSI5Mi43LC0xODQuNiA4NS40LC0xNjQuNiA2NCwtMTY0LjYgODEuOCwtMTUxLjggNzQuNiwtMTMxLjIgOTIuNywtMTQzLjYgMTEwLjYsLTEzMS4yIDEwMy40LC0xNTEuNiANCgkxMjEuMywtMTY0LjUgMTAwLjEsLTE2NC41ICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSIxNTQuOCwtMTg0LjYgMTQ3LjUsLTE2NC42IDEyNi4xLC0xNjQuNiAxNDMuOSwtMTUxLjggMTM2LjcsLTEzMS4yIDE1NC44LC0xNDMuNiAxNzIuNywtMTMxLjIgDQoJMTY1LjUsLTE1MS42IDE4My40LC0xNjQuNSAxNjIuMiwtMTY0LjUgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjIxNi45LC0xODQuNiAyMDkuNiwtMTY0LjYgMTg4LjIsLTE2NC42IDIwNi4xLC0xNTEuOCAxOTguOCwtMTMxLjIgMjE2LjksLTE0My42IDIzNC44LC0xMzEuMiANCgkyMjcuNiwtMTUxLjYgMjQ1LjYsLTE2NC41IDIyNC4zLC0xNjQuNSAiLz4NCjxwb2x5Z29uIGNsYXNzPSJzdDEiIHBvaW50cz0iMjc5LC0xODQuNiAyNzEuNywtMTY0LjYgMjUwLjQsLTE2NC42IDI2OC4yLC0xNTEuOCAyNjEsLTEzMS4yIDI3OSwtMTQzLjYgMjk2LjksLTEzMS4yIDI4OS44LC0xNTEuNiANCgkzMDcuNywtMTY0LjUgMjg2LjQsLTE2NC41ICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSIzMC41LC0xMjIuMyAyMy4zLC0xMDIuMyAxLjksLTEwMi4zIDE5LjcsLTg5LjUgMTIuNSwtNjguOSAzMC41LC04MS4zIDQ4LjQsLTY4LjkgNDEuMywtODkuMyANCgk1OS4yLC0xMDIuMiAzOCwtMTAyLjIgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjkyLjcsLTEyMi4zIDg1LjQsLTEwMi4zIDY0LC0xMDIuMyA4MS44LC04OS41IDc0LjYsLTY4LjkgOTIuNywtODEuMyAxMTAuNiwtNjguOSAxMDMuNCwtODkuMyANCgkxMjEuMywtMTAyLjIgMTAwLjEsLTEwMi4yICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSIxNTQuOCwtMTIyLjMgMTQ3LjUsLTEwMi4zIDEyNi4xLC0xMDIuMyAxNDMuOSwtODkuNSAxMzYuNywtNjguOSAxNTQuOCwtODEuMyAxNzIuNywtNjguOSAxNjUuNSwtODkuMyANCgkxODMuNCwtMTAyLjIgMTYyLjIsLTEwMi4yICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSIyMTYuOSwtMTIyLjMgMjA5LjYsLTEwMi4zIDE4OC4yLC0xMDIuMyAyMDYuMSwtODkuNSAxOTguOCwtNjguOSAyMTYuOSwtODEuMyAyMzQuOCwtNjguOSAyMjcuNiwtODkuMyANCgkyNDUuNiwtMTAyLjIgMjI0LjMsLTEwMi4yICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSIyNzksLTEyMi4zIDI3MS43LC0xMDIuMyAyNTAuNCwtMTAyLjMgMjY4LjIsLTg5LjUgMjYxLC02OC45IDI3OSwtODEuMyAyOTYuOSwtNjguOSAyODkuOCwtODkuMyANCgkzMDcuNywtMTAyLjIgMjg2LjQsLTEwMi4yICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSIzMC41LC02MC44IDIzLjMsLTQwLjggMS45LC00MC44IDE5LjcsLTI4IDEyLjUsLTcuNCAzMC41LC0xOS44IDQ4LjQsLTcuNCA0MS4zLC0yNy43IDU5LjIsLTQwLjcgDQoJMzgsLTQwLjcgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjkyLjcsLTYwLjggODUuNCwtNDAuOCA2NCwtNDAuOCA4MS44LC0yOCA3NC42LC03LjQgOTIuNywtMTkuOCAxMTAuNiwtNy40IDEwMy40LC0yNy43IDEyMS4zLC00MC43IA0KCTEwMC4xLC00MC43ICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSIxNTQuOCwtNjAuOCAxNDcuNSwtNDAuOCAxMjYuMSwtNDAuOCAxNDMuOSwtMjggMTM2LjcsLTcuNCAxNTQuOCwtMTkuOCAxNzIuNywtNy40IDE2NS41LC0yNy43IA0KCTE4My40LC00MC43IDE2Mi4yLC00MC43ICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSIyMTYuOSwtNjAuOCAyMDkuNiwtNDAuOCAxODguMiwtNDAuOCAyMDYuMSwtMjggMTk4LjgsLTcuNCAyMTYuOSwtMTkuOCAyMzQuOCwtNy40IDIyNy42LC0yNy43IA0KCTI0NS42LC00MC43IDIyNC4zLC00MC43ICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSIyNzksLTYwLjggMjcxLjcsLTQwLjggMjUwLjQsLTQwLjggMjY4LjIsLTI4IDI2MSwtNy40IDI3OSwtMTkuOCAyOTYuOSwtNy40IDI4OS44LC0yNy43IDMwNy43LC00MC43IA0KCTI4Ni40LC00MC43ICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSIzMC41LDIgMjMuMywyMiAxLjksMjIgMTkuNywzNC44IDEyLjUsNTUuNCAzMC41LDQzIDQ4LjQsNTUuNCA0MS4zLDM1LjEgNTkuMiwyMi4xIDM4LDIyLjEgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QxIiBwb2ludHM9IjkyLjcsMiA4NS40LDIyIDY0LDIyIDgxLjgsMzQuOCA3NC42LDU1LjQgOTIuNyw0MyAxMTAuNiw1NS40IDEwMy40LDM1LjEgMTIxLjMsMjIuMSAxMDAuMSwyMi4xICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSIxNTQuOCwyIDE0Ny41LDIyIDEyNi4xLDIyIDE0My45LDM0LjggMTM2LjcsNTUuNCAxNTQuOCw0MyAxNzIuNyw1NS40IDE2NS41LDM1LjEgMTgzLjQsMjIuMSANCgkxNjIuMiwyMi4xICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSIyMTYuOSwyIDIwOS42LDIyIDE4OC4yLDIyIDIwNi4xLDM0LjggMTk4LjgsNTUuNCAyMTYuOSw0MyAyMzQuOCw1NS40IDIyNy42LDM1LjEgMjQ1LjYsMjIuMSANCgkyMjQuMywyMi4xICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSIyNzksMiAyNzEuNywyMiAyNTAuNCwyMiAyNjguMiwzNC44IDI2MSw1NS40IDI3OSw0MyAyOTYuOSw1NS40IDI4OS44LDM1LjEgMzA3LjcsMjIuMSAyODYuNCwyMi4xICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MiIgcG9pbnRzPSIzMC41LDY5LjYgMjMuMyw4OS42IDEuOSw4OS41IDE5LjcsMTAyLjQgMTIuNSwxMjMgMzAuNSwxMTAuNSA0OC4xLDEyMiA0MS4zLDEwMi42IDU5LjIsODkuNyAzOCw4OS43IA0KCSIvPg0KPGNpcmNsZSBjbGFzcz0ic3QzIiBjeD0iMzAuNSIgY3k9IjI4LjciIHI9IjI2LjciLz4NCjxjaXJjbGUgY2xhc3M9InN0MyIgY3g9IjkyLjciIGN5PSIyOC43IiByPSIyNi43Ii8+DQo8Y2lyY2xlIGNsYXNzPSJzdDMiIGN4PSIxNTUuOCIgY3k9IjI4LjciIHI9IjI2LjciLz4NCjxjaXJjbGUgY2xhc3M9InN0NCIgY3g9IjIxNi45IiBjeT0iMjguNyIgcj0iMjYuNyIvPg0KPGVsbGlwc2UgdHJhbnNmb3JtPSJtYXRyaXgoMC4yMjk4IC0wLjk3MzIgMC45NzMyIDAuMjI5OCAxODYuOTY2NyAyOTMuNjQyNikiIGNsYXNzPSJzdDQiIGN4PSIyNzkiIGN5PSIyOC43IiByeD0iMjYuNyIgcnk9IjI2LjciLz4NCjxwYXRoIGNsYXNzPSJzdDMiIGQ9Ik0yMTYuOSw1NS40Yy0xNC43LDAtMjYuNy0xMi0yNi43LTI2LjdTMjAyLjIsMiwyMTYuOSwyVjU1LjR6Ii8+DQo8L3N2Zz4NCg==");}\n\n.icon-stars--4{background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNy4yLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAzMTAuNCA1Ni44IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzMTAuNCA1Ni44OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZGlzcGxheTpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS1taXRlcmxpbWl0OjEwO30NCgkuc3Qxe2Rpc3BsYXk6bm9uZTtmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQ0KCS5zdDJ7ZGlzcGxheTpub25lO30NCgkuc3Qze3N0cm9rZTojMDAwMDAwO3N0cm9rZS1taXRlcmxpbWl0OjEwO30NCgkuc3Q0e2ZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9DQo8L3N0eWxlPg0KPGltYWdlIHN0eWxlPSJkaXNwbGF5Om5vbmU7b3ZlcmZsb3c6dmlzaWJsZTtlbmFibGUtYmFja2dyb3VuZDpuZXcgICAgOyIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiB4bGluazpocmVmPSJBMjE0OUZEOS5wbmciICB0cmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAxIDUuNTUzMiAzLjgyOTgpIj4NCjwvaW1hZ2U+DQo8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjMwLjUsLTI0Ni40IDIzLjMsLTIyNi40IDEuOSwtMjI2LjQgMTkuNywtMjEzLjYgMTIuNSwtMTkzIDMwLjUsLTIwNS40IDQ4LjQsLTE5MyA0MS4zLC0yMTMuMyANCgk1OS4yLC0yMjYuMyAzOCwtMjI2LjMgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjkyLjcsLTI0Ni40IDg1LjQsLTIyNi40IDY0LC0yMjYuNCA4MS44LC0yMTMuNiA3NC42LC0xOTMgOTIuNywtMjA1LjQgMTEwLjYsLTE5MyAxMDMuNCwtMjEzLjMgDQoJMTIxLjMsLTIyNi4zIDEwMC4xLC0yMjYuMyAiLz4NCjxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iMTU0LjgsLTI0Ni40IDE0Ny41LC0yMjYuNCAxMjYuMSwtMjI2LjQgMTQzLjksLTIxMy42IDEzNi43LC0xOTMgMTU0LjgsLTIwNS40IDE3Mi43LC0xOTMgDQoJMTY1LjUsLTIxMy4zIDE4My40LC0yMjYuMyAxNjIuMiwtMjI2LjMgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjIxNi45LC0yNDYuNCAyMDkuNiwtMjI2LjQgMTg4LjIsLTIyNi40IDIwNi4xLC0yMTMuNiAxOTguOCwtMTkzIDIxNi45LC0yMDUuNCAyMzQuOCwtMTkzIA0KCTIyNy42LC0yMTMuMyAyNDUuNiwtMjI2LjMgMjI0LjMsLTIyNi4zICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSIyNzksLTI0Ni40IDI3MS43LC0yMjYuNCAyNTAuNCwtMjI2LjQgMjY4LjIsLTIxMy42IDI2MSwtMTkzIDI3OSwtMjA1LjQgMjk2LjksLTE5MyAyODkuOCwtMjEzLjMgDQoJMzA3LjcsLTIyNi4zIDI4Ni40LC0yMjYuMyAiLz4NCjxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iMzAuNSwtMTg0LjYgMjMuMywtMTY0LjYgMS45LC0xNjQuNiAxOS43LC0xNTEuOCAxMi41LC0xMzEuMiAzMC41LC0xNDMuNiA0OC40LC0xMzEuMiA0MS4zLC0xNTEuNiANCgk1OS4yLC0xNjQuNSAzOCwtMTY0LjUgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjkyLjcsLTE4NC42IDg1LjQsLTE2NC42IDY0LC0xNjQuNiA4MS44LC0xNTEuOCA3NC42LC0xMzEuMiA5Mi43LC0xNDMuNiAxMTAuNiwtMTMxLjIgMTAzLjQsLTE1MS42IA0KCTEyMS4zLC0xNjQuNSAxMDAuMSwtMTY0LjUgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjE1NC44LC0xODQuNiAxNDcuNSwtMTY0LjYgMTI2LjEsLTE2NC42IDE0My45LC0xNTEuOCAxMzYuNywtMTMxLjIgMTU0LjgsLTE0My42IDE3Mi43LC0xMzEuMiANCgkxNjUuNSwtMTUxLjYgMTgzLjQsLTE2NC41IDE2Mi4yLC0xNjQuNSAiLz4NCjxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iMjE2LjksLTE4NC42IDIwOS42LC0xNjQuNiAxODguMiwtMTY0LjYgMjA2LjEsLTE1MS44IDE5OC44LC0xMzEuMiAyMTYuOSwtMTQzLjYgMjM0LjgsLTEzMS4yIA0KCTIyNy42LC0xNTEuNiAyNDUuNiwtMTY0LjUgMjI0LjMsLTE2NC41ICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSIyNzksLTE4NC42IDI3MS43LC0xNjQuNiAyNTAuNCwtMTY0LjYgMjY4LjIsLTE1MS44IDI2MSwtMTMxLjIgMjc5LC0xNDMuNiAyOTYuOSwtMTMxLjIgMjg5LjgsLTE1MS42IA0KCTMwNy43LC0xNjQuNSAyODYuNCwtMTY0LjUgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjMwLjUsLTEyMi4zIDIzLjMsLTEwMi4zIDEuOSwtMTAyLjMgMTkuNywtODkuNSAxMi41LC02OC45IDMwLjUsLTgxLjMgNDguNCwtNjguOSA0MS4zLC04OS4zIA0KCTU5LjIsLTEwMi4yIDM4LC0xMDIuMiAiLz4NCjxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iOTIuNywtMTIyLjMgODUuNCwtMTAyLjMgNjQsLTEwMi4zIDgxLjgsLTg5LjUgNzQuNiwtNjguOSA5Mi43LC04MS4zIDExMC42LC02OC45IDEwMy40LC04OS4zIA0KCTEyMS4zLC0xMDIuMiAxMDAuMSwtMTAyLjIgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjE1NC44LC0xMjIuMyAxNDcuNSwtMTAyLjMgMTI2LjEsLTEwMi4zIDE0My45LC04OS41IDEzNi43LC02OC45IDE1NC44LC04MS4zIDE3Mi43LC02OC45IDE2NS41LC04OS4zIA0KCTE4My40LC0xMDIuMiAxNjIuMiwtMTAyLjIgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QxIiBwb2ludHM9IjIxNi45LC0xMjIuMyAyMDkuNiwtMTAyLjMgMTg4LjIsLTEwMi4zIDIwNi4xLC04OS41IDE5OC44LC02OC45IDIxNi45LC04MS4zIDIzNC44LC02OC45IDIyNy42LC04OS4zIA0KCTI0NS42LC0xMDIuMiAyMjQuMywtMTAyLjIgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QxIiBwb2ludHM9IjI3OSwtMTIyLjMgMjcxLjcsLTEwMi4zIDI1MC40LC0xMDIuMyAyNjguMiwtODkuNSAyNjEsLTY4LjkgMjc5LC04MS4zIDI5Ni45LC02OC45IDI4OS44LC04OS4zIA0KCTMwNy43LC0xMDIuMiAyODYuNCwtMTAyLjIgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjMwLjUsLTYwLjggMjMuMywtNDAuOCAxLjksLTQwLjggMTkuNywtMjggMTIuNSwtNy40IDMwLjUsLTE5LjggNDguNCwtNy40IDQxLjMsLTI3LjcgNTkuMiwtNDAuNyANCgkzOCwtNDAuNyAiLz4NCjxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iOTIuNywtNjAuOCA4NS40LC00MC44IDY0LC00MC44IDgxLjgsLTI4IDc0LjYsLTcuNCA5Mi43LC0xOS44IDExMC42LC03LjQgMTAzLjQsLTI3LjcgMTIxLjMsLTQwLjcgDQoJMTAwLjEsLTQwLjcgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QxIiBwb2ludHM9IjE1NC44LC02MC44IDE0Ny41LC00MC44IDEyNi4xLC00MC44IDE0My45LC0yOCAxMzYuNywtNy40IDE1NC44LC0xOS44IDE3Mi43LC03LjQgMTY1LjUsLTI3LjcgDQoJMTgzLjQsLTQwLjcgMTYyLjIsLTQwLjcgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QxIiBwb2ludHM9IjIxNi45LC02MC44IDIwOS42LC00MC44IDE4OC4yLC00MC44IDIwNi4xLC0yOCAxOTguOCwtNy40IDIxNi45LC0xOS44IDIzNC44LC03LjQgMjI3LjYsLTI3LjcgDQoJMjQ1LjYsLTQwLjcgMjI0LjMsLTQwLjcgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QxIiBwb2ludHM9IjI3OSwtNjAuOCAyNzEuNywtNDAuOCAyNTAuNCwtNDAuOCAyNjguMiwtMjggMjYxLC03LjQgMjc5LC0xOS44IDI5Ni45LC03LjQgMjg5LjgsLTI3LjcgMzA3LjcsLTQwLjcgDQoJMjg2LjQsLTQwLjcgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjMwLjUsMiAyMy4zLDIyIDEuOSwyMiAxOS43LDM0LjggMTIuNSw1NS40IDMwLjUsNDMgNDguNCw1NS40IDQxLjMsMzUuMSA1OS4yLDIyLjEgMzgsMjIuMSAiLz4NCjxwb2x5Z29uIGNsYXNzPSJzdDEiIHBvaW50cz0iOTIuNywyIDg1LjQsMjIgNjQsMjIgODEuOCwzNC44IDc0LjYsNTUuNCA5Mi43LDQzIDExMC42LDU1LjQgMTAzLjQsMzUuMSAxMjEuMywyMi4xIDEwMC4xLDIyLjEgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QxIiBwb2ludHM9IjE1NC44LDIgMTQ3LjUsMjIgMTI2LjEsMjIgMTQzLjksMzQuOCAxMzYuNyw1NS40IDE1NC44LDQzIDE3Mi43LDU1LjQgMTY1LjUsMzUuMSAxODMuNCwyMi4xIA0KCTE2Mi4yLDIyLjEgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QxIiBwb2ludHM9IjIxNi45LDIgMjA5LjYsMjIgMTg4LjIsMjIgMjA2LjEsMzQuOCAxOTguOCw1NS40IDIxNi45LDQzIDIzNC44LDU1LjQgMjI3LjYsMzUuMSAyNDUuNiwyMi4xIA0KCTIyNC4zLDIyLjEgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QxIiBwb2ludHM9IjI3OSwyIDI3MS43LDIyIDI1MC40LDIyIDI2OC4yLDM0LjggMjYxLDU1LjQgMjc5LDQzIDI5Ni45LDU1LjQgMjg5LjgsMzUuMSAzMDcuNywyMi4xIDI4Ni40LDIyLjEgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QyIiBwb2ludHM9IjMwLjUsNjkuNiAyMy4zLDg5LjYgMS45LDg5LjUgMTkuNywxMDIuNCAxMi41LDEyMyAzMC41LDExMC41IDQ4LjEsMTIyIDQxLjMsMTAyLjYgNTkuMiw4OS43IDM4LDg5LjcgDQoJIi8+DQo8Y2lyY2xlIGNsYXNzPSJzdDMiIGN4PSIzMC41IiBjeT0iMjguNyIgcj0iMjYuNyIvPg0KPGNpcmNsZSBjbGFzcz0ic3QzIiBjeD0iOTIuNyIgY3k9IjI4LjciIHI9IjI2LjciLz4NCjxjaXJjbGUgY2xhc3M9InN0MyIgY3g9IjE1NS44IiBjeT0iMjguNyIgcj0iMjYuNyIvPg0KPGNpcmNsZSBjbGFzcz0ic3QzIiBjeD0iMjE2LjkiIGN5PSIyOC43IiByPSIyNi43Ii8+DQo8Y2lyY2xlIGNsYXNzPSJzdDQiIGN4PSIyNzkiIGN5PSIyOC43IiByPSIyNi43Ii8+DQo8L3N2Zz4NCg==");}\n\n.icon-stars--4-half{background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNy4yLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAzMTAuNCA1Ni44IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzMTAuNCA1Ni44OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZGlzcGxheTpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS1taXRlcmxpbWl0OjEwO30NCgkuc3Qxe2Rpc3BsYXk6bm9uZTtmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQ0KCS5zdDJ7ZGlzcGxheTpub25lO30NCgkuc3Qze3N0cm9rZTojMDAwMDAwO3N0cm9rZS1taXRlcmxpbWl0OjEwO30NCgkuc3Q0e2ZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9DQo8L3N0eWxlPg0KPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSIzMC41LC0yNDYuNCAyMy4zLC0yMjYuNCAxLjksLTIyNi40IDE5LjcsLTIxMy42IDEyLjUsLTE5MyAzMC41LC0yMDUuNCA0OC40LC0xOTMgNDEuMywtMjEzLjMgDQoJNTkuMiwtMjI2LjMgMzgsLTIyNi4zICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSI5Mi43LC0yNDYuNCA4NS40LC0yMjYuNCA2NCwtMjI2LjQgODEuOCwtMjEzLjYgNzQuNiwtMTkzIDkyLjcsLTIwNS40IDExMC42LC0xOTMgMTAzLjQsLTIxMy4zIA0KCTEyMS4zLC0yMjYuMyAxMDAuMSwtMjI2LjMgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjE1NC44LC0yNDYuNCAxNDcuNSwtMjI2LjQgMTI2LjEsLTIyNi40IDE0My45LC0yMTMuNiAxMzYuNywtMTkzIDE1NC44LC0yMDUuNCAxNzIuNywtMTkzIA0KCTE2NS41LC0yMTMuMyAxODMuNCwtMjI2LjMgMTYyLjIsLTIyNi4zICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSIyMTYuOSwtMjQ2LjQgMjA5LjYsLTIyNi40IDE4OC4yLC0yMjYuNCAyMDYuMSwtMjEzLjYgMTk4LjgsLTE5MyAyMTYuOSwtMjA1LjQgMjM0LjgsLTE5MyANCgkyMjcuNiwtMjEzLjMgMjQ1LjYsLTIyNi4zIDIyNC4zLC0yMjYuMyAiLz4NCjxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iMjc5LC0yNDYuNCAyNzEuNywtMjI2LjQgMjUwLjQsLTIyNi40IDI2OC4yLC0yMTMuNiAyNjEsLTE5MyAyNzksLTIwNS40IDI5Ni45LC0xOTMgMjg5LjgsLTIxMy4zIA0KCTMwNy43LC0yMjYuMyAyODYuNCwtMjI2LjMgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjMwLjUsLTE4NC42IDIzLjMsLTE2NC42IDEuOSwtMTY0LjYgMTkuNywtMTUxLjggMTIuNSwtMTMxLjIgMzAuNSwtMTQzLjYgNDguNCwtMTMxLjIgNDEuMywtMTUxLjYgDQoJNTkuMiwtMTY0LjUgMzgsLTE2NC41ICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSI5Mi43LC0xODQuNiA4NS40LC0xNjQuNiA2NCwtMTY0LjYgODEuOCwtMTUxLjggNzQuNiwtMTMxLjIgOTIuNywtMTQzLjYgMTEwLjYsLTEzMS4yIDEwMy40LC0xNTEuNiANCgkxMjEuMywtMTY0LjUgMTAwLjEsLTE2NC41ICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSIxNTQuOCwtMTg0LjYgMTQ3LjUsLTE2NC42IDEyNi4xLC0xNjQuNiAxNDMuOSwtMTUxLjggMTM2LjcsLTEzMS4yIDE1NC44LC0xNDMuNiAxNzIuNywtMTMxLjIgDQoJMTY1LjUsLTE1MS42IDE4My40LC0xNjQuNSAxNjIuMiwtMTY0LjUgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjIxNi45LC0xODQuNiAyMDkuNiwtMTY0LjYgMTg4LjIsLTE2NC42IDIwNi4xLC0xNTEuOCAxOTguOCwtMTMxLjIgMjE2LjksLTE0My42IDIzNC44LC0xMzEuMiANCgkyMjcuNiwtMTUxLjYgMjQ1LjYsLTE2NC41IDIyNC4zLC0xNjQuNSAiLz4NCjxwb2x5Z29uIGNsYXNzPSJzdDEiIHBvaW50cz0iMjc5LC0xODQuNiAyNzEuNywtMTY0LjYgMjUwLjQsLTE2NC42IDI2OC4yLC0xNTEuOCAyNjEsLTEzMS4yIDI3OSwtMTQzLjYgMjk2LjksLTEzMS4yIDI4OS44LC0xNTEuNiANCgkzMDcuNywtMTY0LjUgMjg2LjQsLTE2NC41ICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSIzMC41LC0xMjIuMyAyMy4zLC0xMDIuMyAxLjksLTEwMi4zIDE5LjcsLTg5LjUgMTIuNSwtNjguOSAzMC41LC04MS4zIDQ4LjQsLTY4LjkgNDEuMywtODkuMyANCgk1OS4yLC0xMDIuMiAzOCwtMTAyLjIgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjkyLjcsLTEyMi4zIDg1LjQsLTEwMi4zIDY0LC0xMDIuMyA4MS44LC04OS41IDc0LjYsLTY4LjkgOTIuNywtODEuMyAxMTAuNiwtNjguOSAxMDMuNCwtODkuMyANCgkxMjEuMywtMTAyLjIgMTAwLjEsLTEwMi4yICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSIxNTQuOCwtMTIyLjMgMTQ3LjUsLTEwMi4zIDEyNi4xLC0xMDIuMyAxNDMuOSwtODkuNSAxMzYuNywtNjguOSAxNTQuOCwtODEuMyAxNzIuNywtNjguOSAxNjUuNSwtODkuMyANCgkxODMuNCwtMTAyLjIgMTYyLjIsLTEwMi4yICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSIyMTYuOSwtMTIyLjMgMjA5LjYsLTEwMi4zIDE4OC4yLC0xMDIuMyAyMDYuMSwtODkuNSAxOTguOCwtNjguOSAyMTYuOSwtODEuMyAyMzQuOCwtNjguOSAyMjcuNiwtODkuMyANCgkyNDUuNiwtMTAyLjIgMjI0LjMsLTEwMi4yICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSIyNzksLTEyMi4zIDI3MS43LC0xMDIuMyAyNTAuNCwtMTAyLjMgMjY4LjIsLTg5LjUgMjYxLC02OC45IDI3OSwtODEuMyAyOTYuOSwtNjguOSAyODkuOCwtODkuMyANCgkzMDcuNywtMTAyLjIgMjg2LjQsLTEwMi4yICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSIzMC41LC02MC44IDIzLjMsLTQwLjggMS45LC00MC44IDE5LjcsLTI4IDEyLjUsLTcuNCAzMC41LC0xOS44IDQ4LjQsLTcuNCA0MS4zLC0yNy43IDU5LjIsLTQwLjcgDQoJMzgsLTQwLjcgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjkyLjcsLTYwLjggODUuNCwtNDAuOCA2NCwtNDAuOCA4MS44LC0yOCA3NC42LC03LjQgOTIuNywtMTkuOCAxMTAuNiwtNy40IDEwMy40LC0yNy43IDEyMS4zLC00MC43IA0KCTEwMC4xLC00MC43ICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSIxNTQuOCwtNjAuOCAxNDcuNSwtNDAuOCAxMjYuMSwtNDAuOCAxNDMuOSwtMjggMTM2LjcsLTcuNCAxNTQuOCwtMTkuOCAxNzIuNywtNy40IDE2NS41LC0yNy43IA0KCTE4My40LC00MC43IDE2Mi4yLC00MC43ICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSIyMTYuOSwtNjAuOCAyMDkuNiwtNDAuOCAxODguMiwtNDAuOCAyMDYuMSwtMjggMTk4LjgsLTcuNCAyMTYuOSwtMTkuOCAyMzQuOCwtNy40IDIyNy42LC0yNy43IA0KCTI0NS42LC00MC43IDIyNC4zLC00MC43ICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSIyNzksLTYwLjggMjcxLjcsLTQwLjggMjUwLjQsLTQwLjggMjY4LjIsLTI4IDI2MSwtNy40IDI3OSwtMTkuOCAyOTYuOSwtNy40IDI4OS44LC0yNy43IDMwNy43LC00MC43IA0KCTI4Ni40LC00MC43ICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSIzMC41LDIgMjMuMywyMiAxLjksMjIgMTkuNywzNC44IDEyLjUsNTUuNCAzMC41LDQzIDQ4LjQsNTUuNCA0MS4zLDM1LjEgNTkuMiwyMi4xIDM4LDIyLjEgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QxIiBwb2ludHM9IjkyLjcsMiA4NS40LDIyIDY0LDIyIDgxLjgsMzQuOCA3NC42LDU1LjQgOTIuNyw0MyAxMTAuNiw1NS40IDEwMy40LDM1LjEgMTIxLjMsMjIuMSAxMDAuMSwyMi4xICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSIxNTQuOCwyIDE0Ny41LDIyIDEyNi4xLDIyIDE0My45LDM0LjggMTM2LjcsNTUuNCAxNTQuOCw0MyAxNzIuNyw1NS40IDE2NS41LDM1LjEgMTgzLjQsMjIuMSANCgkxNjIuMiwyMi4xICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSIyMTYuOSwyIDIwOS42LDIyIDE4OC4yLDIyIDIwNi4xLDM0LjggMTk4LjgsNTUuNCAyMTYuOSw0MyAyMzQuOCw1NS40IDIyNy42LDM1LjEgMjQ1LjYsMjIuMSANCgkyMjQuMywyMi4xICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSIyNzksMiAyNzEuNywyMiAyNTAuNCwyMiAyNjguMiwzNC44IDI2MSw1NS40IDI3OSw0MyAyOTYuOSw1NS40IDI4OS44LDM1LjEgMzA3LjcsMjIuMSAyODYuNCwyMi4xICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MiIgcG9pbnRzPSIzMC41LDY5LjYgMjMuMyw4OS42IDEuOSw4OS41IDE5LjcsMTAyLjQgMTIuNSwxMjMgMzAuNSwxMTAuNSA0OC4xLDEyMiA0MS4zLDEwMi42IDU5LjIsODkuNyAzOCw4OS43IA0KCSIvPg0KPGNpcmNsZSBjbGFzcz0ic3QzIiBjeD0iMzAuNSIgY3k9IjI4LjciIHI9IjI2LjciLz4NCjxjaXJjbGUgY2xhc3M9InN0MyIgY3g9IjkyLjciIGN5PSIyOC43IiByPSIyNi43Ii8+DQo8Y2lyY2xlIGNsYXNzPSJzdDMiIGN4PSIxNTUuOCIgY3k9IjI4LjciIHI9IjI2LjciLz4NCjxjaXJjbGUgY2xhc3M9InN0MyIgY3g9IjIxNi45IiBjeT0iMjguNyIgcj0iMjYuNyIvPg0KPGVsbGlwc2UgdHJhbnNmb3JtPSJtYXRyaXgoMC4yMjk4IC0wLjk3MzIgMC45NzMyIDAuMjI5OCAxODYuOTY2NyAyOTMuNjQyNikiIGNsYXNzPSJzdDQiIGN4PSIyNzkiIGN5PSIyOC43IiByeD0iMjYuNyIgcnk9IjI2LjciLz4NCjxwYXRoIGNsYXNzPSJzdDMiIGQ9Ik0yNzgsNTUuNGMtMTQuNywwLTI2LjctMTItMjYuNy0yNi43UzI2My4zLDIsMjc4LDJWNTUuNHoiLz4NCjwvc3ZnPg0K");}\n\n.icon-stars--5 {background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNy4yLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAzMTAuNCA1Ni44IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzMTAuNCA1Ni44OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZGlzcGxheTpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS1taXRlcmxpbWl0OjEwO30NCgkuc3Qxe2Rpc3BsYXk6bm9uZTtmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQ0KCS5zdDJ7ZGlzcGxheTpub25lO30NCgkuc3Qze3N0cm9rZTojMDAwMDAwO3N0cm9rZS1taXRlcmxpbWl0OjEwO30NCjwvc3R5bGU+DQo8aW1hZ2Ugc3R5bGU9ImRpc3BsYXk6bm9uZTtvdmVyZmxvdzp2aXNpYmxlO2VuYWJsZS1iYWNrZ3JvdW5kOm5ldyAgICA7IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHhsaW5rOmhyZWY9IkI4QTFDRUEwLnBuZyIgIHRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIDEgNS41NTMyIDMuODI5OCkiPg0KPC9pbWFnZT4NCjxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iMzAuNSwtMjQ2LjQgMjMuMywtMjI2LjQgMS45LC0yMjYuNCAxOS43LC0yMTMuNiAxMi41LC0xOTMgMzAuNSwtMjA1LjQgNDguNCwtMTkzIDQxLjMsLTIxMy4zIA0KCTU5LjIsLTIyNi4zIDM4LC0yMjYuMyAiLz4NCjxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iOTIuNywtMjQ2LjQgODUuNCwtMjI2LjQgNjQsLTIyNi40IDgxLjgsLTIxMy42IDc0LjYsLTE5MyA5Mi43LC0yMDUuNCAxMTAuNiwtMTkzIDEwMy40LC0yMTMuMyANCgkxMjEuMywtMjI2LjMgMTAwLjEsLTIyNi4zICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSIxNTQuOCwtMjQ2LjQgMTQ3LjUsLTIyNi40IDEyNi4xLC0yMjYuNCAxNDMuOSwtMjEzLjYgMTM2LjcsLTE5MyAxNTQuOCwtMjA1LjQgMTcyLjcsLTE5MyANCgkxNjUuNSwtMjEzLjMgMTgzLjQsLTIyNi4zIDE2Mi4yLC0yMjYuMyAiLz4NCjxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iMjE2LjksLTI0Ni40IDIwOS42LC0yMjYuNCAxODguMiwtMjI2LjQgMjA2LjEsLTIxMy42IDE5OC44LC0xOTMgMjE2LjksLTIwNS40IDIzNC44LC0xOTMgDQoJMjI3LjYsLTIxMy4zIDI0NS42LC0yMjYuMyAyMjQuMywtMjI2LjMgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjI3OSwtMjQ2LjQgMjcxLjcsLTIyNi40IDI1MC40LC0yMjYuNCAyNjguMiwtMjEzLjYgMjYxLC0xOTMgMjc5LC0yMDUuNCAyOTYuOSwtMTkzIDI4OS44LC0yMTMuMyANCgkzMDcuNywtMjI2LjMgMjg2LjQsLTIyNi4zICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSIzMC41LC0xODQuNiAyMy4zLC0xNjQuNiAxLjksLTE2NC42IDE5LjcsLTE1MS44IDEyLjUsLTEzMS4yIDMwLjUsLTE0My42IDQ4LjQsLTEzMS4yIDQxLjMsLTE1MS42IA0KCTU5LjIsLTE2NC41IDM4LC0xNjQuNSAiLz4NCjxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iOTIuNywtMTg0LjYgODUuNCwtMTY0LjYgNjQsLTE2NC42IDgxLjgsLTE1MS44IDc0LjYsLTEzMS4yIDkyLjcsLTE0My42IDExMC42LC0xMzEuMiAxMDMuNCwtMTUxLjYgDQoJMTIxLjMsLTE2NC41IDEwMC4xLC0xNjQuNSAiLz4NCjxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iMTU0LjgsLTE4NC42IDE0Ny41LC0xNjQuNiAxMjYuMSwtMTY0LjYgMTQzLjksLTE1MS44IDEzNi43LC0xMzEuMiAxNTQuOCwtMTQzLjYgMTcyLjcsLTEzMS4yIA0KCTE2NS41LC0xNTEuNiAxODMuNCwtMTY0LjUgMTYyLjIsLTE2NC41ICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSIyMTYuOSwtMTg0LjYgMjA5LjYsLTE2NC42IDE4OC4yLC0xNjQuNiAyMDYuMSwtMTUxLjggMTk4LjgsLTEzMS4yIDIxNi45LC0xNDMuNiAyMzQuOCwtMTMxLjIgDQoJMjI3LjYsLTE1MS42IDI0NS42LC0xNjQuNSAyMjQuMywtMTY0LjUgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QxIiBwb2ludHM9IjI3OSwtMTg0LjYgMjcxLjcsLTE2NC42IDI1MC40LC0xNjQuNiAyNjguMiwtMTUxLjggMjYxLC0xMzEuMiAyNzksLTE0My42IDI5Ni45LC0xMzEuMiAyODkuOCwtMTUxLjYgDQoJMzA3LjcsLTE2NC41IDI4Ni40LC0xNjQuNSAiLz4NCjxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iMzAuNSwtMTIyLjMgMjMuMywtMTAyLjMgMS45LC0xMDIuMyAxOS43LC04OS41IDEyLjUsLTY4LjkgMzAuNSwtODEuMyA0OC40LC02OC45IDQxLjMsLTg5LjMgDQoJNTkuMiwtMTAyLjIgMzgsLTEwMi4yICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSI5Mi43LC0xMjIuMyA4NS40LC0xMDIuMyA2NCwtMTAyLjMgODEuOCwtODkuNSA3NC42LC02OC45IDkyLjcsLTgxLjMgMTEwLjYsLTY4LjkgMTAzLjQsLTg5LjMgDQoJMTIxLjMsLTEwMi4yIDEwMC4xLC0xMDIuMiAiLz4NCjxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iMTU0LjgsLTEyMi4zIDE0Ny41LC0xMDIuMyAxMjYuMSwtMTAyLjMgMTQzLjksLTg5LjUgMTM2LjcsLTY4LjkgMTU0LjgsLTgxLjMgMTcyLjcsLTY4LjkgMTY1LjUsLTg5LjMgDQoJMTgzLjQsLTEwMi4yIDE2Mi4yLC0xMDIuMiAiLz4NCjxwb2x5Z29uIGNsYXNzPSJzdDEiIHBvaW50cz0iMjE2LjksLTEyMi4zIDIwOS42LC0xMDIuMyAxODguMiwtMTAyLjMgMjA2LjEsLTg5LjUgMTk4LjgsLTY4LjkgMjE2LjksLTgxLjMgMjM0LjgsLTY4LjkgMjI3LjYsLTg5LjMgDQoJMjQ1LjYsLTEwMi4yIDIyNC4zLC0xMDIuMiAiLz4NCjxwb2x5Z29uIGNsYXNzPSJzdDEiIHBvaW50cz0iMjc5LC0xMjIuMyAyNzEuNywtMTAyLjMgMjUwLjQsLTEwMi4zIDI2OC4yLC04OS41IDI2MSwtNjguOSAyNzksLTgxLjMgMjk2LjksLTY4LjkgMjg5LjgsLTg5LjMgDQoJMzA3LjcsLTEwMi4yIDI4Ni40LC0xMDIuMiAiLz4NCjxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iMzAuNSwtNjAuOCAyMy4zLC00MC44IDEuOSwtNDAuOCAxOS43LC0yOCAxMi41LC03LjQgMzAuNSwtMTkuOCA0OC40LC03LjQgNDEuMywtMjcuNyA1OS4yLC00MC43IA0KCTM4LC00MC43ICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSI5Mi43LC02MC44IDg1LjQsLTQwLjggNjQsLTQwLjggODEuOCwtMjggNzQuNiwtNy40IDkyLjcsLTE5LjggMTEwLjYsLTcuNCAxMDMuNCwtMjcuNyAxMjEuMywtNDAuNyANCgkxMDAuMSwtNDAuNyAiLz4NCjxwb2x5Z29uIGNsYXNzPSJzdDEiIHBvaW50cz0iMTU0LjgsLTYwLjggMTQ3LjUsLTQwLjggMTI2LjEsLTQwLjggMTQzLjksLTI4IDEzNi43LC03LjQgMTU0LjgsLTE5LjggMTcyLjcsLTcuNCAxNjUuNSwtMjcuNyANCgkxODMuNCwtNDAuNyAxNjIuMiwtNDAuNyAiLz4NCjxwb2x5Z29uIGNsYXNzPSJzdDEiIHBvaW50cz0iMjE2LjksLTYwLjggMjA5LjYsLTQwLjggMTg4LjIsLTQwLjggMjA2LjEsLTI4IDE5OC44LC03LjQgMjE2LjksLTE5LjggMjM0LjgsLTcuNCAyMjcuNiwtMjcuNyANCgkyNDUuNiwtNDAuNyAyMjQuMywtNDAuNyAiLz4NCjxwb2x5Z29uIGNsYXNzPSJzdDEiIHBvaW50cz0iMjc5LC02MC44IDI3MS43LC00MC44IDI1MC40LC00MC44IDI2OC4yLC0yOCAyNjEsLTcuNCAyNzksLTE5LjggMjk2LjksLTcuNCAyODkuOCwtMjcuNyAzMDcuNywtNDAuNyANCgkyODYuNCwtNDAuNyAiLz4NCjxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iMzAuNSwyIDIzLjMsMjIgMS45LDIyIDE5LjcsMzQuOCAxMi41LDU1LjQgMzAuNSw0MyA0OC40LDU1LjQgNDEuMywzNS4xIDU5LjIsMjIuMSAzOCwyMi4xICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSI5Mi43LDIgODUuNCwyMiA2NCwyMiA4MS44LDM0LjggNzQuNiw1NS40IDkyLjcsNDMgMTEwLjYsNTUuNCAxMDMuNCwzNS4xIDEyMS4zLDIyLjEgMTAwLjEsMjIuMSAiLz4NCjxwb2x5Z29uIGNsYXNzPSJzdDEiIHBvaW50cz0iMTU0LjgsMiAxNDcuNSwyMiAxMjYuMSwyMiAxNDMuOSwzNC44IDEzNi43LDU1LjQgMTU0LjgsNDMgMTcyLjcsNTUuNCAxNjUuNSwzNS4xIDE4My40LDIyLjEgDQoJMTYyLjIsMjIuMSAiLz4NCjxwb2x5Z29uIGNsYXNzPSJzdDEiIHBvaW50cz0iMjE2LjksMiAyMDkuNiwyMiAxODguMiwyMiAyMDYuMSwzNC44IDE5OC44LDU1LjQgMjE2LjksNDMgMjM0LjgsNTUuNCAyMjcuNiwzNS4xIDI0NS42LDIyLjEgDQoJMjI0LjMsMjIuMSAiLz4NCjxwb2x5Z29uIGNsYXNzPSJzdDEiIHBvaW50cz0iMjc5LDIgMjcxLjcsMjIgMjUwLjQsMjIgMjY4LjIsMzQuOCAyNjEsNTUuNCAyNzksNDMgMjk2LjksNTUuNCAyODkuOCwzNS4xIDMwNy43LDIyLjEgMjg2LjQsMjIuMSAiLz4NCjxwb2x5Z29uIGNsYXNzPSJzdDIiIHBvaW50cz0iMzAuNSw2OS42IDIzLjMsODkuNiAxLjksODkuNSAxOS43LDEwMi40IDEyLjUsMTIzIDMwLjUsMTEwLjUgNDguMSwxMjIgNDEuMywxMDIuNiA1OS4yLDg5LjcgMzgsODkuNyANCgkiLz4NCjxjaXJjbGUgY2xhc3M9InN0MyIgY3g9IjMwLjUiIGN5PSIyOC43IiByPSIyNi43Ii8+DQo8Y2lyY2xlIGNsYXNzPSJzdDMiIGN4PSI5Mi43IiBjeT0iMjguNyIgcj0iMjYuNyIvPg0KPGNpcmNsZSBjbGFzcz0ic3QzIiBjeD0iMTU1LjgiIGN5PSIyOC43IiByPSIyNi43Ii8+DQo8Y2lyY2xlIGNsYXNzPSJzdDMiIGN4PSIyMTYuOSIgY3k9IjI4LjciIHI9IjI2LjciLz4NCjxjaXJjbGUgY2xhc3M9InN0MyIgY3g9IjI3OSIgY3k9IjI4LjciIHI9IjI2LjciLz4NCjwvc3ZnPg0K");}\n',
        }}
      />
      <style
        dangerouslySetInnerHTML={{
          __html:
            '\n.component-wrapper-price--info__icon-stars.icon-stars.icon-stars--small, .recommended__wheretobuy__items .quality-stars--small .icon-stars {width: 8rem !important;}\n.component-recommended-product__row .component-recommended-product__item__product--features{max-width:350px;}\n',
        }}
      />
      <style
        dangerouslySetInnerHTML={{
          __html:
            '\n.component-sirius--lab a:hover {color: #fff;}\n.component-list-grid.tags-paywall .component-wrapper-price--offer .flex__col:has(.component-sirius) {flex: 100%;}\n@media screen and (min-width: 53.1875em) {.component-list-grid.tags-paywall .component-list-grid__item__product--details--item-quality {flex: 0 0 55% !important;}}\n\n@media screen and (min-width: 53.125em){.component-list-grid .list .component-list-grid__action-bar__item-quality {flex: auto !important;}}\n@media screen and (min-width: 53.125em){ .quality-label.quality-label--green-choice, .quality-label.quality-label--cheap-choice {z-index:1 !important;}}\n@media screen and (min-width: 53.125em){#detail-header__product-highlight .component-sirius {width: 1020px !important;}}\n#detail-header__product-highlight .component-detail-header__item-quality {flex: 0 0 56%;}\n\n.special-campaign a.btn.btn--primary { text-decoration: none }\n\n.collapsible-box__content .split--striped .split__item .icon-stars--small {width : 8rem !important;}\n\n.icon-stars--highlight,  .icon-stars--highlight--conditional,  .icon-stars--highlight, .icon-stars--highlight--conditional {padding: 0 !important;}\n\n.compare-table .icon-stars {padding: 0 !important;}\n\n.sticky-container:has(.compare-table) { top: 8.5rem !important;}\n\n@media screen and (max-width: 30em) {\n  .compare-wrapper{ margin-top: 11rem; }\n  .sticky-container:has(.compare-table) { top: 11.5rem !important; }\n}\n\n.component-yellow-boutique--item-quality .quality-label-wrapper--small .quality-label__label-text { font-size: 0.8rem !important; }\n\n.component-yellow-boutique--item-quality .quality-label-wrapper--small .quality-label{margin: 0 0 0 -4px !important;}\n@media screen and (max-width: 30em) { .component-yellow-boutique{margin: 1rem;} }\n\n@media screen and (min-width: 53.125em) { .component-yellow-boutique--item { max-width: 33.3333333333% !important; } }\n\n.component-lap-highlight.deal-of-the-day .component-lap-highlight__deal-of-the-day--get-personalized-deal .btn--medium{\n\t\tbackground-color: #fff;\n\t\tcolor: #b60a73;\n}\n',
        }}
      />
      <style
        dangerouslySetInnerHTML={{
          __html:
            '\n@media screen and (min-width: 53.125em) {\n                    .component-lap-highlight__item .customlabels-gridview,\n                    .component-recommended-product__wrapper .customlabels-gridview { display:none; } }\n',
        }}
      />
      <style
        dangerouslySetInnerHTML={{
          __html:
            '\n.component-best-deals-offers--item .component-wrapper-price{max-height:23rem;}\n',
        }}
      />
      {/* Garden 2025/01/14 - Safari fix for menu  */}
      <style
        dangerouslySetInnerHTML={{
          __html:
            '\n@media screen and (min-width: 53.125em) {\n        _::-webkit-full-page-media, .FEOMHeader .menu {\n        z-index: 9999999!important;\n    }\n        _::-webkit-full-page-media, .FEOMHeader .menu ul.level1 {\n        left: 0!important;\n    }\n        _::-webkit-full-page-media, .FEOMHeader .menu ul.level1,.FEOMHeader .menu ul.level1 .level2,.FEOMHeader .menu ul.level1 .level3,.FEOMHeader .menu ul.level1 .level4,.FEOMHeader .menu ul.level1 .level4 .extra,.FEOMHeader .menu ul.level1:before {\n            max-height: unset!important;\n        }\n        _::-webkit-full-page-media, .FEOMHeader.hasSkinDesktop .menu ul.level1,.FEOMHeader.hasSkinDesktop .menu ul.level1 .level2,.FEOMHeader.hasSkinDesktop .menu ul.level1 .level3,.FEOMHeader.hasSkinDesktop .menu ul.level1 .level4,.FEOMHeader.hasSkinDesktop .menu ul.level1 .level4 .extra,.FEOMHeader.hasSkinDesktop .menu ul.level1:before {\n            max-height: unset!important;\n        }\n        _::-webkit-full-page-media, .FEOMHeader.is-fixed .menu ul.level1,.FEOMHeader.is-fixed .menu ul.level1 .level2,.FEOMHeader.is-fixed .menu ul.level1 .level3,.FEOMHeader.is-fixed .menu ul.level1 .level4,.FEOMHeader.is-fixed .menu ul.level1 .level4 .extra,.FEOMHeader.is-fixed .menu ul.level1:before {\n            max-height: unset!important;\n        }\n}\n',
        }}
      />
      {/* MP*/}
    </>
  );
};

export default Layout;
