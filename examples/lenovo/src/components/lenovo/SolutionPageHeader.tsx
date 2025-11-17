import type { JSX } from 'react';
import {
  type TextField,
  Text,
  type ImageField,
  Image as JssImage,
  type LinkField,
  Link as JssLink,
  RichText,
  RichTextField,
  type ComponentParams,
  type ComponentRendering,
} from '@sitecore-content-sdk/nextjs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

type Fields = {
  BackgroundImage: ImageField;
  SolutionTitle: TextField;
  Subtitle: TextField;
  LongDescription: RichTextField;
  Badge1: TextField;
  Badge2: TextField;
  Badge3: TextField;
  BackLink: LinkField;
  BackLinkText: TextField;
  CTALink: LinkField;
  CTAText: TextField;
};

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: Fields;
};

export const Default = (props: ComponentProps): JSX.Element => {
  const id = props.rendering.uid;
  const fields = props.fields;

  const backLinkTextColor = 'text-white';
  const backLinkHoverColor = 'hover:text-white/80';
  const backLinkBackgroundColor = 'bg-black/40';
  const overlayColor = 'bg-black/60';

  return (
    <div key={id} className="relative overflow-hidden">
      <div className="absolute inset-0">
        <JssImage field={fields.BackgroundImage} className="w-full h-full object-cover" />
      </div>

      <div className="container mx-auto px-4 py-16 max-w-7xl relative z-10">
        <Button
          variant="ghost"
          className={`${backLinkTextColor} ${backLinkHoverColor} ${backLinkBackgroundColor} mb-6 p-8`}
          asChild
        >
          <JssLink field={fields.BackLink}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            <Text field={fields.BackLinkText} />
          </JssLink>
        </Button>

        <div className={`max-w-3xl ${overlayColor} backdrop-blur-sm p-8 rounded-lg`}>
          <h1 className="text-5xl font-bold mb-4 text-white">
            <Text field={fields.SolutionTitle} />
          </h1>
          <p className="text-2xl mb-6 text-white/90">
            <Text field={fields.Subtitle} />
          </p>
          <p className="text-lg mb-8 text-white/80 leading-relaxed">
            <RichText field={fields.LongDescription} />
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            <Badge className="bg-white/20 text-white hover:bg-white/30 text-sm py-1 px-3">
              <Text field={fields.Badge1} />
            </Badge>
            <Badge className="bg-white/20 text-white hover:bg-white/30 text-sm py-1 px-3">
              <Text field={fields.Badge2} />
            </Badge>
            <Badge className="bg-white/20 text-white hover:bg-white/30 text-sm py-1 px-3">
              <Text field={fields.Badge3} />
            </Badge>
          </div>

          <Button size="lg" className="bg-white text-[#E2231A] hover:bg-white/90" asChild>
            <JssLink field={fields.CTALink}>
              <Text field={fields.CTAText} />
            </JssLink>
          </Button>
        </div>
      </div>
    </div>
  );
};

export const Red = (props: ComponentProps): JSX.Element => {
  const id = props.rendering.uid;
  const fields = props.fields;

  const backLinkTextColor = 'text-white';
  const backLinkHoverColor = 'hover:text-white/80 hover:bg-black';
  const backLinkBackgroundColor = 'bg-[#E2231A]/90';
  const overlayColor = 'bg-[#E2231A]/90';

  return (
    <div key={id} className="relative overflow-hidden">
      <div className="absolute inset-0">
        <JssImage field={fields.BackgroundImage} className="w-full h-full object-cover" />
      </div>

      <div className="container mx-auto px-4 py-16 max-w-7xl relative z-10">
        <Button
          variant="ghost"
          className={`${backLinkTextColor} ${backLinkHoverColor} ${backLinkBackgroundColor} mb-6 p-8`}
          asChild
        >
          <JssLink field={fields.BackLink}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            <Text field={fields.BackLinkText} />
          </JssLink>
        </Button>

        <div className={`max-w-3xl ${overlayColor} backdrop-blur-sm p-8 rounded-lg`}>
          <h1 className="text-5xl font-bold mb-4 text-white">
            <Text field={fields.SolutionTitle} />
          </h1>
          <p className="text-2xl mb-6 text-white/90">
            <Text field={fields.Subtitle} />
          </p>
          <p className="text-lg mb-8 text-white/80 leading-relaxed">
            <RichText field={fields.LongDescription} />
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            <Badge className="bg-white/20 text-white hover:bg-white/30 text-sm py-1 px-3">
              <Text field={fields.Badge1} />
            </Badge>
            <Badge className="bg-white/20 text-white hover:bg-white/30 text-sm py-1 px-3">
              <Text field={fields.Badge2} />
            </Badge>
            <Badge className="bg-white/20 text-white hover:bg-white/30 text-sm py-1 px-3">
              <Text field={fields.Badge3} />
            </Badge>
          </div>

          <Button
            size="lg"
            className="bg-white text-[#E2231A] hover:bg-black/90 hover:text-white"
            asChild
          >
            <JssLink field={fields.CTALink}>
              <Text field={fields.CTAText} />
            </JssLink>
          </Button>
        </div>
      </div>
    </div>
  );
};

export const White = (props: ComponentProps): JSX.Element => {
  const id = props.rendering.uid;
  const fields = props.fields;

  const backLinkTextColor = 'text-black';
  const backLinkHoverColor = 'hover:text-black/80';
  const backLinkBackgroundColor = 'bg-white/40';
  const overlayColor = 'bg-white/60';

  return (
    <div key={id} className="relative overflow-hidden">
      <div className="absolute inset-0">
        <JssImage field={fields.BackgroundImage} className="w-full h-full object-cover" />
      </div>

      <div className="container mx-auto px-4 py-16 max-w-7xl relative z-10">
        <Button
          variant="ghost"
          className={`${backLinkTextColor} ${backLinkHoverColor} ${backLinkBackgroundColor} mb-6 p-8`}
          asChild
        >
          <JssLink field={fields.BackLink}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            <Text field={fields.BackLinkText} />
          </JssLink>
        </Button>

        <div className={`max-w-3xl ${overlayColor} backdrop-blur-sm p-8 rounded-lg`}>
          <h1 className="text-5xl font-bold mb-4 text-black">
            <Text field={fields.SolutionTitle} />
          </h1>
          <p className="text-2xl mb-6 text-black/90">
            <Text field={fields.Subtitle} />
          </p>
          <p className="text-lg mb-8 text-black/80 leading-relaxed">
            <Text field={fields.LongDescription} />
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            <Badge className="bg-[#E2231A]/80 text-white hover:bg-white/30 hover:text-[#E2231A] text-sm py-1 px-3">
              <Text field={fields.Badge1} />
            </Badge>
            <Badge className="bg-[#E2231A]/80 text-white hover:bg-white/30 hover:text-[#E2231A] text-sm py-1 px-3">
              <Text field={fields.Badge2} />
            </Badge>
            <Badge className="bg-[#E2231A]/80 text-white hover:bg-white/30 hover:text-[#E2231A] text-sm py-1 px-3">
              <Text field={fields.Badge3} />
            </Badge>
          </div>

          <Button
            size="lg"
            className="bg-white text-[#E2231A] hover:bg-[#E2231A]/90 hover:text-white"
            asChild
          >
            <JssLink field={fields.CTALink}>
              <Text field={fields.CTAText} />
            </JssLink>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Default;
