import Link from 'next/link';
import React, { useEffect, useState } from 'react';

import {
  TextField,
  Text,
  LinkField,
  ImageField,
  ComponentParams,
  ComponentRendering,
} from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  Image: ImageField;
  Title: TextField;
  Text: TextField;
  Video: LinkField;
  PriceUrl: LinkField;
}

type Props = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: { [key: string]: string };
  fields: Fields;
};

const JumeirahHotelDetail = (props: Props): JSX.Element => {
  const [price, setPrice] = useState(null);

  useEffect(() => {
    const fetchPrice = async (props: Props) => {
      try {
        const response = await fetch(`${props.fields.PriceUrl.value.href}`); // Replace with your API URL
        const data = await response.json();
        setPrice(data.price); // Assuming the JSON object has a 'price' field
      } catch (error) {
        console.error('Error fetching price:', error);
      }
    };

    fetchPrice(props);
  }, [props]);

  return (
    <div id="root">
      <div className="container-fluid false hotel">
        <div
          className="full-bleed-rd HeroBannerWithVideo Hoteloverview-hero"
          id="HeroBannerWithVideo"
        >
          <div
            className="video-background"
            style={{
              background: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 45.17%, rgba(0, 0, 0, 0.32) 100%), url("${props.fields.Image.value?.src}")`,
              backgroundBlendMode: 'darken',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
            }}
          >
            <div className="video-foreground">
              <iframe
                id="vimeo-player"
                className="hotel-video not-a-reskin"
                src={`${props.fields.Video.value.href}`}
                frameBorder="0"
                allowFullScreen
                title=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="full-bleed-rd NavigationTab-wrapper" id="NavigationTab">
          <div className="continer-wrapper">
            <span className="hotel-title">
              <Text field={props.fields.Title} />
            </span>
            <div className="vertical-line"></div>
            <div className="link-items"></div>
          </div>
        </div>
        <div className="full-bleed-rd HotelBreadcrumb-wrapper">
          <div className="share-icon-wrapper">
            <img
              className="share-icon-img"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGDSURBVHgBnVNBUsJAEJxdsMpjuOkt/gAvwsEq9AXoC8AbByHLC+QHbkis4ia8QHiB4Ra4gC+AJ8SbFciOsyspoUqKYF8yM8n0Tvdkc3AEGkLY1+UyhGH4ldZ41uam47yeoJolqBaO4zwfRdAUzToCFnOMX3hut6BAFVvtdjUzASpmA8JYShmZHNlYJcmljvOHmh+FuOGoqghgUzzUNYaqtmLx7Q6BEMJaK1XT8ZrHo1M4jSiX9HGVThfI1Scd/WQmYNjuyd7SkG2abTLnndIAaT7GoEJlCxm4eeAyHf0vmAlWSXLHOQ88130wY7dafSKav3iehAPYMlHBf5BKsEjCjNQFRgEDvaKIIfRjHg9SvXsJNiQ2mWZ2m+d8QA9takf7QUQdRSYyZI5+Tya6vvSHOwT78GuwblTGI4b8jeJ7Iglyhwjov4+uSqUChR++6/Wn4XRJ+TmxnU0nkyDbXeBqzhhWNhNZnGRR4yKThBS0Wkl+1H6kwMiX3TocC316QzTs7do3HVK5XW+/wyQAAAAASUVORK5CYII="
              alt="share-icon"
            />
            <p className="share-title">Share</p>
          </div>
          <div className="breadcrumb-container-wrapper">
            <span>View All Regions</span> / <span>Middle East </span>/ <span>Dubai </span>{' '}
            <span>/ [object Object]</span>
          </div>
        </div>
        <div className="SecTitleWithDesc Burj Al Arab Jumeirah" id="SecTitleWithDesc">
          <div style={{ textAlign: 'center', maxWidth: '42.75rem' }} className="card-body">
            <div className="d-flex flex-row justify-content-between">
              <Link
                href=""
                className="tagline left-tagline"
                style={{
                  fontSize: '0.75rem',
                  textTransform: 'uppercase',
                  color: '#6D6F6E',
                  display: 'inline-block',
                  letterSpacing: '0.075rem',
                  fontWeight: 500,
                }}
              ></Link>
            </div>
            <h3
              style={{
                fontSize: '32px',
                fontFamily: 'Bressay Display, Old Standard TT, serif',
                color: '#212322',
                marginTop: '0px',
                fontWeight: 400,
                letterSpacing: 'normal',
              }}
              className="card-title"
            >
              <Text field={props.fields.Title} />
            </h3>
            <p
              style={{
                fontSize: '0.875rem',
                fontFamily: 'Avenir Next, Roboto, sans-serif',
                fontWeight: 400,
                marginTop: '16px',
                color: '#212322',
              }}
              className="text-lg card-text"
            >
              <Text field={props.fields.Text} />
            </p>
          </div>
        </div>
        <div className="GalleryThumbnail">
          <div className="gallery-container">
            <div className="gallery">
              <figure className="gallery__item gallery__item--0">
                <img
                  src="https://cdn.jumeirah.com/-/mediadh/dh/hospitality/jumeirah/hotels/dubai/jumeirah-burj-al-arab/new-website-content/baa-hotel-home-page/hotel-gallery/baa_mini-hotel-gallery_image-left-top.jpg?h=1280&w=1920&modified=20241004063948"
                  alt="Gallery image 1"
                  className="gallery__img"
                />
              </figure>
              <figure className="gallery__item gallery__item--1">
                <img
                  src="https://cdn.jumeirah.com/-/mediadh/dh/hospitality/jumeirah/hotels/dubai/jumeirah-burj-al-arab/new-website-content/baa-hotel-home-page/hotel-gallery/baa_mini-hotel-gallery_image-left-bottom.jpg?h=1080&w=1620&modified=20241004063955"
                  alt="Gallery image 1"
                  className="gallery__img"
                />
              </figure>
              <figure className="gallery__item gallery__item--2">
                <img
                  src="https://cdn.jumeirah.com/-/mediadh/dh/hospitality/jumeirah/hotels/dubai/jumeirah-burj-al-arab/new-website-content/baa-hotel-home-page/hotel-gallery/baa_mini-hotel-gallery_image-on-center.jpg?h=1280&w=1920&modified=20241004063947"
                  alt="Gallery image 1"
                  className="gallery__img"
                />
              </figure>
              <figure className="gallery__item gallery__item--3">
                <img
                  src="https://cdn.jumeirah.com/-/mediadh/dh/hospitality/jumeirah/hotels/dubai/jumeirah-burj-al-arab/new-website-content/baa-hotel-home-page/hotel-gallery/baa_mini-hotel-gallery_image-right-top.jpg?h=1280&w=1920&modified=20241004063944"
                  alt="Gallery image 1"
                  className="gallery__img"
                />
              </figure>
              <figure className="gallery__item gallery__item--4">
                <img
                  src="https://cdn.jumeirah.com/-/mediadh/dh/hospitality/jumeirah/hotels/dubai/jumeirah-burj-al-arab/new-website-content/baa-hotel-home-page/hotel-gallery/baa_mini-hotel-gallery_image-right-bottom.jpg?h=1280&w=1920&modified=20241004063946"
                  alt="Gallery image 1"
                  className="gallery__img"
                />
              </figure>
            </div>
            <Link className="gallery-btn" href="/en/stay/dubai/burj-al-arab-jumeirah/gallery">
              View Gallery
            </Link>
          </div>
        </div>
        <div className="full-bleed-rd TwoColumnBigcardWithTitleDesc false container-fluid">
          <div className="SecTitleWithDesc" id="SecTitleWithDesc" style={{ minHeight: '8rem' }}>
            <div className="accommodation-title-container">
              <p className="accommodation-title">Accommodation (from {price})</p>
              <div className="header-title-line"></div>
            </div>
            <div style={{ textAlign: 'center', maxWidth: '460px' }} className="card-body">
              <div className="d-flex flex-row justify-content-between">
                <Link
                  href=""
                  className="tagline left-tagline"
                  style={{
                    fontSize: '0.75rem',
                    textTransform: 'uppercase',
                    color: '#6D6F6E',
                    display: 'inline-block',
                    letterSpacing: '0.075rem',
                    fontWeight: 500,
                  }}
                ></Link>
              </div>
              <p
                style={{
                  fontSize: '0.875rem',
                  fontFamily: 'Avenir Next, Roboto, sans-serif',
                  fontWeight: 400,
                  marginTop: '16px',
                  color: '#212322',
                }}
                className="text-lg card-text"
              >
                Exceptional design and personalised service await, from our unique vantage point off
                Dubai&quot;s golden shoreline. In our duplex suites, no two stays are the same.
              </p>
            </div>
          </div>
          <div className="d-flex flex-row card-deck-container false max-width-1440">
            <div className="card-deck">
              <div
                style={{
                  backgroundColor: '#FAF8F5',
                  boxShadow: 'none',
                  width: '100%',
                  maxWidth: '70%',
                  border: 'none',
                  cursor: 'pointer',
                }}
                className="story-card feature-card card"
              >
                <div className="card-image-wrapper" style={{ cursor: 'pointer' }}>
                  <img
                    alt="Card image cap"
                    src="https://cdn.jumeirah.com/-/mediadh/dh/hospitality/jumeirah/hotels/dubai/jumeirah-burj-al-arab/new-website-content/baa-hotel-home-page/accomodation-section/baa_room-type_baa_room-type-1-image-1.jpeg?h=1080&w=1620&modified=20240427073311"
                    width="70%"
                    height="566"
                    style={{ objectFit: 'cover' }}
                    className="card-img-top"
                  />
                </div>
                <div className="border-anima"></div>
                <div className="card-body">
                  <div className="d-flex flex-row justify-content-between">
                    <Link
                      className="tagline left-tagline 11"
                      href="/en/stay/dubai/burj-al-arab-jumeirah/accommodation"
                      style={{
                        fontSize: '0.75rem',
                        textTransform: 'uppercase',
                        color: '#6D6F6E',
                        display: 'inline-block',
                        letterSpacing: '0.075rem',
                        fontWeight: 500,
                      }}
                    >
                      Suites
                    </Link>
                  </div>
                  <h3
                    style={{
                      fontSize: '1.5rem',
                      fontFamily: 'Bressay Display, Old Standard TT, serif',
                      color: '#212322',
                      marginTop: '0.5rem',
                      fontWeight: 400,
                      letterSpacing: 'normal',
                    }}
                    className="card-title"
                  >
                    Exquisitely designed
                  </h3>
                  <p
                    style={{
                      fontSize: '0.875rem',
                      fontFamily: 'Avenir Next, Roboto, sans-serif',
                      fontWeight: 400,
                      marginTop: '0.5rem',
                      color: '#212322',
                    }}
                    className="text-lg card-text"
                  >
                    Exquisitely designed spaces overlooking the resort, lagoon, or shimmering
                    ocean..
                  </p>
                </div>
              </div>

              <div
                style={{
                  backgroundColor: '#FAF8F5',
                  boxShadow: 'none',
                  width: '100%',
                  maxWidth: '30%',
                  border: 'none',
                  cursor: 'pointer',
                }}
                className="story-card feature-card card"
              >
                <div className="card-image-wrapper" style={{ cursor: 'pointer' }}>
                  <img
                    alt="Card image cap"
                    src="https://cdn.jumeirah.com/-/mediadh/dh/hospitality/jumeirah/hotels/dubai/jumeirah-burj-al-arab/new-website-content/baa-hotel-home-page/accomodation-section/baa_room-type_baa_room-type-2-image.jpeg?h=1080&w=810&modified=20240427073313"
                    width="30%"
                    height="566"
                    style={{ objectFit: 'cover' }}
                    className="card-img-top"
                  />
                </div>
                <div className="border-anima"></div>
                <div className="card-body">
                  <div className="d-flex flex-row justify-content-between">
                    <Link
                      className="tagline left-tagline 11"
                      href="/en/stay/dubai/burj-al-arab-jumeirah/accommodation"
                      style={{
                        fontSize: '0.75rem',
                        textTransform: 'uppercase',
                        color: '#6D6F6E',
                        display: 'inline-block',
                        letterSpacing: '0.075rem',
                        fontWeight: 500,
                      }}
                    >
                      Royal Suites
                    </Link>
                  </div>
                  <h3
                    style={{
                      fontSize: '1.5rem',
                      fontFamily: 'Bressay Display, Old Standard TT, serif',
                      color: '#212322',
                      marginTop: '0.5rem',
                      fontWeight: 400,
                      letterSpacing: 'normal',
                    }}
                    className="card-title"
                  >
                    Beautiful spaces fit for royalty
                  </h3>
                  <p
                    style={{
                      fontSize: '0.875rem',
                      fontFamily: 'Avenir Next, Roboto, sans-serif',
                      fontWeight: 400,
                      marginTop: '0.5rem',
                      color: '#212322',
                    }}
                    className="text-lg card-text"
                  >
                    A particularly special experience to treasure.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="accommodation-btn-container">
            <Link
              className="accommodation-btn"
              href="/en/stay/dubai/burj-al-arab-jumeirah/accommodation"
            >
              ALL SUITES
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JumeirahHotelDetail;
