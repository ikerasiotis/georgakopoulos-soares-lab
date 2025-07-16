export const metadata = {
  title: "Georgakopoulos-Soares Lab - Our News",
  description:
    "Stay updated with the latest news and announcements from the Georgakopoulos-Soares Laboratory.",
};

export default function Index() {
  return (
    <div className="bg-white text-dark">
      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">News &amp; Updates</h1>
            <p className="text-xl">
              Stay updated with the latest news from the Georgakopoulos-Soares
              Laboratory
            </p>
          </div>
        </div>
      </div>

      <div className="py-16 news-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden border-l-4 border-primary mb-12">
                <div className="p-6">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="badge bg-blue-100 text-blue-800">
                      <i className="fas fa-award mr-2"></i>
                      Grant Award
                    </span>
                    <span className="text-gray-500 text-sm">June 15, 2023</span>
                  </div>
                  <h2 className="text-2xl font-bold mb-4">
                    Lab Receives $2.5M NIH Grant to Study Mutational Signatures
                    in Cancer
                  </h2>
                  <p className="text-gray-600 mb-3 leading-relaxed">
                    The Georgakopoulos-Soares Laboratory has been awarded a
                    prestigious $2.5 million grant from the National Institutes
                    of Health (NIH) to study the role of mutational signatures
                    in cancer development and progression. This five-year
                    project will focus on developing novel computational methods
                    to identify and characterize mutational signatures across
                    different cancer types.
                  </p>
                  <p className="text-gray-600 mb-3 leading-relaxed">
                    The grant will support the development of innovative machine
                    learning approaches to analyze large-scale genomic datasets
                    from cancer patients. These methods aim to improve our
                    understanding of how specific mutational processes
                    contribute to cancer initiation and progression, potentially
                    leading to new diagnostic and therapeutic strategies.
                  </p>
                  <p className="text-gray-600 mb-3 leading-relaxed">
                    &quot;This funding will enable us to push the boundaries of
                    computational cancer genomics,&quot; said Dr. Ilias
                    Georgakopoulos-Soares, Principal Investigator. &quot;By
                    developing more sophisticated methods to analyze mutational
                    signatures, we hope to uncover new insights into cancer
                    biology that could ultimately benefit patients.&quot;
                  </p>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    The project will involve collaborations with clinical
                    partners to validate findings in patient samples and explore
                    potential applications in precision oncology.
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center text-primary hover:text-secondary font-medium"
                  >
                    Read more
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md news-item">
                <div className="p-6">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="badge bg-green-100 text-green-800">
                      <i className="fas fa-book mr-2"></i>
                      Publication
                    </span>
                    <span className="text-gray-500 text-sm">May 28, 2023</span>
                  </div>
                  <h2 className="text-xl font-medium mb-3">
                    New Paper Published in Nature Reviews Cancer
                  </h2>
                  <p className="text-gray-600 mb-2 leading-relaxed">
                    Our lab&apos;s review paper &quot;Mutational signatures in
                    cancer and their interactions with the genome and
                    epigenome&quot; has been published in Nature Reviews Cancer.
                    The paper provides a comprehensive overview of recent
                    advances in the field.
                  </p>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    This work summarizes key findings from the past decade and
                    highlights emerging trends in mutational signature analysis
                    that are reshaping our understanding of cancer genomics.
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center text-primary hover:text-secondary font-medium"
                  >
                    Read more
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md news-item">
                <div className="p-6">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="badge bg-purple-100 text-purple-800">
                      <i className="fas fa-users mr-2"></i>
                      Team
                    </span>
                    <span className="text-gray-500 text-sm">May 10, 2023</span>
                  </div>
                  <h2 className="text-xl font-medium mb-3">
                    Two New Postdoctoral Researchers Join the Lab
                  </h2>
                  <p className="text-gray-600 mb-2 leading-relaxed">
                    We are excited to welcome Dr. Maria Chen and Dr. James
                    Rodriguez to our team. They bring expertise in machine
                    learning and single-cell genomics, strengthening our
                    research capabilities.
                  </p>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Both researchers will contribute to our ongoing projects on
                    cancer mutational signatures and computational method
                    development.
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center text-primary hover:text-secondary font-medium"
                  >
                    Read more
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md news-item">
                <div className="p-6">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="badge bg-yellow-100 text-yellow-800">
                      <i className="fas fa-chalkboard-teacher mr-2"></i>
                      Conference
                    </span>
                    <span className="text-gray-500 text-sm">
                      April 22, 2023
                    </span>
                  </div>
                  <h2 className="text-xl font-medium mb-3">
                    Lab Presents at AACR Annual Meeting 2023
                  </h2>
                  <p className="text-gray-600 mb-2 leading-relaxed">
                    Members of our lab presented three posters and gave an oral
                    presentation at the American Association for Cancer Research
                    (AACR) Annual Meeting in Orlando, Florida.
                  </p>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    The presentations focused on our recent findings in
                    mutational signature analysis and their implications for
                    cancer biology.
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center text-primary hover:text-secondary font-medium"
                  >
                    Read more
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md news-item">
                <div className="p-6">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="badge bg-red-100 text-red-800">
                      <i className="fas fa-code mr-2"></i>
                      Software
                    </span>
                    <span className="text-gray-500 text-sm">
                      March 15, 2023
                    </span>
                  </div>
                  <h2 className="text-xl font-medium mb-3">
                    Lab Software Tool CancerSig Released on GitHub
                  </h2>
                  <p className="text-gray-600 mb-2 leading-relaxed">
                    We are pleased to announce the release of CancerSig, our new
                    open-source software tool for analyzing mutational
                    signatures in cancer genomes. The tool is now available on
                    GitHub.
                  </p>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    CancerSig implements several novel algorithms for signature
                    extraction and interpretation, making it easier for
                    researchers to analyze their own genomic datasets.
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center text-primary hover:text-secondary font-medium"
                  >
                    Read more
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md news-item">
                <div className="p-6">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="badge bg-indigo-100 text-indigo-800">
                      <i className="fas fa-newspaper mr-2"></i>
                      Media
                    </span>
                    <span className="text-gray-500 text-sm">
                      February 28, 2023
                    </span>
                  </div>
                  <h2 className="text-xl font-medium mb-3">
                    Dr. Georgakopoulos-Soares Interviewed by Science Magazine
                  </h2>
                  <p className="text-gray-600 mb-2 leading-relaxed">
                    Dr. Ilias Georgakopoulos-Soares was interviewed by Science
                    Magazine about recent advances in computational approaches
                    for studying cancer genomics and the future of the field.
                  </p>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    The interview highlighted our lab&apos;s contributions to
                    developing new methods for analyzing mutational processes in
                    cancer.
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center text-primary hover:text-secondary font-medium"
                  >
                    Read more
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md news-item">
                <div className="p-6">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="badge bg-teal-100 text-teal-800">
                      <i className="fas fa-handshake mr-2"></i>
                      Collaboration
                    </span>
                    <span className="text-gray-500 text-sm">
                      January 10, 2023
                    </span>
                  </div>
                  <h2 className="text-xl font-medium mb-3">
                    New Collaboration with Memorial Sloan Kettering Cancer
                    Center
                  </h2>
                  <p className="text-gray-600 mb-2 leading-relaxed">
                    Our lab has established a new collaboration with researchers
                    at Memorial Sloan Kettering Cancer Center to study
                    mutational processes in rare cancer types.
                  </p>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    This partnership will combine our computational expertise
                    with MSKCC&apos;s clinical resources to advance our
                    understanding of genomic alterations in understudied
                    cancers.
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center text-primary hover:text-secondary font-medium"
                  >
                    Read more
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-12">
              <nav className="inline-flex rounded-md shadow">
                <a
                  href="#"
                  className="py-2 px-4 bg-white border border-gray-300 rounded-l-md hover:bg-gray-50 text-gray-500"
                >
                  <i className="fas fa-chevron-left"></i>
                </a>
                <a
                  href="#"
                  className="py-2 px-4 bg-primary border border-primary text-white hover:bg-secondary"
                >
                  1
                </a>
                <a
                  href="#"
                  className="py-2 px-4 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700"
                >
                  2
                </a>
                <a
                  href="#"
                  className="py-2 px-4 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700"
                >
                  3
                </a>
                <a
                  href="#"
                  className="py-2 px-4 bg-white border border-gray-300 rounded-r-md hover:bg-gray-50 text-gray-500"
                >
                  <i className="fas fa-chevron-right"></i>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
