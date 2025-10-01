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
                  <div className="responsivegrid-1-column responsivegrid aem-GridColumn aem-GridColumn--default--12">
                    <div className="container">
                      <div className="aem-Grid aem-Grid--12 aem-Grid--default--12">
                        <main>
                          <div id="content">
                            {route && <Placeholder name="headless-main" rendering={route} />}
                          </div>
                        </main>

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
