'use client';
import type { JSX } from 'react';
import {
  type TextField,
  Text,
  type LinkField,
  type ComponentParams,
  type ComponentRendering,
  useSitecore,
} from '@sitecore-content-sdk/nextjs';
import { Search, Bell, User, Menu } from 'lucide-react';
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
import { logout } from '@/lib/auth';
import NextLink from 'next/link';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { useState, useEffect } from 'react';

type Fields = {
  LogoText: TextField;
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

const defaultFields: Fields = {
  LogoText: { value: 'Lenovo' },
  SubtitleText: { value: '360 Partner Hub' },
  SearchPlaceholder: { value: 'What are you looking for?' },
  HomeLink: { value: { href: '/', text: 'Home' } },
  HomeText: { value: 'Home' },
  ProductsLink: { value: { href: '/products', text: 'Products & Services' } },
  ProductsText: { value: 'Products & Services' },
  DashboardLink: { value: { href: '/dashboard', text: 'Dashboard' } },
  DashboardText: { value: 'Dashboard' },
  DealsLink: { value: { href: '/deals', text: 'Deal Registration' } },
  DealsText: { value: 'Deal Registration' },
  SolutionsLink: { value: { href: '/solutions', text: 'Solutions' } },
  SolutionsText: { value: 'Solutions' },
  TrainingLink: { value: { href: '/training', text: 'Training' } },
  TrainingText: { value: 'Training' },
  SignInText: { value: 'Sign In' },
  SignInLink: { value: { href: '/login', text: 'Sign In' } },
  ProfileText: { value: 'My Profile' },
  SettingsText: { value: 'Settings' },
  SignOutText: { value: 'Sign Out' },
  UsernamePlaceholder: { value: '#username#' },
  FirstnamePlaceholder: { value: '#firstname#' },
  LastnamePlaceholder: { value: '#lastname#' },
  CompanyPlaceholder: { value: '#company#' },
};

export const Default = (props: ComponentProps): JSX.Element => {
  const id = props.rendering?.uid;
  const fields = defaultFields; //props?.fields ||
  const { page } = useSitecore();

  const [user, setUser] = useState<{ name: string; company: string } | null>(null);

  useEffect(() => {
    // Fetch user data on client side
    fetch('/api/user')
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => setUser(data))
      .catch(() => setUser(null));
  }, []);

  return (
    <header key={id} className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center gap-4 px-4">
        <NextLink href={fields.HomeLink.value?.href || '/'} className="flex items-center gap-2">
          <div className="bg-[#E2231A] px-3 py-1 text-white font-bold text-lg">
            {page.mode.isEditing ? <Text field={fields.LogoText} /> : fields.LogoText.value}
          </div>
          <span className="font-semibold text-sm hidden sm:inline">
            {page.mode.isEditing ? <Text field={fields.SubtitleText} /> : fields.SubtitleText.value}
          </span>
        </NextLink>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium ml-6">
          <NextLink
            href={fields.HomeLink.value?.href || '/'}
            className="hover:text-[#E2231A] transition-colors"
          >
            {page.mode.isEditing ? <Text field={fields.HomeText} /> : fields.HomeText.value}
          </NextLink>
          <NextLink
            href={fields.ProductsLink.value?.href || '/products'}
            className="hover:text-[#E2231A] transition-colors"
          >
            {page.mode.isEditing ? <Text field={fields.ProductsText} /> : fields.ProductsText.value}
          </NextLink>
          <NextLink
            href={fields.DashboardLink.value?.href || '/dashboard'}
            className="hover:text-[#E2231A] transition-colors"
          >
            {page.mode.isEditing ? <Text field={fields.DashboardText} /> : fields.DashboardText.value}
          </NextLink>
          <NextLink
            href={fields.DealsLink.value?.href || '/deals'}
            className="hover:text-[#E2231A] transition-colors"
          >
            {page.mode.isEditing ? <Text field={fields.DealsText} /> : fields.DealsText.value}
          </NextLink>
          <NextLink
            href={fields.SolutionsLink.value?.href || '/solutions'}
            className="hover:text-[#E2231A] transition-colors"
          >
            {page.mode.isEditing ? <Text field={fields.SolutionsText} /> : fields.SolutionsText.value}
          </NextLink>
          <NextLink
            href={fields.TrainingLink.value?.href || '/training'}
            className="hover:text-[#E2231A] transition-colors"
          >
            {page.mode.isEditing ? <Text field={fields.TrainingText} /> : fields.TrainingText.value}
          </NextLink>
        </nav>

        <div className="flex-1 max-w-sm mx-4 hidden lg:block">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder={fields.SearchPlaceholder.value as string}
              className="pl-9 bg-gray-50"
            />
          </div>
        </div>

        <div className="flex items-center gap-2 ml-auto">
          {user ? (
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
                      {page.mode.isEditing ? (
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
                  <DropdownMenuItem asChild>
                    <NextLink href="/profile">
                      {page.mode.isEditing ? (
                        <Text field={fields.ProfileText} />
                      ) : (
                        fields.ProfileText.value
                      )}
                    </NextLink>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <NextLink href="/settings">
                      {page.mode.isEditing ? (
                        <Text field={fields.SettingsText} />
                      ) : (
                        fields.SettingsText.value
                      )}
                    </NextLink>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <form action={logout}>
                      <button type="submit" className="w-full text-left">
                        {page.mode.isEditing ? (
                          <Text field={fields.SignOutText} />
                        ) : (
                          fields.SignOutText.value
                        )}
                      </button>
                    </form>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <Button asChild className="bg-[#E2231A] hover:bg-[#C11D15]">
              <NextLink href={fields.SignInLink.value?.href || '/login'}>
                {page.mode.isEditing ? <Text field={fields.SignInText} /> : fields.SignInText.value}
              </NextLink>
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
                  <div className="bg-[#E2231A] px-3 py-1 text-white font-bold text-lg">
                    {page.mode.isEditing ? <Text field={fields.LogoText} /> : fields.LogoText.value}
                  </div>
                  <span className="font-semibold text-sm">
                    {page.mode.isEditing ? (
                      <Text field={fields.SubtitleText} />
                    ) : (
                      fields.SubtitleText.value
                    )}
                  </span>
                </div>
              </SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-4 mt-8 pl-4">
              <NextLink
                href={fields.HomeLink.value?.href || '/'}
                className="text-lg hover:text-[#E2231A] transition-colors py-2"
              >
                {page.mode.isEditing ? <Text field={fields.HomeText} /> : fields.HomeText.value}
              </NextLink>
              <NextLink
                href={fields.ProductsLink.value?.href || '/products'}
                className="text-lg hover:text-[#E2231A] transition-colors py-2"
              >
                {page.mode.isEditing ? <Text field={fields.ProductsText} /> : fields.ProductsText.value}
              </NextLink>
              <NextLink
                href={fields.DashboardLink.value?.href || '/dashboard'}
                className="text-lg hover:text-[#E2231A] transition-colors py-2"
              >
                {page.mode.isEditing ? <Text field={fields.DashboardText} /> : fields.DashboardText.value}
              </NextLink>
              <NextLink
                href={fields.DealsLink.value?.href || '/deals'}
                className="text-lg hover:text-[#E2231A] transition-colors py-2"
              >
                {page.mode.isEditing ? <Text field={fields.DealsText} /> : fields.DealsText.value}
              </NextLink>
              <NextLink
                href={fields.SolutionsLink.value?.href || '/solutions'}
                className="text-lg hover:text-[#E2231A] transition-colors py-2"
              >
                {page.mode.isEditing ? <Text field={fields.SolutionsText} /> : fields.SolutionsText.value}
              </NextLink>
              <NextLink
                href={fields.TrainingLink.value?.href || '/training'}
                className="text-lg hover:text-[#E2231A] transition-colors py-2"
              >
                {page.mode.isEditing ? <Text field={fields.TrainingText} /> : fields.TrainingText.value}
              </NextLink>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Default;
