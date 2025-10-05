import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const isActive = (path: string) => location === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 relative">
        <div className="flex h-20 items-center justify-between">
          {/* Logo and Title */}
          <Link href="/" className="flex items-center gap-4">
            <div className="flex flex-col">
              <h1 className="text-xl md:text-2xl font-serif font-bold text-primary whitespace-nowrap">
                Bharata Energy Defence Program
              </h1>
              <p className="text-xs md:text-sm text-muted-foreground hidden sm:block whitespace-nowrap">
                Chola Mandala Mahaa Samsthaanam | Chief Convenor: Prince A Amithaab
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-1">
            <Link href="/">
              <Button
                variant={isActive("/") ? "default" : "ghost"}
                size="sm"
                data-testid="link-home"
              >
                Home
              </Button>
            </Link>
            <Link href="/executive">
              <Button
                variant={isActive("/executive") ? "default" : "ghost"}
                size="sm"
                data-testid="link-executive"
              >
                Executive Summary
              </Button>
            </Link>

            {/* Timeline Dropdown */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="h-9 px-3 text-sm">
                    Timeline
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-48 p-2">
                      <Link href="/past-timeline">
                        <Button
                          variant="ghost"
                          className="w-full justify-start"
                          size="sm"
                          data-testid="link-past-timeline"
                        >
                          Past Timeline
                        </Button>
                      </Link>
                      <Link href="/upcoming-timeline">
                        <Button
                          variant="ghost"
                          className="w-full justify-start"
                          size="sm"
                          data-testid="link-upcoming-timeline"
                        >
                          Upcoming Timeline
                        </Button>
                      </Link>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* About Dropdown */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="h-9 px-3 text-sm">
                    About
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-48 p-2">
                      <Link href="/convenor">
                        <Button
                          variant="ghost"
                          className="w-full justify-start"
                          size="sm"
                          data-testid="link-convenor"
                        >
                          About Convenor
                        </Button>
                      </Link>
                      <Link href="/cosmic">
                        <Button
                          variant="ghost"
                          className="w-full justify-start"
                          size="sm"
                          data-testid="link-cosmic"
                        >
                          Cosmic Explanations
                        </Button>
                      </Link>
                      <Link href="/message">
                        <Button
                          variant="ghost"
                          className="w-full justify-start"
                          size="sm"
                          data-testid="link-message"
                        >
                          Message
                        </Button>
                      </Link>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Link href="/appendix">
              <Button
                variant={isActive("/appendix") ? "default" : "ghost"}
                size="sm"
                data-testid="link-appendix"
              >
                Appendix
              </Button>
            </Link>
            <Link href="/downloads">
              <Button
                variant={isActive("/downloads") ? "default" : "ghost"}
                size="sm"
                data-testid="link-downloads"
              >
                Downloads
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant={isActive("/contact") ? "default" : "ghost"}
                size="sm"
                data-testid="link-contact"
              >
                Contact
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="xl:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="xl:hidden pb-4 space-y-2">
            <Link href="/">
              <Button
                variant="ghost"
                className="w-full justify-start"
                onClick={() => setMobileMenuOpen(false)}
                data-testid="link-home-mobile"
              >
                Home
              </Button>
            </Link>
            <Link href="/executive">
              <Button
                variant="ghost"
                className="w-full justify-start"
                onClick={() => setMobileMenuOpen(false)}
                data-testid="link-executive-mobile"
              >
                Executive Summary
              </Button>
            </Link>

            <div className="pl-4 space-y-1">
              <p className="text-xs uppercase tracking-wide text-muted-foreground py-2">
                Timeline
              </p>
              <Link href="/past-timeline">
                <Button
                  variant="ghost"
                  className="w-full justify-start"
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid="link-past-timeline-mobile"
                >
                  Past Timeline
                </Button>
              </Link>
              <Link href="/upcoming-timeline">
                <Button
                  variant="ghost"
                  className="w-full justify-start"
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid="link-upcoming-timeline-mobile"
                >
                  Upcoming Timeline
                </Button>
              </Link>
            </div>

            <div className="pl-4 space-y-1">
              <p className="text-xs uppercase tracking-wide text-muted-foreground py-2">
                About
              </p>
              <Link href="/convenor">
                <Button
                  variant="ghost"
                  className="w-full justify-start"
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid="link-convenor-mobile"
                >
                  About Convenor
                </Button>
              </Link>
              <Link href="/cosmic">
                <Button
                  variant="ghost"
                  className="w-full justify-start"
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid="link-cosmic-mobile"
                >
                  Cosmic Explanations
                </Button>
              </Link>
              <Link href="/message">
                <Button
                  variant="ghost"
                  className="w-full justify-start"
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid="link-message-mobile"
                >
                  Message
                </Button>
              </Link>
            </div>

            <Link href="/appendix">
              <Button
                variant="ghost"
                className="w-full justify-start"
                onClick={() => setMobileMenuOpen(false)}
                data-testid="link-appendix-mobile"
              >
                Appendix
              </Button>
            </Link>
            <Link href="/downloads">
              <Button
                variant="ghost"
                className="w-full justify-start"
                onClick={() => setMobileMenuOpen(false)}
                data-testid="link-downloads-mobile"
              >
                Downloads
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="ghost"
                className="w-full justify-start"
                onClick={() => setMobileMenuOpen(false)}
                data-testid="link-contact-mobile"
              >
                Contact
              </Button>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
