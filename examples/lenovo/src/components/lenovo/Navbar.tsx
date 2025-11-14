import type { JSX } from 'react';
import {
  type TextField,
  Text,
  type LinkField,
  type ComponentParams,
  type ComponentRendering,
  useSitecore,
  Page,
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
import { getCurrentUser, logout } from '@/lib/auth';
import NextLink from 'next/link';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

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
};

export const Default = (props: ComponentProps): JSX.Element => {
  const id = props.rendering?.uid || 'navbar';
  const fields = defaultFields; //props.fields ||
  const { page } = useSitecore();

  // Since we can't use async in this component, we'll need to handle user state differently
  // For now, we'll render a client component wrapper or use a simpler approach

  return (
    <header key={id} className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center gap-4 px-4">
        <NextLink href={fields.HomeLink.value?.href || '/'} className="flex items-center gap-2">
          <div className="bg-[#E2231A] px-3 py-1 text-white font-bold text-lg">
            <Text field={fields.LogoText} />
          </div>
          <span className="font-semibold text-sm hidden sm:inline">
            <Text field={fields.SubtitleText} />
          </span>
        </NextLink>

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
                    <Text field={fields.LogoText} />
                  </div>
                  <span className="font-semibold text-sm">
                    <Text field={fields.SubtitleText} />
                  </span>
                </div>
              </SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-4 mt-8 pl-4">
              <NextLink
                href={fields.HomeLink.value?.href || '/'}
                className="text-lg hover:text-[#E2231A] transition-colors py-2"
              >
                <Text field={fields.HomeText} />
              </NextLink>
              <NextLink
                href={fields.ProductsLink.value?.href || '/products'}
                className="text-lg hover:text-[#E2231A] transition-colors py-2"
              >
                <Text field={fields.ProductsText} />
              </NextLink>
              <NextLink
                href={fields.DashboardLink.value?.href || '/dashboard'}
                className="text-lg hover:text-[#E2231A] transition-colors py-2"
              >
                <Text field={fields.DashboardText} />
              </NextLink>
              <NextLink
                href={fields.DealsLink.value?.href || '/deals'}
                className="text-lg hover:text-[#E2231A] transition-colors py-2"
              >
                <Text field={fields.DealsText} />
              </NextLink>
              <NextLink
                href={fields.SolutionsLink.value?.href || '/solutions'}
                className="text-lg hover:text-[#E2231A] transition-colors py-2"
              >
                <Text field={fields.SolutionsText} />
              </NextLink>
              <NextLink
                href={fields.TrainingLink.value?.href || '/training'}
                className="text-lg hover:text-[#E2231A] transition-colors py-2"
              >
                <Text field={fields.TrainingText} />
              </NextLink>
            </nav>
          </SheetContent>
        </Sheet>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium ml-6">
          <NextLink
            href={fields.HomeLink.value?.href || '/'}
            className="hover:text-[#E2231A] transition-colors"
          >
            <Text field={fields.HomeText} />
          </NextLink>
          <NextLink
            href={fields.ProductsLink.value?.href || '/products'}
            className="hover:text-[#E2231A] transition-colors"
          >
            <Text field={fields.ProductsText} />
          </NextLink>
          <NextLink
            href={fields.DashboardLink.value?.href || '/dashboard'}
            className="hover:text-[#E2231A] transition-colors"
          >
            <Text field={fields.DashboardText} />
          </NextLink>
          <NextLink
            href={fields.DealsLink.value?.href || '/deals'}
            className="hover:text-[#E2231A] transition-colors"
          >
            <Text field={fields.DealsText} />
          </NextLink>
          <NextLink
            href={fields.SolutionsLink.value?.href || '/solutions'}
            className="hover:text-[#E2231A] transition-colors"
          >
            <Text field={fields.SolutionsText} />
          </NextLink>
          <NextLink
            href={fields.TrainingLink.value?.href || '/training'}
            className="hover:text-[#E2231A] transition-colors"
          >
            <Text field={fields.TrainingText} />
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
          <NavbarUserSection fields={fields} page={page} />
        </div>
      </div>
    </header>
  );
};

// Client component for user-dependent rendering
async function NavbarUserSection({ fields, page }: { fields: Fields; page: Page }) {
  let user;
  if (page.mode.isEditing) {
    user = {
      username: '#username#',
      password: '#password#',
      name: '#Firstname# #Lastname#',
      company: '#Company#',
    };
  } else {
    user = await getCurrentUser();
  }

  if (user) {
    return (
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
                <span>{user.name}</span>
                <span className="text-xs text-muted-foreground font-normal">{user.company}</span>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <NextLink href="/profile">
                <Text field={fields.ProfileText} />
              </NextLink>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <NextLink href="/settings">
                <Text field={fields.SettingsText} />
              </NextLink>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <form action={logout}>
                <button type="submit" className="w-full text-left">
                  <Text field={fields.SignOutText} />
                </button>
              </form>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </>
    );
  }

  return (
    <Button asChild className="bg-[#E2231A] hover:bg-[#C11D15]">
      <NextLink href={fields.SignInLink.value?.href || '/login'}>
        <Text field={fields.SignInText} />
      </NextLink>
    </Button>
  );
}
