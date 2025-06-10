import {
  Placeholder,
  ComponentRendering,
  ComponentParams,
  TextField,
} from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  Title: TextField;
  Text: TextField;
}

type HeaderProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: { [key: string]: string };
  fields: Fields;
};

const HeaderDefaultComponent = (props: HeaderProps): JSX.Element => (
  <div className={`component Header ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint">Header</span>
    </div>
  </div>
);

export const Default = (props: HeaderProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;

  const phKeyLeft = `RoyalGDLeft-${props.params.DynamicPlaceholderId}`;
  const phKeyMiddle = `RoyalGDMiddle-${props.params.DynamicPlaceholderId}`;
  const phKeyRight = `RoyalGDRight-${props.params.DynamicPlaceholderId}`;

  return (
    <>
      <div
        key={id ? id : undefined}
        id={id ? id : undefined}
        className={`component row ${props.params.styles}`}
        data-equalizer
        data-equalize-by-row="true"
      >
        <div
          id="phcolumn_0_phcontent_2_phcalltoaction716423599c9a439da6f0317d517a67c0_0_CtaBlock"
          className="columns large-4 medium-12 small-12"
        >
          <Placeholder name={phKeyLeft} rendering={props.rendering} />
        </div>
        <div
          id="phcolumn_0_phcontent_2_phcalltoaction716423599c9a439da6f0317d517a67c0_1_CtaBlock"
          className="columns large-4 medium-12 small-12"
        >
          <Placeholder name={phKeyMiddle} rendering={props.rendering} />
        </div>
        <div
          id="phcolumn_0_phcontent_2_phcalltoaction716423599c9a439da6f0317d517a67c0_2_CtaBlock"
          className="columns large-4 medium-12 small-12"
        >
          <Placeholder name={phKeyRight} rendering={props.rendering} />
        </div>
      </div>
    </>
  );

  return <HeaderDefaultComponent {...props} />;
};
