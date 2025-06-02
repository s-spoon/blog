"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = {
  Services: [
    {
      title: "Website Development",
      links: [
        "Shopify Development",
        "Magento Development",
        "WordPress Development",
        "Custom Web Development",
        "WooCommerce Development",
        "SaaS Development",
      ],
    },
    {
      title: "App Development",
      links: [
        "iOS Development",
        "Android Development",
        "Wearable App Development",
      ],
    },
    {
      title: "DevOps Solutions",
      links: [
        "DevOps Containerization",
        "DevSecOps",
        "DevOps CI/CD",
        "DevOps Automation",
        "DevOps Implementation",
      ],
    },
    {
      title: "Digital Marketing",
      links: [
        "Pay Per Click",
        "Content Writing",
        "Email Marketing",
        "Social Media Marketing",
        "Search Engine Optimization",
      ],
    },
    { title: "UI & UX Design", links: ["App Design", "Web Design"] },
    {
      title: "Branding Design",
      links: [
        "Brand Guide",
        "Logo Design",
        "Stationery Design",
        "Business Card Design",
      ],
    },
  ],
  Industries: [
    "FinTech",
    "Enterprises",
    "Healthcare",
    "E-Learning",
    "Entertainment",
  ],
  Company: [
    "About",
    "Press Release",
    "Why Choose Us",
    "Mission, Vision and Values",
  ],
};

const dropdownVariants = (y: number) => ({
  hidden: { opacity: 0, y: y + 13 },
  visible: { opacity: 1, y, transition: { duration: 0.3 } },
  exit: { opacity: 0, y: y + 13, transition: { duration: 0.2 } },
});

const Dropdown = ({
  label,
  items,
  isSectioned = false,
  variantY = 150,
  baseHref,
}: {
  label: string;
  items: any;
  isSectioned?: boolean;
  variantY?: number;
  baseHref: string;
}) => {
  const [open, setOpen] = useState(false);
  const variants = dropdownVariants(variantY);

  return (
    <div
      className="flex h-full items-center"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button className="font-semibold px-4 py-2 hover:text-red-600 cursor-pointer text-[#001628] text-lg">
        {label}
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={variants}
            className={`absolute bg-white border-t border-[#e0e0e0] z-50 px-[${
              isSectioned ? 75 : 25
            }px] py-8 ${isSectioned ? "flex left-0 w-full" : ""}`}
          >
            {isSectioned
              ? items.map(
                  (
                    section: { title: string; links: string[] },
                    idx: number
                  ) => (
                    <div
                      key={idx}
                      className="w-1/6 float-left cursor-pointer pr-[30px]"
                    >
                      <Link
                        key={idx}
                        href={`/${baseHref}/${section.title
                          .toLowerCase()
                          .replace(/[^a-z0-9\s]/g, "")
                          .replace(/\s+/g, "-")}`}
                        className="font-semibold mb-2 text-[#001528] hover:text-red-600 block"
                      >
                        {section.title}
                      </Link>
                      {section.links.map((link, i) => (
                        <Link
                          key={i}
                          href={`/${baseHref}/${link
                            .toLowerCase()
                            .replace(/\//g, "-")
                            .replace(/\s+/g, "-")}`}
                          className="hover:text-red-600 block"
                        >
                          {link}
                        </Link>
                      ))}
                    </div>
                  )
                )
              : items.map((item: string, idx: number) => (
                  <Link
                    key={idx}
                    href={`/${baseHref}/${item
                      .toLowerCase()
                      .replace(/[^a-z0-9]/gi, "")}`}
                    className="hover:text-red-600 block cursor-pointer pb-2 text-[#001528] font-semibold"
                  >
                    {item}
                  </Link>
                ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export function Navbar() {
  return (
    <header>
      <div className="flex flex-row w-full h-20 max-w-[90%] mx-auto items-center justify-between">
        <div className="mx-0 my-4">
          <Link href="/">
            <Image
              src="/imgs/icon-logo.png"
              alt="Softnix Logo"
              width={60}
              height={60}
              className="rounded-lg h-auto max-w-full"
            />
          </Link>
        </div>
        <nav className="flex flex-grow h-full items-center">
          <Dropdown
            label="Services"
            items={navItems.Services}
            isSectioned={true}
            variantY={172}
            baseHref="services"
          />
          <Dropdown
            label="Industries"
            items={navItems.Industries}
            variantY={152}
            baseHref="industries"
          />
          <Dropdown
            label="Company"
            items={navItems.Company}
            variantY={136}
            baseHref="industries"
          />
          <Link
            href="/company/case-studies"
            className="font-semibold px-4 py-2 hover:text-red-600 text-[#001628] text-lg"
          >
            Case Studies
          </Link>
          <Link
            href="/support/contact-us"
            className="font-semibold px-4 py-2 hover:text-red-600 text-[#001628] text-lg"
          >
            Contact Us
          </Link>
        </nav>

        <div className="flex items-center text-sm">
          <div className="mr-[15px] w-[35px]">
            <img
              src="https://softnix.co/wp-content/uploads/2018/08/conversations-4872_af60b258-251e-41af-b238-dfb706d7b3d4.svg"
              className="border-none h-auto max-w-full align-top"
              alt="icon"
            />
          </div>
          <div className="text-[15px] text-[#001628] font-semibold">
            Have any questions?
            <br />
            {/* <a
              className="flex justify-center text-[#e6332c] font-semibold"
              href="tel:(855) 950-1995"
            >
              <span className="border-b-[1px] border-dotted border-b-[rgba(0,0,0,0.5)]">
                (855) 950-1995
              </span>
            </a> */}
          </div>
        </div>
      </div>
    </header>
  );
}
