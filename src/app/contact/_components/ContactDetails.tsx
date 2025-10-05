import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { ReactNode } from "react";

import type { ContactPhone } from "../_lib/contact-view-model";

type ContactDetailsProps = {
  addressLines: string[];
  email?: string;
  phones: ContactPhone[];
  officeHourLines: string[];
};

export function ContactDetails({
  addressLines,
  email,
  phones,
  officeHourLines,
}: ContactDetailsProps) {
  const headingId = "contact-details-heading";

  const sections: ReactNode[] = [];

  if (addressLines.length > 0) {
    sections.push(
      <div key="address" className="flex items-start">
        <div className="bg-primary/10 rounded-full p-3 mr-4">
          <FontAwesomeIcon
            icon={["fas", "map-marker-alt"]}
            className="text-primary text-xl"
            aria-hidden="true"
          />
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Address</h3>
          <address className="not-italic text-gray-600">
            {addressLines.map((line, index) => (
              <span key={`${line}-${index}`}>
                {line}
                {index < addressLines.length - 1 && <br />}
              </span>
            ))}
          </address>
        </div>
      </div>
    );
  }

  if (email) {
    sections.push(
      <div key="email" className="flex items-start">
        <div className="bg-primary/10 rounded-full p-3 mr-4">
          <FontAwesomeIcon
            icon={["fas", "envelope"]}
            className="text-primary text-xl"
            aria-hidden="true"
          />
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Email</h3>
          <p className="text-gray-600">
            <a href={`mailto:${email}`} className="text-primary hover:underline">
              {email}
            </a>
          </p>
        </div>
      </div>
    );
  }

  if (phones.length > 0) {
    sections.push(
      <div key="phones" className="flex items-start">
        <div className="bg-primary/10 rounded-full p-3 mr-4">
          <FontAwesomeIcon
            icon={["fas", "phone"]}
            className="text-primary text-xl"
            aria-hidden="true"
          />
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Phone</h3>
          <ul className="text-gray-600 space-y-1">
            {phones.map(({ label, display, telHref }) => (
              <li key={`${label}-${display}`}>
                <span className="font-semibold">{label}:</span>{" "}
                {telHref ? (
                  <a href={telHref} className="text-primary hover:underline">
                    {display}
                  </a>
                ) : (
                  <span>{display}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  if (officeHourLines.length > 0) {
    sections.push(
      <div key="hours" className="flex items-start">
        <div className="bg-primary/10 rounded-full p-3 mr-4">
          <FontAwesomeIcon
            icon={["fas", "clock"]}
            className="text-primary text-xl"
            aria-hidden="true"
          />
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Office Hours</h3>
          <p className="text-gray-600">
            {officeHourLines.map((line, index) => (
              <span key={`${line}-${index}`}>
                {line}
                {index < officeHourLines.length - 1 && <br />}
              </span>
            ))}
          </p>
        </div>
      </div>
    );
  }

  if (sections.length === 0) {
    return null;
  }

  return (
    <section
      aria-labelledby={headingId}
      className="bg-white rounded-lg shadow-lg p-8"
    >
      <h2 id={headingId} className="text-2xl font-bold text-primary mb-8 text-center">
        Laboratory Information
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {sections}
      </div>
    </section>
  );
}
