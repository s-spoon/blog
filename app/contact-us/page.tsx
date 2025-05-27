"use client";

export default function ContactUs() {
  return (
    <header>
      <div className="flex w-[1398px] max-w-[calc(90%+30px)] m-auto justify-center my-20">
        <div className="w-1/2 mx-auto text-[#001528] font-semibold">
          <h1 className="flex justify-center text-5xl">Contact Us</h1>
          <p className="my-4">
            Looking for a full-scale development agency? The get in touch and
            we'll be glad to talk to you.
          </p>
        </div>
      </div>
      <div className="box-border flex flex-wrap">
        <div className="flex w-[1398px] max-w-[calc(90%+30px)] m-auto">
          <div className="w-1/3">
            <div className="box-border px-[15px] w-full">
              <div className="text-center flex flex-col p-[10%] h-full mb-[30px]">
                <h4 className="mb-[10px] font-medium text-[#001528] text-[1.25rem] leading-[1.35em] font-semibold">
                  Live Chat Support
                </h4>
                <div>
                  <p className="text-center text-[15px] text-[#001528]">
                    Chat with our sales & support team for quick answers.
                  </p>
                </div>
                <div className="mt-[30px] relative z-[2] h-20">
                  <img
                    className="absolute h-full bottom-0 left-1/2 translate-x-[-50%] transition-transform duration-[350ms] ease-[cubic-bezier(0.12,0.845,0.305,1)]"
                    decoding="async"
                    src="https://softnix.co/wp-content/uploads/2018/08/conversations-4872_af60b258-251e-41af-b238-dfb706d7b3d4.svg"
                    alt="Live Chat Support"
                  />
                </div>

                <div className="mt-[30px]">
                  <a
                    className="overflow-visible bg-transparent h-auto leading-[1] p-[10px_18px_8px_0] border-none text-[#001528] font-semibold"
                    href="https://softnix.co/services/website-development/"
                  >
                    Start Live Chat Now
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/3">
            <div className="box-border px-[15px] w-full">
              <div className="text-center flex flex-col p-[10%] h-full mb-[30px]">
                <h4 className="mb-[10px] font-medium text-[#001528] text-[1.25rem] leading-[1.35em] font-semibold">
                  Headquarters
                </h4>
                <div>
                  <p className="text-center text-[15px] text-[#001528]">
                    14090 Southwest Freeway, Suite 300, Sugar Land, Texas, 77478
                    United States.
                  </p>
                </div>
                <div className="mt-[30px] relative z-[2] h-[80px]">
                  <img
                    className="absolute h-full bottom-0 left-1/2 translate-x-[-50%] transition-transform duration-[350ms] ease-[cubic-bezier(0.12,0.845,0.305,1)]"
                    decoding="async"
                    src="https://softnix.co/wp-content/uploads/2018/08/navigation-map-800_5d1a8f90-76b5-4f83-9c97-ac5cced141cf.svg"
                    alt="Headquarters"
                  />
                </div>

                <div className="mt-[30px]">
                  <a
                    className="overflow-visible bg-transparent h-auto leading-[1] p-[10px_18px_8px_0] border-none text-[#001528] font-semibold"
                    href="https://softnix.co/services/app-development/"
                  >
                    View Locations
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/3">
            <div className="box-border px-[15px] w-full">
              <div className="text-center flex flex-col p-[10%] h-full mb-[30px]">
                <h4 className="mb-[10px] font-medium text-[#001528] text-[1.25rem] leading-[1.35em] font-semibold">
                  Working hours
                </h4>
                <div>
                  <p className="text-center text-[15px] text-[#001528]">
                    Open Monday to Friday 08:00 AM – 05:00 PM (CST)
                  </p>
                </div>
                <div className="mt-[30px] relative z-[2] h-[80px]">
                  <img
                    className="absolute h-full bottom-0 left-1/2 translate-x-[-50%] transition-transform duration-[350ms] ease-[cubic-bezier(0.12,0.845,0.305,1)]"
                    decoding="async"
                    src="https://softnix.co/wp-content/uploads/2018/08/watch-5912_810a6d61-7257-4905-a019-e0a2d3f1a1ac.svg"
                    alt="Working hours"
                  />
                </div>

                <div className="mt-[30px]">
                  <a
                    className="overflow-visible bg-transparent h-auto leading-[1] p-[10px_18px_8px_0] border-none text-[#001528] font-semibold"
                    href="https://softnix.co/services/saas-development/"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-[1398px] max-w-[calc(90%+30px)] m-auto justify-center">
        <div className="box-border px-[15px] w-full">
          <div className="h-[10px]">
            <span></span>
          </div>
          <div>
            <p className="text-center text-[15px] text-[#001528]">
              You can also email or call us at{" "}
              <a
                className="border-b-[1px] border-dotted border-b-[rgba(0,0,0,0.5)]"
                href="https://softnix.co/#site-footer"
              >
                <span className="text-[#e6332c] font-semibold">
                  info@softnix.co
                </span>
              </a>
              {" | "}
              <a
                className="border-b-[1px] border-dotted border-b-[rgba(0,0,0,0.5)]"
                href="https://softnix.co/#site-footer"
              >
                <span className="text-[#e6332c] font-semibold">
                  (855) 950-1995
                </span>
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="h-[50px]">
        <span></span>
      </div>
    </header>
  );
}
