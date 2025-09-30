import Image from 'next/image';
import Link from 'next/link';
/**
 * This Layout is needed for Starter Kit.
 */
import React, { JSX } from 'react';
import Head from 'next/head';
import { Placeholder, Field, DesignLibrary, Page } from '@sitecore-content-sdk/nextjs';
import Scripts from 'src/Scripts';
import SitecoreStyles from 'src/components/content-sdk/SitecoreStyles';

interface LayoutProps {
  page: Page;
}

interface RouteFields {
  [key: string]: unknown;
  Title?: Field;
}

const Layout = ({ page }: LayoutProps): JSX.Element => {
  const { layout, mode } = page;
  const { route } = layout.sitecore;
  const fields = route?.fields as RouteFields;
  const mainClassPageEditing = mode.isEditing ? 'editing-mode' : 'prod-mode';
  const importMapDynamic = () => import('.sitecore/import-map');

  return (
    <>
      <Scripts />
      <SitecoreStyles layoutData={layout} />
      <Head>
        <title>{fields?.Title?.value?.toString() || 'Page'}</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://www.ktm.com/etc.clientlibs/ktm-common/clientlibs/ktm.lc-31d6cfe0d16ae931b73c-a651043aad8c5cbebfdb-020f23687193e20c799b-c5762238026da91673cf-31d6cfe0d16ae931b73c-d3c1b7767953b276e864-lc.min.css" />
        <link rel="stylesheet" href="https://www.ktm.com/etc.clientlibs/ktm-common/clientlibs/clientlib-grid.lc-86852e7323ed8019b9c2f1321e88cda7-lc.min.css" />
        <link rel="stylesheet" href="https://www.ktm.com/etc.clientlibs/ktm-common/frontend2/brands/ktm.lc-748e423daa7ccb0f82f14ad10b884ace-lc.min.css" />
        {/* <script src="https://www.youtube.com/s/player/9f996d3e/www-widgetapi.vflset/www-widgetapi.js"></script> */}
        {/* <script src="https://www.ktm.com/libs/dam/components/scene7/common/clientlibs/i18n.js"></script> */}
        {/* <script src="https://s7g10.scene7.com/s7viewers/html5/js/BasicZoomViewer.js"></script> */}
        {/* <script src="https://s7g10.scene7.com/s7viewers/html5/js/FlyoutViewer.js"></script> */}
        {/* <script src="https://s7g10.scene7.com/s7viewers/html5/js/MixedMediaViewer.js"></script> */}
        {/* <script src="https://s7g10.scene7.com/s7viewers/html5/js/SpinViewer.js"></script> */}
        {/* <script src="https://s7g10.scene7.com/s7viewers/html5/js/VideoViewer.js"></script> */}
        {/* <script src="https://s7g10.scene7.com/s7viewers/html5/js/ZoomViewer.js"></script> */}
        {/* <script src="https://s7g10.scene7.com/s7viewers/html5/js/ZoomVerticalViewer.js"></script> */}
        {/* <script src="https://s7g10.scene7.com/s7viewers/libs/responsive_image.js"></script> */}
        {/* <script src="https://googleads.g.doubleclick.net/pagead/viewthroughconversion/807587187/?random=1759261796116&amp;cv=11&amp;fst=1759261796116&amp;bg=ffffff&amp;guid=ON&amp;async=1&amp;en=gtag.config&amp;gtm=45be59t0v9192725544za200zb72066570zd72066570xec&amp;gcd=13r3r3r2r5l1&amp;dma_cps=syphamo&amp;dma=1&amp;tag_exp=101509157~103116026~103200004~103233427~104527907~104528501~104684208~104684211~104948813~115480710~115691063&amp;u_w=1536&amp;u_h=864&amp;url=https%3A%2F%2Fwww.ktm.com%2Fen-be.html&amp;ref=https%3A%2F%2Fstatics.teams.cdn.office.net%2F&amp;frm=0&amp;tiba=KTM%20-%20READY%20TO%20RACE%20%7C%20Belgium&amp;userId=14472175923454666912869&amp;did=dYWJhMj&amp;gdid=dYWJhMj&amp;hn=www.googleadservices.com&amp;npa=0&amp;pscdl=noapi&amp;auid=878258077.1759234550&amp;uaa=x86&amp;uab=64&amp;uafvl=Chromium%3B140.0.7339.186%7CNot%253DA%253FBrand%3B24.0.0.0%7CMicrosoft%2520Edge%3B140.0.3485.81&amp;uamb=0&amp;uam=&amp;uap=Windows&amp;uapv=15.0.0&amp;uaw=0&amp;data=event%3Dgtag.config&amp;rfmt=3&amp;fmt=4"></script> */}
        {/* <script src="https://googleads.g.doubleclick.net/pagead/viewthroughconversion/331473001/?random=1759261796132&amp;cv=11&amp;fst=1759261796132&amp;bg=ffffff&amp;guid=ON&amp;async=1&amp;en=gtag.config&amp;gtm=45be59t0v9192725544za200zb72066570zd72066570xec&amp;gcd=13r3r3r2r5l1&amp;dma_cps=syphamo&amp;dma=1&amp;tag_exp=101509157~103116026~103200004~103233427~104527907~104528501~104684208~104684211~104948813~115480710~115691063&amp;u_w=1536&amp;u_h=864&amp;url=https%3A%2F%2Fwww.ktm.com%2Fen-be.html&amp;ref=https%3A%2F%2Fstatics.teams.cdn.office.net%2F&amp;frm=0&amp;tiba=KTM%20-%20READY%20TO%20RACE%20%7C%20Belgium&amp;userId=14472175923454666912869&amp;did=dYWJhMj&amp;gdid=dYWJhMj&amp;hn=www.googleadservices.com&amp;npa=0&amp;pscdl=noapi&amp;auid=878258077.1759234550&amp;uaa=x86&amp;uab=64&amp;uafvl=Chromium%3B140.0.7339.186%7CNot%253DA%253FBrand%3B24.0.0.0%7CMicrosoft%2520Edge%3B140.0.3485.81&amp;uamb=0&amp;uam=&amp;uap=Windows&amp;uapv=15.0.0&amp;uaw=0&amp;data=event%3Dgtag.config&amp;rfmt=3&amp;fmt=4"></script> */}
        {/* <script src="https://googleads.g.doubleclick.net/pagead/viewthroughconversion/16725327424/?random=1759261796138&amp;cv=11&amp;fst=1759261796138&amp;bg=ffffff&amp;guid=ON&amp;async=1&amp;en=gtag.config&amp;gtm=45be59t0v9192725544za200zb72066570zd72066570xec&amp;gcd=13r3r3r2r5l1&amp;dma_cps=syphamo&amp;dma=1&amp;tag_exp=101509157~103116026~103200004~103233427~104527907~104528501~104684208~104684211~104948813~115480710~115691063&amp;u_w=1536&amp;u_h=864&amp;url=https%3A%2F%2Fwww.ktm.com%2Fen-be.html&amp;ref=https%3A%2F%2Fstatics.teams.cdn.office.net%2F&amp;frm=0&amp;tiba=KTM%20-%20READY%20TO%20RACE%20%7C%20Belgium&amp;userId=14472175923454666912869&amp;did=dYWJhMj&amp;gdid=dYWJhMj&amp;hn=www.googleadservices.com&amp;npa=0&amp;pscdl=noapi&amp;auid=878258077.1759234550&amp;uaa=x86&amp;uab=64&amp;uafvl=Chromium%3B140.0.7339.186%7CNot%253DA%253FBrand%3B24.0.0.0%7CMicrosoft%2520Edge%3B140.0.3485.81&amp;uamb=0&amp;uam=&amp;uap=Windows&amp;uapv=15.0.0&amp;uaw=0&amp;data=event%3Dgtag.config&amp;rfmt=3&amp;fmt=4"></script> */}
        {/* <script src="https://googleads.g.doubleclick.net/pagead/viewthroughconversion/11126967756/?random=1759261796185&amp;cv=11&amp;fst=1759261796185&amp;bg=ffffff&amp;guid=ON&amp;async=1&amp;en=gtag.config&amp;gtm=45be59t0v9180442338za200zb72066570zd72066570xec&amp;gcd=13r3r3r2r5l1&amp;dma_cps=syphamo&amp;dma=1&amp;tag_exp=101509157~103116026~103200004~103233427~104527907~104528501~104684208~104684211~104948813~115480710~115616985~115650527~115650529~115691064&amp;u_w=1536&amp;u_h=864&amp;url=https%3A%2F%2Fwww.ktm.com%2Fen-be.html&amp;ref=https%3A%2F%2Fstatics.teams.cdn.office.net%2F&amp;frm=0&amp;tiba=KTM%20-%20READY%20TO%20RACE%20%7C%20Belgium&amp;userId=14472175923454666912869&amp;did=dYWJhMj&amp;gdid=dYWJhMj&amp;hn=www.googleadservices.com&amp;npa=0&amp;pscdl=noapi&amp;auid=878258077.1759234550&amp;uaa=x86&amp;uab=64&amp;uafvl=Chromium%3B140.0.7339.186%7CNot%253DA%253FBrand%3B24.0.0.0%7CMicrosoft%2520Edge%3B140.0.3485.81&amp;uamb=0&amp;uam=&amp;uap=Windows&amp;uapv=15.0.0&amp;uaw=0&amp;data=event%3Dgtag.config&amp;rfmt=3&amp;fmt=4"></script> */}
        {/* <script src="https://s7g10.scene7.com/is/image/ktm/KTM-enduro-300-exc-hardenduro-homepage-header-1?req=props,json&amp;scl=1&amp;id=525482545&amp;handler=s7RIJSONResponse"></script> */}
        {/* <script src="https://s7g10.scene7.com/is/image/ktm/KTM-motorsports-daniel-sanders-rally?req=props,json&amp;scl=1&amp;id=-988922133&amp;handler=s7RIJSONResponse"></script> */}
        {/* <script src="https://s7g10.scene7.com/is/image/ktm/KTM-sports-tourer--890-smt-homepage-header6?req=props,json&amp;scl=1&amp;id=24152405&amp;handler=s7RIJSONResponse"></script> */}
        {/* <script src="https://s7g10.scene7.com/is/image/ktm/KTM-sports-tourer--890-smt-homepage-header6?req=set,json&amp;id=-1523192999&amp;handler=s7RIJSONResponse"></script> */}
        {/* <script src="https://s7g10.scene7.com/is/image/ktm/KTM-motorsports-josep-garcia-fim-champion?req=props,json&amp;scl=1&amp;id=-1862952742&amp;handler=s7RIJSONResponse"></script> */}
        {/* <script src="https://s7g10.scene7.com/is/image/ktm/KTM-powerwear-gfx-homepage-header6?req=props,json&amp;scl=1&amp;id=1962367086&amp;handler=s7RIJSONResponse"></script> */}
        {/* <script src="https://s7g10.scene7.com/is/image/ktm/KTM-dual-sport-690-enduror-segment-page-action-image?req=props,json&amp;scl=1&amp;id=-891692439&amp;handler=s7RIJSONResponse"></script> */}
        {/* <script src="https://s7g10.scene7.com/is/image/ktm/KTM-dual-sport-690-enduror-segment-page-action-image?req=set,json&amp;id=314282093&amp;handler=s7RIJSONResponse"></script> */}
        {/* <script src="https://s7g10.scene7.com/is/image/ktm/KTM-supermoto-690-smcr-segment-action?req=props,json&amp;scl=1&amp;id=-2043104892&amp;handler=s7RIJSONResponse"></script> */}
        {/* <script src="https://s7g10.scene7.com/is/image/ktm/KTM-supermoto-690-smcr-segment-action?req=set,json&amp;id=-1926974840&amp;handler=s7RIJSONResponse"></script> */}
        {/* <script src="https://s7g10.scene7.com/is/image/ktm/MY25-KTM-DUKE2-STAGE?req=props,json&amp;scl=1&amp;id=68731277&amp;handler=s7RIJSONResponse"></script> */}
        {/* <script src="https://s7g10.scene7.com/is/image/ktm/MY25-KTM-DUKE2-STAGE?req=set,json&amp;id=534109073&amp;handler=s7RIJSONResponse"></script> */}
        {/* <script src="https://s7g10.scene7.com/is/image/ktm/643505_KTM-ADVENTURE-RALLY-TEASER-2025_Teaser-Images?req=props,json&amp;scl=1&amp;id=-578460755&amp;handler=s7RIJSONResponse"></script> */}
        {/* <script src="https://s7g10.scene7.com/is/image/ktm/643505_KTM-ADVENTURE-RALLY-TEASER-2025_Teaser-Images?req=set,json&amp;id=1419156913&amp;handler=s7RIJSONResponse"></script> */}
        {/* <script src="https://s7g10.scene7.com/is/image/ktm/KTM_Header_AdventureMY23_V3?req=props,json&amp;scl=1&amp;id=1294694404&amp;handler=s7RIJSONResponse"></script> */}
        {/* <script src="https://s7g10.scene7.com/is/image/ktm/KTM_Header_AdventureMY23_V3?req=set,json&amp;id=1820719368&amp;handler=s7RIJSONResponse"></script> */}
        {/* <script src="https://s7g10.scene7.com/is/image/ktm/KTM-powerwear-homepage-image-5?req=props,json&amp;scl=1&amp;id=-1113686264&amp;handler=s7RIJSONResponse"></script> */}
        {/* <script src="https://s7g10.scene7.com/is/image/ktm/KTM-powerparts-homepage-image-7?req=props,json&amp;scl=1&amp;id=320265035&amp;handler=s7RIJSONResponse"></script> */}
        {/* <script src="https://s7g10.scene7.com/is/image/ktm/KTM-homepage-tech-guide-banner4?req=props,json&amp;scl=1&amp;id=-1961155676&amp;handler=s7RIJSONResponse"></script> */}
        {/* <script src="https://s7g10.scene7.com/is/image/ktm/KTM-homepage-tech-guide-banner4?req=set,json&amp;id=1747666088&amp;handler=s7RIJSONResponse"></script> */}
        {/* <script src="https://s7g10.scene7.com/is/image/ktm/KTM%20Q3%20Sales%20Promotion%20Generic%20Thumbnail%201800x1800?$ktm_teaser_square$&amp;req=props,json&amp;scl=1&amp;id=-1176464731&amp;handler=s7RIJSONResponse"></script> */}
        {/* <script src="https://s7g10.scene7.com/is/image/ktm/1%20_POR25_EdoBauer_EdoPhoto_EDU6715?$ktm_teaser_square$&amp;req=props,json&amp;scl=1&amp;id=1908296028&amp;handler=s7RIJSONResponse"></script> */}
        {/* <script src="https://s7g10.scene7.com/is/image/ktm/1%20josep-garcia_EnduroGP-2025_Rnd6_17075?$ktm_teaser_square$&amp;req=props,json&amp;scl=1&amp;id=1647994248&amp;handler=s7RIJSONResponse"></script> */}
        {/* <script src="https://googleads.g.doubleclick.net/pagead/viewthroughconversion/618844676/?random=1759261796249&amp;cv=11&amp;fst=1759261796249&amp;bg=ffffff&amp;guid=ON&amp;async=1&amp;en=gtag.config&amp;gtm=45be59t0h1v871874060za200zb72066570zd72066570xec&amp;gcd=13r3r3r2r5l1&amp;dma_cps=syphamo&amp;dma=1&amp;tag_exp=101509157~103116026~103200004~103233427~104527907~104528501~104573694~104684208~104684211~104948813~115480710~115691064&amp;u_w=1536&amp;u_h=864&amp;url=https%3A%2F%2Fwww.ktm.com%2Fen-be.html&amp;ref=https%3A%2F%2Fstatics.teams.cdn.office.net%2F&amp;frm=0&amp;tiba=KTM%20-%20READY%20TO%20RACE%20%7C%20Belgium&amp;userId=14472175923454666912869&amp;did=dYWJhMj&amp;gdid=dYWJhMj&amp;hn=www.googleadservices.com&amp;npa=0&amp;pscdl=noapi&amp;auid=878258077.1759234550&amp;uaa=x86&amp;uab=64&amp;uafvl=Chromium%3B140.0.7339.186%7CNot%253DA%253FBrand%3B24.0.0.0%7CMicrosoft%2520Edge%3B140.0.3485.81&amp;uamb=0&amp;uam=&amp;uap=Windows&amp;uapv=15.0.0&amp;uaw=0&amp;data=event%3Dgtag.config&amp;rfmt=3&amp;fmt=4"></script> */}
        {/* <script src="https://googleads.g.doubleclick.net/pagead/viewthroughconversion/817236825/?random=1759261796260&amp;cv=11&amp;fst=1759261796260&amp;bg=ffffff&amp;guid=ON&amp;async=1&amp;en=gtag.config&amp;gtm=45be59t0h1v871874060za200zb72066570zd72066570xec&amp;gcd=13r3r3r2r5l1&amp;dma_cps=syphamo&amp;dma=1&amp;tag_exp=101509157~103116026~103200004~103233427~104527907~104528501~104573694~104684208~104684211~104948813~115480710~115691064&amp;u_w=1536&amp;u_h=864&amp;url=https%3A%2F%2Fwww.ktm.com%2Fen-be.html&amp;ref=https%3A%2F%2Fstatics.teams.cdn.office.net%2F&amp;frm=0&amp;tiba=KTM%20-%20READY%20TO%20RACE%20%7C%20Belgium&amp;userId=14472175923454666912869&amp;did=dYWJhMj&amp;gdid=dYWJhMj&amp;hn=www.googleadservices.com&amp;npa=0&amp;pscdl=noapi&amp;auid=878258077.1759234550&amp;uaa=x86&amp;uab=64&amp;uafvl=Chromium%3B140.0.7339.186%7CNot%253DA%253FBrand%3B24.0.0.0%7CMicrosoft%2520Edge%3B140.0.3485.81&amp;uamb=0&amp;uam=&amp;uap=Windows&amp;uapv=15.0.0&amp;uaw=0&amp;data=event%3Dgtag.config&amp;rfmt=3&amp;fmt=4"></script> */}
      </Head>

      {/* root placeholder for the app, which we add components to using route data */}
      <div className={mainClassPageEditing}>
        {mode.isDesignLibrary ? (
          <DesignLibrary loadImportMap={importMapDynamic} />
        ) : (
          <>
            <header>
              <div id="header">
                {route && <Placeholder name="headless-header" rendering={route} />}
              </div>
            </header>
            <main>
              <div id="content">
                {route && <Placeholder name="headless-main" rendering={route} />}
              </div>
            </main>
            <footer>
              <div id="footer">
                {route && <Placeholder name="headless-footer" rendering={route} />}
              </div>
            </footer>
          </>
        )}
      </div>
        {/* BEGIN: KTM converted body */}
        <section id="ktm-port">
          
            <div className="c-country-suggestion-bar component js-country-suggestion-bar" data-isgg="false" data-ishqv="false">
              <div className="c-country-suggestion-bar__container">
                <p className="c-country-suggestion-bar__container-infotext component js-infotext"></p>
                <div className="c-country-suggestion-bar__container-country-suggestion">
                  <p className="component js-destination-label"></p>
                  <p className="component js-country-name"></p>
                </div>
                <div className="c-btn__link c-btn__link-icon component js-button-close">
                  <div className="c-btn__icon component"></div>
                </div>
              </div>
            </div><noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5GFGV2" height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe></noscript>
            <div className="root responsivegrid">
              <div className="aem-Grid aem-Grid--12 aem-Grid--default--12">
                <div className="header aem-GridColumn aem-GridColumn--default--12">
                  <header className="nav js-nav component">
                    <div className="container">
                      <div className="nav">
                        <nav className="nav__items js-nav-items js-calcviewheight" data-offset-sm="185" data-offset-md="115" data-height-auto-lg="true" data-height-auto-xl="true" style={{ height: 'auto' }}>
                          <ul>
                            <li className="js-has-items accordion" data-opened="false">
                              <span className="heading">Models</span>
                              <div className="content">
                                <ul className="nav__models js-nav-models">
                                  <li className="range-list js-range-list accordion">
                                    <span className="heading d-lg-none">Select range</span>
                                    <div className="content">
                                      <ul>
                                        <li data-segment-id="d82d7930-0f94-4a8b-b4c6-a1b566d05432">MOTOCROSS</li>
                                        <li data-segment-id="95d4b6f8-2d1c-40f7-9b83-bfbbd75909f1">ENDURO</li>
                                        <li data-segment-id="ec0599e9-b40a-4bb9-bf26-46afcdcf46c9">Electric</li>
                                        <li data-segment-id="abb3e7a0-a780-4f71-8eae-02b9729ba89b">Dual Sport</li>
                                        <li data-segment-id="6f4e2c1b-2d4e-4c69-9bcc-4c53a63ed15f">Adventure</li>
                                        <li data-segment-id="19708f84-2503-40c5-ac82-73ac44970597">SPORTS TOURER</li>
                                        <li data-segment-id="03778f93-33cf-4d7d-9e1a-f1f289b3e1aa">Supermoto</li>
                                        <li data-segment-id="02b7a25c-5ef1-4566-9823-2f25838d79ce">Naked Bike</li>
                                        <li data-segment-id="f0ec3513-8bf1-453e-b68f-ba53e4087495">Supersport</li>
                                        <li data-segment-id="e1a8a633-bb16-42a8-b833-c279fe6b338f">X-BOW</li>
                                        <li data-segment-id="a69dfa94-c6dc-4034-a266-e41d8ca6de8e">BRABUS</li>
                                      </ul>
                                    </div>
                                  </li>
                                  <li>
                                    <ul className="segments-list js-segment-list">
                                      <li data-segment-id="d82d7930-0f94-4a8b-b4c6-a1b566d05432">
                                        <div className="container active-element">
                                          <aside>
                                            <p className="heading-h3"><Link href="https://www.ktm.com/en-be/models/motocross.html">MOTOCROSS</Link></p>
                                            <p className="d-none d-md-block heading-h5"></p>
                                            <div className="c-btn d-none d-md-flex">
                                              <Link href="https://www.ktm.com/en-be/models/motocross.html" className="c-btn__link c-btn__link--primary-dark">DISCOVER</Link>
                                            </div>
                                          </aside>
                                          <section>
                                            <ul className="engine-list-wrapper">
                                              <li className="js-engine-list accordion engine-list">
                                                <div className="heading engineGroup">
                                                  4-stroke
                                                </div>
                                                <div className="content">
                                                  <ul className="bike-list">
                                                    <li>
                                                      <Link href="https://www.ktm.com/en-be/models/motocross/4-stroke/2026-ktm-450-sx-f.html">2026 KTM 450 SX-F</Link>
                                                    </li>
                                                    <li>
                                                      <Link href="https://www.ktm.com/en-be/models/motocross/4-stroke/2026-ktm-350-sx-f.html">2026 KTM 350 SX-F</Link>
                                                    </li>
                                                    <li>
                                                      <Link href="https://www.ktm.com/en-be/models/motocross/4-stroke/2026-ktm-250-sx-f.html">2026 KTM 250 SX-F</Link>
                                                    </li>
                                                    <li>
                                                      <Link href="https://www.ktm.com/en-be/models/motocross/4-stroke/2025-ktm-250-sx-fadamoedition.html">2025 KTM 250 SX-F ADAMO EDITION</Link>
                                                    </li>
                                                    <li>
                                                      <Link href="https://www.ktm.com/en-be/models/motocross/4-stroke/2025-ktm-450-sx-ffactoryedition.html">2025 KTM 450 SX-F FACTORY EDITION</Link>
                                                    </li>
                                                  </ul>
                                                </div>
                                              </li>
                                              <li className="js-engine-list accordion engine-list">
                                                <div className="heading engineGroup">
                                                  2-stroke
                                                </div>
                                                <div className="content">
                                                  <ul className="bike-list">
                                                    <li>
                                                      <Link href="https://www.ktm.com/en-be/models/motocross/2-stroke/2026-ktm-300-sx.html">2026 KTM 300 SX</Link>
                                                    </li>
                                                    <li>
                                                      <Link href="https://www.ktm.com/en-be/models/motocross/2-stroke/2026-ktm-250-sx.html">2026 KTM 250 SX</Link>
                                                    </li>
                                                    <li>
                                                      <Link href="https://www.ktm.com/en-be/models/motocross/2-stroke/2026-ktm-125-sx.html">2026 KTM 125 SX</Link>
                                                    </li>
                                                    <li>
                                                      <Link href="https://www.ktm.com/en-be/models/motocross/2-stroke/2026-ktm-sx-85-1916.html">2026 KTM SX 85 19/16</Link>
                                                    </li>
                                                    <li>
                                                      <Link href="https://www.ktm.com/en-be/models/motocross/2-stroke/2026-ktm-sx-85-1714.html">2026 KTM SX 85 17/14</Link>
                                                    </li>
                                                    <li>
                                                      <Link href="https://www.ktm.com/en-be/models/motocross/2-stroke/2026-ktm-65-sx.html">2026 KTM 65 SX</Link>
                                                    </li>
                                                    <li>
                                                      <Link href="https://www.ktm.com/en-be/models/motocross/2-stroke/2026-ktm-50-sx-factoryedition.html">2026 KTM 50 SX FACTORY EDITION</Link>
                                                    </li>
                                                    <li>
                                                      <Link href="https://www.ktm.com/en-be/models/motocross/2-stroke/2026-ktm-50-sx.html">2026 KTM 50 SX</Link>
                                                    </li>
                                                  </ul>
                                                </div>
                                              </li>
                                              <li className="js-engine-list accordion engine-list">
                                                <div className="heading engineGroup">
                                                  Electric
                                                </div>
                                                <div className="content">
                                                  <ul className="bike-list">
                                                    <li>
                                                      <Link href="https://www.ktm.com/en-be/models/motocross/electric/2025-ktm-sx-e-5.html">2025 KTM SX-E 5</Link>
                                                    </li>
                                                    <li>
                                                      <Link href="https://www.ktm.com/en-be/models/motocross/electric/2025-ktm-sx-e-3.html">2025 KTM SX-E 3</Link>
                                                    </li>
                                                    <li>
                                                      <Link href="https://www.ktm.com/en-be/models/motocross/electric/2025-ktm-sx-e-2.html">2025 KTM SX-E 2</Link>
                                                    </li>
                                                  </ul>
                                                </div>
                                              </li>
                                            </ul>
                                          </section>
                                        </div>
                                      </li>
                                      <li data-segment-id="95d4b6f8-2d1c-40f7-9b83-bfbbd75909f1">
                                        <div className="container active-element">
                                          <aside>
                                            <p className="heading-h3"><Link href="https://www.ktm.com/en-be/models/enduro.html">ENDURO</Link></p>
                                            <p className="d-none d-md-block heading-h5"></p>
                                            <div className="c-btn d-none d-md-flex">
                                              <Link href="https://www.ktm.com/en-be/models/enduro.html" className="c-btn__link c-btn__link--primary-dark">DISCOVER</Link>
                                            </div>
                                          </aside>
                                          <section>
                                            <ul className="engine-list-wrapper">
                                              <li className="js-engine-list accordion engine-list">
                                                <div className="heading engineGroup">
                                                  4-stroke
                                                </div>
                                                <div className="content">
                                                  <ul className="bike-list">
                                                    <li>
                                                      <Link href="https://www.ktm.com/en-be/models/enduro/4-stroke/2026-ktm-500-excf6days.html">2026 KTM 500 EXC-F 6DAYS</Link>
                                                    </li>
                                                    <li>
                                                      <Link href="https://www.ktm.com/en-be/models/enduro/4-stroke/2026-ktm-450-excf6days.html">2026 KTM 450 EXC-F 6DAYS</Link>
                                                    </li>
                                                    <li>
                                                      <Link href="https://www.ktm.com/en-be/models/enduro/4-stroke/2026-ktm-350-excf6days.html">2026 KTM 350 EXC-F 6DAYS</Link>
                                                    </li>
                                                    <li>
                                                      <Link href="https://www.ktm.com/en-be/models/enduro/4-stroke/2026-ktm-250-excf6days.html">2026 KTM 250 EXC-F 6DAYS</Link>
                                                    </li>
                                                    <li>
                                                      <Link href="https://www.ktm.com/en-be/models/enduro/4-stroke/2026-ktm-500-excf.html">2026 KTM 500 EXC-F</Link>
                                                    </li>
                                                    <li>
                                                      <Link href="https://www.ktm.com/en-be/models/enduro/4-stroke/2026-ktm-450-excf.html">2026 KTM 450 EXC-F</Link>
                                                    </li>
                                                    <li>
                                                      <Link href="https://www.ktm.com/en-be/models/enduro/4-stroke/2026-ktm-350-excf.html">2026 KTM 350 EXC-F</Link>
                                                    </li>
                                                    <li>
                                                      <Link href="https://www.ktm.com/en-be/models/enduro/4-stroke/2026-ktm-250-excf.html">2026 KTM 250 EXC-F</Link>
                                                    </li>
                                                    <li>
                                                      <Link href="https://www.ktm.com/en-be/models/enduro/4-stroke/2025-ktm-500-excfchampionedition.html">2025 KTM 500 EXC-F CHAMPION EDITION</Link>
                                                    </li>
                                                    <li>
                                                      <Link href="https://www.ktm.com/en-be/models/enduro/4-stroke/2025-ktm-450-excfchampionedition.html">2025 KTM 450 EXC-F CHAMPION EDITION</Link>
                                                    </li>
                                                    <li>
                                                      <Link href="https://www.ktm.com/en-be/models/enduro/4-stroke/2025-ktm-350-excfchampionedition.html">2025 KTM 350 EXC-F CHAMPION EDITION</Link>
                                                    </li>
                                                    <li>
                                                      <Link href="https://www.ktm.com/en-be/models/enduro/4-stroke/2025-ktm-250-excfchampionedition.html">2025 KTM 250 EXC-F CHAMPION EDITION</Link>
                                                    </li>
                                                  </ul>
                                                </div>
                                              </li>
                                              <li className="js-engine-list accordion engine-list">
                                                <div className="heading engineGroup">
                                                  2-stroke
                                                </div>
                                                <div className="content">
                                                  <ul className="bike-list">
                                                    <li>
                                                      <Link href="https://www.ktm.com/en-be/models/enduro/2-stroke/2026-ktm-300-exc6days.html">2026 KTM 300 EXC 6DAYS</Link>
                                                    </li>
                                                    <li>
                                                      <Link href="https://www.ktm.com/en-be/models/enduro/2-stroke/2026-ktm-300-exchardenduro.html">2026 KTM 300 EXC HARDENDURO</Link>
                                                    </li>
                                                    <li>
                                                      <Link href="https://www.ktm.com/en-be/models/enduro/2-stroke/2026-ktm-300-exc.html">2026 KTM 300 EXC</Link>
                                                    </li>
                                                    <li>
                                                      <Link href="https://www.ktm.com/en-be/models/enduro/2-stroke/2026-ktm-125-xc-w.html">2026 KTM 125 XC-W</Link>
                                                    </li>
                                                    <li>
                                                      <Link href="https://www.ktm.com/en-be/models/enduro/2-stroke/2025-ktm-300-excchampionedition.html">2025 KTM 300 EXC CHAMPION EDITION</Link>
                                                    </li>
                                                    <li>
                                                      <Link href="https://www.ktm.com/en-be/models/enduro/2-stroke/2025-ktm-250-excchampionedition.html">2025 KTM 250 EXC CHAMPION EDITION</Link>
                                                    </li>
                                                  </ul>
                                                </div>
                                              </li>
                                            </ul>
                                          </section>
                                        </div>
                                      </li>
                                      <li data-segment-id="ec0599e9-b40a-4bb9-bf26-46afcdcf46c9">
                                        <div className="container active-element">
                                          <aside>
                                            <p className="heading-h3"><Link href="https://www.ktm.com/en-be/models/electric.html">Electric</Link></p>
                                            <p className="d-none d-md-block heading-h5"></p>
                                            <div className="c-btn d-none d-md-flex">
                                              <Link href="https://www.ktm.com/en-be/models/electric.html" className="c-btn__link c-btn__link--primary-dark">DISCOVER</Link>
                                            </div>
                                          </aside>
                                          <section>
                                            <ul className="engine-list-wrapper">
                                              <li className="js-engine-list accordion engine-list">
                                                <div className="heading engineGroup">
                                                  FREERIDE
                                                </div>
                                                <div className="content">
                                                  <ul className="bike-list">
                                                    <li>
                                                      <Link href="https://www.ktm.com/en-be/models/electric/freeride/2023-ktm-freerideexc.html">2023 KTM Freeride E-XC</Link>
                                                    </li>
                                                  </ul>
                                                </div>
                                              </li>
                                              <li className="js-engine-list accordion engine-list">
                                                <div className="heading engineGroup">
                                                  KIDS ELECTRIC MOTOCROSS
                                                </div>
                                                <div className="content">
                                                  <ul className="bike-list">
                                                    <li>
                                                      <Link href="https://www.ktm.com/en-be/models/electric/kids-motocross/2025-ktm-sx-e-5.html">2025 KTM SX-E 5</Link>
                                                    </li>
                                                    <li>
                                                      <Link href="https://www.ktm.com/en-be/models/electric/kids-motocross/2025-ktm-sx-e-3.html">2025 KTM SX-E 3</Link>
                                                    </li>
                                                    <li>
                                                      <Link href="https://www.ktm.com/en-be/models/electric/kids-motocross/2025-ktm-sx-e-2.html">2025 KTM SX-E 2</Link>
                                                    </li>
                                                  </ul>
                                                </div>
                                              </li>
                                              <li className="js-engine-list accordion engine-list">
                                                <div className="heading engineGroup">
                                                  KIDS ELECTRIC BALANCE BIKES
                                                </div>
                                                <div className="content">
                                                  <ul className="bike-list">
                                                    <li>
                                                      <Link href="https://www.ktm.com/en-be/models/electric/kids-balance-bikes/2023-ktm-sx-e-1-20.html">2023 KTM SX-E 1.20</Link>
                                                    </li>
                                                    <li>
                                                      <Link href="https://www.ktm.com/en-be/models/electric/kids-balance-bikes/2023-ktm-sx-e-1-16.html">2023 KTM SX-E 1.16</Link>
                                                    </li>
                                                    <li>
                                                      <Link href="https://www.ktm.com/en-be/models/electric/kids-balance-bikes/2023-ktm-sx-e-1-12.html">2023 KTM SX-E 1.12</Link>
                                                    </li>
                                                  </ul>
                                                </div>
                                              </li>
                                            </ul>
                                          </section>
                                        </div>
                                      </li>
                                      <li data-segment-id="abb3e7a0-a780-4f71-8eae-02b9729ba89b">
                                        <div className="container active-element">
                                          <aside>
                                            <p className="heading-h3"><Link href="https://www.ktm.com/en-be/models/dual-sport.html">Dual Sport</Link></p>
                                            <p className="d-none d-md-block heading-h5"></p>
                                            <div className="c-btn d-none d-md-flex">
                                              <Link href="https://www.ktm.com/en-be/models/dual-sport.html" className="c-btn__link c-btn__link--primary-dark">DISCOVER</Link>
                                            </div>
                                          </aside>
                                          <section>
                                            <ul className="bike-list">
                                              <li>
                                                <Link href="https://www.ktm.com/en-be/models/dual-sport/2026-ktm-690-enduror.html">2026 KTM 690 Enduro R</Link>
                                              </li>
                                              <li>
                                                <Link href="https://www.ktm.com/en-be/models/dual-sport/2025-ktm-125-enduror.html">2025 KTM 125 Enduro R</Link>
                                              </li>
                                              <li>
                                                <Link href="https://www.ktm.com/en-be/models/dual-sport/2025-ktm-390-enduror.html">2025 KTM 390 Enduro R</Link>
                                              </li>
                                            </ul>
                                          </section>
                                        </div>
                                      </li>
                                      <li data-segment-id="6f4e2c1b-2d4e-4c69-9bcc-4c53a63ed15f">
                                        <div className="container active-element">
                                          <aside>
                                            <p className="heading-h3"><Link href="https://www.ktm.com/en-be/models/adventure.html">Adventure</Link></p>
                                            <p className="d-none d-md-block heading-h5"></p>
                                            <div className="c-btn d-none d-md-flex">
                                              <Link href="https://www.ktm.com/en-be/models/adventure.html" className="c-btn__link c-btn__link--primary-dark">DISCOVER</Link>
                                            </div>
                                          </aside>
                                          <section>
                                            <ul className="bike-list">
                                              <li>
                                                <Link href="https://www.ktm.com/en-be/models/adventure/2026-ktm-1390-superadventurer.html">2026 KTM 1390 Super Adventure R</Link>
                                              </li>
                                              <li>
                                                <Link href="https://www.ktm.com/en-be/models/adventure/2026-ktm-450-rallyreplica.html">2026 KTM 450 RALLY REPLICA</Link>
                                              </li>
                                              <li>
                                                <Link href="https://www.ktm.com/en-be/models/adventure/2025-ktm-890-adventurer.html">2025 KTM 890 Adventure R</Link>
                                              </li>
                                              <li>
                                                <Link href="https://www.ktm.com/en-be/models/adventure/2025-ktm-790-adventure.html">2025 KTM 790 Adventure</Link>
                                              </li>
                                              <li>
                                                <Link href="https://www.ktm.com/en-be/models/adventure/2025-ktm-390-adventurer.html">2025 KTM 390 Adventure R</Link>
                                              </li>
                                              <li>
                                                <Link href="https://www.ktm.com/en-be/models/adventure/2025-ktm-390-adventurex.html">2025 KTM 390 Adventure X</Link>
                                              </li>
                                              <li>
                                                <Link href="https://www.ktm.com/en-be/models/adventure/2024-ktm-1290-superadventurer.html">2024 KTM 1290 Super Adventure R</Link>
                                              </li>
                                              <li>
                                                <Link href="https://www.ktm.com/en-be/models/adventure/2024-ktm-1290-superadventures.html">2024 KTM 1290 Super Adventure S</Link>
                                              </li>
                                              <li>
                                                <Link href="https://www.ktm.com/en-be/models/adventure/2024-ktm-890-adventurerrally.html">2024 KTM 890 ADVENTURE R RALLY</Link>
                                              </li>
                                              <li>
                                                <Link href="https://www.ktm.com/en-be/models/adventure/2024-ktm-890-adventure.html">2024 KTM 890 Adventure</Link>
                                              </li>
                                              <li>
                                                <Link href="https://www.ktm.com/en-be/models/adventure/2024-ktm-390-adventuresw.html">2024 KTM 390 ADVENTURE SW</Link>
                                              </li>
                                              <li>
                                                <Link href="https://www.ktm.com/en-be/models/adventure/2024-ktm-390-adventure.html">2024 KTM 390 Adventure</Link>
                                              </li>
                                            </ul>
                                          </section>
                                        </div>
                                      </li>
                                      <li data-segment-id="19708f84-2503-40c5-ac82-73ac44970597">
                                        <div className="container active-element">
                                          <aside>
                                            <p className="heading-h3"><Link href="https://www.ktm.com/en-be/models/sports-tourer.html">SPORTS TOURER</Link></p>
                                            <p className="d-none d-md-block heading-h5"></p>
                                            <div className="c-btn d-none d-md-flex">
                                              <Link href="https://www.ktm.com/en-be/models/sports-tourer.html" className="c-btn__link c-btn__link--primary-dark">DISCOVER</Link>
                                            </div>
                                          </aside>
                                          <section>
                                            <ul className="bike-list">
                                              <li>
                                                <Link href="https://www.ktm.com/en-be/models/sports-tourer/2024-ktm-1290-superdukegt.html">2024 KTM 1290 Super Duke GT</Link>
                                              </li>
                                              <li>
                                                <Link href="https://www.ktm.com/en-be/models/sports-tourer/2024-ktm-890-smt.html">2024 KTM 890 SMT</Link>
                                              </li>
                                            </ul>
                                          </section>
                                        </div>
                                      </li>
                                      <li data-segment-id="03778f93-33cf-4d7d-9e1a-f1f289b3e1aa">
                                        <div className="container active-element">
                                          <aside>
                                            <p className="heading-h3"><Link href="https://www.ktm.com/en-be/models/supermoto.html">Supermoto</Link></p>
                                            <p className="d-none d-md-block heading-h5"></p>
                                            <div className="c-btn d-none d-md-flex">
                                              <Link href="https://www.ktm.com/en-be/models/supermoto.html" className="c-btn__link c-btn__link--primary-dark">DISCOVER</Link>
                                            </div>
                                          </aside>
                                          <section>
                                            <ul className="bike-list">
                                              <li>
                                                <Link href="https://www.ktm.com/en-be/models/supermoto/2026-ktm-690-smcr.html">2026 KTM 690 SMC R</Link>
                                              </li>
                                              <li>
                                                <Link href="https://www.ktm.com/en-be/models/supermoto/2025-ktm-450-smr.html">2025 KTM 450 SMR</Link>
                                              </li>
                                              <li>
                                                <Link href="https://www.ktm.com/en-be/models/supermoto/2025-ktm-390-smcr.html">2025 KTM 390 SMC R</Link>
                                              </li>
                                              <li>
                                                <Link href="https://www.ktm.com/en-be/models/supermoto/2025-ktm-125-smcr.html">2025 KTM 125 SMC R</Link>
                                              </li>
                                            </ul>
                                          </section>
                                        </div>
                                      </li>
                                      <li data-segment-id="02b7a25c-5ef1-4566-9823-2f25838d79ce">
                                        <div className="container active-element">
                                          <aside>
                                            <p className="heading-h3"><Link href="https://www.ktm.com/en-be/models/naked-bike.html">Naked Bike</Link></p>
                                            <p className="d-none d-md-block heading-h5"></p>
                                            <div className="c-btn d-none d-md-flex">
                                              <Link href="https://www.ktm.com/en-be/models/naked-bike.html" className="c-btn__link c-btn__link--primary-dark">DISCOVER</Link>
                                            </div>
                                          </aside>
                                          <section>
                                            <ul className="bike-list">
                                              <li>
                                                <Link href="https://www.ktm.com/en-be/models/naked-bike/2025-ktm-1390-superdukerevo.html">2025 KTM 1390 Super Duke R EVO</Link>
                                              </li>
                                              <li>
                                                <Link href="https://www.ktm.com/en-be/models/naked-bike/2025-ktm-1390-superduker.html">2025 KTM 1390 Super Duke R</Link>
                                              </li>
                                              <li>
                                                <Link href="https://www.ktm.com/en-be/models/naked-bike/2025-ktm-790-duke.html">2025 KTM 790 Duke</Link>
                                              </li>
                                              <li>
                                                <Link href="https://www.ktm.com/en-be/models/naked-bike/2025-ktm-390-duke.html">2025 KTM 390 Duke</Link>
                                              </li>
                                              <li>
                                                <Link href="https://www.ktm.com/en-be/models/naked-bike/2025-ktm-125-duke.html">2025 KTM 125 Duke</Link>
                                              </li>
                                              <li>
                                                <Link href="https://www.ktm.com/en-be/models/naked-bike/2024-ktm-990-duke.html">2024 KTM 990 DUKE</Link>
                                              </li>
                                            </ul>
                                          </section>
                                        </div>
                                      </li>
                                      <li data-segment-id="f0ec3513-8bf1-453e-b68f-ba53e4087495">
                                        <div className="container active-element">
                                          <aside>
                                            <p className="heading-h3"><Link href="https://www.ktm.com/en-be/models/supersport.html">Supersport</Link></p>
                                            <p className="d-none d-md-block heading-h5"></p>
                                            <div className="c-btn d-none d-md-flex">
                                              <Link href="https://www.ktm.com/en-be/models/supersport.html" className="c-btn__link c-btn__link--primary-dark">DISCOVER</Link>
                                            </div>
                                          </aside>
                                          <section>
                                            <ul className="bike-list">
                                              <li>
                                                <Link href="https://www.ktm.com/en-be/models/supersport/2024-ktm-rc-8c.html">2024 KTM RC 8C</Link>
                                              </li>
                                              <li>
                                                <Link href="https://www.ktm.com/en-be/models/supersport/2024-ktm-rc-390.html">2024 KTM RC 390</Link>
                                              </li>
                                              <li>
                                                <Link href="https://www.ktm.com/en-be/models/supersport/2024-ktm-rc-125.html">2024 KTM RC 125</Link>
                                              </li>
                                            </ul>
                                          </section>
                                        </div>
                                      </li>
                                      <li data-segment-id="e1a8a633-bb16-42a8-b833-c279fe6b338f">
                                        <div className="container active-element">
                                          <aside>
                                            <p className="heading-h3"><Link href="https://www.ktm.com/en-be/models/x-bow.html">X-BOW</Link></p>
                                            <p className="d-none d-md-block heading-h5">REVOLUTIONARY. PURISTIC. RADICAL.</p>
                                            <div className="c-btn d-none d-md-flex">
                                              <Link href="https://www.ktm.com/en-be/models/x-bow.html" className="c-btn__link c-btn__link--primary-dark">DISCOVER</Link>
                                            </div>
                                          </aside>
                                          <section>
                                            <ul className="bike-list">
                                              <li>
                                                <Link href="https://www.ktm.com/en-be/models/x-bow/x-bow-gt-xr-2023.html">X-BOW GT-XR 2023</Link>
                                              </li>
                                              <li>
                                                <Link href="https://www.ktm.com/en-be/models/x-bow/x-bow-gtx-2020.html">X-Bow GTX 2020</Link>
                                              </li>
                                              <li>
                                                <Link href="https://www.ktm.com/en-be/models/x-bow/ktm-x-bow-gt4.html">X-Bow GT4</Link>
                                              </li>
                                            </ul>
                                          </section>
                                        </div>
                                      </li>
                                      <li data-segment-id="a69dfa94-c6dc-4034-a266-e41d8ca6de8e">
                                        <div className="container active-element">
                                          <aside>
                                            <p className="heading-h3"><Link href="https://www.ktm.com/en-be/models/brabus.html">BRABUS</Link></p>
                                            <p className="d-none d-md-block heading-h5"></p>
                                            <div className="c-btn d-none d-md-flex">
                                              <Link href="https://www.ktm.com/en-be/models/brabus.html" className="c-btn__link c-btn__link--primary-dark">DISCOVER</Link>
                                            </div>
                                          </aside>
                                          <section>
                                            <ul className="bike-list">
                                              <li>
                                                <Link href="https://www.ktm.com/en-be/models/brabus/brabus-1300-r-masterpieceedition.html">BRABUS 1300 R Masterpiece Edition</Link>
                                              </li>
                                              <li>
                                                <Link href="https://www.ktm.com/en-be/models/brabus/2023-brabus-1300redition.html">2023 BRABUS 1300 R Edition</Link>
                                              </li>
                                            </ul>
                                          </section>
                                        </div>
                                      </li>
                                    </ul>
                                  </li>
                                </ul>
                              </div>
                            </li>
                            <li className="js-has-items accordion" data-opened="false">
                              <span className="heading">X-BOW</span>
                              <div className="content">
                                <ul className="submenu">
                                  <li>
                                    <Link href="https://www.ktm.com/en-be/models/x-bow.html" className="headerNavLink headerNavLink--lvl2" target="_self">Explore</Link>
                                  </li>
                                  <li>
                                    <Link href="https://www.ktm.com/en-be/X-BOW/models.html" className="headerNavLink headerNavLink--lvl2" target="_self">Models</Link>
                                  </li>
                                  <li>
                                    <Link href="https://www.ktm.com/en-be/news.html#x-bow" className="headerNavLink headerNavLink--lvl2" target="_self">X-BOW News</Link>
                                  </li>
                                  <li>
                                    <Link href="https://www.ktm.com/en-be/X-BOW/motorsport.html" className="headerNavLink headerNavLink--lvl2" target="_self">Racing</Link>
                                  </li>
                                  <li>
                                    <Link href="https://www.ktm.com/en-be/X-BOW/racing-school---fleet-cars.html" className="headerNavLink headerNavLink--lvl2" target="_self">Racing Schools</Link>
                                  </li>
                                  <li>
                                    <Link href="https://www.ktm.com/en-be/X-BOW/e-sports---gaming.html" className="headerNavLink headerNavLink--lvl2" target="_self">E-SPORTS & GAMING</Link>
                                  </li>
                                  <li>
                                    <Link href="https://www.ktm.com/en-be/X-BOW/locations.html" className="headerNavLink headerNavLink--lvl2" target="_self">Locations</Link>
                                  </li>
                                  <li>
                                    <Link href="https://www.ktm.com/en-be/find-a-dealer.html" className="headerNavLink headerNavLink--lvl2" target="_self">Dealer Search</Link>
                                  </li>
                                  <li>
                                    <Link href="https://www.ktm.com/en-be/X-BOW/contact.html" className="headerNavLink headerNavLink--lvl2" target="_self">Contact</Link>
                                  </li>
                                </ul>
                              </div>
                            </li>
                            <li className="js-has-items accordion" data-opened="false">
                              <span className="heading">PowerParts & PowerWear</span>
                              <div className="content">
                                <ul className="submenu">
                                  <li>
                                    <Link href="https://www.ktm.com/en-be/parts---wear/powerparts/products.html" className="headerNavLink headerNavLink--lvl2" target="_self">PowerParts</Link>
                                  </li>
                                  <li>
                                    <Link href="https://www.ktm.com/en-be/parts---wear/powerwear/products.html" className="headerNavLink headerNavLink--lvl2" target="_self">PowerWear</Link>
                                  </li>
                                  <li>
                                    <Link href="https://www.ktm.com/en-be/parts---wear/powerwear-collections.html" className="headerNavLink headerNavLink--lvl2" target="_self">PowerWear Collections</Link>
                                  </li>
                                  <li>
                                    <Link href="https://www.ktm.com/en-be/service/spare-parts-finder.html" className="headerNavLink headerNavLink--lvl2" target="_self">SPARE PARTS FINDER</Link>
                                  </li>
                                  <li>
                                    <Link href="https://configurator.ktm.com/models/" className="headerNavLink headerNavLink--lvl2" target="_self">Online Configurator</Link>
                                  </li>
                                  <li>
                                    <Link href="https://www.ktm.com/en-be/parts---wear/ktm-exc-plastic-part-kits.html" className="headerNavLink headerNavLink--lvl2" target="_self">KTM EXC PLASTIC PART KITS</Link>
                                  </li>
                                </ul>
                              </div>
                            </li>
                            <li className="js-has-items accordion" data-opened="false">
                              <span className="heading">Racing</span>
                              <div className="content">
                                <ul className="submenu">
                                  <li>
                                    <Link href="https://www.ktm.com/en-be/news.html#racing" className="headerNavLink headerNavLink--lvl2" target="_self">Racing News</Link>
                                  </li>
                                  <li>
                                    <Link href="https://www.ktm.com/en-be/racing/road-racing.html" className="headerNavLink headerNavLink--lvl2" target="_self">MOTOGP™</Link>
                                  </li>
                                  <li>
                                    <Link href="https://www.ktm.com/en-be/racing/mx-sx.html" className="headerNavLink headerNavLink--lvl2" target="_self">Motocross/Supercross</Link>
                                  </li>
                                  <li>
                                    <Link href="https://www.ktm.com/en-be/racing/offroad.html" className="headerNavLink headerNavLink--lvl2" target="_self">Enduro / Offroad US</Link>
                                  </li>
                                  <li>
                                    <Link href="https://www.ktm.com/en-be/racing/rally.html" className="headerNavLink headerNavLink--lvl2" target="_self">Rally</Link>
                                  </li>
                                </ul>
                              </div>
                            </li>
                            <li className="js-has-items accordion" data-opened="false">
                              <span className="heading">KTM World</span>
                              <div className="content">
                                <ul className="submenu">
                                  <li>
                                    <Link href="https://www.ktm.com/en-be/news.html#promotions" className="headerNavLink headerNavLink--lvl2" target="_self">Power Deals</Link>
                                  </li>
                                  <li>
                                    <Link href="https://www.ktm.com/en-be/news.html" className="headerNavLink headerNavLink--lvl2" target="_self">News</Link>
                                  </li>
                                  <li>
                                    <Link href="https://www.ktm.com/en-be/news.html#events" className="headerNavLink headerNavLink--lvl2" target="_self">Events</Link>
                                  </li>
                                  <li>
                                    <Link href="https://www.ktm.com/en-be/news.html#stories" className="headerNavLink headerNavLink--lvl2" target="_self">Stories</Link>
                                  </li>
                                  <li>
                                    <Link href="https://www.ktm.com/en-be/ktm-world/ride-ktm.html" className="headerNavLink headerNavLink--lvl2" target="_self">Ride KTM</Link>
                                  </li>
                                  <li>
                                    <Link href="https://www.ktm.com/en-be/ktm-world/ktm-adventure-rally.html" className="headerNavLink headerNavLink--lvl2" target="_self">KTM Adventure Rally</Link>
                                  </li>
                                  <li>
                                    <Link href="https://www.ktm.com/en-be/tech-guide.html" className="headerNavLink headerNavLink--lvl2" target="_self">KTM Tech Guide</Link>
                                  </li>
                                  <li>
                                    <Link href="https://www.ktm.com/en-be/ktm-world/ktm-magazine.html" className="headerNavLink headerNavLink--lvl2" target="_self">KTM MAGAZINE</Link>
                                  </li>
                                  <li>
                                    <Link href="https://www.ktm.com/en-be/ktm-world/news/ktm-orange-board.html" className="headerNavLink headerNavLink--lvl2" target="_self">ORANGE BOARD</Link>
                                  </li>
                                </ul>
                              </div>
                            </li>
                            <li className="js-has-items accordion" data-opened="false">
                              <span className="heading">Service</span>
                              <div className="content">
                                <ul className="submenu">
                                  <li>
                                    <Link href="https://www.ktm.com/en-be/service/warranty.html" className="headerNavLink headerNavLink--lvl2" target="_self">Warranty</Link>
                                  </li>
                                  <li>
                                    <Link href="https://www.ktm.com/en-be/service/manuals.html" className="headerNavLink headerNavLink--lvl2" target="_self">Manuals & Maintenance</Link>
                                  </li>
                                  <li>
                                    <Link href="https://www.ktm.com/en-be/service/spare-parts-finder.html" className="headerNavLink headerNavLink--lvl2" target="_self">Spare Parts Finder</Link>
                                  </li>
                                  <li>
                                    <Link href="https://www.ktm.com/en-be/service/tire-recommendation.html" className="headerNavLink headerNavLink--lvl2" target="_self">Tire recommendation</Link>
                                  </li>
                                  <li>
                                    <Link href="https://www.ktm.com/en-be/service/Service-and-safety-check.html" className="headerNavLink headerNavLink--lvl2" target="_self">Service & Safety Check</Link>
                                  </li>
                                  <li>
                                    <Link href="https://www.ktm.com/en-be/service/finance.html" className="headerNavLink headerNavLink--lvl2" target="_self">Finance</Link>
                                  </li>
                                  <li>
                                    <Link href="https://www.ktm.com/en-be/service/mobility-service.html" className="headerNavLink headerNavLink--lvl2" target="_self">Roadside Assistance</Link>
                                  </li>
                                  <li>
                                    <Link href="https://www.ktm.com/en-be/service/Safety.html" className="headerNavLink headerNavLink--lvl2" target="_self">Safety</Link>
                                  </li>
                                  <li>
                                    <Link href="https://www.ktm.com/en-be/service/Freeride-e-hotline.html" className="headerNavLink headerNavLink--lvl2" target="_self">Freeride E Hotline</Link>
                                  </li>
                                </ul>
                              </div>
                            </li>
                            <li data-opened="false">
                              <Link href="https://www.ktm.com/en-be/news.html#promotions" className="heading headerNavLink headerNavLink--lvl1" target="_self">Power Deals</Link>
                              <div className="content"></div>
                            </li>
                          </ul>
                        </nav>
                        <aside className="nav__aside nav__aside--hidden-text">
                          <nav className="nav__aside-links js-lang-nav">
                            <Link href="https://www.ktm.com/en-be/find-a-dealer.html" className="nav__aside-links--dealer-search" target="_self" data-label="Find a dealer"><span>Find a dealer</span></Link> <Link href="#" className="c-culture-switch__toggle js-lang-toggle nav__aside-links--culture-switch" data-label="Belgium"><span>Belgium</span></Link>
                            <section className="nav__aside-items">
                              <div className="c-culture-switch js-lang-items">
                                <div className="c-culture-switch__container container component-fullwidth--padded-lg">
                                  <article className="c-culture-switch__column">
                                    <section className="c-culture-switch__area">
                                      <ul className="c-culture-switch__list js-lang-list">
                                        <li>
                                          <Link href="https://www.ktm.com/en-int.languageswitch.html">International</Link>
                                        </li>
                                      </ul>
                                    </section>
                                    <section className="c-culture-switch__area">
                                      <div className="c-culture-switch__region-name">
                                        Europe
                                      </div>
                                      <ul className="c-culture-switch__list js-lang-list c-culture-switch__list--two-cols">
                                        <li>
                                          <Link href="https://www.ktm.com/de-at.languageswitch.html">Austria</Link>
                                        </li>
                                        <li>
                                          <Link href="https://www.ktm.com/en-be.languageswitch.html">Belgium (en)</Link>
                                        </li>
                                        <li>
                                          <Link href="https://www.ktm.com/fr-be.languageswitch.html">Belgium (fr)</Link>
                                        </li>
                                        <li>
                                          <Link href="https://www.ktm.com/en-hr.languageswitch.html">Croatia</Link>
                                        </li>
                                        <li>
                                          <Link href="https://www.ktm.com/en-cy.languageswitch.html">Cyprus</Link>
                                        </li>
                                        <li>
                                          <Link href="https://www.ktm.com/en-cz.languageswitch.html">Czech Republic</Link>
                                        </li>
                                        <li>
                                          <Link href="https://www.ktm.com/en-dk.languageswitch.html">Denmark</Link>
                                        </li>
                                        <li>
                                          <Link href="https://www.ktm.com/en-ee.languageswitch.html">Estonia</Link>
                                        </li>
                                        <li>
                                          <Link href="https://www.ktm.com/en-fi.languageswitch.html">Finland</Link>
                                        </li>
                                        <li>
                                          <Link href="https://www.ktm.com/fr-fr.languageswitch.html">France</Link>
                                        </li>
                                        <li>
                                          <Link href="https://www.ktm.com/de-de.languageswitch.html">Germany</Link>
                                        </li>
                                        <li>
                                          <Link href="https://www.ktm.com/en-gr.languageswitch.html">Greece</Link>
                                        </li>
                                        <li>
                                          <Link href="https://www.ktm.com/en-hu.languageswitch.html">Hungary</Link>
                                        </li>
                                        <li>
                                          <Link href="https://www.ktm.com/en-ie.languageswitch.html">Ireland</Link>
                                        </li>
                                        <li>
                                          <Link href="https://www.ktm.com/it-it.languageswitch.html">Italy</Link>
                                        </li>
                                        <li>
                                          <Link href="https://www.ktm.com/en-lv.languageswitch.html">Latvia</Link>
                                        </li>
                                        <li>
                                          <Link href="https://www.ktm.com/en-lt.languageswitch.html">Lithuania</Link>
                                        </li>
                                        <li>
                                          <Link href="https://www.ktm.com/fr-lu.languageswitch.html">Luxembourg</Link>
                                        </li>
                                        <li>
                                          <Link href="https://www.ktm.com/en-nl.languageswitch.html">Netherlands</Link>
                                        </li>
                                        <li>
                                          <Link href="https://www.ktm.com/en-no.languageswitch.html">Norway</Link>
                                        </li>
                                        <li>
                                          <Link href="https://www.ktm.com/en-pl.languageswitch.html">Poland</Link>
                                        </li>
                                        <li>
                                          <Link href="https://www.ktm.com/en-pt.languageswitch.html">Portugal</Link>
                                        </li>
                                        <li>
                                          <Link href="https://www.ktm.com/en-ro.languageswitch.html">Romania</Link>
                                        </li>
                                        <li>
                                          <Link href="https://www.ktm.com/en-ru.languageswitch.html">Russia</Link>
                                        </li>
                                        <li>
                                          <Link href="https://www.ktm.com/en-rs.languageswitch.html">Serbia</Link>
                                        </li>
                                        <li>
                                          <Link href="https://www.ktm.com/en-si.languageswitch.html">Slovenia</Link>
                                        </li>
                                        <li>
                                          <Link href="https://www.ktm.com/en-sk.languageswitch.html">Slovakia</Link>
                                        </li>
                                        <li>
                                          <Link href="https://www.ktm.com/es-es.languageswitch.html">Spain</Link>
                                        </li>
                                        <li>
                                          <Link href="https://www.ktm.com/en-se.languageswitch.html">Sweden</Link>
                                        </li>
                                        <li>
                                          <Link href="https://www.ktm.com/de-ch.languageswitch.html">Switzerland (de)</Link>
                                        </li>
                                        <li>
                                          <Link href="https://www.ktm.com/fr-ch.languageswitch.html">Switzerland (fr)</Link>
                                        </li>
                                        <li>
                                          <Link href="https://www.ktm.com/it-ch.languageswitch.html">Switzerland (it)</Link>
                                        </li>
                                        <li>
                                          <Link href="https://www.ktm.com/en-tr.languageswitch.html">Turkey</Link>
                                        </li>
                                        <li>
                                          <Link href="https://www.ktm.com/en-gb.languageswitch.html">United Kingdom</Link>
                                        </li>
                                      </ul>
                                    </section>
                                  </article>
                                  <article className="c-culture-switch__column">
                                    <section className="c-culture-switch__area">
                                      <div className="c-culture-switch__region-name">
                                        North America
                                      </div>
                                      <ul className="c-culture-switch__list js-lang-list">
                                        <li>
                                          <Link href="https://www.ktm.com/en-ca.languageswitch.html">Canada (en)</Link>
                                        </li>
                                        <li>
                                          <Link href="https://www.ktm.com/fr-ca.languageswitch.html">Canada (fr)</Link>
                                        </li>
                                        <li>
                                          <Link href="https://www.ktm.com/es-mx.languageswitch.html">Mexico</Link>
                                        </li>
                                        <li>
                                          <Link href="https://www.ktm.com/en-us.languageswitch.html">United States</Link>
                                        </li>
                                      </ul>
                                    </section>
                                    <section className="c-culture-switch__area">
                                      <div className="c-culture-switch__region-name">
                                        Middle East
                                      </div>
                                      <ul className="c-culture-switch__list js-lang-list c-culture-switch__list--two-cols">
                                        <li>
                                          <Link href="https://www.ktm.com/en-bh.languageswitch.html">Bahrain</Link>
                                        </li>
                                        <li>
                                          <Link href="https://www.ktm.com/en-jo.languageswitch.html">Jordan</Link>
                                        </li>
                                        <li>
                                          <Link href="https://www.ktm.com/en-kw.languageswitch.html">Kuwait</Link>
                                        </li>
                                        <li>
                                          <Link href="https://www.ktm.com/en-lb.languageswitch.html">Lebanon</Link>
                                        </li>
                                        <li>
                                          <Link href="https://www.ktm.com/en-qa.languageswitch.html">Qatar</Link>
                                        </li>
                                        <li>
                                          <Link href="https://www.ktm.com/en-sa.languageswitch.html">Saudi Arabia</Link>
                                        </li>
                                        <li>
                                          <Link href="https://www.ktm.com/en-ae.languageswitch.html">United Arab Emirates</Link>
                                        </li>
                                        <li>
                                          <Link href="https://www.ktm.com/en-iq.languageswitch.html">Iraq</Link>
                                        </li>
                                      </ul>
                                    </section>
                                  </article>
                                  <article className="c-culture-switch__column">
                                    <section className="c-culture-switch__area">
                                      <div className="c-culture-switch__region-name">
                                        Latin America
                                      </div>
                                      <ul className="c-culture-switch__list js-lang-list c-culture-switch__list--two-cols">
                                        <li>
                                          <Link href="https://www.ktm.com/es-ar.languageswitch.html">Argentina</Link>
                                        </li>
                                        <li>
                                          <Link href="https://www.ktm.com/es-bo.languageswitch.html">Bolivia</Link>
                                        </li>
                                        <li>
                                          <Link href="https://www.ktm.com/pt-br.languageswitch.html">Brazil</Link>
                                        </li>
                                        <li>
                                          <Link href="https://www.ktm.com/es-cl.languageswitch.html">Chile</Link>
                                        </li>
                                        <li>
                                          <Link href="https://www.ktm.com/es-co.languageswitch.html">Colombia</Link>
                                        </li>
                                        <li>
                                          <Link href="https://www.ktm.com/es-cr.languageswitch.html">Costa Rica</Link>
                                        </li>
                                        <li>
                                          <Link href="https://www.ktm.com/en-do.languageswitch.html">Dominican Republic</Link>
                                        </li>
                                        <li>
                                          <Link href="https://www.ktm.com/es-ec.languageswitch.html">Ecuador</Link>
                                        </li>
                                        <li>
                                          <Link href="https://www.ktm.com/es-gt.languageswitch.html">Guatemala</Link>
                                        </li>
                                        <li>
                                          <Link href="https://www.ktm.com/es-ni.languageswitch.html">Nicaragua</Link>
                                        </li>
                                        <li>
                                          <Link href="https://www.ktm.com/es-pa.languageswitch.html">Panama</Link>
                                        </li>
                                        <li>
                                          <Link href="https://www.ktm.com/es-py.languageswitch.html">Paraguay</Link>
                                        </li>
                                        <li>
                                          <Link href="https://www.ktm.com/es-pe.languageswitch.html">Peru</Link>
                                        </li>
                                        <li>
                                          <Link href="https://www.ktm.com/es-uy.languageswitch.html">Uruguay</Link>
                                        </li>
                                        <li>
                                          <Link href="https://www.ktm.com/es-ve.languageswitch.html">Venezuela</Link>
                                        </li>
                                      </ul>
                                    </section>
                                    <section className="c-culture-switch__area">
                                      <div className="c-culture-switch__region-name">
                                        Asia
                                      </div>
                                      <ul className="c-culture-switch__list js-lang-list c-culture-switch__list--two-cols">
                                        <li>
                                          <Link href="https://www.ktm.com/en-bd.languageswitch.html">Bangladesh</Link>
                                        </li>
                                        <li>
                                          <Link href="https://www.ktm.com/en-kh.languageswitch.html">Cambodia</Link>
                                        </li>
                                        <li>
                                          <Link href="https://www.ktm.com/zh-cn.languageswitch.html">China</Link>
                                        </li>
                                        <li>
                                          <Link href="https://www.ktm.com/fr-pf.languageswitch.html">French Polynesia (FR)</Link>
                                        </li>
                                        <li>
                                          <Link href="https://www.ktm.com/en-hk.languageswitch.html">Hong Kong (CN)</Link>
                                        </li>
                                        <li>
                                          <Link href="https://www.ktm.com/en-in.languageswitch.html">India</Link>
                                        </li>
                                        <li>
                                          <Link href="https://www.ktm.com/en-id.languageswitch.html">Indonesia</Link>
                                        </li>
                                        <li>
                                          <Link href="https://www.ktm.com/ja-jp.languageswitch.html">Japan</Link>
                                        </li>
                                        <li>
                                          <Link href="https://www.ktm.com/en-my.languageswitch.html">Malaysia</Link>
                                        </li>
                                        <li>
                                          <Link href="https://www.ktm.com/en-mm.languageswitch.html">Myanmar</Link>
                                        </li>
                                        <li>
                                          <Link href="https://www.ktm.com/en-np.languageswitch.html">Nepal</Link>
                                        </li>
                                        <li>
                                          <Link href="https://www.ktm.com/fr-nc.languageswitch.html">New Caledonia (FR)</Link>
                                        </li>
                                        <li>
                                          <Link href="https://www.ktm.com/en-ph.languageswitch.html">Philippines</Link>
                                        </li>
                                        <li>
                                          <Link href="https://www.ktm.com/en-sg.languageswitch.html">Singapore</Link>
                                        </li>
                                        <li>
                                          <Link href="https://www.ktm.com/en-kr.languageswitch.html">South Korea</Link>
                                        </li>
                                        <li>
                                          <Link href="https://www.ktm.com/en-lk.languageswitch.html">Sri Lanka</Link>
                                        </li>
                                        <li>
                                          <Link href="https://www.ktm.com/en-tw.languageswitch.html">Taiwan Region (en)</Link>
                                        </li>
                                        <li>
                                          <Link href="https://www.ktm.com/zh-tw.languageswitch.html">Taiwan Region (zh)</Link>
                                        </li>
                                        <li>
                                          <Link href="https://www.ktm.com/en-th.languageswitch.html">Thailand</Link>
                                        </li>
                                        <li>
                                          <Link href="https://www.ktm.com/en-vn.languageswitch.html">Vietnam</Link>
                                        </li>
                                      </ul>
                                    </section>
                                  </article>
                                  <article className="c-culture-switch__column">
                                    <section className="c-culture-switch__area">
                                      <div className="c-culture-switch__region-name">
                                        Oceania
                                      </div>
                                      <ul className="c-culture-switch__list js-lang-list">
                                        <li>
                                          <Link href="https://www.ktm.com/en-au.languageswitch.html">Australia</Link>
                                        </li>
                                        <li>
                                          <Link href="https://www.ktm.com/en-nz.languageswitch.html">New Zealand</Link>
                                        </li>
                                      </ul>
                                    </section>
                                    <section className="c-culture-switch__area">
                                      <div className="c-culture-switch__region-name">
                                        Africa
                                      </div>
                                      <ul className="c-culture-switch__list js-lang-list c-culture-switch__list--two-cols">
                                        <li>
                                          <Link href="https://www.ktm.com/fr-bj.languageswitch.html">Benin</Link>
                                        </li>
                                        <li>
                                          <Link href="https://www.ktm.com/en-eg.languageswitch.html">Egypt</Link>
                                        </li>
                                        <li>
                                          <Link href="https://www.ktm.com/en-ke.languageswitch.html">Kenya</Link>
                                        </li>
                                        <li>
                                          <Link href="https://www.ktm.com/fr-mg.languageswitch.html">Madagascar</Link>
                                        </li>
                                        <li>
                                          <Link href="https://www.ktm.com/fr-mu.languageswitch.html">Mauritius</Link>
                                        </li>
                                        <li>
                                          <Link href="https://www.ktm.com/fr-ma.languageswitch.html">Morocco</Link>
                                        </li>
                                        <li>
                                          <Link href="https://www.ktm.com/en-ng.languageswitch.html">Nigeria</Link>
                                        </li>
                                        <li>
                                          <Link href="https://www.ktm.com/en-sc.languageswitch.html">Seychelles</Link>
                                        </li>
                                        <li>
                                          <Link href="https://www.ktm.com/en-za.languageswitch.html">South Africa</Link>
                                        </li>
                                        <li>
                                          <Link href="https://www.ktm.com/fr-tg.languageswitch.html">Togo</Link>
                                        </li>
                                      </ul>
                                    </section>
                                  </article>
                                </div>
                              </div>
                            </section><Link href="http://my.ktm.com/be/en/login" className="nav__aside-links--myhub" target="_blank" rel="noopener noreferrer" data-label="My.KTM"><span>My.KTM</span></Link>
                          </nav><Link href="https://www.ktm.com/en-be.html" className="nav__logo"><Image src="https://www.ktm.com/content/dam/websites/ktm-com/language-masters/en/logo/37860_KTM_LogoPodium_orange_RGB.jpg" alt="KTM Main Page" sizes="100vw" width={0} height={0} style={{ width: '100%', height: 'auto' }} unoptimized /></Link>
                        </aside>
                      </div>
                    </div>
                  </header><input type="hidden" className="js-data-country" data-country="be" />
                </div>
                <div className="stageSlider aem-GridColumn aem-GridColumn--default--12">
                  <div className="c-stage-slider component-fullwidth stageSlider--publish js-stageSlider stageSlider--full-height" data-auto-play="true" data-auto-play-interval-ms="6000">
                    <div className="glide glide--ltr glide--slider glide--swipeable">
                      <div className="glide__track" data-glide-el="track">
                        <div id="stageSlider-7fb3710540" className="cmp-container glide__slides" role="list" style={{ transition: 'transform 400ms cubic-bezier(0.165, 0.84, 0.44, 1)', width: '6770px', transform: 'translate3d(-5416px, 0px, 0px)' }}>
                          <ul>
                            <li className="c-stage-image glide__slide" style={{ width: '1354px', marginRight: '0px' }}>
                               
                               
                              
                              <div>
                                <section className="glide__content">
                                  <div className="glide__content-image">
                                    <div id="dynamicmedia_57174900" data-current-page="/content/websites/ktm-com/europe/be/en" data-page-locale="en_be" data-asset-path="ktm/KTM-enduro-300-exc-hardenduro-homepage-header-1" data-asset-name="KTM-enduro-300-exc-hardenduro-homepage-header.jpg" data-asset-type="image" data-viewer-path="https://s7g10.scene7.com/s7viewers/" data-imageserver="https://s7g10.scene7.com/is/image/" data-videoserver="https://s7g10.scene7.com/is/content/" data-contenturl="https://s7g10.scene7.com/is/content/" data-config="||" data-wcmdisabled="" data-dms7="" data-mode="showOriginalImage" data-linktarget="_self" data-title="Explore More" data-alt="KTM-enduro-300-exc-hardenduro-homepage-header" className="s7dm-dynamic-media-ktm">
                                      <div className="s7responsiveContainer"><Image src="https://s7g10.scene7.com/is/image/ktm/KTM-enduro-300-exc-hardenduro-homepage-header-1?wid=2800&dpr=off" alt="KTM-enduro-300-exc-hardenduro-homepage-header" className="fluidimage" sizes="100vw" width={0} height={0} id="dynamicmedia_57174900_resp" data-src="https://s7g10.scene7.com/is/image/ktm/KTM-enduro-300-exc-hardenduro-homepage-header-1" data-mode="showOriginalImage" data-enablehd="always" style={{ width: '100%', height: 'auto' }} unoptimized /></div>
                                    </div>
                                  </div>
                                  <div className="glide__content-container glide__content-container--left component component-fullwidth--padded-lg">
                                    <div className="glide__content-text">
                                      <div className="glide__content-headline">
                                        <p className="glide__content-headline--sub glide__content-headline--secondary">BUILT TO BEAT THE BEST</p>
                                        <h1 className="glide__content-headline--main glide__content-headline--secondary">2026 KTM 300 EXC HARDENDURO</h1>
                                      </div>
                                      <div className="glide__content-buttons glide__content-buttons--secondary js-stage-auth-image">
                                        <div className="c-btn">
                                          <Link href="https://www.ktm.com/en-be/models/enduro/2-stroke/2026-ktm-300-exchardenduro.html" className="c-btn__link c-btn__link--primary-dark" target="_self"  draggable="true">Explore More</Link>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </section>
                              </div>
                            </li>
                            <li className="c-stage-image glide__slide" style={{ width: '1354px', marginLeft: '0px', marginRight: '0px' }}>
                              <div>
                                <section className="glide__content">
                                  <div className="glide__content-image">
                                    <div id="dynamicmedia_65176560" data-current-page="/content/websites/ktm-com/europe/be/en" data-page-locale="en_be" data-asset-path="ktm/KTM-motorsports-daniel-sanders-rally" data-asset-name="KTM-motorsports-daniel-sanders-rally.jpg" data-asset-type="image" data-viewer-path="https://s7g10.scene7.com/s7viewers/" data-imageserver="https://s7g10.scene7.com/is/image/" data-videoserver="https://s7g10.scene7.com/is/content/" data-contenturl="https://s7g10.scene7.com/is/content/" data-config="||" data-wcmdisabled="" data-dms7="" data-mode="showOriginalImage" data-linktarget="_self" data-title="Find Out More" data-alt="KTM-motorsports-daniel-sanders-rally" className="s7dm-dynamic-media-ktm">
                                      <div className="s7responsiveContainer"><Image src="https://s7g10.scene7.com/is/image/ktm/KTM-motorsports-daniel-sanders-rally?wid=2800&dpr=off" alt="KTM-motorsports-daniel-sanders-rally" className="fluidimage" sizes="100vw" width={0} height={0} id="dynamicmedia_65176560_resp" data-src="https://s7g10.scene7.com/is/image/ktm/KTM-motorsports-daniel-sanders-rally" data-mode="showOriginalImage" data-enablehd="always" style={{ width: '100%', height: 'auto' }} unoptimized /></div>
                                    </div>
                                  </div>
                                  <div className="glide__content-container glide__content-container--left component component-fullwidth--padded-lg">
                                    <div className="glide__content-text">
                                      <div className="glide__content-headline">
                                        <p className="glide__content-headline--sub glide__content-headline--secondary">DANIEL SANDERS</p>
                                        <p className="glide__content-headline--main glide__content-headline--secondary">2025 FIM WORLD RALLY-RAID CHAMPION</p>
                                      </div>
                                      <div className="glide__content-buttons glide__content-buttons--secondary js-stage-auth-image">
                                        <div className="c-btn">
                                          <Link href="https://www.ktm.com/en-be/racing/racing-news/daniel-sanders-crowned-2025-world-rally-raid-champion-with-victo.html" className="c-btn__link c-btn__link--primary-dark" target="_self"  draggable="true">Find Out More</Link>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </section>
                              </div>
                            </li>
                            <li className="c-stage-image glide__slide" style={{ width: '1354px', marginLeft: '0px', marginRight: '0px' }}>
                              <div>
                                <section className="glide__content">
                                  <div className="glide__content-image">
                                    <div id="dynamicmedia_23816804" data-current-page="/content/websites/ktm-com/europe/be/en" data-page-locale="en_be" data-asset-path="ktm/KTM-sports-tourer--890-smt-homepage-header6" data-asset-name="KTM-sports-tourer--890-smt-homepage-header6.jpg" data-asset-type="image" data-viewer-path="https://s7g10.scene7.com/s7viewers/" data-imageserver="https://s7g10.scene7.com/is/image/" data-videoserver="https://s7g10.scene7.com/is/content/" data-contenturl="https://s7g10.scene7.com/is/content/" data-config="||" data-wcmdisabled="" data-dms7="" data-mode="smartcrop" data-aspectratio="true" data-linktarget="_self" data-title="Explore More" data-alt="KTM-sports-tourer--890-smt-homepage-header6" className="s7dm-dynamic-media-ktm">
                                      <div className="s7responsiveContainer"><Image src="https://s7g10.scene7.com/is/image/ktm/KTM-sports-tourer--890-smt-homepage-header6:XLarge?wid=2997&hei=1712&dpr=off" alt="KTM-sports-tourer--890-smt-homepage-header6" className="fluidimage" sizes="100vw" width={0} height={0} id="dynamicmedia_23816804_resp" data-src="https://s7g10.scene7.com/is/image/ktm/KTM-sports-tourer--890-smt-homepage-header6" data-mode="smartcrop" data-enablehd="always" data-aspectratio="true" style={{ width: '100%', height: 'auto' }} unoptimized /></div>
                                    </div>
                                  </div>
                                  <div className="glide__content-container glide__content-container--center component component-fullwidth--padded-lg">
                                    <div className="glide__content-text">
                                      <div className="glide__content-headline">
                                        <p className="glide__content-headline--sub glide__content-headline--secondary">The Long-range Supermoto Weapon</p>
                                        <p className="glide__content-headline--main glide__content-headline--secondary">ktm 890 smt</p>
                                      </div>
                                      <div className="glide__content-buttons glide__content-buttons--secondary js-stage-auth-image">
                                        <div className="c-btn">
                                          <Link href="https://www.ktm.com/en-be/models/sports-tourer/2024-ktm-890-smt.html" className="c-btn__link c-btn__link--primary-dark" target="_self"  draggable="true">Explore More</Link>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </section>
                              </div>
                            </li>
                            <li className="c-stage-image glide__slide" style={{ width: '1354px', marginLeft: '0px', marginRight: '0px' }}>
                              <div>
                                <section className="glide__content">
                                  <div className="glide__content-image">
                                    <div id="dynamicmedia_56733556" data-current-page="/content/websites/ktm-com/europe/be/en" data-page-locale="en_be" data-asset-path="ktm/KTM-motorsports-josep-garcia-fim-champion" data-asset-name="KTM-motorsports-josep-garcia-fim-champion.jpg" data-asset-type="image" data-viewer-path="https://s7g10.scene7.com/s7viewers/" data-imageserver="https://s7g10.scene7.com/is/image/" data-videoserver="https://s7g10.scene7.com/is/content/" data-contenturl="https://s7g10.scene7.com/is/content/" data-config="||" data-wcmdisabled="" data-dms7="" data-mode="showOriginalImage" data-linktarget="_self" data-title="Find Out More" data-alt="KTM-motorsports-josep-garcia-fim-champion" className="s7dm-dynamic-media-ktm">
                                      <div className="s7responsiveContainer"><Image src="https://s7g10.scene7.com/is/image/ktm/KTM-motorsports-josep-garcia-fim-champion?wid=2800&dpr=off" alt="KTM-motorsports-josep-garcia-fim-champion" className="fluidimage" sizes="100vw" width={0} height={0} id="dynamicmedia_56733556_resp" data-src="https://s7g10.scene7.com/is/image/ktm/KTM-motorsports-josep-garcia-fim-champion" data-mode="showOriginalImage" data-enablehd="always" style={{ width: '100%', height: 'auto' }} unoptimized /></div>
                                    </div>
                                  </div>
                                  <div className="glide__content-container glide__content-container--left component component-fullwidth--padded-lg">
                                    <div className="glide__content-text">
                                      <div className="glide__content-headline">
                                        <p className="glide__content-headline--sub glide__content-headline--secondary">JOSEP GARCIA</p>
                                        <p className="glide__content-headline--main glide__content-headline--secondary">2025 FIM ENDURO1 WORLD CHAMPION</p>
                                      </div>
                                      <div className="glide__content-buttons glide__content-buttons--secondary js-stage-auth-image">
                                        <div className="c-btn">
                                          <Link href="https://www.ktm.com/en-be/racing/racing-news/josep-garcia-claims-enduro1-world-title-at-endurogp-of-italy.html" className="c-btn__link c-btn__link--primary-dark" target="_self"  draggable="true">Find Out More</Link>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </section>
                              </div>
                            </li>
                            <li className="c-stage-image glide__slide glide__slide--active" style={{ width: '1354px', marginLeft: '0px' }}>
                              <div>
                                <section className="glide__content">
                                  <div className="glide__content-image">
                                    <div id="dynamicmedia_30984033" data-current-page="/content/websites/ktm-com/europe/be/en" data-page-locale="en_be" data-asset-path="ktm/KTM-powerwear-gfx-homepage-header6" data-asset-name="KTM-powerwear-gfx-homepage-header6.jpg" data-asset-type="image" data-viewer-path="https://s7g10.scene7.com/s7viewers/" data-imageserver="https://s7g10.scene7.com/is/image/" data-videoserver="https://s7g10.scene7.com/is/content/" data-contenturl="https://s7g10.scene7.com/is/content/" data-config="||" data-wcmdisabled="" data-dms7="" data-mode="showOriginalImage" data-aspectratio="true" data-linktarget="_self" data-title="Explore More" data-alt="KTM-powerwear-gfx-homepage-header6" className="s7dm-dynamic-media-ktm">
                                      <div className="s7responsiveContainer"><Image src="https://s7g10.scene7.com/is/image/ktm/KTM-powerwear-gfx-homepage-header6?wid=2800&dpr=off" alt="KTM-powerwear-gfx-homepage-header6" className="fluidimage" sizes="100vw" width={0} height={0} id="dynamicmedia_30984033_resp" data-src="https://s7g10.scene7.com/is/image/ktm/KTM-powerwear-gfx-homepage-header6" data-mode="showOriginalImage" data-enablehd="always" data-aspectratio="true" style={{ width: '100%', height: 'auto' }} unoptimized /></div>
                                    </div>
                                  </div>
                                  <div className="glide__content-container glide__content-container--center component component-fullwidth--padded-lg">
                                    <div className="glide__content-text">
                                      <div className="glide__content-headline">
                                        <p className="glide__content-headline--sub glide__content-headline--secondary">ADVANCED FABRICS. CARBON STRENGTH. PURE KTM STYLE</p>
                                        <p className="glide__content-headline--main glide__content-headline--secondary">THE ALL-NEW 2025 KTM POWERWEAR</p>
                                      </div>
                                      <div className="glide__content-buttons glide__content-buttons--secondary js-stage-auth-image">
                                        <div className="c-btn">
                                          <Link href="https://www.ktm.com/en-be/parts---wear/powerwear/products.html" className="c-btn__link c-btn__link--primary-dark" target="_self"  draggable="true">Explore More</Link>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </section>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="glide__scroll-action">
                        <p>Scroll down</p>
                      </div>
                      <div className="glide__bullets" data-glide-el="controls[nav]"></div>
                    </div>
                  </div>
                </div>
                <div className="iconList aem-GridColumn aem-GridColumn--default--12">
                  <div className="component c-icon-list-container">
                    <div className="c-icon-list-wrapper">
                      <div className="c-icon-list container">
                        <div className="c-icon-list__item">
                          <Link href="https://www.ktm.com/en-be/find-a-dealer.html" className="c-icon-list-item__content" target="_self"><svg id="iconbar-dealer-search" className="iconbar-svg-fill" width="36" height="42" viewBox="0 0 36 42" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M16.4 23c-4.6 0-8.3-3.7-8.3-8.3 0-4.6 3.7-8.3 8.3-8.3 4.6 0 8.3 3.7 8.3 8.3 0 1.9-.7 3.8-1.9 5.3-1.5 1.9-3.9 3-6.4 3zm0-14.2c-3.2 0-5.8 2.6-5.8 5.8s2.6 5.8 5.8 5.8 5.8-2.6 5.8-5.8c0-1.7-.8-3.4-2.1-4.5-1-.8-2.3-1.3-3.7-1.3z"></path>
                          <path fill-rule="evenodd" clip-rule="evenodd" d="m16.6 40.6-.8-.8c-.3-.3-8-7.7-10.5-10.4-6.6-7.3-7.1-17.1-1.1-23.8 6-6.8 16.4-7.4 23.2-1.4l.2.2c7.1 6.3 6.5 17.5 1.5 23.6-3.1 3.7-11.3 11.5-11.6 11.8l-.9.8zm-.2-38.1c-4 0-7.7 1.7-10.3 4.7C1 13 1.4 21.4 7.1 27.7c2 2.2 7.4 7.4 9.5 9.5 2.2-2.1 8.1-7.9 10.5-10.8 4.3-5.3 4.7-15-1.2-20.2-2.6-2.3-6-3.6-9.5-3.7z"></path></svg>
                          <h6 className="c-icon-list-item__title">DEALER SEARCH</h6></Link>
                        </div>
                        <div className="c-icon-list__item">
                          <Link href="https://configurator.ktm.com/models/" className="c-icon-list-item__content" target="_self"><svg id="iconbar-configurator" fill="none" className="iconbar-svg-fill" width="41" height="40" viewBox="0 0 41 40" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M25.1425 19.7297C25.533 19.3391 26.1662 19.3391 26.5567 19.7297L36.9734 30.1463C39.0889 32.2619 39.0889 35.695 36.9734 37.8105C34.8579 39.9261 31.4247 39.9261 29.3092 37.8105L18.8925 27.3939C18.502 27.0034 18.502 26.3702 18.8925 25.9797C19.283 25.5891 19.9162 25.5891 20.3067 25.9797L30.7234 36.3963C32.0579 37.7308 34.2247 37.7308 35.5592 36.3963C36.8936 35.0619 36.8936 32.895 35.5592 31.5605L25.1425 21.1439C24.752 20.7534 24.752 20.1202 25.1425 19.7297Z"></path>
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M31.532 2.2545C28.7082 1.55828 25.6244 2.28405 23.4313 4.4772C21.1045 6.804 20.4302 10.1336 21.3518 13.0914C21.4624 13.4462 21.367 13.8331 21.1042 14.096L3.64004 31.5601C2.27597 32.9263 2.30544 35.1572 3.73058 36.484C5.06514 37.7281 7.21436 37.6574 8.55041 36.3213L25.94 18.9317C26.2028 18.6689 26.5897 18.5735 26.9446 18.6841C29.9023 19.6057 33.2319 18.9314 35.5587 16.6047C37.7523 14.4111 38.4779 11.3267 37.7811 8.50242L32.8063 13.4772C32.4158 13.8677 31.7826 13.8677 31.3921 13.4772L26.5587 8.64387C26.1683 8.2534 26.1682 7.62034 26.5586 7.22979L31.532 2.2545ZM32.0482 1.73812C32.0481 1.73817 32.0482 1.73808 32.0482 1.73812V1.73812ZM38.0159 8.14186L38.5179 7.61802L37.9845 8.14813C37.995 8.14633 38.0055 8.14424 38.0159 8.14186ZM39.2213 6.90714C39.3917 7.07426 39.5172 7.28431 39.5837 7.5135C40.6592 11.1065 39.8269 15.1649 36.9729 18.0189C34.2432 20.7486 30.4123 21.6276 26.9407 20.7594L9.96462 37.7355C7.91316 39.787 4.53691 39.97 2.3673 37.9474C0.109721 35.8451 0.0646302 32.3097 2.22499 30.1467L19.2765 13.0952C18.4083 9.62367 19.2873 5.79277 22.0171 3.06299C24.8726 0.207485 28.9337 -0.624173 32.5281 0.45392L32.5391 0.45722C32.735 0.518434 32.9485 0.630368 33.1302 0.816034L33.4625 1.14841C34.0156 1.70143 34.0156 2.59918 33.4625 3.1522L28.6799 7.93663L32.0992 11.3559L36.8837 6.57132C37.4368 6.0183 38.3345 6.0183 38.8875 6.57132L38.8897 6.5735L39.2213 6.90714Z"></path>
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M3.8592 0.942237C3.12412 0.697271 2.31572 0.889558 1.76934 1.43594L3.8592 0.942237ZM3.8592 0.942237L8.07323 2.34622C9.33508 2.76607 10.1827 3.94734 10.1827 5.27222V10.0201C10.1827 10.5724 9.73498 11.0201 9.18269 11.0201H4.43478C3.10723 11.0201 1.92863 10.1725 1.50896 8.91122L0.104844 4.69678C0.104828 4.69673 0.104859 4.69683 0.104844 4.69678C-0.140122 3.9617 0.0521187 3.15316 0.598503 2.60678L1.76934 1.43594M2.00226 4.06446L3.40642 8.27905C3.55358 8.72161 3.96669 9.02013 4.43478 9.02013H8.18269V5.27222C8.18269 4.80563 7.88417 4.39102 7.44216 4.24405L3.22702 2.8397C3.21213 2.83473 3.19546 2.83824 3.18355 2.85016L2.01272 4.02099C2.0008 4.0329 1.99729 4.04957 2.00226 4.06446Z"></path>
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M8.48625 9.31291C8.87678 8.92239 9.50994 8.92239 9.90047 9.31291L17.1921 16.6046C17.5827 16.9951 17.5827 17.6283 17.1921 18.0188C16.8016 18.4093 16.1684 18.4093 15.7779 18.0188L8.48625 10.7271C8.09573 10.3366 8.09573 9.70344 8.48625 9.31291Z"></path></svg>
                          <h6 className="c-icon-list-item__title">CONFIGURATOR</h6></Link>
                        </div>
                        <div className="c-icon-list__item">
                          <Link href="https://testride.ktm.com/" className="c-icon-list-item__content" target="_self"><svg id="iconbar-testride" fill="none" className="iconbar-svg-fill" width="36" height="40" viewBox="0 0 36 40" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M16.691 1.95649C11.5243 -0.33979 5.57316 -0.0392357 0.664188 2.76589C0.330372 2.95665 0.148205 3.31064 0.160765 3.66993V28.7617C0.159955 28.7849 0.159951 28.8082 0.160765 28.8315V38.2704C0.160765 38.8227 0.608481 39.2704 1.16077 39.2704C1.71305 39.2704 2.16077 38.8227 2.16077 38.2704V29.3878C6.41604 27.1576 11.4693 26.9859 15.8787 28.9456L19.316 30.4734C24.4826 32.7696 30.4338 32.4691 35.3428 29.6639C35.6543 29.4859 35.8466 29.1545 35.8466 28.7957V3.63414C35.8466 3.27767 35.6569 2.94815 35.3485 2.76923C35.0402 2.5903 34.66 2.58903 34.3505 2.76589C29.9942 5.25519 24.7131 5.52191 20.1283 3.48418L16.691 1.95649ZM2.16077 27.1636C6.75128 25.0882 12.0391 25.0505 16.6909 27.118L16.2848 28.0318L16.6909 27.118L20.1282 28.6457C24.5377 30.6055 29.5912 30.4338 33.8466 28.2033V5.26598C29.256 7.34163 23.968 7.37935 19.316 5.31181L15.8787 3.78411C11.4693 1.8244 6.41605 1.99605 2.16077 4.22626V27.1636Z"></path></svg>
                          <h6 className="c-icon-list-item__title">BOOK A TEST RIDE</h6></Link>
                        </div>
                        <div className="c-icon-list__item">
                          <Link href="https://www.ktm.com/en-be/service/spare-parts-finder.html" className="c-icon-list-item__content" target="_self"><svg id="iconbar-spareparts-finder" fill="none" className="iconbar-svg-fill" width="42" height="38" viewBox="0 0 42 38" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M13.4421 1.72519C12.9265 1.72519 12.5076 2.14408 12.5076 2.65967V4.45674C12.5076 4.97233 12.9265 5.39122 13.4421 5.39122H17.0353L17.0363 5.39122L17.0372 5.39122H24.2225L24.2234 5.39122L24.2243 5.39122H27.8187C28.3343 5.39122 28.7532 4.97233 28.7532 4.45674V2.65967C28.7532 2.14408 28.3343 1.72519 27.8187 1.72519H13.4421ZM17.8989 7.11641H23.3608V12.0156L17.8989 11.3328V7.11641ZM25.086 7.11641V12.2312L27.9263 12.5863C28.3991 12.6454 28.7344 13.0765 28.6753 13.5492C28.6162 14.0219 28.1851 14.3572 27.7124 14.2981L25.086 13.9698V17.6224L27.9263 17.9775C28.3991 18.0366 28.7344 18.4677 28.6753 18.9404C28.6162 19.4131 28.1851 19.7484 27.7124 19.6894L25.086 19.3611V23.5048C26.1316 23.8631 26.8837 24.8549 26.8837 26.0216V27.8186C26.8837 29.287 25.6924 30.4783 24.224 30.4783H24.1525C25.512 32.2266 25.3884 34.7547 23.7818 36.3612C22.0413 38.1017 19.2195 38.1017 17.479 36.3612C15.8724 34.7547 15.7488 32.2266 17.1083 30.4783H17.0357C15.5673 30.4783 14.376 29.287 14.376 27.8186V26.0216C14.376 24.8549 15.1281 23.8631 16.1737 23.5048V18.247L13.3358 17.8923C12.863 17.8332 12.5277 17.4021 12.5868 16.9294C12.6459 16.4566 13.077 16.1213 13.5498 16.1804L16.1737 16.5084V12.8558L13.3358 12.5011C12.863 12.442 12.5277 12.0109 12.5868 11.5381C12.6459 11.0654 13.077 10.7301 13.5498 10.7892L16.1737 11.1172V7.11641H13.4421C11.9737 7.11641 10.7824 5.92512 10.7824 4.45674V2.65967C10.7824 1.19129 11.9737 0 13.4421 0H27.8187C29.2871 0 30.4784 1.19129 30.4784 2.65967V4.45674C30.4784 5.92512 29.2871 7.11641 27.8187 7.11641H25.086ZM17.8989 18.4627V23.3619H23.3608V19.1454L17.8989 18.4627ZM23.3608 17.4068L17.8989 16.7241V13.0714L23.3608 13.7542V17.4068ZM20.6281 30.4783C19.9298 30.4789 19.2317 30.7456 18.6989 31.2783C17.6322 32.3451 17.6322 34.0746 18.6989 35.1413C19.7656 36.2081 21.4952 36.2081 22.5619 35.1413C23.6286 34.0746 23.6286 32.3451 22.5619 31.2783C22.0291 30.7456 21.331 30.4789 20.6327 30.4783H20.6281ZM24.2234 25.0871L24.2124 25.0871H17.0473L17.0363 25.0871L17.0281 25.0871C16.516 25.0912 16.1012 25.5085 16.1012 26.0216V27.8186C16.1012 28.3342 16.5201 28.7531 17.0357 28.7531H24.224C24.7396 28.7531 25.1585 28.3342 25.1585 27.8186V26.0216C25.1585 25.5085 24.7437 25.0912 24.2316 25.0871L24.2234 25.0871ZM4.56562 8.15984C4.90249 7.82298 5.44865 7.82298 5.78552 8.15984L6.86376 9.23808C7.20063 9.57495 7.20063 10.1211 6.86376 10.458C6.5269 10.7948 5.98073 10.7948 5.64387 10.458L4.56562 9.37973C4.22876 9.04287 4.22876 8.49671 4.56562 8.15984ZM6.86376 24.8346C7.20063 24.4978 7.20063 23.9516 6.86376 23.6147C6.5269 23.2779 5.98073 23.2779 5.64387 23.6147L4.56562 24.693C4.22876 25.0299 4.22876 25.576 4.56562 25.9129C4.90249 26.2497 5.44865 26.2497 5.78552 25.9129L6.86376 24.8346ZM0 17.0363C0 16.5599 0.386197 16.1737 0.862595 16.1737H2.65967C3.13607 16.1737 3.52226 16.5599 3.52226 17.0363C3.52226 17.5127 3.13607 17.8989 2.65967 17.8989H0.862595C0.386197 17.8989 0 17.5127 0 17.0363ZM35.6158 23.6147C35.2789 23.2779 34.7328 23.2779 34.3959 23.6147C34.0591 23.9516 34.0591 24.4978 34.3959 24.8346L35.4742 25.9129C35.811 26.2497 36.3572 26.2497 36.6941 25.9129C37.0309 25.576 37.0309 25.0299 36.6941 24.693L35.6158 23.6147ZM36.6941 8.15984C37.0309 8.49671 37.0309 9.04287 36.6941 9.37973L35.6158 10.458C35.2789 10.7948 34.7328 10.7948 34.3959 10.458C34.0591 10.1211 34.0591 9.57495 34.3959 9.23808L35.4742 8.15984C35.811 7.82298 36.3572 7.82298 36.6941 8.15984ZM38.6011 16.1737C38.1247 16.1737 37.7385 16.5599 37.7385 17.0363C37.7385 17.5127 38.1247 17.8989 38.6011 17.8989H40.3982C40.8746 17.8989 41.2608 17.5127 41.2608 17.0363C41.2608 16.5599 40.8746 16.1737 40.3982 16.1737H38.6011Z"></path></svg>
                          <h6 className="c-icon-list-item__title">SPARE PARTS FINDER</h6></Link>
                        </div>
                        <div className="c-icon-list__item">
                          <Link href="https://www.ktm.com/en-be/news.html#promotions" className="c-icon-list-item__content" target="_self"><svg id="iconbar-promotions" className="iconbar-svg-stroke" width="42" height="42" viewBox="0 0 42 42" xmlns="http://www.w3.org/2000/svg">
                          <path fill="transparent" d="M32.396 9.604L31.13 4.164L25.372 4.676L21.008 1L16.658 4.676L10.886 4.164L9.604 9.604L4.164 10.87L4.676 16.628L1 20.992L4.676 25.342L4.164 31.114L9.604 32.396L10.87 37.836L16.628 37.324L20.992 41L25.342 37.324L31.114 37.836L32.396 32.396L37.836 31.13L37.324 25.372L41 21.008L37.324 16.658L37.836 10.886L32.396 9.604Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                          <path d="M15 27L27 15" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                          <path d="M15.498 15C15.222 15 14.998 15.224 15 15.5C15 15.776 15.224 16 15.5 16C15.776 16 16 15.776 16 15.5C16 15.224 15.776 15 15.498 15" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                          <path d="M26.498 26C26.222 26 25.998 26.224 26 26.5C26 26.776 26.224 27 26.5 27C26.776 27 27 26.776 27 26.5C27 26.224 26.776 26 26.498 26" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                          <h6 className="c-icon-list-item__title">PROMOTIONS</h6></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="responsivegrid-1-column responsivegrid aem-GridColumn aem-GridColumn--default--12">
                  <div className="container">
                    <div className="aem-Grid aem-Grid--12 aem-Grid--default--12">
                      <div className="htmlSourceCode aem-GridColumn aem-GridColumn--default--12">
                        <div className="component">
                          <h2 style={{ textAlign: 'center' }}>RECENTLY LAUNCHED</h2>
                        </div>
                      </div>
                      <div className="modelList aem-GridColumn--default--none aem-GridColumn aem-GridColumn--default--12 aem-GridColumn--offset--default--0">
                        <div className="c-model-list component">
                          <div className="c-model-list__section-container">
                            <section className="c-model-list__model-section">
                              <div className="c-model-list__row">
                                <article className="c-model-list__item">
                                  <Link href="https://www.ktm.com/en-be/models/enduro/4-stroke/2026-ktm-450-excf6days.html" className="c-model-list__item__info">
                                  <figure className="c-model-list__image">
                                    <Image src="https://azwecdnepstoragewebsiteuploads.azureedge.net/PHO_BIKE_90_RE_KTM-enduro-450-excf-6days-right-side-studio-image_%23SALL_%23AEPI_%23V1.png" alt="2026 KTM 450 EXC-F 6DAYS" sizes="100vw" width={0} height={0} style={{ width: '100%', height: 'auto' }} unoptimized />
                                  </figure>
                                  <h3 className="c-model-list__item-heading">2026 KTM 450 EXC-F 6DAYS</h3>
                                  <h4 className="c-model-list__item-slogan">TEST YOUR LIMITS</h4>
                                  <div className="c-model-list__item-details">
                                    <div className="c-model-list__item-availibity"></div>
                                  </div></Link>
                                  <div className="c-model-list__buttons">
                                    <Link href="https://www.ktm.com/en-be/models/enduro/4-stroke/2026-ktm-450-excf6days.html" className="c-btn__link c-model-list__button c-model-list__button--model-page c-btn__link--primary-dark">VISIT MODEL PAGE</Link>
                                  </div>
                                </article>
                                <article className="c-model-list__item">
                                  <Link href="https://www.ktm.com/en-be/models/supermoto/2026-ktm-690-smcr.html" className="c-model-list__item__info">
                                  <figure className="c-model-list__image">
                                    <Image src="https://azwecdnepstoragewebsiteuploads.azureedge.net/PHO_BIKE_90_RE_KTM-supermoto-690-smcr-right-side-view-studio-image_%23SALL_%23AEPI_%23V1.png" alt="2026 KTM 690 SMC R" sizes="100vw" width={0} height={0} style={{ width: '100%', height: 'auto' }} unoptimized />
                                  </figure>
                                  <h3 className="c-model-list__item-heading">2026 KTM 690 SMC R</h3>
                                  <h4 className="c-model-list__item-slogan">STOP GROWING UP</h4>
                                  <div className="c-model-list__item-details">
                                    <div className="c-model-list__item-availibity"></div>
                                  </div></Link>
                                  <div className="c-model-list__buttons">
                                    <Link href="https://www.ktm.com/en-be/models/supermoto/2026-ktm-690-smcr.html" className="c-btn__link c-model-list__button c-model-list__button--model-page c-btn__link--primary-dark">VISIT MODEL PAGE</Link>
                                  </div>
                                </article>
                                <article className="c-model-list__item">
                                  <Link href="https://www.ktm.com/en-be/models/dual-sport/2026-ktm-690-enduror.html" className="c-model-list__item__info">
                                  <figure className="c-model-list__image">
                                    <Image src="https://azwecdnepstoragewebsiteuploads.azureedge.net/PHO_BIKE_90_RE_KTM-dual-sport-690-enduro-r-2026-right-side-studio-image_%23SALL_%23AEPI_%23V1.png" alt="2026 KTM 690 Enduro R" sizes="100vw" width={0} height={0} style={{ width: '100%', height: 'auto' }} unoptimized />
                                  </figure>
                                  <h3 className="c-model-list__item-heading">2026 KTM 690 Enduro R</h3>
                                  <h4 className="c-model-list__item-slogan">ALL TERRAIN, ALL THE TIME</h4>
                                  <div className="c-model-list__item-details">
                                    <div className="c-model-list__item-availibity"></div>
                                  </div></Link>
                                  <div className="c-model-list__buttons">
                                    <Link href="https://www.ktm.com/en-be/models/dual-sport/2026-ktm-690-enduror.html" className="c-btn__link c-model-list__button c-model-list__button--model-page c-btn__link--primary-dark">VISIT MODEL PAGE</Link>
                                  </div>
                                </article>
                              </div>
                            </section>
                          </div>
                        </div>
                      </div>
                      <div className="htmlSourceCode aem-GridColumn aem-GridColumn--default--12">
                        <div className="component">
                          <h2 style={{ textAlign: 'center' }}>discover MORE</h2>
                        </div>
                      </div>
                      <div className="responsivegrid-4-columns responsivegrid aem-GridColumn aem-GridColumn--default--12">
                        <div className="aem-Grid aem-Grid--12 aem-Grid--tablet--12 aem-Grid--default--12 aem-Grid--phone--12">
                          <div className="image dynamicmedia parbase aem-GridColumn--tablet--12 aem-GridColumn--offset--tablet--0 aem-GridColumn--default--none aem-GridColumn--phone--none aem-GridColumn--phone--12 aem-GridColumn--tablet--none aem-GridColumn aem-GridColumn--offset--phone--0 aem-GridColumn--default--3 aem-GridColumn--offset--default--0">
                            <div className="cq-dd-image">
                              <figure className="c-image js-counter-authentication-image component" data-special="1" data-link="https://azweapppreorderserviceprod.azurewebsites.net/preorderservice/">
                                <Link href="https://www.ktm.com/en-be/models/dual-sport.html" className="c-image__link" target="_self">
                                <div className="c-image__content">
                                  <div id="dynamicmedia_65130352" data-current-page="/content/websites/ktm-com/europe/be/en" data-page-locale="en_be" data-asset-path="ktm/KTM-dual-sport-690-enduror-segment-page-action-image" data-asset-name="KTM-dual-sport-690-enduror-segment-page-action-image.jpg" data-asset-type="image" data-viewer-path="https://s7g10.scene7.com/s7viewers/" data-imageserver="https://s7g10.scene7.com/is/image/" data-videoserver="https://s7g10.scene7.com/is/content/" data-contenturl="https://s7g10.scene7.com/is/content/" data-config="||" data-wcmdisabled="" data-dms7="" data-mode="smartcrop" data-aspectratio="true" data-linktarget="_self" data-alt="Rider drives an KTM Electric Bike along a rugged, rocky trail surrounded by natural terrain." className="s7dm-dynamic-media-ktm">
                                    <div className="s7responsiveContainer"><Image src="https://s7g10.scene7.com/is/image/ktm/KTM-dual-sport-690-enduror-segment-page-action-image:Small?wid=801&hei=801&dpr=off" alt="Rider drives an KTM Electric Bike along a rugged, rocky trail surrounded by natural terrain." className="fluidimage" sizes="100vw" width={0} height={0} id="dynamicmedia_65130352_resp" data-src="https://s7g10.scene7.com/is/image/ktm/KTM-dual-sport-690-enduror-segment-page-action-image" data-mode="smartcrop" data-enablehd="always" data-aspectratio="true" style={{ width: '100%', height: 'auto' }} unoptimized /></div>
                                  </div>
                                </div></Link>
                                <div className="c-image__overlay c-image__overlay--center">
                                  <div className="content">
                                    <p className="subheading">#DualSport</p>
                                    <p className="heading">DUAL SPORT</p>
                                    <div id="authenticateBeforeRedirect" data-authenticate="false" style={{ display: 'none' }}></div>
                                  </div>
                                </div>
                              </figure>
                            </div>
                          </div>
                          <div className="image dynamicmedia parbase aem-GridColumn--tablet--12 aem-GridColumn--offset--tablet--0 aem-GridColumn--default--none aem-GridColumn--phone--none aem-GridColumn--phone--12 aem-GridColumn--tablet--none aem-GridColumn aem-GridColumn--offset--phone--0 aem-GridColumn--default--3 aem-GridColumn--offset--default--0">
                            <div className="cq-dd-image">
                              <figure className="c-image js-counter-authentication-image component" data-special="1" data-link="https://azweapppreorderserviceprod.azurewebsites.net/preorderservice/">
                                <Link href="https://www.ktm.com/en-be/models/supermoto.html" className="c-image__link" target="_self">
                                <div className="c-image__content">
                                  <div id="dynamicmedia_102935390" data-current-page="/content/websites/ktm-com/europe/be/en" data-page-locale="en_be" data-asset-path="ktm/KTM-supermoto-690-smcr-segment-action" data-asset-name="KTM-supermoto-690-smcr-segment-action.jpg" data-asset-type="image" data-viewer-path="https://s7g10.scene7.com/s7viewers/" data-imageserver="https://s7g10.scene7.com/is/image/" data-videoserver="https://s7g10.scene7.com/is/content/" data-contenturl="https://s7g10.scene7.com/is/content/" data-config="||" data-wcmdisabled="" data-dms7="" data-mode="smartcrop" data-aspectratio="true" data-linktarget="_self" data-alt="Motorcyclist in orange gear performs a wheelie on a KTM Enduro Bike over a rock in a hilly landscape under clear blue sky." className="s7dm-dynamic-media-ktm">
                                    <div className="s7responsiveContainer"><Image src="https://s7g10.scene7.com/is/image/ktm/KTM-supermoto-690-smcr-segment-action:Small?wid=801&hei=801&dpr=off" alt="Motorcyclist in orange gear performs a wheelie on a KTM Enduro Bike over a rock in a hilly landscape under clear blue sky." className="fluidimage" sizes="100vw" width={0} height={0} id="dynamicmedia_102935390_resp" data-src="https://s7g10.scene7.com/is/image/ktm/KTM-supermoto-690-smcr-segment-action" data-mode="smartcrop" data-enablehd="always" data-aspectratio="true" style={{ width: '100%', height: 'auto' }} unoptimized /></div>
                                  </div>
                                </div></Link>
                                <div className="c-image__overlay c-image__overlay--center">
                                  <div className="content">
                                    <p className="subheading">#RACEORANGE</p>
                                    <p className="heading">SUPERMOTO</p>
                                    <div id="authenticateBeforeRedirect" data-authenticate="false" style={{ display: 'none' }}></div>
                                  </div>
                                </div>
                              </figure>
                            </div>
                          </div>
                          <div className="image dynamicmedia parbase aem-GridColumn--tablet--12 aem-GridColumn--offset--tablet--0 aem-GridColumn--default--none aem-GridColumn--phone--none aem-GridColumn--phone--12 aem-GridColumn--tablet--none aem-GridColumn aem-GridColumn--offset--phone--0 aem-GridColumn--default--3 aem-GridColumn--offset--default--0">
                            <div className="cq-dd-image">
                              <figure className="c-image js-counter-authentication-image component" data-special="1" data-link="https://azweapppreorderserviceprod.azurewebsites.net/preorderservice/">
                                <Link href="https://www.ktm.com/en-be/models/naked-bike.html" className="c-image__link" target="_self">
                                <div className="c-image__content">
                                  <div id="dynamicmedia_70873038" data-current-page="/content/websites/ktm-com/europe/be/en" data-page-locale="en_be" data-asset-path="ktm/MY25-KTM-DUKE2-STAGE" data-asset-name="MY25-KTM-DUKE2-STAGE.png" data-asset-type="image" data-viewer-path="https://s7g10.scene7.com/s7viewers/" data-imageserver="https://s7g10.scene7.com/is/image/" data-videoserver="https://s7g10.scene7.com/is/content/" data-contenturl="https://s7g10.scene7.com/is/content/" data-config="||" data-wcmdisabled="" data-dms7="" data-mode="smartcrop" data-aspectratio="true" data-linktarget="_self" data-alt="Motorcyclist in orange gear performs a wheelie on a KTM naked bike on a racetrack." className="s7dm-dynamic-media-ktm">
                                    <div className="s7responsiveContainer"><Image src="https://s7g10.scene7.com/is/image/ktm/MY25-KTM-DUKE2-STAGE:Small?wid=801&hei=801&dpr=off" alt="Motorcyclist in orange gear performs a wheelie on a KTM naked bike on a racetrack." className="fluidimage" sizes="100vw" width={0} height={0} id="dynamicmedia_70873038_resp" data-src="https://s7g10.scene7.com/is/image/ktm/MY25-KTM-DUKE2-STAGE" data-mode="smartcrop" data-enablehd="always" data-aspectratio="true" style={{ width: '100%', height: 'auto' }} unoptimized /></div>
                                  </div>
                                </div></Link>
                                <div className="c-image__overlay c-image__overlay--center">
                                  <div className="content">
                                    <p className="subheading">#GetDuked</p>
                                    <p className="heading">Naked</p>
                                    <div id="authenticateBeforeRedirect" data-authenticate="false" style={{ display: 'none' }}></div>
                                  </div>
                                </div>
                              </figure>
                            </div>
                          </div>
                          <div className="image dynamicmedia parbase aem-GridColumn--tablet--12 aem-GridColumn--offset--tablet--0 aem-GridColumn--default--none aem-GridColumn--phone--12 aem-GridColumn--tablet--none aem-GridColumn--phone--newline aem-GridColumn aem-GridColumn--offset--phone--0 aem-GridColumn--default--3 aem-GridColumn--offset--default--0">
                            <div className="cq-dd-image">
                              <figure className="c-image js-counter-authentication-image component" data-special="1" data-link="https://azweapppreorderserviceprod.azurewebsites.net/preorderservice/">
                                <Link href="https://www.ktm.com/en-be/models/adventure.html" className="c-image__link" target="_self">
                                <div className="c-image__content">
                                  <div id="dynamicmedia_36269054" data-current-page="/content/websites/ktm-com/europe/be/en" data-page-locale="en_be" data-asset-path="ktm/643505_KTM-ADVENTURE-RALLY-TEASER-2025_Teaser-Images" data-asset-name="643505_KTM-ADVENTURE-RALLY-TEASER-2025_Teaser-Images.jpg" data-asset-type="image" data-viewer-path="https://s7g10.scene7.com/s7viewers/" data-imageserver="https://s7g10.scene7.com/is/image/" data-videoserver="https://s7g10.scene7.com/is/content/" data-contenturl="https://s7g10.scene7.com/is/content/" data-config="||" data-wcmdisabled="" data-dms7="" data-mode="smartcrop" data-aspectratio="true" data-linktarget="_self" data-alt="A rider on an KTM Adventure motorcycle travels down a dirt road, highlighting the excitement of off-road biking adventures." className="s7dm-dynamic-media-ktm">
                                    <div className="s7responsiveContainer"><Image src="https://s7g10.scene7.com/is/image/ktm/643505_KTM-ADVENTURE-RALLY-TEASER-2025_Teaser-Images:Small?wid=801&hei=801&dpr=off" alt="A rider on an KTM Adventure motorcycle travels down a dirt road, highlighting the excitement of off-road biking adventures." className="fluidimage" sizes="100vw" width={0} height={0} id="dynamicmedia_36269054_resp" data-src="https://s7g10.scene7.com/is/image/ktm/643505_KTM-ADVENTURE-RALLY-TEASER-2025_Teaser-Images" data-mode="smartcrop" data-enablehd="always" data-aspectratio="true" style={{ width: '100%', height: 'auto' }} unoptimized /></div>
                                  </div>
                                </div></Link>
                                <div className="c-image__overlay c-image__overlay--center">
                                  <div className="content">
                                    <p className="subheading">#GoAdventure</p>
                                    <p className="heading">Travel</p>
                                    <div id="authenticateBeforeRedirect" data-authenticate="false" style={{ display: 'none' }}></div>
                                  </div>
                                </div>
                              </figure>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="image dynamicmedia parbase aem-GridColumn aem-GridColumn--default--12">
                        <div className="cq-dd-image">
                          <figure className="c-image js-counter-authentication-image component" data-special="1" data-link="https://azweapppreorderserviceprod.azurewebsites.net/preorderservice/">
                            <div className="c-image__content">
                              <div id="dynamicmedia_36229118" data-current-page="/content/websites/ktm-com/europe/be/en" data-page-locale="en_be" data-asset-path="ktm/KTM_Header_AdventureMY23_V3" data-asset-name="KTM_Header_AdventureMY23_V3.jpg" data-asset-type="image" data-viewer-path="https://s7g10.scene7.com/s7viewers/" data-imageserver="https://s7g10.scene7.com/is/image/" data-videoserver="https://s7g10.scene7.com/is/content/" data-contenturl="https://s7g10.scene7.com/is/content/" data-config="||" data-wcmdisabled="" data-dms7="" data-mode="smartcrop" data-aspectratio="true" data-linktarget="_self" data-alt="A person rides a KTM Adventure motorcycle along a rugged dirt trail, showcasing adventure and outdoor exploration." className="s7dm-dynamic-media-ktm">
                                <div className="s7responsiveContainer"><Image src="https://s7g10.scene7.com/is/image/ktm/KTM_Header_AdventureMY23_V3?wid=1274&hei=510&dpr=off" alt="A person rides a KTM Adventure motorcycle along a rugged dirt trail, showcasing adventure and outdoor exploration." className="fluidimage" sizes="100vw" width={0} height={0} id="dynamicmedia_36229118_resp" data-src="https://s7g10.scene7.com/is/image/ktm/KTM_Header_AdventureMY23_V3" data-mode="smartcrop" data-enablehd="always" data-aspectratio="true" style={{ width: '100%', height: 'auto' }} unoptimized /></div>
                              </div>
                            </div>
                            <div className="c-image__overlay c-image__overlay--right">
                              <div className="content">
                                <p className="subheading">ride worry-free</p>
                                <p className="heading">ktm premium warranty</p>
                                <div id="authenticateBeforeRedirect" data-authenticate="false" style={{ display: 'none' }}></div><Link href="https://www.ktm.com/en-be/service/warranty.html" className="c-btn__link js-authenticate-btn" target="_self" id="authenticate-btn" >EXPLORE more</Link>
                              </div>
                            </div>
                          </figure>
                        </div>
                      </div>
                      <div className="responsivegrid-3-columns responsivegrid aem-GridColumn aem-GridColumn--default--12">
                        <div className="aem-Grid aem-Grid--12 aem-Grid--default--12 aem-Grid--phone--12">
                          <div className="image dynamicmedia parbase aem-GridColumn--default--none aem-GridColumn--phone--none aem-GridColumn--phone--12 aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--offset--phone--0 aem-GridColumn--offset--default--0">
                            <div className="cq-dd-image showOriginalImage">
                              <figure className="c-image js-counter-authentication-image component" data-special="1" data-link="https://azweapppreorderserviceprod.azurewebsites.net/preorderservice/">
                                <Link href="https://www.ktm.com/en-be/parts---wear/powerwear/products.html" className="c-image__link" target="_blank" rel="noopener noreferrer">
                                <div className="c-image__content">
                                  <div id="dynamicmedia_99848000" data-current-page="/content/websites/ktm-com/europe/be/en" data-page-locale="en_be" data-asset-path="ktm/KTM-powerwear-homepage-image-5" data-asset-name="KTM-powerwear-homepage-image-5.jpg" data-asset-type="image" data-viewer-path="https://s7g10.scene7.com/s7viewers/" data-imageserver="https://s7g10.scene7.com/is/image/" data-videoserver="https://s7g10.scene7.com/is/content/" data-contenturl="https://s7g10.scene7.com/is/content/" data-config="||" data-wcmdisabled="" data-dms7="" data-mode="showOriginalImage" data-aspectratio="true" data-linktarget="_blank" data-alt="A men with a KTM Backpack on his back, standing next to a Rider wearing orange Racing clothes, sitting on a KTM Motocross Bike." className="s7dm-dynamic-media-ktm">
                                    <div className="s7responsiveContainer"><Image src="https://s7g10.scene7.com/is/image/ktm/KTM-powerwear-homepage-image-5?wid=1300&dpr=off" alt="A men with a KTM Backpack on his back, standing next to a Rider wearing orange Racing clothes, sitting on a KTM Motocross Bike." className="fluidimage" sizes="100vw" width={0} height={0} id="dynamicmedia_99848000_resp" data-src="https://s7g10.scene7.com/is/image/ktm/KTM-powerwear-homepage-image-5" data-mode="showOriginalImage" data-enablehd="always" data-aspectratio="true" style={{ width: '100%', height: 'auto' }} unoptimized /></div>
                                  </div>
                                </div></Link>
                                <div className="c-image__overlay c-image__overlay--center c-image__overlay--background">
                                  <div className="content">
                                    <p className="subheading"></p>
                                    <p className="heading">KTM POWERWEAR</p>
                                    <div id="authenticateBeforeRedirect" data-authenticate="false" style={{ display: 'none' }}></div>
                                  </div>
                                </div>
                              </figure>
                            </div>
                          </div>
                          <div className="image dynamicmedia parbase aem-GridColumn--default--none aem-GridColumn--phone--none aem-GridColumn--phone--12 aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--offset--phone--0 aem-GridColumn--offset--default--0">
                            <div className="cq-dd-image showOriginalImage">
                              <figure className="c-image js-counter-authentication-image component" data-special="1" data-link="https://azweapppreorderserviceprod.azurewebsites.net/preorderservice/">
                                <Link href="https://www.ktm.com/en-be/parts---wear/powerparts/products.html" className="c-image__link" target="_blank" rel="noopener noreferrer">
                                <div className="c-image__content">
                                  <div id="dynamicmedia_24290916" data-current-page="/content/websites/ktm-com/europe/be/en" data-page-locale="en_be" data-asset-path="ktm/KTM-powerparts-homepage-image-7" data-asset-name="KTM-powerparts-homepage-image-7.jpg" data-asset-type="image" data-viewer-path="https://s7g10.scene7.com/s7viewers/" data-imageserver="https://s7g10.scene7.com/is/image/" data-videoserver="https://s7g10.scene7.com/is/content/" data-contenturl="https://s7g10.scene7.com/is/content/" data-config="||" data-wcmdisabled="" data-dms7="" data-mode="showOriginalImage" data-aspectratio="true" data-linktarget="_blank" data-alt="A detailed close-up view of a KTM motorcycle engine showcasing its intricate components and design." className="s7dm-dynamic-media-ktm">
                                    <div className="s7responsiveContainer"><Image src="https://s7g10.scene7.com/is/image/ktm/KTM-powerparts-homepage-image-7?wid=1300&dpr=off" alt="A detailed close-up view of a KTM motorcycle engine showcasing its intricate components and design." className="fluidimage" sizes="100vw" width={0} height={0} id="dynamicmedia_24290916_resp" data-src="https://s7g10.scene7.com/is/image/ktm/KTM-powerparts-homepage-image-7" data-mode="showOriginalImage" data-enablehd="always" data-aspectratio="true" style={{ width: '100%', height: 'auto' }} unoptimized /></div>
                                  </div>
                                </div></Link>
                                <div className="c-image__overlay c-image__overlay--center c-image__overlay--background">
                                  <div className="content">
                                    <p className="subheading"></p>
                                    <p className="heading">KTM POWERPARTS</p>
                                    <div id="authenticateBeforeRedirect" data-authenticate="false" style={{ display: 'none' }}></div>
                                  </div>
                                </div>
                              </figure>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="image dynamicmedia parbase aem-GridColumn aem-GridColumn--default--12">
                        <div className="cq-dd-image">
                          <figure className="c-image js-counter-authentication-image component" data-special="1" data-link="https://azweapppreorderserviceprod.azurewebsites.net/preorderservice/">
                            <div className="c-image__content">
                              <div id="dynamicmedia_24352996" data-current-page="/content/websites/ktm-com/europe/be/en" data-page-locale="en_be" data-asset-path="ktm/KTM-homepage-tech-guide-banner4" data-asset-name="KTM-homepage-tech-guide-banner4.jpg" data-asset-type="image" data-viewer-path="https://s7g10.scene7.com/s7viewers/" data-imageserver="https://s7g10.scene7.com/is/image/" data-videoserver="https://s7g10.scene7.com/is/content/" data-contenturl="https://s7g10.scene7.com/is/content/" data-config="||" data-wcmdisabled="" data-dms7="" data-mode="smartcrop" data-aspectratio="true" data-linktarget="_self" data-alt="A person rides a KTM Adventure motorcycle along a rugged dirt trail, showcasing adventure and outdoor exploration." className="s7dm-dynamic-media-ktm">
                                <div className="s7responsiveContainer"><Image src="https://s7g10.scene7.com/is/image/ktm/KTM-homepage-tech-guide-banner4?wid=1274&hei=531&dpr=off" alt="A person rides a KTM Adventure motorcycle along a rugged dirt trail, showcasing adventure and outdoor exploration." className="fluidimage" sizes="100vw" width={0} height={0} id="dynamicmedia_24352996_resp" data-src="https://s7g10.scene7.com/is/image/ktm/KTM-homepage-tech-guide-banner4" data-mode="smartcrop" data-enablehd="always" data-aspectratio="true" style={{ width: '100%', height: 'auto' }} unoptimized /></div>
                              </div>
                            </div>
                            <div className="c-image__overlay c-image__overlay--right">
                              <div className="content">
                                <p className="subheading">unlock your bikes full potential</p>
                                <p className="heading">KTM TECH GUIDE</p>
                                <div id="authenticateBeforeRedirect" data-authenticate="false" style={{ display: 'none' }}></div><Link href="https://www.ktm.com/en-be/tech-guide.html" className="c-btn__link js-authenticate-btn" target="_self" id="authenticate-btn" >EXPLORE more</Link>
                              </div>
                            </div>
                          </figure>
                        </div>
                      </div>
                      <div className="htmlSourceCode aem-GridColumn aem-GridColumn--default--12">
                        <div className="component">
                          <h2 style={{ textAlign: 'center' }}>KTM NEWS</h2>
                        </div>
                      </div>
                      <div className="teaserList dynamicmedia parbase aem-GridColumn aem-GridColumn--default--12">
                        <section className="c-teaser-list component">
                          <div className="c-teaser-list__container c-teaser-list__container--three-items-per-row container">
                            <article className="c-teaser-list__item c-teaser-list__item--three-items-per-row">
                              <Link href="https://www.ktm.com/en-be/powerdeals/built-to-race-priced-to-win.html">
                              <div className="image dynamicmedia parbase aem-GridColumn aem-GridColumn--default--12">
                                <figure className="c-teaser-list__figure c-teaser-list__figure--three-items-per-row">
                                  <div className="cq-dd-image">
                                    <div className="c-image__content">
                                      <div id="38562452" data-current-page="/content/websites/ktm-com/europe/be/en" data-page-locale="en" data-asset-path="ktm/KTM Q3 Sales Promotion Generic Thumbnail 1800x1800" data-asset-name="KTM Q3 Sales Promotion Generic Thumbnail 1800x1800.jpg" data-asset-type="image" data-viewer-path="https://s7g10.scene7.com/s7viewers/" data-imageserver="https://s7g10.scene7.com/is/image/" data-videoserver="https://s7g10.scene7.com/is/content/" data-contenturl="https://s7g10.scene7.com/is/content/" data-imagepreset="ktm_teaser_square" data-wcmdisabled="" data-dms7="" className="s7dm-dynamic-media-ktm">
                                        <div className="s7responsiveContainer"><Image src="https://s7g10.scene7.com/is/image/ktm/KTM%20Q3%20Sales%20Promotion%20Generic%20Thumbnail%201800x1800?$ktm_teaser_square$&wid=500&dpr=off" alt="KTM%20Q3%20Sales%20Promotion%20Generic%20Thumbnail%201800x1800" className="fluidimage" sizes="100vw" width={0} height={0} id="38562452_resp" data-src="https://s7g10.scene7.com/is/image/ktm/KTM Q3 Sales Promotion Generic Thumbnail 1800x1800?$ktm_teaser_square$" data-enablehd="always" style={{ width: '100%', height: 'auto' }} unoptimized /></div>
                                      </div>
                                    </div>
                                  </div>
                                </figure>
                              </div></Link>
                              <div className="c-teaser-list__content c-teaser-list__content--three-items-per-row">
                                <time className="c-teaser-list__date c-teaser-list__date--three-items-per-row" dateTime="01 Oct 2025">01 Oct 2025</time> <Link href="https://www.ktm.com/en-be/powerdeals/built-to-race-priced-to-win.html" className="c-teaser-list__link c-teaser-list__link--three-items-per-row">
                                <h2 className="c-teaser-list__title c-teaser-list__title--three-items-per-row line-clamp-3">GEMAAKT OM TE RACEN. GEPRIJSD OM TE WINNEN.</h2><span className="c-teaser-list__cta c-teaser-list__cta--three-items-per-row">View Profile</span></Link>
                                <div className="c-teaser-list__teaser c-teaser-list__teaser--three-items-per-row line-clamp-4">
                                  Maak je klaar om te racen met KTM’s exclusieve Q4-aanbiedingen. Profiteer van raceklare deals op geselecteerde motocross-, enduro-, travel-, sporttourer- en naked-modellen - er is nooit een beter moment geweest om je slag te slaan.
                                </div>
                              </div>
                            </article>
                            <article className="c-teaser-list__item c-teaser-list__item--three-items-per-row">
                              <Link href="https://www.ktm.com/en-be/racing/racing-news/daniel-sanders-crowned-2025-world-rally-raid-champion-with-victo.html">
                              <div className="image dynamicmedia parbase aem-GridColumn aem-GridColumn--default--12">
                                <figure className="c-teaser-list__figure c-teaser-list__figure--three-items-per-row">
                                  <div className="cq-dd-image">
                                    <div className="c-image__content">
                                      <div id="446190783" data-current-page="/content/websites/ktm-com/europe/be/en" data-page-locale="en" data-asset-path="ktm/1 _POR25_EdoBauer_EdoPhoto_EDU6715" data-asset-name="1 _POR25_EdoBauer_EdoPhoto_EDU6715.jpg" data-asset-type="image" data-viewer-path="https://s7g10.scene7.com/s7viewers/" data-imageserver="https://s7g10.scene7.com/is/image/" data-videoserver="https://s7g10.scene7.com/is/content/" data-contenturl="https://s7g10.scene7.com/is/content/" data-imagepreset="ktm_teaser_square" data-wcmdisabled="" data-dms7="" className="s7dm-dynamic-media-ktm">
                                        <div className="s7responsiveContainer"><Image src="https://s7g10.scene7.com/is/image/ktm/1%20_POR25_EdoBauer_EdoPhoto_EDU6715?$ktm_teaser_square$&wid=500&dpr=off" alt="1%20_POR25_EdoBauer_EdoPhoto_EDU6715" className="fluidimage" sizes="100vw" width={0} height={0} id="446190783_resp" data-src="https://s7g10.scene7.com/is/image/ktm/1 _POR25_EdoBauer_EdoPhoto_EDU6715?$ktm_teaser_square$" data-enablehd="always" style={{ width: '100%', height: 'auto' }} unoptimized /></div>
                                      </div>
                                    </div>
                                  </div>
                                </figure>
                              </div></Link>
                              <div className="c-teaser-list__content c-teaser-list__content--three-items-per-row">
                                <time className="c-teaser-list__date c-teaser-list__date--three-items-per-row" dateTime="28 Sept 2025">28 Sept 2025</time> <Link href="https://www.ktm.com/en-be/racing/racing-news/daniel-sanders-crowned-2025-world-rally-raid-champion-with-victo.html" className="c-teaser-list__link c-teaser-list__link--three-items-per-row">
                                <h2 className="c-teaser-list__title c-teaser-list__title--three-items-per-row line-clamp-3">DANIEL SANDERS CROWNED 2025 WORLD RALLY-RAID CHAMPION WITH VICTORY IN PORTUGAL</h2><span className="c-teaser-list__cta c-teaser-list__cta--three-items-per-row">View Profile</span></Link>
                                <div className="c-teaser-list__teaser c-teaser-list__teaser--three-items-per-row line-clamp-4">
                                  Red Bull KTM Factory Racing’s Daniel Sanders has secured the 2025 FIM World Rally-Raid Championship with a dominant win at round four, Rally Raid Portugal. Continuing his unbeaten record this season, ‘Chucky’ topped the timesheets in the prologue and three of the five stages to take the race win and the championship crown in style. Luciano Benavides rode his KTM 450 RALLY to third place overall, while Edgar Canet took the win in the hotly contested Rally2 category.
                                </div>
                              </div>
                            </article>
                            <article className="c-teaser-list__item c-teaser-list__item--three-items-per-row">
                              <Link href="https://www.ktm.com/en-be/racing/racing-news/josep-garcia-claims-enduro1-world-title-at-endurogp-of-italy.html">
                              <div className="image dynamicmedia parbase aem-GridColumn aem-GridColumn--default--12">
                                <figure className="c-teaser-list__figure c-teaser-list__figure--three-items-per-row">
                                  <div className="cq-dd-image">
                                    <div className="c-image__content">
                                      <div id="1935775331" data-current-page="/content/websites/ktm-com/europe/be/en" data-page-locale="en" data-asset-path="ktm/1 josep-garcia_EnduroGP-2025_Rnd6_17075" data-asset-name="1 josep-garcia_EnduroGP-2025_Rnd6_17075.jpg" data-asset-type="image" data-viewer-path="https://s7g10.scene7.com/s7viewers/" data-imageserver="https://s7g10.scene7.com/is/image/" data-videoserver="https://s7g10.scene7.com/is/content/" data-contenturl="https://s7g10.scene7.com/is/content/" data-imagepreset="ktm_teaser_square" data-wcmdisabled="" data-dms7="" className="s7dm-dynamic-media-ktm">
                                        <div className="s7responsiveContainer"><Image src="https://s7g10.scene7.com/is/image/ktm/1%20josep-garcia_EnduroGP-2025_Rnd6_17075?$ktm_teaser_square$&wid=500&dpr=off" alt="1%20josep-garcia_EnduroGP-2025_Rnd6_17075" className="fluidimage" sizes="100vw" width={0} height={0} id="1935775331_resp" data-src="https://s7g10.scene7.com/is/image/ktm/1 josep-garcia_EnduroGP-2025_Rnd6_17075?$ktm_teaser_square$" data-enablehd="always" style={{ width: '100%', height: 'auto' }} unoptimized /></div>
                                      </div>
                                    </div>
                                  </div>
                                </figure>
                              </div></Link>
                              <div className="c-teaser-list__content c-teaser-list__content--three-items-per-row">
                                <time className="c-teaser-list__date c-teaser-list__date--three-items-per-row" dateTime="28 Sept 2025">28 Sept 2025</time> <Link href="https://www.ktm.com/en-be/racing/racing-news/josep-garcia-claims-enduro1-world-title-at-endurogp-of-italy.html" className="c-teaser-list__link c-teaser-list__link--three-items-per-row">
                                <h2 className="c-teaser-list__title c-teaser-list__title--three-items-per-row line-clamp-3">JOSEP GARCIA CLAIMS ENDURO1 WORLD TITLE AT ENDUROGP OF ITALY</h2><span className="c-teaser-list__cta c-teaser-list__cta--three-items-per-row">View Profile</span></Link>
                                <div className="c-teaser-list__teaser c-teaser-list__teaser--three-items-per-row line-clamp-4">
                                  Red Bull KTM Factory Racing’s Josep Garcia has secured the 2025 FIM Enduro1 World Championship with a commanding performance at the EnduroGP of Italy. Despite a challenging Sunday in Darfo Boario Terme, where Garcia battled through the pain from a late crash on Saturday, he did what he had to do to take the title with one round to spare.
                                </div>
                              </div>
                            </article>
                          </div>
                        </section>
                      </div>
                      <div className="button aem-GridColumn aem-GridColumn--default--12">
                        <div className="component c-btn c-btn--center">
                          <Link href="https://www.ktm.com/en-be/news.html" className="c-btn__link c-btn__link--primary-dark" target="_self"><span className="c-btn__link--text">read more</span></Link>
                        </div>
                      </div>
                      <div className="button aem-GridColumn aem-GridColumn--default--12">
                        <div className="component c-btn c-btn--center">
                          <p className="c-btn__text">Join the KTM Newsletter</p><Link href="https://www.ktm.com/en-be/ktm-world/newsletter.html" className="c-btn__link c-btn__link--primary-light-icon c-btn__link--icon" target="_self"><span className="c-btn__link--text">Sign up</span></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="footer aem-GridColumn aem-GridColumn--default--12">
                  <footer>
                    <div className="c-footer__additional-text">
                      <p>The stated discount is exclusively available at participating, authorized KTM dealers. All information is non-binding. Printing, layout, and typographical errors as well as other mistakes are reserved. Information may be changed at any time without prior notice.</p>
                      <p>The illustrated vehicles may vary in selected details from the production models and some illustrations feature optional equipment available at additional cost. All information concerning the scope of supply, appearance, services, dimensions and weights is non-binding and specified with the proviso that errors, for instance in printing, setting and/or typing, may occur; such information is subject to change without notice. Please note that model specifications may vary from country to country. In the case of coated surfaces, there may be color differences due to the usual process fluctuations. The consumption values stated refer to the roadworthy series condition of the vehicles at the time of factory delivery.</p>
                    </div>
                    <div className="c-footer">
                      <div className="container">
                        <nav>
                          <div className="c-footer__col" data-opened="false">
                            <div className="c-footer__title">
                              The Company
                            </div>
                            <ul>
                              <li>
                                <Link href="https://ktmgroup.com/en/home/" target="_blank" rel="noopener noreferrer">KTM AG</Link>
                              </li>
                              <li>
                                <Link href="https://www.ktm.com/en-be/contact.html" target="_self">CONTACT</Link>
                              </li>
                              <li>
                                <Link href="https://jobs.ktm.com/Jobs" target="_blank" rel="noopener noreferrer">CAREERS</Link>
                              </li>
                              <li>
                                <Link href="https://press.ktm.com" target="_blank" rel="noopener noreferrer">PRESS CENTER</Link>
                              </li>
                              <li>
                                <Link href="https://ktmgroup.com/procurement/" target="_self">PROCUREMENT</Link>
                              </li>
                              <li>
                                <Link href="https://media.ktm.com" target="_blank" rel="noopener noreferrer">MEDIA LIBRARY</Link>
                              </li>
                              <li>
                                <Link href="https://www.ktm.com/en-be/ktm-world/brand-values.html" target="_self">BRAND VALUES</Link>
                              </li>
                              <li>
                                <Link href="https://www.ktm.com/en-be/become-a-dealer.html" target="_self">BECOME A DEALER</Link>
                              </li>
                              <li>
                                <Link href="https://ktmgroup.com/en/die-ktm-aktie/" target="_blank" rel="noopener noreferrer">INVESTOR RELATIONS</Link>
                              </li>
                            </ul>
                          </div>
                          <div className="c-footer__col" data-opened="false">
                            <div className="c-footer__title">
                              KTM World
                            </div>
                            <ul>
                              <li>
                                <Link href="https://www.ktm.com/en-be/ktm-world/news.html" target="_self">NEWS</Link>
                              </li>
                              <li>
                                <Link href="https://www.ktm.com/en-be/racing.html" target="_self">RACING</Link>
                              </li>
                              <li>
                                <Link href="https://www.ktm.com/en-be/ktm-world/ride-ktm.html" target="_self">RIDE KTM</Link>
                              </li>
                              <li>
                                <Link href="https://www.ktm-motohall.com" target="_self">KTM MOTOHALL</Link>
                              </li>
                              <li>
                                <Link href="https://www.ktm.com/en-be/tech-guide.html" target="_self">KTM TECH GUIDE</Link>
                              </li>
                              <li>
                                <Link href="https://www.ktm.com/en-be/ktm-world/newsletter.html" target="_self">KTM NEWSLETTER</Link>
                              </li>
                              <li>
                                <Link href="https://www.ktm.com/en-be/tech-guide/ktm-app.html" target="_self">KTM CONNECT APP</Link>
                              </li>
                              <li>
                                <Link href="https://www.ktm.com/en-be/ktm-world/ktm-adventure-rally.html" target="_self">KTM ADVENTURE RALLY</Link>
                              </li>
                              <li>
                                <Link href="https://testride.ktm.com/#/enterByCountry/en-BE">BOOK A TESTRIDE</Link>
                              </li>
                            </ul>
                          </div>
                          <div className="c-footer__col" data-opened="false">
                            <div className="c-footer__title">
                              Service
                            </div>
                            <ul>
                              <li>
                                <Link href="https://www.ktm.com/en-be/service/manuals.html" target="_self">MANUALS</Link>
                              </li>
                              <li>
                                <Link href="https://www.ktm.com/en-be/service/Maintenance.html" target="_self">MAINTENANCE</Link>
                              </li>
                              <li>
                                <Link href="https://configurator.ktm.com/models/" target="_blank" rel="noopener noreferrer">CONFIGURATOR</Link>
                              </li>
                              <li>
                                <Link href="https://www.ktm.com/en-be/service/Freeride-e-hotline.html" target="_self">FREERIDE E HOTLINE</Link>
                              </li>
                              <li>
                                <Link href="https://www.ktm.com/en-be/service/spare-parts-finder.html" target="_self">SPARE PARTS FINDER</Link>
                              </li>
                              <li>
                                <Link href="https://www.ktm.com/en-be/service/Service-and-safety-check.html" target="_self">SERVICE & SAFETY CHECK</Link>
                              </li>
                              <li>
                                <Link href="https://www.ktm.com/en-be/service/Safety.html" target="_self">SAFETY RECALL INFORMATION</Link>
                              </li>
                            </ul>
                          </div>
                          <div className="c-footer__col" data-opened="false">
                            <div className="c-footer__title">
                              Legal
                            </div>
                            <ul>
                              <li>
                                <Link href="https://www.ktm.com/en-be/imprint.html" target="_self">IMPRINT</Link>
                              </li>
                              <li>
                                <Link href="https://www.ktm.com/en-be/legal-notices.html" target="_self">LEGAL NOTICES</Link>
                              </li>
                              <li>
                                <Link href="https://www.ktm.com/en-be/legal-notices-and-terms-of-use.html" target="_self">TERMS OF USE</Link>
                              </li>
                              <li>
                                <Link href="https://www.ktm.com/en-be/privacy-policy.html" target="_self">PRIVACY POLICY</Link>
                              </li>
                              <li>
                                <Link href="https://www.ktm.com/en-be/cyber-security.html" target="_blank" rel="noopener noreferrer">CYBER SECURITY</Link>
                              </li>
                              <li>
                                <Link href="https://www.pierermobility.com/en/sustainability/publications" target="_blank" rel="noopener noreferrer">CODE OF CONDUCT</Link>
                              </li>
                            </ul>
                          </div>
                          <div className="c-footer__icons">
                            <div className="icons-title">
                              Connect
                            </div>
                            <ul>
                              <li>
                                <Link href="http://www.facebook.com/Official.KTM" target="_blank" rel="noopener noreferrer"><Image src="https://www.ktm.com/content/dam/websites/ktm-com/language-masters/en/social-icons/f35px.png" alt="f35px" sizes="100vw" width={0} height={0} style={{ width: '100%', height: 'auto' }} unoptimized /></Link>
                              </li>
                              <li>
                                <Link href="https://www.instagram.com/ktm_official/" target="_blank" rel="noopener noreferrer"><Image src="https://www.ktm.com/content/dam/websites/ktm-com/language-masters/en/social-icons/insta35px.png" alt="insta35px" sizes="100vw" width={0} height={0} style={{ width: '100%', height: 'auto' }} unoptimized /></Link>
                              </li>
                              <li>
                                <Link href="https://www.youtube.com/ktm" target="_blank" rel="noopener noreferrer"><Image src="https://www.ktm.com/content/dam/websites/ktm-com/language-masters/en/social-icons/yt25px.png" alt="yt25px" sizes="100vw" width={0} height={0} style={{ width: '100%', height: 'auto' }} unoptimized /></Link>
                              </li>
                            </ul>
                          </div>
                        </nav>
                        <div className="c-footer__legal-text">
                          <p className="copyright">Copyright 2025 KTM Sportmotorcycle GmbH, all rights reserved</p>
                          <p className="back-to-top">BACK TO TOP</p>
                        </div>
                      </div>
                    </div>
                  </footer>
                </div>
              </div>
            </div>
            <div className="device-selector-wrapper">
              <div className="device-selector device-xs" data-devicetype="xs"></div>
              <div className="device-selector device-sm" data-devicetype="sm"></div>
              <div className="device-selector device-md" data-devicetype="md"></div>
              <div className="device-selector device-lg" data-devicetype="lg"></div>
              <div className="device-selector device-xl" data-devicetype="xl"></div>
            </div>
             <iframe height="0" width="0" style={{ display: 'none', visibility: 'hidden' }} data-gtm-yt-inspected-2066570_377="true"></iframe>
            <div id="onetrust-consent-sdk" data-nosnippet="true">
              <div className="onetrust-pc-dark-filter ot-hide ot-fade-in"></div>
              <div id="onetrust-pc-sdk" className="otPcPanel ot-hide ot-fade-in" lang="en" aria-label="Preference center" role="region">
                <div role="dialog" aria-modal="true" style={{ height: '100%' }} aria-label="Privacy Preference Center">
                  <div className="ot-pc-header">
                    <div className="ot-pc-logo" role="img" aria-label="Company Logo"><Image src="https://cdn.cookielaw.org/logos/197e1760-6f65-4a53-82fe-de3f0568609a/01904f47-2b2d-75a0-acb5-6494f79d92be/1e238fb7-5c81-45d6-934e-c9191d1bc801/ktm.jpg" alt="Company Logo" sizes="100vw" width={0} height={0} style={{ width: '100%', height: 'auto' }} unoptimized /></div><button id="close-pc-btn-handler" className="ot-close-icon" aria-label="Close" style={{ backgroundImage: 'url(https://cdn.cookielaw.org/logos/static/ot_close.svg' }}></button>
                  </div>
                  <div id="ot-pc-content" className="ot-pc-scrollbar">
                    <div className="ot-optout-signal ot-hide">
                      <div className="ot-optout-icon">
                        <svg xmlns="http://www.w3.org/2000/svg">
                        <path className="ot-floating-button__svg-fill" d="M14.588 0l.445.328c1.807 1.303 3.961 2.533 6.461 3.688 2.015.93 4.576 1.746 7.682 2.446 0 14.178-4.73 24.133-14.19 29.864l-.398.236C4.863 30.87 0 20.837 0 6.462c3.107-.7 5.668-1.516 7.682-2.446 2.709-1.251 5.01-2.59 6.906-4.016zm5.87 13.88a.75.75 0 00-.974.159l-5.475 6.625-3.005-2.997-.077-.067a.75.75 0 00-.983 1.13l4.172 4.16 6.525-7.895.06-.083a.75.75 0 00-.16-.973z" fill="#FFF" fill-rule="evenodd"></path></svg>
                      </div>
                    </div>
                    <h2 id="ot-pc-title">Privacy Preference Center</h2>
                    <div id="ot-pc-desc">
                      When you visit any website, it may store or retrieve information on your browser, mostly in the form of cookies. This information might be about you, your preferences or your device and is mostly used to make the site work as you expect it to. The information does not usually directly identify you, but it can give you a more personalized web experience. Because we respect your right to privacy, you can choose not to allow some types of cookies. Click on the different category headings to find out more and change our default settings. However, blocking some types of cookies may impact your experience of the site and the services we are able to offer.<br />
                      <Link href="https://www.ktm.com/en-int/privacy-policy.html" className="privacy-notice-link" target="_blank" rel="noopener" aria-label="More information about your privacy, opens in a new tab">Privacy Policy</Link><Link href="https://www.ktm.com/en-int/imprint.html" className="ot-link-btn ot-imprint-handler" target="_blank" rel="noopener" aria-label="Legal Information, opens in a new tab">Imprint</Link>
                    </div><button id="accept-recommended-btn-handler">Allow All</button>
                    <section className="ot-sdk-row ot-cat-grp">
                      <h3 id="ot-category-title">Manage Consent Preferences</h3>
                      <div className="ot-cat-item ot-always-active-group ot-vs-config" data-optanongroupid="C0001">
                        <h4 className="ot-cat-header" id="ot-header-id-C0001">Strictly Necessary Cookies</h4>
                        <div id="ot-status-id-C0001" className="ot-always-active">
                          Always Active
                        </div>
                        <p className="ot-category-desc" id="ot-desc-id-C0001">These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in or filling in forms. You can set your browser to block or alert you about these cookies, but some parts of the site will not then work. These cookies do not store any personally identifiable information.</p>
                        <div className="ot-hlst-cntr">
                          <button className="ot-link-btn category-host-list-handler" aria-label="Cookie Details button opens Cookie List menu" data-parent-id="C0001">Cookies Details</button>
                        </div>
                      </div>
                      <div className="ot-cat-item ot-vs-config" data-optanongroupid="C0002">
                        <h4 className="ot-cat-header" id="ot-header-id-C0002">Performance Cookies</h4>
                        <div className="ot-tgl">
                          <input type="checkbox" name="ot-group-id-C0002" id="ot-group-id-C0002" role="switch" className="category-switch-handler" data-optanongroupid="C0002" checked aria-labelledby="ot-header-id-C0002" /> <label className="ot-switch" htmlFor="ot-group-id-C0002"><span className="ot-label-txt">Performance Cookies</span></label>
                        </div>
                        <p className="ot-category-desc" id="ot-desc-id-C0002">These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site. All information these cookies collect is aggregated and therefore anonymous. If you do not allow these cookies we will not know when you have visited our site, and will not be able to monitor its performance.</p>
                        <div className="ot-hlst-cntr">
                          <button className="ot-link-btn category-host-list-handler" aria-label="Cookie Details button opens Cookie List menu" data-parent-id="C0002">Cookies Details</button>
                        </div>
                      </div>
                      <div className="ot-cat-item ot-vs-config" data-optanongroupid="C0004">
                        <h4 className="ot-cat-header" id="ot-header-id-C0004">Targeting Cookies</h4>
                        <div className="ot-tgl">
                          <input type="checkbox" name="ot-group-id-C0004" id="ot-group-id-C0004" role="switch" className="category-switch-handler" data-optanongroupid="C0004" checked aria-labelledby="ot-header-id-C0004" /> <label className="ot-switch" htmlFor="ot-group-id-C0004"><span className="ot-label-txt">Targeting Cookies</span></label>
                        </div>
                        <p className="ot-category-desc" id="ot-desc-id-C0004">These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites. They do not store directly personal information, but are based on uniquely identifying your browser and internet device. If you do not allow these cookies, you will experience less targeted advertising.</p>
                        <div className="ot-hlst-cntr">
                          <button className="ot-link-btn category-host-list-handler" aria-label="Cookie Details button opens Cookie List menu" data-parent-id="C0004">Cookies Details</button>
                        </div>
                      </div>
                      <div className="ot-cat-item ot-vs-config" data-optanongroupid="C0005">
                        <h4 className="ot-cat-header" id="ot-header-id-C0005">Social Media Cookies</h4>
                        <div className="ot-tgl">
                          <input type="checkbox" name="ot-group-id-C0005" id="ot-group-id-C0005" role="switch" className="category-switch-handler" data-optanongroupid="C0005" checked aria-labelledby="ot-header-id-C0005" /> <label className="ot-switch" htmlFor="ot-group-id-C0005"><span className="ot-label-txt">Social Media Cookies</span></label>
                        </div>
                        <p className="ot-category-desc" id="ot-desc-id-C0005">These cookies are set by a range of social media services that we have added to the site to enable you to share our content with your friends and networks. They are capable of tracking your browser across other sites and building up a profile of your interests. This may impact the content and messages you see on other websites you visit. If you do not allow these cookies you may not be able to use or see these sharing tools.</p>
                        <div className="ot-hlst-cntr">
                          <button className="ot-link-btn category-host-list-handler" aria-label="Cookie Details button opens Cookie List menu" data-parent-id="C0005">Cookies Details</button>
                        </div>
                      </div>
                      <div className="ot-cat-item ot-vs-config" data-optanongroupid="C0003">
                        <h4 className="ot-cat-header" id="ot-header-id-C0003">Functional Cookies</h4>
                        <div className="ot-tgl">
                          <input type="checkbox" name="ot-group-id-C0003" id="ot-group-id-C0003" role="switch" className="category-switch-handler" data-optanongroupid="C0003" checked aria-labelledby="ot-header-id-C0003" /> <label className="ot-switch" htmlFor="ot-group-id-C0003"><span className="ot-label-txt">Functional Cookies</span></label>
                        </div>
                        <p className="ot-category-desc" id="ot-desc-id-C0003">These cookies enable the website to provide enhanced functionality and personalisation. They may be set by us or by third party providers whose services we have added to our pages. If you do not allow these cookies then some or all of these services may not function properly.</p>
                        <div className="ot-hlst-cntr">
                          <button className="ot-link-btn category-host-list-handler" aria-label="Cookie Details button opens Cookie List menu" data-parent-id="C0003">Cookies Details‎</button>
                        </div>
                      </div>
                    </section>
                  </div>
                  <section id="ot-pc-lst" className="ot-hide ot-pc-scrollbar">
                    <div id="ot-pc-hdr">
                      <div id="ot-lst-title">
                        <button className="ot-link-btn back-btn-handler" aria-label="Back"><svg id="ot-back-arw" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 444.531 444.531" xmlSpace="preserve">
                        <title>Back Button</title>
                        <g>
                          <path fill="#656565" d="M213.13,222.409L351.88,83.653c7.05-7.043,10.567-15.657,10.567-25.841c0-10.183-3.518-18.793-10.567-25.835 l-21.409-21.416C323.432,3.521,314.817,0,304.637,0s-18.791,3.521-25.841,10.561L92.649,196.425 c-7.044,7.043-10.566,15.656-10.566,25.841s3.521,18.791,10.566,25.837l186.146,185.864c7.05,7.043,15.66,10.564,25.841,10.564 s18.795-3.521,25.834-10.564l21.409-21.412c7.05-7.039,10.567-15.604,10.567-25.697c0-10.085-3.518-18.746-10.567-25.978 L213.13,222.409z"></path>
                        </g></svg></button>
                        <h3>Cookie List</h3>
                      </div>
                      <div className="ot-lst-subhdr">
                        <div className="ot-search-cntr">
                          <p role="status" className="ot-scrn-rdr"></p><input id="vendor-search-handler" type="text" name="vendor-search-handler" placeholder="Search…" aria-label="Cookie list search" /> <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 -30 110 110" aria-hidden="true">
                          <title>Search Icon</title>
                          <path fill="#2e3644" d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23 s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92 c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17 s-17-7.626-17-17S14.61,6,23.984,6z"></path></svg>
                        </div>
                        <div className="ot-fltr-cntr">
                          <button id="filter-btn-handler" aria-label="Filter" aria-haspopup="true"><svg role="presentation" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 402.577 402.577" xmlSpace="preserve">
                          <title>Filter Icon</title>
                          <g>
                            <path fill="#fff" d="M400.858,11.427c-3.241-7.421-8.85-11.132-16.854-11.136H18.564c-7.993,0-13.61,3.715-16.846,11.136 c-3.234,7.801-1.903,14.467,3.999,19.985l140.757,140.753v138.755c0,4.955,1.809,9.232,5.424,12.854l73.085,73.083 c3.429,3.614,7.71,5.428,12.851,5.428c2.282,0,4.66-0.479,7.135-1.43c7.426-3.238,11.14-8.851,11.14-16.845V172.166L396.861,31.413 C402.765,25.895,404.093,19.231,400.858,11.427z"></path>
                          </g></svg></button>
                        </div>
                        <div id="ot-anchor"></div>
                        <section id="ot-fltr-modal">
                          <div id="ot-fltr-cnt">
                            <button id="clear-filters-handler">Clear</button>
                            <div className="ot-fltr-scrlcnt ot-pc-scrollbar">
                              <div className="ot-fltr-opts">
                                <div className="ot-fltr-opt">
                                  <div className="ot-chkbox">
                                    <input id="chkbox-id" type="checkbox" className="category-filter-handler" /> <label htmlFor="chkbox-id"><span className="ot-label-txt">checkbox label</span></label> <span className="ot-label-status">label</span>
                                  </div>
                                </div>
                              </div>
                              <div className="ot-fltr-btns">
                                <button id="filter-apply-handler">Apply</button> <button id="filter-cancel-handler">Cancel</button>
                              </div>
                            </div>
                          </div>
                        </section>
                      </div>
                    </div>
                    <section id="ot-lst-cnt" className="ot-pc-scrollbar">
                      <div id="ot-sel-blk">
                        <div className="ot-sel-all">
                          <div className="ot-sel-all-hdr">
                            <span className="ot-consent-hdr">Consent</span> <span className="ot-li-hdr">Leg.Interest</span>
                          </div>
                          <div className="ot-sel-all-chkbox">
                            <div className="ot-chkbox" id="ot-selall-hostcntr">
                              <input id="select-all-hosts-groups-handler" type="checkbox" /> <label htmlFor="select-all-hosts-groups-handler"><span className="ot-label-txt">checkbox label</span></label> <span className="ot-label-status">label</span>
                            </div>
                            <div className="ot-chkbox" id="ot-selall-vencntr">
                              <input id="select-all-vendor-groups-handler" type="checkbox" /> <label htmlFor="select-all-vendor-groups-handler"><span className="ot-label-txt">checkbox label</span></label> <span className="ot-label-status">label</span>
                            </div>
                            <div className="ot-chkbox" id="ot-selall-licntr">
                              <input id="select-all-vendor-leg-handler" type="checkbox" /> <label htmlFor="select-all-vendor-leg-handler"><span className="ot-label-txt">checkbox label</span></label> <span className="ot-label-status">label</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="ot-sdk-row">
                        <div className="ot-sdk-column">
                          <ul id="ot-host-lst"></ul>
                        </div>
                      </div>
                    </section>
                  </section>
                  <div className="ot-pc-footer ot-pc-scrollbar">
                    <div className="ot-btn-container">
                      <button className="ot-pc-refuse-all-handler">Reject All</button> <button className="save-preference-btn-handler onetrust-close-btn-handler">Confirm My Choices</button>
                    </div>
                    <div className="ot-pc-footer-logo">
                      <Link href="https://www.onetrust.com/products/cookie-consent/" target="_blank" rel="noopener noreferrer" aria-label="Powered by OneTrust Opens in a new Tab"><Image src="https://cdn.cookielaw.org/logos/static/powered_by_logo.svg" alt="Powered by Onetrust" title="Powered by OneTrust Opens in a new Tab" sizes="100vw" width={0} height={0} style={{ width: '100%', height: 'auto' }} unoptimized /></Link>
                    </div>
                  </div>
                </div><iframe className="ot-text-resize" sandbox="allow-same-origin" title="onetrust-text-resize" style={{ position: 'absolute', top: '-50000px', width: '100em' }} aria-hidden="true" data-gtm-yt-inspected-2066570_377="true"></iframe>
              </div>
            </div>
        </section>
        {/* END: KTM converted body */}

    </>
  );
};

export default Layout;
