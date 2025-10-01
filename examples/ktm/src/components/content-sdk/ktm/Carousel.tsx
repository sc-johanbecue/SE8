'use client';

import React, { JSX, useCallback, useEffect, useMemo, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import type { EmblaOptionsType } from 'embla-carousel';
import type { EmblaCarouselType } from 'embla-carousel';
import Autoplay from 'embla-carousel-autoplay';

import {
  ComponentParams,
  ComponentRendering,
  TextField,
  LinkField,
  ImageField,
  Item,
  Text,
  Image as JssImage,
  Link as JssLink,
} from '@sitecore-content-sdk/nextjs';

type ItemFields = {
  Items: CarouselItemRef[];
};

// type Slide = {
//   imgSrc: string;
//   imgAlt: string;
//   headingSub?: string;
//   headingMain?: string;
//   ctaHref?: string;
//   ctaLabel?: string;
//   align: 'left' | 'center';
// };

type CarouselItemRef = Item & {
  fields: {
    Image: ImageField;
    SubHeading: TextField;
    Heading: TextField;
    Link: LinkField;
    ButtonLabel: TextField;
    Align: TextField;
  };
};

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: ItemFields;
};

// const SLIDES: Slide[] = [
//   {
//     imgSrc:
//       'https://s7g10.scene7.com/is/image/ktm/KTM-enduro-300-exc-hardenduro-homepage-header-1?wid=2800&dpr=off',
//     imgAlt: 'KTM-enduro-300-exc-hardenduro-homepage-header',
//     headingSub: 'BUILT TO BEAT THE BEST',
//     headingMain: '2026 KTM 300 EXC HARDENDURO',
//     ctaHref:
//       'https://www.ktm.com/en-be/models/enduro/2-stroke/2026-ktm-300-exchardenduro.html',
//     ctaLabel: 'Explore More',
//     align: 'left',
//   },
//   {
//     imgSrc:
//       'https://s7g10.scene7.com/is/image/ktm/KTM-motorsports-daniel-sanders-rally?wid=2800&dpr=off',
//     imgAlt: 'KTM-motorsports-daniel-sanders-rally',
//     headingSub: 'DANIEL SANDERS',
//     headingMain: '2025 FIM WORLD RALLY-RAID CHAMPION',
//     ctaHref:
//       'https://www.ktm.com/en-be/racing/racing-news/daniel-sanders-crowned-2025-world-rally-raid-champion-with-victo.html',
//     ctaLabel: 'Find Out More',
//     align: 'left',
//   },
//   {
//     imgSrc:
//       'https://s7g10.scene7.com/is/image/ktm/KTM-sports-tourer--890-smt-homepage-header6:XLarge?wid=2997&hei=1712&dpr=off',
//     imgAlt: 'KTM-sports-tourer--890-smt-homepage-header6',
//     headingSub: 'The Long-range Supermoto Weapon',
//     headingMain: 'ktm 890 smt',
//     ctaHref: 'https://www.ktm.com/en-be/models/sports-tourer/2024-ktm-890-smt.html',
//     ctaLabel: 'Explore More',
//     align: 'center',
//   },
//   {
//     imgSrc:
//       'https://s7g10.scene7.com/is/image/ktm/KTM-motorsports-josep-garcia-fim-champion?wid=2800&dpr=off',
//     imgAlt: 'KTM-motorsports-josep-garcia-fim-champion',
//     headingSub: 'JOSEP GARCIA',
//     headingMain: '2025 FIM ENDURO1 WORLD CHAMPION',
//     ctaHref:
//       'https://www.ktm.com/en-be/racing/racing-news/josep-garcia-claims-enduro1-world-title-at-endurogp-of-italy.html',
//     ctaLabel: 'Find Out More',
//     align: 'left',
//   },
//   {
//     imgSrc:
//       'https://s7g10.scene7.com/is/image/ktm/KTM-powerwear-gfx-homepage-header6?wid=2800&dpr=off',
//     imgAlt: 'KTM-powerwear-gfx-homepage-header6',
//     headingSub: 'ADVANCED FABRICS. CARBON STRENGTH. PURE KTM STYLE',
//     headingMain: 'THE ALL-NEW 2025 KTM POWERWEAR',
//     ctaHref: 'https://www.ktm.com/en-be/parts---wear/powerwear/products.html',
//     ctaLabel: 'Explore More',
//     align: 'center',
//   },
// ];

