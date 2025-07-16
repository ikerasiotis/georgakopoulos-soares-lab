import Link from "next/link";

export default function Header({
  title = "Georgakopoulos-Soares Lab",
}: {
  title?: string;
}) {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 md:py-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Link
              href="/"
              className="text-primary font-bold text-xl md:text-2xl flex items-center"
            >
              <span>{title}</span>
            </Link>
          </div>
          <div className="flex flex-wrap justify-center space-x-1 md:space-x-6">
            <Link
              href="/research"
              className="nav-link px-2 py-1 text-dark hover:text-primary transition-colors"
            >
              Research
            </Link>
            <Link
              href="/team"
              className="nav-link px-2 py-1 text-dark hover:text-primary transition-colors"
            >
              Team
            </Link>
            <Link
              href="/publications"
              className="nav-link px-2 py-1 text-dark hover:text-primary transition-colors"
            >
              Publications
            </Link>
            <Link
              href="/news"
              className="nav-link px-2 py-1 text-dark hover:text-primary transition-colors"
            >
              News
            </Link>
            <Link
              href="/contact"
              className="nav-link px-2 py-1 text-dark hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
