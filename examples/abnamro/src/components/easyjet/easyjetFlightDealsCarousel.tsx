import React, { JSX } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  TextField,
  Text,
  ComponentParams,
  ComponentRendering,
  Placeholder,
} from '@sitecore-content-sdk/nextjs';

interface Fields {
  Title: TextField;
  Subtitle: TextField;
  Disclaimer: TextField;
}

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: Fields;
};

export const Default = (props: ComponentProps): JSX.Element => {
  const id = props.rendering.uid;
  const phFlightDealsContainer = `EasyjetFlightDealsContainer-${props.params.DynamicPlaceholderId}`;

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: 'start' });

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  return (
    <section className="py-12 md:py-16 bg-white" key={id}>
      <div className="container mx-auto px-4">
        <Text
          tag="h2"
          field={props.fields.Title}
          className="text-3xl md:text-4xl font-bold text-center mb-2 uppercase"
        />
        <Text tag="p" field={props.fields.Subtitle} className="text-center text-gray-600 mb-8" />

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-4">
              <Placeholder name={phFlightDealsContainer} rendering={props.rendering} />
            </div>
          </div>

          <Button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white hover:bg-gray-100 text-gray-800 rounded-full p-2 shadow-lg hidden md:flex"
            size="icon"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white hover:bg-gray-100 text-gray-800 rounded-full p-2 shadow-lg hidden md:flex"
            size="icon"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
          <Text tag="p" field={props.fields.Disclaimer} className="text-black text-xs" />
        </div>
      </div>
    </section>
  );
};