export const Default = (props: ComponentProps): JSX.Element => {
  console.log('ktm footer props:', JSON.stringify(props));

  // Embla init
  const options: EmblaOptionsType = useMemo(
    () => ({ loop: true, align: 'start', skipSnaps: false }),
    []
  );
  const autoplay = useMemo(
    () =>
      Autoplay({
        delay: 3000, // from data-auto-play-interval-ms
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    []
  );
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [autoplay]);

  // Bullets (pagination)
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onSelect = useCallback((api: EmblaCarouselType) => {
    setSelectedIndex(api.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', () => onSelect(emblaApi));
    onSelect(emblaApi);
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  return (
    <div className="stageSlider aem-GridColumn aem-GridColumn--default--12">
      <div
        className="c-stage-slider component-fullwidth stageSlider--publish js-stageSlider stageSlider--full-height"
        data-auto-play="true"
        data-auto-play-interval-ms="3000"
        aria-roledescription="carousel"
      >
        {/* Embla viewport */}
        <div className="embla__viewport" ref={emblaRef} role="region" aria-label="KTM carousel">
          {/* Embla container */}
          <div className="cmp-container embla__container" style={{ display: 'flex' }} role="list">
            {props.fields.Items.map((s, idx) => (
              <div
                key={idx}
                className={`c-stage-image embla__slide`}
                style={{ flex: '0 0 100%' }}
                role="listitem"
              >
                <section className="glide__content">
                  <div className="glide__content-image">
                    <div
                      className="s7dm-dynamic-media-ktm"
                      data-mode="showOriginalImage"
                      data-aspectratio="true"
                    >
                      <div className="s7responsiveContainer">
                        <JssImage
                          field={s.fields.Image}
                          className="fluidimage"
                          sizes="100vw"
                          width={0}
                          height={0}
                          style={{ width: '100%', height: 'auto' }}
                          unoptimized
                        />
                      </div>
                    </div>
                  </div>

                  <div
                    className={`glide__content-container ${
                      s.fields.Align.value === 'center'
                        ? 'glide__content-container--center'
                        : 'glide__content-container--left'
                    } component component-fullwidth--padded-lg`}
                  >
                    <div className="glide__content-text">
                      <div className="glide__content-headline">
                        <p className="glide__content-headline--sub glide__content-headline--secondary">
                          <Text field={s.fields.SubHeading} />
                        </p>
                        <p className="glide__content-headline--main glide__content-headline--secondary">
                          <Text field={s.fields.Heading} />
                        </p>
                      </div>

                      {s.fields.Link && s.fields.ButtonLabel && (
                        <div className="glide__content-buttons glide__content-buttons--secondary js-stage-auth-image">
                          <div className="c-btn">
                            <JssLink
                              field={s.fields.Link}
                              className="c-btn__link c-btn__link--primary-dark"
                              target="_self"
                            >
                              <Text field={s.fields.ButtonLabel} />
                            </JssLink>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </section>
              </div>
            ))}
          </div>
        </div>

        {/* Optional scroll hint */}
        <div className="glide__scroll-action">
          <p>Scroll down</p>
        </div>

        {/* Bullets */}
        <div className="glide__bullets" role="tablist" aria-label="Slide navigation">
          {scrollSnaps.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === selectedIndex ? 'true' : undefined}
              className={`glide__bullet${i === selectedIndex ? ' glide__bullet--active' : ''}`}
              onClick={() => scrollTo(i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
