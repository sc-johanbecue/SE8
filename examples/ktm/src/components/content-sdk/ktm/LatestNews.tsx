import Image from 'next/image';
import Link from 'next/link';

import {
  ComponentParams,
  ComponentRendering,
  TextField,
  LinkField,
  RichTextField,
  ImageField,
  Text,
  Link as JssLink,
} from '@sitecore-content-sdk/nextjs';
import React, { JSX } from 'react';

type ItemFields = {
  Heading: TextField;
  SubHeading: TextField;
  Image: ImageField;
  Text: RichTextField;
  ButtonLabel: TextField;
  Link: LinkField;
  Label: TextField;
  Link2: LinkField;
  ButtonLabel3: TextField;
};

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: ItemFields;
};

export const Default = (props: ComponentProps): JSX.Element => {
  console.log('ktm footer props:', JSON.stringify(props));

  return (
    <>
      <div className="htmlSourceCode aem-GridColumn aem-GridColumn--default--12">
        <div className="component">
          <h2 style={{ textAlign: 'center' }}>
            <Text field={props.fields.Heading} />
          </h2>
        </div>
      </div>
      <div className="teaserList dynamicmedia parbase aem-GridColumn aem-GridColumn--default--12">
        <section className="c-teaser-list component">
          <div className="c-teaser-list__container c-teaser-list__container--three-items-per-row container">
            <article className="c-teaser-list__item c-teaser-list__item--three-items-per-row">
              <Link href="https://www.ktm.com/en-be/powerdeals/built-to-race-priced-to-win.html">
                <div className="image dynamicmedia parbase aem-GridColumn aem-GridColumn--default--12">
                  <figure className="c-teaser-list__figure c-teaser-list__figure--three-items-per-row">
                    <div className="cq-dd-image">
                      <div className="c-image__content">
                        <div
                          id="38562452"
                          data-current-page="/content/websites/ktm-com/europe/be/en"
                          data-page-locale="en"
                          data-asset-path="ktm/KTM Q3 Sales Promotion Generic Thumbnail 1800x1800"
                          data-asset-name="KTM Q3 Sales Promotion Generic Thumbnail 1800x1800.jpg"
                          data-asset-type="image"
                          data-viewer-path="https://s7g10.scene7.com/s7viewers/"
                          data-imageserver="https://s7g10.scene7.com/is/image/"
                          data-videoserver="https://s7g10.scene7.com/is/content/"
                          data-contenturl="https://s7g10.scene7.com/is/content/"
                          data-imagepreset="ktm_teaser_square"
                          data-wcmdisabled=""
                          data-dms7=""
                          className="s7dm-dynamic-media-ktm"
                        >
                          <div className="s7responsiveContainer">
                            <Image
                              src="https://s7g10.scene7.com/is/image/ktm/KTM%20Q3%20Sales%20Promotion%20Generic%20Thumbnail%201800x1800?$ktm_teaser_square$&wid=500&dpr=off"
                              alt="KTM%20Q3%20Sales%20Promotion%20Generic%20Thumbnail%201800x1800"
                              className="fluidimage"
                              sizes="100vw"
                              width={0}
                              height={0}
                              id="38562452_resp"
                              data-src="https://s7g10.scene7.com/is/image/ktm/KTM Q3 Sales Promotion Generic Thumbnail 1800x1800?$ktm_teaser_square$"
                              data-enablehd="always"
                              style={{ width: '100%', height: 'auto' }}
                              unoptimized
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </figure>
                </div>
              </Link>
              <div className="c-teaser-list__content c-teaser-list__content--three-items-per-row">
                <time
                  className="c-teaser-list__date c-teaser-list__date--three-items-per-row"
                  dateTime="01 Oct 2025"
                >
                  01 Oct 2025
                </time>{' '}
                <Link
                  href="https://www.ktm.com/en-be/powerdeals/built-to-race-priced-to-win.html"
                  className="c-teaser-list__link c-teaser-list__link--three-items-per-row"
                >
                  <h2 className="c-teaser-list__title c-teaser-list__title--three-items-per-row line-clamp-3">
                    GEMAAKT OM TE RACEN. GEPRIJSD OM TE WINNEN.
                  </h2>
                  <span className="c-teaser-list__cta c-teaser-list__cta--three-items-per-row">
                    View Profile
                  </span>
                </Link>
                <div className="c-teaser-list__teaser c-teaser-list__teaser--three-items-per-row line-clamp-4">
                  Maak je klaar om te racen met KTM’s exclusieve Q4-aanbiedingen. Profiteer van
                  raceklare deals op geselecteerde motocross-, enduro-, travel-, sporttourer- en
                  naked-modellen - er is nooit een beter moment geweest om je slag te slaan.
                </div>
              </div>
            </article>
            <article className="c-teaser-list__item c-teaser-list__item--three-items-per-row">
              <Link href="https://www.ktm.com/en-be/racing/racing-news/daniel-sanders-crowned-2025-world-rally-raid-champion-with-victo.html">
                <div className="image dynamicmedia parbase aem-GridColumn aem-GridColumn--default--12">
                  <figure className="c-teaser-list__figure c-teaser-list__figure--three-items-per-row">
                    <div className="cq-dd-image">
                      <div className="c-image__content">
                        <div
                          id="446190783"
                          data-current-page="/content/websites/ktm-com/europe/be/en"
                          data-page-locale="en"
                          data-asset-path="ktm/1 _POR25_EdoBauer_EdoPhoto_EDU6715"
                          data-asset-name="1 _POR25_EdoBauer_EdoPhoto_EDU6715.jpg"
                          data-asset-type="image"
                          data-viewer-path="https://s7g10.scene7.com/s7viewers/"
                          data-imageserver="https://s7g10.scene7.com/is/image/"
                          data-videoserver="https://s7g10.scene7.com/is/content/"
                          data-contenturl="https://s7g10.scene7.com/is/content/"
                          data-imagepreset="ktm_teaser_square"
                          data-wcmdisabled=""
                          data-dms7=""
                          className="s7dm-dynamic-media-ktm"
                        >
                          <div className="s7responsiveContainer">
                            <Image
                              src="https://s7g10.scene7.com/is/image/ktm/1%20_POR25_EdoBauer_EdoPhoto_EDU6715?$ktm_teaser_square$&wid=500&dpr=off"
                              alt="1%20_POR25_EdoBauer_EdoPhoto_EDU6715"
                              className="fluidimage"
                              sizes="100vw"
                              width={0}
                              height={0}
                              id="446190783_resp"
                              data-src="https://s7g10.scene7.com/is/image/ktm/1 _POR25_EdoBauer_EdoPhoto_EDU6715?$ktm_teaser_square$"
                              data-enablehd="always"
                              style={{ width: '100%', height: 'auto' }}
                              unoptimized
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </figure>
                </div>
              </Link>
              <div className="c-teaser-list__content c-teaser-list__content--three-items-per-row">
                <time
                  className="c-teaser-list__date c-teaser-list__date--three-items-per-row"
                  dateTime="28 Sept 2025"
                >
                  28 Sept 2025
                </time>{' '}
                <Link
                  href="https://www.ktm.com/en-be/racing/racing-news/daniel-sanders-crowned-2025-world-rally-raid-champion-with-victo.html"
                  className="c-teaser-list__link c-teaser-list__link--three-items-per-row"
                >
                  <h2 className="c-teaser-list__title c-teaser-list__title--three-items-per-row line-clamp-3">
                    DANIEL SANDERS CROWNED 2025 WORLD RALLY-RAID CHAMPION WITH VICTORY IN PORTUGAL
                  </h2>
                  <span className="c-teaser-list__cta c-teaser-list__cta--three-items-per-row">
                    View Profile
                  </span>
                </Link>
                <div className="c-teaser-list__teaser c-teaser-list__teaser--three-items-per-row line-clamp-4">
                  Red Bull KTM Factory Racing’s Daniel Sanders has secured the 2025 FIM World
                  Rally-Raid Championship with a dominant win at round four, Rally Raid Portugal.
                  Continuing his unbeaten record this season, ‘Chucky’ topped the timesheets in the
                  prologue and three of the five stages to take the race win and the championship
                  crown in style. Luciano Benavides rode his KTM 450 RALLY to third place overall,
                  while Edgar Canet took the win in the hotly contested Rally2 category.
                </div>
              </div>
            </article>
            <article className="c-teaser-list__item c-teaser-list__item--three-items-per-row">
              <Link href="https://www.ktm.com/en-be/racing/racing-news/josep-garcia-claims-enduro1-world-title-at-endurogp-of-italy.html">
                <div className="image dynamicmedia parbase aem-GridColumn aem-GridColumn--default--12">
                  <figure className="c-teaser-list__figure c-teaser-list__figure--three-items-per-row">
                    <div className="cq-dd-image">
                      <div className="c-image__content">
                        <div
                          id="1935775331"
                          data-current-page="/content/websites/ktm-com/europe/be/en"
                          data-page-locale="en"
                          data-asset-path="ktm/1 josep-garcia_EnduroGP-2025_Rnd6_17075"
                          data-asset-name="1 josep-garcia_EnduroGP-2025_Rnd6_17075.jpg"
                          data-asset-type="image"
                          data-viewer-path="https://s7g10.scene7.com/s7viewers/"
                          data-imageserver="https://s7g10.scene7.com/is/image/"
                          data-videoserver="https://s7g10.scene7.com/is/content/"
                          data-contenturl="https://s7g10.scene7.com/is/content/"
                          data-imagepreset="ktm_teaser_square"
                          data-wcmdisabled=""
                          data-dms7=""
                          className="s7dm-dynamic-media-ktm"
                        >
                          <div className="s7responsiveContainer">
                            <Image
                              src="https://s7g10.scene7.com/is/image/ktm/1%20josep-garcia_EnduroGP-2025_Rnd6_17075?$ktm_teaser_square$&wid=500&dpr=off"
                              alt="1%20josep-garcia_EnduroGP-2025_Rnd6_17075"
                              className="fluidimage"
                              sizes="100vw"
                              width={0}
                              height={0}
                              id="1935775331_resp"
                              data-src="https://s7g10.scene7.com/is/image/ktm/1 josep-garcia_EnduroGP-2025_Rnd6_17075?$ktm_teaser_square$"
                              data-enablehd="always"
                              style={{ width: '100%', height: 'auto' }}
                              unoptimized
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </figure>
                </div>
              </Link>
              <div className="c-teaser-list__content c-teaser-list__content--three-items-per-row">
                <time
                  className="c-teaser-list__date c-teaser-list__date--three-items-per-row"
                  dateTime="28 Sept 2025"
                >
                  28 Sept 2025
                </time>{' '}
                <Link
                  href="https://www.ktm.com/en-be/racing/racing-news/josep-garcia-claims-enduro1-world-title-at-endurogp-of-italy.html"
                  className="c-teaser-list__link c-teaser-list__link--three-items-per-row"
                >
                  <h2 className="c-teaser-list__title c-teaser-list__title--three-items-per-row line-clamp-3">
                    JOSEP GARCIA CLAIMS ENDURO1 WORLD TITLE AT ENDUROGP OF ITALY
                  </h2>
                  <span className="c-teaser-list__cta c-teaser-list__cta--three-items-per-row">
                    View Profile
                  </span>
                </Link>
                <div className="c-teaser-list__teaser c-teaser-list__teaser--three-items-per-row line-clamp-4">
                  Red Bull KTM Factory Racing’s Josep Garcia has secured the 2025 FIM Enduro1 World
                  Championship with a commanding performance at the EnduroGP of Italy. Despite a
                  challenging Sunday in Darfo Boario Terme, where Garcia battled through the pain
                  from a late crash on Saturday, he did what he had to do to take the title with one
                  round to spare.
                </div>
              </div>
            </article>
          </div>
        </section>
      </div>
      <div className="button aem-GridColumn aem-GridColumn--default--12">
        <div className="component c-btn c-btn--center">
          <JssLink
            field={props.fields.Link}
            className="c-btn__link c-btn__link--primary-dark"
            target="_self"
          >
            <span className="c-btn__link--text">
              <Text field={props.fields.ButtonLabel} />
            </span>
          </JssLink>
        </div>
      </div>
      <div className="button aem-GridColumn aem-GridColumn--default--12">
        <div className="component c-btn c-btn--center">
          <p className="c-btn__text"><Text field={props.fields.Label} /></p>
          <JssLink
            field={props.fields.Link2}
            className="c-btn__link c-btn__link--primary-light-icon c-btn__link--icon"
            target="_self"
          >
            <span className="c-btn__link--text"><Text field={props.fields.ButtonLabel3} /></span>
          </JssLink>
        </div>
      </div>
    </>
  );
};
