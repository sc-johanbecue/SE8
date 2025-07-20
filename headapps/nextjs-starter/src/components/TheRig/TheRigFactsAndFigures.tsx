import React from 'react';
import { Text, TextField } from '@sitecore-jss/sitecore-jss-nextjs';

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

type TheRigFactAndFiguresroProps = {
  params: { [key: string]: string };
  fields: Fields;
};

const TheRigHeaderDefaultComponent = (props: TheRigFactAndFiguresroProps): JSX.Element => (
  <div className={`component promo ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint"></span>
    </div>
  </div>
);

export const Default = (props: TheRigFactAndFiguresroProps): JSX.Element => {
  if (props.fields) {
    return (
      <div className="css-fy3zvu">
        <div data-testid="FactsAndFigures" className="css-10r2m1s">
          <div
            className="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-1 css-tuxzvu"
            style={{ margin: '0px' }}
          >
            <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-12 css-15j76c0">
              <h2
                className="MuiTypography-root MuiTypography-h2 css-1y5qbxs"
                style={{ textAlign: 'center' }}
              >
                <Text field={props.fields.Title} />
              </h2>
            </div>
          </div>

          <div className="MuiGrid-root MuiGrid-container fact-grid css-1d3bbye">
            <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-2.4 MuiGrid-grid-lg-2.4 en-grid-item css-1q09act">
              <div className="css-1wb1tnx">
                <div className="css-1q2jcol">
                  <Text field={props.fields.Fact1Figure} />
                </div>

                <div className="css-1b171hf">
                  <span>
                    <Text field={props.fields.Fact1} />
                  </span>
                </div>
                <hr className="breakLine " />
              </div>
            </div>
            <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-2.4 MuiGrid-grid-lg-2.4 en-grid-item css-1q09act">
              <div className="css-1wb1tnx">
                <div className="css-1q2jcol">
                  <Text field={props.fields.Fact2Figure} />
                </div>
                <div className="css-1b171hf">
                  <span>
                    <Text field={props.fields.Fact2} />
                  </span>
                </div>
                <hr className="breakLine " />
              </div>
            </div>
            <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-2.4 MuiGrid-grid-lg-2.4 en-grid-item css-1q09act">
              <div className="css-1wb1tnx">
                <div className="css-1q2jcol">
                  <Text field={props.fields.Fact3Figure} />
                </div>
                <div className="css-1b171hf">
                  <span>
                    <Text field={props.fields.Fact3} />
                  </span>
                </div>
                <hr className="breakLine " />
              </div>
            </div>
            <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-2.4 MuiGrid-grid-lg-2.4 en-grid-item css-1q09act">
              <div className="css-1wb1tnx">
                <div className="css-1q2jcol">
                  <Text field={props.fields.Fact4Figure} />
                </div>
                <div className="css-1b171hf">
                  <span>
                    {' '}
                    <Text field={props.fields.Fact4} />
                  </span>
                </div>
                <hr className="breakLine " />
              </div>
            </div>
            <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-2.4 MuiGrid-grid-lg-2.4 en-grid-item css-1q09act">
              <div className="css-1wb1tnx">
                <div className="css-1q2jcol">
                  <Text field={props.fields.Fact5Figure} />
                </div>
                <div className="css-1b171hf">
                  <span>
                    <Text field={props.fields.Fact5} />
                  </span>
                </div>
                <hr className="breakLine last" />
              </div>
            </div>
          </div>
        </div>
        <div className="css-1xjbe9x"></div>
      </div>
    );
  }

  return <TheRigHeaderDefaultComponent {...props} />;
};
