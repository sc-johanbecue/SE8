/* eslint-disable @next/next/no-css-tags */
/**
 * This Layout is needed for Starter Kit.
 */
import React from 'react';
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
        <meta
          property="og:url"
          content="https://www.rolls-royce.com/products-and-services/civil-aerospace.aspx"
        />
        <meta http-equiv="X-UA-Compatible" content="IE=Edge" />
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="https://www.rolls-royce.com/~/media/9CFC862FD30B4D54BB2ACBE6E9F7672A.ico"
        />
        <meta
          name="description"
          content="Rolls-Royce is at the forefront of cutting-edge aviation technology. Learn more about how we’re pioneering the vital power needs of civil aerospace."
        />
        <link
          href="https://www.rolls-royce.com/stylesheets/invd-cm-custom-v3.css"
          rel="stylesheet"
          type="text/css"
          media="All"
        />
        <link
          href="https://assets.investisdigital.com/cookiemanager/v3/latest/css/invd-cm-theme.css"
          rel="stylesheet"
          type="text/css"
        />
        <script
          defer
          type="text/javascript"
          src="https://cdn.jsdelivr.net/npm/jquery-1.8@1.8.3/jquery.min.js"
        />
        <script type="text/javascript">
          {`
              (function(e,t,n){typeof define=="function"&&define.amd?define(["jquery"],function(r){return n(r,e,t),r.mobile}):n(e.jQuery,e,t)})(this,document,function(e,t,n,r){(function(e,n){e.extend(e.support,{orientation:"orientation"in t&&"onorientationchange"in t})})(e),function(e){e.event.special.throttledresize={setup:function(){e(this).bind("resize",n)},teardown:function(){e(this).unbind("resize",n)}};var t=250,n=function(){s=(new Date).getTime(),o=s-r,o>=t?(r=s,e(this).trigger("throttledresize")):(i&&clearTimeout(i),i=setTimeout(n,t-o))},r=0,i,s,o}(e),function(e,t){function p(){var e=s();e!==o&&(o=e,r.trigger(i))}var r=e(t),i="orientationchange",s,o,u,a,f={0:!0,180:!0},l,c,h;if(e.support.orientation){l=t.innerWidth||r.width(),c=t.innerHeight||r.height(),h=50,u=l>c&&l-c>h,a=f[t.orientation];if(u&&a||!u&&!a)f={"-90":!0,90:!0}}e.event.special.orientationchange=e.extend({},e.event.special.orientationchange,{setup:function(){if(e.support.orientation&&!e.event.special.orientationchange.disabled)return!1;o=s(),r.bind("throttledresize",p)},teardown:function(){if(e.support.orientation&&!e.event.special.orientationchange.disabled)return!1;r.unbind("throttledresize",p)},add:function(e){var t=e.handler;e.handler=function(e){return e.orientation=s(),t.apply(this,arguments)}}}),e.event.special.orientationchange.orientation=s=function(){var r=!0,i=n.documentElement;return e.support.orientation?r=f[t.orientation]:r=i&&i.clientWidth/i.clientHeight<1.1,r?"portrait":"landscape"},e.fn[i]=function(e){return e?this.bind(i,e):this.trigger(i)},e.attrFn&&(e.attrFn[i]=!0)}(e,this)});
          `}
        </script>
        <script type="text/javascript">
          {`
              $j = jQuery.noConflict(); autoCompleteDomain = 'www.rolls-royce.com';
          `}
        </script>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
        <meta name="format-detection" content="telephone=no" />
        <link
          href="https://www.rolls-royce.com/stylesheets/rolls-royce-china-v2-css.css?revision=b9c04757-bf69-4cdf-93c4-360ddc31482f"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://www.rolls-royce.com/stylesheets/main-new-v1.css?revision=c9230e0d-4a36-4629-b886-9f563a9511a3"
          rel="stylesheet"
          type="text/css"
          media="All"
        />
        <link
          href="https://www.rolls-royce.com/stylesheets/large-signpost.css?revision=80da7955-c76f-40ea-84f0-9147e5390776"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://www.rolls-royce.com/stylesheets/news-insight-pr-build-work.css?revision=37bc6a19-1500-40ba-a79f-22d056c1ce69"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://www.rolls-royce.com/stylesheets/invd-cm-theme.css?revision=48c1643f-d006-415c-bdad-946c1fa00ffb"
          rel="stylesheet"
          type="text/css"
          media="All"
        />
        <link
          href="https://www.rolls-royce.com/stylesheets/invd-cm-custom-v3.css?revision=d9c3335b-b4b7-4ada-9154-b39e0f2c2762"
          rel="stylesheet"
          type="text/css"
          media="All"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://www.rolls-royce.com/stylesheets/ResourceHandlermergeall.css?css=1&amp;1=%7BD04EEEB5-32E6-467F-9D8B-F462B1D69DD0%7D&amp;2=%7BFF823226-D3BE-4EFD-A906-F102916D594A%7D&amp;3=%7B65C813BD-4B0F-4CB8-B2A2-DFED55A4D226%7D&amp;5=%7B5AE1DB5C-F001-4835-851C-EC4BC095296B%7D&amp;6=%7B0FB84626-E0E4-406A-9ADB-E233267D6F7C%7D&amp;7=%7B8E8308FA-5E2A-4B8F-891A-AEC5B0FAAA7C%7D&amp;8=%7B717DA827-C81B-4010-A186-4FF42D150D36%7D&amp;11=%7B69065FF0-DD2C-489F-9A57-CFB9DC98D22F%7D&amp;12=%7B4025E693-8046-4CA4-9D9F-34DCA06A2230%7D&amp;13=%7BF4DE48A3-DBD6-4ACC-946C-775F6BC52AA7%7D&amp;14=%7BAD542B00-A97C-44B6-822E-2A5B73B1F428%7D&amp;15=%7B1C3A6307-819E-47E2-AFDA-05EEF85CFC1D%7D&amp;16=%7B57DDD23A-A482-400E-BCEB-D0E55177C468%7D&amp;17=%7BE77D5730-F7D2-4352-B516-B80FD6AC5D5F%7D&amp;18=%7B22A19215-3E02-44D6-B080-CB6A171E5DDF%7D&amp;19=%7B29DFC46A-1E97-424E-974B-D9DFB644A1F2%7D&amp;20=%7B2E580448-8DFF-48E1-8572-702D3816A281%7D&amp;21=%7B34538F32-7C93-43A7-8149-1908BD8079C9%7D&amp;22=%7BEB300F72-ACC6-4F9A-AA2E-118588E2FE50%7D&amp;23=%7B0C3A8E36-62EA-4F5E-A3F0-2BC54CFC03FF%7D&amp;24=%7B00216C9F-DDEF-4948-8963-576A0E52A27E%7D&amp;25=%7B2A02FC28-9752-40FF-AD75-B3587055889B%7D&amp;26=%7B3B626331-94B0-4080-A519-AF743EFBCC5F%7D&amp;27=%7B3867310B-4DA8-4EAC-BE12-BF065DDD946A%7D&amp;28=%7B6A86D9CB-FC0C-427A-B53C-EA1961E61862%7D&amp;29=%7BB53868D6-72EE-4AD1-B2F7-22168320B8FB%7D&amp;31=%7B1594F850-D802-4BC0-A954-776890176A8B%7D&amp;32=%7B601D878E-F5A1-4864-A708-FDCF911EA6FB%7D&amp;35=%7B7D25B84E-C46B-457A-A541-6E7080D3703A%7D&amp;36=%7B01B546F2-23CE-4427-8DC3-885EFDEABF9F%7D&amp;38=%7BF1D2D2DC-5813-41A2-B38D-F1912068A75E%7D&amp;39=%7B0028889D-DB9C-4672-9E7A-79FB57A11AED%7D&amp;40=%7B044F6EB1-0525-4AD8-811A-04DB5F347F3B%7D&amp;41=%7B382CFBBB-B77B-45F2-86D2-50430F90908C%7D&amp;42=%7BE4127271-31A0-4E3C-A5D4-7591DF33E4F3%7D&amp;43=%7B15FE1691-BE0B-4A6A-8CA7-C771BCF9269E%7D&amp;45=%7B24C88E7C-9BC3-4EF1-A1C9-D74E965F9980%7D&amp;sc_lang=en&amp;revision=37bc6a19-1500-40ba-a79f-22d056c1ce69"
          media="all"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://www.rolls-royce.com/stylesheets/ResourceHandlermergeprint.css?css=1&amp;30=%7B49252A01-F8D2-4D47-A1EC-EF3B4072DC3B%7D&amp;37=%7BAF502A95-5C33-4C90-B681-B80891DCCF6B%7D&amp;sc_lang=en&amp;revision=37bc6a19-1500-40ba-a79f-22d056c1ce69"
          media="print"
        />
        <link
          href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
          rel="stylesheet"
          type="text/css"
          media="All"
        />
        <link
          href="https://viz.tools.investis.com/dataVizProjects/rolls-royce-infographics/css/rolls-royce-infographics.min.css"
          rel="stylesheet"
          type="text/css"
          media="All"
        />
        <link
          href="https://viz.tools.investis.com/dataVizProjects/rr-info/css/rr-info.min.css"
          rel="stylesheet"
          type="text/css"
          media="All"
        />
        <link
          href="https://assets.investisdigital.com/cookiemanager/v3/latest/css/invd-cm-theme.css"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://www.rolls-royce.com/stylesheets/full-width-main.css?revision=00839ce3-d0fd-48bf-b9a9-1a6a5d314b66"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://www.rolls-royce.com/stylesheets/full-width-main-media-queries.css?revision=4dc22ebd-f6ea-4024-b3e5-78ee0a976e9b"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://www.rolls-royce.com/stylesheets/slick.css?revision=6bbc2728-7655-456d-aea9-cc34de82ba44"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://www.rolls-royce.com/stylesheets/marine-main.css?revision=4469f80f-78a7-4102-8c72-f0673c7184b2"
          rel="stylesheet"
          type="text/css"
          media="All"
        />
        <link
          href="https://www.rolls-royce.com/stylesheets/marine-media-queries.css?revision=f34d717e-b27d-451a-baad-36e8717f409d"
          rel="stylesheet"
          type="text/css"
          media="All"
        />
        <link
          href="https://www.rolls-royce.com/stylesheets/marine-print.css?revision=bc5423f1-2ddc-429f-9c8e-a52961ad1933"
          rel="stylesheet"
          type="text/css"
          media="Print"
        />
        <link
          href="https://www.rolls-royce.com/stylesheets/2-9-super-breaker.css?revision=d594d281-30d1-4441-8e1c-67e5420763a4"
          rel="stylesheet"
          type="text/css"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="https://www.rolls-royce.com/~/media/Images/R/Rolls-Royce/logo/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="https://www.rolls-royce.com/~/media/Images/R/Rolls-Royce/logo/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="https://www.rolls-royce.com/~/media/Images/R/Rolls-Royce/logo/favicons/favicon-16x16.png"
        />
        <link
          rel="manifest"
          href="https://www.rolls-royce.com/~/media/Images/R/Rolls-Royce/logo/favicons/manifest.json"
        />
        <link
          rel="mask-icon"
          sizes="any"
          href="https://www.rolls-royce.com/~/media/Images/R/Rolls-Royce/logo/favicons/favicon-pin.svg"
          color="#10069f"
        />
        <meta name="theme-color" content="#10069f" />
        <link
          href="https://www.rolls-royce.com/stylesheets/full-width-breadcrumb?revisionid=1eeb1d57-f4bc-4479-8b1b-38bd886984ab"
          rel="stylesheet"
          type="text/css"
          media="all"
        />
        <style
          dangerouslySetInnerHTML={{
            __html: `
            .section-textColorBlack .img-cnt-on-img-content,
            .section-textColorBlack .img-cnt-on-img-content a {
              color: #000000;
            }
            .section-titleColorBlack .font40.mixbold.img-cnt-ttl {
              color: #000000;
            }
            @media all and (max-width: 991px) {
              .home-content-fw.Black {
                background: #000000;
              }
              .homecontentwrapper:not(.no-image) .home-banner-fw .home-content-fw.Black {
                background: #000000 !important;
              }
            }
            .sustainable-section .img-cnt-on-img-content.Black,
            .sustainable-section .img-cnt-on-img-content.Black a.sustainable-dwld-link {
              color: #000000;
            }
            .section.sections-wrap .new-country-site-section.blue1 {
              background: #f7f7f7;
              margin-left: auto;
              margin-right: auto;
              max-width: 2000px;
            }
            /* .section.sections-wrap .new-country-site-section.Black + .new-country-site-section.Black{padding-top:0;}*/
            /* Do Comment if not QA hasn't check Start */
            .section.sections-wrap .new-country-site-section.Black {
              margin-left: auto;
              margin-right: auto;
              max-width: 2000px;
            }
            .section.sections-wrap .new-country-site-section.Black > .fw-tabbed-wrap {
              margin-left: auto;
              margin-right: auto;
              max-width: 1170px;
            }
            .section.sections-wrap
              .fw-country-vid-img-tab-wrapper.new-country-site-section.Black
              > .fw-tabbed-wrap {
              margin-left: auto;
              margin-right: auto;
              max-width: 1720px;
            }
            .section.sections-wrap .new-country-site-section.Black > .fw-intro-three-col {
              margin-left: auto;
              margin-right: auto;
              max-width: 1170px;
            }
            /* Do Comment if not QA hasn't check End */
            .fw-banner-btm-main .home-content-fw-inner .fw-home-banner-btm-content-main > h1.Black,
            .fw-banner-btm-main
              .home-content-fw-inner
              .fw-home-banner-btm-content-main
              > h1.Black
              a,
            .home-content-fw-inner > h1.Black,
            .home-content-fw-inner > h1.Black > a {
              color: #000000;
            }
            .home-content-fw-inner > h1.Black > a:hover,
            .fw-banner-btm-main
              .home-content-fw-inner
              .fw-home-banner-btm-content-main
              > h1.Black
              a:hover {
              color: #1cafd3;
            }
            .fw-home-banner-btm-content.Black,
            .home-content-fw-inner div.Black {
              color: #000000;
            }
            .inn-video-wrapper.Black .inn-play-video.landing-video-btn {
              border-color: #000000;
            }
            .inn-video-wrapper.Black .inn-play-video.landing-video-btn:before {
              border-left-color: #000000;
            }
            /* Country Sites */
            .img-cnt-outer-bg.Black {
              background: #000000;
            }
            .section.sections-wrap .new-country-site-section.Black {
              background: #000000;
            }
            .section.sections-wrap .new-country-site-section.fw-stats-section.Black {
              background: #000000;
            }
            .section.sections-wrap.last-div .Black.new-country-site-section.last-div {
              margin-bottom: 0;
            }
            .section.sections-wrap.last-div .Black.new-country-site-section:last-child {
              margin-bottom: 0;
            }
            /*.section.sections-wrap.last-div .Black.new-country-site-section*/
            .section.sections-wrap .new-country-site-section.fw-related-products.Black {
              margin-bottom: 34px;
            }
            .section.sections-wrap .new-country-site-section.Black.margin-bottom-zero {
              margin-bottom: 0;
            }
            .section.sections-wrap .new-country-site-section.Black.add-bottom-margin {
              margin-bottom: 100px;
            }
            .section.sections-wrap
              .new-country-site-section.fw-related-products.Black.margin-bottom-zero {
              margin-bottom: 0;
            }
            .section.sections-wrap .new-country-site-section.Black.margin-bottom-zero {
              margin-bottom: 0;
            }
            .section.sections-wrap
              .new-country-site-section.fw-related-products.Black.margin-top-zero {
              margin-top: 0;
            }
            .section.sections-wrap .new-country-site-section.Black.margin-top-zero {
              margin-top: 0;
            }
            @media all and (max-width: 1399px) {
              .section.sections-wrap .new-country-site-section.Black.add-bottom-margin {
                margin-bottom: 70px;
              }
              /*.section.sections-wrap .new-country-site-section.fw-stats-section.Black, .section.sections-wrap .new-country-site-section.Black {padding-bottom: 63px; padding-top: 63px;}*/
            }
            @media all and (max-width: 991px) {
              /*.section.sections-wrap .new-country-site-section.fw-stats-section.Black, .section.sections-wrap .new-country-site-section.Black { padding-bottom: 45px; padding-top: 63px;}*/
              .section.sections-wrap .new-country-site-section.Black.add-bottom-margin {
                margin-bottom: 50px;
              }
              .section.sections-wrap .new-country-site-section.fw-related-products.Black {
                padding-bottom: 25px;
              }
              .fw-en-form-wrapper-outer.Black {
                padding-left: 30px;
                padding-right: 30px;
              }
              .section.sections-wrap.last-div .new-country-site-section.fw-img-cnt-section {
                margin-bottom: 0;
              }
              .section.sections-wrap.last-div
                .new-country-site-section.fw-img-cnt-section
                > .Black {
                background: #000000;
                padding-bottom: 50px;
              }
            }
            @media all and (max-width: 767px) {
              .sustainable-section .img-cnt-on-img-content.Black,
              .sustainable-section .img-cnt-on-img-content.Black a.sustainable-dwld-link {
                color: #004990;
              }
              /*.section.sections-wrap .new-country-site-section.fw-stats-section.Black, .section.sections-wrap .new-country-site-section.Black { padding-top: 63px; padding-bottom:40px;}*/
              .section.sections-wrap .new-country-site-section.Black.add-bottom-margin {
                margin-bottom: 40px;
              }
              .section.sections-wrap .new-country-site-section.fw-related-products.Black {
                padding-bottom: 13px;
              }
              .fw-en-form-wrapper-outer.Black {
                padding-left: 15px;
                padding-right: 15px;
              }
              .section.sections-wrap.last-div .new-country-site-section.fw-img-cnt-section {
                margin-bottom: 0;
              }
              .section.sections-wrap.last-div
                .new-country-site-section.fw-img-cnt-section
                > .Black {
                background: #000000;
                padding-bottom: 40px;
              }
            }
            .section-textColorWhite .img-cnt-on-img-content,
            .section-textColorWhite .img-cnt-on-img-content a {
              color: #ffffff;
            }
            .section-titleColorWhite .font40.mixbold.img-cnt-ttl {
              color: #ffffff;
            }
            @media all and (max-width: 991px) {
              .home-content-fw.White {
                background: #ffffff;
              }
              .homecontentwrapper:not(.no-image) .home-banner-fw .home-content-fw.White {
                background: #ffffff !important;
              }
            }
            .sustainable-section .img-cnt-on-img-content.White,
            .sustainable-section .img-cnt-on-img-content.White a.sustainable-dwld-link {
              color: #ffffff;
            }
            .section.sections-wrap .new-country-site-section.blue1 {
              background: #f7f7f7;
              margin-left: auto;
              margin-right: auto;
              max-width: 2000px;
            }
            /* .section.sections-wrap .new-country-site-section.White + .new-country-site-section.White{padding-top:0;}*/
            /* Do Comment if not QA hasn't check Start */
            .section.sections-wrap .new-country-site-section.White {
              margin-left: auto;
              margin-right: auto;
              max-width: 2000px;
            }
            .section.sections-wrap .new-country-site-section.White > .fw-tabbed-wrap {
              margin-left: auto;
              margin-right: auto;
              max-width: 1170px;
            }
            .section.sections-wrap
              .fw-country-vid-img-tab-wrapper.new-country-site-section.White
              > .fw-tabbed-wrap {
              margin-left: auto;
              margin-right: auto;
              max-width: 1720px;
            }
            .section.sections-wrap .new-country-site-section.White > .fw-intro-three-col {
              margin-left: auto;
              margin-right: auto;
              max-width: 1170px;
            }
            /* Do Comment if not QA hasn't check End */
            .fw-banner-btm-main .home-content-fw-inner .fw-home-banner-btm-content-main > h1.White,
            .fw-banner-btm-main
              .home-content-fw-inner
              .fw-home-banner-btm-content-main
              > h1.White
              a,
            .home-content-fw-inner > h1.White,
            .home-content-fw-inner > h1.White > a {
              color: #ffffff;
            }
            .home-content-fw-inner > h1.White > a:hover,
            .fw-banner-btm-main
              .home-content-fw-inner
              .fw-home-banner-btm-content-main
              > h1.White
              a:hover {
              color: #1cafd3;
            }
            .fw-home-banner-btm-content.White,
            .home-content-fw-inner div.White {
              color: #ffffff;
            }
            .inn-video-wrapper.White .inn-play-video.landing-video-btn {
              border-color: #ffffff;
            }
            .inn-video-wrapper.White .inn-play-video.landing-video-btn:before {
              border-left-color: #ffffff;
            }
            /* Country Sites */
            .img-cnt-outer-bg.White {
              background: #ffffff;
            }
            .section.sections-wrap .new-country-site-section.White {
              background: #ffffff;
            }
            .section.sections-wrap .new-country-site-section.fw-stats-section.White {
              background: #ffffff;
            }
            .section.sections-wrap.last-div .White.new-country-site-section.last-div {
              margin-bottom: 0;
            }
            .section.sections-wrap.last-div .White.new-country-site-section:last-child {
              margin-bottom: 0;
            }
            /*.section.sections-wrap.last-div .White.new-country-site-section*/
            .section.sections-wrap .new-country-site-section.fw-related-products.White {
              margin-bottom: 34px;
            }
            .section.sections-wrap .new-country-site-section.White.margin-bottom-zero {
              margin-bottom: 0;
            }
            .section.sections-wrap .new-country-site-section.White.add-bottom-margin {
              margin-bottom: 100px;
            }
            .section.sections-wrap
              .new-country-site-section.fw-related-products.White.margin-bottom-zero {
              margin-bottom: 0;
            }
            .section.sections-wrap .new-country-site-section.White.margin-bottom-zero {
              margin-bottom: 0;
            }
            .section.sections-wrap
              .new-country-site-section.fw-related-products.White.margin-top-zero {
              margin-top: 0;
            }
            .section.sections-wrap .new-country-site-section.White.margin-top-zero {
              margin-top: 0;
            }
            @media all and (max-width: 1399px) {
              .section.sections-wrap .new-country-site-section.White.add-bottom-margin {
                margin-bottom: 70px;
              }
              /*.section.sections-wrap .new-country-site-section.fw-stats-section.White, .section.sections-wrap .new-country-site-section.White {padding-bottom: 63px; padding-top: 63px;}*/
            }
            @media all and (max-width: 991px) {
              /*.section.sections-wrap .new-country-site-section.fw-stats-section.White, .section.sections-wrap .new-country-site-section.White { padding-bottom: 45px; padding-top: 63px;}*/
              .section.sections-wrap .new-country-site-section.White.add-bottom-margin {
                margin-bottom: 50px;
              }
              .section.sections-wrap .new-country-site-section.fw-related-products.White {
                padding-bottom: 25px;
              }
              .fw-en-form-wrapper-outer.White {
                padding-left: 30px;
                padding-right: 30px;
              }
              .section.sections-wrap.last-div .new-country-site-section.fw-img-cnt-section {
                margin-bottom: 0;
              }
              .section.sections-wrap.last-div
                .new-country-site-section.fw-img-cnt-section
                > .White {
                background: #ffffff;
                padding-bottom: 50px;
              }
            }
            @media all and (max-width: 767px) {
              .sustainable-section .img-cnt-on-img-content.White,
              .sustainable-section .img-cnt-on-img-content.White a.sustainable-dwld-link {
                color: #004990;
              }
              /*.section.sections-wrap .new-country-site-section.fw-stats-section.White, .section.sections-wrap .new-country-site-section.White { padding-top: 63px; padding-bottom:40px;}*/
              .section.sections-wrap .new-country-site-section.White.add-bottom-margin {
                margin-bottom: 40px;
              }
              .section.sections-wrap .new-country-site-section.fw-related-products.White {
                padding-bottom: 13px;
              }
              .fw-en-form-wrapper-outer.White {
                padding-left: 15px;
                padding-right: 15px;
              }
              .section.sections-wrap.last-div .new-country-site-section.fw-img-cnt-section {
                margin-bottom: 0;
              }
              .section.sections-wrap.last-div
                .new-country-site-section.fw-img-cnt-section
                > .White {
                background: #ffffff;
                padding-bottom: 40px;
              }
            }
            .section-textColorNavyBlue .img-cnt-on-img-content,
            .section-textColorNavyBlue .img-cnt-on-img-content a {
              color: #10069f;
            }
            .section-titleColorNavyBlue .font40.mixbold.img-cnt-ttl {
              color: #10069f;
            }
            @media all and (max-width: 991px) {
              .home-content-fw.NavyBlue {
                background: #10069f;
              }
              .homecontentwrapper:not(.no-image) .home-banner-fw .home-content-fw.NavyBlue {
                background: #10069f !important;
              }
            }
            .sustainable-section .img-cnt-on-img-content.NavyBlue,
            .sustainable-section .img-cnt-on-img-content.NavyBlue a.sustainable-dwld-link {
              color: #10069f;
            }
            .section.sections-wrap .new-country-site-section.blue1 {
              background: #f7f7f7;
              margin-left: auto;
              margin-right: auto;
              max-width: 2000px;
            }
            /* .section.sections-wrap .new-country-site-section.NavyBlue + .new-country-site-section.NavyBlue{padding-top:0;}*/
            /* Do Comment if not QA hasn't check Start */
            .section.sections-wrap .new-country-site-section.NavyBlue {
              margin-left: auto;
              margin-right: auto;
              max-width: 2000px;
            }
            .section.sections-wrap .new-country-site-section.NavyBlue > .fw-tabbed-wrap {
              margin-left: auto;
              margin-right: auto;
              max-width: 1170px;
            }
            .section.sections-wrap
              .fw-country-vid-img-tab-wrapper.new-country-site-section.NavyBlue
              > .fw-tabbed-wrap {
              margin-left: auto;
              margin-right: auto;
              max-width: 1720px;
            }
            .section.sections-wrap .new-country-site-section.NavyBlue > .fw-intro-three-col {
              margin-left: auto;
              margin-right: auto;
              max-width: 1170px;
            }
            /* Do Comment if not QA hasn't check End */
            .fw-banner-btm-main
              .home-content-fw-inner
              .fw-home-banner-btm-content-main
              > h1.NavyBlue,
            .fw-banner-btm-main
              .home-content-fw-inner
              .fw-home-banner-btm-content-main
              > h1.NavyBlue
              a,
            .home-content-fw-inner > h1.NavyBlue,
            .home-content-fw-inner > h1.NavyBlue > a {
              color: #10069f;
            }
            .home-content-fw-inner > h1.NavyBlue > a:hover,
            .fw-banner-btm-main
              .home-content-fw-inner
              .fw-home-banner-btm-content-main
              > h1.NavyBlue
              a:hover {
              color: #1cafd3;
            }
            .fw-home-banner-btm-content.NavyBlue,
            .home-content-fw-inner div.NavyBlue {
              color: #10069f;
            }
            .inn-video-wrapper.NavyBlue .inn-play-video.landing-video-btn {
              border-color: #10069f;
            }
            .inn-video-wrapper.NavyBlue .inn-play-video.landing-video-btn:before {
              border-left-color: #10069f;
            }
            /* Country Sites */
            .img-cnt-outer-bg.NavyBlue {
              background: #10069f;
            }
            .section.sections-wrap .new-country-site-section.NavyBlue {
              background: #10069f;
            }
            .section.sections-wrap .new-country-site-section.fw-stats-section.NavyBlue {
              background: #10069f;
            }
            .section.sections-wrap.last-div .NavyBlue.new-country-site-section.last-div {
              margin-bottom: 0;
            }
            .section.sections-wrap.last-div .NavyBlue.new-country-site-section:last-child {
              margin-bottom: 0;
            }
            /*.section.sections-wrap.last-div .NavyBlue.new-country-site-section*/
            .section.sections-wrap .new-country-site-section.fw-related-products.NavyBlue {
              margin-bottom: 34px;
            }
            .section.sections-wrap .new-country-site-section.NavyBlue.margin-bottom-zero {
              margin-bottom: 0;
            }
            .section.sections-wrap .new-country-site-section.NavyBlue.add-bottom-margin {
              margin-bottom: 100px;
            }
            .section.sections-wrap
              .new-country-site-section.fw-related-products.NavyBlue.margin-bottom-zero {
              margin-bottom: 0;
            }
            .section.sections-wrap .new-country-site-section.NavyBlue.margin-bottom-zero {
              margin-bottom: 0;
            }
            .section.sections-wrap
              .new-country-site-section.fw-related-products.NavyBlue.margin-top-zero {
              margin-top: 0;
            }
            .section.sections-wrap .new-country-site-section.NavyBlue.margin-top-zero {
              margin-top: 0;
            }
            @media all and (max-width: 1399px) {
              .section.sections-wrap .new-country-site-section.NavyBlue.add-bottom-margin {
                margin-bottom: 70px;
              }
              /*.section.sections-wrap .new-country-site-section.fw-stats-section.NavyBlue, .section.sections-wrap .new-country-site-section.NavyBlue {padding-bottom: 63px; padding-top: 63px;}*/
            }
            @media all and (max-width: 991px) {
              /*.section.sections-wrap .new-country-site-section.fw-stats-section.NavyBlue, .section.sections-wrap .new-country-site-section.NavyBlue { padding-bottom: 45px; padding-top: 63px;}*/
              .section.sections-wrap .new-country-site-section.NavyBlue.add-bottom-margin {
                margin-bottom: 50px;
              }
              .section.sections-wrap .new-country-site-section.fw-related-products.NavyBlue {
                padding-bottom: 25px;
              }
              .fw-en-form-wrapper-outer.NavyBlue {
                padding-left: 30px;
                padding-right: 30px;
              }
              .section.sections-wrap.last-div .new-country-site-section.fw-img-cnt-section {
                margin-bottom: 0;
              }
              .section.sections-wrap.last-div
                .new-country-site-section.fw-img-cnt-section
                > .NavyBlue {
                background: #10069f;
                padding-bottom: 50px;
              }
            }
            @media all and (max-width: 767px) {
              .sustainable-section .img-cnt-on-img-content.NavyBlue,
              .sustainable-section .img-cnt-on-img-content.NavyBlue a.sustainable-dwld-link {
                color: #004990;
              }
              /*.section.sections-wrap .new-country-site-section.fw-stats-section.NavyBlue, .section.sections-wrap .new-country-site-section.NavyBlue { padding-top: 63px; padding-bottom:40px;}*/
              .section.sections-wrap .new-country-site-section.NavyBlue.add-bottom-margin {
                margin-bottom: 40px;
              }
              .section.sections-wrap .new-country-site-section.fw-related-products.NavyBlue {
                padding-bottom: 13px;
              }
              .fw-en-form-wrapper-outer.NavyBlue {
                padding-left: 15px;
                padding-right: 15px;
              }
              .section.sections-wrap.last-div .new-country-site-section.fw-img-cnt-section {
                margin-bottom: 0;
              }
              .section.sections-wrap.last-div
                .new-country-site-section.fw-img-cnt-section
                > .NavyBlue {
                background: #10069f;
                padding-bottom: 40px;
              }
            }
            .section-textColorGray .img-cnt-on-img-content,
            .section-textColorGray .img-cnt-on-img-content a {
              color: #f7f7f7;
            }
            .section-titleColorGray .font40.mixbold.img-cnt-ttl {
              color: #f7f7f7;
            }
            @media all and (max-width: 991px) {
              .home-content-fw.Gray {
                background: #f7f7f7;
              }
              .homecontentwrapper:not(.no-image) .home-banner-fw .home-content-fw.Gray {
                background: #f7f7f7 !important;
              }
            }
            .sustainable-section .img-cnt-on-img-content.Gray,
            .sustainable-section .img-cnt-on-img-content.Gray a.sustainable-dwld-link {
              color: #f7f7f7;
            }
            .section.sections-wrap .new-country-site-section.blue1 {
              background: #f7f7f7;
              margin-left: auto;
              margin-right: auto;
              max-width: 2000px;
            }
            /* .section.sections-wrap .new-country-site-section.Gray + .new-country-site-section.Gray{padding-top:0;}*/
            /* Do Comment if not QA hasn't check Start */
            .section.sections-wrap .new-country-site-section.Gray {
              margin-left: auto;
              margin-right: auto;
              max-width: 2000px;
            }
            .section.sections-wrap .new-country-site-section.Gray > .fw-tabbed-wrap {
              margin-left: auto;
              margin-right: auto;
              max-width: 1170px;
            }
            .section.sections-wrap
              .fw-country-vid-img-tab-wrapper.new-country-site-section.Gray
              > .fw-tabbed-wrap {
              margin-left: auto;
              margin-right: auto;
              max-width: 1720px;
            }
            .section.sections-wrap .new-country-site-section.Gray > .fw-intro-three-col {
              margin-left: auto;
              margin-right: auto;
              max-width: 1170px;
            }
            /* Do Comment if not QA hasn't check End */
            .fw-banner-btm-main .home-content-fw-inner .fw-home-banner-btm-content-main > h1.Gray,
            .fw-banner-btm-main .home-content-fw-inner .fw-home-banner-btm-content-main > h1.Gray a,
            .home-content-fw-inner > h1.Gray,
            .home-content-fw-inner > h1.Gray > a {
              color: #f7f7f7;
            }
            .home-content-fw-inner > h1.Gray > a:hover,
            .fw-banner-btm-main
              .home-content-fw-inner
              .fw-home-banner-btm-content-main
              > h1.Gray
              a:hover {
              color: #1cafd3;
            }
            .fw-home-banner-btm-content.Gray,
            .home-content-fw-inner div.Gray {
              color: #f7f7f7;
            }
            .inn-video-wrapper.Gray .inn-play-video.landing-video-btn {
              border-color: #f7f7f7;
            }
            .inn-video-wrapper.Gray .inn-play-video.landing-video-btn:before {
              border-left-color: #f7f7f7;
            }
            /* Country Sites */
            .img-cnt-outer-bg.Gray {
              background: #f7f7f7;
            }
            .section.sections-wrap .new-country-site-section.Gray {
              background: #f7f7f7;
            }
            .section.sections-wrap .new-country-site-section.fw-stats-section.Gray {
              background: #f7f7f7;
            }
            .section.sections-wrap.last-div .Gray.new-country-site-section.last-div {
              margin-bottom: 0;
            }
            .section.sections-wrap.last-div .Gray.new-country-site-section:last-child {
              margin-bottom: 0;
            }
            /*.section.sections-wrap.last-div .Gray.new-country-site-section*/
            .section.sections-wrap .new-country-site-section.fw-related-products.Gray {
              margin-bottom: 34px;
            }
            .section.sections-wrap .new-country-site-section.Gray.margin-bottom-zero {
              margin-bottom: 0;
            }
            .section.sections-wrap .new-country-site-section.Gray.add-bottom-margin {
              margin-bottom: 100px;
            }
            .section.sections-wrap
              .new-country-site-section.fw-related-products.Gray.margin-bottom-zero {
              margin-bottom: 0;
            }
            .section.sections-wrap .new-country-site-section.Gray.margin-bottom-zero {
              margin-bottom: 0;
            }
            .section.sections-wrap
              .new-country-site-section.fw-related-products.Gray.margin-top-zero {
              margin-top: 0;
            }
            .section.sections-wrap .new-country-site-section.Gray.margin-top-zero {
              margin-top: 0;
            }
            @media all and (max-width: 1399px) {
              .section.sections-wrap .new-country-site-section.Gray.add-bottom-margin {
                margin-bottom: 70px;
              }
              /*.section.sections-wrap .new-country-site-section.fw-stats-section.Gray, .section.sections-wrap .new-country-site-section.Gray {padding-bottom: 63px; padding-top: 63px;}*/
            }
            @media all and (max-width: 991px) {
              /*.section.sections-wrap .new-country-site-section.fw-stats-section.Gray, .section.sections-wrap .new-country-site-section.Gray { padding-bottom: 45px; padding-top: 63px;}*/
              .section.sections-wrap .new-country-site-section.Gray.add-bottom-margin {
                margin-bottom: 50px;
              }
              .section.sections-wrap .new-country-site-section.fw-related-products.Gray {
                padding-bottom: 25px;
              }
              .fw-en-form-wrapper-outer.Gray {
                padding-left: 30px;
                padding-right: 30px;
              }
              .section.sections-wrap.last-div .new-country-site-section.fw-img-cnt-section {
                margin-bottom: 0;
              }
              .section.sections-wrap.last-div .new-country-site-section.fw-img-cnt-section > .Gray {
                background: #f7f7f7;
                padding-bottom: 50px;
              }
            }
            @media all and (max-width: 767px) {
              .sustainable-section .img-cnt-on-img-content.Gray,
              .sustainable-section .img-cnt-on-img-content.Gray a.sustainable-dwld-link {
                color: #004990;
              }
              /*.section.sections-wrap .new-country-site-section.fw-stats-section.Gray, .section.sections-wrap .new-country-site-section.Gray { padding-top: 63px; padding-bottom:40px;}*/
              .section.sections-wrap .new-country-site-section.Gray.add-bottom-margin {
                margin-bottom: 40px;
              }
              .section.sections-wrap .new-country-site-section.fw-related-products.Gray {
                padding-bottom: 13px;
              }
              .fw-en-form-wrapper-outer.Gray {
                padding-left: 15px;
                padding-right: 15px;
              }
              .section.sections-wrap.last-div .new-country-site-section.fw-img-cnt-section {
                margin-bottom: 0;
              }
              .section.sections-wrap.last-div .new-country-site-section.fw-img-cnt-section > .Gray {
                background: #f7f7f7;
                padding-bottom: 40px;
              }
            }
            .section-textColorJellyBean .img-cnt-on-img-content,
            .section-textColorJellyBean .img-cnt-on-img-content a {
              color: #246987;
            }
            .section-titleColorJellyBean .font40.mixbold.img-cnt-ttl {
              color: #246987;
            }
            @media all and (max-width: 991px) {
              .home-content-fw.JellyBean {
                background: #246987;
              }
              .homecontentwrapper:not(.no-image) .home-banner-fw .home-content-fw.JellyBean {
                background: #246987 !important;
              }
            }
            .sustainable-section .img-cnt-on-img-content.JellyBean,
            .sustainable-section .img-cnt-on-img-content.JellyBean a.sustainable-dwld-link {
              color: #246987;
            }
            .section.sections-wrap .new-country-site-section.blue1 {
              background: #f7f7f7;
              margin-left: auto;
              margin-right: auto;
              max-width: 2000px;
            }
            /* .section.sections-wrap .new-country-site-section.JellyBean + .new-country-site-section.JellyBean{padding-top:0;}*/
            /* Do Comment if not QA hasn't check Start */
            .section.sections-wrap .new-country-site-section.JellyBean {
              margin-left: auto;
              margin-right: auto;
              max-width: 2000px;
            }
            .section.sections-wrap .new-country-site-section.JellyBean > .fw-tabbed-wrap {
              margin-left: auto;
              margin-right: auto;
              max-width: 1170px;
            }
            .section.sections-wrap
              .fw-country-vid-img-tab-wrapper.new-country-site-section.JellyBean
              > .fw-tabbed-wrap {
              margin-left: auto;
              margin-right: auto;
              max-width: 1720px;
            }
            .section.sections-wrap .new-country-site-section.JellyBean > .fw-intro-three-col {
              margin-left: auto;
              margin-right: auto;
              max-width: 1170px;
            }
            /* Do Comment if not QA hasn't check End */
            .fw-banner-btm-main
              .home-content-fw-inner
              .fw-home-banner-btm-content-main
              > h1.JellyBean,
            .fw-banner-btm-main
              .home-content-fw-inner
              .fw-home-banner-btm-content-main
              > h1.JellyBean
              a,
            .home-content-fw-inner > h1.JellyBean,
            .home-content-fw-inner > h1.JellyBean > a {
              color: #246987;
            }
            .home-content-fw-inner > h1.JellyBean > a:hover,
            .fw-banner-btm-main
              .home-content-fw-inner
              .fw-home-banner-btm-content-main
              > h1.JellyBean
              a:hover {
              color: #1cafd3;
            }
            .fw-home-banner-btm-content.JellyBean,
            .home-content-fw-inner div.JellyBean {
              color: #246987;
            }
            .inn-video-wrapper.JellyBean .inn-play-video.landing-video-btn {
              border-color: #246987;
            }
            .inn-video-wrapper.JellyBean .inn-play-video.landing-video-btn:before {
              border-left-color: #246987;
            }
            /* Country Sites */
            .img-cnt-outer-bg.JellyBean {
              background: #246987;
            }
            .section.sections-wrap .new-country-site-section.JellyBean {
              background: #246987;
            }
            .section.sections-wrap .new-country-site-section.fw-stats-section.JellyBean {
              background: #246987;
            }
            .section.sections-wrap.last-div .JellyBean.new-country-site-section.last-div {
              margin-bottom: 0;
            }
            .section.sections-wrap.last-div .JellyBean.new-country-site-section:last-child {
              margin-bottom: 0;
            }
            /*.section.sections-wrap.last-div .JellyBean.new-country-site-section*/
            .section.sections-wrap .new-country-site-section.fw-related-products.JellyBean {
              margin-bottom: 34px;
            }
            .section.sections-wrap .new-country-site-section.JellyBean.margin-bottom-zero {
              margin-bottom: 0;
            }
            .section.sections-wrap .new-country-site-section.JellyBean.add-bottom-margin {
              margin-bottom: 100px;
            }
            .section.sections-wrap
              .new-country-site-section.fw-related-products.JellyBean.margin-bottom-zero {
              margin-bottom: 0;
            }
            .section.sections-wrap .new-country-site-section.JellyBean.margin-bottom-zero {
              margin-bottom: 0;
            }
            .section.sections-wrap
              .new-country-site-section.fw-related-products.JellyBean.margin-top-zero {
              margin-top: 0;
            }
            .section.sections-wrap .new-country-site-section.JellyBean.margin-top-zero {
              margin-top: 0;
            }
            @media all and (max-width: 1399px) {
              .section.sections-wrap .new-country-site-section.JellyBean.add-bottom-margin {
                margin-bottom: 70px;
              }
              /*.section.sections-wrap .new-country-site-section.fw-stats-section.JellyBean, .section.sections-wrap .new-country-site-section.JellyBean {padding-bottom: 63px; padding-top: 63px;}*/
            }
            @media all and (max-width: 991px) {
              /*.section.sections-wrap .new-country-site-section.fw-stats-section.JellyBean, .section.sections-wrap .new-country-site-section.JellyBean { padding-bottom: 45px; padding-top: 63px;}*/
              .section.sections-wrap .new-country-site-section.JellyBean.add-bottom-margin {
                margin-bottom: 50px;
              }
              .section.sections-wrap .new-country-site-section.fw-related-products.JellyBean {
                padding-bottom: 25px;
              }
              .fw-en-form-wrapper-outer.JellyBean {
                padding-left: 30px;
                padding-right: 30px;
              }
              .section.sections-wrap.last-div .new-country-site-section.fw-img-cnt-section {
                margin-bottom: 0;
              }
              .section.sections-wrap.last-div
                .new-country-site-section.fw-img-cnt-section
                > .JellyBean {
                background: #246987;
                padding-bottom: 50px;
              }
            }
            @media all and (max-width: 767px) {
              .sustainable-section .img-cnt-on-img-content.JellyBean,
              .sustainable-section .img-cnt-on-img-content.JellyBean a.sustainable-dwld-link {
                color: #004990;
              }
              /*.section.sections-wrap .new-country-site-section.fw-stats-section.JellyBean, .section.sections-wrap .new-country-site-section.JellyBean { padding-top: 63px; padding-bottom:40px;}*/
              .section.sections-wrap .new-country-site-section.JellyBean.add-bottom-margin {
                margin-bottom: 40px;
              }
              .section.sections-wrap .new-country-site-section.fw-related-products.JellyBean {
                padding-bottom: 13px;
              }
              .fw-en-form-wrapper-outer.JellyBean {
                padding-left: 15px;
                padding-right: 15px;
              }
              .section.sections-wrap.last-div .new-country-site-section.fw-img-cnt-section {
                margin-bottom: 0;
              }
              .section.sections-wrap.last-div
                .new-country-site-section.fw-img-cnt-section
                > .JellyBean {
                background: #246987;
                padding-bottom: 40px;
              }
            }
            .fw-home-banner-btm-content,
            .home-content-fw-inner div p a {
              color: inherit;
            }
            .home-content-fw-inner div p a:hover {
              color: #006dff !important;
            }
            .row::after {
              content: '';
              clear: both;
              display: table;
            }
            [class*='col-'] {
              float: left;
            }
            .col-1 {
              width: 8.33%;
            }
            .col-2 {
              width: 16.66%;
            }
            .col-3 {
              width: 25%;
            }
            .col-4 {
              width: 33.33%;
            }
            .col-5 {
              width: 41.66%;
            }
            .col-6 {
              width: 50%;
            }
            .col-7 {
              width: 58.33%;
            }
            .col-8 {
              width: 66.66%;
            }
            .col-9 {
              width: 75%;
            }
            .col-10 {
              width: 83.33%;
            }
            .col-11 {
              width: 91.66%;
            }
            .col-12 {
              width: 100%;
            }

            * {
              box-sizing: border-box;
            }
          `,
          }}
        />
        <script
          defer
          src="https://cdnjs.cloudflare.com/ajax/libs/es5-shim/4.5.14/es5-shim.min.js"
        />
        <script
          defer
          src="https://cdnjs.cloudflare.com/ajax/libs/es5-shim/4.5.14/es5-sham.min.js"
        />
        <script defer src="https://cdnjs.cloudflare.com/ajax/libs/json3/3.3.2/json3.min.js" />
        <script
          defer
          src="https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.35.5/es6-shim.min.js"
        />
        <script
          defer
          src="https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.35.5/es6-sham.min.js"
        />
        <script type="application/ld+json">
          {`
         {
           "@context": "https://schema.org/",
           "@type": "Product",
           "name": "Civil Aerospace",
           "image": "<img src='https://www.rolls-royce.com/~/media/Images/R/Rolls-Royce/banners/home-full-width/civil-aerospace/civil-banner-top_v2.jpg' />",
           "description": "Rolls-Royce is at the forefront of cutting-edge aviation technology. Learn more about how we’re pioneering the vital power needs of civil aerospace.",
           "brand": "Rolls Royce"
         }
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

      <script
        defer
        type="text/javascript"
        src="https://viz.tools.investis.com/dataVizProjects/rolls-royce-infographics/js/rolls-royce-infographics.min.js"
      ></script>
      <script
        defer
        type="text/javascript"
        src="https://viz.tools.investis.com/dataVizProjects/rr-info/js/rr-info.min.js"
      ></script>
      <script
        defer
        type="text/javascript"
        src="https://maps.google.com/maps/api/js?key=AIzaSyAndAEI1pQ8D9-6wnd7X7-031xVaNjZz-E"
      ></script>
      <script
        defer
        type="text/javascript"
        src="https://assets.investisdigital.com/cookiemanager/v3/latest/js/invd-cm-plugin.min.js"
      ></script>
      <script
        defer
        type="text/javascript"
        src="https://www.rolls-royce.com/javascripts/stories-popup.js?revision=b80bb95e-8f75-4c6c-9e53-ec31338640da"
      ></script>
      <script
        defer
        type="text/javascript"
        src="https://www.rolls-royce.com/javascripts/full-width-header-footer-home.js?revision=46521dc5-9254-4af6-87aa-a49df595cd83"
      ></script>
      <script
        defer
        type="text/javascript"
        src="https://www.rolls-royce.com/javascripts/invd-cm-config-v3.js?revision=f081a25d-7eb2-4d15-af24-f511e38a2bad"
      ></script>
      <script
        defer
        type="text/javascript"
        src="https://www.rolls-royce.com/javascripts/ResourceHandlermerge.js?0=%7BC34D44E4-F3F9-46A9-900B-36190BB556BE%7D&amp;1=%7B87383BFD-7FEE-47E5-865B-E702CC2F965A%7D&amp;4=%7B69975BAC-1F56-4FAB-B2DB-D6A0B45C8585%7D&amp;5=%7BAB843418-E715-4362-AD1A-67E2EC450C86%7D&amp;6=%7B75586154-B771-4856-B4FC-337B1D5ACEFC%7D&amp;7=%7BD794520F-644B-4267-B01D-1327C0BCAA29%7D&amp;8=%7B03132F22-7F13-4218-AC8E-A5AD1D429F83%7D&amp;10=%7B47A15BD4-8487-4E90-95B4-953C5ECA703E%7D&amp;11=%7B05A356D4-288E-451B-A4A3-089766DA384F%7D&amp;12=%7BF80D01FC-6F25-4E26-88CA-6DC412404996%7D&amp;13=%7B4E037878-D310-4498-98ED-2B7C498859BF%7D&amp;14=%7B778B0944-2235-4A21-9251-F889407E2EEB%7D&amp;16=%7B347DF115-4A5E-4E8A-BBF9-D83C9AC0E936%7D&amp;17=%7BACB6DC77-26E1-42FA-B5A3-4E39D583C591%7D&amp;18=%7BD9AC65BA-1BF2-4854-A57F-ECD59B57F444%7D&amp;19=%7B598118B8-D3C9-4793-8A95-432EA221D4BF%7D&amp;20=%7BAAACBA80-060F-4CCB-B5E8-2D07F1FC7AF4%7D&amp;21=%7BEF3C0868-6DE7-417F-9E33-6906EF3931AC%7D&amp;23=%7B93B96D94-5D5A-4AC0-9783-8C9D4C2E3F01%7D&amp;24=%7BA1CD4C74-6E99-4D11-A156-037B783AF549%7D&amp;25=%7BD8AA16BC-BF38-43E3-887F-913916CDF436%7D&amp;26=%7BEEA50E14-6E92-474A-BC03-9F3FD5123DDA%7D&amp;27=%7B7A87DAD7-749D-4A10-B09E-42E2FF8210F9%7D&amp;28=%7B5CBE601C-54F2-45ED-AF61-E4A2F031CAD4%7D&amp;29=%7B9C7C9D7B-A8C7-4C16-93A0-40416717D37F%7D&amp;30=%7B23C4D4C3-5561-4117-9D29-23E3668B1C2A%7D&amp;31=%7BA721F02D-8D58-4618-8160-93A70AC999F0%7D&amp;32=%7B7E946596-9C3E-44DC-AB61-3A50F907D0A2%7D&amp;33=%7B76B1350D-26B4-4281-8DAC-735370E1AB5C%7D&amp;34=%7B7982E244-18EC-42AD-963A-3515F4F01E8E%7D&amp;35=%7B8991DCBC-76A1-4711-93A0-D6E4AB913569%7D&amp;36=%7BB8F7ABF4-229A-4F8C-9698-85CCBEBBB5F4%7D&amp;37=%7B3C2F9C6E-9010-45EF-9AB5-DAFB61E8E74A%7D&amp;38=%7B778FF6BF-C5F8-405D-9061-912649B92EB5%7D&amp;39=%7BF9414EA8-1EC7-4F59-98F4-E97D57CEE656%7D&amp;sc_lang=en&amp;revision=f081a25d-7eb2-4d15-af24-f511e38a2bad"
      ></script>
      <script
        defer
        type="text/javascript"
        src="https://www.rolls-royce.com/javascripts/slick.js?revision=9ad71f7a-0e03-4d37-aa68-ec6175fb3885"
      ></script>
      <script
        defer
        type="text/javascript"
        src="https://www.rolls-royce.com/javascripts/videomainconfig.js?revision=679af191-9b7e-4297-8de3-76d2a805caa7"
      ></script>
      <script
        defer
        type="text/javascript"
        src="https://www.rolls-royce.com/javascripts/home-fullwidth.js?revision=7df860fc-2de7-478e-a4f7-011543f21a79"
      ></script>
      <script
        defer
        type="text/javascript"
        src="https://www.rolls-royce.com/javascripts/one-page-sticky-navigation.js?revision=0c07eeaf-94aa-4605-b335-8b7eb269128b"
      ></script>
      <script
        defer
        type="text/javascript"
        src="https://www.rolls-royce.com/javascripts/marine-main.js?revision=3a9fa1b4-74ea-4f81-b44c-4b3f8e03c365"
      ></script>
      <script
        defer
        type="text/javascript"
        src="https://www.rolls-royce.com/javascripts/flickr-module.js?revision=5ca8a001-a75d-40ea-8cb6-00853a1a899b"
      ></script>

      <script data-type="text/javascript" type="opt-in" data-name="marketing">
        {`
        _linkedin_partner_id = "3157602"; window._linkedin_data_partner_ids =
        window._linkedin_data_partner_ids || [];
        window._linkedin_data_partner_ids.push(_linkedin_partner_id);
        `}
      </script>
      <script data-type="text/javascript" type="opt-in" data-name="marketing">
        {`
      (function(l) { if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])}; window.lintrk.q=[]} var s = document.getElementsByTagName("script")[0]; var b = document.createElement("script"); b.type = "text/javascript";b.async = true; b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js"; s.parentNode.insertBefore(b, s);})(window.lintrk);
    `}
      </script>
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          alt=""
          src="https://px.ads.linkedin.com/collect/?pid=3157602&fmt=gif"
        />
      </noscript>
    </>
  );
};

export default Layout;
