/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable @next/next/no-css-tags */
/**
 * This Layout is needed for Starter Kit.
 */
import React, { useEffect } from 'react';
import Head from 'next/head';
import {
  Placeholder,
  LayoutServiceData,
  Field,
  HTMLLink,
  ImageField,
  useSitecoreContext,
} from '@sitecore-jss/sitecore-jss-nextjs';
import config from 'temp/config';
import Scripts from 'src/Scripts';

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

  const { sitecoreContext } = useSitecoreContext();
  const lang = sitecoreContext.language || 'en'; // Default to 'en'

  useEffect(() => {
    document.documentElement.lang = lang; // Dynamically set the lang attribute
  }, [lang]);

  return (
    <>
      <Scripts />
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

        <script type="application/ld+json">
          {`
         {
           "@context": "http://schema.org",
           "@type": "Organization",
           "name": "Jumeirah",
           "description": "Today, Jumeirah is a Dubai national champion and an acclaimed luxury hospitality leader — operating 24 Jumeirah branded properties (6,747 keys) in eight countries. As exemplified through its flagship hotel, and global icon, Burj Al Arab, Jumeirah has transformed the way that luxury is defined.",
           "image": "https://cdn.jumeirah.com/-/mediadh/dh/hospitality/jumeirah/hotels/dubai/madinat-jumeirah/mina-a-salam-at-madinat-jumeirah/hotel-activity/6-4-activities-a-new-side-of-dubai_jumeirah-mina-a-salam-fireworks-madinat-view_landscape/jumeirah_executive-team_6_4_landscape.jpg?modified=20191111172702",
           "logo":"https://cdn.jumeirah.com/-/mediadh/dh/hospitality/jumeirah/logo/redesign/jumeirah_logo_whitesvg.svg?modified=20240428154803",
           "url": "https://www.jumeirah.com",
           "telephone": "+971 43665000",
           "sameAs":["https://www.facebook.com/Jumeirah","https://www.instagram.com/jumeirah/?hl=en","https://twitter.com/jumeirah","https://www.youtube.com/@Jumeirah","https://www.linkedin.com/company/jumeirah/"],
           "address": {
           "@type": "PostalAddress",
           "streetAddress": "Level 5, Building 5 Dubai Design District",
           "addressLocality": "Dubai",
           "postalCode": "73137",
           "addressCountry": "United Arab Emirates"
           }
         }
           `}
        </script>
        <title data-react-helmet="true">Jumeirah | Hotels in Europe, Middle East &amp; Asia</title>
        <meta
          data-react-helmet="true"
          name="description"
          content="View our full range of luxury hotel destinations across Europe, the Middle East &amp; Asia regions. Explore Jumeirah hotels online."
        />
        <meta data-react-helmet="true" name="keywords" content="" />
        <meta data-react-helmet="true" name="robots" content="" />
        <meta data-react-helmet="true" http-equiv="content-language" content="en" />
        <link
          data-react-helmet="true"
          rel="shortcut icon"
          href="https://cdn.jumeirah.com/-/mediadh/dh/hospitality/jumeirah/logo/redesign/JUM_Symbol_Favicon_16x16px"
        />
        <link data-react-helmet="true" rel="canonical" href="https://www.jumeirah.com/en" />
        <link
          data-react-helmet="true"
          rel="alternate"
          lang="ar"
          href="https://www.jumeirah.com/ar"
        />
        <link
          data-react-helmet="true"
          rel="alternate"
          lang="x-default"
          href="https://www.jumeirah.com/en"
        />
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="theme-color" content="#000000" />
        <meta http-equiv="X-UA-Compatible" content="IE=11" />
        <meta name="csrf-token" content="" />
        <meta name="yandex-verification" content="b635670737a668ab" />
        <script
          type="text/javascript"
          async
          src="https://cdnjs.cloudflare.com/ajax/libs/js-sha256/0.9.0/sha256.min.js"
        ></script>
        <script
          type="text/javascript"
          async
          src="https://www.googletagmanager.com/gtag/destination?id=DC-5453241&amp;l=dataLayer&amp;cx=c"
        ></script>
        <script
          type="text/javascript"
          async
          src="https://www.googletagmanager.com/gtm.js?id=GTM-529JMGM&amp;l=dataLayer"
        ></script>
        <script
          type="text/javascript"
          async
          src="https://www.googletagmanager.com/gtm.js?id=GTM-KFNMWKPL&amp;l=dataLayer"
        ></script>
        <script async src="https://www.googletagmanager.com/gtm.js?id=GTM-5K3ZSGQ8"></script>
        <script
          type="text/javascript"
          async
          src="https://www.googletagmanager.com/gtag/destination?id=AW-1007407178&amp;l=dataLayer&amp;cx=c"
        ></script>
        <script
          async
          data-client-key="sdk-PXAv8xBECnCtK"
          src="https://cdn.jsdelivr.net/npm/@growthbook/growthbook/dist/bundles/auto.min.js"
        ></script>
        <script src="https://player.vimeo.com/api/player.js"></script>
        <script>{`if(document&&void 0!==typeof document){let e=document.getElementsByTagName("head");const n=document.createElement("script");n.src="https://cdnjs.cloudflare.com/ajax/libs/js-sha256/0.11.0/sha256.min.js",n.integrity="sha512-ILKpRqba412W8PeOVNfPfJ95lNQ5iOOqTqZNHPbpKjHaYmaxsKme/XILmAamM8qnXnYQt+fM0jI5woK2ikbh7Q==",n.crossorigin="anonymous",n.referrerpolicy="no-referrer",e&&e[0]&&e[0].appendChild(n);(()=>{if("undefined"!=typeof window&&window&&navigator.userAgent.includes("Instagram")){/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream?window.open(window.location.href,"_blank"):window.location="intent:"+window.location.href+"#Intent;end"}})()}</script><script>void 0!==typeof window&&function(){function a(){dataLayer.push(arguments)}window.dataLayer=window.dataLayer||[],a("consent","default",{ad_personalization:"denied",ad_storage:"denied",ad_user_data:"denied",analytics_storage:"denied",functionality_storage:"denied",personalization_storage:"denied",security_storage:"granted",wait_for_update:500,region:["GB","CN","SA","AT","BE","BG","HR","CY","CZ","DK","EE","FI","FR","DE","GR","HU","IE","IT","LV","LT","LU","MT","NL","PL","PT","RO","SK","SI","ES","SE","NO","IS","LI"]}),a("set","ads_data_redaction",!0),a("set","url_passthrough",!1)}(window,document)</script><script>var isB2B=function(){if(void 0!==typeof window){var n=window.location.pathname;return!(!n.includes("agent-booking")&&!n.includes("business-admin"))}},sevenRoomIframe=function(){if(void 0!==typeof window){var n=window.location.pathname;return!(!n.includes("restaurant-booking")&&!n.includes("booking/restaurant-booking"))}}</script><script>isB2B()?function(e,t,a,n,r){e[n]=e[n]||[],e[n].push({"gtm.start":(new Date).getTime(),event:"gtm.js"});var m=t.getElementsByTagName(a)[0],s=t.createElement(a);s.async=!0,s.src="https://www.googletagmanager.com/gtm.js?id=GTM-MJ9RN7J",m.parentNode.insertBefore(s,m)}(window,document,"script","dataLayer"):function(e,t,a,n,r){let m=e.location.pathname;if(e[n]=e[n]||[],!m.includes("recruitment-privacy-notice")&&!m.includes("recruitment-privacy-policy")&&!m.includes("Cookies-Notice-Jumeirah-Recruitment")){e[n].push({"gtm.start":(new Date).getTime(),event:"gtm.js"});var s=t.getElementsByTagName(a)[0],i=t.createElement(a);i.async=!0,i.src="https://www.googletagmanager.com/gtm.js?id=GTM-5K3ZSGQ8",s.parentNode.insertBefore(i,s)}}(window,document,"script","dataLayer"),sevenRoomIframe()&&function(e,t,a,n,r){e[n]=e[n]||[],e[n].push({"gtm.start":(new Date).getTime(),event:"gtm.js"});var m=t.getElementsByTagName(a)[0],s=t.createElement(a);s.async=!0,s.src="https://www.googletagmanager.com/gtm.js?id=GTM-WG4TWX6",m.parentNode.insertBefore(s,m)}(window,document,"script","dataLayer")`}</script>
        <style>{`df-messenger{--df-messenger-button-titlebar-color:#9f9258;--df-messenger-chat-backgroundColor:#e2e2e2;--df-messenger-user-message:#f4f29d;--df-messenger-send-icon:#c5a61d}`}</style>
        <link href="https://www.jumeirah.com/static/css/main.8838062d.css" rel="stylesheet" />
        <script>{`(window.BOOMR_mq=window.BOOMR_mq||[]).push(["addVar",{"rua.upush":"false","rua.cpush":"false","rua.upre":"false","rua.cpre":"false","rua.uprl":"false","rua.cprl":"false","rua.cprf":"false","rua.trans":"","rua.cook":"false","rua.ims":"false","rua.ufprl":"false","rua.cfprl":"false","rua.isuxp":"false","rua.texp":"norulematch","rua.ceh":"false","rua.ueh":"false","rua.ieh.st":{0}}]);`}</script>
        <script>
          {`!function(e){var n="https://s.go-mpulse.net/boomerang/";if("False"=="True")e.BOOMR_config=e.BOOMR_config||{},e.BOOMR_config.PageParams=e.BOOMR_config.PageParams||{},e.BOOMR_config.PageParams.pci=!0,n="https://s2.go-mpulse.net/boomerang/";if(window.BOOMR_API_key="HNHQ2-3S8S4-AT4WB-V2SXU-YRK89",function(){function e(){if(!r){var e=document.createElement("script");e.id="boomr-scr-as",e.src=window.BOOMR.url,e.async=!0,o.appendChild(e),r=!0}}function t(e){r=!0;var n,t,a,i,d=document,O=window;if(window.BOOMR.snippetMethod=e?"if":"i",t=function(e,n){var t=d.createElement("script");t.id=n||"boomr-if-as",t.src=window.BOOMR.url,BOOMR_lstart=(new Date).getTime(),e=e||d.body,e.appendChild(t)},!window.addEventListener&&window.attachEvent&&navigator.userAgent.match(/MSIE [67]\./))return window.BOOMR.snippetMethod="s",void t(o,"boomr-async");a=document.createElement("IFRAME"),a.src="about:blank",a.title="",a.role="presentation",a.loading="eager",i=(a.frameElement||a).style,i.width=0,i.height=0,i.border=0,i.display="none",o.appendChild(a);try{O=a.contentWindow,d=O.document.open()}catch(_){n=document.domain,a.src="javascript:var d=document.open();d.domain='"+n+"';void 0;",O=a.contentWindow,d=O.document.open()}if(n)d._boomrl=function(){this.domain=n,t()},d.write("<bo"+"dy onload='document._boomrl();'>");else if(O._boomrl=function(){t()},O.addEventListener)O.addEventListener("load",O._boomrl,!1);else if(O.attachEvent)O.attachEvent("onload",O._boomrl);d.close()}function a(e){window.BOOMR_onload=e&&e.timeStamp||(new Date).getTime()}if(!window.BOOMR||!window.BOOMR.version&&!window.BOOMR.snippetExecuted){window.BOOMR=window.BOOMR||{},window.BOOMR.snippetStart=(new Date).getTime(),window.BOOMR.snippetExecuted=!0,window.BOOMR.snippetVersion=14,window.BOOMR.url=n+"HNHQ2-3S8S4-AT4WB-V2SXU-YRK89";var i=document.currentScript||document.getElementsByTagName("script")[0],o=i.parentNode,r=!1,d=document.createElement("link");if(d.relList&&"function"==typeof d.relList.supports&&d.relList.supports("preload")&&"as"in d)window.BOOMR.snippetMethod="p",d.href=window.BOOMR.url,d.rel="preload",d.as="script",d.addEventListener("load",e),d.addEventListener("error",function(){t(!0)}),setTimeout(function(){if(!r)t(!0)},3e3),BOOMR_lstart=(new Date).getTime(),o.appendChild(d);else t(!1);if(window.addEventListener)window.addEventListener("load",a,!1);else if(window.attachEvent)window.attachEvent("onload",a)}}(),"".length>0)if(e&&"performance"in e&&e.performance&&"function"==typeof e.performance.setResourceTimingBufferSize)e.performance.setResourceTimingBufferSize();!function(){if(BOOMR=e.BOOMR||{},BOOMR.plugins=BOOMR.plugins||{},!BOOMR.plugins.AK){var n=""=="true"?1:0,t="",a="2b725raxfvwcmzyqzsuq-f-d47393f0e-clientnsv4-s.akamaihd.net",i="false"=="true"?2:1,o={"ak.v":"39","ak.cp":"268163","ak.ai":parseInt("165976",10),"ak.ol":{0},"ak.cr":42,"ak.ipv":4,"ak.proto":"h2","ak.rid":"120a58c2","ak.r":40610,"ak.a2":n,"ak.m":"dsca","ak.n":"essl","ak.bpcip":"208.127.174.0","ak.cport":41010,"ak.gh":"23.67.40.33","ak.quicv":"","ak.tlsv":"tls1.3","ak.0rtt":"","ak.0rtt.ed":"","ak.csrc":"-","ak.acc":"","ak.t":"1729154217","ak.ak":"hOBiQwZUYzCg5VSAfCLimQ==t1Ryut3uHZwvHDb32Wn3kx6TR3RIz0HlxUSpZZX+zeTC5XDLVnKqWCoKJ8qDUTtuYpPEKNLPVp95pJ4wN97cr1+BJTqSHgAdJm/0z1uH7FT5bueD+y5ZV7XZLI/v/b7dJGQcUzkELQrmKzcDIGt5DHW/AYjgxW/3ORiFhaxDDVk5TdadQjtX0pAThM7w4CniZKL8Jyp/dNYQ/Q9HxdchCS9d505rMeZbTBUMPrT5NZVFrK9FDZElfy9bsutZ5t1waUKz21FcFOxGJcH5QNouxXSN0CHJk1wVbdFiP5ouEgHj2n4T8ff68rNrxAQp8O/GWCEyTXO/+tgk3PTJDdHZq9xaj+JEklwOGORD37va2dIOv3RABxk/noKuj2ClNWgwHK62PZAu1I+CHCc0xtIWBKvMM0M9H54eL8y9+2OKwF0=","ak.pv":"174","ak.dpoabenc":"","ak.tf":i};if(""!==t)o["ak.ruds"]=t;var r={i:!1,av:function(n){var t="http.initiator";if(n&&(!n[t]||"spa_hard"===n[t]))o["ak.feo"]=void 0!==e.aFeoApplied?1:0,BOOMR.addVar(o)},rv:function(){var e=["ak.bpcip","ak.cport","ak.cr","ak.csrc","ak.gh","ak.ipv","ak.m","ak.n","ak.ol","ak.proto","ak.quicv","ak.tlsv","ak.0rtt","ak.0rtt.ed","ak.r","ak.acc","ak.t","ak.tf"];BOOMR.removeVar(e)}};BOOMR.plugins.AK={akVars:o,akDNSPreFetchDomain:a,init:function(){if(!r.i){var e=BOOMR.subscribe;e("before_beacon",r.av,null,null),e("onbeacon",r.rv,null,null),r.i=!0}return this},is_complete:function(){return!0}}}}()}(window);`}
        </script>
      </Head>

      <body>
        <script>{`if(self==top){var theBody=document.getElementsByTagName("body")[0];theBody.style.display="block"}else top.location=self.location`}</script>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <div id="root" className={mainClassPageEditing}>
          <div className=" container-fluid desktop-device false home">
            <div className="  ">
              {route && <Placeholder name="headless-header" rendering={route} />}
            </div>
            <div className="  "></div>
            <div className="  ">
              {route && <Placeholder name="headless-main" rendering={route} />}
            </div>
            <div className="  ">
              {route && <Placeholder name="headless-footer" rendering={route} />}
            </div>
          </div>
        </div>
      </body>
    </>
  );
};

export default Layout;
