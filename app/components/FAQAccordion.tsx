"use client";

import { useState } from "react";
import Image from "next/image";
import { Work_Sans } from "next/font/google";

import starIcon from "../../public/imgs/icon-star.svg";
import plusIcon from "../../public/imgs/icon-plus.svg";
import minusIcon from "../../public/imgs/icon-minus.svg";

const workSans = Work_Sans({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

interface FAQAccordionProps {
  questions: {
    question: string;
    answer: string;
  }[];
}

export default function FAQAccordion({ questions }: FAQAccordionProps) {
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

  return (
    <div
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
          FAQs about our company - Full-Stack Development Company
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
            <span className="text-[#e6332c] font-semibold">Ask a question</span>
          </a>
        </p>
      </div>
    </div>
  );
}
