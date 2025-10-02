import Image from "next/image";
import Link from "next/link";

import type { MediaAsset, NavigationLink } from "@/libs/api";

type HeaderProps = {
  title?: string;
  primaryNavigation: NavigationLink[];
  utilityNavigation?: NavigationLink[];
  logo?: MediaAsset | null;
};

function NavLink({ link }: { link: NavigationLink }) {
  const isExternal = link.openInNewTab;
  const ariaLabel =
    link.ariaLabel ??
    (isExternal ? `${link.label} (opens in a new tab)` : undefined);
  return (
    <Link
      href={link.url}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      aria-label={ariaLabel}
      className="nav-link px-2 py-1 text-dark hover:text-primary transition-colors"
    >
      {link.label}
    </Link>
  );
}

export default function Header({
  title = "Georgakopoulos-Soares Lab",
  primaryNavigation,
  utilityNavigation = [],
  logo,
}: HeaderProps) {
  const primaryLinks = primaryNavigation.filter(
    (link) => link.isVisible !== false
  );
  const utilityLinks = utilityNavigation.filter(
    (link) => link.isVisible !== false
  );
  const hasUtilityLinks = utilityLinks.length > 0;
  return (
    <header className="sticky  top-0 z-50 bg-white shadow-md" role="banner">
      {hasUtilityLinks ? (
        <div className="border-b border-gray-100 bg-gray-50 text-sm text-gray-600 hidden md:block">
          <div className="container mx-auto px-4">
            <nav aria-label="Utility navigation">
              <ul className="flex justify-end gap-4 py-2">
                {utilityLinks.map((link) => (
                  <li key={`${link.label}-${link.url}`} className="list-none">
                    <NavLink link={link} />
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      ) : null}
      <div className="container my-4 md:my-0 mx-auto px-4 py-3 md:py-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex w-full items-center">
            <Link
              href="/"
              className="flex items-center space-x-3 text-primary font-bold text-xl md:text-2xl"
              aria-label={`${title} home`}
            >
              {logo?.url ? (
                <Image
                  src={logo.url}
                  width={logo.width ?? 64}
                  height={logo.height ?? 64}
                  alt={logo.alternativeText || `${title} logo`}
                  className="h-10 w-10 object-contain"
                />
              ) : null}
              <span>{title}</span>
            </Link>
          </div>
          {primaryLinks.length > 0 ? (
            <nav aria-label="Primary navigation" className="w-full md:w-auto">
              <ul className="flex flex-1 flex-wrap justify-center gap-2 md:gap-6">
                {primaryLinks.map((link) => (
                  <li key={`${link.label}-${link.url}`} className="list-none">
                    <NavLink link={link} />
                  </li>
                ))}
              </ul>
            </nav>
          ) : null}
        </div>
      </div>
    </header>
  );
}
