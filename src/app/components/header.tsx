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
  const visibleSubLinks = Array.isArray(link.subLinks)
    ? link.subLinks.filter(
        (subLink) =>
          subLink.isVisible !== false &&
          Boolean(subLink.label) &&
          Boolean(subLink.url)
      )
    : [];
  const visibleSections = Array.isArray(link.sections)
    ? link.sections.filter((section) => {
        const hasTitle = Boolean(section.title);
        const hasLinks =
          Array.isArray(section.links) && section.links.length > 0;
        const hasCta = Boolean(section.ctaLabel && section.ctaUrl);
        return hasTitle && (hasLinks || hasCta);
      })
    : [];
  const hasSubLinks = visibleSubLinks.length > 0;
  const hasSections = visibleSections.length > 0;
  const hasDropdown = hasSubLinks || hasSections;

  const linkElement = (
    <Link
      href={link.url}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      aria-label={ariaLabel}
      aria-haspopup={hasDropdown ? "menu" : undefined}
      className="nav-link inline-flex items-center gap-2 px-2 py-1 text-dark transition-colors hover:text-primary"
    >
      {link.label}
      {hasDropdown ? (
        <span aria-hidden className="text-xs">
          ▾
        </span>
      ) : null}
    </Link>
  );

  if (!hasDropdown) {
    return linkElement;
  }

  if (hasSections) {
    return (
      <>
        {linkElement}
        <div className="absolute -right-0  top-full z-20 mt-3 hidden min-w-[16rem] w-[42rem] rounded-lg bg-white shadow-xl transition-all duration-300 opacity-0 translate-y-2 -translate-x-1/2 group-hover:translate-y-0 group-hover:opacity-100 group-hover:block">
          <div className="grid grid-cols-2 w-full divide-x divide-gray-200 px-6 py-4 gap-8">
            {visibleSections.map((section, index) => {
              const sectionLinks = section.links
                .filter((sectionLink) => sectionLink.isVisible !== false)
                .slice(0, 3);
              const hasSectionCta = Boolean(section.ctaLabel && section.ctaUrl);

              return (
                <div
                  key={section.title}
                  className="flex flex-col justify-start space-y-3 w-full"
                >
                  <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wid mb-2">
                    {section.title}
                  </h3>
                  {sectionLinks.length > 0 ? (
                    <ul className="flex-1 flex flex-col divide-y divide-gray-100 mb-3 space-y-1">
                      {sectionLinks.map((sectionLink) => {
                        const subIsExternal = sectionLink.openInNewTab;
                        const subAriaLabel =
                          sectionLink.ariaLabel ??
                          (subIsExternal
                            ? `${sectionLink.label} (opens in a new tab)`
                            : undefined);
                        return (
                          <li
                            key={`${section.title}-${sectionLink.label}-${sectionLink.url}`}
                            className="list-none text-gray-700 hover:text-primary "
                          >
                            <Link
                              href={sectionLink.url}
                              target={subIsExternal ? "_blank" : undefined}
                              rel={
                                subIsExternal
                                  ? "noopener noreferrer"
                                  : undefined
                              }
                              aria-label={subAriaLabel}
                              className="block font-semi bold text-md transition-transform duration-200   hover:translate-x-1"
                            >
                              {sectionLink.label}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  ) : null}

                  {hasSectionCta ? (
                    <div className="pt-2">
                      <Link
                        href={section.ctaUrl!}
                        target={section.ctaOpenInNewTab ? "_blank" : undefined}
                        rel={
                          section.ctaOpenInNewTab
                            ? "noopener noreferrer"
                            : undefined
                        }
                        aria-label={
                          section.ctaAriaLabel ??
                          (section.ctaOpenInNewTab
                            ? `${section.ctaLabel} (opens in a new tab)`
                            : undefined)
                        }
                        className="block text-sm font-medium text-primary hover:text-secondary"
                      >
                        {section.ctaLabel}
                        <span aria-hidden>→</span>
                      </Link>
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      {linkElement}
      <div className="invisible absolute left-0 top-full z-20 mt-2 hidden min-w-[12rem] flex-col rounded-md bg-white py-2 text-sm shadow-lg transition-all duration-300 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 group-hover:flex group-hover:visible group-focus-within:flex group-focus-within:visible">
        <ul className="flex flex-col gap-x-2">
          {visibleSubLinks.map((subLink) => {
            const subIsExternal = subLink.openInNewTab;
            const subAriaLabel =
              subLink.ariaLabel ??
              (subIsExternal
                ? `${subLink.label} (opens in a new tab)`
                : undefined);
            return (
              <li key={`${subLink.label}-${subLink.url}`} className="list-none">
                <Link
                  href={subLink.url}
                  target={subIsExternal ? "_blank" : undefined}
                  rel={subIsExternal ? "noopener noreferrer" : undefined}
                  aria-label={subAriaLabel}
                  className="block px-4 py-2 text-gray-700 transition-colors hover:bg-gray-50 hover:text-primary"
                >
                  {subLink.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
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
        <div className="bg-gray-50 text-sm text-gray-600 hidden md:block">
          <div className="container mx-auto px-4 transform transition-transform duration-500 ease-in-out translate-y-0 group-hover:-translate-y-full">
            <nav
              aria-label="Utility navigation"
              className="w-auto inline-flex transition-all duration-300"
            >
              <ul className="flex justify-end gap-4 py-2">
                {utilityLinks.map((link) => (
                  <li
                    key={`${link.label}-${link.url}`}
                    className="relative list-none group"
                  >
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
                  <li
                    key={`${link.label}-${link.url}`}
                    className="relative list-none group"
                  >
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
