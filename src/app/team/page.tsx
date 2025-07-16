export const metadata = {
  title: "Georgakopoulos-Soares Lab - Team",
  description:
    "Meet the researchers driving innovation in cancer genomics and computational biology.",
};

export default function Index() {
  return (
    <div>
      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Our Team</h1>
            <p className="text-xl">
              Meet the researchers driving innovation in cancer genomics and
              computational biology
            </p>
          </div>
        </div>
      </div>

      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-xl p-8 shadow-lg">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="md:w-1/3">
                    <div className="aspect-square bg-white rounded-full overflow-hidden shadow-md border-4 border-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-full w-full text-primary/40 p-8"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1"
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="text-2xl font-bold mb-2 text-primary">
                      Dr. Ilias Georgakopoulos-Soares
                    </h3>
                    <p className="text-gray-600 mb-4 font-medium">
                      Principal Investigator
                    </p>
                    <p className="text-gray-700 mb-4">
                      Dr. Georgakopoulos-Soares is an Assistant Professor at the
                      Department of Biochemistry and Molecular Biology at Penn
                      State University. His research focuses on understanding
                      the mechanisms that shape cancer genomes and their
                      implications for cancer development, progression, and
                      treatment response.
                    </p>
                    <p className="text-gray-700 mb-4">
                      His lab develops computational methods to study mutational
                      processes in cancer and their interactions with the genome
                      and epigenome. The lab&apos;s research aims to improve our
                      understanding of cancer biology and contribute to the
                      development of new diagnostic and therapeutic approaches.
                    </p>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold mb-2">
                        Education &amp; Training
                      </h4>
                      <ul className="space-y-1 text-gray-700">
                        <li>
                          • Postdoctoral Fellow, University of California, San
                          Francisco
                        </li>
                        <li>• Ph.D., University of Cambridge</li>
                        <li>• M.Sc., Imperial College London</li>
                      </ul>
                    </div>

                    <div className="flex space-x-4">
                      <a
                        href="https://twitter.com/IliasGeorgakop1"
                        target="_blank"
                        className="text-primary hover:text-secondary transition-colors"
                      >
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a
                        href="https://www.linkedin.com/in/ilias-georgakopoulos-soares/"
                        target="_blank"
                        className="text-primary hover:text-secondary transition-colors"
                      >
                        <i className="fab fa-linkedin"></i>
                      </a>
                      <a
                        href="https://scholar.google.com/citations?user=Uxu-s_QAAAAJ&amp;hl=en"
                        target="_blank"
                        className="text-primary hover:text-secondary transition-colors"
                      >
                        <i className="fab fa-google"></i>
                      </a>
                      <a
                        href="https://github.com/ilias-georgakop"
                        target="_blank"
                        className="text-primary hover:text-secondary transition-colors"
                      >
                        <i className="fab fa-github"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-16 bg-light research-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center">
              Meet our Team
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                "Manvita Mareboina",
                "Candace Chan",
                "Ioannis Mouratidis",
                "Camille Moeckel",
                "Michail Patsakis",
                "Nikol Chantzi",
                "Akshatha Nayak",
                "Kimonas Provatas",
              ].map((name) => (
                <div
                  key={name}
                  className="team-card bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <div className="flex items-center p-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex-shrink-0 mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-full w-full text-primary/40 p-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1"
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-0">{name}</h3>
                      <p className="text-gray-600 text-sm">
                        Undergraduate Researcher
                      </p>
                      <p className="text-gray-700 text-sm mt-1">
                        Computational biology
                      </p>
                    </div>
                  </div>
                  <div className="border-t border-gray-100 px-4 py-3 bg-gray-50 flex justify-between items-center">
                    <span className="text-xs text-gray-500">
                      Penn State University
                    </span>
                    <div className="flex space-x-2">
                      <a href="#" className="text-primary hover:text-secondary">
                        <i className="fas fa-envelope text-sm"></i>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
