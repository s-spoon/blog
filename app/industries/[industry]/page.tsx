"use client";

import { useParams } from "next/navigation";
import industryCTA from "../../../public/industryCTA.json";
import { useState } from "react";
import Image from "next/image";
import { Work_Sans } from "next/font/google";

import starIcon from "../../../public/imgs/icon-star.svg";
import plusIcon from "../../../public/imgs/icon-plus.svg";
import minusIcon from "../../../public/imgs/icon-minus.svg";

const workSans = Work_Sans({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

export default function IndustryPage() {
  const params = useParams();
  const industry = params?.industry as string;

  const industryData = industryCTA[industry];

  const firstSection = industryData["first-section"];
  const overview = industryData["overview"];
  const services = industryData["services"];
  const process = industryData["process"];
  const questions = industryData["faqs"];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [answerHeights, setAnswerHeights] = useState<number[]>(
    Array(questions.length).fill(0)
  );

  const toggleQuestion = (idx: number) => {
    setActiveIndex(activeIndex === idx ? null : idx);
    const newAnswerHeights = Array(questions.length).fill(0);
    if (activeIndex !== idx)
      newAnswerHeights[idx] = document.getElementById(
        `answer-${idx}`
      )?.scrollHeight;
    setAnswerHeights(newAnswerHeights);
  };

  const kebabToTitle = (str: string) => {
    return str
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <div>
      <section
        className="bg-[#e6332c] bg-center bg-no-repeat bg-cover [background-blend-mode:multiply]"
        style={{ backgroundImage: `url(${firstSection.img})` }}
      >
        <div className="pt-[120px] pb-[100px]">
          <div className="flex w-[1398px] max-w-[calc(90%+30px)] m-auto items-center justify-center">
            <div className="px-40">
              <div className="box-border px-[15px] w-full">
                <div className="text-[3rem] text-white text-center">
                  {firstSection.one}
                </div>
                <div className="text-[5rem] text-white leading-[1.2] text-center font-semibold">
                  {firstSection.two}
                </div>
                <div className="w-full flex justify-center my-4">
                  <span className="block relative top-[1px] h-px border-b-[5px] border-white w-[10%]"></span>
                </div>
                <div className="text-center">
                  <a
                    href="#"
                    className="leading-inherit p-[15px_50px_10px_10px] h-auto border-none bg-transparent text-white uppercase tracking-[1px] font-semibold"
                  >
                    {firstSection.three}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="overview">
        <div className="flex w-[1398px] max-w-[calc(90%+30px)] m-auto">
          <div className="box-border px-[15px] w-full">
            <div className="flex justify-center items-center static m-0 p-0 w-[1306.8px] h-[62.5px] transition-all transform-none">
              <ul>
                <li className="inline-block mx-[15px] my-0 text-[#001528] font-semibold">
                  <a
                    href="#overivew"
                    className="py-[20px] px-0 text-[15px] text-inherit"
                  >
                    Overview
                  </a>
                </li>
                <li className="inline-block mx-[15px] my-0 text-[#001528] font-semibold">
                  <a
                    href="#services"
                    className="py-[20px] px-0 text-[15px] text-inherit"
                  >
                    Services
                  </a>
                </li>
                <li className="inline-block mx-[15px] my-0 text-[#001528] font-semibold">
                  <a
                    href="#process"
                    className="py-[20px] px-0 text-[15px] text-inherit"
                  >
                    Process
                  </a>
                </li>
                <li className="inline-block mx-[15px] my-0 text-[#001528] font-semibold">
                  <a
                    href="#values"
                    className="py-[20px] px-0 text-[15px] text-inherit"
                  >
                    Core Values
                  </a>
                </li>
                <li className="inline-block mx-[15px] my-0 text-[#001528] font-semibold">
                  <a
                    href="#expertise"
                    className="py-[20px] px-0 text-[15px] text-inherit"
                  >
                    Expertise
                  </a>
                </li>
                <li className="inline-block mx-[15px] my-0 text-[#001528] font-semibold">
                  <a
                    href="#reviews"
                    className="py-[20px] px-0 text-[15px] text-inherit"
                  >
                    Reviews
                  </a>
                </li>
                <li className="inline-block mx-[15px] my-0 text-[#001528] font-semibold">
                  <a
                    href="#faqs"
                    className="py-[20px] px-0 text-[15px] text-inherit"
                  >
                    FAQ's
                  </a>
                </li>
                <li className="inline-block mx-[15px] my-0 text-[#001528] font-semibold">
                  <a
                    href="#site-footer"
                    className="py-[20px] px-0 text-[15px] text-inherit"
                  >
                    Contact us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex w-[1398px] max-w-[calc(90%+30px)] m-auto">
          <div className="box-border px-52 py-12 w-full">
            <h6 className="text-[10px] text-[#627792] text-center font-semibold tracking-[4px] uppercase">
              Overview
            </h6>
            <div className="h-[6px]">
              <span></span>
            </div>
            <h2 className="text-center font-medium text-[#001528] text-[2.25rem] leading-[1.2em] font-semibold">
              {overview.title}
            </h2>
            <div className="h-[36px]">
              <span></span>
            </div>
            <div className="text-[#001528] text-base">
              <p className="mb-[20px]">{overview.content}</p>
              <ul className="my-[10px] pl-8 list-disc">
                <li>
                  <strong>{overview.li11}</strong> {overview.li12}
                </li>
                <li>
                  <strong>{overview.li21}</strong> {overview.li22}
                </li>
                <li>
                  <strong>{overview.li31}</strong> {overview.li32}
                </li>
              </ul>
              <p>{overview.footer}</p>
            </div>
          </div>
        </div>
      </section>
      <section id="services" className="mb-12">
        <div className="flex w-[1398px] max-w-[calc(90%+30px)] m-auto">
          <div className="box-border px-52 py-12 w-full">
            <h6 className="text-[10px] text-[#627792] text-center font-semibold tracking-[4px] uppercase">
              Services
            </h6>
            <div className="h-[6px]">
              <span></span>
            </div>
            <h2 className="text-center font-medium text-[#001528] text-[2.25rem] leading-[1.2em] font-semibold">
              {services.title}
            </h2>
            <div className="h-[36px]">
              <span></span>
            </div>
            <div className="text-[#001528] text-base">
              <p className="mb-[20px]">{services.content}</p>
            </div>
          </div>
        </div>
        <div className="flex w-[1398px] max-w-[calc(90%+30px)] m-auto">
          <div className="w-1/5">
            <div className="box-border px-[15px] w-full text-center text-[#001528]">
              <div className="flex justify-center">
                <img
                  className="mb-3"
                  decoding="async"
                  src="https://softnix.co/wp-content/uploads/2018/08/royal-2995_51c8d05c-efe9-46d9-9a17-4b4e8fccfaad.svg"
                  alt="Years experience"
                />
              </div>
              <h3 className="text-[1.87rem] font-normal relative font-inherit font-semibold">
                <span className="mx-[3px]">9</span>
                <span className="opacity-50 text-4xl">+</span>
              </h3>
              <div className="text-[15px] leading-[1.5]">Years experience</div>
            </div>
          </div>
          <div className="w-1/5">
            <div className="box-border px-[15px] w-full text-center text-[#001528]">
              <div className="flex justify-center">
                <img
                  className="mb-3"
                  decoding="async"
                  src="https://softnix.co/wp-content/uploads/2018/09/diploma-2983_a6bb0b64-dbc1-431e-ac00-a83597982a0.svg"
                  alt="Certified experts"
                />
              </div>
              <h3 className="text-[1.87rem] font-normal relative font-inherit font-semibold">
                <span className="mx-[3px]">250</span>
              </h3>
              <div className="text-[15px] leading-[1.5]">Certified experts</div>
            </div>
          </div>
          <div className="w-1/5">
            <div className="box-border px-[15px] w-full text-center text-[#001528]">
              <div className="flex justify-center">
                <img
                  className="mb-3"
                  decoding="async"
                  src="https://softnix.co/wp-content/uploads/2018/08/user-group-2874_87351201-7b45-463a-9b86-0ebd80aa8fa0.svg"
                  alt="Satisfaction guaranteed"
                />
              </div>
              <h3 className="text-[1.87rem] font-normal relative font-inherit font-semibold">
                <span className="mx-[3px]">100</span>
                <span className="opacity-50 text-3xl">%</span>
              </h3>
              <div className="text-[15px] leading-[1.5]">
                Satisfaction guaranteed
              </div>
            </div>
          </div>
          <div className="w-1/5">
            <div className="box-border px-[15px] w-full text-center text-[#001528]">
              <div className="flex justify-center">
                <img
                  className="mb-3"
                  decoding="async"
                  src="https://softnix.co/wp-content/uploads/2018/09/world-map-826_e5eaf722-e834-484a-b7a6-0b1f4ab98ee.svg"
                  alt="Global reach"
                />
              </div>
              <h3 className="text-[1.87rem] font-normal relative font-inherit font-semibold">
                <span className="mx-[3px]">2</span>
                <span className="opacity-50 text-3xl">countries</span>
              </h3>
              <div className="text-[15px] leading-[1.5]">Global reach</div>
            </div>
          </div>
          <div className="w-1/5">
            <div className="box-border px-[15px] w-full text-center text-[#001528]">
              <div className="flex justify-center">
                <img
                  className="mb-3"
                  decoding="async"
                  src="https://softnix.co/wp-content/uploads/2018/09/headphones-user-5252_ca8ffcdb-4e36-4baa-8e93-4fb725476d7.svg"
                  alt="Service desk"
                />
              </div>
              <h3 className="text-[1.87rem] font-normal relative font-inherit font-semibold">
                <span className="mx-[3px]">24</span>
                <span className="opacity-50 text-3xl">/7</span>
              </h3>
              <div className="text-[15px] leading-[1.5]">Service desk</div>
            </div>
          </div>
        </div>
        <div className="box-border px-[15px] w-full mt-8">
          <div>
            <div>
              <p className="text-center text-[15px] text-[#001528]">
                {services.footer}{" "}
                <a
                  className="border-b-[1px] border-dotted border-b-[rgba(0,0,0,0.5)]"
                  href="#"
                >
                  <span className="text-[#e6332c] font-semibold">Hire us</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="process" className="bg-[#001528]">
        <div className="flex w-[1398px] max-w-[calc(90%+30px)] m-auto">
          <div className="box-border px-20 py-12 w-full">
            <h6 className="text-[10px] text-[#e6332c] text-center font-semibold tracking-[4px] uppercase">
              Here's how we do it
            </h6>
            <div className="h-[6px]">
              <span></span>
            </div>
            <h2 className="text-center font-medium text-white text-[2.25rem] leading-[1.2em] font-semibold">
              {process.title}
            </h2>
          </div>
        </div>
        <div className="flex w-[1398px] max-w-[calc(90%+30px)] m-auto">
          <div className="w-1/4">
            <div className="box-border px-[15px] w-full">
              <div>
                <div className="pr-[10%] py-[30px] pl-[10%] bg-[rgba(255,255,255,0.05)] rounded-[5px]">
                  <h6 className="flex justify-center text-white order-2 mb-[15px] font-semibold">
                    {process.subtitle1}
                  </h6>
                  <div className="order-3 text-center">
                    <p>
                      <span className="text-[#9b9aad]">
                        {process.subcontent1}
                      </span>
                    </p>
                  </div>
                </div>
                <div className="h-[30px]">
                  <span></span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/4">
            <div className="box-border px-[15px] w-full">
              <div>
                <div className="pr-[10%] py-[30px] pl-[10%] bg-[rgba(255,255,255,0.05)] rounded-[5px]">
                  <h6 className="flex justify-center text-white order-2 mb-[15px] font-semibold">
                    {process.subtitle2}
                  </h6>
                  <div className="order-3 text-center">
                    <p>
                      <span className="text-[#9b9aad]">
                        {process.subcontent2}
                      </span>
                    </p>
                  </div>
                </div>
                <div className="h-[30px]">
                  <span></span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/4">
            <div className="box-border px-[15px] w-full">
              <div>
                <div className="pr-[10%] py-[30px] pl-[10%] bg-[rgba(255,255,255,0.05)] rounded-[5px]">
                  <h6 className="flex justify-center text-white order-2 mb-[15px] font-semibold">
                    {process.subtitle3}
                  </h6>
                  <div className="order-3 text-center">
                    <p>
                      <span className="text-[#9b9aad]">
                        {process.subcontent3}
                      </span>
                    </p>
                  </div>
                </div>
                <div className="h-[30px]">
                  <span></span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/4">
            <div className="box-border px-[15px] w-full">
              <div>
                <div className="pr-[10%] py-[30px] pl-[10%] bg-[rgba(255,255,255,0.05)] rounded-[5px]">
                  <h6 className="flex justify-center text-white order-2 mb-[15px] font-semibold">
                    {process.subtitle4}
                  </h6>
                  <div className="order-3 text-center">
                    <p>
                      <span className="text-[#9b9aad] text-center">
                        {process.subcontent4}
                      </span>
                    </p>
                  </div>
                </div>
                <div className="h-[30px]">
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="box-border px-[15px] w-full pb-16">
          <div>
            <p className="text-center text-[15px] text-[#e6332c]">
              <a href="#">Let's Discuss </a>
              <span className="text-white font-semibold">
                Your Idea & Turn Your Idea into Reality!
              </span>
            </p>
          </div>
        </div>
      </section>
      <section id="values">
        <div className="flex w-[1398px] max-w-[calc(90%+30px)] m-auto">
          <div className="box-border px-52 py-12 w-full">
            <h6 className="text-[10px] text-[#627792] text-center font-semibold tracking-[4px] uppercase">
              Core values
            </h6>
            <div className="h-[6px]">
              <span></span>
            </div>
            <h2 className="text-center font-medium text-[#001528] text-[2.25rem] leading-[1.2em] font-semibold">
              Our Guiding Core Values
            </h2>
          </div>
        </div>
        <div className="flex w-[1398px] max-w-[calc(90%+30px)] m-auto">
          <div className="box-border px-[15px] w-full">
            <ul className="table table-fixed text-[15px] w-[calc(100%+100px)] -mx-[50px] mb-[30px] p-0">
              <li className="table-cell px-[50px] relative align-top">
                <div>
                  <div className="mb-[30px] text-center px-[75px] relative">
                    <img
                      decoding="async"
                      src="https://softnix.co/wp-content/uploads/2024/05/integrity-icon.svg"
                      alt="integrity-icon"
                    />
                  </div>
                  <div className="relative pl-[75px]">
                    <h4 className="mb-[15px] font-medium text-[1.25rem] leading-[1.35em] text-[#001528]">
                      Innovation
                    </h4>
                    <p className="my-0 text-[#001528]">
                      Constantly exploring new ways to enhance digital
                      experience with innovation.
                    </p>
                  </div>
                </div>
              </li>
              <li className="table-cell px-[50px] relative align-top">
                <div>
                  <div className="mb-[30px] text-center px-[75px] relative">
                    <img
                      decoding="async"
                      src="https://softnix.co/wp-content/uploads/2024/05/innovation-icon.svg"
                      alt="innovation-icon"
                    />
                  </div>
                  <div className="relative pl-[75px]">
                    <h4 className="mb-[15px] font-medium text-[1.25rem] leading-[1.35em] text-[#001528]">
                      Integrity
                    </h4>
                    <p className="my-0 text-[#001528]">
                      Upholding honesty, ensuring transparency in every client
                      interaction and project.
                    </p>
                  </div>
                </div>
              </li>
              <li className="table-cell px-[50px] relative align-top">
                <div>
                  <div className="mb-[30px] text-center px-[75px] relative">
                    <img
                      decoding="async"
                      src="https://softnix.co/wp-content/uploads/2024/05/focus-icon.svg"
                      alt="focus-icon"
                    />
                  </div>
                  <div className="relative pl-[75px]">
                    <h4 className="mb-[15px] font-medium text-[1.25rem] leading-[1.35em] text-[#001528]">
                      Customer Focus
                    </h4>
                    <p className="my-0 text-[#001528]">
                      Always prioritizing client needs first, aiming for their
                      satisfaction and success.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section
        id="expertise"
        className="flex w-[1398px] max-w-[calc(90%+30px)] m-auto"
      >
        <div className="w-1/2 px-[17.5px]">
          <h6 className="text-[10px] text-[#627792] text-left uppercase tracking-[4px] font-semibold mt-[50px] mb-[10px]">
            Expertise
          </h6>
          <h3 className="font-medium text-[#001528] text-[1.875rem] leading-[1.2em] text-left mb-[30px]">
            Let's Work Together!
          </h3>
          <p className="text-[#001528] mb-[70px]">
            Softnix stands out as the best Shopify development company by
            offering years of expertise, custom solutions personalized to each
            client's needs, and a proven track record of successful Shopify
            store launches that enhance user experience and drive significant
            business growth.
          </p>
          <div className="flex">
            <div className="w-1/2 box-border w-full">
              <h3 className="text-[1.87rem] font-normal relative font-inherit font-semibold">
                <span className="mx-[3px]">300</span>
                <span className="opacity-50 text-4xl">+</span>
              </h3>
              <div className="text-[15px] leading-[1.5] text-[#001528]">
                Projects Successfully Completed.
              </div>
            </div>
            <div className="w-1/2 box-border w-full">
              <h3 className="text-[1.87rem] font-normal relative font-inherit font-semibold">
                <span className="mx-[3px]">100</span>
                <span className="opacity-50 text-3xl">%</span>
              </h3>
              <div className="text-[15px] leading-[1.5] text-[#001528]">
                Satisfaction Rate Achieved and Growing.
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2 px-[17.5px]">
          <img
            decoding="async"
            src="https://softnix.co/wp-content/uploads/2024/05/shopify-development-small.jpg"
            width={1170}
            height={700}
            loading="lazy"
          />
        </div>
      </section>
      <section id="reviews" className="my-[80px]">
        <div className="w-[1398px] max-w-[calc(90%+30px)] m-auto">
          <h6 className="text-[10px] text-[#001528] text-center uppercase tracking-[4px] font-semibold mb-[6px]">
            Reviews
          </h6>
          <p className="text-[30px] text-[#001528] text-center font-medium px-52">
            Softnix transformed our online store with their Shopify theme
            development. Highly recommend their expert team for anyone looking
            to stand out.{" "}
          </p>
          <h6 className="text-[15px] text-[#001528] text-center font-semibold my-[20px]">
            - Jake Morrison -
          </h6>
        </div>
        <div className="flex w-[1398px] max-w-[calc(90%+30px)] m-auto relative justify-center">
          <div className="left-0 top-0 px-[15px] mb-[30px]">
            <div className="relative overflow-hidden flex flex-col-reverse bg-[#d93925] text-center px-[15%] justify-between rounded-[5px]">
              <a href="#" className="absolute inset-0"></a>
              <figure className="relative z-[2] bg-white m-0 px-[20px] py-0 border-l-[5px] border-l-[#eee] rounded-t-[5px]">
                <div className="text-[14px] text-left pt-[20px]">
                  <a href="#" className="text-inherit">
                    Website
                  </a>
                  <a href="#">
                    <img
                      decoding="async"
                      src="https://softnix.co/wp-content/uploads/2024/08/Time-Maxx-Header-Image-800x450.jpg"
                      width={220}
                      className="mt-[10px]"
                      alt="Time Maxx Header"
                      title="Time-Maxx-Header-Image"
                    />
                  </a>
                </div>
              </figure>
              <div className="flex h-full items-center relative z-[2]">
                <div className="none">
                  <div className="flex justify-center">
                    <img
                      decoding="async"
                      src="https://softnix.co/wp-content/uploads/2024/08/Time-Maxx-Logo.png"
                      className="order-1 mt-[50px] mb-[25px] h-20"
                    />
                  </div>
                  <h2 className="order-2 m-0 text-[1.25rem] leading-[1.385em] text-white font-semibold">
                    Time Maxx Stores
                  </h2>
                  <div className="order-3 my-[15px] mb-[25px] text-[rgba(255,255,255,0.7)] font-semibold">
                    Overview Time Maxx Stores is a convenience retail br
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="left-[33.3329%] top-0 px-[15px] mb-[30px]">
            <div className="relative overflow-hidden flex flex-col-reverse bg-[#f37421] text-center px-[15%] justify-between rounded-[5px]">
              <a href="#" className="absolute inset-0"></a>
              <figure className="relative z-[2] bg-white m-0 px-[20px] py-0 border-l-[5px] border-l-[#eee] rounded-t-[5px]">
                <div className="text-[14px] text-left pt-[20px]">
                  <a href="#" className="text-inherit">
                    Website
                  </a>
                  <a href="#">
                    <img
                      decoding="async"
                      src="https://softnix.co/wp-content/uploads/2024/10/Pumps-Industrial-Equipment-800x450.jpg"
                      width={220}
                      className="mt-[10px]"
                      alt="Time Maxx Header"
                      title="Time-Maxx-Header-Image"
                    />
                  </a>
                </div>
              </figure>
              <div className="flex h-full items-center relative z-[2]">
                <div className="none">
                  <div className="flex justify-center">
                    <img
                      decoding="async"
                      src="https://softnix.co/wp-content/uploads/2024/10/herrpump-logo-1.png"
                      className="order-1 mt-[50px] mb-[25px] h-20"
                    />
                  </div>
                  <h2 className="order-2 m-0 text-[1.25rem] leading-[1.385em] text-white font-semibold">
                    Herr Pump
                  </h2>
                  <div className="order-3 my-[15px] mb-[25px] text-[rgba(255,255,255,0.7)] font-semibold">
                    Overview Herr Pump is a renowned provider of industr
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="left-[66.6658%] top-0 px-[15px] mb-[30px]">
            <div className="relative overflow-hidden flex flex-col-reverse bg-[#001844] text-center px-[15%] justify-between rounded-[5px]">
              <a href="#" className="absolute inset-0"></a>
              <figure className="relative z-[2] bg-white m-0 px-[20px] py-0 border-l-[5px] border-l-[#eee] rounded-t-[5px]">
                <div className="text-[14px] text-left pt-[20px]">
                  <a href="#" className="text-inherit">
                    Website
                  </a>
                  <a href="#">
                    <img
                      decoding="async"
                      src="https://softnix.co/wp-content/uploads/2018/08/k-75-chim-t-091548-800x450.jpg"
                      width={220}
                      className="mt-[10px]"
                      alt="Time Maxx Header"
                      title="Time-Maxx-Header-Image"
                    />
                  </a>
                </div>
              </figure>
              <div className="flex h-full items-center relative z-[2]">
                <div className="none">
                  <div className="flex justify-center">
                    <img
                      decoding="async"
                      src="https://softnix.co/wp-content/uploads/2024/03/the-ace-group-logo.png"
                      className="order-1 mt-[50px] mb-[25px] h-12"
                    />
                  </div>
                  <h2 className="order-2 mt-8 text-[1.25rem] leading-[1.385em] text-white font-semibold">
                    The Ace Group
                  </h2>
                  <div className="order-3 my-[15px] mb-[25px] text-[rgba(255,255,255,0.7)] font-semibold">
                    Overview The Ace Group is a reputable insurance prov
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="faqs"
        className={`${workSans.className} w-[1398px] max-w-[calc(90%+30px)] m-auto`}
      >
        {/* Title */}
        <div className="flex items-center justify-center gap-6 mb-6">
          <Image
            src={starIcon}
            aria-hidden="true"
            alt="star"
            className="h-6 w-6"
          />
          <h1 className="text-3xl font-bold">
            FAQs about {kebabToTitle(industry)}
          </h1>
        </div>
        {/* Questions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 divide-y-0">
          {questions.map(({ question, answer }, idx) => (
            <div key={idx} className="py-6 px-6">
              <div
                className="flex items-center justify-between hover:cursor-pointer"
                onClick={() => toggleQuestion(idx)}
              >
                {/* Title */}
                <h2 className="text-lg font-bold leading-6 text-faqDarkPurple hover:text-faqPurple">
                  {question}
                </h2>
                {/* Toggle Button */}
                <Image
                  src={activeIndex === idx ? minusIcon : plusIcon}
                  alt="toggle question"
                />
              </div>
              {/* Answer */}
              <div
                id={`answer-${idx}`}
                className="overflow-hidden transition-all duration-300"
                style={{ maxHeight: `${answerHeights[idx] || 0}px` }}
              >
                <p className="pt-6 text-faqGrayishPurple">{answer}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="box-border px-[15px] w-full mt-8 mb-24">
          <p className="text-center text-[15px] text-[#001528]">
            Couldn't find your answer?{" "}
            <a
              className="border-b-[1px] border-dotted border-b-[rgba(0,0,0,0.5)]"
              href="#"
            >
              <span className="text-[#e6332c] font-semibold">
                Ask a question
              </span>
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
