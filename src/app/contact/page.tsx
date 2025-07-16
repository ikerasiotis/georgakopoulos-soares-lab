import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const metadata = {
  title: "Georgakopoulos-Soares Lab - Publications",
  description:
    "Explore our latest publications in cancer genomics and computational biology.",
};

export default function Index() {
  return (
    <div className="bg-white text-dark">
      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl">
              Get in touch with the Georgakopoulos-Soares Laboratory
            </p>
          </div>
        </div>
      </div>

      <div className="py-16 contact-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
              <h2 className="text-2xl font-bold text-primary mb-8 text-center">
                Laboratory Information
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex items-start mb-8">
                  <div className="bg-primary/10 rounded-full p-3 mr-4">
                    <FontAwesomeIcon
                      icon={["fas", "map-marker-alt"]}
                      className="text-primary text-xl"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Address</h3>
                    <p className="text-gray-600">
                      Department of Biochemistry and Molecular Biology
                      <br />
                      Penn State University
                      <br />
                      107 Althouse Laboratory
                      <br />
                      University Park, PA 16802
                    </p>
                  </div>
                </div>

                <div className="flex items-start mb-8">
                  <div className="bg-primary/10 rounded-full p-3 mr-4">
                    <FontAwesomeIcon
                      icon={["fas", "envelope"]}
                      className="text-primary text-xl"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Email</h3>
                    <p className="text-gray-600">
                      <a
                        href="mailto:ilias@psu.edu"
                        className="text-primary hover:underline"
                      >
                        ilias@psu.edu
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start mb-8">
                  <div className="bg-primary/10 rounded-full p-3 mr-4">
                    <FontAwesomeIcon
                      icon={["fas", "phone"]}
                      className="text-primary text-xl"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Phone</h3>
                    <p className="text-gray-600">
                      Lab: (814) 865-XXXX
                      <b />
                      Office: (814) 865-XXXX
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary/10 rounded-full p-3 mr-4">
                    <FontAwesomeIcon
                      icon={["fas", "clock"]}
                      className="text-primary text-xl"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Office Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 5:00 PM
                      <br />
                      Saturday - Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
              <h2 className="text-2xl font-bold text-primary mb-8 text-center">
                Connect With Us
              </h2>

              <div className="flex flex-wrap justify-center gap-6">
                <a
                  href="https://twitter.com/IliasGeorgakop1"
                  target="_blank"
                  className="flex items-center bg-[#1DA1F2]/10 hover:bg-[#1DA1F2]/20 text-[#1DA1F2] px-6 py-3 rounded-md transition-colors"
                >
                  <FontAwesomeIcon
                    icon={["fab", "twitter"]}
                    className="text-xl mr-3"
                  />{" "}
                  Twitter
                </a>
                <a
                  href="https://www.linkedin.com/in/ilias-georgakopoulos-soares/"
                  target="_blank"
                  className="flex items-center bg-[#0077B5]/10 hover:bg-[#0077B5]/20 text-[#0077B5] px-6 py-3 rounded-md transition-colors"
                >
                  <FontAwesomeIcon
                    icon={["fab", "linkedin"]}
                    className="text-xl mr-3"
                  />{" "}
                  LinkedIn
                </a>
                <a
                  href="https://github.com/ilias-georgakop"
                  target="_blank"
                  className="flex items-center bg-[#333]/10 hover:bg-[#333]/20 text-[#333] px-6 py-3 rounded-md transition-colors"
                >
                  <FontAwesomeIcon
                    icon={["fab", "github"]}
                    className="text-xl mr-3"
                  />{" "}
                  GitHub
                </a>
                <a
                  href="https://scholar.google.com/"
                  target="_blank"
                  className="flex items-center bg-[#4285F4]/10 hover:bg-[#4285F4]/20 text-[#4285F4] px-6 py-3 rounded-md transition-colors"
                >
                  <FontAwesomeIcon
                    icon={["fas", "graduation-cap"]}
                    className="text-xl mr-3"
                  />{" "}
                  Google Scholar
                </a>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <h2 className="text-2xl font-bold text-primary p-8 text-center">
                Find Us
              </h2>
              <div className="map-responsive">
                {/* Placeholder Map */}
                <div className="w-full h-64 bg-gray-200 flex items-center justify-center">
                  <p className="text-gray-500">Map Placeholder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
