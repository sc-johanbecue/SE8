import type { JSX } from 'react';
import {
  TextField,
  Text,
  ImageField,
  Image as JssImage,
  LinkField,
  Link as JssLink,
  ComponentParams,
  ComponentRendering,
  Placeholder,
} from '@sitecore-content-sdk/nextjs';
import Link from 'next/link';
import { useBasket } from '@/lib/basket-context';

type MainNavigationLink = {
  fields: {
    Link: LinkField;
  };
};

type Fields = {
  Logo: ImageField;
  MainNavigationLinks: MainNavigationLink[];
  LoginLink: LinkField;
  LoginIcon: ImageField;
  BasketLink: LinkField;
  BasketIcon: ImageField;
  QuickActionButtonLink: LinkField;
  QuickActionButtonText: TextField;
};

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: Fields;
};

export const Default = (props: ComponentProps): JSX.Element => {
  const id = props.rendering.uid;
  const phMainNavigationLinksContainer = `lycaMainNavigationLinksContainer-${props.params.DynamicPlaceholderId}`;

  const { items, openBasket } = useBasket();

  return (
    <header key={id} className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex-shrink-0">
              <JssImage field={props.fields.Logo} fill-cover className="w-25" />
            </Link>
            <Placeholder name={phMainNavigationLinksContainer} rendering={props.rendering} />
          </div>

          <div className="flex items-center gap-4">
            <JssLink
              field={props.fields.QuickActionButtonLink}
              className="hidden md:block px-4 py-2 bg-[#0066ff] text-white text-sm font-medium rounded hover:bg-[#0052cc] transition-colors"
            >
              <Text field={props.fields.QuickActionButtonText} />
            </JssLink>
            <JssLink
              field={props.fields.LoginLink}
              className=" hover:bg-gray-100 rounded-full transition-colors"
            >
              <JssImage field={props.fields.LoginIcon} className="w-5 h-5 text-gray-600" />
            </JssLink>
            <JssLink
              field={props.fields.BasketLink}
              onClick={openBasket}
              className="relative hover:bg-gray-100 rounded-full transition-colors"
            >
              <JssImage field={props.fields.BasketIcon} className="w-5 h-5 text-gray-600" />
              {items.length > 0 && (
                <span className="absolute -top-3 -right-2 w-5 h-5 bg-red-500 text-white text-xs flex items-center justify-center rounded-full font-medium">
                  {items.length}
                </span>
              )}
            </JssLink>
            <button className="lg:hidden p-2 hover:bg-gray-100 rounded transition-colors">
              <svg
                className="w-6 h-6 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
