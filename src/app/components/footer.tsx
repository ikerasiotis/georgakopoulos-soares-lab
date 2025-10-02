import Link from "next/link";

import type { NavigationLink } from "@/libs/api";
import { ButtonLink } from "@/libs/ui";

type FooterProps = {
  navigation: NavigationLink[];
  footerText?: string | null;
  contactCtaLabel?: string | null;
  contactCtaDescription?: string | null;
  contactCtaUrl?: string | null;
};

export default function Footer({
  navigation,
  footerText,
  contactCtaDescription,
  contactCtaLabel,
  contactCtaUrl,
}: FooterProps) {
  const hasCta = Boolean(contactCtaLabel && contactCtaUrl);
  const footerHeadingId = hasCta ? "footer-heading" : undefined;
  const visibleNavigation = navigation.filter((link) => link.isVisible !== false);

  return (
    <footer
      className="bg-gray-100 text-center"
      aria-labelledby={footerHeadingId}
      aria-label={hasCta ? undefined : "Footer"}
    >
      {hasCta ? (
        <div className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 id={footerHeadingId} className="text-3xl font-bold mb-6">
                {contactCtaLabel}
              </h2>
              {contactCtaDescription ? (
                <p className="text-xl mb-8">{contactCtaDescription}</p>
              ) : null}
              <ButtonLink href={contactCtaUrl!} variant="filled">
                {contactCtaLabel}
              </ButtonLink>
            </div>
          </div>
        </div>
      ) : null}

      <div className="container mx-auto px-4 py-10">
        {visibleNavigation.length > 0 ? (
          <nav aria-label="Footer navigation" className="mb-6">
            <ul className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
              {visibleNavigation.map((link) => {
                const isExternal = link.openInNewTab;
                const ariaLabel =
                  link.ariaLabel ?? (
                    isExternal ? `${link.label} (opens in a new tab)` : undefined
                  );

                return (
                  <li key={`${link.label}-${link.url}`}>
                    <Link
                      href={link.url}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noopener noreferrer" : undefined}
                      aria-label={ariaLabel}
                      className="hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        ) : null}

        {footerText ? (
          <p className="text-gray-500 text-sm">{footerText}</p>
        ) : null}
      </div>
    </footer>
  );
}
