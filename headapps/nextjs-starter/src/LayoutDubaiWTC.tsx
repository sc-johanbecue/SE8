/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable @next/next/no-css-tags */
/* eslint-disable @next/next/no-sync-scripts */
/**
 * This Layout is needed for Starter Kit.
 */
import MobileMenu from 'components/DubaiWTC/DubaiWTCMobileMenu';
/*import SideBarMenu from 'components/DubaiWTC/DubaiWTCSideBarMenu';*/
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

        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script type="text/javascript">
          {`
         var base_url = 'https://dwtc.exhibitoronlinemanual.com/';
         var env_slug = 'gitex-global-2024';
         `}
        </script>
        <script
          src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA6lriqNYLouhhTFX-5anjxpcugENE-HrM"
          async
          defer
        />
        {/* <script type="text/javascript" src="https://dwtc.exhibitoronlinemanual.com/themes/gitex_theme/js/" integrity="sha384-sHe6VoZfbVCWcsNmdLRbc6a3ZSUIQSogjGkx3guln2mVjjVQ+YfaxzRQdyOpw7E1" crossOrigin="anonymous" ></script> */}
        <script
          type="text/javascript"
          src="https://dwtc.exhibitoronlinemanual.com/themes/gitex_theme/js/vendor/bootstrap/js/popper.min.js?mt=1728376865"
          integrity="sha384-rn0XrCNfhQuw2/tzfv4cvBHjPnljfEYSGlYLk2VmCk0ts82JdJvQ72xx/nV/XJcB"
          crossOrigin="anonymous"
        ></script>
        <script
          type="text/javascript"
          src="https://dwtc.exhibitoronlinemanual.com/themes/gitex_theme/js/jquery-3.7.1.min.js?mt=1728376865"
          integrity="sha384-1H217gwSVyLSIfaLxHbE7dRb3v4mYCKbpQvzx0cegeju1MVsGrX5xXxAvs/HgeFs"
          crossOrigin="anonymous"
        ></script>
        <script
          type="text/javascript"
          src="https://dwtc.exhibitoronlinemanual.com/themes/gitex_theme/js/jquery-migrate-3.4.1.min.js?mt=1728376865"
          integrity="sha384-czcQ6JCNAUZEN3Lgaz+MCStLIwPMDsflaEetvR2p8sO+ayIMQvaqWLKAsy9vIsBW"
          crossOrigin="anonymous"
        ></script>
        <script
          type="text/javascript"
          src="https://dwtc.exhibitoronlinemanual.com/themes/gitex_theme/js/vendor/bootstrap/js/bootstrap.min.js?mt=1728376865"
          integrity="sha384-BBtl+eGJRgqQAUMxJ7pMwbEyER4l1g+O15P+16Ep7Q9Q+zqX6gSbd85u4mG4QzX+"
          crossOrigin="anonymous"
        ></script>
        <script
          type="text/javascript"
          src="https://dwtc.exhibitoronlinemanual.com/themes/gitex_theme/js//vendor/metisMenu/metisMenu.min.js?mt=1728376865"
          integrity="sha384-F21Q4YFCU/iioflzam9g/N68S5oNeUjUfHDdxjxgm7Aj1gKgOcLIDVM1o5azfVSb"
          crossOrigin="anonymous"
        ></script>
        <script
          type="text/javascript"
          src="https://dwtc.exhibitoronlinemanual.com/themes/gitex_theme/js//dist/js/sb-admin-2.js?mt=1728376865"
          integrity="sha384-2WnzfE4zLreTwwL8e1cGE8+xBK93ZaJYFzfASYjZpR3O91CGJjFeIOwbP/8L1mpA"
          crossOrigin="anonymous"
        ></script>
        <script
          type="text/javascript"
          src="https://dwtc.exhibitoronlinemanual.com/themes/gitex_theme/js/dist/js/jquery.timepicker.js?mt=1728376865"
          integrity="sha384-1VS+CtHXh5ARGyKso0jwATKb50fcDDwZiWZRhOt8VaeqFQtkL7cn2d/CYFwzB76n"
          crossOrigin="anonymous"
        ></script>
        <script
          type="text/javascript"
          src="https://dwtc.exhibitoronlinemanual.com/themes/gitex_theme/js/dist/js/bootstrap-datetimepicker.js?mt=1728376865"
          integrity="sha384-OGT58VvB/yxvTiPIKa41CQzcW5QBulC4zSB8gpyk+jTW3p8/4QDWSfSYmMUaNUVU"
          crossOrigin="anonymous"
        ></script>
        <script
          type="text/javascript"
          src="https://dwtc.exhibitoronlinemanual.com/themes/gitex_theme/js/dist/js/bootstrap-multiselect.js?mt=1728376865"
          integrity="sha384-pK+ObHXVn4zICKnR3PzKJKFRaDHDwebrhq1BqGFBPvxUrlxyBClCuH2amVyG0JIB"
          crossOrigin="anonymous"
        ></script>
        <script
          type="text/javascript"
          src="https://dwtc.exhibitoronlinemanual.com/themes/gitex_theme/js/jquery.cookie.js?mt=1728376865"
          integrity="sha384-dE6K/TgpU4Ua5nitZ3HVYXiyeXqKmPkRoi0LQ6i3V+wgLa+aHb+7Yk7MmnIsaaYe"
          crossOrigin="anonymous"
        ></script>
        <script
          type="text/javascript"
          src="https://dwtc.exhibitoronlinemanual.com/themes/gitex_theme/js/jquery.colorbox.js?mt=1728376865"
          integrity="sha384-MiuiPDrnIKG1EsaEPM0JvPlp2RAJDBvaaLbuWAX7ME7Z6/tBptQ0KEFSqEnPUpZB"
          crossOrigin="anonymous"
        ></script>
        <script
          type="text/javascript"
          src="https://dwtc.exhibitoronlinemanual.com/themes/gitex_theme/js/jquery-ui.min.js?mt=1728376865"
          integrity="sha384-8EM386r8XMMzwGPUxfGNr6c1wIOYnPQBJ6VFxzKCZeklpQarHoZGB40kdNDA3gYr"
          crossOrigin="anonymous"
        ></script>
        <script
          type="text/javascript"
          src="https://dwtc.exhibitoronlinemanual.com/themes/gitex_theme/js/imglib/imgcrp.js?mt=1728376865"
          integrity="sha384-zGYJyE9QINipfgHDEVMLyVLeZr+ulKm91OCv9Aaan1SpyMfWKTkGRtqXMIK5V3Lv"
          crossOrigin="anonymous"
        ></script>
        <script
          type="text/javascript"
          src="https://dwtc.exhibitoronlinemanual.com/themes/gitex_theme/js/imglib/jcanvas.js?mt=1728376865"
          integrity="sha384-ZfpTyOFL/GG0/Qlr8De6YLHLS9RDiV4mKWJJ72HAiGgWuYD7MYH9saXuDoyXT+vs"
          crossOrigin="anonymous"
        ></script>
        <script
          type="text/javascript"
          src="https://dwtc.exhibitoronlinemanual.com/themes/gitex_theme/js/jquery.slimscroll.js?mt=1728376865"
          integrity="sha384-Fb+vGKUJ1e6L1uOAI4wjYuoyhin4/rFZAWm3ULWpC1osCQaxoBIyIkygf5kWE3iz"
          crossOrigin="anonymous"
        ></script>
        <script
          type="text/javascript"
          src="https://dwtc.exhibitoronlinemanual.com/themes/gitex_theme/js/jquery.base64.js?mt=1728376865"
          integrity="sha384-qyX47n2ncUDFWEQgVJv/ydsEnm+2+8t/F/8D8GhZ6VpF7CU6Os0y0oop+rvKSn5s"
          crossOrigin="anonymous"
        ></script>
        <script
          type="text/javascript"
          src="https://dwtc.exhibitoronlinemanual.com/themes/gitex_theme/js/jquery.matchHeight-min.js?mt=1728376865"
          integrity="sha384-dfOR5hjVOg6B2OvgyHIS71mJWX5TgNQeFGo5cNNVglSep7ZvYcByrpEya6xbwwyB"
          crossOrigin="anonymous"
        ></script>
        <script
          type="text/javascript"
          src="https://dwtc.exhibitoronlinemanual.com/themes/gitex_theme/js/custom.js?mt=1728376865"
          integrity="sha384-hKMm4zBw/ys6xcHNcYlOQzHtQaM+3WhgNL2BCAZwWZfA2P6qZgl6oTi/1QWLp+w3"
          crossOrigin="anonymous"
        ></script>
        <script
          type="text/javascript"
          src="https://dwtc.exhibitoronlinemanual.com/themes/gitex_theme/js/map.js?mt=1728376865"
          integrity="sha384-OLBgp1GsljhM2TJ+sbHjaiH9txEUvgdDTAzHv2P24donTt6/529l+9Ua0vFImLlb"
          crossOrigin="anonymous"
        ></script>
        <script
          type="text/javascript"
          src="https://dwtc.exhibitoronlinemanual.com/themes/gitex_theme/js/jQuery.print.js?mt=1728376865"
          integrity="sha384-8fepLealm9uJzVKWKvzXeS4UOEcbS/8UR3cOIV80lXDPEdskf94WIQJsXW5DEOfe"
          crossOrigin="anonymous"
        ></script>
        <script
          type="text/javascript"
          src="https://dwtc.exhibitoronlinemanual.com/themes/gitex_theme/js/vendor/datatables/js/jquery.dataTables.min.js?mt=1728376865"
          integrity="sha384-k5vbMeKHbxEZ0AEBTSdR7UjAgWCcUfrS8c0c5b2AfIh7olfhNkyCZYwOfzOQhauK"
          crossOrigin="anonymous"
        ></script>
        <script
          type="text/javascript"
          src="https://dwtc.exhibitoronlinemanual.com/themes/gitex_theme/js/edit.js?mt=1728376865"
          integrity="sha384-KcT1tlBYIg6W9bZsdFO5vJyNOQlXKFubc2VXkONtzxiCjaxRrSjjDkMjtwGh/I4d"
          crossOrigin="anonymous"
        ></script>
        <script
          type="text/javascript"
          src="https://dwtc.exhibitoronlinemanual.com/themes/gitex_theme/js/tinymce/js/tinymce/tinymce.min.js?mt=1728376865"
          integrity="sha384-SwQRvvbMuxNm8MdKBxD0q87IHYsikSs486bjgG/t6UGVihxV0iJ0c8JlqjZmBRTW"
          crossOrigin="anonymous"
        ></script>
        <script
          type="text/javascript"
          src="https://dwtc.exhibitoronlinemanual.com/themes/gitex_theme/js/owl/owl.carousel.min.js?mt=1728376865"
          integrity="sha384-l/y5WJTphApmSlx76Ev6k4G3zxu/+19CVvn9OTKI7gs4Yu5Hm8mjpdtdr5oyhnNo"
          crossOrigin="anonymous"
        ></script>
        <script
          type="text/javascript"
          src="https://dwtc.exhibitoronlinemanual.com/themes/gitex_theme/js/jquery-cropper/cropper.js?mt=1728376865"
          integrity="sha384-fHDdrtMpa9ZX1KI9u2MvrcSKlh39ck1HvuxqclDHiyw9bqRDNvXcg7HdSdP12AH8"
          crossOrigin="anonymous"
        ></script>
        <script
          type="text/javascript"
          src="https://dwtc.exhibitoronlinemanual.com/themes/gitex_theme/js/jquery-cropper/jquery-cropper.min.js?mt=1728376865"
          integrity="sha384-LSutq9ZuPOgDEpbdNKdnaZnUg9zGHJQ/RmiMfokTaqi/g592mwiohhCa/MOgI844"
          crossOrigin="anonymous"
        ></script>
        <script
          type="text/javascript"
          src="https://dwtc.exhibitoronlinemanual.com/themes/gitex_theme/js/crop.js?mt=1728376865"
          integrity="sha384-xDWfEZHk61sGVQ+uWy0rqLygycO/DBtNHZrDLew125uOHhDff7NxoR2OAoywYTp9"
          crossOrigin="anonymous"
        ></script>
        <script
          type="text/javascript"
          src="https://dwtc.exhibitoronlinemanual.com/themes/gitex_theme/js/jquery.plugin.js?mt=1728376865"
          integrity="sha384-BIGNqh5fnc5LPWm+ztUxDKO6jHkNSGtoVJkiK0rIDdFwrrou6qPoxfuHGOwqwknS"
          crossOrigin="anonymous"
        ></script>
        <script
          type="text/javascript"
          src="https://dwtc.exhibitoronlinemanual.com/themes/gitex_theme/js/jquery.countdown.js?mt=1728376865"
          integrity="sha384-j4AUFt4R7DFrAS0HyPwpxzvsHqcrTDuqa++8s9sK/bxY5V3wX/nqUu38kflm22F3"
          crossOrigin="anonymous"
        ></script>
        <script
          type="text/javascript"
          src="https://dwtc.exhibitoronlinemanual.com/themes/gitex_theme/js/comman.js?mt=1728376865"
          integrity="sha384-NtrQPUAdS1RXqmN+uzAt8N0kdq5rJpzp/2cr66/cwVY4d3R5Cd1nH1Hd/MvYXluP"
          crossOrigin="anonymous"
        ></script>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://dwtc.exhibitoronlinemanual.com/gitex-global-2024/dashboard"
        />
        <meta property="og:site_name" content="Expo." />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="" />
        {/*<link rel="shortcut icon" href="https://dwtc.exhibitoronlinemanual.com/themes/gitex_theme/images/favicon.ico" type="image/x-icon" />*/}
        <link
          rel="shortcut icon"
          href="https://dwtc.exhibitoronlinemanual.com/themes/frontend/images/favicon.ico"
          type="image/x-icon"
        />
        <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css" />
        {/* <link href="https://fonts.googleapis.com/css?family=Montserrat:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet">  */}
        {/* <link rel="preconnect" href="https://fonts.gstatic.com"> */}
        {/* <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap" rel="stylesheet"> */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        {/*crossOrigin removed out JBE*/}
        <link
          href="https://fonts.googleapis.com/css2?family=Encode+Sans:wght@100;200;300;400;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://dwtc.exhibitoronlinemanual.com/themes/gitex_theme/css/vendor/bootstrap/css/bootstrap.min.css?mt=1728376865"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://dwtc.exhibitoronlinemanual.com/themes/gitex_theme/css/vendor/metisMenu/metisMenu.min.css?mt=1728376865"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://dwtc.exhibitoronlinemanual.com/themes/gitex_theme/css/dist/css/sb-admin-2.css?mt=1728376865"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://dwtc.exhibitoronlinemanual.com/themes/gitex_theme/css/dist/css/style.css?mt=1728376865"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://dwtc.exhibitoronlinemanual.com/themes/gitex_theme/css/vendor/morrisjs/morris.css?mt=1728376865"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://dwtc.exhibitoronlinemanual.com/themes/gitex_theme/css/vendor/font-awesome/css/font-awesome.min.css?mt=1728376865"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://dwtc.exhibitoronlinemanual.com/themes/gitex_theme/css/dist/css/bootstrap-datetimepicker.min.css?mt=1728376865"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://dwtc.exhibitoronlinemanual.com/themes/gitex_theme/css/dist/css/styles.css?mt=1728376865"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://dwtc.exhibitoronlinemanual.com/themes/gitex_theme/css/dist/css/custom.css?mt=1728376865"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://dwtc.exhibitoronlinemanual.com/themes/gitex_theme/css/awesome/css/font-awesome.min.css?mt=1728376865"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://dwtc.exhibitoronlinemanual.com/themes/gitex_theme/css/jquery-ui.theme.css?mt=1728376865"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://dwtc.exhibitoronlinemanual.com/themes/gitex_theme/css/jquery-ui.structure.css?mt=1728376865"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://dwtc.exhibitoronlinemanual.com/themes/gitex_theme/css/colorbox.css?mt=1728376865"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://dwtc.exhibitoronlinemanual.com/themes/gitex_theme/css/style.css?mt=1728376865"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://dwtc.exhibitoronlinemanual.com/themes/gitex_theme/css/dwtcmefooter.css?mt=1728376865"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://dwtc.exhibitoronlinemanual.com/themes/gitex_theme/css/jquery-cropper/cropper.min.css?mt=1728376865"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://dwtc.exhibitoronlinemanual.com/themes/gitex_theme/css/owl/owl.carousel.min.css?mt=1728376865"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://dwtc.exhibitoronlinemanual.com/themes/gitex_theme/css/response.css?mt=1728376865"
        />
        <link
          rel="stylesheet"
          href="https://dwtc.exhibitoronlinemanual.com/themes/gitex_theme/css/jquery.countdown.css"
        />
        {/*[if lte IE 8]>
      <link rel="stylesheet" type="text/css" href="https://dwtc.exhibitoronlinemanual.com/themes/gitex_theme/css/style_ie8.css" />
      <![endif]*/}
      </Head>
      <MobileMenu></MobileMenu>
      <div className="screen_wrapper">
        <div id="request">
          <div className="mloader">
            <img
              src="https://dwtc.exhibitoronlinemanual.com//themes/frontend/css/images/loader1.gif"
              alt=""
            />
          </div>
        </div>
        <div id="wrapper">
          <div className="header_div_wrapper">
            <div id="header_div" className="header_wrapper clearfix">
              <div className="col-xs-12 topsection whitebg">
                <div className="row">
                  <nav
                    className="navbar headtitle col-xs-12  col-md-12 navbar-default navbar-static-top main-top header_nav_drop mi-header-image"
                    role="navigation"
                    style={{ marginTop: '0px', background: '#ffffff', border: '1px #012c61' }}
                  >
                    <div className="  pull-left">
                      <ul className="icons  event_logo">
                        <style>
                          {`
                                    .event_logo {
                                    width: 100%;
                                    margin-top: 0px !important;
                                    }
                                    nav > div:first-child {
                                    width: 100%;
                                    }
                                    .event_logo li {
                                    padding: 0px !important;
                                    }
                                    .main-top {
                                    padding: 0px !important;
                                    }
                                    `}
                        </style>
                        <li>
                          <Link
                            data-type="a"
                            href="https://www.gitex.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img
                              src="https://dwtc.exhibitoronlinemanual.com/gitex-global-2024/media/s3download/Production/media/2014/banner_Banner.png"
                              alt=""
                              style={{ width: '100%!important', height: 'auto!important' }}
                            />
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className=" navbar-header logo-title  pull-right mi-navbar-hide-mobile">
                      <button
                        type="button"
                        className="navbar-toggle"
                        data-bs-toggle="collapse"
                        data-bs-target=".navbar-collapse1"
                      >
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                      </button>
                    </div>
                    {/* /.navbar-header */}
                  </nav>
                  {route && <Placeholder name="mainNavBar" rendering={route} />}
                </div>
                {/* /.sidebar-collapse */}
              </div>
              <script type="text/javascript">
                {`
                     if ($(window).width() < 1024) {
                         adjust_table();
                     }
                  `}
              </script>
            </div>
          </div>
          {/*        <div id="notice">
               </div>*/}
          {route && <Placeholder name="sidebar" rendering={route} />}
        </div>
        {route && <Placeholder name="wrappermain" rendering={route} />}
        <div className="footer_wrapper footerpanel" style={{ clear: 'both', position: 'relative' }}>
          <div id="footter_t"></div>
          <div id="highlighter_script"></div>
          <footer>
            <div id="footer">
              {route && <Placeholder name="headless-footer" rendering={route} />}
            </div>
          </footer>
        </div>
        <form name="csrf_token" style={{ display: 'none' }}></form>
      </div>
      <Link data-type="a" href="" id="page_scroller">
        ^
      </Link>
      <div id="readonly_script"></div>
      <div id="current_csrf_token" style={{ display: 'none' }}>
        {/*{current_csrf_token} JBE COMMENTED OUT*/}
      </div>
      <div style={{ display: 'none' }}>{/*{readonly_script} JBE COMMENTED OUT*/}</div>
      {/* message popup  */}
      <div id="myModal" className="modal fade" role="dialog">
        <div id="popup_div"></div>
      </div>
      <div id="myModalsucess" className="modal fade" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="">
              <div className="modal-body ">
                <div className="messagefail">
                  <button type="button" className="close" data-dismiss="modal">
                    &times;
                  </button>
                  <i className="msg_icon fa"></i>
                  <div id="message" style={{ display: 'block' }}>
                    <div id="usrresponse" style={{ display: 'block !important' }}></div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn add-user close" data-dismiss="modal">
                    Ok
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* COMMENTED JBE
      </div>
      </div>
       */}
        {/* end */}
        {/* <Link data-type='a' id="welcome_msg_lnk" className="" data-bs-toggle="modal" data-bs-target="#disclaimerModal"></Link> */}
        {/* <Link data-type='a' id="promocode_msg_lnk" className="" data-bs-toggle="modal" data-bs-target="#disclaimerModal"></Link> */}
        {/* crop js  */}
        <script>
          {`
         $(window).load(function() {
             var announcement_closed = localStorage.getItem('announcement_closed');
         
             if(announcement_closed != 'yes'){
                                                         $('#announcementModal').modal('show');  
                     start_announcement_close_timer();
                                                 }
             $("#announcementModal").on("hidden.bs.modal", function () {
                 
                 localStorage.setItem('announcement_closed', 'yes');
             });
         
         
             function start_announcement_close_timer(){
                 var timer = 5000;
                 var close_timer = setInterval(function(){
                     console.log(timer);
                     if(timer === 0){
                         jQuery('#close_announcement_model').html('<button type="button" className="close" data-bs-dismiss="modal">&times;</button>');
                         clearInterval(close_timer);
                     }
                     timer-=1000;
                 }, 1000);
             }
         });
         `}
        </script>
        <style>
          {`
         #announcementModal{padding:0px!important;}
        `}
        </style>
        <div
          id="announcementModal"
          className="modal fade in"
          role="dialog"
          style={{ textAlign: 'unset', width: '800px', margin: '0 auto', maxWidth: '90%' }}
        >
          <div className="modal-dialog" style={{ width: '100%!important', margin: '0px' }}>
            <div className="modal-content">
              <div className="modal-header">
                <div id="close_announcement_model"></div>
                <h4 className="modal-title">Promocode</h4>
              </div>
              <div className="modal-body" style={{ textAlign: 'unset' }}>
                <div
                  className="elementToProof"
                  style={{
                    textAlign: 'left',
                    textIndent: '0px',
                    margin: '0px',
                    fontSize: '14pt',
                    color: '#000000',
                  }}
                >
                  <b>
                    <br />
                    Use your promo codes by 13th October!
                  </b>
                </div>
                <div
                  style={{
                    textAlign: 'left',
                    textIndent: '0px',
                    margin: '0px',
                    fontSize: '12pt',
                    color: '#000000',
                  }}
                >
                  &nbsp;
                </div>
                <div
                  style={{
                    textAlign: 'left',
                    textIndent: '0px',
                    lineHeight: '25.5467px',
                    margin: '0px 0px 8pt',
                    fontSize: '12pt',
                    color: '#000000',
                  }}
                >
                  Get ready to fuel your presence at GITEX GLOBAL! We have exclusive promo codes
                  tailored just for you to boost visitor traffic to your stand:
                </div>
                <ol style={{ textAlign: 'left', marginTop: '0px', marginBottom: '0px' }}>
                  <li
                    style={{
                      fontSize: '12pt',
                      color: '#000000',
                      lineHeight: '15.5467px',
                      margin: '0px 0px 8pt',
                    }}
                  >
                    <b>Free Visitor Passes for Your Clients and Partners</b>
                  </li>
                  <li
                    style={{
                      fontSize: '12pt',
                      color: '#000000',
                      lineHeight: '15.5467px',
                      margin: '0px 0px 8pt',
                    }}
                  >
                    <b>50% Off Delegate Passes using the promo code &ldquo;EXH50GTX&ldquo;</b>
                  </li>
                </ol>
                <div
                  className="elementToProof"
                  style={{
                    textAlign: 'left',
                    textIndent: '0px',
                    lineHeight: '15.5467px',
                    margin: '0px 0px 8pt',
                    fontSize: '12pt',
                    color: '#000000',
                  }}
                >
                  <br />
                  Detailed promo code instructions are in your{' '}
                  <Link
                    data-type="a"
                    href="https://APPICT.dwtcmarketing.com/e/er?s=1627913114&amp;lid=5913&amp;elq=~~eloqua..type--emailfield..syntax--recipientid..encodeFor--url~~"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Exhibitor Portal Guide."
                    style={{ margin: '0px', color: '#6073dd !important' }}
                  >
                    Exhibitor Portal Guide.
                  </Link>
                </div>
                <div
                  className="elementToProof"
                  style={{ fontSize: '12pt', color: '#000000' }}
                ></div>
                <div className="elementToProof" style={{ fontSize: '12pt', color: '#000000' }}>
                  Link to register for passes using promo codes:{' '}
                  <Link
                    data-type="a"
                    href="https://visit.gitex.com/Event/GITEXGLOBAL/Visitor/Registration/SelectPass"
                    target="_blank"
                    rel="noopener noreferrer"
                    id="OWAf9bbedd1-35bf-1c5a-c446-2bc07e35c578"
                    className="OWAAutoLink"
                    data-auth="NotApplicable"
                    data-linkindex="1"
                    style={{ margin: '0px', color: '#6073dd !important' }}
                  >
                    {' '}
                    https://visit.gitex.com/Event/GITEXGLOBAL/Visitor/Registration/SelectPass
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="mycopmodal" className="modal fade" role="dialog">
          <div className="modal-dialog" style={{ marginTop: '0' }}>
            <div className="modal-content">
              <div className="">
                <div className="modal-body" style={{ padding: '2px' }}>
                  <div>
                    <div style={{ width: '100%' }} className="croperholder">
                      <img style={{ maxWidth: '100%' }} id="image" src="" alt="" />
                    </div>
                  </div>
                  <div
                    style={{ margin: '10px 0' }}
                    className="col-md-12 col-xs-12 col-lg-12 col-sm-12"
                  >
                    {/* <button className="move-left-cropper btn "> 
                           <i className="fa fa-arrow-left"> </i>
                           </button> */}
                    {/* <button className="move-right-cropper btn "> 
                           <i className="fa fa-arrow-right"> </i>
                           </button> */}
                    {/* <button className="move-top-cropper btn "> 
                           <i className="fa fa-arrow-up"> </i>
                           </button> */}
                    {/* <button className="move-bottom-cropper btn "> 
                           <i className="fa fa-arrow-down"> </i>
                           </button> */}
                    <div className="dis-table">
                      <div
                        className="zoom-inout-outer"
                        style={{ width: '10%', textAlign: 'right', paddingRight: '20px' }}
                      >
                        {/* <button className=" btn"> */}
                        <i className="fa fa-search-minus"> </i>
                        {/* </button> */}
                      </div>
                      <div className="zoom-inout-outer" style={{ paddingTop: '5px' }}>
                        <div id="zoom-slider"></div>
                        <div className="row">
                          <div className="slider-val-area">
                            <span id="min-zoom-val" className="pull-left">
                              0
                            </span>
                          </div>
                          <div className="slider-val-area">
                            <span id="max-zoom-val" className="pull-right">
                              1
                            </span>
                          </div>
                        </div>
                      </div>
                      <div
                        className="zoom-inout-outer"
                        style={{ width: '10%', textAlign: 'left', paddingLeft: '20px' }}
                      >
                        {/* <button className=" btn"> */}
                        <i className="fa fa-search-plus"> </i>
                        {/* </button> */}
                      </div>
                    </div>
                    {/* <button className="rotaedclock-cropper btn">    
                           <i className="fa fa-repeat"> </i>
                           </button> */}
                    {/* <button className="rotaedclocksanti-cropper btn"> 
                           <i className="fa fa-undo"> </i> 
                           </button> */}
                    {/* <button className="flip1-cropper btn">
                           <i className="fa fa-arrows-h"> </i> 
                           </button> */}
                    {/* <button className="flip2-cropper btn">
                           <i className="fa fa-arrows-v"> </i> 
                           </button> */}
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn add-user close crop-img btn-danger mkt_back_button"
                    data-dismiss="modal"
                  >
                    Crop And Upload
                  </button>
                  <button
                    type="button"
                    className="btn add-user  cancel close mkt_back_button"
                    data-dismiss="modal"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* crop js end  */}
        <div id="mycopmodal" className="modal fade" role="dialog">
          <div className="modal-dialog" style={{ marginTop: '0' }}>
            <div className="modal-content">
              <div className="">
                <div className="modal-body" style={{ padding: '2px' }}>
                  <div>
                    <div style={{ width: '100%' }} className="croperholder">
                      <img style={{ maxWidth: '100%' }} id="crop_target_image" src="" alt="" />
                    </div>
                  </div>
                  <div
                    style={{ margin: '10px 0' }}
                    className="col-md-12 col-xs-12 col-lg-12 col-sm-12"
                  >
                    {/* <button className="move-left-cropper btn "> 
                           <i className="fa fa-arrow-left"> </i>
                           </button> */}
                    {/* <button className="move-right-cropper btn "> 
                           <i className="fa fa-arrow-right"> </i>
                           </button> */}
                    {/* <button className="move-top-cropper btn "> 
                           <i className="fa fa-arrow-up"> </i>
                           </button> */}
                    {/* <button className="move-bottom-cropper btn "> 
                           <i className="fa fa-arrow-down"> </i>
                           </button> */}
                    <div className="dis-table">
                      <div
                        className="zoom-inout-outer"
                        style={{ width: '10%', textAlign: 'right', paddingRight: '20px' }}
                      >
                        {/* <button className=" btn"> */}
                        <i className="fa fa-search-minus"> </i>
                        {/* </button> */}
                      </div>
                      <div className="zoom-inout-outer" style={{ paddingTop: '5px' }}>
                        <div id="zoom-slider"></div>
                        <div className="row">
                          <div className="slider-val-area">
                            <span id="min-zoom-val" className="pull-left">
                              0
                            </span>
                          </div>
                          <div className="slider-val-area">
                            <span id="max-zoom-val" className="pull-right">
                              1
                            </span>
                          </div>
                        </div>
                      </div>
                      <div
                        className="zoom-inout-outer"
                        style={{ width: '10%', textAlign: 'left', paddingLeft: '20px' }}
                      >
                        {/* <button className=" btn"> */}
                        <i className="fa fa-search-plus"> </i>
                        {/* </button> */}
                      </div>
                    </div>
                    {/* <button className="rotaedclock-cropper btn">    
                           <i className="fa fa-repeat"> </i>
                           </button> */}
                    {/* <button className="rotaedclocksanti-cropper btn"> 
                           <i className="fa fa-undo"> </i> 
                           </button> */}
                    {/* <button className="flip1-cropper btn">
                           <i className="fa fa-arrows-h"> </i> 
                           </button> */}
                    {/* <button className="flip2-cropper btn">
                           <i className="fa fa-arrows-v"> </i> 
                           </button> */}
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn add-user close crop-img btn-danger mkt_back_button"
                    data-dismiss="modal"
                  >
                    Crop And Upload
                  </button>
                  <button
                    type="button"
                    className="btn add-user  cancel close mkt_back_button"
                    data-dismiss="modal"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{' '}
      {/* ADDED JBE*/}
      {/* root placeholder for the app, which we add components to using route data */}
      <div className={mainClassPageEditing}>
        <header>
          <div id="header">{route && <Placeholder name="headless-header" rendering={route} />}</div>
        </header>
      </div>
    </>
  );
};

export default Layout;
