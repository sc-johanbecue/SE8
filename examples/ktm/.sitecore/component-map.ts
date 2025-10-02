// Below are built-in components that are available in the app, it's recommended to keep them as is
import { BYOCWrapper, NextjsContentSdkComponent, FEaaSWrapper } from '@sitecore-content-sdk/nextjs';
import { Form } from '@sitecore-content-sdk/nextjs';
// end of built-in components

// Components imported from the app itself
import * as Title from 'src/components/sxa/Title';
import * as RowSplitter from 'src/components/sxa/RowSplitter';
import * as RichText from 'src/components/sxa/RichText';
import * as Promo from 'src/components/sxa/Promo';
import * as PartialDesignDynamicPlaceholder from 'src/components/sxa/PartialDesignDynamicPlaceholder';
import * as PageContent from 'src/components/sxa/PageContent';
import * as Navigation from 'src/components/sxa/Navigation';
import * as LinkList from 'src/components/sxa/LinkList';
import * as Image from 'src/components/sxa/Image';
import * as ContentBlock from 'src/components/sxa/ContentBlock';
import * as Container from 'src/components/sxa/Container';
import * as ColumnSplitter from 'src/components/sxa/ColumnSplitter';
import * as RecentlyLaunchedSection from 'src/components/content-sdk/ktm/RecentlyLaunchedSection';
import * as RecentlyLaunchedItem from 'src/components/content-sdk/ktm/RecentlyLaunchedItem';
import * as NewsArticleTeaser from 'src/components/content-sdk/ktm/NewsArticleTeaser';
import * as NewsArticle from 'src/components/content-sdk/ktm/NewsArticle';
import * as MultiColumnImageContainer from 'src/components/content-sdk/ktm/MultiColumnImageContainer';
import * as LatestNews from 'src/components/content-sdk/ktm/LatestNews';
import * as ImageWithOverlay from 'src/components/content-sdk/ktm/ImageWithOverlay';
import * as IconListItem from 'src/components/content-sdk/ktm/IconListItem';
import * as IconList from 'src/components/content-sdk/ktm/IconList';
import * as Header from 'src/components/content-sdk/ktm/Header';
import * as Footer from 'src/components/content-sdk/ktm/Footer';
import * as DiscoverSection from 'src/components/content-sdk/ktm/DiscoverSection';
import * as DiscoverItem from 'src/components/content-sdk/ktm/DiscoverItem';
import * as Carousel from 'src/components/content-sdk/ktm/Carousel';


// Components must be registered within the map to match the string key with component name in Sitecore
export const componentMap = new Map<string, NextjsContentSdkComponent>([
  ['BYOCWrapper', BYOCWrapper],
  ['FEaaSWrapper', FEaaSWrapper],
  ['Form', Form],
  ['Title', Title],
  ['RowSplitter', RowSplitter],
  ['RichText', RichText],
  ['Promo', Promo],
  ['PartialDesignDynamicPlaceholder', PartialDesignDynamicPlaceholder],
  ['PageContent', PageContent],
  ['Navigation', Navigation],
  ['LinkList', LinkList],
  ['Image', Image],
  ['ContentBlock', ContentBlock],
  ['Container', Container],
  ['ColumnSplitter', ColumnSplitter],
  ['RecentlyLaunchedSection', RecentlyLaunchedSection],
  ['RecentlyLaunchedItem', RecentlyLaunchedItem],
  ['NewsArticleTeaser', NewsArticleTeaser],
  ['NewsArticle', NewsArticle],
  ['MultiColumnImageContainer', MultiColumnImageContainer],
  ['LatestNews', LatestNews],
  ['ImageWithOverlay', ImageWithOverlay],
  ['IconListItem', IconListItem],
  ['IconList', IconList],
  ['Header', Header],
  ['Footer', Footer],
  ['DiscoverSection', DiscoverSection],
  ['DiscoverItem', DiscoverItem],
  ['Carousel', Carousel],
]);

export default componentMap;
