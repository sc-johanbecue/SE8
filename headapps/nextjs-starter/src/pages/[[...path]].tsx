import { useEffect, JSX } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import NotFound from 'src/NotFound';
import Layout from 'src/Layout';
import LayoutAmmega from 'src/LayoutAmmega';
import LayoutLynkAndCo from 'src/LayoutLynkAndCo';
import LayoutDPWorld from 'src/LayoutDPWorld';
import LayoutTheRig from 'src/LayoutTheRig';
import LayoutAldar from 'src/LayoutAldar';
import LayoutRollsRoyce from 'src/LayoutRollsRoyce';
import LayoutBeaulieu from 'src/LayoutBeaulieu';
import LayoutDubaiWTC from 'src/LayoutDubaiWTC';
import LayoutJumeirah from 'src/LayoutJumeirah';
import LayoutCoty from 'src/LayoutCoty';
import LayoutAirline from 'src/LayoutAirline';
import LayoutAirport from 'src/LayoutAirport';
import LayoutSodexo from 'src/LayoutSodexo';
import LayoutEuroConsumers from 'src/LayoutEuroConsumers';
import LayoutSodexoIntranet from 'src/LayoutSodexoIntranet';

import {
  SitecoreContext,
  ComponentPropsContext,
  SitecorePageProps,
  StaticPath,
} from '@sitecore-content-sdk/nextjs';
import { extractPath, handleEditorFastRefresh } from '@sitecore-content-sdk/nextjs/utils';
import { isDesignLibraryPreviewData } from '@sitecore-content-sdk/nextjs/editing';
import client from 'lib/sitecore-client';
import components from 'lib/component-map';
import scConfig from 'sitecore.config';

const SitecorePage = ({ notFound, componentProps, layout }: SitecorePageProps): JSX.Element => {
  useEffect(() => {
    // Since Sitecore Editor does not support Fast Refresh, need to refresh editor chromes after Fast Refresh finished
    handleEditorFastRefresh();
  }, []);

  if (notFound || !layout.sitecore.route) {
    // Shouldn't hit this (as long as 'notFound' is being returned below), but just to be safe
    return <NotFound />;
  }

  const AmmegaSite = layoutData.sitecore.context.site?.name == 'Ammega';
  const LynkAndCoSite = layoutData.sitecore.context.site?.name == 'Lynk And Co';
  const DPWorldSite = layoutData.sitecore.context.site?.name == 'DPWorld';
  const TheRigSite = layoutData.sitecore.context.site?.name == 'The Rig';
  const AldarSite = layoutData.sitecore.context.site?.name == 'Aldar';
  const RollsRoyceSite = layoutData.sitecore.context.site?.name == 'RR';
  const BeaulieuSite = layoutData.sitecore.context.site?.name == 'Beaulieu';
  const DubaiWTCSite = layoutData.sitecore.context.site?.name == 'dubaiwtc';
  const DubaiWTCSite2 = layoutData.sitecore.context.site?.name == 'dwtc';
  const JumeirahSite = layoutData.sitecore.context.site?.name == 'jumeirah';
  const CotySite = layoutData.sitecore.context.site?.name?.toLowerCase() == 'coty'.toLowerCase();
  const AirlineSite =
    layoutData.sitecore.context.site?.name?.toLowerCase() == 'airline'.toLowerCase() ||
    layoutData.sitecore.context.site?.name?.toLowerCase().includes('airline');
  const AirportSite = layoutData.sitecore.context.site?.name?.toLowerCase().includes('airport');
  const EuroConsumersSite =
    layoutData.sitecore.context.site?.name?.toLowerCase() == 'euroconsumers'.toLowerCase();
  const SodexoSite =
    layoutData.sitecore.context.site?.name?.toLowerCase() == 'sodexo'.toLowerCase();
  const SodexoIntranetSite =
    layoutData.sitecore.context.site?.name?.toLowerCase() == 'sodexointranet'.toLowerCase();


  return (
    <ComponentPropsContext value={componentProps || {}}>
      <SitecoreContext componentMap={components} layoutData={layout} api={scConfig.api}>
 {isComponentRendering ? (
          <EditingComponentPlaceholder rendering={layoutData.sitecore.route} />
        ) : AmmegaSite ? (
          <LayoutAmmega layoutData={layoutData}/>
        ) : LynkAndCoSite ? (
          <LayoutLynkAndCo layoutData={layoutData} />
        ) : TheRigSite ? (
          <LayoutTheRig layoutData={layoutData}/>
        ) : AldarSite ? (
          <LayoutAldar layoutData={layoutData}/>
        ) : RollsRoyceSite ? (
          <LayoutRollsRoyce layoutData={layoutData}/>
        ) : DPWorldSite ? (
          <LayoutDPWorld layoutData={layoutData}/>
        ) : BeaulieuSite ? (
          <LayoutBeaulieu layoutData={layoutData}/>
        ) : JumeirahSite ? (
          <LayoutJumeirah layoutData={layoutData}/>
        ) : DubaiWTCSite ? (
          <LayoutDubaiWTC layoutData={layoutData}/>
        ) : DubaiWTCSite2 ? (
          <LayoutDubaiWTC layoutData={layoutData}/>
        ) : CotySite ? (
          <LayoutCoty layoutData={layoutData}/>
        ) : AirlineSite ? (
          <LayoutAirline layoutData={layoutData}/>
        ) : AirportSite ? (
          <LayoutAirport layoutData={layoutData}/>
        ) : SodexoSite ? (
          <LayoutSodexo layoutData={layoutData}/>
        ) : SodexoIntranetSite ? (
          <LayoutSodexoIntranet layoutData={layoutData}/>
        ) : EuroConsumersSite ? (
          <LayoutEuroConsumers layoutData={layoutData}/>
        ) : (
          <Layout layoutData={layoutData}/>
        )}
      </SitecoreContext>
    </ComponentPropsContext>
  );
};

