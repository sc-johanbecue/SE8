import React from 'react';
import { useState, useCallback, useEffect } from 'react';
import {
  Text,
  RichText,
  Image as JssImage,
  Link as JssLink,
  TextField,
  RichTextField,
  ImageField,
  LinkField,
  ComponentParams,
  ComponentRendering,
} from '@sitecore-content-sdk/nextjs';
import { ChevronLeft, ChevronRight, FileText, Phone, Mail } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';

type CarouselImage = {
  image: ImageField;
};

type ContactPerson = {
  fields: {
    Name: TextField;
    Title: TextField;
    Organization: TextField;
    Address: TextField;
    Phone: TextField;
    PhoneLink: LinkField;
    Email: TextField;
    EmailLink: LinkField;
    Image: ImageField;
  };
};

type AboutUs = {
  fields: {
    BodyContent: RichTextField;
  };
};

type MediClinicArticleDetailFields = {
  Title: TextField;
  PublicationDate: TextField;
  LeadText: RichTextField;
  BodyContent: RichTextField;
  CarouselImages: CarouselImage[];
  PdfTitle: TextField;
  PdfSize: TextField;
  PdfLink: LinkField;
  ContactHeading: TextField;
  ContactPerson: ContactPerson;
  AboutUs: AboutUs;
};

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: MediClinicArticleDetailFields;
};

export const MediClinicArticleDetail = (props: ComponentProps): React.JSX.Element => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: 'start' });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  const publicationDate = props.fields?.PublicationDate?.value;

  const formattedDate = publicationDate
    ? new Date(publicationDate).toLocaleDateString('en-GB') // 'en-GB' gives dd/mm/yyyy
    : '';

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-8 md:py-12 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Article Header */}
            <div className="bg-white rounded-lg p-6 md:p-8 mb-6">
              <p className="text-sm text-gray-500 mb-6">{formattedDate}</p>
              <RichText
                field={props.fields.LeadText}
                className="text-lg text-gray-700 leading-relaxed my-6 font-medium"
              />
              <RichText
                field={props.fields.BodyContent}
                className=" text-gray-700 prose prose-lg max-w-none
                  prose-headings:font-bold prose-headings:text-gray-900 prose-headings:mb-4
                  prose-h2:text-2xl prose-h3:text-xl
                  prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-4
                  prose-a:text-cyan-500 prose-a:no-underline hover:prose-a:underline
                  prose-strong:text-gray-900 prose-strong:font-semibold"
              />
              {props.fields.AboutUs && (
                <RichText
                  field={props.fields.AboutUs?.fields.BodyContent}
                  className=" text-gray-700 prose prose-lg max-w-none
                  prose-headings:font-bold prose-headings:text-gray-900 prose-headings:mb-4
                  prose-h2:text-2xl prose-h3:text-xl
                  prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-4
                  prose-a:text-cyan-500 prose-a:no-underline hover:prose-a:underline
                  prose-strong:text-gray-900 prose-strong:font-semibold"
                />
              )}
            </div>

            {/* Image Carousel */}
            {props.fields.CarouselImages && props.fields.CarouselImages.length > 0 && (
              <div className="bg-white rounded-lg p-6 md:p-8 mb-6">
                <div className="relative">
                  <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex gap-4">
                      {props.fields.CarouselImages.map((item, index) => (
                        <div key={index} className="flex-[0_0_100%] md:flex-[0_0_50%] min-w-0">
                          <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                            <JssImage field={item.image} className="w-full h-full object-cover" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {props.fields.CarouselImages.length > 1 && (
                    <>
                      <button
                        onClick={scrollPrev}
                        disabled={!canScrollPrev}
                        className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        aria-label="Previous image"
                      >
                        <ChevronLeft className="w-6 h-6 text-gray-700" />
                      </button>
                      <button
                        onClick={scrollNext}
                        disabled={!canScrollNext}
                        className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        aria-label="Next image"
                      >
                        <ChevronRight className="w-6 h-6 text-gray-700" />
                      </button>
                    </>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* PDF Download Card */}
            {props.fields.PdfLink && (
              <div className="bg-cyan-50 rounded-lg p-6 mb-6 border border-cyan-100">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <JssLink
                      field={props.fields.PdfLink}
                      className="inline-flex items-center text-sm font-medium text-cyan-600 hover:text-cyan-700 transition-colors"
                    />
                    <Text
                      tag="p"
                      field={props.fields.PdfSize}
                      className="text-sm text-gray-600 mb-3"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Contact Information Card */}
            {props.fields.ContactPerson && (
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <Text
                  tag="h3"
                  field={props.fields.ContactHeading}
                  className="font-bold text-gray-900 mb-6 text-lg"
                />

                <div className="flex flex-col items-center text-center mb-6">
                  <div className="w-24 h-24 rounded-full overflow-hidden mb-4 bg-gray-100">
                    <JssImage
                      field={props.fields.ContactPerson.fields.Image}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <Text
                    tag="p"
                    field={props.fields.ContactPerson.fields.Title}
                    className="text-sm text-gray-600 mb-1"
                  />
                  <Text
                    tag="p"
                    field={props.fields.ContactPerson.fields.Name}
                    className="font-semibold text-gray-900 mb-4"
                  />
                </div>

                <div className="space-y-3 text-sm">
                  <div>
                    <Text
                      tag="p"
                      field={props.fields.ContactPerson.fields.Organization}
                      className="text-gray-900 font-medium"
                    />
                    <Text
                      tag="p"
                      field={props.fields.ContactPerson.fields.Address}
                      className="text-gray-600"
                    />
                  </div>

                  <div className="pt-3 border-t border-gray-200">
                    <JssLink
                      field={props.fields.ContactPerson.fields.PhoneLink}
                      className="flex items-center gap-2 text-cyan-600 hover:text-cyan-700 transition-colors mb-2"
                    >
                      <Phone className="w-4 h-4" />
                      {props.fields.ContactPerson.fields.PhoneLink.value?.text}
                    </JssLink>
                    <JssLink
                      field={props.fields.ContactPerson.fields.EmailLink}
                      className="flex items-center gap-2 text-cyan-600 hover:text-cyan-700 transition-colors break-all"
                    >
                      <Mail className="w-4 h-4 flex-shrink-0" />
                      {props.fields.ContactPerson.fields.EmailLink.value?.text}
                    </JssLink>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediClinicArticleDetail;
