import type React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Link from 'next/link';
import {
  TextField,
  RichTextField,
  LinkField,
  ImageField,
  RichText,
  Text,
  Link as JssLink,
} from '@sitecore-jss/sitecore-jss-nextjs';

import 'animate.css';

interface Fields {
  backgroundImage: ImageField;
  title: TextField;
  subtitle: RichTextField;
  buttonText: TextField;
  buttonLink: LinkField;
  alignment: TextField;
  overlayOpacity: TextField;
  minHeight: TextField;
}

interface Defaults {
  backgroundImage: string;
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
  alignment: 'left' | 'center' | 'right';
  overlayOpacity: number;
  minHeight: string;
}

interface MainHeroProps {
  params: { [key: string]: string };
  fields: Fields;
}

const MainHeroDefaultComponent = (props: MainHeroProps): JSX.Element => (
  <div className={`component MainHero ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint">MainHero</span>
    </div>
  </div>
);

/**
 * Main Hero component for displaying a hero banner with background image and content
 *
 * Sitecore XM Cloud Configuration:
 * - Template: "MainHero"
 * - Fields:
 *   - backgroundImage: Image field (stores the background image)
 *   - title: Single-Line Text field (stores the hero title)
 *   - subtitle: Multi-Line Text field or Rich Text field (stores the hero subtitle)
 *   - buttonText: Single-Line Text field (stores the button text)
 *   - buttonLink: General Link field (stores the button link URL)
 *   - alignment: Dropdown field (stores the content alignment: "left", "center", or "right")
 *   - overlayOpacity: Number field (stores the overlay opacity value between 0 and 1)
 *   - minHeight: Single-Line Text field (stores the minimum height of the hero, e.g., "600px")
 */
export const Default = (props: MainHeroProps): JSX.Element => {
  // Use Sitecore fields if available, otherwise use default props
  const fallbackDefault: Defaults = {
    backgroundImage: '/placeholder.svg?height=600&width=1200',
    title: 'Bathroom solutions for every need',
    subtitle: 'Discover our range of innovative bathroom products',
    buttonText: 'Explore Products',
    buttonLink: '/products',
    alignment: 'left',
    overlayOpacity: 0.3,
    minHeight: '600px',
  };

  const bgImage = props.fields?.backgroundImage?.value?.src || fallbackDefault.backgroundImage;
  const heroTitle = props.fields?.title?.value || fallbackDefault.title;
  const heroSubtitle = props.fields?.subtitle?.value || fallbackDefault.subtitle;
  const heroBtnText = props.fields?.buttonText?.value || fallbackDefault.buttonText;
  const heroBtnLink = props.fields?.buttonLink?.value?.href || fallbackDefault.buttonLink;
  const heroAlignment =
    (props.fields?.alignment?.value as 'left' | 'center' | 'right') || fallbackDefault.alignment;
  const heroOverlayOpacity = props.fields?.overlayOpacity?.value || fallbackDefault.overlayOpacity;
  const heroMinHeight = props.fields?.minHeight?.value || fallbackDefault.minHeight;

  const textAlignmentClass = {
    left: 'text-start',
    center: 'text-center',
    right: 'text-end',
  }[heroAlignment];

  const contentPositionClass = {
    left: 'justify-content-start',
    center: 'justify-content-center',
    right: 'justify-content-end',
  }[heroAlignment];

  if (props.fields) {
    return (
      <div
        className="main-hero position-relative d-flex align-items-center"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: heroMinHeight,
        }}
      >
        {/* Dark overlay */}
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ backgroundColor: `rgba(0, 0, 0, ${heroOverlayOpacity})` }}
        ></div>

        <Container className="position-relative">
          <Row className={contentPositionClass}>
            <Col xs={12} md={8} lg={6}>
              <div className="hero-content bg-white p-4 p-md-5">
                {props.fields?.title ? (
                  <Text
                    field={props.fields.title}
                    tag="h1"
                    className={`${textAlignmentClass} mb-3`}
                  />
                ) : (
                  <h1 className={`${textAlignmentClass} mb-3`}>{heroTitle}</h1>
                )}

                {props.fields?.subtitle ? (
                  <RichText
                    field={props.fields.subtitle}
                    className={`${textAlignmentClass} mb-4`}
                  />
                ) : (
                  <p className={`${textAlignmentClass} mb-4`}>{heroSubtitle}</p>
                )}

                <div className={`${textAlignmentClass}`}>
                  {props.fields?.buttonLink ? (
                    <JssLink field={props.fields.buttonLink} className="btn btn-primary btn-lg">
                      {heroBtnText}
                    </JssLink>
                  ) : (
                    <Link href={heroBtnLink} passHref legacyBehavior>
                      <Button variant="primary" size="lg">
                        {heroBtnText}
                      </Button>
                    </Link>
                  )}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
  return <MainHeroDefaultComponent {...props} />;
};
