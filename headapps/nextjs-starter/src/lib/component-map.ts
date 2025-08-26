// Below are built-in components that are available in the app, it's recommended to keep them as is
import { BYOCWrapper, NextjsJssComponent, FEaaSWrapper } from '@sitecore-content-sdk/nextjs';
import { Form } from '@sitecore-content-sdk/nextjs';
// end of built-in components

// Components imported from the app itself
import * as CdpPageView from 'src/components/CdpPageView';
import * as ColumnSplitter from 'src/components/ColumnSplitter';
import * as Container from 'src/components/Container';
import * as ContentBlock from 'src/components/ContentBlock';
import * as FEAASScripts from 'src/components/FEAASScripts';
import * as LinkList from 'src/components/LinkList';
import * as Navigation from 'src/components/Navigation';
import * as PageContent from 'src/components/PageContent';
import * as PartialDesignDynamicPlaceholder from 'src/components/PartialDesignDynamicPlaceholder';
import * as Promo from 'src/components/Promo';
import * as RichText from 'src/components/RichText';
import * as RowSplitter from 'src/components/RowSplitter';
import * as SitecoreStyles from 'src/components/SitecoreStyles';
import * as Title from 'src/components/Title';
import * as TopBar from 'src/components/SolutionEngineering/TopBar';
import * as Copyright from 'src/components/SolutionEngineering/Copyright';
import * as Icon from 'components/SolutionEngineering/Icon/Icon';
import * as Icons from 'components/SolutionEngineering/Icon/Icons';
import * as IconContainer from 'components/SolutionEngineering/Icon/IconContainer';
import * as Social from 'components/SolutionEngineering/Social/Social';
import * as Socials from 'components/SolutionEngineering/Social/Socials';
import * as SocialContainer from 'components/SolutionEngineering/Social/SocialContainer';
import * as Logo from 'components/SolutionEngineering/Logo/Logo';
import * as Logos from 'components/SolutionEngineering/Logo/Logos';
import * as LogoContainer from 'components/SolutionEngineering/Logo/LogoContainer';
import * as Link from 'components/SolutionEngineering/Link/Link';
import * as SearchWidget from 'components/SolutionEngineering/SearchWidget';
import * as Image from 'components/SolutionEngineering/Image/Image';
import * as Images from 'components/SolutionEngineering/Image/Images';
import * as ImageCarousel from 'components/SolutionEngineering/Image/ImageCarousel';
import * as ImageContainer from 'components/SolutionEngineering/Image/ImageContainer';
import * as Card from 'components/SolutionEngineering/Card';
import * as ScalableVectorGraphic from 'components/SolutionEngineering/ScalableVectorGraphic/ScalableVectorGraphic';
import * as ScalableVectorGraphics from 'components/SolutionEngineering/ScalableVectorGraphic/ScalableVectorGraphics';
import * as ScalableVectorGraphicContainer from 'components/SolutionEngineering/ScalableVectorGraphic/ScalableVectorGraphicContainer';

// Components must be registered with to match the string key with component name in Sitecore
export const componentMap = new Map<string, NextjsJssComponent>([
  ['BYOCWrapper', BYOCWrapper],
  ['FEaaSWrapper', FEaaSWrapper],
  ['Form', Form],
  ['CdpPageView', CdpPageView],
  ['ColumnSplitter', ColumnSplitter],
  ['Container', Container],
  ['ContentBlock', ContentBlock],
  ['FEAASScripts', FEAASScripts],
  ['Image', Image],
  ['LinkList', LinkList],
  ['Navigation', Navigation],
  ['PageContent', PageContent],
  ['PartialDesignDynamicPlaceholder', PartialDesignDynamicPlaceholder],
  ['Promo', Promo],
  ['RichText', RichText],
  ['RowSplitter', RowSplitter],
  ['SitecoreStyles', SitecoreStyles],
  ['Title', Title],
  ['TopBar', TopBar],
  ['Copyright', Copyright],
  ['Link', Link],
  ['SearchWidget', SearchWidget],
  //Icons
  ['Icon', Icon],
  ['Icons', Icons],
  ['IconContainer', IconContainer],
  //Images
  ['Image', Image],
  ['Images', Images],
  ['ImageCarousel', ImageCarousel],
  ['ImageContainer', ImageContainer],
  //Logos
  ['Logo', Logo],
  ['Logos', Logos],
  ['LogoContainer', LogoContainer],
  //Socials
  ['Social', Social],
  ['Socials', Socials],
  ['SocialContainer', SocialContainer],
  //Card
  ['Card', Card],
  //ScalableVectorGraphic
  ['ScalableVectorGraphic', ScalableVectorGraphic],
  ['ScalableVectorGraphics', ScalableVectorGraphics],
  ['ScalableVectorGraphicContainer', ScalableVectorGraphicContainer],
]);

export default componentMap;
