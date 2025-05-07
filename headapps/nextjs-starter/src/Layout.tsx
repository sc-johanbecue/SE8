/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/next-script-for-ga */
/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable @next/next/no-css-tags */
/**
 * This Layout is needed for Starter Kit.
 */
import React, { useEffect } from 'react';
import Head from 'next/head';
import { Placeholder, LayoutServiceData, Field, HTMLLink } from '@sitecore-jss/sitecore-jss-nextjs';
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
}

const Layout = ({ layoutData, headLinks }: LayoutProps): JSX.Element => {
  const { route } = layoutData.sitecore;
  const fields = route?.fields as RouteFields;
  const isPageEditing = layoutData.sitecore.context.pageEditing;
  const mainClassPageEditing = isPageEditing ? 'editing-mode' : 'prod-mode';

  useEffect(() => {
    const mobileLinksWrapper = document.getElementById('mobile-links');
    const allHeaderLinks = document.querySelectorAll('.header-link');
    let linksHtml = '';

    if (allHeaderLinks.length > 0) {
      for (let i = 0; i < allHeaderLinks.length; i++) {
        linksHtml += `<div class="contact-us">${allHeaderLinks[i].innerHTML}</div>`;
      }
    }

    if (mobileLinksWrapper) {
      mobileLinksWrapper.innerHTML = linksHtml;
    }

    const languageLinks = document.getElementById('desctop-language-switcher');
    if (languageLinks != null) {
      const mobileLanguageLinksWrapper = document.querySelectorAll('.mobile-language-wrapper');

      if (mobileLanguageLinksWrapper.length > 0) {
        for (let i = 0; i < mobileLanguageLinksWrapper.length; i++) {
          mobileLanguageLinksWrapper[i].innerHTML = languageLinks.innerHTML;
        }
      }
    }
  }, []);

  return (
    <>
      <Scripts />
      <Head>
        <title>{fields?.Title?.value?.toString() || 'Page'}</title>
        <link rel="icon" href={`${publicUrl}/favicon.ico`} />
        {headLinks.map((headLink) => (
          <link rel={headLink.rel} key={headLink.href} href={headLink.href} />
        ))}

        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="robots" content="index, follow" />
        <title>Discover our Lifestyle &amp; Retail Brands | Majid Al Futtaim</title>
        <link
          href="/ResourcePackages/Corporate/assets/dist/css/main.css?v=20250429122338&amp;package=Corporate"
          rel="stylesheet"
          type="text/css"
        />
        <link
          rel="icon"
          hrefLang="en"
          href="https://www.majidalfuttaim.com/ResourcePackages/Corporate/assets/dist/images/favicon.ico"
          sizes="16x16"
          type="image/ico"
        />
        <script
          src="https://www.majidalfuttaim.com/ScriptResource.axd?d=6DQe8ARl7A9TiuWej5ttCu66KZaIrYJ4HJsg7u0d4xtJ1piv8IwjRas0Okmm8D8CHxsIT0Gd52RhSVFpkQ9pqIxuDByg_GbrwTbEQg0Hnwk7EAcLewPx24Z3XpyemqSX-3BYYvAOZY6-SsRJt4aIeTC6xmCd3pntyRs6PEIqhJlbvUL3JW56kOWvQH1Fm56d0&amp;t=ffffffffd98db9f4"
          type="text/javascript"
        ></script>
        <script
          src="https://www.majidalfuttaim.com/ScriptResource.axd?d=dJqyoTStQGFGCcNtOAFUcubRzMiG5AdbAhvxCF09rybO_Vz1n_vNxwx3Ulc70hZ31kPojHCQymMYdGM_7i4gL-wdBh_X75QruqMYL2kJKo4wXFsGWKWYOTGoUTwB7oPPFAKsb8BIHDT5XzbYtpqdmjOwKaPcW2P_OcG9GyWIn2M9exLj_FIzbG8QfPs6LoSI0&amp;t=ffffffffd98db9f4"
          type="text/javascript"
        ></script>

        <script
          src="https://cdn.cookielaw.org/scripttemplates/otSDKStub.js"
          type="text/javascript"
          charSet="UTF-8"
          data-domain-script="3e0f51c3-cba8-4d25-b793-887443d94205"
        ></script>
        <script type="text/javascript">function OptanonWrapper() {}</script>
        <meta
          property="og:image"
          content="https://www.majidalfuttaim.com/images/default-source/industry/brandfashion.jpg?sfvrsn=2ba5ebce_7"
        />
        <meta
          property="twitter:image"
          content="https://www.majidalfuttaim.com/images/default-source/industry/brandfashion.jpg?sfvrsn=2ba5ebce_7"
        />
        <meta
          property="og:title"
          content="Discover our Lifestyle &amp;amp; Retail Brands | Majid Al Futtaim"
        />
        <meta
          property="og:description"
          content="Majid Al Futtaim Lifestyle brings world-class Lifestyle and retail brands to the region, with more than 100 stores across the MENA region. Click here for more."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.majidalfuttaim.com/en/what-we-do/our-industries/industry/lifestyle"
        />
        <meta property="og:site_name" content="Majid Al Futtaim" />
        <script type="text/javascript">
          {`
         (function (w, d, s, l, i) {w[l] = w[l] || []; w[l].push({'gtm.start':new Date().getTime(), event: 'gtm.js'}); var f = d.getElementsByTagName(s)[0],j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src ='https://www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f);})(window, document, 'script', 'dataLayer', 'GTM-WT4VWL6');
      `}
        </script>
        <script type="text/javascript">
          {`
         (window.BOOMR_mq=window.BOOMR_mq||[]).push(["addVar",{"rua.upush":"true","rua.cpush":"true","rua.upre":"false","rua.cpre":"true","rua.uprl":"false","rua.cprl":"false","rua.cprf":"false","rua.trans":"SJ-faead2c4-a117-4fbe-bc59-0e2a10dc71b4","rua.cook":"false","rua.ims":"false","rua.ufprl":"true","rua.cfprl":"true","rua.isuxp":"false","rua.texp":"norulematch"}]);
         `}
        </script>
        <script type="text/javascript">
          {`
         !function(a){var e="https://s.go-mpulse.net/boomerang/",t="addEventListener";if("False"=="True")a.BOOMR_config=a.BOOMR_config||{},a.BOOMR_config.PageParams=a.BOOMR_config.PageParams||{},a.BOOMR_config.PageParams.pci=!0,e="https://s2.go-mpulse.net/boomerang/";if(window.BOOMR_API_key="CQ4YN-XN2KS-8FMPX-5XWQB-7NMEH",function(){function n(e){a.BOOMR_onload=e&&e.timeStamp||(new Date).getTime()}if(!a.BOOMR||!a.BOOMR.version&&!a.BOOMR.snippetExecuted){a.BOOMR=a.BOOMR||{},a.BOOMR.snippetExecuted=!0;var i,_,o,r=document.createElement("iframe");if(a[t])a[t]("load",n,!1);else if(a.attachEvent)a.attachEvent("onload",n);r.src="javascript:void(0)",r.title="",r.role="presentation",(r.frameElement||r).style.cssText="width:0;height:0;border:0;display:none;",o=document.getElementsByTagName("script")[0],o.parentNode.insertBefore(r,o);try{_=r.contentWindow.document}catch(O){i=document.domain,r.src="javascript:var d=document.open();d.domain='"+i+"';void(0);",_=r.contentWindow.document}_.open()._l=function(){var a=this.createElement("script");if(i)this.domain=i;a.id="boomr-if-as",a.src=e+"CQ4YN-XN2KS-8FMPX-5XWQB-7NMEH",BOOMR_lstart=(new Date).getTime(),this.body.appendChild(a)},_.write("<bo"+'dy onload="document._l();">'),_.close()}}(),"".length>0)if(a&&"performance"in a&&a.performance&&"function"==typeof a.performance.setResourceTimingBufferSize)a.performance.setResourceTimingBufferSize();!function(){if(BOOMR=a.BOOMR||{},BOOMR.plugins=BOOMR.plugins||{},!BOOMR.plugins.AK){var e="true"=="true"?1:0,t="",n="l5xrwtc4pnvkay32piia-f-3302b0b28-clientnsv4-s.akamaihd.net",i="false"=="true"?2:1,_={"ak.v":"33","ak.cp":"1062720","ak.ai":parseInt("632992",10),"ak.ol":"0","ak.cr":43,"ak.ipv":4,"ak.proto":"h2","ak.rid":"1e5144db","ak.r":41265,"ak.a2":e,"ak.m":"dsca","ak.n":"essl","ak.bpcip":"95.111.27.0","ak.cport":2507,"ak.gh":"92.123.106.156","ak.quicv":"","ak.tlsv":"tls1.3","ak.0rtt":"","ak.csrc":"-","ak.acc":"","ak.t":"1668971024","ak.ak":"hOBiQwZUYzCg5VSAfCLimQ==D/9iIEKpkvSkS9aP0S8AK5hpSAV6b9DO11d43mR6FNoOHAp9+0wxIX5QLM3Ek3CB8VfUAgFZxI+It5zNEa17e6n4tT4P9NF+s0aFZJHqPmu1q2j0Y1y0gZ4IkV/6zkJ5kjVeCT+GXGrtmzPAdQ11pm9Xzz/gfPqFQxyfyPv6NXvis9S/f/NbaaiQ4Eg2Yfbr2sLhm/2rZkyL+4PSFOwNXgC1Wmk+nyV8PhUKBgaV7RE8OBMhL82LOKn8QVnaUjR2LusdHGwnwRUty4nN31LHVm3u2TQlwS8jg1RUp/auzJdNNqCZPO+s6+MX2UQB1o5CLYV9MohSDXbgbarCDP7x8GTm5x2p8dnjsONpsjrmgW/iI6EVw/JKoDu3/+KakmH4iNO3S/WP6zID+oR3ay2cptmRn4Lx81MzjJNOzzsNbQQ=","ak.pv":"72","ak.dpoabenc":"","ak.tf":i};if(""!==t)_["ak.ruds"]=t;var o={i:!1,av:function(e){var t="http.initiator";if(e&&(!e[t]||"spa_hard"===e[t]))_["ak.feo"]=void 0!==a.aFeoApplied?1:0,BOOMR.addVar(_)},rv:function(){var a=["ak.bpcip","ak.cport","ak.cr","ak.csrc","ak.gh","ak.ipv","ak.m","ak.n","ak.ol","ak.proto","ak.quicv","ak.tlsv","ak.0rtt","ak.r","ak.acc","ak.t","ak.tf"];BOOMR.removeVar(a)}};BOOMR.plugins.AK={akVars:_,akDNSPreFetchDomain:n,init:function(){if(!o.i){var a=BOOMR.subscribe;a("before_beacon",o.av,null,null),a("onbeacon",o.rv,null,null),o.i=!0}return this},is_complete:function(){return!0}}}}()}(window);
      `}
        </script>
        <meta
          name="google-site-verification"
          content="Peq0U5gFVAI_MpFjqysMsHZd7vk5ra-1P912hsvTM8M"
        />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-2EPDQWBEHH"></script>
        <script>
          {`
         window.dataLayer = window.dataLayer || [];
         function gtag(){dataLayer.push(arguments);}
         gtag('js', new Date());

         gtag('config', 'G-2EPDQWBEHH');
        `}
        </script>
        <link
          rel="canonical"
          href="https://www.majidalfuttaim.com/en/what-we-do/our-industries/industry/lifestyle"
        />
        <meta name="twitter:card" content="summary" />
        <meta
          property="twitter:title"
          content="Discover our Lifestyle &amp;amp; Retail Brands | Majid Al Futtaim"
        />
        <meta
          property="twitter:description"
          content="Majid Al Futtaim Lifestyle brings world-class Lifestyle and retail brands to the region, with more than 100 stores across the MENA region. Click here for more."
        />
        <meta
          name="description"
          content="Majid Al Futtaim Lifestyle brings world-class Lifestyle and retail brands to the region, with more than 100 stores across the MENA region. Click here for more."
        />
        <script>{`(window.BOOMR_mq=window.BOOMR_mq||[]).push(["addVar",{"rua.upush":"false","rua.cpush":"false","rua.upre":"false","rua.cpre":"false","rua.uprl":"false","rua.cprl":"false","rua.cprf":"false","rua.trans":"SJ-42fe3e5d-8bf0-44ee-b63d-943fb721234f","rua.cook":"true","rua.ims":"true","rua.ufprl":"false","rua.cfprl":"true","rua.isuxp":"false","rua.texp":"norulematch","rua.ceh":"false","rua.ueh":"false","rua.ieh.st":"0"}]);`}</script>
        <script>
          {`
        !function(a){var e="https://s.go-mpulse.net/boomerang/",t="addEventListener";if("False"=="True")a.BOOMR_config=a.BOOMR_config||{},a.BOOMR_config.PageParams=a.BOOMR_config.PageParams||{},a.BOOMR_config.PageParams.pci=!0,e="https://s2.go-mpulse.net/boomerang/";if(window.BOOMR_API_key="CQ4YN-XN2KS-8FMPX-5XWQB-7NMEH",function(){function n(e){a.BOOMR_onload=e&&e.timeStamp||(new Date).getTime()}if(!a.BOOMR||!a.BOOMR.version&&!a.BOOMR.snippetExecuted){a.BOOMR=a.BOOMR||{},a.BOOMR.snippetExecuted=!0;var i,_,o,r=document.createElement("iframe");if(a[t])a[t]("load",n,!1);else if(a.attachEvent)a.attachEvent("onload",n);r.src="javascript:void(0)",r.title="",r.role="presentation",(r.frameElement||r).style.cssText="width:0;height:0;border:0;display:none;",o=document.getElementsByTagName("script")[0],o.parentNode.insertBefore(r,o);try{_=r.contentWindow.document}catch(O){i=document.domain,r.src="javascript:var d=document.open();d.domain='"+i+"';void(0);",_=r.contentWindow.document}_.open()._l=function(){var a=this.createElement("script");if(i)this.domain=i;a.id="boomr-if-as",a.src=e+"CQ4YN-XN2KS-8FMPX-5XWQB-7NMEH",BOOMR_lstart=(new Date).getTime(),this.body.appendChild(a)},_.write("<bo"+'dy onload="document._l();">'),_.close()}}(),"".length>0)if(a&&"performance"in a&&a.performance&&"function"==typeof a.performance.setResourceTimingBufferSize)a.performance.setResourceTimingBufferSize();!function(){if(BOOMR=a.BOOMR||{},BOOMR.plugins=BOOMR.plugins||{},!BOOMR.plugins.AK){var e="true"=="true"?1:0,t="cookiepresent",n="2b725qyxesrng2a3bioa-f-30a037f12-clientnsv4-s.akamaihd.net",i="false"=="true"?2:1,_={"ak.v":"39","ak.cp":"1062720","ak.ai":parseInt("632992",10),"ak.ol":"0","ak.cr":37,"ak.ipv":4,"ak.proto":"h2","ak.rid":"51a5a0c0","ak.r":40890,"ak.a2":e,"ak.m":"dsca","ak.n":"essl","ak.bpcip":"208.127.174.0","ak.cport":19651,"ak.gh":"23.206.213.222","ak.quicv":"","ak.tlsv":"tls1.3","ak.0rtt":"","ak.0rtt.ed":"","ak.csrc":"-","ak.acc":"","ak.t":"1746602524","ak.ak":"hOBiQwZUYzCg5VSAfCLimQ==37vPYKe2XuiVWAHQKz5dzWOPPzA27gf/LrCnsuGe1D3l9q3BRjGiuluKLtqOPfn22GkCs9mALC/f6cfEWM2Y5dcWju5scRKnqt40M7r4PPxjijQxxqr8Y830fNKy1GFK+X6lFHXVl/qW5UUSvq4Glcrpf58Tie2YWikvnzTdpignGyzDcHDuQcmVCV5N5DjlXHiYNlEIBzXUta3B46ycg1xsnNDdKV++29kyxkQPW+LPLUthckQjw118NtJ9QYuVrqG1FglaS4aJ23yuNGbjDwlc7i0ubXuNow7H12tiaQf80t1OpfLHCw8TiRCU3rCfBiSLhTDsd2Y0XSanE4RUn3L+XZr42F50lCo8H5O2VhNmK3e1GhZk9tfw/wioW9YhZttAaq+Pv6wwzPg3VCocBKLGhXiVJEGZMo9GaIw09R4=","ak.pv":"206","ak.dpoabenc":"","ak.tf":i};if(""!==t)_["ak.ruds"]=t;var o={i:!1,av:function(e){var t="http.initiator";if(e&&(!e[t]||"spa_hard"===e[t]))_["ak.feo"]=void 0!==a.aFeoApplied?1:0,BOOMR.addVar(_)},rv:function(){var a=["ak.bpcip","ak.cport","ak.cr","ak.csrc","ak.gh","ak.ipv","ak.m","ak.n","ak.ol","ak.proto","ak.quicv","ak.tlsv","ak.0rtt","ak.0rtt.ed","ak.r","ak.acc","ak.t","ak.tf"];BOOMR.removeVar(a)}};BOOMR.plugins.AK={akVars:_,akDNSPreFetchDomain:n,init:function(){if(!o.i){var a=BOOMR.subscribe;a("before_beacon",o.av,null,null),a("onbeacon",o.rv,null,null),o.i=!0}return this},is_complete:function(){return!0}}}}()}(window);</script>
        `}
        </script>
      </Head>

      {/* root placeholder for the app, which we add components to using route data */}
      <div className={mainClassPageEditing}>
        <header>
          <div id="header">{route && <Placeholder name="headless-header" rendering={route} />}</div>
        </header>
        <main>
          <div id="content">{route && <Placeholder name="headless-main" rendering={route} />}</div>
        </main>
        <footer>
          <div id="footer">{route && <Placeholder name="headless-footer" rendering={route} />}</div>
        </footer>
      </div>

      <body
        className="
      normal-mode corporate-site"
      >
        <a href="#content" className="skip-to-content" id="skip-link">
          Skip to Content
        </a>
        <script type="application/ld+json">
          {`
         {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "url": "https://www.majidalfuttaim.com/",
          "potentialAction": {
          "@type": "SearchAction",
          "target": "https://www.majidalfuttaim.com/search?indexCatalogue=site-search-index&searchQuery={search_term_string}",
          "query-input": "required name=search_term_string"
          }
         }
      `}
        </script>
        <div className="search-component">
          <div className="section-container">
            <div className="row">
              <div className="search-input" role="search">
                <form data-search-required="Please enter search text">
                  <input
                    type="text"
                    name="text"
                    id="search-autocomplete-list"
                    autoComplete="off"
                    title="Please enter search text"
                    placeholder="Please enter search text"
                    aria-describedby="SearchInfo-1"
                  />
                  <div className="clear-search-input">
                    <img
                      className="svg-image"
                      alt="close icon"
                      src="https://www.majidalfuttaim.com/ResourcePackages/Corporate/assets/dist/images/cross-black.svg"
                    />
                  </div>
                  <button
                    type="button"
                    className="btn-search"
                    id="594fb8e2-464c-417c-b394-92ca0ee7c04e"
                  >
                    <img
                      className="svg-image"
                      src="https://www.majidalfuttaim.com/ResourcePackages/Corporate/assets/dist/images/MAFsearch.svg"
                      alt="search icon"
                    />
                  </button>
                  <span id="SearchInfo-1" aria-hidden="true" hidden>
                    When autocomplete results are available use up and down arrows to review and
                    enter to select.
                  </span>
                </form>
                <div
                  id="3f745b30-95cf-41d9-9c62-21945993f953"
                  className="autocomplete-search-results"
                ></div>
              </div>
              <div className="close-search">
                <span className="text">Close</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="22"
                  viewBox="0 0 23 22"
                  className="svg-image close-btn-black replaced-svg"
                >
                  <path
                    fill="#8A1538"
                    fill-rule="evenodd"
                    d="M12.207 10.96L22.46 21.213l-.707.707L11.5 11.667 1.247 21.92l-.707-.707L10.793 10.96.54.707 1.247 0 11.5 10.253 21.753 0l.707.707L12.207 10.96z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <input type="hidden" data-sf-role="resultsUrl" value="/en/search" />
          <input type="hidden" data-sf-role="indexCatalogue" value="site-search-index" />
          <input type="hidden" data-sf-role="wordsMode" value="AllWords" />
          <input type="hidden" data-sf-role="disableSuggestions" value="false" />
          <input type="hidden" data-sf-role="minSuggestionLength" value="3" />
          <input type="hidden" data-sf-role="suggestionFields" value="Title,Subheadline,Headline" />
          <input type="hidden" data-sf-role="language" value="en" />
          <input type="hidden" data-sf-role="siteId" value="e88f4260-4938-430d-be08-ed820837749a" />
          <input
            type="hidden"
            data-sf-role="suggestionsRoute"
            value="/restapi/search/suggestions"
          />
          <input type="hidden" data-sf-role="searchTextBoxId" value="#search-autocomplete-list" />
          <input
            type="hidden"
            data-sf-role="searchButtonId"
            value="#594fb8e2-464c-417c-b394-92ca0ee7c04e"
          />
          <input
            type="hidden"
            data-sf-role="scoringSettings"
            value="UHJlZGljdGl2ZVNpdGVTZWFyY2hQcm9maWxl"
          />
          <input
            type="hidden"
            data-sf-role="searchResultsId"
            value="#3f745b30-95cf-41d9-9c62-21945993f953"
          />
          <input type="hidden" data-sf-role="suggestionType" value="TitleSuggestions" />
        </div>
        <div className="wrapper">
          <div className="mobile-navigation main-mobile-navigation mobile">
            <div className="main-navigation-menu">
              <div className="section-container">
                <div className="mobile-menu-header">
                  <div className="menu-text">
                    <span>Menu</span>
                  </div>
                  <div className="close-menu" id="close-menu">
                    <a href="javascript:void(0)" className="closebtn">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="23"
                        height="22"
                        viewBox="0 0 23 22"
                        className="svg-image close-btn-black replaced-svg"
                      >
                        <path
                          fill="#8A1538"
                          fill-rule="evenodd"
                          d="M12.207 10.96L22.46 21.213l-.707.707L11.5 11.667 1.247 21.92l-.707-.707L10.793 10.96.54.707 1.247 0 11.5 10.253 21.753 0l.707.707L12.207 10.96z"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="navigation">
                  <ul>
                    <li>
                      <div className="main-menu-item has-sub-nav">
                        <a
                          href="/en/who-we-are"
                          target="_self"
                          data-target="second-level-nav-target-1"
                        >
                          Who we are
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="main-menu-item has-sub-nav">
                        <a
                          href="/en/what-we-do"
                          target="_self"
                          data-target="second-level-nav-target-2"
                        >
                          What We Do
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="main-menu-item has-sub-nav">
                        <a
                          href="/en/people-and-careers"
                          target="_self"
                          data-target="second-level-nav-target-3"
                        >
                          People &amp; Careers
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="main-menu-item has-sub-nav">
                        <a
                          href="/en/investor-relations"
                          target="_self"
                          data-target="second-level-nav-target-4"
                        >
                          Investor Relations
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="main-menu-item ">
                        <a
                          href="/en/the-leadership-institute"
                          target="_self"
                          data-target="second-level-nav-target-5"
                        >
                          The Leadership Institute
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="main-menu-item has-sub-nav">
                        <a
                          href="/en/media-centre"
                          target="_self"
                          data-target="second-level-nav-target-6"
                        >
                          Media Centre
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
                <div id="mobile-links"></div>
              </div>
              <div className="bottom-mobile-navigation">
                <div className="mobile-bottom-menu">
                  <div className="section-container">
                    <div className="text-resizer">
                      <span className="rectangle"></span>
                    </div>
                    <div className="language language-switcher mobile-language-wrapper"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="second-mobile-navigation mobile-navigation mobile">
            <div className="second-level-navigation" id="second-level-nav-target-1">
              <div className="section-container">
                <div className="mobile-menu-header">
                  <div className="back-menu" data-level="main-level-navigation">
                    <span>Back</span>
                  </div>
                  <div className="close-menu">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="23"
                      height="22"
                      viewBox="0 0 23 22"
                      className="svg-image close-btn-black replaced-svg"
                    >
                      <path
                        fill="#8A1538"
                        fill-rule="evenodd"
                        d="M12.207 10.96L22.46 21.213l-.707.707L11.5 11.667 1.247 21.92l-.707-.707L10.793 10.96.54.707 1.247 0 11.5 10.253 21.753 0l.707.707L12.207 10.96z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className="category-name">
                  <h3>Who we are</h3>
                </div>
                <div className="navigation">
                  <ul>
                    <li>
                      <div className="main-menu-item">
                        <a
                          href="/en/who-we-are/overview"
                          aria-label="Who we are Overview"
                          target="_self"
                        >
                          Overview
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="main-menu-item">
                        <a
                          href="/en/who-we-are#visionvalues"
                          aria-label="Who we are Vision &amp; Values"
                          target="_self"
                        >
                          Vision &amp; Values
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="main-menu-item">
                        <a
                          href="/en/who-we-are/our-journey"
                          aria-label="Who we are Our Journey"
                          target="_self"
                        >
                          Our Journey
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="main-menu-item has-sub-nav">
                        <a
                          href="/en/who-we-are/sustainability-and-esg"
                          target="_self"
                          data-target="third-level-nav-target-1-1"
                        >
                          Sustainability &amp; ESG
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="main-menu-item">
                        <a
                          href="/en/who-we-are/corporate-compliance"
                          aria-label="Who we are Corporate Compliance"
                          target="_self"
                        >
                          Corporate Compliance
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="main-menu-item">
                        <a
                          href="/en/who-we-are/board-of-directors"
                          aria-label="Who we are Board of Directors"
                          target="_self"
                        >
                          Board of Directors
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="main-menu-item">
                        <a
                          href="/en/who-we-are/management"
                          aria-label="Who we are Management"
                          target="_self"
                        >
                          Management
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bottom-mobile-navigation">
                <div className="mobile-bottom-menu">
                  <div className="section-container">
                    <div className="text-resizer">
                      <span className="rectangle"></span>
                    </div>
                    <div className="language language-switcher mobile-language-wrapper"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="second-mobile-navigation mobile-navigation mobile">
            <div className="second-level-navigation" id="second-level-nav-target-2">
              <div className="section-container">
                <div className="mobile-menu-header">
                  <div className="back-menu" data-level="main-level-navigation">
                    <span>Back</span>
                  </div>
                  <div className="close-menu">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="23"
                      height="22"
                      viewBox="0 0 23 22"
                      className="svg-image close-btn-black replaced-svg"
                    >
                      <path
                        fill="#8A1538"
                        fill-rule="evenodd"
                        d="M12.207 10.96L22.46 21.213l-.707.707L11.5 11.667 1.247 21.92l-.707-.707L10.793 10.96.54.707 1.247 0 11.5 10.253 21.753 0l.707.707L12.207 10.96z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className="category-name">
                  <h3>What We Do</h3>
                </div>
                <div className="navigation">
                  <ul>
                    <li>
                      <div className="main-menu-item">
                        <a
                          href="/en/what-we-do/overview"
                          aria-label="
                                 What We Do 
                                 Overview"
                          target="_self"
                        >
                          Overview
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="main-menu-item">
                        <a
                          href="/en/what-we-do/unique-experiences"
                          aria-label="
                                 What We Do Unique Experiences"
                          target="_self"
                        >
                          Unique Experiences
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="main-menu-item has-sub-nav">
                        <a
                          href="/en/what-we-do/our-industries"
                          target="_self"
                          data-target="third-level-nav-target-2-1"
                        >
                          Our Industries
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="main-menu-item">
                        <a
                          href="/en/what-we-do/brand-family"
                          aria-label="
                                 What We Do 
                                 Our Brand Family"
                          target="_self"
                        >
                          Our Brand Family
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="main-menu-item">
                        <a
                          href="/en/what-we-do/partner-with-us"
                          aria-label="
                                 What We Do Partner with us"
                          target="_self"
                        >
                          Partner with us
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bottom-mobile-navigation">
                <div className="mobile-bottom-menu">
                  <div className="section-container">
                    <div className="text-resizer">
                      <span className="rectangle"></span>
                    </div>
                    <div className="language language-switcher mobile-language-wrapper"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="second-mobile-navigation mobile-navigation mobile">
            <div className="second-level-navigation" id="second-level-nav-target-3">
              <div className="section-container">
                <div className="mobile-menu-header">
                  <div className="back-menu" data-level="main-level-navigation">
                    <span>Back</span>
                  </div>
                  <div className="close-menu">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="23"
                      height="22"
                      viewBox="0 0 23 22"
                      className="svg-image close-btn-black replaced-svg"
                    >
                      <path
                        fill="#8A1538"
                        fill-rule="evenodd"
                        d="M12.207 10.96L22.46 21.213l-.707.707L11.5 11.667 1.247 21.92l-.707-.707L10.793 10.96.54.707 1.247 0 11.5 10.253 21.753 0l.707.707L12.207 10.96z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className="category-name">
                  <h3>People &amp; Careers</h3>
                </div>
                <div className="navigation">
                  <ul>
                    <li>
                      <div className="main-menu-item">
                        <a
                          href="https://careers.majidalfuttaim.com/global/en/home?utm_campaign=Careers&amp;utm_medium=referal&amp;utm_source=corporate_website"
                          aria-label="
                                 People &amp; Careers Careers Portal"
                          target="_blank"
                        >
                          Careers Portal
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bottom-mobile-navigation">
                <div className="mobile-bottom-menu">
                  <div className="section-container">
                    <div className="text-resizer">
                      <span className="rectangle"></span>
                    </div>
                    <div className="language language-switcher mobile-language-wrapper"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="second-mobile-navigation mobile-navigation mobile">
            <div className="second-level-navigation" id="second-level-nav-target-4">
              <div className="section-container">
                <div className="mobile-menu-header">
                  <div className="back-menu" data-level="main-level-navigation">
                    <span>Back</span>
                  </div>
                  <div className="close-menu">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="23"
                      height="22"
                      viewBox="0 0 23 22"
                      className="svg-image close-btn-black replaced-svg"
                    >
                      <path
                        fill="#8A1538"
                        fill-rule="evenodd"
                        d="M12.207 10.96L22.46 21.213l-.707.707L11.5 11.667 1.247 21.92l-.707-.707L10.793 10.96.54.707 1.247 0 11.5 10.253 21.753 0l.707.707L12.207 10.96z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className="category-name">
                  <h3>Investor Relations</h3>
                </div>
                <div className="navigation">
                  <ul>
                    <li>
                      <div className="main-menu-item">
                        <a
                          href="/en/investor-relations/overview"
                          aria-label="
                                 Investor Relations
                                 Overview"
                          target="_self"
                        >
                          Overview
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="main-menu-item">
                        <a
                          href="/en/investor-relations/bond-and-credit-rating"
                          aria-label="
                                 Investor Relations Bonds &amp; Credit Rating"
                          target="_self"
                        >
                          Bonds &amp; Credit Rating
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="main-menu-item">
                        <a
                          href="/en/investor-relations/funding-strategy"
                          aria-label="
                                 Investor Relations Funding Strategy"
                          target="_self"
                        >
                          Funding Strategy
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="main-menu-item">
                        <a
                          href="/en/investor-relations/financial-summary"
                          aria-label="
                                 Investor Relations Financial Summary"
                          target="_self"
                        >
                          Financial Summary
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="main-menu-item">
                        <a
                          href="/en/investor-relations#pressreleases"
                          aria-label="
                                 Investor Relations Announcements &amp; Updates"
                          target="_self"
                        >
                          Announcements &amp; Updates
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="main-menu-item">
                        <a
                          href="/en/investor-relations#investor-relations-contacts"
                          aria-label="
                                 Investor Relations 
                                 Investor Relations Contacts"
                          target="_self"
                        >
                          Investor Relations Contacts
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="main-menu-item">
                        <a
                          href="/en/investor-relations/tax-strategy"
                          aria-label="
                                 Investor Relations Tax Strategy"
                          target="_self"
                        >
                          Tax Strategy
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bottom-mobile-navigation">
                <div className="mobile-bottom-menu">
                  <div className="section-container">
                    <div className="text-resizer">
                      <span className="rectangle"></span>
                    </div>
                    <div className="language language-switcher mobile-language-wrapper"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="second-mobile-navigation mobile-navigation mobile">
            <div className="second-level-navigation" id="second-level-nav-target-5">
              <div className="section-container">
                <div className="mobile-menu-header">
                  <div className="back-menu" data-level="main-level-navigation">
                    <span>Back</span>
                  </div>
                  <div className="close-menu">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="23"
                      height="22"
                      viewBox="0 0 23 22"
                      className="svg-image close-btn-black replaced-svg"
                    >
                      <path
                        fill="#8A1538"
                        fill-rule="evenodd"
                        d="M12.207 10.96L22.46 21.213l-.707.707L11.5 11.667 1.247 21.92l-.707-.707L10.793 10.96.54.707 1.247 0 11.5 10.253 21.753 0l.707.707L12.207 10.96z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className="category-name">
                  <h3>The Leadership Institute</h3>
                </div>
                <div className="navigation">
                  <ul></ul>
                </div>
              </div>
              <div className="bottom-mobile-navigation">
                <div className="mobile-bottom-menu">
                  <div className="section-container">
                    <div className="text-resizer">
                      <span className="rectangle"></span>
                    </div>
                    <div className="language language-switcher mobile-language-wrapper"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="second-mobile-navigation mobile-navigation mobile">
            <div className="second-level-navigation" id="second-level-nav-target-6">
              <div className="section-container">
                <div className="mobile-menu-header">
                  <div className="back-menu" data-level="main-level-navigation">
                    <span>Back</span>
                  </div>
                  <div className="close-menu">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="23"
                      height="22"
                      viewBox="0 0 23 22"
                      className="svg-image close-btn-black replaced-svg"
                    >
                      <path
                        fill="#8A1538"
                        fill-rule="evenodd"
                        d="M12.207 10.96L22.46 21.213l-.707.707L11.5 11.667 1.247 21.92l-.707-.707L10.793 10.96.54.707 1.247 0 11.5 10.253 21.753 0l.707.707L12.207 10.96z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className="category-name">
                  <h3>Media Centre</h3>
                </div>
                <div className="navigation">
                  <ul>
                    <li>
                      <div className="main-menu-item">
                        <a
                          href="/en/media-centre/overview"
                          aria-label="
                                 Media Centre 
                                 Overview"
                          target="_self"
                        >
                          Overview
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="main-menu-item">
                        <a
                          href="/en/media-centre/press-releases"
                          aria-label="
                                 Media Centre Press Releases"
                          target="_self"
                        >
                          Press Releases
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="main-menu-item">
                        <a
                          href="/en/media-centre/blog-posts"
                          aria-label="
                                 Media Centre Blog Posts"
                          target="_self"
                        >
                          Blog Posts
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="main-menu-item">
                        <a
                          href="/en/media-centre/media-kits-downloads"
                          aria-label="
                                 Media Centre Media Kits &amp; Downloads"
                          target="_self"
                        >
                          Media Kits &amp; Downloads
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="main-menu-item">
                        <a
                          href="/en/media-centre#media-contacts"
                          aria-label="
                                 Media Centre 
                                 Media Relations Contact"
                          target="_self"
                        >
                          Media Relations Contact
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="main-menu-item">
                        <a
                          href="/en/media-centre/trends-and-insights"
                          aria-label="
                                 Media Centre Reports"
                          target="_self"
                        >
                          Reports
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bottom-mobile-navigation">
                <div className="mobile-bottom-menu">
                  <div className="section-container">
                    <div className="text-resizer">
                      <span className="rectangle"></span>
                    </div>
                    <div className="language language-switcher mobile-language-wrapper"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="third-mobile-navigation mobile-navigation mobile">
            <div className="third-level-navigation" id="third-level-nav-target-1-1">
              <div className="section-container">
                <div className="mobile-menu-header">
                  <div className="back-menu">
                    <span>Back</span>
                  </div>
                  <div className="close-menu">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="23"
                      height="22"
                      viewBox="0 0 23 22"
                      className="svg-image close-btn-black replaced-svg"
                    >
                      <path
                        fill="#8A1538"
                        fill-rule="evenodd"
                        d="M12.207 10.96L22.46 21.213l-.707.707L11.5 11.667 1.247 21.92l-.707-.707L10.793 10.96.54.707 1.247 0 11.5 10.253 21.753 0l.707.707L12.207 10.96z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className="category-name">
                  <h3>Sustainability &amp; ESG</h3>
                </div>
                <div className="navigation">
                  <ul>
                    <li>
                      <div className="main-menu-item">
                        <a
                          href="/en/who-we-are/sustainability-and-esg/esg-overview"
                          aria-label="
                                 Sustainability &amp; ESG ESG Overview"
                          target="_self"
                        >
                          ESG Overview
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="main-menu-item">
                        <a
                          href="/en/who-we-are/sustainability-and-esg/sustainability"
                          aria-label="
                                 Sustainability &amp; ESG Sustainability"
                          target="_self"
                        >
                          Sustainability
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="main-menu-item">
                        <a
                          href="/en/who-we-are/sustainability-and-esg/impact-stories"
                          aria-label="
                                 Sustainability &amp; ESG Impact Stories"
                          target="_self"
                        >
                          Impact Stories
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="main-menu-item">
                        <a
                          href="/en/who-we-are/sustainability-and-esg/reports"
                          aria-label="
                                 Sustainability &amp; ESG Reports"
                          target="_self"
                        >
                          Reports
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bottom-mobile-navigation">
                <div className="mobile-bottom-menu">
                  <div className="section-container">
                    <div className="text-resizer">
                      <span className="rectangle"></span>
                    </div>
                    <div className="language language-switcher mobile-language-wrapper"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="third-mobile-navigation mobile-navigation mobile">
            <div className="third-level-navigation" id="third-level-nav-target-2-1">
              <div className="section-container">
                <div className="mobile-menu-header">
                  <div className="back-menu">
                    <span>Back</span>
                  </div>
                  <div className="close-menu">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="23"
                      height="22"
                      viewBox="0 0 23 22"
                      className="svg-image close-btn-black replaced-svg"
                    >
                      <path
                        fill="#8A1538"
                        fill-rule="evenodd"
                        d="M12.207 10.96L22.46 21.213l-.707.707L11.5 11.667 1.247 21.92l-.707-.707L10.793 10.96.54.707 1.247 0 11.5 10.253 21.753 0l.707.707L12.207 10.96z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className="category-name">
                  <h3>Our Industries</h3>
                </div>
                <div className="navigation">
                  <ul>
                    <li>
                      <div className="main-menu-item">
                        <a
                          href="/en/what-we-do/our-industries/overview"
                          aria-label="
                                 Our Industries Overview"
                          target="_self"
                        >
                          Overview
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="main-menu-item">
                        <a
                          href="/en/what-we-do/our-industries/industry/shopping-malls"
                          aria-label="
                                 Our Industries Shopping Malls"
                          target="_self"
                        >
                          Shopping Malls
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="main-menu-item">
                        <a
                          href="https://communities.majidalfuttaim.com/en/index.html"
                          aria-label="
                                 Our Industries Communities"
                          target="_self"
                        >
                          Communities
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="main-menu-item">
                        <a
                          href="/en/what-we-do/our-industries/industry/hotels"
                          aria-label="
                                 Our Industries Hotels"
                          target="_self"
                        >
                          Hotels
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="main-menu-item">
                        <a
                          href="/en/what-we-do/our-industries/industry/leisure-entertainment-and-cinemas"
                          aria-label="
                                 Our Industries Entertainment"
                          target="_self"
                        >
                          Entertainment
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="main-menu-item">
                        <a
                          href="/en/what-we-do/our-industries/industry/lifestyle"
                          aria-label="
                                 Our Industries Lifestyle"
                          target="_self"
                        >
                          Lifestyle
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="main-menu-item">
                        <a
                          href="/en/what-we-do/our-industries/industry/retail"
                          aria-label="
                                 Our Industries Retail"
                          target="_self"
                        >
                          Retail
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="main-menu-item">
                        <a
                          href="/en/what-we-do/our-industries/industry/project-management"
                          aria-label="
                                 Our Industries Project Management"
                          target="_self"
                        >
                          Project Management
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="main-menu-item">
                        <a
                          href="/en/what-we-do/our-industries/industry/energy-and-facilities-management"
                          aria-label="
                                 Our Industries Energy &amp; Facilities Management"
                          target="_self"
                        >
                          Energy &amp; Facilities Management
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bottom-mobile-navigation">
                <div className="mobile-bottom-menu">
                  <div className="section-container">
                    <div className="text-resizer">
                      <span className="rectangle"></span>
                    </div>
                    <div className="language language-switcher mobile-language-wrapper"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <header>
            <nav role="navigation">
              <div className="top-header-menu">
                <div className="section-container">
                  <div className="top-header-links">
                    <ul
                      id="MainTop_TE21B85AC002_Col00"
                      className="sf_colsIn"
                      data-sf-element="top-header-links"
                      data-placeholder-label="top-header-links"
                    >
                      <li
                        id="MainTop_TE21B85AC003_Col00"
                        className="sf_colsIn"
                        data-sf-element="Li"
                        data-placeholder-label="Li"
                      >
                        <img
                          loading="lazy"
                          className="mw-100 h-auto header-search top-bar"
                          src="https://www.majidalfuttaim.com/images/default-source/icons/mafsearch.svg?sfvrsn=9bde758e_1"
                          title="MAFsearch"
                          alt="MAFsearch"
                        />
                      </li>
                      <li className="header-link">
                        <a href="/en/contact-us" target="_self" className="menu-item ">
                          Contact Us
                        </a>
                      </li>
                      <li className="text-resizer">
                        <span id="increaseFont" className="large-text">
                          A
                        </span>
                        <span id="decreaseFont" className="small-text">
                          A
                        </span>
                        <span id="contrast" className="rectangle"></span>
                      </li>

                      <li id="desctop-language-switcher" className="language-switcher">
                        <a
                          href=""
                          onClick={(e) => {
                            e.preventDefault();
                            window.location.href = '/ar';
                          }}
                          className="switcher-anchor"
                        >
                          <span>العربية</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="section-container">
                <div className="row">
                  <div className="hamburger">
                    <div className="menu-icon">
                      <span></span>
                    </div>
                  </div>
                  <div
                    id="MainTop_TE21B85AC002_Col01"
                    className="logo sf_colsIn"
                    data-sf-element="logo"
                    data-placeholder-label="logo"
                  >
                    <a href="/en" title="Open image in original size">
                      <img
                        loading="lazy"
                        className="mw-100 h-auto"
                        src="https://www.majidalfuttaim.com/images/default-source/logos/logo.png?sfvrsn=dcbb0c0d_5"
                        title="logo"
                        alt="Logo"
                      />
                    </a>
                  </div>
                  <div
                    id="MainTop_TE21B85AC002_Col02"
                    className="header-nav-menu sf_colsIn"
                    data-sf-element="header-nav-menu"
                    data-placeholder-label="header-nav-menu"
                  >
                    <nav>
                      <ul className="nav-list">
                        <li>
                          <div className="header-menu">
                            <a href="/en/who-we-are" target="_self" className="menu-item ">
                              Who we are
                            </a>
                            <div className="menu-sublist-dropdown">
                              <div className="sub-nav-level-2">
                                <ul className="menu-list-level-2">
                                  <li className="">
                                    <div className="menu-item ">
                                      <a
                                        href="/en/who-we-are/overview"
                                        target="_self"
                                        className="sub-category"
                                        aria-label="Overview of Who we are"
                                      >
                                        Overview
                                      </a>
                                    </div>
                                  </li>
                                  <li className="">
                                    <div className="menu-item ">
                                      <a
                                        href="/en/who-we-are#visionvalues"
                                        target="_self"
                                        className="sub-category"
                                      >
                                        Vision &amp; Values
                                      </a>
                                    </div>
                                  </li>
                                  <li className="">
                                    <div className="menu-item ">
                                      <a
                                        href="/en/who-we-are/our-journey"
                                        target="_self"
                                        className="sub-category"
                                      >
                                        Our Journey
                                      </a>
                                    </div>
                                  </li>
                                  <li className="">
                                    <div className="menu-item has-sub-menu">
                                      <a
                                        href="/en/who-we-are/sustainability-and-esg"
                                        target="_self"
                                        className="sub-category"
                                      >
                                        Sustainability &amp; ESG
                                      </a>
                                      <div className="menu-level-3">
                                        <ul>
                                          <li>
                                            <a
                                              href="/en/who-we-are/sustainability-and-esg/esg-overview"
                                              target="_self"
                                              className="third-level-menu-item"
                                            >
                                              ESG Overview
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              href="/en/who-we-are/sustainability-and-esg/sustainability"
                                              target="_self"
                                              className="third-level-menu-item"
                                            >
                                              Sustainability
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              href="/en/who-we-are/sustainability-and-esg/impact-stories"
                                              target="_self"
                                              className="third-level-menu-item"
                                            >
                                              Impact Stories
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              href="/en/who-we-are/sustainability-and-esg/reports"
                                              target="_self"
                                              className="third-level-menu-item"
                                            >
                                              Reports
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </li>
                                  <li className="">
                                    <div className="menu-item ">
                                      <a
                                        href="/en/who-we-are/corporate-compliance"
                                        target="_self"
                                        className="sub-category"
                                      >
                                        Corporate Compliance
                                      </a>
                                    </div>
                                  </li>
                                  <li className="">
                                    <div className="menu-item ">
                                      <a
                                        href="/en/who-we-are/board-of-directors"
                                        target="_self"
                                        className="sub-category"
                                      >
                                        Board of Directors
                                      </a>
                                    </div>
                                  </li>
                                  <li className="">
                                    <div className="menu-item ">
                                      <a
                                        href="/en/who-we-are/management"
                                        target="_self"
                                        className="sub-category"
                                      >
                                        Management
                                      </a>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="header-menu">
                            <a href="/en/what-we-do" target="_self" className="menu-item active">
                              What We Do
                            </a>
                            <div className="menu-sublist-dropdown">
                              <div className="sub-nav-level-2">
                                <ul className="menu-list-level-2">
                                  <li className="">
                                    <div className="menu-item ">
                                      <a
                                        href="/en/what-we-do/overview"
                                        target="_self"
                                        className="sub-category"
                                        aria-label="Overview of 
                                                      What We Do"
                                      >
                                        Overview
                                      </a>
                                    </div>
                                  </li>
                                  <li className="">
                                    <div className="menu-item ">
                                      <a
                                        href="/en/what-we-do/unique-experiences"
                                        target="_self"
                                        className="sub-category"
                                      >
                                        Unique Experiences
                                      </a>
                                    </div>
                                  </li>
                                  <li className="">
                                    <div className="menu-item has-sub-menu">
                                      <a
                                        href="/en/what-we-do/our-industries"
                                        target="_self"
                                        className="sub-category"
                                      >
                                        Our Industries
                                      </a>
                                      <div className="menu-level-3">
                                        <ul>
                                          <li>
                                            <a
                                              href="/en/what-we-do/our-industries/overview"
                                              target="_self"
                                              className="third-level-menu-item"
                                            >
                                              Overview
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              href="/en/what-we-do/our-industries/industry/shopping-malls"
                                              target="_self"
                                              className="third-level-menu-item"
                                            >
                                              Shopping Malls
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              href="https://communities.majidalfuttaim.com/en/index.html"
                                              target="_self"
                                              className="third-level-menu-item"
                                            >
                                              Communities
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              href="/en/what-we-do/our-industries/industry/hotels"
                                              target="_self"
                                              className="third-level-menu-item"
                                            >
                                              Hotels
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              href="/en/what-we-do/our-industries/industry/leisure-entertainment-and-cinemas"
                                              target="_self"
                                              className="third-level-menu-item"
                                            >
                                              Entertainment
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              href="/en/what-we-do/our-industries/industry/lifestyle"
                                              target="_self"
                                              className="third-level-menu-item"
                                            >
                                              Lifestyle
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              href="/en/what-we-do/our-industries/industry/retail"
                                              target="_self"
                                              className="third-level-menu-item"
                                            >
                                              Retail
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              href="/en/what-we-do/our-industries/industry/project-management"
                                              target="_self"
                                              className="third-level-menu-item"
                                            >
                                              Project Management
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              href="/en/what-we-do/our-industries/industry/energy-and-facilities-management"
                                              target="_self"
                                              className="third-level-menu-item"
                                            >
                                              Energy &amp; Facilities Management
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </li>
                                  <li className="">
                                    <div className="menu-item ">
                                      <a
                                        href="/en/what-we-do/brand-family"
                                        target="_self"
                                        className="sub-category"
                                      >
                                        Our Brand Family
                                      </a>
                                    </div>
                                  </li>
                                  <li className="">
                                    <div className="menu-item ">
                                      <a
                                        href="/en/what-we-do/partner-with-us"
                                        target="_self"
                                        className="sub-category"
                                      >
                                        Partner with us
                                      </a>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="header-menu">
                            <a href="/en/people-and-careers" target="_self" className="menu-item ">
                              People &amp; Careers
                            </a>
                            <div className="menu-sublist-dropdown">
                              <div className="sub-nav-level-2">
                                <ul className="menu-list-level-2">
                                  <li className="">
                                    <div className="menu-item ">
                                      <a
                                        href="https://careers.majidalfuttaim.com/global/en/home?utm_campaign=Careers&amp;utm_medium=referal&amp;utm_source=corporate_website"
                                        target="_blank"
                                        className="sub-category"
                                        aria-label="Overview of 
                                                      People &amp; Careers"
                                      >
                                        Careers Portal
                                      </a>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="header-menu">
                            <a href="/en/investor-relations" target="_self" className="menu-item ">
                              Investor Relations
                            </a>
                            <div className="menu-sublist-dropdown">
                              <div className="sub-nav-level-2">
                                <ul className="menu-list-level-2">
                                  <li className="">
                                    <div className="menu-item ">
                                      <a
                                        href="/en/investor-relations/overview"
                                        target="_self"
                                        className="sub-category"
                                        aria-label="Overview of 
                                                      Investor Relations"
                                      >
                                        Overview
                                      </a>
                                    </div>
                                  </li>
                                  <li className="">
                                    <div className="menu-item ">
                                      <a
                                        href="/en/investor-relations/bond-and-credit-rating"
                                        target="_self"
                                        className="sub-category"
                                      >
                                        Bonds &amp; Credit Rating
                                      </a>
                                    </div>
                                  </li>
                                  <li className="">
                                    <div className="menu-item ">
                                      <a
                                        href="/en/investor-relations/funding-strategy"
                                        target="_self"
                                        className="sub-category"
                                      >
                                        Funding Strategy
                                      </a>
                                    </div>
                                  </li>
                                  <li className="">
                                    <div className="menu-item ">
                                      <a
                                        href="/en/investor-relations/financial-summary"
                                        target="_self"
                                        className="sub-category"
                                      >
                                        Financial Summary
                                      </a>
                                    </div>
                                  </li>
                                  <li className="">
                                    <div className="menu-item ">
                                      <a
                                        href="/en/investor-relations#pressreleases"
                                        target="_self"
                                        className="sub-category"
                                      >
                                        Announcements &amp; Updates
                                      </a>
                                    </div>
                                  </li>
                                  <li className="">
                                    <div className="menu-item ">
                                      <a
                                        href="/en/investor-relations#investor-relations-contacts"
                                        target="_self"
                                        className="sub-category"
                                      >
                                        Investor Relations Contacts
                                      </a>
                                    </div>
                                  </li>
                                  <li className="">
                                    <div className="menu-item ">
                                      <a
                                        href="/en/investor-relations/tax-strategy"
                                        target="_self"
                                        className="sub-category"
                                      >
                                        Tax Strategy
                                      </a>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="header-menu">
                            <a
                              href="/en/the-leadership-institute"
                              target="_self"
                              className="menu-item "
                            >
                              The Leadership Institute
                            </a>
                          </div>
                        </li>
                        <li>
                          <div className="header-menu">
                            <a href="/en/media-centre" target="_self" className="menu-item ">
                              Media Centre
                            </a>
                            <div className="menu-sublist-dropdown">
                              <div className="sub-nav-level-2">
                                <ul className="menu-list-level-2">
                                  <li className="">
                                    <div className="menu-item ">
                                      <a
                                        href="/en/media-centre/overview"
                                        target="_self"
                                        className="sub-category"
                                        aria-label="Overview of 
                                                      Media Centre"
                                      >
                                        Overview
                                      </a>
                                    </div>
                                  </li>
                                  <li className="">
                                    <div className="menu-item ">
                                      <a
                                        href="/en/media-centre/press-releases"
                                        target="_self"
                                        className="sub-category"
                                      >
                                        Press Releases
                                      </a>
                                    </div>
                                  </li>
                                  <li className="">
                                    <div className="menu-item ">
                                      <a
                                        href="/en/media-centre/blog-posts"
                                        target="_self"
                                        className="sub-category"
                                      >
                                        Blog Posts
                                      </a>
                                    </div>
                                  </li>
                                  <li className="">
                                    <div className="menu-item ">
                                      <a
                                        href="/en/media-centre/media-kits-downloads"
                                        target="_self"
                                        className="sub-category"
                                      >
                                        Media Kits &amp; Downloads
                                      </a>
                                    </div>
                                  </li>
                                  <li className="">
                                    <div className="menu-item ">
                                      <a
                                        href="/en/media-centre#media-contacts"
                                        target="_self"
                                        className="sub-category"
                                      >
                                        Media Relations Contact
                                      </a>
                                    </div>
                                  </li>
                                  <li className="">
                                    <div className="menu-item ">
                                      <a
                                        href="/en/media-centre/trends-and-insights"
                                        target="_self"
                                        className="sub-category"
                                      >
                                        Reports
                                      </a>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </nav>
                  </div>
                  <div className="header-search">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      width="14px"
                      height="14px"
                      viewBox="0 0 14 14"
                      version="1.1"
                      className="svg-image replaced-svg"
                    >
                      <title>06A6CC11-1010-4A1F-B4D5-BD351DD48199</title>
                      <desc>Created with sketchtool.</desc>
                      <defs></defs>
                      <g id="symbol" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="menu" transform="translate(-1096.000000, -8.000000)" fill="#FFFFFF">
                          <g id="search" transform="translate(1096.000000, 8.000000)">
                            <path
                              d="M11.8904944,8.1450934 L10.5717647,7.01325607 C10.6305956,6.72116629 10.6614749,6.41908973 10.6614749,6.10995795 C10.6614749,3.59093091 8.61519786,1.54454079 6.10200227,1.54454079 C3.58880668,1.54454079 1.54252967,3.5934857 1.54252967,6.10995795 C1.54252967,8.62643019 3.58880668,10.6753751 6.10200227,10.6753751 C7.62470653,10.6753751 8.97600729,9.92321753 9.8046285,8.77063642 L11.0385437,9.82967932 L11.2800295,9.53012648 L13.8989421,11.787321 L13.0780599,13.261263 L10.1469811,10.6803989 C9.0689207,11.6365833 7.65152647,12.2199159 6.10200227,12.2199159 C2.73869393,12.2199159 0,9.48065817 0,6.10995795 C0,2.73925772 2.73869393,0 6.10200227,0 C9.46531061,0 12.2040045,2.73925772 12.2040045,6.10995795 C12.2040045,6.9687137 12.0914861,7.58486 11.8904944,8.1450934 Z"
                              id="Combined-Shape"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </nav>
          </header>
          <div className="">
            <div className="hero-banner">
              <div id="main" className="home-main">
                <div
                  id="MainTop_T05BBE69B001_Col00"
                  className="sub-main-banner sf_colsIn"
                  data-sf-element="Content"
                  data-placeholder-label="Content"
                >
                  <div className="shadow">
                    <div className="mobile-gradient"></div>
                  </div>
                  <div className="section-container breadcrumb-main">
                    <div className="breadcrumbs">
                      <ul>
                        <li>
                          <a href="/en">Home</a>
                          <span>&nbsp;|&nbsp;</span>
                        </li>
                        <li>
                          <a href="/en/what-we-do">What We Do</a>
                          <span>&nbsp;|&nbsp;</span>
                        </li>
                        <li>
                          <a href="/en/what-we-do/our-industries">Our Industries</a>
                          <span>&nbsp;|&nbsp;</span>
                        </li>
                        <li>
                          <span className="active">
                            <strong>Lifestyle</strong>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <script type="application/ld+json">
                    {`
                        {
                        "@context": "https://schema.org",
                          "@type": "BreadcrumbList",
                          "itemListElement": [
                                     [{"@type":"ListItem","position":"1","name":"Home","item":"https://www.majidalfuttaim.com/en"},{"@type":"ListItem","position":"2","name":"\r\nWhat We Do","item":"https://www.majidalfuttaim.com/en/what-we-do"},{"@type":"ListItem","position":"3","name":"\r\nOur Industries","item":"https://www.majidalfuttaim.com/en/what-we-do/our-industries"},{"@type":"ListItem","position":"4","name":"Lifestyle","item":"https://www.majidalfuttaim.com/en/what-we-do/our-industries/industry/lifestyle"}]
                          ]
                        }
                          `}
                  </script>
                  <div
                    role="banner"
                    className="main-slide
                        section-to-scroll
                        sub-inner-banner"
                    data-color="dark"
                    id=""
                    data-section-name=""
                  >
                    <div
                      className="banner-image image pick-radial-gradient-banner "
                      data-cinemagraphvid=""
                      data-cinemagraphimg=""
                      data-gradient-desktop-top="70%"
                      data-gradient-desktop-bottom="50%"
                      data-gradient-mobile-top="60%"
                      data-gradient-mobile-bottom="60%"
                      data-gradient-mobile-center="50%"
                    >
                      <div className="b-img pick-hero-gradient">
                        <picture>
                          <source
                            media="(max-width: 767px)"
                            srcSet="https://www.majidalfuttaim.com/images/default-source/banners/whowearecreatingimpactcopy-(1).jpg?sfvrsn=229e4c2f_4"
                          />
                          <img
                            loading="lazy"
                            src="https://www.majidalfuttaim.com/images/default-source/banners/brandfashion.jpg?sfvrsn=521d5b41_4"
                            alt="brandfashion"
                          />
                        </picture>
                      </div>
                      <div className="banner-content row">
                        <div className="col-md-7 col-xs-12 padding0 ">
                          <h1>Lifestyle</h1>
                          <p className="sub-content">The Partner Of Choice For Leading Brands</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="scroll-indicator">
                <span className="arrow"></span>
              </div>
            </div>
          </div>
          <main>
            <div id="" className="section-to-scroll" data-section-name="" data-color="dark"></div>
            <div id="" className="section-to-scroll" data-section-name="" data-color="dark">
              <div
                className="left-image-video-col seprate-component reverse-content
                  "
              >
                <div className="section-container">
                  <div className="row swap-content">
                    <div className="left-video-sec">
                      <div className="video-image-container">
                        <picture className="video-image">
                          <source
                            media="(max-width: 767px)"
                            srcSet="https://www.majidalfuttaim.com/images/default-source/industry/industriesfashiondetailwidget.png?sfvrsn=d2bb3317_4"
                          />
                          <img
                            loading="lazy"
                            src="https://www.majidalfuttaim.com/images/default-source/industry/industriesfashiondetailwidget.png?sfvrsn=d2bb3317_4"
                            alt="industriesfashiondetailwidget"
                          />
                        </picture>
                      </div>
                    </div>
                    <div className="content-with-heading">
                      <div className="component-heading">
                        <div className="section-heading"></div>
                      </div>
                      <div className="bullet-points-section">
                        <p>
                          Majid Al Futtaim Lifestyle is home to world-class fashion and retail
                          brands with more than 100 stores across the MENA region.
                        </p>
                        <p>&nbsp;</p>
                        <p>
                          We are the international retail partner of choice for some of the world’s
                          most desirable brands, with exclusive licensing rights across the region
                          for names such as Abercrombie &amp; Fitch, Hollister, AllSaints, and
                          lululemon Athletica.&nbsp;
                        </p>
                        <p>&nbsp;</p>
                        <p>
                          In 2017, Majid Al Futtaim Lifestyle also moved into the Home Furnishings
                          market through a franchise partnership with Crate and Barrel. In 2021, we
                          launched THAT Concept Store, a distinctive concept and experiential retail
                          destination.
                        </p>
                        <p>&nbsp;</p>
                        <p>
                          We have a proven history of achieving the right brand positioning and
                          retail execution for each of the brands we choose to partner with,
                          resulting in exceptional performance.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="section-to-scroll" data-color="dark" data-section-name="" id="brands">
              <div className="other-mall-container">
                <div className="section-container">
                  <div className="section-heading">
                    <h2>Brands</h2>
                  </div>
                  <div className="other-malls">
                    <div className="other-mall-main">
                      <div className="other-mall">
                        <a href="https://www.majidalfuttaim.com/en/what-we-do/our-industries/brand/abercrombie-and-fitch">
                          <div className="mall-img">
                            <img
                              src="https://www.majidalfuttaim.com/images/default-source/brand-images/abercrombie-and-fitch-b-logo.png?sfvrsn=ee501679_3"
                              alt="Abercrombie-and-Fitch-B-logo"
                              title="Abercrombie-and-Fitch-B-logo"
                              loading="lazy"
                            />
                          </div>
                        </a>
                      </div>
                      <div className="mall-name">
                        <span>Abercrombie &amp; Fitch</span>
                      </div>
                    </div>
                    <div className="other-mall-main">
                      <div className="other-mall">
                        <a href="https://www.majidalfuttaim.com/en/what-we-do/our-industries/brand/allsaints">
                          <div className="mall-img">
                            <img
                              src="https://www.majidalfuttaim.com/images/default-source/brand-images/allsaints8cc29aa5c67d4d848bed64e3062a7157.png?sfvrsn=8f600dfd_4"
                              alt=""
                              title="AllSaints High Res"
                              loading="lazy"
                            />
                          </div>
                        </a>
                      </div>
                      <div className="mall-name">
                        <span>AllSaints</span>
                      </div>
                    </div>
                    <div className="other-mall-main">
                      <div className="other-mall">
                        <a href="https://www.majidalfuttaim.com/en/what-we-do/our-industries/brand/cb2">
                          <div className="mall-img">
                            <img
                              src="https://www.majidalfuttaim.com/images/default-source/brand-images/cb21db439000772462891b1a3847f1d7f26.png?sfvrsn=162114b9_4"
                              alt=""
                              title="CB2_logo_main_black"
                              loading="lazy"
                            />
                          </div>
                        </a>
                      </div>
                      <div className="mall-name">
                        <span>CB2</span>
                      </div>
                    </div>
                    <div className="other-mall-main">
                      <div className="other-mall">
                        <a href="https://www.majidalfuttaim.com/en/what-we-do/our-industries/brand/crate-and-barrel">
                          <div className="mall-img">
                            <img
                              src="https://www.majidalfuttaim.com/images/default-source/brand-images/crate-and-barrela6b52ee5a3da442992475216d145b0eb.png?sfvrsn=5f1203ab_4"
                              alt=""
                              title="Crate  Barrel InteractiveBrandFamily"
                              loading="lazy"
                            />
                          </div>
                        </a>
                      </div>
                      <div className="mall-name">
                        <span>Crate and Barrel</span>
                      </div>
                    </div>
                    <div className="other-mall-main">
                      <div className="other-mall">
                        <a href="https://www.majidalfuttaim.com/en/what-we-do/our-industries/brand/that-concept-store">
                          <div className="mall-img">
                            <img
                              src="https://www.majidalfuttaim.com/images/default-source/brand-images/that-concept-storea477e5ba5ede472d8f41b6b8d267d464.png?sfvrsn=23e3c437_4"
                              alt=""
                              title="that bilingual main logo"
                              loading="lazy"
                            />
                          </div>
                        </a>
                      </div>
                      <div className="mall-name">
                        <span>THAT Concept Store</span>
                      </div>
                    </div>
                    <div className="other-mall-main">
                      <div className="other-mall">
                        <a href="https://www.majidalfuttaim.com/en/what-we-do/our-industries/brand/lululemon-athletica">
                          <div className="mall-img">
                            <img
                              src="https://www.majidalfuttaim.com/images/default-source/brand-images/lululemon-athleticaf55eff6341c642448aee02e18ac39852.png?sfvrsn=e72600ea_4"
                              alt=""
                              title="Lululemon Athletica High Res"
                              loading="lazy"
                            />
                          </div>
                        </a>
                      </div>
                      <div className="mall-name">
                        <span>Lululemon Athletica</span>
                      </div>
                    </div>
                    <div className="other-mall-main">
                      <div className="other-mall">
                        <a href="https://www.majidalfuttaim.com/en/what-we-do/our-industries/brand/hollister">
                          <div className="mall-img">
                            <img
                              src="https://www.majidalfuttaim.com/images/default-source/brand-images/hollister02ee6d05415842c4a15ac3577523b883.png?sfvrsn=cfa204df_4"
                              alt=""
                              title="Hollister High Res"
                              loading="lazy"
                            />
                          </div>
                        </a>
                      </div>
                      <div className="mall-name">
                        <span>Hollister</span>
                      </div>
                    </div>
                    <div className="other-mall-main">
                      <div className="other-mall">
                        <a href="https://www.majidalfuttaim.com/en/what-we-do/our-industries/brand/lego-store">
                          <div className="mall-img">
                            <img
                              src="https://www.majidalfuttaim.com/images/default-source/brand-images/lego-store320994acdd2a4f7c9c50b9c350af3d1f.png?sfvrsn=c7a3b96e_4"
                              alt=""
                              title="Lego Store High Res_new_maf"
                              loading="lazy"
                            />
                          </div>
                        </a>
                      </div>
                      <div className="mall-name">
                        <span>LEGO Certified Stores</span>
                      </div>
                    </div>
                    <div className="other-mall-main">
                      <div className="other-mall">
                        <a href="https://www.majidalfuttaim.com/en/what-we-do/our-industries/brand/ceccotti-collezioni">
                          <div className="mall-img">
                            <img
                              src="https://www.majidalfuttaim.com/images/default-source/brand-images/logo-ceccotti-collezioni.png?sfvrsn=eb4f8547_3"
                              alt="Logo-Ceccotti-Collezioni"
                              title="Logo-Ceccotti-Collezioni"
                              loading="lazy"
                            />
                          </div>
                        </a>
                      </div>
                      <div className="mall-name">
                        <span>Ceccotti Collezioni</span>
                      </div>
                    </div>
                    <div className="other-mall-main">
                      <div className="other-mall">
                        <a href="https://www.majidalfuttaim.com/en/what-we-do/our-industries/brand/poltrona-frau">
                          <div className="mall-img">
                            <img
                              src="https://www.majidalfuttaim.com/images/default-source/brand-images/poltrona-frau-logo.png?sfvrsn=33e1e00e_3"
                              alt="Poltrona-Frau-Logo"
                              title="Poltrona-Frau-Logo"
                              loading="lazy"
                            />
                          </div>
                        </a>
                      </div>
                      <div className="mall-name">
                        <span>Poltrona Frau</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <noscript>
              <img
                height="1"
                width="1"
                style={{ display: 'none' }}
                src="https://www.facebook.com/tr?id=725379208272284&ev=PageView&noscript=1"
              />
            </noscript>
            <noscript>
              <img
                height="1"
                width="1"
                style={{ display: 'none' }}
                alt=""
                src="https://px.ads.linkedin.com/collect/?pid=320347&fmt=gif"
              />
            </noscript>
            <noscript>
              <iframe
                src="https://www.googletagmanager.com/ns.html?id=GTM-WT4VWL6"
                height="0"
                width="0"
                style={{ display: 'none', visibility: 'hidden' }}
              ></iframe>
            </noscript>
            <div className="video-pop-up">
              <div id="video-preloader">
                <div className="status">&nbsp;</div>
              </div>
              <div className="close-video-pop-up">
                {' '}
                <span>X</span>{' '}
              </div>
              <div className="video" id="pop-up-video">
                <video src="" id="video" controls autoPlay playsInline preload="auto"></video>
                <div id="youtube-iframe"></div>
              </div>
            </div>
            <button id="myBtn" className="backToTop" title="Go to top"></button>
          </main>
          <footer className="footer section-to-scroll">
            <div className="footer-data">
              <div className="section-container row">
                <div className="footer-content">
                  <div
                    id="Footer_TE21B85AC013_Col00"
                    className="footer-logo sf_colsIn"
                    data-sf-element="logo"
                    data-placeholder-label="logo"
                  >
                    <a href="/en/home" title="Open image in original size">
                      <img
                        loading="lazy"
                        className="mw-100 h-auto"
                        src="https://www.majidalfuttaim.com/images/default-source/logos/footer/footer-logo.png?sfvrsn=a2a15cdc_5"
                        title="footer logo"
                        alt="Footer logo"
                      />
                    </a>
                  </div>
                  <div className="social-icons">
                    <div
                      id="Footer_TE21B85AC013_Col01"
                      className="sf_colsIn"
                      data-sf-element="social-icons-title"
                      data-placeholder-label="social-icons-titles"
                    >
                      <h6>Stay in touch with us</h6>
                    </div>
                    <ul
                      id="Footer_TE21B85AC013_Col02"
                      className="sf_colsIn"
                      data-sf-element="social-icons-icons"
                      data-placeholder-label="social-icons-icons"
                    >
                      <li>
                        <a
                          className="svg-image"
                          href="/en/redirects/social-links/facebook"
                          target="_blank"
                          data-channel="ficon"
                        >
                          <img
                            loading="lazy"
                            src="https://www.majidalfuttaim.com/images/default-source/icons/footer-social/ficon.svg?sfvrsn=eeb57ccc_2"
                            title="ficon"
                            alt="ficon"
                          />
                        </a>
                      </li>
                      <li>
                        <a
                          className="svg-image"
                          href="/en/redirects/social-links/instagram"
                          target="_blank"
                          data-channel="instaicon"
                        >
                          <img
                            loading="lazy"
                            src="https://www.majidalfuttaim.com/images/default-source/icons/footer-social/instaicon.svg?sfvrsn=e6ff850e_2"
                            title="instaicon"
                            alt="instagram icon"
                          />
                        </a>
                      </li>
                      <li>
                        <a
                          className="svg-image"
                          href="/en/redirects/social-links/tiktok"
                          target="_blank"
                          data-channel="Tiktok_MAF"
                        >
                          <img
                            loading="lazy"
                            src="https://www.majidalfuttaim.com/images/default-source/icons/footer-social/tiktok_maf.svg?sfvrsn=46cbb51d_2"
                            title="Tiktok_MAF"
                            alt="tictok icon"
                          />
                        </a>
                      </li>
                      <li>
                        <a
                          className="svg-image"
                          href="/en/redirects/social-links/youtube"
                          target="_blank"
                          data-channel="youtubeicon"
                        >
                          <img
                            loading="lazy"
                            src="https://www.majidalfuttaim.com/images/default-source/icons/footer-social/youtubeicon.svg?sfvrsn=5b20ab0d_2"
                            title="youtubeicon"
                            alt="youtube icon"
                          />
                        </a>
                      </li>
                      <li>
                        <a
                          className="svg-image"
                          href="/en/redirects/social-links/twitter"
                          target="_blank"
                          data-channel="twittericon"
                        >
                          <img
                            loading="lazy"
                            src="https://www.majidalfuttaim.com/images/default-source/icons/footer-social/twittericon.svg?sfvrsn=6ae9bd55_12"
                            title="twittericon"
                            alt="twitter icon"
                          />
                        </a>
                      </li>
                      <li>
                        <a
                          className="svg-image"
                          href="/en/redirects/social-links/linkedin"
                          target="_blank"
                          data-channel="linkedin"
                        >
                          <img
                            loading="lazy"
                            src="https://www.majidalfuttaim.com/images/default-source/icons/footer-social/linkedin.svg?sfvrsn=253d7769_2"
                            title="linkedin"
                            alt="linkedin icon"
                          />
                        </a>
                      </li>
                      <li>
                        <a
                          className="svg-image"
                          href="/en/redirects/social-links/medium"
                          target="_blank"
                          data-channel="mediumicon"
                        >
                          <img
                            loading="lazy"
                            src="https://www.majidalfuttaim.com/images/default-source/icons/footer-social/mediumicon.svg?sfvrsn=f6747d40_2"
                            title="mediumicon"
                            alt="medium icon"
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  id="Footer_TE21B85AC013_Col03"
                  className="footer-links sf_colsIn"
                  data-sf-element="footer-links"
                  data-placeholder-label="footer-links"
                >
                  <div className="links">
                    <div
                      id="Footer_TE21B85AC017_Col00"
                      className="links-heading sf_colsIn"
                      data-sf-element="footer-links-heading"
                      data-placeholder-label="footer-links-heading"
                    ></div>
                    <ul
                      id="Footer_TE21B85AC017_Col01"
                      className="sf_colsIn"
                      data-sf-element="footer-link-items"
                      data-placeholder-label="footer-link-items"
                    ></ul>
                  </div>
                  <div className="links">
                    <div
                      id="Footer_TE21B85AC020_Col00"
                      className="links-heading sf_colsIn"
                      data-sf-element="footer-links-heading"
                      data-placeholder-label="footer-links-heading"
                    >
                      <h6>Who We Are</h6>
                    </div>
                    <ul
                      id="Footer_TE21B85AC020_Col01"
                      className="sf_colsIn"
                      data-sf-element="footer-link-items"
                      data-placeholder-label="footer-link-items"
                    >
                      <li>
                        <a href="/who-we-are/vision-values" target="_self">
                          Vision &amp; Values
                        </a>
                      </li>
                      <li>
                        <a href="/en/who-we-are/our-journey" target="_self">
                          Our Journey
                        </a>
                      </li>
                      <li>
                        <a href="/en/who-we-are/sustainability-and-esg" target="_self">
                          Sustainability &amp; ESG
                        </a>
                      </li>
                      <li>
                        <a href="/en/who-we-are/corporate-compliance" target="_self">
                          Corporate Compliance
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="links">
                    <div
                      id="Footer_TE21B85AC021_Col00"
                      className="links-heading sf_colsIn"
                      data-sf-element="footer-links-heading"
                      data-placeholder-label="footer-links-heading"
                    >
                      <h6>What We Do</h6>
                    </div>
                    <ul
                      id="Footer_TE21B85AC021_Col01"
                      className="sf_colsIn"
                      data-sf-element="footer-link-items"
                      data-placeholder-label="footer-link-items"
                    >
                      <li>
                        <a href="/en/what-we-do/unique-experiences" target="_self">
                          Unique Experiences
                        </a>
                      </li>
                      <li>
                        <a href="/en/what-we-do/our-industries" target="_self">
                          Our Industries
                        </a>
                      </li>
                      <li>
                        <a href="/en/what-we-do/brand-family" target="_self">
                          Our Brand Family
                        </a>
                      </li>
                      <li>
                        <a href="/en/what-we-do/partner-with-us" target="_self">
                          Partner with us
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="links">
                    <div
                      id="Footer_TE21B85AC022_Col00"
                      className="links-heading sf_colsIn"
                      data-sf-element="footer-links-heading"
                      data-placeholder-label="footer-links-heading"
                    >
                      <h6>Quick Links</h6>
                    </div>
                    <ul
                      id="Footer_TE21B85AC022_Col01"
                      className="sf_colsIn"
                      data-sf-element="footer-link-items"
                      data-placeholder-label="footer-link-items"
                    >
                      <li>
                        <a href="/en/contact-us" target="_self">
                          Contact Us
                        </a>
                      </li>
                      <li>
                        <a href="/en/media-centre" target="_self">
                          Media Centre
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://careers.majidalfuttaim.com/global/en/home?utm_campaign=Careers&amp;utm_medium=referal&amp;utm_source=corporate_website"
                          target="_blank"
                        >
                          People &amp; Careers
                        </a>
                      </li>
                      <li>
                        <a href="/en/investor-relations" target="_self">
                          Investor Relations
                        </a>
                      </li>
                      <li>
                        <a href="/en/redirects/footer/privacy-center" target="_self">
                          PRIVACY CENTER
                        </a>
                      </li>
                      <li>
                        <a href="/en/anti-fraud-disclaimer" target="_self">
                          Anti Fraud Disclaimer
                        </a>
                      </li>
                      <li>
                        <a href="/en/responsible-disclosure-policy" target="_self">
                          Responsible Disclosure Policy
                        </a>
                      </li>
                      <li>
                        <a href="/en/sitemap" target="_self">
                          Sitemap
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-copyright">
              <div className="section-container">
                <div className="copyright-text">
                  {' '}
                  <span>© 2025 Majid Al Futtaim. All rights reserved.</span>{' '}
                </div>
              </div>
            </div>
          </footer>
          <script
            src="https://www.majidalfuttaim.com/ResourcePackages/Corporate/assets/dist/js/main.js?v=20250429122340"
            type="text/javascript"
          ></script>
        </div>
        <script
          src="https://www.majidalfuttaim.com/ResourcePackages/Corporate/Mvc/Scripts/SearchBox/Search-box.js"
          type="text/javascript"
        ></script>
        <script
          src="https://www.majidalfuttaim.com/Frontend-Assembly/Telerik.Sitefinity.Frontend.Navigation/Mvc/Scripts/LanguageSelector/language-selector.min.js?package=Corporate&amp;v=LTE2NjQzNDkxOTc%3d"
          type="text/javascript"
        ></script>
        <script type="application/json" id="PersonalizationTracker">
          {`
         {"IsPagePersonalizationTarget":false,"IsUrlPersonalizationTarget":false,"PageId":"2346519e-bb8d-40cd-aa76-7a599720e5bf"}
         `}
        </script>
        <script
          type="text/javascript"
          src="https://www.majidalfuttaim.com/WebResource.axd?d=NjxTqR2bqTw1rewxxlkHPoMRI7Kba96rCdMiyxLatbQ68bYsVxWegexMYP55_ZZzMTo_Uq6NclA7B_cqzE0Q38t_764b-m6RniaoxWht-1TeFPYzlPLoQLQiuiyOTDNHpfV6KssqaPJpr-5icnAh9WyNHamIz3DMgclvmBP3qxwkwEvTOG-AsLzxekGLkyEEsm2C1sqeF3_-mqkAmW00iOoXloUwX_C4bFOSXUdhBfM1&amp;t=638696356120000000"
        ></script>
        <input
          data-sf-role="ar"
          type="hidden"
          value="https://www.majidalfuttaim.com/ar/what-we-do/our-industries/industry/lifestyle"
        />
        <script type="text/javascript">
          {`
          _linkedin_partner_id = "320347"; window._linkedin_data_partner_ids =
          window._linkedin_data_partner_ids || [];
          window._linkedin_data_partner_ids.push(_linkedin_partner_id);
          `}
        </script>
        <script type="text/javascript">
          {`
         (function (l) {
                    if (!l) {
                    window.lintrk = function (a, b) { window.lintrk.q.push([a, b]) };
                        window.lintrk.q = []
                    }
                    var s = document.getElementsByTagName("script")[0];
                    var b = document.createElement("script");
                    b.type = "text/javascript"; b.async = true;
                    b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
                    s.parentNode.insertBefore(b, s);
                })(window.lintrk);
                `}
        </script>
        <script type="text/javascript">
          {`
         !function(f,b,e,v,n,t,s)
         {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
         n.callMethod.apply(n,arguments):n.queue.push(arguments)};
         if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
         n.queue=[];t=b.createElement(e);t.async=!0;
         t.src=v;s=b.getElementsByTagName(e)[0];
         s.parentNode.insertBefore(t,s)}(window, document,'script',
         'https://connect.facebook.net/en_US/fbevents.js');
         fbq('init', '725379208272284');
         fbq('track', 'PageView');
        `}
        </script>{' '}
        <script>
          {`
         document.getElementById('skip-link').addEventListener('click', function (event) {
             event.preventDefault(); // Prevent default anchor behavior
             var content = document.querySelector('main');
             content.scrollIntoView({ behavior: 'smooth' });
         });
         `}
        </script>
      </body>
    </>
  );
};

export default Layout;
