import React from 'react';
import {
  TextField,
  Placeholder,
  ComponentParams,
  ComponentRendering,
} from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  Title: TextField;
  Fact1: TextField;
  Fact2: TextField;
  Fact3: TextField;
  Fact4: TextField;
  Fact5: TextField;
  Fact1Figure: TextField;
  Fact2Figure: TextField;
  Fact3Figure: TextField;
  Fact4Figure: TextField;
  Fact5Figure: TextField;
}

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: { [key: string]: string };
  fields: Fields;
};

const TheRigTwoColumnsDefaultComponent = (props: ComponentProps): JSX.Element => (
  <div className={`component promo ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint"></span>
    </div>
  </div>
);

export const Default = (props: ComponentProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;
  const phKeyColumnOne = `theRigColumnOne-${props.params.DynamicPlaceholderId}`;
  const phKeyColumnTwo = `theRigColumnTwo-${props.params.DynamicPlaceholderId}`;

  if (props.fields) {
    return (
      <section
        className="MuiContainer-root MuiContainer-maxWidthLg css-17fx44v"
        id={id ? id : undefined}
      >
        <div className="css-a36zzi"></div>

        <div className="MuiGrid-root MuiGrid-container css-1v3kjg">
          <div
            className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-12 MuiGrid-grid-md-6 css-1wxb4u1"
            id={id ? 'theRigColumnOne' + id : undefined}
          >
            <Placeholder name={phKeyColumnOne} rendering={props.rendering} />
            <img
              style={{ filter: 'brightness(0)' }}
              src="https://therig.sa/bg/line-break-left.webp"
              className="css-tfjqlz"
              alt=""
            />
            <img src="https://therig.sa/rust/rustMbl.webp" className="css-ec8s0e" alt="" />
          </div>
          <div
            className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-12 MuiGrid-grid-md-6 css-1lxviua"
            id={id ? 'theRigColumnTwo' + id : undefined}
          >
            <Placeholder name={phKeyColumnTwo} rendering={props.rendering} />
          </div>
        </div>
      </section>
    );
  }

  return <TheRigTwoColumnsDefaultComponent {...props} />;
};
