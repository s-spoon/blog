"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

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
    {
      title: "UI & UX Design",
      links: ["App Design", "Web Design"],
    },
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
  ], // example items
  Company: [
    "About",
    "Press Release",
    "Why Choose Us",
    "Mission, Vision and Values",
  ],
};

const Dropdown = ({ label, items }: { label: string; items: any }) => {
  const [open, setOpen] = useState(false);

  return (
    <div onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button className="font-semibold px-4 py-2 hover:text-red-600 cursor-pointer">
        {label}
      </button>
      {open && (
        <div className="absolute bg-white border-t border-red-500 z-50 px-[75px] grid grid-cols-4 gap-4">
          {Array.isArray(items) && typeof items[0] === "string"
            ? // Flat array of strings (e.g., ["About", "Press Release"])
              items.map((item: string, idx: number) => (
                <Link
                  key={idx}
                  href={`/industries/${item
                    .toLowerCase()
                    .replace(/[^a-z0-9]/gi, "")}`}
                  className="hover:text-red-600 block cursor-pointer"
                >
                  {item}
                </Link>
              ))
            : // Array of objects with { title, links }
              items.map(
                (section: { title: string; links: string[] }, idx: number) => (
                  <div key={idx} className="cursor-pointer">
                    <p className="font-bold mb-2">{section.title}</p>
                    {section.links.map((link, i) => (
                      <Link
                        key={i}
                        href={`/services/${link
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`}
                        className="hover:text-red-600 block"
                      >
                        {link}
                      </Link>
                    ))}
                  </div>
                )
              )}
        </div>
      )}
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
              src="/imgs/softnix-logo.png"
              alt="Softnix Logo"
              width={170}
              height={0}
            />
          </Link>
        </div>
        <nav className="flex flex-grow">
          <Dropdown label="Services" items={navItems.Services} />
          <Dropdown label="Industries" items={navItems.Industries} />
          <Dropdown label="Company" items={navItems.Company} />
          <Link
            href="/case-studies"
            className="font-semibold px-4 py-2 hover:text-red-600"
          >
            Case Studies
          </Link>
          <Link
            href="/contact-us"
            className="font-semibold px-4 py-2 hover:text-red-600"
          >
            Contact Us
          </Link>
        </nav>

        <div className="flex items-center text-sm">
          <svg
            className="w-5 h-5 mr-2 text-gray-600"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
          </svg>
          <span className="text-gray-700">Have any questions?</span>
          <span className="text-red-600 font-bold ml-2">(855) 950-1995</span>
        </div>
      </div>
    </header>
  );
}
