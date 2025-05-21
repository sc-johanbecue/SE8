import type React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {
  Placeholder,
  ComponentRendering,
  ComponentParams,
} from '@sitecore-jss/sitecore-jss-nextjs';

import 'animate.css';

type HeaderTopProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: { [key: string]: string };
};

const HeaderTopDefaultComponent = (props: HeaderTopProps): JSX.Element => (
  <div className={`component HeaderTop ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint">HeaderTop</span>
    </div>
  </div>
);

/**
 * Header Top component that combines Logo, Language Switcher, and Top Menu
 *
 * Sitecore XM Cloud Configuration:
 * - Each child component will have its own datasource item in Sitecore
 * - No fields are needed at the HeaderTop level
 */
export const Default = (props: HeaderTopProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;

  const phKeyLogo = `GeberitLogo-${props.params.DynamicPlaceholderId}`;
  const phKeyLanguageSwitcher = `GeberitLanguageSwitcher-${props.params.DynamicPlaceholderId}`;
  const phKeyTopMenu = `GeberitTopMenu-${props.params.DynamicPlaceholderId}`;

  return (
    <div
      className={`component header-top py-2 border-bottom ${props.params.styles}`}
      key={id ? id : undefined}
      id={id ? id : undefined}
    >
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={4}>
            <Placeholder name={phKeyLogo} rendering={props.rendering} />
          </Col>
          <Col xs={12} md={8}>
            <div className="d-flex justify-content-end align-items-center">
              <Placeholder name={phKeyLanguageSwitcher} rendering={props.rendering} />
              <Placeholder name={phKeyTopMenu} rendering={props.rendering} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );

  return <HeaderTopDefaultComponent {...props} />;
};
