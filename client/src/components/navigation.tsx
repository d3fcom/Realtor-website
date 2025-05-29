import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import LanguageSelector from "./language-selector";
import { useLanguage } from "@/lib/languageContext";

export default function Navigation() {
  const [location] = useLocation();
  const { t } = useLanguage();

  const links = [
    { href: "/", label: t("nav.home") },
    { href: "/properties", label: t("nav.properties") },
    { href: "/contact", label: t("nav.contact") }
  ];

  return (
    <nav className="border-b bg-white">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-primary">
            John Doe Real Estate
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {links.map(link => (
              <Link 
                key={link.href} 
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  location === link.href ? "text-primary" : "text-muted-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
            <LanguageSelector />
          </div>
        </div>
      </div>
    </nav>
  );
}