// This function gets called at build and export time to determine
// pages for SSG ("paths", as tokenized array).
export const getStaticPaths: GetStaticPaths = async (context) => {
  // Fallback, along with revalidate in getStaticProps (below),
  // enables Incremental Static Regeneration. This allows us to
  // leave certain (or all) paths empty if desired and static pages
  // will be generated on request (development mode in this example).
  // Alternatively, the entire sitemap could be pre-rendered
  // ahead of time (non-development mode in this example).
  // See https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration

  let paths: StaticPath[] = [];
  let fallback: boolean | 'blocking' = 'blocking';

  if (process.env.NODE_ENV !== 'development' && !scConfig.disableStaticPaths) {
    try {
      paths = await client.getPagePaths(context?.locales || []);
    } catch (error) {
      console.log('Error occurred while fetching static paths');
      console.log(error);
    }

    fallback = process.env.EXPORT_MODE ? false : fallback;
  }

  return {
    paths,
    fallback,
  };
};

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation (or fallback) is enabled and a new request comes in.
export const getStaticProps: GetStaticProps = async (context) => {
  let props = {};
  const path = extractPath(context);
  let page;

  if (context.preview && isDesignLibraryPreviewData(context.previewData)) {
    page = await client.getDesignLibraryData(context.previewData);
  } else {
    page = context.preview
      ? await client.getPreview(context.previewData)
      : await client.getPage(path, { locale: context.locale });
  }
  if (page) {
    props = {
      ...page,
      dictionary: await client.getDictionary({ site: page.site?.name, locale: page.locale }),
      componentProps: await client.getComponentData(page.layout, context, components),
    };
  }
  return {
    props,
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 5 seconds
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 5 seconds
    revalidate: 5, // In seconds
    notFound: !page,
  };
};

export default SitecorePage;
