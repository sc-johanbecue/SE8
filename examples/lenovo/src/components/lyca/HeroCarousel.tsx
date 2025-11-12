import { JSX, useCallback } from 'react';
import {
  ImageField,
  LinkField,
  Link as JssLink,
  Image as JssImage,
  ComponentParams,
  ComponentRendering,
} from '@sitecore-content-sdk/nextjs';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

type BannerItem = {
  fields: {
    BackgroundImage: ImageField;
    MobileBackgroundImage: ImageField;
    CTALink: LinkField;
  };
};

type Fields = {
  LeftIcon: ImageField;
  RightIcon: ImageField;
  items: BannerItem[];
};

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: Fields;
};

export const Default = (props: ComponentProps): JSX.Element => {
  const id = props.rendering.uid;
  const items = props.fields.items;

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'start',
    },
    [
      Autoplay({
        delay: 5000,
        stopOnInteraction: false,
        stopOnMouseEnter: true, // Stop autoplay on hover
      }),
    ]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const showNavigation = items.length > 1;

  return (
    <section key={id} className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {items.map((item, index) => {
            const SlideInner = (
              <div className="flex-[0_0_100%] relative">
                {/* Mobile image (<= sm) */}
                <JssImage
                  field={item.fields.MobileBackgroundImage ?? item.fields.BackgroundImage}
                  className="block sm:hidden w-full h-full object-cover"
                />
                {/* Desktop/Tablet image (>= sm) */}
                <JssImage
                  field={item.fields.BackgroundImage}
                  className="hidden sm:block w-full h-full object-cover"
                />
              </div>
            );

            return item.fields.CTALink ? (
              <JssLink field={item.fields.CTALink} key={index} className="flex-[0_0_100%]">
                {SlideInner}
              </JssLink>
            ) : (
              <div key={index} className="flex-[0_0_100%]">
                {SlideInner}
              </div>
            );
          })}
        </div>
      </div>

      {showNavigation && (
        <>
          <button
            onClick={scrollPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-colors z-10"
            aria-label="Previous slide"
          >
            <svg
              className="w-6 h-6 text-[#1a1a4d]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={scrollNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-colors z-10"
            aria-label="Next slide"
          >
            <svg
              className="w-6 h-6 text-[#1a1a4d]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}
    </section>
  );
};
