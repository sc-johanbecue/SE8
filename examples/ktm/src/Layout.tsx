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
        <link
          rel="stylesheet"
          href="https://www.ktm.com/etc.clientlibs/ktm-common/clientlibs/ktm.lc-31d6cfe0d16ae931b73c-a651043aad8c5cbebfdb-020f23687193e20c799b-c5762238026da91673cf-31d6cfe0d16ae931b73c-d3c1b7767953b276e864-lc.min.css"
        />
        <link
          rel="stylesheet"
          href="https://www.ktm.com/etc.clientlibs/ktm-common/clientlibs/clientlib-grid.lc-86852e7323ed8019b9c2f1321e88cda7-lc.min.css"
        />
        <link
          rel="stylesheet"
          href="https://www.ktm.com/etc.clientlibs/ktm-common/frontend2/brands/ktm.lc-748e423daa7ccb0f82f14ad10b884ace-lc.min.css"
        />
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
            <main>
              <div id="content">
                {route && <Placeholder name="headless-main" rendering={route} />}
              </div>
            </main>

            {/* BEGIN: KTM converted body */}
            <section id="ktm-port">
              <div
                className="c-country-suggestion-bar component js-country-suggestion-bar"
                data-isgg="false"
                data-ishqv="false"
              >
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
              </div>
              <div className="root responsivegrid">
                <div className="aem-Grid aem-Grid--12 aem-Grid--default--12">
                  <div className="header aem-GridColumn aem-GridColumn--default--12">
                    <header className="nav js-nav component">
                      <div id="header">
                        {route && <Placeholder name="headless-header" rendering={route} />}
                      </div>
                    </header>
                    <input type="hidden" className="js-data-country" data-country="be" />
                  </div>
                  <div className="stageSlider aem-GridColumn aem-GridColumn--default--12">
                    <div
                      className="c-stage-slider component-fullwidth stageSlider--publish js-stageSlider stageSlider--full-height"
                      data-auto-play="true"
                      data-auto-play-interval-ms="6000"
                    >
                      <div className="glide glide--ltr glide--slider glide--swipeable">
                        <div className="glide__track" data-glide-el="track">
                          <div
                            id="stageSlider-7fb3710540"
                            className="cmp-container glide__slides"
                            role="list"
                            style={{
                              transition: 'transform 400ms cubic-bezier(0.165, 0.84, 0.44, 1)',
                              width: '6770px',
                              transform: 'translate3d(-5416px, 0px, 0px)',
                            }}
                          >
                            <ul>
                              <li
                                className="c-stage-image glide__slide"
                                style={{ width: '1354px', marginRight: '0px' }}
                              >
                                <div>
                                  <section className="glide__content">
                                    <div className="glide__content-image">
                                      <div
                                        id="dynamicmedia_57174900"
                                        data-current-page="/content/websites/ktm-com/europe/be/en"
                                        data-page-locale="en_be"
                                        data-asset-path="ktm/KTM-enduro-300-exc-hardenduro-homepage-header-1"
                                        data-asset-name="KTM-enduro-300-exc-hardenduro-homepage-header.jpg"
                                        data-asset-type="image"
                                        data-viewer-path="https://s7g10.scene7.com/s7viewers/"
                                        data-imageserver="https://s7g10.scene7.com/is/image/"
                                        data-videoserver="https://s7g10.scene7.com/is/content/"
                                        data-contenturl="https://s7g10.scene7.com/is/content/"
                                        data-config="||"
                                        data-wcmdisabled=""
                                        data-dms7=""
                                        data-mode="showOriginalImage"
                                        data-linktarget="_self"
                                        data-title="Explore More"
                                        data-alt="KTM-enduro-300-exc-hardenduro-homepage-header"
                                        className="s7dm-dynamic-media-ktm"
                                      >
                                        <div className="s7responsiveContainer">
                                          <Image
                                            src="https://s7g10.scene7.com/is/image/ktm/KTM-enduro-300-exc-hardenduro-homepage-header-1?wid=2800&dpr=off"
                                            alt="KTM-enduro-300-exc-hardenduro-homepage-header"
                                            className="fluidimage"
                                            sizes="100vw"
                                            width={0}
                                            height={0}
                                            id="dynamicmedia_57174900_resp"
                                            data-src="https://s7g10.scene7.com/is/image/ktm/KTM-enduro-300-exc-hardenduro-homepage-header-1"
                                            data-mode="showOriginalImage"
                                            data-enablehd="always"
                                            style={{ width: '100%', height: 'auto' }}
                                            unoptimized
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="glide__content-container glide__content-container--left component component-fullwidth--padded-lg">
                                      <div className="glide__content-text">
                                        <div className="glide__content-headline">
                                          <p className="glide__content-headline--sub glide__content-headline--secondary">
                                            BUILT TO BEAT THE BEST
                                          </p>
                                          <h1 className="glide__content-headline--main glide__content-headline--secondary">
                                            2026 KTM 300 EXC HARDENDURO
                                          </h1>
                                        </div>
                                        <div className="glide__content-buttons glide__content-buttons--secondary js-stage-auth-image">
                                          <div className="c-btn">
                                            <Link
                                              href="https://www.ktm.com/en-be/models/enduro/2-stroke/2026-ktm-300-exchardenduro.html"
                                              className="c-btn__link c-btn__link--primary-dark"
                                              target="_self"
                                              draggable="true"
                                            >
                                              Explore More
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </section>
                                </div>
                              </li>
                              <li
                                className="c-stage-image glide__slide"
                                style={{ width: '1354px', marginLeft: '0px', marginRight: '0px' }}
                              >
                                <div>
                                  <section className="glide__content">
                                    <div className="glide__content-image">
                                      <div
                                        id="dynamicmedia_65176560"
                                        data-current-page="/content/websites/ktm-com/europe/be/en"
                                        data-page-locale="en_be"
                                        data-asset-path="ktm/KTM-motorsports-daniel-sanders-rally"
                                        data-asset-name="KTM-motorsports-daniel-sanders-rally.jpg"
                                        data-asset-type="image"
                                        data-viewer-path="https://s7g10.scene7.com/s7viewers/"
                                        data-imageserver="https://s7g10.scene7.com/is/image/"
                                        data-videoserver="https://s7g10.scene7.com/is/content/"
                                        data-contenturl="https://s7g10.scene7.com/is/content/"
                                        data-config="||"
                                        data-wcmdisabled=""
                                        data-dms7=""
                                        data-mode="showOriginalImage"
                                        data-linktarget="_self"
                                        data-title="Find Out More"
                                        data-alt="KTM-motorsports-daniel-sanders-rally"
                                        className="s7dm-dynamic-media-ktm"
                                      >
                                        <div className="s7responsiveContainer">
                                          <Image
                                            src="https://s7g10.scene7.com/is/image/ktm/KTM-motorsports-daniel-sanders-rally?wid=2800&dpr=off"
                                            alt="KTM-motorsports-daniel-sanders-rally"
                                            className="fluidimage"
                                            sizes="100vw"
                                            width={0}
                                            height={0}
                                            id="dynamicmedia_65176560_resp"
                                            data-src="https://s7g10.scene7.com/is/image/ktm/KTM-motorsports-daniel-sanders-rally"
                                            data-mode="showOriginalImage"
                                            data-enablehd="always"
                                            style={{ width: '100%', height: 'auto' }}
                                            unoptimized
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="glide__content-container glide__content-container--left component component-fullwidth--padded-lg">
                                      <div className="glide__content-text">
                                        <div className="glide__content-headline">
                                          <p className="glide__content-headline--sub glide__content-headline--secondary">
                                            DANIEL SANDERS
                                          </p>
                                          <p className="glide__content-headline--main glide__content-headline--secondary">
                                            2025 FIM WORLD RALLY-RAID CHAMPION
                                          </p>
                                        </div>
                                        <div className="glide__content-buttons glide__content-buttons--secondary js-stage-auth-image">
                                          <div className="c-btn">
                                            <Link
                                              href="https://www.ktm.com/en-be/racing/racing-news/daniel-sanders-crowned-2025-world-rally-raid-champion-with-victo.html"
                                              className="c-btn__link c-btn__link--primary-dark"
                                              target="_self"
                                              draggable="true"
                                            >
                                              Find Out More
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </section>
                                </div>
                              </li>
                              <li
                                className="c-stage-image glide__slide"
                                style={{ width: '1354px', marginLeft: '0px', marginRight: '0px' }}
                              >
                                <div>
                                  <section className="glide__content">
                                    <div className="glide__content-image">
                                      <div
                                        id="dynamicmedia_23816804"
                                        data-current-page="/content/websites/ktm-com/europe/be/en"
                                        data-page-locale="en_be"
                                        data-asset-path="ktm/KTM-sports-tourer--890-smt-homepage-header6"
                                        data-asset-name="KTM-sports-tourer--890-smt-homepage-header6.jpg"
                                        data-asset-type="image"
                                        data-viewer-path="https://s7g10.scene7.com/s7viewers/"
                                        data-imageserver="https://s7g10.scene7.com/is/image/"
                                        data-videoserver="https://s7g10.scene7.com/is/content/"
                                        data-contenturl="https://s7g10.scene7.com/is/content/"
                                        data-config="||"
                                        data-wcmdisabled=""
                                        data-dms7=""
                                        data-mode="smartcrop"
                                        data-aspectratio="true"
                                        data-linktarget="_self"
                                        data-title="Explore More"
                                        data-alt="KTM-sports-tourer--890-smt-homepage-header6"
                                        className="s7dm-dynamic-media-ktm"
                                      >
                                        <div className="s7responsiveContainer">
                                          <Image
                                            src="https://s7g10.scene7.com/is/image/ktm/KTM-sports-tourer--890-smt-homepage-header6:XLarge?wid=2997&hei=1712&dpr=off"
                                            alt="KTM-sports-tourer--890-smt-homepage-header6"
                                            className="fluidimage"
                                            sizes="100vw"
                                            width={0}
                                            height={0}
                                            id="dynamicmedia_23816804_resp"
                                            data-src="https://s7g10.scene7.com/is/image/ktm/KTM-sports-tourer--890-smt-homepage-header6"
                                            data-mode="smartcrop"
                                            data-enablehd="always"
                                            data-aspectratio="true"
                                            style={{ width: '100%', height: 'auto' }}
                                            unoptimized
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="glide__content-container glide__content-container--center component component-fullwidth--padded-lg">
                                      <div className="glide__content-text">
                                        <div className="glide__content-headline">
                                          <p className="glide__content-headline--sub glide__content-headline--secondary">
                                            The Long-range Supermoto Weapon
                                          </p>
                                          <p className="glide__content-headline--main glide__content-headline--secondary">
                                            ktm 890 smt
                                          </p>
                                        </div>
                                        <div className="glide__content-buttons glide__content-buttons--secondary js-stage-auth-image">
                                          <div className="c-btn">
                                            <Link
                                              href="https://www.ktm.com/en-be/models/sports-tourer/2024-ktm-890-smt.html"
                                              className="c-btn__link c-btn__link--primary-dark"
                                              target="_self"
                                              draggable="true"
                                            >
                                              Explore More
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </section>
                                </div>
                              </li>
                              <li
                                className="c-stage-image glide__slide"
                                style={{ width: '1354px', marginLeft: '0px', marginRight: '0px' }}
                              >
                                <div>
                                  <section className="glide__content">
                                    <div className="glide__content-image">
                                      <div
                                        id="dynamicmedia_56733556"
                                        data-current-page="/content/websites/ktm-com/europe/be/en"
                                        data-page-locale="en_be"
                                        data-asset-path="ktm/KTM-motorsports-josep-garcia-fim-champion"
                                        data-asset-name="KTM-motorsports-josep-garcia-fim-champion.jpg"
                                        data-asset-type="image"
                                        data-viewer-path="https://s7g10.scene7.com/s7viewers/"
                                        data-imageserver="https://s7g10.scene7.com/is/image/"
                                        data-videoserver="https://s7g10.scene7.com/is/content/"
                                        data-contenturl="https://s7g10.scene7.com/is/content/"
                                        data-config="||"
                                        data-wcmdisabled=""
                                        data-dms7=""
                                        data-mode="showOriginalImage"
                                        data-linktarget="_self"
                                        data-title="Find Out More"
                                        data-alt="KTM-motorsports-josep-garcia-fim-champion"
                                        className="s7dm-dynamic-media-ktm"
                                      >
                                        <div className="s7responsiveContainer">
                                          <Image
                                            src="https://s7g10.scene7.com/is/image/ktm/KTM-motorsports-josep-garcia-fim-champion?wid=2800&dpr=off"
                                            alt="KTM-motorsports-josep-garcia-fim-champion"
                                            className="fluidimage"
                                            sizes="100vw"
                                            width={0}
                                            height={0}
                                            id="dynamicmedia_56733556_resp"
                                            data-src="https://s7g10.scene7.com/is/image/ktm/KTM-motorsports-josep-garcia-fim-champion"
                                            data-mode="showOriginalImage"
                                            data-enablehd="always"
                                            style={{ width: '100%', height: 'auto' }}
                                            unoptimized
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="glide__content-container glide__content-container--left component component-fullwidth--padded-lg">
                                      <div className="glide__content-text">
                                        <div className="glide__content-headline">
                                          <p className="glide__content-headline--sub glide__content-headline--secondary">
                                            JOSEP GARCIA
                                          </p>
                                          <p className="glide__content-headline--main glide__content-headline--secondary">
                                            2025 FIM ENDURO1 WORLD CHAMPION
                                          </p>
                                        </div>
                                        <div className="glide__content-buttons glide__content-buttons--secondary js-stage-auth-image">
                                          <div className="c-btn">
                                            <Link
                                              href="https://www.ktm.com/en-be/racing/racing-news/josep-garcia-claims-enduro1-world-title-at-endurogp-of-italy.html"
                                              className="c-btn__link c-btn__link--primary-dark"
                                              target="_self"
                                              draggable="true"
                                            >
                                              Find Out More
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </section>
                                </div>
                              </li>
                              <li
                                className="c-stage-image glide__slide glide__slide--active"
                                style={{ width: '1354px', marginLeft: '0px' }}
                              >
                                <div>
                                  <section className="glide__content">
                                    <div className="glide__content-image">
                                      <div
                                        id="dynamicmedia_30984033"
                                        data-current-page="/content/websites/ktm-com/europe/be/en"
                                        data-page-locale="en_be"
                                        data-asset-path="ktm/KTM-powerwear-gfx-homepage-header6"
                                        data-asset-name="KTM-powerwear-gfx-homepage-header6.jpg"
                                        data-asset-type="image"
                                        data-viewer-path="https://s7g10.scene7.com/s7viewers/"
                                        data-imageserver="https://s7g10.scene7.com/is/image/"
                                        data-videoserver="https://s7g10.scene7.com/is/content/"
                                        data-contenturl="https://s7g10.scene7.com/is/content/"
                                        data-config="||"
                                        data-wcmdisabled=""
                                        data-dms7=""
                                        data-mode="showOriginalImage"
                                        data-aspectratio="true"
                                        data-linktarget="_self"
                                        data-title="Explore More"
                                        data-alt="KTM-powerwear-gfx-homepage-header6"
                                        className="s7dm-dynamic-media-ktm"
                                      >
                                        <div className="s7responsiveContainer">
                                          <Image
                                            src="https://s7g10.scene7.com/is/image/ktm/KTM-powerwear-gfx-homepage-header6?wid=2800&dpr=off"
                                            alt="KTM-powerwear-gfx-homepage-header6"
                                            className="fluidimage"
                                            sizes="100vw"
                                            width={0}
                                            height={0}
                                            id="dynamicmedia_30984033_resp"
                                            data-src="https://s7g10.scene7.com/is/image/ktm/KTM-powerwear-gfx-homepage-header6"
                                            data-mode="showOriginalImage"
                                            data-enablehd="always"
                                            data-aspectratio="true"
                                            style={{ width: '100%', height: 'auto' }}
                                            unoptimized
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="glide__content-container glide__content-container--center component component-fullwidth--padded-lg">
                                      <div className="glide__content-text">
                                        <div className="glide__content-headline">
                                          <p className="glide__content-headline--sub glide__content-headline--secondary">
                                            ADVANCED FABRICS. CARBON STRENGTH. PURE KTM STYLE
                                          </p>
                                          <p className="glide__content-headline--main glide__content-headline--secondary">
                                            THE ALL-NEW 2025 KTM POWERWEAR
                                          </p>
                                        </div>
                                        <div className="glide__content-buttons glide__content-buttons--secondary js-stage-auth-image">
                                          <div className="c-btn">
                                            <Link
                                              href="https://www.ktm.com/en-be/parts---wear/powerwear/products.html"
                                              className="c-btn__link c-btn__link--primary-dark"
                                              target="_self"
                                              draggable="true"
                                            >
                                              Explore More
                                            </Link>
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
                            <Link
                              href="https://www.ktm.com/en-be/find-a-dealer.html"
                              className="c-icon-list-item__content"
                              target="_self"
                            >
                              <svg
                                id="iconbar-dealer-search"
                                className="iconbar-svg-fill"
                                width="36"
                                height="42"
                                viewBox="0 0 36 42"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M16.4 23c-4.6 0-8.3-3.7-8.3-8.3 0-4.6 3.7-8.3 8.3-8.3 4.6 0 8.3 3.7 8.3 8.3 0 1.9-.7 3.8-1.9 5.3-1.5 1.9-3.9 3-6.4 3zm0-14.2c-3.2 0-5.8 2.6-5.8 5.8s2.6 5.8 5.8 5.8 5.8-2.6 5.8-5.8c0-1.7-.8-3.4-2.1-4.5-1-.8-2.3-1.3-3.7-1.3z"
                                ></path>
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="m16.6 40.6-.8-.8c-.3-.3-8-7.7-10.5-10.4-6.6-7.3-7.1-17.1-1.1-23.8 6-6.8 16.4-7.4 23.2-1.4l.2.2c7.1 6.3 6.5 17.5 1.5 23.6-3.1 3.7-11.3 11.5-11.6 11.8l-.9.8zm-.2-38.1c-4 0-7.7 1.7-10.3 4.7C1 13 1.4 21.4 7.1 27.7c2 2.2 7.4 7.4 9.5 9.5 2.2-2.1 8.1-7.9 10.5-10.8 4.3-5.3 4.7-15-1.2-20.2-2.6-2.3-6-3.6-9.5-3.7z"
                                ></path>
                              </svg>
                              <h6 className="c-icon-list-item__title">DEALER SEARCH</h6>
                            </Link>
                          </div>
                          <div className="c-icon-list__item">
                            <Link
                              href="https://configurator.ktm.com/models/"
                              className="c-icon-list-item__content"
                              target="_self"
                            >
                              <svg
                                id="iconbar-configurator"
                                fill="none"
                                className="iconbar-svg-fill"
                                width="41"
                                height="40"
                                viewBox="0 0 41 40"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M25.1425 19.7297C25.533 19.3391 26.1662 19.3391 26.5567 19.7297L36.9734 30.1463C39.0889 32.2619 39.0889 35.695 36.9734 37.8105C34.8579 39.9261 31.4247 39.9261 29.3092 37.8105L18.8925 27.3939C18.502 27.0034 18.502 26.3702 18.8925 25.9797C19.283 25.5891 19.9162 25.5891 20.3067 25.9797L30.7234 36.3963C32.0579 37.7308 34.2247 37.7308 35.5592 36.3963C36.8936 35.0619 36.8936 32.895 35.5592 31.5605L25.1425 21.1439C24.752 20.7534 24.752 20.1202 25.1425 19.7297Z"
                                ></path>
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M31.532 2.2545C28.7082 1.55828 25.6244 2.28405 23.4313 4.4772C21.1045 6.804 20.4302 10.1336 21.3518 13.0914C21.4624 13.4462 21.367 13.8331 21.1042 14.096L3.64004 31.5601C2.27597 32.9263 2.30544 35.1572 3.73058 36.484C5.06514 37.7281 7.21436 37.6574 8.55041 36.3213L25.94 18.9317C26.2028 18.6689 26.5897 18.5735 26.9446 18.6841C29.9023 19.6057 33.2319 18.9314 35.5587 16.6047C37.7523 14.4111 38.4779 11.3267 37.7811 8.50242L32.8063 13.4772C32.4158 13.8677 31.7826 13.8677 31.3921 13.4772L26.5587 8.64387C26.1683 8.2534 26.1682 7.62034 26.5586 7.22979L31.532 2.2545ZM32.0482 1.73812C32.0481 1.73817 32.0482 1.73808 32.0482 1.73812V1.73812ZM38.0159 8.14186L38.5179 7.61802L37.9845 8.14813C37.995 8.14633 38.0055 8.14424 38.0159 8.14186ZM39.2213 6.90714C39.3917 7.07426 39.5172 7.28431 39.5837 7.5135C40.6592 11.1065 39.8269 15.1649 36.9729 18.0189C34.2432 20.7486 30.4123 21.6276 26.9407 20.7594L9.96462 37.7355C7.91316 39.787 4.53691 39.97 2.3673 37.9474C0.109721 35.8451 0.0646302 32.3097 2.22499 30.1467L19.2765 13.0952C18.4083 9.62367 19.2873 5.79277 22.0171 3.06299C24.8726 0.207485 28.9337 -0.624173 32.5281 0.45392L32.5391 0.45722C32.735 0.518434 32.9485 0.630368 33.1302 0.816034L33.4625 1.14841C34.0156 1.70143 34.0156 2.59918 33.4625 3.1522L28.6799 7.93663L32.0992 11.3559L36.8837 6.57132C37.4368 6.0183 38.3345 6.0183 38.8875 6.57132L38.8897 6.5735L39.2213 6.90714Z"
                                ></path>
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M3.8592 0.942237C3.12412 0.697271 2.31572 0.889558 1.76934 1.43594L3.8592 0.942237ZM3.8592 0.942237L8.07323 2.34622C9.33508 2.76607 10.1827 3.94734 10.1827 5.27222V10.0201C10.1827 10.5724 9.73498 11.0201 9.18269 11.0201H4.43478C3.10723 11.0201 1.92863 10.1725 1.50896 8.91122L0.104844 4.69678C0.104828 4.69673 0.104859 4.69683 0.104844 4.69678C-0.140122 3.9617 0.0521187 3.15316 0.598503 2.60678L1.76934 1.43594M2.00226 4.06446L3.40642 8.27905C3.55358 8.72161 3.96669 9.02013 4.43478 9.02013H8.18269V5.27222C8.18269 4.80563 7.88417 4.39102 7.44216 4.24405L3.22702 2.8397C3.21213 2.83473 3.19546 2.83824 3.18355 2.85016L2.01272 4.02099C2.0008 4.0329 1.99729 4.04957 2.00226 4.06446Z"
                                ></path>
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M8.48625 9.31291C8.87678 8.92239 9.50994 8.92239 9.90047 9.31291L17.1921 16.6046C17.5827 16.9951 17.5827 17.6283 17.1921 18.0188C16.8016 18.4093 16.1684 18.4093 15.7779 18.0188L8.48625 10.7271C8.09573 10.3366 8.09573 9.70344 8.48625 9.31291Z"
                                ></path>
                              </svg>
                              <h6 className="c-icon-list-item__title">CONFIGURATOR</h6>
                            </Link>
                          </div>
                          <div className="c-icon-list__item">
                            <Link
                              href="https://testride.ktm.com/"
                              className="c-icon-list-item__content"
                              target="_self"
                            >
                              <svg
                                id="iconbar-testride"
                                fill="none"
                                className="iconbar-svg-fill"
                                width="36"
                                height="40"
                                viewBox="0 0 36 40"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M16.691 1.95649C11.5243 -0.33979 5.57316 -0.0392357 0.664188 2.76589C0.330372 2.95665 0.148205 3.31064 0.160765 3.66993V28.7617C0.159955 28.7849 0.159951 28.8082 0.160765 28.8315V38.2704C0.160765 38.8227 0.608481 39.2704 1.16077 39.2704C1.71305 39.2704 2.16077 38.8227 2.16077 38.2704V29.3878C6.41604 27.1576 11.4693 26.9859 15.8787 28.9456L19.316 30.4734C24.4826 32.7696 30.4338 32.4691 35.3428 29.6639C35.6543 29.4859 35.8466 29.1545 35.8466 28.7957V3.63414C35.8466 3.27767 35.6569 2.94815 35.3485 2.76923C35.0402 2.5903 34.66 2.58903 34.3505 2.76589C29.9942 5.25519 24.7131 5.52191 20.1283 3.48418L16.691 1.95649ZM2.16077 27.1636C6.75128 25.0882 12.0391 25.0505 16.6909 27.118L16.2848 28.0318L16.6909 27.118L20.1282 28.6457C24.5377 30.6055 29.5912 30.4338 33.8466 28.2033V5.26598C29.256 7.34163 23.968 7.37935 19.316 5.31181L15.8787 3.78411C11.4693 1.8244 6.41605 1.99605 2.16077 4.22626V27.1636Z"
                                ></path>
                              </svg>
                              <h6 className="c-icon-list-item__title">BOOK A TEST RIDE</h6>
                            </Link>
                          </div>
                          <div className="c-icon-list__item">
                            <Link
                              href="https://www.ktm.com/en-be/service/spare-parts-finder.html"
                              className="c-icon-list-item__content"
                              target="_self"
                            >
                              <svg
                                id="iconbar-spareparts-finder"
                                fill="none"
                                className="iconbar-svg-fill"
                                width="42"
                                height="38"
                                viewBox="0 0 42 38"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M13.4421 1.72519C12.9265 1.72519 12.5076 2.14408 12.5076 2.65967V4.45674C12.5076 4.97233 12.9265 5.39122 13.4421 5.39122H17.0353L17.0363 5.39122L17.0372 5.39122H24.2225L24.2234 5.39122L24.2243 5.39122H27.8187C28.3343 5.39122 28.7532 4.97233 28.7532 4.45674V2.65967C28.7532 2.14408 28.3343 1.72519 27.8187 1.72519H13.4421ZM17.8989 7.11641H23.3608V12.0156L17.8989 11.3328V7.11641ZM25.086 7.11641V12.2312L27.9263 12.5863C28.3991 12.6454 28.7344 13.0765 28.6753 13.5492C28.6162 14.0219 28.1851 14.3572 27.7124 14.2981L25.086 13.9698V17.6224L27.9263 17.9775C28.3991 18.0366 28.7344 18.4677 28.6753 18.9404C28.6162 19.4131 28.1851 19.7484 27.7124 19.6894L25.086 19.3611V23.5048C26.1316 23.8631 26.8837 24.8549 26.8837 26.0216V27.8186C26.8837 29.287 25.6924 30.4783 24.224 30.4783H24.1525C25.512 32.2266 25.3884 34.7547 23.7818 36.3612C22.0413 38.1017 19.2195 38.1017 17.479 36.3612C15.8724 34.7547 15.7488 32.2266 17.1083 30.4783H17.0357C15.5673 30.4783 14.376 29.287 14.376 27.8186V26.0216C14.376 24.8549 15.1281 23.8631 16.1737 23.5048V18.247L13.3358 17.8923C12.863 17.8332 12.5277 17.4021 12.5868 16.9294C12.6459 16.4566 13.077 16.1213 13.5498 16.1804L16.1737 16.5084V12.8558L13.3358 12.5011C12.863 12.442 12.5277 12.0109 12.5868 11.5381C12.6459 11.0654 13.077 10.7301 13.5498 10.7892L16.1737 11.1172V7.11641H13.4421C11.9737 7.11641 10.7824 5.92512 10.7824 4.45674V2.65967C10.7824 1.19129 11.9737 0 13.4421 0H27.8187C29.2871 0 30.4784 1.19129 30.4784 2.65967V4.45674C30.4784 5.92512 29.2871 7.11641 27.8187 7.11641H25.086ZM17.8989 18.4627V23.3619H23.3608V19.1454L17.8989 18.4627ZM23.3608 17.4068L17.8989 16.7241V13.0714L23.3608 13.7542V17.4068ZM20.6281 30.4783C19.9298 30.4789 19.2317 30.7456 18.6989 31.2783C17.6322 32.3451 17.6322 34.0746 18.6989 35.1413C19.7656 36.2081 21.4952 36.2081 22.5619 35.1413C23.6286 34.0746 23.6286 32.3451 22.5619 31.2783C22.0291 30.7456 21.331 30.4789 20.6327 30.4783H20.6281ZM24.2234 25.0871L24.2124 25.0871H17.0473L17.0363 25.0871L17.0281 25.0871C16.516 25.0912 16.1012 25.5085 16.1012 26.0216V27.8186C16.1012 28.3342 16.5201 28.7531 17.0357 28.7531H24.224C24.7396 28.7531 25.1585 28.3342 25.1585 27.8186V26.0216C25.1585 25.5085 24.7437 25.0912 24.2316 25.0871L24.2234 25.0871ZM4.56562 8.15984C4.90249 7.82298 5.44865 7.82298 5.78552 8.15984L6.86376 9.23808C7.20063 9.57495 7.20063 10.1211 6.86376 10.458C6.5269 10.7948 5.98073 10.7948 5.64387 10.458L4.56562 9.37973C4.22876 9.04287 4.22876 8.49671 4.56562 8.15984ZM6.86376 24.8346C7.20063 24.4978 7.20063 23.9516 6.86376 23.6147C6.5269 23.2779 5.98073 23.2779 5.64387 23.6147L4.56562 24.693C4.22876 25.0299 4.22876 25.576 4.56562 25.9129C4.90249 26.2497 5.44865 26.2497 5.78552 25.9129L6.86376 24.8346ZM0 17.0363C0 16.5599 0.386197 16.1737 0.862595 16.1737H2.65967C3.13607 16.1737 3.52226 16.5599 3.52226 17.0363C3.52226 17.5127 3.13607 17.8989 2.65967 17.8989H0.862595C0.386197 17.8989 0 17.5127 0 17.0363ZM35.6158 23.6147C35.2789 23.2779 34.7328 23.2779 34.3959 23.6147C34.0591 23.9516 34.0591 24.4978 34.3959 24.8346L35.4742 25.9129C35.811 26.2497 36.3572 26.2497 36.6941 25.9129C37.0309 25.576 37.0309 25.0299 36.6941 24.693L35.6158 23.6147ZM36.6941 8.15984C37.0309 8.49671 37.0309 9.04287 36.6941 9.37973L35.6158 10.458C35.2789 10.7948 34.7328 10.7948 34.3959 10.458C34.0591 10.1211 34.0591 9.57495 34.3959 9.23808L35.4742 8.15984C35.811 7.82298 36.3572 7.82298 36.6941 8.15984ZM38.6011 16.1737C38.1247 16.1737 37.7385 16.5599 37.7385 17.0363C37.7385 17.5127 38.1247 17.8989 38.6011 17.8989H40.3982C40.8746 17.8989 41.2608 17.5127 41.2608 17.0363C41.2608 16.5599 40.8746 16.1737 40.3982 16.1737H38.6011Z"
                                ></path>
                              </svg>
                              <h6 className="c-icon-list-item__title">SPARE PARTS FINDER</h6>
                            </Link>
                          </div>
                          <div className="c-icon-list__item">
                            <Link
                              href="https://www.ktm.com/en-be/news.html#promotions"
                              className="c-icon-list-item__content"
                              target="_self"
                            >
                              <svg
                                id="iconbar-promotions"
                                className="iconbar-svg-stroke"
                                width="42"
                                height="42"
                                viewBox="0 0 42 42"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fill="transparent"
                                  d="M32.396 9.604L31.13 4.164L25.372 4.676L21.008 1L16.658 4.676L10.886 4.164L9.604 9.604L4.164 10.87L4.676 16.628L1 20.992L4.676 25.342L4.164 31.114L9.604 32.396L10.87 37.836L16.628 37.324L20.992 41L25.342 37.324L31.114 37.836L32.396 32.396L37.836 31.13L37.324 25.372L41 21.008L37.324 16.658L37.836 10.886L32.396 9.604Z"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                ></path>
                                <path
                                  d="M15 27L27 15"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                ></path>
                                <path
                                  d="M15.498 15C15.222 15 14.998 15.224 15 15.5C15 15.776 15.224 16 15.5 16C15.776 16 16 15.776 16 15.5C16 15.224 15.776 15 15.498 15"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                ></path>
                                <path
                                  d="M26.498 26C26.222 26 25.998 26.224 26 26.5C26 26.776 26.224 27 26.5 27C26.776 27 27 26.776 27 26.5C27 26.224 26.776 26 26.498 26"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                ></path>
                              </svg>
                              <h6 className="c-icon-list-item__title">PROMOTIONS</h6>
                            </Link>
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
                                    <Link
                                      href="https://www.ktm.com/en-be/models/enduro/4-stroke/2026-ktm-450-excf6days.html"
                                      className="c-model-list__item__info"
                                    >
                                      <figure className="c-model-list__image">
                                        <Image
                                          src="https://azwecdnepstoragewebsiteuploads.azureedge.net/PHO_BIKE_90_RE_KTM-enduro-450-excf-6days-right-side-studio-image_%23SALL_%23AEPI_%23V1.png"
                                          alt="2026 KTM 450 EXC-F 6DAYS"
                                          sizes="100vw"
                                          width={0}
                                          height={0}
                                          style={{ width: '100%', height: 'auto' }}
                                          unoptimized
                                        />
                                      </figure>
                                      <h3 className="c-model-list__item-heading">
                                        2026 KTM 450 EXC-F 6DAYS
                                      </h3>
                                      <h4 className="c-model-list__item-slogan">
                                        TEST YOUR LIMITS
                                      </h4>
                                      <div className="c-model-list__item-details">
                                        <div className="c-model-list__item-availibity"></div>
                                      </div>
                                    </Link>
                                    <div className="c-model-list__buttons">
                                      <Link
                                        href="https://www.ktm.com/en-be/models/enduro/4-stroke/2026-ktm-450-excf6days.html"
                                        className="c-btn__link c-model-list__button c-model-list__button--model-page c-btn__link--primary-dark"
                                      >
                                        VISIT MODEL PAGE
                                      </Link>
                                    </div>
                                  </article>
                                  <article className="c-model-list__item">
                                    <Link
                                      href="https://www.ktm.com/en-be/models/supermoto/2026-ktm-690-smcr.html"
                                      className="c-model-list__item__info"
                                    >
                                      <figure className="c-model-list__image">
                                        <Image
                                          src="https://azwecdnepstoragewebsiteuploads.azureedge.net/PHO_BIKE_90_RE_KTM-supermoto-690-smcr-right-side-view-studio-image_%23SALL_%23AEPI_%23V1.png"
                                          alt="2026 KTM 690 SMC R"
                                          sizes="100vw"
                                          width={0}
                                          height={0}
                                          style={{ width: '100%', height: 'auto' }}
                                          unoptimized
                                        />
                                      </figure>
                                      <h3 className="c-model-list__item-heading">
                                        2026 KTM 690 SMC R
                                      </h3>
                                      <h4 className="c-model-list__item-slogan">STOP GROWING UP</h4>
                                      <div className="c-model-list__item-details">
                                        <div className="c-model-list__item-availibity"></div>
                                      </div>
                                    </Link>
                                    <div className="c-model-list__buttons">
                                      <Link
                                        href="https://www.ktm.com/en-be/models/supermoto/2026-ktm-690-smcr.html"
                                        className="c-btn__link c-model-list__button c-model-list__button--model-page c-btn__link--primary-dark"
                                      >
                                        VISIT MODEL PAGE
                                      </Link>
                                    </div>
                                  </article>
                                  <article className="c-model-list__item">
                                    <Link
                                      href="https://www.ktm.com/en-be/models/dual-sport/2026-ktm-690-enduror.html"
                                      className="c-model-list__item__info"
                                    >
                                      <figure className="c-model-list__image">
                                        <Image
                                          src="https://azwecdnepstoragewebsiteuploads.azureedge.net/PHO_BIKE_90_RE_KTM-dual-sport-690-enduro-r-2026-right-side-studio-image_%23SALL_%23AEPI_%23V1.png"
                                          alt="2026 KTM 690 Enduro R"
                                          sizes="100vw"
                                          width={0}
                                          height={0}
                                          style={{ width: '100%', height: 'auto' }}
                                          unoptimized
                                        />
                                      </figure>
                                      <h3 className="c-model-list__item-heading">
                                        2026 KTM 690 Enduro R
                                      </h3>
                                      <h4 className="c-model-list__item-slogan">
                                        ALL TERRAIN, ALL THE TIME
                                      </h4>
                                      <div className="c-model-list__item-details">
                                        <div className="c-model-list__item-availibity"></div>
                                      </div>
                                    </Link>
                                    <div className="c-model-list__buttons">
                                      <Link
                                        href="https://www.ktm.com/en-be/models/dual-sport/2026-ktm-690-enduror.html"
                                        className="c-btn__link c-model-list__button c-model-list__button--model-page c-btn__link--primary-dark"
                                      >
                                        VISIT MODEL PAGE
                                      </Link>
                                    </div>
                                  </article>
                                </div>
                              </section>
                            </div>
                          </div>
                        </div>

                        <div className="image dynamicmedia parbase aem-GridColumn aem-GridColumn--default--12">
                          <div className="cq-dd-image">
                            <figure
                              className="c-image js-counter-authentication-image component"
                              data-special="1"
                              data-link="https://azweapppreorderserviceprod.azurewebsites.net/preorderservice/"
                            >
                              <div className="c-image__content">
                                <div
                                  id="dynamicmedia_36229118"
                                  data-current-page="/content/websites/ktm-com/europe/be/en"
                                  data-page-locale="en_be"
                                  data-asset-path="ktm/KTM_Header_AdventureMY23_V3"
                                  data-asset-name="KTM_Header_AdventureMY23_V3.jpg"
                                  data-asset-type="image"
                                  data-viewer-path="https://s7g10.scene7.com/s7viewers/"
                                  data-imageserver="https://s7g10.scene7.com/is/image/"
                                  data-videoserver="https://s7g10.scene7.com/is/content/"
                                  data-contenturl="https://s7g10.scene7.com/is/content/"
                                  data-config="||"
                                  data-wcmdisabled=""
                                  data-dms7=""
                                  data-mode="smartcrop"
                                  data-aspectratio="true"
                                  data-linktarget="_self"
                                  data-alt="A person rides a KTM Adventure motorcycle along a rugged dirt trail, showcasing adventure and outdoor exploration."
                                  className="s7dm-dynamic-media-ktm"
                                >
                                  <div className="s7responsiveContainer">
                                    <Image
                                      src="https://s7g10.scene7.com/is/image/ktm/KTM_Header_AdventureMY23_V3?wid=1274&hei=510&dpr=off"
                                      alt="A person rides a KTM Adventure motorcycle along a rugged dirt trail, showcasing adventure and outdoor exploration."
                                      className="fluidimage"
                                      sizes="100vw"
                                      width={0}
                                      height={0}
                                      id="dynamicmedia_36229118_resp"
                                      data-src="https://s7g10.scene7.com/is/image/ktm/KTM_Header_AdventureMY23_V3"
                                      data-mode="smartcrop"
                                      data-enablehd="always"
                                      data-aspectratio="true"
                                      style={{ width: '100%', height: 'auto' }}
                                      unoptimized
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="c-image__overlay c-image__overlay--right">
                                <div className="content">
                                  <p className="subheading">ride worry-free</p>
                                  <p className="heading">ktm premium warranty</p>
                                  <div
                                    id="authenticateBeforeRedirect"
                                    data-authenticate="false"
                                    style={{ display: 'none' }}
                                  ></div>
                                  <Link
                                    href="https://www.ktm.com/en-be/service/warranty.html"
                                    className="c-btn__link js-authenticate-btn"
                                    target="_self"
                                    id="authenticate-btn"
                                  >
                                    EXPLORE more
                                  </Link>
                                </div>
                              </div>
                            </figure>
                          </div>
                        </div>
                        <div className="responsivegrid-3-columns responsivegrid aem-GridColumn aem-GridColumn--default--12">
                          <div className="aem-Grid aem-Grid--12 aem-Grid--default--12 aem-Grid--phone--12">
                            <div className="image dynamicmedia parbase aem-GridColumn--default--none aem-GridColumn--phone--none aem-GridColumn--phone--12 aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--offset--phone--0 aem-GridColumn--offset--default--0">
                              <div className="cq-dd-image showOriginalImage">
                                <figure
                                  className="c-image js-counter-authentication-image component"
                                  data-special="1"
                                  data-link="https://azweapppreorderserviceprod.azurewebsites.net/preorderservice/"
                                >
                                  <Link
                                    href="https://www.ktm.com/en-be/parts---wear/powerwear/products.html"
                                    className="c-image__link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    <div className="c-image__content">
                                      <div
                                        id="dynamicmedia_99848000"
                                        data-current-page="/content/websites/ktm-com/europe/be/en"
                                        data-page-locale="en_be"
                                        data-asset-path="ktm/KTM-powerwear-homepage-image-5"
                                        data-asset-name="KTM-powerwear-homepage-image-5.jpg"
                                        data-asset-type="image"
                                        data-viewer-path="https://s7g10.scene7.com/s7viewers/"
                                        data-imageserver="https://s7g10.scene7.com/is/image/"
                                        data-videoserver="https://s7g10.scene7.com/is/content/"
                                        data-contenturl="https://s7g10.scene7.com/is/content/"
                                        data-config="||"
                                        data-wcmdisabled=""
                                        data-dms7=""
                                        data-mode="showOriginalImage"
                                        data-aspectratio="true"
                                        data-linktarget="_blank"
                                        data-alt="A men with a KTM Backpack on his back, standing next to a Rider wearing orange Racing clothes, sitting on a KTM Motocross Bike."
                                        className="s7dm-dynamic-media-ktm"
                                      >
                                        <div className="s7responsiveContainer">
                                          <Image
                                            src="https://s7g10.scene7.com/is/image/ktm/KTM-powerwear-homepage-image-5?wid=1300&dpr=off"
                                            alt="A men with a KTM Backpack on his back, standing next to a Rider wearing orange Racing clothes, sitting on a KTM Motocross Bike."
                                            className="fluidimage"
                                            sizes="100vw"
                                            width={0}
                                            height={0}
                                            id="dynamicmedia_99848000_resp"
                                            data-src="https://s7g10.scene7.com/is/image/ktm/KTM-powerwear-homepage-image-5"
                                            data-mode="showOriginalImage"
                                            data-enablehd="always"
                                            data-aspectratio="true"
                                            style={{ width: '100%', height: 'auto' }}
                                            unoptimized
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </Link>
                                  <div className="c-image__overlay c-image__overlay--center c-image__overlay--background">
                                    <div className="content">
                                      <p className="subheading"></p>
                                      <p className="heading">KTM POWERWEAR</p>
                                      <div
                                        id="authenticateBeforeRedirect"
                                        data-authenticate="false"
                                        style={{ display: 'none' }}
                                      ></div>
                                    </div>
                                  </div>
                                </figure>
                              </div>
                            </div>
                            <div className="image dynamicmedia parbase aem-GridColumn--default--none aem-GridColumn--phone--none aem-GridColumn--phone--12 aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--offset--phone--0 aem-GridColumn--offset--default--0">
                              <div className="cq-dd-image showOriginalImage">
                                <figure
                                  className="c-image js-counter-authentication-image component"
                                  data-special="1"
                                  data-link="https://azweapppreorderserviceprod.azurewebsites.net/preorderservice/"
                                >
                                  <Link
                                    href="https://www.ktm.com/en-be/parts---wear/powerparts/products.html"
                                    className="c-image__link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    <div className="c-image__content">
                                      <div
                                        id="dynamicmedia_24290916"
                                        data-current-page="/content/websites/ktm-com/europe/be/en"
                                        data-page-locale="en_be"
                                        data-asset-path="ktm/KTM-powerparts-homepage-image-7"
                                        data-asset-name="KTM-powerparts-homepage-image-7.jpg"
                                        data-asset-type="image"
                                        data-viewer-path="https://s7g10.scene7.com/s7viewers/"
                                        data-imageserver="https://s7g10.scene7.com/is/image/"
                                        data-videoserver="https://s7g10.scene7.com/is/content/"
                                        data-contenturl="https://s7g10.scene7.com/is/content/"
                                        data-config="||"
                                        data-wcmdisabled=""
                                        data-dms7=""
                                        data-mode="showOriginalImage"
                                        data-aspectratio="true"
                                        data-linktarget="_blank"
                                        data-alt="A detailed close-up view of a KTM motorcycle engine showcasing its intricate components and design."
                                        className="s7dm-dynamic-media-ktm"
                                      >
                                        <div className="s7responsiveContainer">
                                          <Image
                                            src="https://s7g10.scene7.com/is/image/ktm/KTM-powerparts-homepage-image-7?wid=1300&dpr=off"
                                            alt="A detailed close-up view of a KTM motorcycle engine showcasing its intricate components and design."
                                            className="fluidimage"
                                            sizes="100vw"
                                            width={0}
                                            height={0}
                                            id="dynamicmedia_24290916_resp"
                                            data-src="https://s7g10.scene7.com/is/image/ktm/KTM-powerparts-homepage-image-7"
                                            data-mode="showOriginalImage"
                                            data-enablehd="always"
                                            data-aspectratio="true"
                                            style={{ width: '100%', height: 'auto' }}
                                            unoptimized
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </Link>
                                  <div className="c-image__overlay c-image__overlay--center c-image__overlay--background">
                                    <div className="content">
                                      <p className="subheading"></p>
                                      <p className="heading">KTM POWERPARTS</p>
                                      <div
                                        id="authenticateBeforeRedirect"
                                        data-authenticate="false"
                                        style={{ display: 'none' }}
                                      ></div>
                                    </div>
                                  </div>
                                </figure>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="image dynamicmedia parbase aem-GridColumn aem-GridColumn--default--12">
                          <div className="cq-dd-image">
                            <figure
                              className="c-image js-counter-authentication-image component"
                              data-special="1"
                              data-link="https://azweapppreorderserviceprod.azurewebsites.net/preorderservice/"
                            >
                              <div className="c-image__content">
                                <div
                                  id="dynamicmedia_24352996"
                                  data-current-page="/content/websites/ktm-com/europe/be/en"
                                  data-page-locale="en_be"
                                  data-asset-path="ktm/KTM-homepage-tech-guide-banner4"
                                  data-asset-name="KTM-homepage-tech-guide-banner4.jpg"
                                  data-asset-type="image"
                                  data-viewer-path="https://s7g10.scene7.com/s7viewers/"
                                  data-imageserver="https://s7g10.scene7.com/is/image/"
                                  data-videoserver="https://s7g10.scene7.com/is/content/"
                                  data-contenturl="https://s7g10.scene7.com/is/content/"
                                  data-config="||"
                                  data-wcmdisabled=""
                                  data-dms7=""
                                  data-mode="smartcrop"
                                  data-aspectratio="true"
                                  data-linktarget="_self"
                                  data-alt="A person rides a KTM Adventure motorcycle along a rugged dirt trail, showcasing adventure and outdoor exploration."
                                  className="s7dm-dynamic-media-ktm"
                                >
                                  <div className="s7responsiveContainer">
                                    <Image
                                      src="https://s7g10.scene7.com/is/image/ktm/KTM-homepage-tech-guide-banner4?wid=1274&hei=531&dpr=off"
                                      alt="A person rides a KTM Adventure motorcycle along a rugged dirt trail, showcasing adventure and outdoor exploration."
                                      className="fluidimage"
                                      sizes="100vw"
                                      width={0}
                                      height={0}
                                      id="dynamicmedia_24352996_resp"
                                      data-src="https://s7g10.scene7.com/is/image/ktm/KTM-homepage-tech-guide-banner4"
                                      data-mode="smartcrop"
                                      data-enablehd="always"
                                      data-aspectratio="true"
                                      style={{ width: '100%', height: 'auto' }}
                                      unoptimized
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="c-image__overlay c-image__overlay--right">
                                <div className="content">
                                  <p className="subheading">unlock your bikes full potential</p>
                                  <p className="heading">KTM TECH GUIDE</p>
                                  <div
                                    id="authenticateBeforeRedirect"
                                    data-authenticate="false"
                                    style={{ display: 'none' }}
                                  ></div>
                                  <Link
                                    href="https://www.ktm.com/en-be/tech-guide.html"
                                    className="c-btn__link js-authenticate-btn"
                                    target="_self"
                                    id="authenticate-btn"
                                  >
                                    EXPLORE more
                                  </Link>
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
                                          <div
                                            id="38562452"
                                            data-current-page="/content/websites/ktm-com/europe/be/en"
                                            data-page-locale="en"
                                            data-asset-path="ktm/KTM Q3 Sales Promotion Generic Thumbnail 1800x1800"
                                            data-asset-name="KTM Q3 Sales Promotion Generic Thumbnail 1800x1800.jpg"
                                            data-asset-type="image"
                                            data-viewer-path="https://s7g10.scene7.com/s7viewers/"
                                            data-imageserver="https://s7g10.scene7.com/is/image/"
                                            data-videoserver="https://s7g10.scene7.com/is/content/"
                                            data-contenturl="https://s7g10.scene7.com/is/content/"
                                            data-imagepreset="ktm_teaser_square"
                                            data-wcmdisabled=""
                                            data-dms7=""
                                            className="s7dm-dynamic-media-ktm"
                                          >
                                            <div className="s7responsiveContainer">
                                              <Image
                                                src="https://s7g10.scene7.com/is/image/ktm/KTM%20Q3%20Sales%20Promotion%20Generic%20Thumbnail%201800x1800?$ktm_teaser_square$&wid=500&dpr=off"
                                                alt="KTM%20Q3%20Sales%20Promotion%20Generic%20Thumbnail%201800x1800"
                                                className="fluidimage"
                                                sizes="100vw"
                                                width={0}
                                                height={0}
                                                id="38562452_resp"
                                                data-src="https://s7g10.scene7.com/is/image/ktm/KTM Q3 Sales Promotion Generic Thumbnail 1800x1800?$ktm_teaser_square$"
                                                data-enablehd="always"
                                                style={{ width: '100%', height: 'auto' }}
                                                unoptimized
                                              />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </figure>
                                  </div>
                                </Link>
                                <div className="c-teaser-list__content c-teaser-list__content--three-items-per-row">
                                  <time
                                    className="c-teaser-list__date c-teaser-list__date--three-items-per-row"
                                    dateTime="01 Oct 2025"
                                  >
                                    01 Oct 2025
                                  </time>{' '}
                                  <Link
                                    href="https://www.ktm.com/en-be/powerdeals/built-to-race-priced-to-win.html"
                                    className="c-teaser-list__link c-teaser-list__link--three-items-per-row"
                                  >
                                    <h2 className="c-teaser-list__title c-teaser-list__title--three-items-per-row line-clamp-3">
                                      GEMAAKT OM TE RACEN. GEPRIJSD OM TE WINNEN.
                                    </h2>
                                    <span className="c-teaser-list__cta c-teaser-list__cta--three-items-per-row">
                                      View Profile
                                    </span>
                                  </Link>
                                  <div className="c-teaser-list__teaser c-teaser-list__teaser--three-items-per-row line-clamp-4">
                                    Maak je klaar om te racen met KTM’s exclusieve Q4-aanbiedingen.
                                    Profiteer van raceklare deals op geselecteerde motocross-,
                                    enduro-, travel-, sporttourer- en naked-modellen - er is nooit
                                    een beter moment geweest om je slag te slaan.
                                  </div>
                                </div>
                              </article>
                              <article className="c-teaser-list__item c-teaser-list__item--three-items-per-row">
                                <Link href="https://www.ktm.com/en-be/racing/racing-news/daniel-sanders-crowned-2025-world-rally-raid-champion-with-victo.html">
                                  <div className="image dynamicmedia parbase aem-GridColumn aem-GridColumn--default--12">
                                    <figure className="c-teaser-list__figure c-teaser-list__figure--three-items-per-row">
                                      <div className="cq-dd-image">
                                        <div className="c-image__content">
                                          <div
                                            id="446190783"
                                            data-current-page="/content/websites/ktm-com/europe/be/en"
                                            data-page-locale="en"
                                            data-asset-path="ktm/1 _POR25_EdoBauer_EdoPhoto_EDU6715"
                                            data-asset-name="1 _POR25_EdoBauer_EdoPhoto_EDU6715.jpg"
                                            data-asset-type="image"
                                            data-viewer-path="https://s7g10.scene7.com/s7viewers/"
                                            data-imageserver="https://s7g10.scene7.com/is/image/"
                                            data-videoserver="https://s7g10.scene7.com/is/content/"
                                            data-contenturl="https://s7g10.scene7.com/is/content/"
                                            data-imagepreset="ktm_teaser_square"
                                            data-wcmdisabled=""
                                            data-dms7=""
                                            className="s7dm-dynamic-media-ktm"
                                          >
                                            <div className="s7responsiveContainer">
                                              <Image
                                                src="https://s7g10.scene7.com/is/image/ktm/1%20_POR25_EdoBauer_EdoPhoto_EDU6715?$ktm_teaser_square$&wid=500&dpr=off"
                                                alt="1%20_POR25_EdoBauer_EdoPhoto_EDU6715"
                                                className="fluidimage"
                                                sizes="100vw"
                                                width={0}
                                                height={0}
                                                id="446190783_resp"
                                                data-src="https://s7g10.scene7.com/is/image/ktm/1 _POR25_EdoBauer_EdoPhoto_EDU6715?$ktm_teaser_square$"
                                                data-enablehd="always"
                                                style={{ width: '100%', height: 'auto' }}
                                                unoptimized
                                              />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </figure>
                                  </div>
                                </Link>
                                <div className="c-teaser-list__content c-teaser-list__content--three-items-per-row">
                                  <time
                                    className="c-teaser-list__date c-teaser-list__date--three-items-per-row"
                                    dateTime="28 Sept 2025"
                                  >
                                    28 Sept 2025
                                  </time>{' '}
                                  <Link
                                    href="https://www.ktm.com/en-be/racing/racing-news/daniel-sanders-crowned-2025-world-rally-raid-champion-with-victo.html"
                                    className="c-teaser-list__link c-teaser-list__link--three-items-per-row"
                                  >
                                    <h2 className="c-teaser-list__title c-teaser-list__title--three-items-per-row line-clamp-3">
                                      DANIEL SANDERS CROWNED 2025 WORLD RALLY-RAID CHAMPION WITH
                                      VICTORY IN PORTUGAL
                                    </h2>
                                    <span className="c-teaser-list__cta c-teaser-list__cta--three-items-per-row">
                                      View Profile
                                    </span>
                                  </Link>
                                  <div className="c-teaser-list__teaser c-teaser-list__teaser--three-items-per-row line-clamp-4">
                                    Red Bull KTM Factory Racing’s Daniel Sanders has secured the
                                    2025 FIM World Rally-Raid Championship with a dominant win at
                                    round four, Rally Raid Portugal. Continuing his unbeaten record
                                    this season, ‘Chucky’ topped the timesheets in the prologue and
                                    three of the five stages to take the race win and the
                                    championship crown in style. Luciano Benavides rode his KTM 450
                                    RALLY to third place overall, while Edgar Canet took the win in
                                    the hotly contested Rally2 category.
                                  </div>
                                </div>
                              </article>
                              <article className="c-teaser-list__item c-teaser-list__item--three-items-per-row">
                                <Link href="https://www.ktm.com/en-be/racing/racing-news/josep-garcia-claims-enduro1-world-title-at-endurogp-of-italy.html">
                                  <div className="image dynamicmedia parbase aem-GridColumn aem-GridColumn--default--12">
                                    <figure className="c-teaser-list__figure c-teaser-list__figure--three-items-per-row">
                                      <div className="cq-dd-image">
                                        <div className="c-image__content">
                                          <div
                                            id="1935775331"
                                            data-current-page="/content/websites/ktm-com/europe/be/en"
                                            data-page-locale="en"
                                            data-asset-path="ktm/1 josep-garcia_EnduroGP-2025_Rnd6_17075"
                                            data-asset-name="1 josep-garcia_EnduroGP-2025_Rnd6_17075.jpg"
                                            data-asset-type="image"
                                            data-viewer-path="https://s7g10.scene7.com/s7viewers/"
                                            data-imageserver="https://s7g10.scene7.com/is/image/"
                                            data-videoserver="https://s7g10.scene7.com/is/content/"
                                            data-contenturl="https://s7g10.scene7.com/is/content/"
                                            data-imagepreset="ktm_teaser_square"
                                            data-wcmdisabled=""
                                            data-dms7=""
                                            className="s7dm-dynamic-media-ktm"
                                          >
                                            <div className="s7responsiveContainer">
                                              <Image
                                                src="https://s7g10.scene7.com/is/image/ktm/1%20josep-garcia_EnduroGP-2025_Rnd6_17075?$ktm_teaser_square$&wid=500&dpr=off"
                                                alt="1%20josep-garcia_EnduroGP-2025_Rnd6_17075"
                                                className="fluidimage"
                                                sizes="100vw"
                                                width={0}
                                                height={0}
                                                id="1935775331_resp"
                                                data-src="https://s7g10.scene7.com/is/image/ktm/1 josep-garcia_EnduroGP-2025_Rnd6_17075?$ktm_teaser_square$"
                                                data-enablehd="always"
                                                style={{ width: '100%', height: 'auto' }}
                                                unoptimized
                                              />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </figure>
                                  </div>
                                </Link>
                                <div className="c-teaser-list__content c-teaser-list__content--three-items-per-row">
                                  <time
                                    className="c-teaser-list__date c-teaser-list__date--three-items-per-row"
                                    dateTime="28 Sept 2025"
                                  >
                                    28 Sept 2025
                                  </time>{' '}
                                  <Link
                                    href="https://www.ktm.com/en-be/racing/racing-news/josep-garcia-claims-enduro1-world-title-at-endurogp-of-italy.html"
                                    className="c-teaser-list__link c-teaser-list__link--three-items-per-row"
                                  >
                                    <h2 className="c-teaser-list__title c-teaser-list__title--three-items-per-row line-clamp-3">
                                      JOSEP GARCIA CLAIMS ENDURO1 WORLD TITLE AT ENDUROGP OF ITALY
                                    </h2>
                                    <span className="c-teaser-list__cta c-teaser-list__cta--three-items-per-row">
                                      View Profile
                                    </span>
                                  </Link>
                                  <div className="c-teaser-list__teaser c-teaser-list__teaser--three-items-per-row line-clamp-4">
                                    Red Bull KTM Factory Racing’s Josep Garcia has secured the 2025
                                    FIM Enduro1 World Championship with a commanding performance at
                                    the EnduroGP of Italy. Despite a challenging Sunday in Darfo
                                    Boario Terme, where Garcia battled through the pain from a late
                                    crash on Saturday, he did what he had to do to take the title
                                    with one round to spare.
                                  </div>
                                </div>
                              </article>
                            </div>
                          </section>
                        </div>
                        <div className="button aem-GridColumn aem-GridColumn--default--12">
                          <div className="component c-btn c-btn--center">
                            <Link
                              href="https://www.ktm.com/en-be/news.html"
                              className="c-btn__link c-btn__link--primary-dark"
                              target="_self"
                            >
                              <span className="c-btn__link--text">read more</span>
                            </Link>
                          </div>
                        </div>
                        <div className="button aem-GridColumn aem-GridColumn--default--12">
                          <div className="component c-btn c-btn--center">
                            <p className="c-btn__text">Join the KTM Newsletter</p>
                            <Link
                              href="https://www.ktm.com/en-be/ktm-world/newsletter.html"
                              className="c-btn__link c-btn__link--primary-light-icon c-btn__link--icon"
                              target="_self"
                            >
                              <span className="c-btn__link--text">Sign up</span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="footer aem-GridColumn aem-GridColumn--default--12">
                    <footer>
                      <div id="footer">
                        {route && <Placeholder name="headless-footer" rendering={route} />}
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
            </section>
            {/* END: KTM converted body */}
          </>
        )}
      </div>
    </>
  );
};

export default Layout;
