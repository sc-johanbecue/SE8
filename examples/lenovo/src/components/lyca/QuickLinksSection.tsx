import { JSX } from 'react';
import {
  TextField,
  Text,
  LinkField,
  ImageField,
  RichTextField,
  RichText,
  Image as JssImage,
  Link as JssLink,
  ComponentParams,
  ComponentRendering,
} from '@sitecore-content-sdk/nextjs';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Image from 'next/image';

type QuickLink = {
  fields: {
    LinkText: TextField;
    Icon: ImageField;
    Link: LinkField;
  };
};

type Fields = {
  NewCustomerHeading: TextField;
  NewCustomerDescription: RichTextField;
  NewCustomerLinks: QuickLink[];
  ExistingCustomerBackgroundImage: ImageField;
  ExistingCustomerHeading: TextField;
  ExistingCustomerDescription: RichTextField;
  ExistingCustomerLinks: QuickLink[];
  DownloadAppIcon: ImageField;
  DownloadAppLink: LinkField;
  DownloadAppLinkText: TextField;
  DownloadAppLinkIcon: ImageField;
  PhonenumberPrefix: TextField;
  PhonenumberPlaceholderText: TextField;
  PhonenumberSubmitIcon: ImageField;
};

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: Fields;
};

export const Default = (props: ComponentProps): JSX.Element => {
  const id = props.rendering.uid;

  return (
    <section key={id} className="bg-[#2a2a5a] py-16 relative overflow-hidden">
      {/* Top Section - Deals */}
      <div className="container mx-auto px-4 mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-4">
          <Text field={props.fields.NewCustomerHeading} />
        </h2>
        <div className="text-white/90 text-center mb-12 text-base md:text-lg max-w-4xl mx-auto">
          <RichText field={props.fields.NewCustomerDescription} />
        </div>

        {/* Desktop/Tablet: 3 columns */}
        <div className="hidden sm:grid sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {props.fields.NewCustomerLinks.map((link, index) => (
            <JssLink
              key={index}
              field={link.fields.Link}
              className="flex flex-col items-center text-center group cursor-pointer transition-transform hover:scale-105"
            >
              <div className="w-16 h-16 md:w-16 md:h-16 rounded-full bg-blue-500 flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                <div className="text-white">
                  <JssImage field={link.fields.Icon} />
                </div>
              </div>
              <h3 className="text-white font-semibold text-lg">
                <Text field={link.fields.LinkText} />
              </h3>
            </JssLink>
          ))}
        </div>

        {/* Mobile: Stacked vertically */}
        <div className="sm:hidden flex flex-col gap-6 max-w-xs mx-auto">
          {props.fields.NewCustomerLinks.map((link, index) => (
            <JssLink
              key={index}
              field={link.fields.Link}
              className="flex flex-col items-center text-center group cursor-pointer"
            >
              <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center mb-3 group-hover:bg-blue-600 transition-colors">
                <div className="text-white">
                  <JssImage field={link.fields.Icon} />
                </div>
              </div>
              <h3 className="text-white font-semibold text-base">
                <Text field={link.fields.LinkText} />
              </h3>
            </JssLink>
          ))}
        </div>
      </div>

      {/* Bottom Section - Already with Lyca */}
      <div className="container mx-auto px-4 relative">
        {/* Decorative elements */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-8 md:p-12 relative overflow-hidden">
          {/* Background image layer (inside the card, below content) */}
          <div className="absolute inset-y-0 right-0 w-1/2 md:w-1/3 z-0 pointer-events-none">
            <Image
              src={props.fields.ExistingCustomerBackgroundImage.value?.src as string}
              alt=""
              fill
              className="object-contain object-right opacity-80"
            />
          </div>

          {/* Foreground content */}
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2a2a5a] text-center mb-3">
              <Text field={props.fields.ExistingCustomerHeading} />
            </h2>

            <div className="text-gray-600 text-center mb-8 text-base md:text-lg">
              <RichText field={props.fields.ExistingCustomerDescription} />
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {props.fields.ExistingCustomerLinks.map((link, index) => (
                <JssLink
                  key={index}
                  field={link.fields.Link}
                  className="px-6 py-3 rounded-full text-[#2a2a5a] text-base font-medium border-2 bg-[#e8f4fe] hover:bg-[#0052cc] hover:text-white"
                >
                  <Text field={link.fields.LinkText} />
                </JssLink>
              ))}
            </div>

            {/* Phone input */}
            <div className="max-w-2xl mx-auto mb-6">
              <div className="flex gap-0 mx-auto justify-center">
                <Input
                  type="tel"
                  disabled
                  value={props.fields.PhonenumberPrefix.value as string}
                  className="py-3 border-gray-300 bg-gray-300 text-base text-gray-700 w-13"
                />
                <Input
                  type="tel"
                  placeholder={props.fields.PhonenumberPlaceholderText.value as string}
                  className="py-3 border-gray-300 text-base w-90"
                />
                <Button size="icon" className="bg-[#0066ff] hover:bg-[#0052cc] rounded-lg px-4">
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Download app link */}
            <div className="text-center">
              <JssLink
                field={props.fields.DownloadAppLink}
                className="inline-flex items-center gap-2 hover:underline text-[#0066ff] text-base font-medium"
              >
                <JssImage field={props.fields.DownloadAppIcon} />
                <Text field={props.fields.DownloadAppLinkText} />
                <ArrowRight className="w-4 h-4" />
              </JssLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
