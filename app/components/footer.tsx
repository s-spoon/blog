export default function Footer() {
  return (
    <div id="site-footer">
      <div className="bg-[#001628] mt-12">
        <div className="flex my-0">
          <div className="bg-[url('/imgs/softnix-team.jpg')] bg-cover bg-no-repeat float-left px-[15px] w-1/2"></div>
          <div className="float-left px-[15px] w-1/2">
            <div className="p-[11%] m-0 not-italic text-[rgba(14,43,92,0.8)] normal-case text-[1.125rem]">
              <div>
                <div className="sr-only"></div>
                <div>
                  <div className="bg-transparent border-none rounded-none p-0"></div>
                  <div>
                    <h3 className="text-white mt-0 mb-4 text-3xl font-semibold font-[Rubik]">
                      Tell us about your project
                    </h3>
                    <div className="mb-[30px] -mx-[30px]">
                      <div className="py-0 px-[30px] w-1/2 float-left">
                        <p>
                          <label className="text-[#8193b2]">
                            Full Name *
                            <span className="relative mt-[5px] block">
                              <input
                                aria-required="true"
                                aria-invalid="false"
                                type="text"
                                name="text-228"
                                className="bg-transparent border-0 border-b-2 border-b-[#8193b2] rounded-none text-white p-0 w-full"
                              ></input>
                            </span>
                          </label>
                        </p>
                      </div>
                      <div className="py-0 px-[30px] w-1/2 float-left">
                        <p>
                          <label className="text-[#8193b2]">
                            Email *
                            <span className="relative mt-[5px] block">
                              <input
                                aria-required="true"
                                aria-invalid="false"
                                type="email"
                                name="email-322"
                                className="bg-transparent border-0 border-b-2 border-b-[#8193b2] rounded-none text-white p-0 w-full"
                              ></input>
                            </span>
                          </label>
                        </p>
                      </div>
                    </div>
                    <div className="mb-[30px] -mx-[30px]">
                      <div className="py-0 px-[30px]">
                        <p>
                          <label className="text-[#8193b2]">
                            Phone *
                            <span className="relative mt-[5px] block">
                              <input
                                aria-required="true"
                                aria-invalid="false"
                                type="tel"
                                name="tel-744"
                                className="bg-transparent border-0 border-b-2 border-b-[#8193b2] rounded-none text-white p-0 w-full"
                              ></input>
                            </span>
                          </label>
                        </p>
                      </div>
                    </div>
                    <div className="mb-[30px] -mx-[30px]">
                      <div className="py-0 px-[30px]">
                        <p>
                          <label className="text-[#8193b2]">
                            How we can help you? *
                            <span className="relative mt-[5px] block">
                              <textarea
                                cols={40}
                                rows={2}
                                maxLength={2000}
                                aria-required="true"
                                aria-invalid="false"
                                name="message"
                                className="bg-transparent border-0 border-b-2 border-b-[#8193b2] rounded-none text-white p-0 w-full"
                              ></textarea>
                            </span>
                          </label>
                        </p>
                      </div>
                    </div>
                    <div className="mb-[10px] -mx-[30px]">
                      <div className="py-0 px-[30px]">
                        <p>
                          <label className="text-[#8193b2]">
                            <span className="my-[5px] mx-0 block">
                              <label className="cursor-pointer flex items-center text-inherit text-[16px]">
                                <input
                                  type="checkbox"
                                  name="receive-message"
                                  value={1}
                                  aria-invalid="false"
                                  className="h-6 w-6"
                                ></input>
                                <span className="ml-1 text-[#7d91ae]">
                                  By checking this box, I Opt-in to receive the
                                  messages from Softnix.
                                </span>
                              </label>
                            </span>
                          </label>
                        </p>
                        <p className="text-[#7d91ae] font-[14px] mb-[16px]">
                          Please read our{" "}
                          <a
                            href="https://softnix.co/privay-policy/"
                            className="text-[#e6332c]"
                          >
                            privacy policy.
                          </a>
                        </p>
                      </div>
                    </div>
                    <div className="mb-[30px] -mx-[30px]">
                      <div className="py-0 px-[30px] float-left w-[58.5%]">
                        <span className="invisible">CAPTCHA</span>
                      </div>
                      <div className="py-0 px-[30px] float-left w-[41.5%]">
                        <p>
                          <input
                            type="submit"
                            className="bg-[#e6332b] border border-[#001528] text-white py-4 px-16 rounded-lg font-semibold float-right"
                          ></input>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative bg-white pt-20 px-0 pb-[50px]">
        <div className="flex w-[1398px] max-w-[calc(90%)] m-auto">
          <div className="my-0 mx-[-15px]">
            <div className="w-1/3 py-0 px-[15px] float-left">
              <div className="w-[70px] mb-2">
                <a href="https://softnix.co/">
                  <img
                    width="120"
                    height="120"
                    src="https://softnix.co/wp-content/uploads/2024/03/softnix-icon.png"
                    className="max-w-full h-auto"
                    alt=""
                    decoding="async"
                    loading="lazy"
                  />
                </a>
              </div>
              <div className="mb-[15px]">
                <div>
                  <p className="mb-2 text-[#001528]">
                    14090 Southwest Freeway, Suite 300,
                    <br />
                    Sugar Land, Texas, 77478
                  </p>
                  <p className="text-[#001528]">
                    P:{" "}
                    <a href="tel:(855) 950-1995" className="text-[#0e2b5c]">
                      (855) 950-1995
                    </a>
                    <br />
                    M:{" "}
                    <a href="mailto:info@softnix.co" className="text-[#0e2b5c]">
                      info@softnix.co
                    </a>
                  </p>
                </div>
              </div>
              <div>
                <div>
                  <div>
                    <a
                      href="https://twitter.com/softnixofficial"
                      target="_blank"
                      rel="noopener"
                      className="mr-[6px] h-auto w-auto leading-[1] opacity-30 text-3xl"
                    >
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                    <a
                      href="https://www.facebook.com/softnixofficial"
                      target="_blank"
                      rel="noopener"
                      className="mx-2 h-auto w-auto leading-[1] opacity-30 text-3xl"
                    >
                      <i className="fa-brands fa-facebook"></i>
                    </a>
                    <a
                      href="https://www.instagram.com/softnix.co"
                      target="_blank"
                      rel="noopener"
                      className="mx-2 h-auto w-auto leading-[1] opacity-30 text-3xl"
                    >
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                    <a
                      href="https://www.linkedin.com/company/softnixofficial"
                      target="_blank"
                      rel="noopener"
                      className="mx-2 h-auto w-auto leading-[1] opacity-30 text-3xl"
                    >
                      <i className="fa-brands fa-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-2/3 py-0 px-[15px] float-left">
              <div className="columns-4">
                <ul className="mx-[-15px] flex flex-wrap">
                  <li className="px-[15px] align-top">
                    <a
                      href="https://softnix.co/services/"
                      data-ps2id-api="true"
                      className="font-semibold relative inline-block text-[#0e2b5c]"
                    >
                      Services
                    </a>
                    <span>
                      <span></span>
                    </span>
                    <ul className="mt-[10px] text-[14px] leading-[150%]">
                      <li className="mb-[10px]">
                        <a
                          href="https://softnix.co/services/app-development/"
                          data-ps2id-api="true"
                          className="relative inline-block text-[#0e2b5c]"
                        >
                          App Development
                        </a>
                      </li>
                      <li className="mb-[10px]">
                        <a
                          href="https://softnix.co/services/website-development/"
                          data-ps2id-api="true"
                          className="relative inline-block text-[#0e2b5c]"
                        >
                          Website Development
                        </a>
                      </li>
                      <li className="mb-[10px]">
                        <a
                          href="https://softnix.co/services/digital-marketing/"
                          data-ps2id-api="true"
                          className="relative inline-block text-[#0e2b5c]"
                        >
                          Digital Marketing
                        </a>
                      </li>
                      <li className="mb-[10px]">
                        <a
                          href="https://softnix.co/services/ui-ux-design/"
                          data-ps2id-api="true"
                          className="relative inline-block text-[#0e2b5c]"
                        >
                          UI &amp; UX Design Services
                        </a>
                      </li>
                      <li className="mb-[10px]">
                        <a
                          href="https://softnix.co/services/saas-development/"
                          data-ps2id-api="true"
                          className="relative inline-block text-[#0e2b5c]"
                        >
                          SaaS Development
                        </a>
                      </li>
                      <li className="mb-[10px]">
                        <a
                          href="https://softnix.co/services/devops/"
                          data-ps2id-api="true"
                          className="relative inline-block text-[#0e2b5c]"
                        >
                          DevOps Solutions
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="px-[15px] align-top">
                    <a
                      href="https://softnix.co/industries/"
                      data-ps2id-api="true"
                      className="font-semibold relative inline-block text-[#0e2b5c]"
                    >
                      Industries
                    </a>
                    <span className="menu-item-toggle">
                      <span></span>
                    </span>
                    <ul className="mt-[10px] text-[14px] leading-[150%]">
                      <li className="mb-[10px]">
                        <a
                          href="https://softnix.co/industries/fintech/"
                          data-ps2id-api="true"
                          className="relative inline-block text-[#0e2b5c]"
                        >
                          FinTech
                        </a>
                      </li>
                      <li className="mb-[10px]">
                        <a
                          href="https://softnix.co/industries/enterprises/"
                          data-ps2id-api="true"
                          className="relative inline-block text-[#0e2b5c]"
                        >
                          Enterprises
                        </a>
                      </li>
                      <li className="mb-[10px]">
                        <a
                          href="https://softnix.co/industries/healthcare/"
                          data-ps2id-api="true"
                          className="relative inline-block text-[#0e2b5c]"
                        >
                          Healthcare
                        </a>
                      </li>
                      <li className="mb-[10px]">
                        <a
                          href="https://softnix.co/industries/elearning/"
                          data-ps2id-api="true"
                          className="relative inline-block text-[#0e2b5c]"
                        >
                          E-Learning
                        </a>
                      </li>
                      <li className="mb-[10px]">
                        <a
                          href="https://softnix.co/industries/entertainment/"
                          data-ps2id-api="true"
                          className="relative inline-block text-[#0e2b5c]"
                        >
                          Entertainment
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="px-[15px] align-top">
                    <a
                      data-ps2id-api="true"
                      className="font-semibold relative inline-block text-[#0e2b5c]"
                    >
                      Company
                    </a>
                    <span className="menu-item-toggle">
                      <span></span>
                    </span>
                    <ul className="mt-[10px] text-[14px] leading-[150%]">
                      <li className="mb-[10px]">
                        <a
                          href="https://softnix.co/about/"
                          data-ps2id-api="true"
                          className="relative inline-block text-[#0e2b5c]"
                        >
                          About
                        </a>
                      </li>
                      <li className="mb-[10px]">
                        <a
                          href="https://softnix.co/case-studies/"
                          data-ps2id-api="true"
                          className="relative inline-block text-[#0e2b5c]"
                        >
                          Case Studies
                        </a>
                      </li>
                      <li className="mb-[10px]">
                        <a
                          href="https://softnix.co/press-release/"
                          data-ps2id-api="true"
                          className="relative inline-block text-[#0e2b5c]"
                        >
                          Press Release
                        </a>
                      </li>
                      <li className="mb-[10px]">
                        <a
                          href="https://softnix.co/why-choose-us/"
                          data-ps2id-api="true"
                          className="relative inline-block text-[#0e2b5c]"
                        >
                          Why Choose Us
                        </a>
                      </li>
                      <li className="mb-[10px]">
                        <a
                          href="https://softnix.co/mission-vision-and-values/"
                          data-ps2id-api="true"
                          className="relative inline-block text-[#0e2b5c]"
                        >
                          Mission, Vision and Values
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="px-[15px] align-top">
                    <a
                      data-ps2id-api="true"
                      className="font-semibold relative inline-block text-[#0e2b5c]"
                    >
                      Support
                    </a>
                    <span className="menu-item-toggle">
                      <span></span>
                    </span>
                    <ul className="mt-[10px] text-[14px] leading-[150%]">
                      <li className="mb-[10px]">
                        <a
                          href="https://softnix.co/contact-us/"
                          data-ps2id-api="true"
                          className="relative inline-block text-[#0e2b5c]"
                        >
                          Contact Us
                        </a>
                      </li>
                      <li className="mb-[10px]">
                        <a
                          href="https://softnix.co/privacy-policy/"
                          data-ps2id-api="true"
                          className="relative inline-block text-[#0e2b5c]"
                        >
                          Privacy Policy
                        </a>
                      </li>
                      <li className="mb-[10px]">
                        <a
                          href="https://softnix.co/terms-and-conditions/"
                          data-ps2id-api="true"
                          className="relative inline-block text-[#0e2b5c]"
                        >
                          Terms and Conditions
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
