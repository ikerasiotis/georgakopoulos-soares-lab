export const metadata = {
  title: "Georgakopoulos-Soares Lab - Research",
  description:
    "Explore our research areas in cancer genomics and computational biology.",
};

export default function IndexPage() {
  return (
    <div id="research">
      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Research Areas</h1>
            <p className="text-xl">
              Exploring the genomic landscape of cancer through computational
              approaches
            </p>
          </div>
        </div>
      </div>

      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-4 text-primary">
                  Our Approach
                </h2>
                <div className="h-1 w-20 bg-secondary mb-6"></div>
                <p className="text-lg mb-4">
                  The Georgakopoulos-Soares Lab combines computational biology,
                  genomics, and machine learning to understand the complex
                  patterns of mutations that drive cancer development and
                  progression.
                </p>
                <p className="text-lg mb-4">
                  We develop innovative computational methods to analyze
                  large-scale genomic datasets, with the goal of identifying new
                  biomarkers, therapeutic targets, and insights into cancer
                  biology.
                </p>
                <p className="text-lg">
                  Our interdisciplinary approach brings together expertise from
                  computer science, statistics, molecular biology, and clinical
                  oncology to address key challenges in cancer research.
                </p>
              </div>
              <div className="md:w-1/2">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-primary/10 rounded-lg p-6 flex flex-col items-center text-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-12 w-12 text-primary mb-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                      ></path>
                    </svg>
                    <h3 className="text-lg font-semibold mb-2">
                      Genomic Analysis
                    </h3>
                    <p className="text-sm text-gray-700">
                      Analyzing cancer genomes to identify patterns and
                      signatures
                    </p>
                  </div>
                  <div className="bg-secondary/10 rounded-lg p-6 flex flex-col items-center text-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-12 w-12 text-secondary mb-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                      ></path>
                    </svg>
                    <h3 className="text-lg font-semibold mb-2">
                      Machine Learning
                    </h3>
                    <p className="text-sm text-gray-700">
                      Developing algorithms to extract insights from complex
                      data
                    </p>
                  </div>
                  <div className="bg-accent/10 rounded-lg p-6 flex flex-col items-center text-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-12 w-12 text-accent mb-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                      ></path>
                    </svg>
                    <h3 className="text-lg font-semibold mb-2">
                      Translational Research
                    </h3>
                    <p className="text-sm text-gray-700">
                      Bridging basic science and clinical applications
                    </p>
                  </div>
                  <div className="bg-primary/10 rounded-lg p-6 flex flex-col items-center text-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-12 w-12 text-primary mb-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                      ></path>
                    </svg>
                    <h3 className="text-lg font-semibold mb-2">
                      Tool Development
                    </h3>
                    <p className="text-sm text-gray-700">
                      Creating software for the scientific community
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 bg-light research-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center">
              Research Focus Areas
            </h2>
            <div className="section-divider mb-12"></div>

            <div className="mb-16 research-card">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3 flex justify-center">
                  <div className="w-48 h-48 bg-primary/10 rounded-full flex items-center justify-center research-icon transition-transform duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-24 w-24 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h2 className="text-2xl font-bold mb-4 text-primary">
                    Mutational Signatures in Cancer
                  </h2>
                  <p className="text-gray-700 mb-4">
                    Our lab is at the forefront of identifying and
                    characterizing mutational signatures in cancer genomes.
                    These signatures are patterns of mutations that reflect the
                    biological processes operating during cancer development.
                  </p>
                  <p className="text-gray-700 mb-4">
                    By analyzing large-scale genomic datasets, we aim to
                    discover new mutational signatures and understand their
                    biological origins. This work has implications for cancer
                    etiology, early detection, and personalized treatment
                    approaches.
                  </p>
                  <div className="mt-6 space-y-4">
                    <h3 className="text-lg font-semibold text-primary">
                      Key Projects:
                    </h3>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li>
                        Identification of novel mutational signatures in
                        pediatric cancers
                      </li>
                      <li>
                        Development of computational methods for signature
                        extraction from whole-genome sequencing data
                      </li>
                      <li>
                        Investigation of the relationship between mutational
                        signatures and clinical outcomes
                      </li>
                      <li>
                        Characterization of tissue-specific mutational processes
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-6">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                      Genomic Analysis
                    </span>
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                      Pattern Recognition
                    </span>
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                      Cancer Etiology
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-16 research-card">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3 flex justify-center">
                  <div className="w-48 h-48 bg-secondary/10 rounded-full flex items-center justify-center research-icon transition-transform duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-24 w-24 text-secondary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h2 className="text-2xl font-bold mb-4 text-secondary">
                    Genomic Instability and Cancer Evolution
                  </h2>
                  <p className="text-gray-700 mb-4">
                    Genomic instability is a hallmark of cancer that drives
                    tumor evolution and treatment resistance. Our research
                    investigates the mechanisms underlying genomic instability
                    and its consequences for cancer progression.
                  </p>
                  <p className="text-gray-700 mb-4">
                    We develop computational methods to quantify and
                    characterize different forms of genomic instability,
                    including chromosomal instability, microsatellite
                    instability, and replication stress. This work helps
                    identify potential therapeutic vulnerabilities in cancer
                    cells.
                  </p>
                  <div className="mt-6 space-y-4">
                    <h3 className="text-lg font-semibold text-secondary">
                      Key Projects:
                    </h3>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li>
                        Characterization of genomic instability patterns across
                        cancer types
                      </li>
                      <li>
                        Investigation of the relationship between genomic
                        instability and immunotherapy response
                      </li>
                      <li>
                        Development of methods to track tumor evolution through
                        genomic instability markers
                      </li>
                      <li>
                        Identification of synthetic lethal interactions with
                        genomic instability
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-6">
                    <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm">
                      Tumor Evolution
                    </span>
                    <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm">
                      Genomic Instability
                    </span>
                    <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm">
                      Treatment Resistance
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-16 research-card">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3 flex justify-center">
                  <div className="w-48 h-48 bg-accent/10 rounded-full flex items-center justify-center research-icon transition-transform duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-24 w-24 text-accent"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h2 className="text-2xl font-bold mb-4 text-accent">
                    Computational Methods for Cancer Genomics
                  </h2>
                  <p className="text-gray-700 mb-4">
                    Our lab develops novel computational approaches and machine
                    learning algorithms to analyze complex genomic datasets.
                    These methods enable us to extract meaningful biological
                    insights from the vast amount of genomic data available.
                  </p>
                  <p className="text-gray-700 mb-4">
                    We focus on creating tools that can integrate multiple data
                    types, handle heterogeneous data, and account for the
                    complex nature of cancer genomes. Our computational
                    frameworks are designed to be accessible to the broader
                    scientific community.
                  </p>
                  <div className="mt-6 space-y-4">
                    <h3 className="text-lg font-semibold text-accent">
                      Key Projects:
                    </h3>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li>
                        Development of machine learning approaches for
                        integrating multi-omics data
                      </li>
                      <li>
                        Creation of computational frameworks for mutational
                        signature analysis
                      </li>
                      <li>
                        Design of algorithms for identifying driver mutations in
                        cancer genomes
                      </li>
                      <li>
                        Implementation of deep learning methods for cancer
                        classNameification and prognosis
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-6">
                    <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm">
                      Machine Learning
                    </span>
                    <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm">
                      Algorithm Development
                    </span>
                    <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm">
                      Data Integration
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="research-card">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3 flex justify-center">
                  <div className="w-48 h-48 bg-primary/10 rounded-full flex items-center justify-center research-icon transition-transform duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-24 w-24 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h2 className="text-2xl font-bold mb-4 text-primary">
                    Translational Cancer Genomics
                  </h2>
                  <p className="text-gray-700 mb-4">
                    We are committed to translating genomic discoveries into
                    clinical applications. Our research aims to develop
                    biomarkers for early cancer detection, prognosis, and
                    treatment response prediction.
                  </p>
                  <p className="text-gray-700 mb-4">
                    By collaborating with clinical partners, we validate our
                    computational findings in patient cohorts and explore their
                    potential for improving cancer diagnosis and treatment. This
                    translational focus ensures that our research has a direct
                    impact on patient care.
                  </p>
                  <div className="mt-6 space-y-4">
                    <h3 className="text-lg font-semibold text-primary">
                      Key Projects:
                    </h3>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li>
                        Development of genomic biomarkers for early cancer
                        detection
                      </li>
                      <li>
                        Identification of predictive markers for immunotherapy
                        response
                      </li>
                      <li>
                        Creation of prognostic models based on mutational
                        signatures
                      </li>
                      <li>
                        Investigation of circulating tumor DNA for monitoring
                        treatment response
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-6">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                      Biomarker Discovery
                    </span>
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                      Precision Medicine
                    </span>
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                      Clinical Translation
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center">
              Our Methods &amp; Technologies
            </h2>
            <div className="section-divider mb-12"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      ></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold">
                    Computational Genomics
                  </h3>
                </div>
                <p className="text-gray-700">
                  We use advanced computational methods to analyze large-scale
                  genomic datasets, including whole-genome sequencing,
                  whole-exome sequencing, and RNA-seq data.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-secondary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      ></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold">Machine Learning</h3>
                </div>
                <p className="text-gray-700">
                  We develop and apply machine learning algorithms, including
                  deep learning approaches, to extract patterns and insights
                  from complex genomic data.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-accent"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                      ></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold">Data Integration</h3>
                </div>
                <p className="text-gray-700">
                  We integrate multiple data types, including genomic,
                  transcriptomic, epigenomic, and clinical data, to gain a
                  comprehensive understanding of cancer biology.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
                      ></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold">
                    Statistical Modeling
                  </h3>
                </div>
                <p className="text-gray-700">
                  We develop statistical models to analyze mutational processes,
                  genomic instability, and their relationships with clinical
                  outcomes in cancer patients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 bg-light">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center">
              Software &amp; Resources
            </h2>
            <div className="section-divider mb-12"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md hover-scale">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  SignatureExplorer
                </h3>
                <p className="text-gray-700 mb-4">
                  A comprehensive tool for extracting and analyzing mutational
                  signatures from cancer genomes.
                </p>
                <div className="flex space-x-3">
                  <a
                    href="#"
                    className="text-primary hover:text-secondary flex items-center"
                  >
                    <i className="fab fa-github mr-1"></i> GitHub
                  </a>
                  <a
                    href="#"
                    className="text-primary hover:text-secondary flex items-center"
                  >
                    <i className="fas fa-book mr-1"></i> Documentation
                  </a>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover-scale">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-secondary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  GenomeInstability
                </h3>
                <p className="text-gray-700 mb-4">
                  A toolkit for quantifying and characterizing genomic
                  instability in cancer samples.
                </p>
                <div className="flex space-x-3">
                  <a
                    href="#"
                    className="text-secondary hover:text-primary flex items-center"
                  >
                    <i className="fab fa-github mr-1"></i> GitHub
                  </a>
                  <a
                    href="#"
                    className="text-secondary hover:text-primary flex items-center"
                  >
                    <i className="fas fa-book mr-1"></i> Documentation
                  </a>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover-scale">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-accent"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  MultiOmicsIntegrator
                </h3>
                <p className="text-gray-700 mb-4">
                  A framework for integrating and analyzing multi-omics data in
                  cancer research.
                </p>
                <div className="flex space-x-3">
                  <a
                    href="#"
                    className="text-accent hover:text-primary flex items-center"
                  >
                    <i className="fab fa-github mr-1"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
