import React, { JSX } from 'react';
import {
  TextField,
  ImageField,
  RichTextField,
  Text,
  RichText,
  ComponentParams,
  ComponentRendering,
} from '@sitecore-content-sdk/nextjs';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';

type Fields = {
  Title: TextField;
  PublicationDate: TextField;
  Tags: TextField;
  Image: ImageField;
  Introduction: RichTextField;
  Content: RichTextField;
};

// Calculate reading time based on word count (average 200 words per minute)
function calculateReadingTime(text: string): number {
  const words = text.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / 200);
  return minutes;
}

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: Fields;
};

export const Default = (props: ComponentProps): JSX.Element => {
  const id = props.rendering.uid;
  const readingTime = calculateReadingTime(
    ((props.fields.Introduction.value as string) + props.fields.Content.value) as string
  );

  const publicationDate = props.fields?.PublicationDate?.value;

  const formattedDate = publicationDate
    ? new Date(publicationDate).toLocaleDateString('en-GB') // 'en-GB' gives dd/mm/yyyy
    : '';

  return (
    <article className="bg-gray-50" key={id}>
      {/* Hero Image with Title Overlay (Desktop) */}
      <div className="relative">
        <div className="relative w-full h-[240px] md:h-[360px] lg:h-[400px] overflow-hidden">
          <Image
            alt=""
            src={props.fields.Image.value?.src as string}
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        {/* Title overlay for desktop */}
        <div className="hidden md:block absolute -bottom-8 left-1/2 -translate-x-1/2 w-full max-w-3xl px-4">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h1 className="text-3xl lg:text-4xl font-normal text-gray-900 text-balance">
              <Text field={props.fields.Title} />
            </h1>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="container mx-auto px-4 py-8 md:py-12 max-w-3xl">
        {/* Title for mobile (below image) */}
        <div className="md:hidden mb-6">
          <h1 className="text-2xl font-normal text-gray-900 mb-4 text-balance">
            <Text field={props.fields.Title} />
          </h1>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {props.fields.Tags.value
            ?.toString()
            .split(' ')
            .map((tag, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="bg-gray-200 text-gray-700 hover:bg-gray-300"
              >
                {tag}
              </Badge>
            ))}
        </div>

        {/* Date and Reading Time */}
        <div className="text-sm text-gray-600 mb-6">
          {formattedDate} • {readingTime} minuten lezen
        </div>

        {/* Introduction */}
        <div className="mb-8">
          <RichText
            field={props.fields.Introduction}
            className="text-lg leading-relaxed text-gray-900"
          />
        </div>

        {/* Main Content */}
        <div className="prose prose-lg max-w-none">
          <RichText
            field={props.fields.Content}
            className="text-lg leading-relaxed text-gray-900"
          />
        </div>

        {/* Tags Section */}
        <div className="mt-12 mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {props.fields.Tags.value
              ?.toString()
              .split(' ')
              .map((tag, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="border-gray-300 text-gray-700 hover:bg-gray-100"
                >
                  {tag}
                </Badge>
              ))}
          </div>
        </div>
      </div>
    </article>
  );
};
