import React from 'react'; //{ useState }
import {
  Placeholder,
  ComponentRendering,
  ComponentParams,
  TextField,
  Text,
} from '@sitecore-jss/sitecore-jss-nextjs';
import 'animate.css';

interface Fields {
  Title: TextField;
  Text: TextField;
}

type GridContainerProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: { [key: string]: string };
  fields: Fields;
};

const GridContainerDefaultComponent = (props: GridContainerProps): JSX.Element => (
  <div className={`component GridContainer ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint">GridContainer</span>
    </div>
  </div>
);

export const Default = (props: GridContainerProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;

  const phKeyGridContainer = `GeberitGridContainer-${props.params.DynamicPlaceholderId}`;

  if (props.fields) {
    return (
      <div
        className={`component bg-light-grey-teaser ${props.params.styles}`}
        key={id ? id : undefined}
        id={id ? id : undefined}
      >
        <div className="container py-5">
          <h2 className="fw-bold">
            <Text field={props.fields.Title} />
          </h2>
          <h4 className="mb-5">
            <Text field={props.fields.Text} />
          </h4>

          <div className="row text-start">
            <Placeholder name={phKeyGridContainer} rendering={props.rendering} />
          </div>
        </div>
      </div>
    );
  }
  return <GridContainerDefaultComponent {...props} />;
};
