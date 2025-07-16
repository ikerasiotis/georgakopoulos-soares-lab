import Link from "next/link";

export const metadata = {
  title: "Georgakopoulos-Soares Lab - 404",
  description: "Page not found - Georgakopoulos-Soares Lab",
};

export default function NotFound() {
  return (
    <main className="flex-grow flex items-center justify-center py-16 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <div className="mb-8 flex justify-center">
          <svg
            className="dna-animation w-64 h-64"
            viewBox="0 0 512 512"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M256 0C264.837 0 272 7.163 272 16V32C272 40.837 264.837 48 256 48C247.163 48 240 40.837 240 32V16C240 7.163 247.163 0 256 0Z"
              fill="#1E407C"
            ></path>
            <path
              d="M256 464C264.837 464 272 471.163 272 480V496C272 504.837 264.837 512 256 512C247.163 512 240 504.837 240 496V480C240 471.163 247.163 464 256 464Z"
              fill="#1E407C"
            ></path>
            <path
              d="M256 80C264.837 80 272 87.163 272 96V112C272 120.837 264.837 128 256 128C247.163 128 240 120.837 240 112V96C240 87.163 247.163 80 256 80Z"
              fill="#1E407C"
            ></path>
            <path
              d="M256 384C264.837 384 272 391.163 272 400V416C272 424.837 264.837 432 256 432C247.163 432 240 424.837 240 416V400C240 391.163 247.163 384 256 384Z"
              fill="#1E407C"
            ></path>
            <path
              d="M256 160C264.837 160 272 167.163 272 176V192C272 200.837 264.837 208 256 208C247.163 208 240 200.837 240 192V176C240 167.163 247.163 160 256 160Z"
              fill="#1E407C"
            ></path>
            <path
              d="M256 304C264.837 304 272 311.163 272 320V336C272 344.837 264.837 352 256 352C247.163 352 240 344.837 240 336V320C240 311.163 247.163 304 256 304Z"
              fill="#1E407C"
            ></path>
            <path
              d="M256 224C273.673 224 288 238.327 288 256C288 273.673 273.673 288 256 288C238.327 288 224 273.673 224 256C224 238.327 238.327 224 256 224Z"
              fill="#96BEE6"
            ></path>
            <path
              d="M176 32C184.837 32 192 39.163 192 48C192 56.837 184.837 64 176 64H144C135.163 64 128 56.837 128 48C128 39.163 135.163 32 144 32H176Z"
              fill="#96BEE6"
            ></path>
            <path
              d="M368 448C376.837 448 384 455.163 384 464C384 472.837 376.837 480 368 480H336C327.163 480 320 472.837 320 464C320 455.163 327.163 448 336 448H368Z"
              fill="#96BEE6"
            ></path>
            <path
              d="M112 96C120.837 96 128 103.163 128 112C128 120.837 120.837 128 112 128H80C71.163 128 64 120.837 64 112C64 103.163 71.163 96 80 96H112Z"
              fill="#96BEE6"
            ></path>
            <path
              d="M432 384C440.837 384 448 391.163 448 400C448 408.837 440.837 416 432 416H400C391.163 416 384 408.837 384 400C384 391.163 391.163 384 400 384H432Z"
              fill="#96BEE6"
            ></path>
            <path
              d="M48 176C56.837 176 64 183.163 64 192C64 200.837 56.837 208 48 208H16C7.163 208 0 200.837 0 192C0 183.163 7.163 176 16 176H48Z"
              fill="#96BEE6"
            ></path>
            <path
              d="M496 304C504.837 304 512 311.163 512 320C512 328.837 504.837 336 496 336H464C455.163 336 448 328.837 448 320C448 311.163 455.163 304 464 304H496Z"
              fill="#96BEE6"
            ></path>
            <path
              d="M368 32C376.837 32 384 39.163 384 48C384 56.837 376.837 64 368 64H336C327.163 64 320 56.837 320 48C320 39.163 327.163 32 336 32H368Z"
              fill="#1E407C"
            ></path>
            <path
              d="M176 448C184.837 448 192 455.163 192 464C192 472.837 184.837 480 176 480H144C135.163 480 128 472.837 128 464C128 455.163 135.163 448 144 448H176Z"
              fill="#1E407C"
            ></path>
            <path
              d="M432 96C440.837 96 448 103.163 448 112C448 120.837 440.837 128 432 128H400C391.163 128 384 120.837 384 112C384 103.163 391.163 96 400 96H432Z"
              fill="#1E407C"
            ></path>
            <path
              d="M112 384C120.837 384 128 391.163 128 400C128 408.837 120.837 416 112 416H80C71.163 416 64 408.837 64 400C64 391.163 71.163 384 80 384H112Z"
              fill="#1E407C"
            ></path>
            <path
              d="M496 176C504.837 176 512 183.163 512 192C512 200.837 504.837 208 496 208H464C455.163 208 448 200.837 448 192C448 183.163 455.163 176 464 176H496Z"
              fill="#1E407C"
            ></path>
            <path
              d="M48 304C56.837 304 64 311.163 64 320C64 328.837 56.837 336 48 336H16C7.163 336 0 328.837 0 320C0 311.163 7.163 304 16 304H48Z"
              fill="#1E407C"
            ></path>
          </svg>
        </div>

        <h1 className="text-8xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-gray-700 mb-6">
          Page Not Found
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>

        <div className="mb-12">
          <p className="text-gray-500 mb-6">
            You might want to check if there&apos;s a mutation in the URL or try
            one of these options:
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/"
              className="bg-primary hover:bg-secondary text-white font-medium py-2 px-6 rounded-md transition-colors"
            >
              <i className="fas fa-home mr-2"></i> Go to Homepage
            </Link>
            <Link
              href="/publications"
              className="bg-white hover:bg-gray-100 text-primary border border-primary font-medium py-2 px-6 rounded-md transition-colors"
            >
              <i className="fas fa-book mr-2"></i> View Publications
            </Link>
            <a
              href="/contact"
              className="bg-white hover:bg-gray-100 text-primary border border-primary font-medium py-2 px-6 rounded-md transition-colors"
            >
              <i className="fas fa-envelope mr-2"></i> Contact Us
            </a>
          </div>
        </div>

        <div className="text-gray-500">
          <p className="mb-2">Need help finding something?</p>
          <div className="flex justify-center">
            <div className="relative w-full max-w-md">
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-primary">
                <i className="fas fa-search"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
