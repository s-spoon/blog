export default function Footer() {
  return (
    <footer id="site-footer">
      {/* Contact Form Section */}
      <div className="bg-[#001628] mt-12 flex flex-wrap">
        <div className="w-full md:w-1/2 bg-[url('/imgs/team.jpg')] bg-cover bg-no-repeat" />
        <div className="w-full md:w-1/2 px-[15px] pt-[5%] pb-[2%] text-[rgba(14,43,92,0.8)] text-[1.125rem]">
          <h3 className="text-white text-3xl font-semibold font-[Rubik] mb-4 px-[30px]">
            Tell us about your project
          </h3>
          <form className="text-white">
            <div className="flex flex-wrap mb-[30px]">
              <div className="w-full md:w-1/2 px-[30px]">
                <label className="text-[#8193b2] block">
                  Full Name *
                  <input
                    required
                    type="text"
                    name="text-228"
                    className="bg-transparent border-0 border-b-2 border-[#8193b2] w-full mt-[5px] focus:outline-none focus:ring-0"
                  />
                </label>
              </div>
              <div className="w-full md:w-1/2 px-[30px]">
                <label className="text-[#8193b2] block">
                  Email *
                  <input
                    required
                    type="email"
                    name="email-322"
                    className="bg-transparent border-0 border-b-2 border-[#8193b2] w-full mt-[5px] focus:outline-none focus:ring-0"
                  />
                </label>
              </div>
            </div>
            <div className="mb-[30px] px-[30px]">
              <label className="text-[#8193b2] block">
                Phone *
                <input
                  required
                  type="tel"
                  name="tel-744"
                  className="bg-transparent border-0 border-b-2 border-[#8193b2] w-full mt-[5px] focus:outline-none focus:ring-0"
                />
              </label>
            </div>
            <div className="mb-[30px] px-[30px]">
              <label className="text-[#8193b2] block">
                How we can help you? *
                <textarea
                  required
                  name="message"
                  rows={2}
                  maxLength={2000}
                  className="bg-transparent border-0 border-b-2 border-[#8193b2] w-full mt-[5px] focus:outline-none focus:ring-0"
                />
              </label>
            </div>
            <div className="mb-[10px] px-[30px]">
              <label className="flex items-center text-[#7d91ae]">
                <input
                  type="checkbox"
                  name="receive-message"
                  className="h-6 w-6 mr-2"
                />
                By checking this box, I opt-in to receive messages from our
                company.
              </label>
              <p className="text-[#7d91ae] text-sm mt-2">
                Please read our{" "}
                <a href="#" className="text-[#e6332c] underline">
                  privacy policy.
                </a>
              </p>
            </div>
            <div className="flex flex-wrap px-[30px] mb-[30px]">
              <div className="w-full md:w-[58.5%] invisible">CAPTCHA</div>
              <div className="w-full md:w-[41.5%] text-right">
                <button
                  type="submit"
                  className="bg-[#e6332b] border border-[#001528] text-white py-4 px-16 rounded-lg font-semibold"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Info & Links Section */}
      <div className="bg-white pt-20 pb-[50px] px-4">
        <div className="max-w-[90%] w-[1398px] mx-auto flex flex-wrap">
          {/* Contact Info */}
          <div className="w-full lg:w-1/3 px-[15px] mb-6">
            <div className="mb-4 w-[70px]">
              <a href="/">
                <img
                  src="/imgs/icon-logo.png"
                  alt="Softnix"
                  width="120"
                  height="120"
                  className="max-w-full h-auto rounded-lg"
                  loading="lazy"
                />
              </a>
            </div>
            {/* <address className="text-[#001528] not-italic mb-4">
              14090 Southwest Freeway, Suite 300,
              <br />
              Sugar Land, Texas, 77478
              <br />
              P:{" "}
              <a href="tel:(855) 950-1995" className="text-[#0e2b5c]">
                (855) 950-1995
              </a>
              <br />
              M:{" "}
              <a href="mailto:info@softnix.co" className="text-[#0e2b5c]">
                info@softnix.co
              </a>
            </address> */}
            {/* <div className="flex space-x-3 text-3xl opacity-30">
              <a href="#">
                <i className="fa-brands fa-twitter" />
              </a>
              <a href="#">
                <i className="fa-brands fa-facebook" />
              </a>
              <a href="#">
                <i className="fa-brands fa-instagram" />
              </a>
              <a href="#">
                <i className="fa-brands fa-linkedin" />
              </a>
            </div> */}
          </div>

          {/* Navigation Links */}
          <div className="w-full lg:w-2/3 px-[15px]">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                {
                  title: "Services",
                  links: [
                    "App Development",
                    "Website Development",
                    "Digital Marketing",
                    "UI & UX Design",
                    "SaaS Development",
                    "DevOps Solutions",
                  ],
                },
                {
                  title: "Industries",
                  links: [
                    "FinTech",
                    "Enterprises",
                    "Healthcare",
                    "E-Learning",
                    "Entertainment",
                  ],
                },
                {
                  title: "Company",
                  links: [
                    // "About",
                    "Case Studies",
                    // "Press Release",
                    // "Why Choose Us",
                    // "Mission, Vision and Values",
                  ],
                },
                {
                  title: "Support",
                  links: [
                    "Contact Us",
                    // "Privacy Policy",
                    // "Terms and Conditions",
                  ],
                },
              ].map((section) => (
                <div key={section.title}>
                  <h4 className="font-semibold mb-2 text-[#001528] text-base">
                    {section.title}
                  </h4>
                  <ul className="space-y-2 leading-[150%]">
                    {section.links.map((link) => (
                      <li key={link}>
                        <a
                          href={`/${section.title.toLowerCase()}/${link
                            .toLowerCase()
                            .replace(/[^a-z0-9\s]/g, "")
                            .replace(/\s+/g, "-")}`}
                          className="text-[14px] text-[#0e2b5c] hover:underline"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
