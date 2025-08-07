import { useEffect } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next'; //getStaticProps
import NotFound from 'src/NotFound';
import Layout from 'src/Layout.MajidAlFuttaim';
import LayoutImagineCruising from 'src/Layout.ImagineCruising';
import LayoutGeberit from 'src/Layout.Geberit';
import RoyalGD from 'src/Layout.RoyalGD';
import FrieslandCampina from 'src/Layout.FrieslandCampina';
import MajidAlFuttaim from 'src/Layout.MajidAlFuttaim';

import {
  SitecoreContext,
  ComponentPropsContext,
  StaticPath,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { handleEditorFastRefresh } from '@sitecore-jss/sitecore-jss-nextjs/utils';
import { SitecorePageProps } from 'lib/page-props';
import { sitecorePagePropsFactory } from 'lib/page-props-factory';
import { componentBuilder } from 'temp/componentBuilder';
import { sitemapFetcher } from 'lib/sitemap-fetcher';

const SitecorePage = ({
  notFound,
  componentProps,
  layoutData,
  headLinks,
}: SitecorePageProps): JSX.Element => {
  useEffect(() => {
    // Since Sitecore editors do not support Fast Refresh, need to refresh editor chromes after Fast Refresh finished
    handleEditorFastRefresh();
  }, []);

  if (notFound || !layoutData.sitecore.route) {
    // Shouldn't hit this (as long as 'notFound' is being returned below), but just to be safe
    return <NotFound />;
  }

  const isEditing = layoutData.sitecore.context.pageEditing;

  const imagineCruisingSite1 = layoutData.sitecore.context.site?.name == 'europe';
  const imagineCruisingSite2 = layoutData.sitecore.context.site?.name == 'us';

  const geberitGermany = layoutData.sitecore.context.site?.name == 'germany';
  const geberitSingapore = layoutData.sitecore.context.site?.name == 'singapore';
  const geberitSwitserland = layoutData.sitecore.context.site?.name == 'switserland';
  const geberitMaster = layoutData.sitecore.context.site?.name == 'master-website';
  const royalGD = layoutData.sitecore.context.site?.name == 'royal-gd';
  const frieslandcampina = layoutData.sitecore.context.site?.name == 'frieslandcampina';
  const majidalfuttaim = layoutData.sitecore.context.site?.name == 'majidalfuttaim';
  return (
    <ComponentPropsContext value={componentProps}>
      <SitecoreContext
        componentFactory={componentBuilder.getComponentFactory({ isEditing })}
        layoutData={layoutData}
      >
        {imagineCruisingSite1 || imagineCruisingSite2 ? (
          // This is the layout for the Imagine Cruising sites
          <LayoutImagineCruising layoutData={layoutData} headLinks={headLinks} />
        ) : geberitMaster || geberitGermany || geberitSingapore || geberitSwitserland ? (
          <LayoutGeberit layoutData={layoutData} headLinks={headLinks} />
        ) : royalGD ? (
          <RoyalGD layoutData={layoutData} headLinks={headLinks} />
        ) : frieslandcampina ? (
          <FrieslandCampina layoutData={layoutData} headLinks={headLinks} />
        ) : majidalfuttaim ? (
          <MajidAlFuttaim layoutData={layoutData} headLinks={headLinks} />
        ) : (
          // This is the default layout for the app
          <Layout layoutData={layoutData} headLinks={headLinks} />
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

  if (
    process.env.NODE_ENV !== 'development' &&
    process.env.DISABLE_SSG_FETCH?.toLowerCase() !== 'true'
  ) {
    try {
      // Note: Next.js runs export in production mode
      paths = await sitemapFetcher.fetch(context);
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
  const props = await sitecorePagePropsFactory.create(context);

  return {
    props,
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 5 seconds
    revalidate: 5, // In seconds
    notFound: props.notFound, // Returns custom 404 page with a status code of 404 when true
  };
};

// // This function gets called at request time on server-side.
// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const props = await sitecorePagePropsFactory.create(context);

//   return {
//     props,
//     notFound: props.notFound, // Returns custom 404 page with a status code of 404 when true
//   };
// };
export default SitecorePage;
