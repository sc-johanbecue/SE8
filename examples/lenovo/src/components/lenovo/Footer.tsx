import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t bg-gray-50 mt-auto">
      <div className="container py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="bg-[#E2231A] px-3 py-1 text-white font-bold text-lg inline-block mb-4">
              Lenovo
            </div>
            <p className="text-sm text-muted-foreground">
              Partner Portal for accessing partner resources, tools, and solutions.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Products</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/products/laptops"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Laptops
                </Link>
              </li>
              <li>
                <Link
                  href="/products/desktops"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Desktops & AIOs
                </Link>
              </li>
              <li>
                <Link
                  href="/products/workstations"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Workstations
                </Link>
              </li>
              <li>
                <Link
                  href="/products/servers"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Servers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/support" className="text-muted-foreground hover:text-foreground">
                  Support
                </Link>
              </li>
              <li>
                <Link href="/training" className="text-muted-foreground hover:text-foreground">
                  Training
                </Link>
              </li>
              <li>
                <Link href="/documentation" className="text-muted-foreground hover:text-foreground">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-foreground">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-foreground">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-muted-foreground hover:text-foreground">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          © 2025 Lenovo. All rights reserved. Demo environment for XM Cloud.
        </div>
      </div>
    </footer>
  );
}
