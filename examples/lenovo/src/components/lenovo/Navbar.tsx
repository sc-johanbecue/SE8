import Link from 'next/link';
import { Search, Bell, User } from 'lucide-react';
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

export async function Navbar() {
  const user = await getCurrentUser();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center gap-4 px-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="bg-[#E2231A] px-3 py-1 text-white font-bold text-lg">Lenovo</div>
          <span className="font-semibold text-sm hidden sm:inline">360 Partner Hub</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium ml-6">
          <Link href="/" className="hover:text-[#E2231A] transition-colors">
            Home
          </Link>
          <Link href="/products" className="hover:text-[#E2231A] transition-colors">
            Products & Services
          </Link>
          {user && (
            <>
              <Link href="/dashboard" className="hover:text-[#E2231A] transition-colors">
                Dashboard
              </Link>
              <Link href="/deals" className="hover:text-[#E2231A] transition-colors">
                Deal Registration
              </Link>
            </>
          )}
          <Link href="/solutions" className="hover:text-[#E2231A] transition-colors">
            Solutions
          </Link>
          <Link href="/training" className="hover:text-[#E2231A] transition-colors">
            Training
          </Link>
        </nav>

        <div className="flex-1 max-w-sm mx-4 hidden lg:block">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="What are you looking for?"
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
                      <span>{user.name}</span>
                      <span className="text-xs text-muted-foreground font-normal">
                        {user.company}
                      </span>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href="/profile">My Profile</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/settings">Settings</Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <form action={logout}>
                      <button type="submit" className="w-full text-left">
                        Sign Out
                      </button>
                    </form>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <Button asChild className="bg-[#E2231A] hover:bg-[#C11D15]">
              <Link href="/login">Sign In</Link>
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}
