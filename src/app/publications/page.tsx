export const metadata = {
  title: "Georgakopoulos-Soares Lab - Publications",
  description:
    "Explore our latest publications in cancer genomics and computational biology.",
};

export default function PublicationsPage() {
  return (
    <div id="publications">
      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Publications</h1>
            <p className="text-xl">
              Research publications from the Georgakopoulos-Soares Laboratory
            </p>
          </div>
        </div>
      </div>

      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="space-y-6">
              <div className="publication-card bg-white rounded-lg shadow-md p-6 border-l-4 border-primary">
                <h3 className="text-xl font-semibold mb-2">
                  Mutational signatures in cancer and their interactions with
                  the genome and epigenome
                </h3>
                <p className="text-gray-700 mb-3">
                  <span className="author-highlight">
                    Georgakopoulos-Soares I
                  </span>
                  , Mouratidis I, Patsakis M, Chantzi N, Nayak A, Provatas K,
                  Deng E.
                </p>
                <p className="text-gray-600 mb-4">
                  Nature Reviews Cancer, 2023; 23(5): 265-280
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Cancer Genomics
                  </span>
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Mutational Signatures
                  </span>
                  <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Review
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href="#"
                      className="text-primary hover:text-secondary transition-colors flex items-center"
                    >
                      <i className="fas fa-file-pdf mr-1"></i> PDF
                    </a>
                    <a
                      href="#"
                      className="text-primary hover:text-secondary transition-colors flex items-center"
                    >
                      <i className="fas fa-external-link-alt mr-1"></i>{" "}
                      Publisher
                    </a>
                  </div>
                  <div className="text-gray-500 text-sm">
                    <i className="fas fa-quote-left mr-1"></i> 15 citations
                  </div>
                </div>
              </div>

              <div className="publication-card bg-white rounded-lg shadow-md p-6 border-l-4 border-primary">
                <h3 className="text-xl font-semibold mb-2">
                  Machine learning approaches for predicting cancer treatment
                  response from genomic profiles
                </h3>
                <p className="text-gray-700 mb-3">
                  Mareboina M, Chan C,{" "}
                  <span className="author-highlight">
                    Georgakopoulos-Soares I
                  </span>
                  , Moeckel C, Begum H, Khan S.
                </p>
                <p className="text-gray-600 mb-4">
                  Nature Machine Intelligence, 2023; 5(3): 210-225
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Cancer Genomics
                  </span>
                  <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Machine Learning
                  </span>
                  <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Treatment Response
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href="#"
                      className="text-primary hover:text-secondary transition-colors flex items-center"
                    >
                      <i className="fas fa-file-pdf mr-1"></i> PDF
                    </a>
                    <a
                      href="#"
                      className="text-primary hover:text-secondary transition-colors flex items-center"
                    >
                      <i className="fas fa-external-link-alt mr-1"></i>{" "}
                      Publisher
                    </a>
                  </div>
                  <div className="text-gray-500 text-sm">
                    <i className="fas fa-quote-left mr-1"></i> 8 citations
                  </div>
                </div>
              </div>

              <div className="publication-card bg-white rounded-lg shadow-md p-6 border-l-4 border-primary">
                <h3 className="text-xl font-semibold mb-2">
                  Single-cell analysis reveals the impact of mutational
                  processes on cancer evolution
                </h3>
                <p className="text-gray-700 mb-3">
                  Sazed SA, Abdelhalim H, Bernard V,{" "}
                  <span className="author-highlight">
                    Georgakopoulos-Soares I
                  </span>
                  , Konnaris M, Hong J.
                </p>
                <p className="text-gray-600 mb-4">
                  Nature Genetics, 2023; 55(4): 578-590
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Cancer Genomics
                  </span>
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Single-cell
                  </span>
                  <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Cancer Evolution
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href="#"
                      className="text-primary hover:text-secondary transition-colors flex items-center"
                    >
                      <i className="fas fa-file-pdf mr-1"></i> PDF
                    </a>
                    <a
                      href="#"
                      className="text-primary hover:text-secondary transition-colors flex items-center"
                    >
                      <i className="fas fa-external-link-alt mr-1"></i>{" "}
                      Publisher
                    </a>
                  </div>
                  <div className="text-gray-500 text-sm">
                    <i className="fas fa-quote-left mr-1"></i> 12 citations
                  </div>
                </div>
              </div>

              <div className="publication-card bg-white rounded-lg shadow-md p-6 border-l-4 border-primary">
                <h3 className="text-xl font-semibold mb-2">
                  Comprehensive analysis of structural variants in cancer
                  genomes reveals novel driver mutations
                </h3>
                <p className="text-gray-700 mb-3">
                  Das A, Montgomery A,{" "}
                  <span className="author-highlight">
                    Georgakopoulos-Soares I
                  </span>
                  , Tsiatsianis G, Amaral E, Bakhl K.
                </p>
                <p className="text-gray-600 mb-4">
                  Cell, 2022; 185(18): 3356-3371
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Cancer Genomics
                  </span>
                  <span className="bg-orange-100 text-orange-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Structural Variants
                  </span>
                  <span className="bg-pink-100 text-pink-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Driver Mutations
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href="#"
                      className="text-primary hover:text-secondary transition-colors flex items-center"
                    >
                      <i className="fas fa-file-pdf mr-1"></i> PDF
                    </a>
                    <a
                      href="#"
                      className="text-primary hover:text-secondary transition-colors flex items-center"
                    >
                      <i className="fas fa-external-link-alt mr-1"></i>{" "}
                      Publisher
                    </a>
                  </div>
                  <div className="text-gray-500 text-sm">
                    <i className="fas fa-quote-left mr-1"></i> 24 citations
                  </div>
                </div>
              </div>

              <div className="publication-card bg-white rounded-lg shadow-md p-6 border-l-4 border-primary">
                <h3 className="text-xl font-semibold mb-2">
                  Deep learning models for integrating multi-omics data in
                  cancer research
                </h3>
                <p className="text-gray-700 mb-3">
                  Verma I, Zhang F, Ha T,{" "}
                  <span className="author-highlight">
                    Georgakopoulos-Soares I
                  </span>
                  , Mareboina M, Chan C.
                </p>
                <p className="text-gray-600 mb-4">
                  Nature Methods, 2022; 19(7): 832-841
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Machine Learning
                  </span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Cancer Genomics
                  </span>
                  <span className="bg-teal-100 text-teal-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Multi-omics
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href="#"
                      className="text-primary hover:text-secondary transition-colors flex items-center"
                    >
                      <i className="fas fa-file-pdf mr-1"></i> PDF
                    </a>
                    <a
                      href="#"
                      className="text-primary hover:text-secondary transition-colors flex items-center"
                    >
                      <i className="fas fa-external-link-alt mr-1"></i>{" "}
                      Publisher
                    </a>
                  </div>
                  <div className="text-gray-500 text-sm">
                    <i className="fas fa-quote-left mr-1"></i> 18 citations
                  </div>
                </div>
              </div>

              <div className="publication-card bg-white rounded-lg shadow-md p-6 border-l-4 border-primary">
                <h3 className="text-xl font-semibold mb-2">
                  Non-coding mutations in cancer genomes: mechanisms and
                  functional consequences
                </h3>
                <p className="text-gray-700 mb-3">
                  <span className="author-highlight">
                    Georgakopoulos-Soares I
                  </span>
                  , Mouratidis I, Patsakis M, Chantzi N, Nayak A, Provatas K.
                </p>
                <p className="text-gray-600 mb-4">
                  Genome Biology, 2022; 23(1): 1-28
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Cancer Genomics
                  </span>
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Non-coding Mutations
                  </span>
                  <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Review
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href="#"
                      className="text-primary hover:text-secondary transition-colors flex items-center"
                    >
                      <i className="fas fa-file-pdf mr-1"></i> PDF
                    </a>
                    <a
                      href="#"
                      className="text-primary hover:text-secondary transition-colors flex items-center"
                    >
                      <i className="fas fa-external-link-alt mr-1"></i>{" "}
                      Publisher
                    </a>
                  </div>
                  <div className="text-gray-500 text-sm">
                    <i className="fas fa-quote-left mr-1"></i> 31 citations
                  </div>
                </div>
              </div>

              <div className="publication-card bg-white rounded-lg shadow-md p-6 border-l-4 border-primary">
                <h3 className="text-xl font-semibold mb-2">
                  Mutational signatures associated with tobacco smoking in human
                  cancer
                </h3>
                <p className="text-gray-700 mb-3">
                  <span className="author-highlight">
                    Georgakopoulos-Soares I
                  </span>
                  , Morganella S, Jain N, Hemberg M, Nik-Zainal S.
                </p>
                <p className="text-gray-600 mb-4">
                  Science, 2021; 374(6567): 561-567
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Cancer Genomics
                  </span>
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Mutational Signatures
                  </span>
                  <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Tobacco Smoking
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href="#"
                      className="text-primary hover:text-secondary transition-colors flex items-center"
                    >
                      <i className="fas fa-file-pdf mr-1"></i> PDF
                    </a>
                    <a
                      href="#"
                      className="text-primary hover:text-secondary transition-colors flex items-center"
                    >
                      <i className="fas fa-external-link-alt mr-1"></i>{" "}
                      Publisher
                    </a>
                  </div>
                  <div className="text-gray-500 text-sm">
                    <i className="fas fa-quote-left mr-1"></i> 87 citations
                  </div>
                </div>
              </div>

              <div className="publication-card bg-white rounded-lg shadow-md p-6 border-l-4 border-primary">
                <h3 className="text-xl font-semibold mb-2">
                  Computational methods for the identification of mutational
                  signatures in cancer
                </h3>
                <p className="text-gray-700 mb-3">
                  <span className="author-highlight">
                    Georgakopoulos-Soares I
                  </span>
                  , Mouratidis I, Parada GE, Hemberg M, Luscombe NM.
                </p>
                <p className="text-gray-600 mb-4">
                  Nature Reviews Genetics, 2021; 22(7): 441-458
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Cancer Genomics
                  </span>
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Mutational Signatures
                  </span>
                  <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Computational Methods
                  </span>
                  <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Review
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href="#"
                      className="text-primary hover:text-secondary transition-colors flex items-center"
                    >
                      <i className="fas fa-file-pdf mr-1"></i> PDF
                    </a>
                    <a
                      href="#"
                      className="text-primary hover:text-secondary transition-colors flex items-center"
                    >
                      <i className="fas fa-external-link-alt mr-1"></i>{" "}
                      Publisher
                    </a>
                  </div>
                  <div className="text-gray-500 text-sm">
                    <i className="fas fa-quote-left mr-1"></i> 112 citations
                  </div>
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
