import HomeHero from "./components/Home/hero";
import AboutUs from "./components/Home/about";

import { getHomepageData } from "@/libs/api";

export default async function Index() {
  const homepageData = await getHomepageData();

  const { heroTitle, heroTagline, aboutText, aboutImage } = homepageData || {
    heroTitle: "Georgakopoulos-Soares Lab",
    heroTagline: "Decoding Cancer Genomics through Computational Biology",
    aboutText:
      "The Georgakopoulos-Soares Laboratory is dedicated to understanding the genomic landscape of cancer through innovative computational approaches and data-driven research.",
  };

  return (
    <div>
      <HomeHero title={heroTitle} tagline={heroTagline} />

      <AboutUs aboutText={aboutText} aboutImage={aboutImage} />

      <div className="py-16 bg-light research-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center">
              Research Highlights
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
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Novel Mutational Signatures
                </h3>
                <p className="text-gray-700 mb-4">
                  Our recent work has identified previously unknown mutational
                  signatures in pediatric cancers, providing new insights into
                  the processes driving cancer development in children.
                </p>
                <a
                  href="#"
                  className="text-primary hover:text-secondary flex items-center font-medium"
                >
                  Learn more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
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
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Genomic Instability Patterns
                </h3>
                <p className="text-gray-700 mb-4">
                  We&apos;ve developed computational methods to characterize
                  patterns of genomic instability that predict response to
                  immunotherapy in advanced lung cancer.
                </p>
                <a
                  href="#"
                  className="text-secondary hover:text-primary flex items-center font-medium"
                >
                  Learn more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
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
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Machine Learning Biomarkers
                </h3>
                <p className="text-gray-700 mb-4">
                  Our innovative machine learning approaches are enabling the
                  development of new biomarkers for cancer risk prediction based
                  on mutational signature exposures.
                </p>
                <a
                  href="#"
                  className="text-accent hover:text-primary flex items-center font-medium"
                >
                  Learn more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
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
        </div>
      </div>

      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center">
              Recent Publications
            </h2>
            <div className="section-divider mb-12"></div>

            <div className="space-y-6">
              <div className="publication-item bg-white p-6 rounded-lg shadow-md transition-colors duration-200">
                <div className="flex flex-col md:flex-row md:items-center">
                  <div className="md:w-1/6 mb-4 md:mb-0">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="md:w-5/6">
                    <h3 className="text-xl font-semibold mb-2">
                      Novel Mutational Signatures in Pediatric Cancers Reveal
                      Distinct Etiological Processes
                    </h3>
                    <p className="text-gray-600 mb-3">Nature Genetics (2023)</p>
                    <p className="text-gray-700 mb-4">
                      Georgakopoulos-Soares I, Chen S, Thompson E, Rodriguez M,
                      Kim O, Patel A, Nguyen D
                    </p>
                    <div className="flex space-x-3">
                      <a
                        href="#"
                        className="text-primary hover:text-secondary flex items-center"
                      >
                        <i className="far fa-file-pdf mr-1"></i> PDF
                      </a>
                      <a
                        href="#"
                        className="text-primary hover:text-secondary flex items-center"
                      >
                        <i className="fas fa-external-link-alt mr-1"></i> DOI
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="publication-item bg-white p-6 rounded-lg shadow-md transition-colors duration-200">
                <div className="flex flex-col md:flex-row md:items-center">
                  <div className="md:w-1/6 mb-4 md:mb-0">
                    <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-secondary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="md:w-5/6">
                    <h3 className="text-xl font-semibold mb-2">
                      Computational Framework for Integrative Analysis of
                      Mutational Signatures and Clinical Data
                    </h3>
                    <p className="text-gray-600 mb-3">Genome Biology (2022)</p>
                    <p className="text-gray-700 mb-4">
                      Rodriguez M, Georgakopoulos-Soares I, Nguyen D, Chen S,
                      Thompson E
                    </p>
                    <div className="flex space-x-3">
                      <a
                        href="#"
                        className="text-primary hover:text-secondary flex items-center"
                      >
                        <i className="far fa-file-pdf mr-1"></i> PDF
                      </a>
                      <a
                        href="#"
                        className="text-primary hover:text-secondary flex items-center"
                      >
                        <i className="fas fa-external-link-alt mr-1"></i> DOI
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="publication-item bg-white p-6 rounded-lg shadow-md transition-colors duration-200">
                <div className="flex flex-col md:flex-row md:items-center">
                  <div className="md:w-1/6 mb-4 md:mb-0">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-accent"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="md:w-5/6">
                    <h3 className="text-xl font-semibold mb-2">
                      Genomic Instability Patterns Predict Response to
                      Immunotherapy in Advanced Lung Cancer
                    </h3>
                    <p className="text-gray-600 mb-3">Cancer Cell (2022)</p>
                    <p className="text-gray-700 mb-4">
                      Thompson E, Georgakopoulos-Soares I, Chen S, Rodriguez M,
                      Kim O
                    </p>
                    <div className="flex space-x-3">
                      <a
                        href="#"
                        className="text-primary hover:text-secondary flex items-center"
                      >
                        <i className="far fa-file-pdf mr-1"></i> PDF
                      </a>
                      <a
                        href="#"
                        className="text-primary hover:text-secondary flex items-center"
                      >
                        <i className="fas fa-external-link-alt mr-1"></i> DOI
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-8">
              <a
                href="#"
                className="inline-flex items-center text-primary hover:text-secondary font-medium"
              >
                View all publications
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
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
      </div>

      <div className="py-16 bg-light">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center">
              Meet Our Team
            </h2>
            <div className="section-divider mb-12"></div>

            <div className="flex flex-col md:flex-row gap-8 items-center mb-12">
              <div className="md:w-1/3">
                <div className="aspect-square bg-primary/10 rounded-full overflow-hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-full w-full text-primary/40 p-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold mb-2 text-primary">
                  Dr. Ilias Georgakopoulos-Soares
                </h3>
                <p className="text-gray-600 mb-4">Principal Investigator</p>
                <p className="text-gray-700 mb-4">
                  Dr. Georgakopoulos-Soares leads the lab&apos;s research on
                  cancer genomics and computational biology. With a background
                  in both computer science and molecular biology, he brings a
                  unique interdisciplinary perspective to the study of cancer
                  genomes.
                </p>
                <p className="text-gray-700 mb-4">
                  His research focuses on developing computational methods to
                  understand the mutational processes that shape cancer genomes
                  and their implications for cancer development and treatment.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-primary hover:text-secondary">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="text-primary hover:text-secondary">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="#" className="text-primary hover:text-secondary">
                    <i className="fab fa-google"></i>
                  </a>
                  <a href="#" className="text-primary hover:text-secondary">
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="team-card bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300">
                <div className="aspect-square bg-secondary/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-full w-full text-secondary/40 p-12"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    ></path>
                  </svg>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">Dr. Sarah Chen</h3>
                  <p className="text-gray-600 mb-3">Postdoctoral Researcher</p>
                  <p className="text-gray-700 mb-4">
                    Specializes in mutational signature analysis and machine
                    learning applications in cancer genomics.
                  </p>
                  <div className="flex space-x-3">
                    <a href="#" className="text-secondary hover:text-primary">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" className="text-secondary hover:text-primary">
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="team-card bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300">
                <div className="aspect-square bg-primary/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-full w-full text-primary/40 p-12"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    ></path>
                  </svg>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">
                    Dr. Michael Rodriguez
                  </h3>
                  <p className="text-gray-600 mb-3">Postdoctoral Researcher</p>
                  <p className="text-gray-700 mb-4">
                    Focuses on genomic instability mechanisms and their role in
                    cancer evolution and treatment resistance.
                  </p>
                  <div className="flex space-x-3">
                    <a href="#" className="text-primary hover:text-secondary">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" className="text-primary hover:text-secondary">
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="team-card bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300">
                <div className="aspect-square bg-accent/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-full w-full text-accent/40 p-12"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    ></path>
                  </svg>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">
                    Dr. Emma Thompson
                  </h3>
                  <p className="text-gray-600 mb-3">Postdoctoral Researcher</p>
                  <p className="text-gray-700 mb-4">
                    Researches translational applications of cancer genomics,
                    with a focus on biomarker development.
                  </p>
                  <div className="flex space-x-3">
                    <a href="#" className="text-accent hover:text-primary">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" className="text-accent hover:text-primary">
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-8">
              <a
                href="#"
                className="inline-flex items-center text-primary hover:text-secondary font-medium"
              >
                Meet our entire team
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
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
      </div>

      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold">Latest News</h2>
              <a
                href="#"
                className="text-primary hover:text-secondary font-medium"
              >
                View all
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="news-card bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300">
                <div className="h-48 bg-primary/10 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-16 w-16 text-primary/40"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1"
                        d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                      ></path>
                    </svg>
                  </div>
                  <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full shadow-sm">
                    <span className="text-sm font-medium text-primary">
                      June 15, 2023
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    New Publication in Nature Genetics
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Our latest research on novel mutational signatures in
                    pediatric cancers has been published in Nature Genetics.
                    This work identifies previously unknown patterns that may
                    have implications for early detection and treatment.
                  </p>
                  <a
                    href="#"
                    className="text-primary hover:text-secondary font-medium inline-flex items-center"
                  >
                    Read more
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
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

              <div className="news-card bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300">
                <div className="h-48 bg-secondary/10 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-16 w-16 text-secondary/40"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1"
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      ></path>
                    </svg>
                  </div>
                  <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full shadow-sm">
                    <span className="text-sm font-medium text-secondary">
                      May 28, 2023
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    Lab Welcomes New Postdoctoral Researcher
                  </h3>
                  <p className="text-gray-700 mb-4">
                    We are delighted to welcome Dr. Emma Thompson to our team.
                    Dr. Thompson brings expertise in translational cancer
                    genomics and will lead our efforts in developing biomarkers
                    for early cancer detection.
                  </p>
                  <a
                    href="#"
                    className="text-secondary hover:text-primary font-medium inline-flex items-center"
                  >
                    Read more
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
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
          </div>
        </div>
      </div>
    </div>
  );
}
