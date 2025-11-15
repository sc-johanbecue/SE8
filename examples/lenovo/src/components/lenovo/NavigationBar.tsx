'use client';
import type { JSX } from 'react';
import {
  type TextField,
  Text,
  type LinkField,
  Link as JssLink,
  type ComponentParams,
  type ComponentRendering,
  useSitecore,
  Placeholder,
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
export const Default = (props: ComponentProps): JSX.Element => {
  const id = props.rendering?.uid || 'navbar';
  const fields = props.fields;
  const { page } = useSitecore();
  const isInSitecore = page.mode.isEditing;

  const [user, setUser] = useState<{ name: string; company: string } | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const phMainNavigationLinksContainer = `lenovoMainNavigationLinksContainer-${props.params.DynamicPlaceholderId}`;

  useEffect(() => {
    console.log('[v0] Fetching user data...');
    // Fetch user data on client side
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
        <JssLink field={fields.HomeLink} className="flex items-center gap-2">
          <div className="bg-[#E2231A] px-3 py-1 text-white font-bold text-lg">
            <Text field={fields.LogoText} />
          </div>
          <span className="font-semibold text-sm hidden sm:inline">
            <Text field={fields.SubtitleText} />
          </span>
        </JssLink>

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
              <Placeholder name={phMainNavigationLinksContainer} rendering={props.rendering} />
              {/* <JssLink
                field={fields.HomeLink}
                className="text-lg hover:text-[#E2231A] transition-colors py-2"
              >
                <Text field={fields.HomeText} />
              </JssLink>
              <JssLink
                field={fields.ProductsLink}
                className="text-lg hover:text-[#E2231A] transition-colors py-2"
              >
                <Text field={fields.ProductsText} />
              </JssLink>
              <JssLink
                field={fields.DashboardLink}
                className="text-lg hover:text-[#E2231A] transition-colors py-2"
              >
                <Text field={fields.DashboardText} />
              </JssLink>
              <JssLink
                field={fields.DealsLink}
                className="text-lg hover:text-[#E2231A] transition-colors py-2"
              >
                <Text field={fields.DealsText} />
              </JssLink>
              <JssLink
                field={fields.SolutionsLink}
                className="text-lg hover:text-[#E2231A] transition-colors py-2"
              >
                <Text field={fields.SolutionsText} />
              </JssLink>
              <JssLink
                field={fields.TrainingLink}
                className="text-lg hover:text-[#E2231A] transition-colors py-2"
              >
                <Text field={fields.TrainingText} />
              </JssLink> */}
            </nav>
          </SheetContent>
        </Sheet>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium ml-6">
          <Placeholder name={phMainNavigationLinksContainer} rendering={props.rendering} />
{/* 
          <JssLink field={fields.HomeLink} className="hover:text-[#E2231A] transition-colors">
            <Text field={fields.HomeText} />
          </JssLink>
          <JssLink field={fields.ProductsLink} className="hover:text-[#E2231A] transition-colors">
            <Text field={fields.ProductsText} />
          </JssLink>
          <JssLink field={fields.DashboardLink} className="hover:text-[#E2231A] transition-colors">
            <Text field={fields.DashboardText} />
          </JssLink>
          <JssLink field={fields.DealsLink} className="hover:text-[#E2231A] transition-colors">
            <Text field={fields.DealsText} />
          </JssLink>
          <JssLink field={fields.SolutionsLink} className="hover:text-[#E2231A] transition-colors">
            <Text field={fields.SolutionsText} />
          </JssLink>
          <JssLink field={fields.TrainingLink} className="hover:text-[#E2231A] transition-colors">
            <Text field={fields.TrainingText} />
          </JssLink> */}
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
      </div>
    </header>
  );
};

export default Default;
