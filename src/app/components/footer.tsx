import { ButtonLink } from "@/libs/ui";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-center">
      <div className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Interested in Collaborating?
            </h2>
            <p className="text-xl mb-8">
              We are always open to new collaborations and partnerships. Get in
              touch to discuss potential research opportunities.
            </p>
            <ButtonLink href="/contact" variant="filled">
              Contact Us
            </ButtonLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
