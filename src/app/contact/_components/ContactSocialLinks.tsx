import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import type { SocialLink } from "../_lib/contact-view-model";

type ContactSocialLinksProps = {
  links: SocialLink[];
};

export function ContactSocialLinks({ links }: ContactSocialLinksProps) {
  if (links.length === 0) {
    return null;
  }

  const headingId = "contact-social-links";

  return (
    <section
      aria-labelledby={headingId}
      className="bg-white rounded-lg shadow-lg p-8"
    >
      <h2 id={headingId} className="text-2xl font-bold text-primary mb-8 text-center">
        Connect With Us
      </h2>

      <div className="flex flex-wrap justify-center gap-6">
        {links.map(({ href, label, icon, className }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={className}
            aria-label={`Visit our ${label} profile (opens in a new tab)`}
          >
            <FontAwesomeIcon icon={icon} className="text-xl mr-3" aria-hidden="true" />
            {label}
          </a>
        ))}
      </div>
    </section>
  );
}
