import React from 'react'; //{ useState }
import { Container, Row, Col } from 'react-bootstrap';
import {
  Placeholder,
  ComponentRendering,
  ComponentParams,
  Text,
  TextField,
} from '@sitecore-jss/sitecore-jss-nextjs';
import 'animate.css';

interface Fields {
  Copyright: TextField;
}

type FooterProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: { [key: string]: string };
  fields: Fields;
};

const FooterDefaultComponent = (props: FooterProps): JSX.Element => (
  <div className={`component Footer ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint">Footer</span>
    </div>
  </div>
);

export const Default = (props: FooterProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;

  const phKeyLogo = `GeberitLogo-${props.params.DynamicPlaceholderId}`;
  const phKeySocialIcons = `GeberitSocialIcons-${props.params.DynamicPlaceholderId}`;
  const phKeyFooterNavigation = `GeberitFooterNavigation-${props.params.DynamicPlaceholderId}`;

  if (props.fields) {
    return (
      <Container>
        <div
          className={`component footer-top pb-4 border-bottom ${props.params.styles}`}
          key={id ? id : undefined}
          id={id ? id : undefined}
        >
          <Row className="align-items-center">
            <Col xs={12} md={6}>
              <Placeholder name={phKeyLogo} rendering={props.rendering} />
            </Col>
            <Col xs={12} md={6} className="mt-3 mt-md-0">
              <div className="d-flex justify-content-md-end">
                <Placeholder name={phKeySocialIcons} rendering={props.rendering} />
              </div>
            </Col>
          </Row>
        </div>

        <div className="footer-middle py-5">
          <Placeholder name={phKeyFooterNavigation} rendering={props.rendering} />
        </div>

        <div className="footer-bottom py-3">
          <Row>
            <Col>
              <Text field={props.fields.Copyright} tag="p" className="mb-0 text-muted" />
            </Col>
          </Row>
        </div>
      </Container>
    );
  }
  return <FooterDefaultComponent {...props} />;
};
