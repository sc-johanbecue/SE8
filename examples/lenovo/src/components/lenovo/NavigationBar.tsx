'use client';
import type { JSX } from 'react';
import {
  type TextField,
  Text,
  type ImageField,
  Image as JssImage,
  type LinkField,
  Link as JssLink,
  type ComponentParams,
  type ComponentRendering,
  useSitecore,
  Placeholder,
} from '@sitecore-content-sdk/nextjs';
import { Search, Bell, User, Menu, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { useState, useEffect } from 'react';
import Link from 'next/link';

type Fields = {
  LogoText: TextField;
  Logo: ImageField;
  SubtitleText: TextField;
  SearchPlaceholder: TextField;
  HomeLink: LinkField;
  HomeText: TextField;
  ProductsLink: LinkField;
  ProductsText: TextField;
  DashboardLink: LinkField;
  DashboardText: TextField;
  DealsLink: LinkField;
  DealsText: TextField;
  SolutionsLink: LinkField;
  SolutionsText: TextField;
  TrainingLink: LinkField;
  TrainingText: TextField;
  SignInText: TextField;
  SignInLink: LinkField;
  ProfileText: TextField;
  SettingsText: TextField;
  SignOutText: TextField;
  UsernamePlaceholder: TextField;
  FirstnamePlaceholder: TextField;
  LastnamePlaceholder: TextField;
  CompanyPlaceholder: TextField;
};

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: Fields;
};
export const Default = (props: ComponentProps): JSX.Element => {
  const id = props.rendering?.uid || 'navbar';
  const fields = props.fields;
  const { page } = useSitecore();
  const isInSitecore = page.mode.isEditing;

  const [user, setUser] = useState<{ name: string; company: string } | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);

  const phMainNavigationLinksContainer = `lenovoMainNavigationLinksContainer-${props.params.DynamicPlaceholderId}`;
  const phMobileMainNavigationLinksContainer = `lenovoMobileMainNavigationLinksContainer-${props.params.DynamicPlaceholderId}`;

  const languages = [
    { locale: 'en', name: 'English' },
    { locale: 'nl-NL', name: 'Nederlands (Nederland)' },
    { locale: 'nl-NL', name: 'Nederlands (België)' },
    { locale: 'ja-JP', name: 'Japanese' },
    { locale: 'fr-FR', name: 'Français' },
    { locale: 'fr-BE', name: 'Français (Belgique)' },
  ];

  const currentLocale = page?.locale || 'en';
  const currentLanguage =
    languages.find((lang) => lang.locale === currentLocale)?.name || 'English';

  const availableLanguages = languages.filter((lang) => lang.locale !== currentLocale);

  useEffect(() => {
    console.log('[v0] Fetching user data...');
    fetch('/api/user')
      .then((res) => {
        console.log('[v0] User API response status:', res.status);
        return res.ok ? res.json() : null;
      })
      .then((data) => {
        console.log('[v0] User API data:', data);
        setUser(data?.user || null);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log('[v0] User API error:', error);
        setUser(null);
        setIsLoading(false);
      });
  }, []);

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
      window.location.href = '/login';
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <header key={id} className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center gap-4 px-4">
        <JssLink field={fields.HomeLink} className="flex items-center gap-2 shrink-0">
          <div className="px-2 sm:px-3 py-1 text-white font-bold text-lg w-24 sm:w-auto">
            <JssImage field={fields.Logo} />
          </div>
          <span className="font-semibold text-sm hidden sm:inline text-nowrap">
            <Text field={fields.SubtitleText} />
          </span>
        </JssLink>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium ml-6">
          <Placeholder name={phMainNavigationLinksContainer} rendering={props.rendering} />
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <div className="hidden lg:block relative">
            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder={fields.SearchPlaceholder.value as string}
              className="pl-8 w-[200px] lg:w-[300px]"
            />
          </div>
          
          <Button variant="ghost" size="icon" className="hidden md:flex lg:hidden">
            <Search className="h-5 w-5" />
          </Button>

          <div className="relative">
            <button
              onClick={() => setLanguageDropdownOpen(!languageDropdownOpen)}
              className="flex items-center gap-1 text-sm font-semibold text-[#000000] hover:text-[#E2231A]"
            >
              <ChevronDown className="w-4 h-4" />
              {currentLanguage}
            </button>

            {languageDropdownOpen && (
              <>
                <div
                  className="fixed inset-0 z-40"
                  onClick={() => setLanguageDropdownOpen(false)}
                />
                <div className="absolute top-full left-0 mt-2 w-50 bg-white border border-gray-200 shadow-lg z-50">
                  {availableLanguages.map((lang, index) => (
                    <Link
                      key={lang.locale}
                      locale={lang.locale}
                      href=""
                      className={`block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 ${
                        index < availableLanguages.length - 1 ? 'border-b border-gray-200' : ''
                      }`}
                      onClick={() => setLanguageDropdownOpen(false)}
                    >
                      {lang.name}
                    </Link>
                  ))}
                </div>
              </>
            )}
          </div>

          {isLoading ? (
            <div className="w-20 h-10" /> // Empty space placeholder
          ) : user ? (
            <>
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <User className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>
                    <div className="flex flex-col">
                      {isInSitecore ? (
                        <>
                          <span>
                            <Text field={fields.FirstnamePlaceholder} />{' '}
                            <Text field={fields.LastnamePlaceholder} />
                          </span>
                          <span className="text-xs text-muted-foreground font-normal">
                            <Text field={fields.CompanyPlaceholder} />
                          </span>
                        </>
                      ) : (
                        <>
                          <span>{user.name}</span>
                          <span className="text-xs text-muted-foreground font-normal">
                            {user.company}
                          </span>
                        </>
                      )}
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout}>
                    <Text field={fields.SignOutText} />
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <Button asChild className="bg-[#E2231A] hover:bg-[#C11D15]">
              <JssLink field={fields.SignInLink}>
                <Text field={fields.SignInText} />
              </JssLink>
            </Button>
          )}
        </div>

        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-72">
            <SheetHeader>
              <SheetTitle>
                <div className="flex items-center gap-2">
                  <div className="px-2 sm:px-3 py-1 text-white font-bold text-lg w-24 sm:w-auto">
                    <JssImage field={fields.Logo} />
                  </div>
                  <span className="font-semibold text-sm">
                    <Text field={fields.SubtitleText} />
                  </span>
                </div>
              </SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-4 mt-8 pl-4">
              <Placeholder
                name={phMobileMainNavigationLinksContainer}
                rendering={props.rendering}
              />
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Default;
