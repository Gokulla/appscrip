"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const mettaMuse = [
  "About Us",
  "Stories",
  "Artisans",
  "Boutiques",
  "Contact Us",
  "EU Compliances Docs",
];

const quickLinks = [
  "Orders & Shipping",
  "Join/Login as a Seller",
  "Payment & Pricing",
  "Return & Refunds",
  "FAQs",
  "Privacy Policy",
  "Terms & Conditions",
];
function Footer() {
  return (
    <div className="bg-black flex flex-col p-4 md:pl-24 md:pr-24 md:pt-16">
      <div className="flex flex-col gap-4 md:flex-row md:gap-[425px]  ">
        <div className="w-full md:w-1/2 ">
          <p className="text-lg font-semibold mb-3 text-white">
            BE THE FIRST TO KNOW
          </p>
          <p className="text-xs leading-3 text-white">
            Sign up for updates from mettā muse.
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <p className="text-lg font-semibold text-white mb-3">CONTACT US</p>
          <p className="text-xs text-white mb-3">+44 221 133 5360</p>
          <p className="text-xs  mb-3 text-white">customercare@mettamuse.com</p>
        </div>
      </div>

      <div className="flex flex-col gap-4 md:gap-56   mt-8 md:flex-row md:mt-0">
        <div className="flex w-full md:w-1/2">
          <input
            className="appearance-none block md:w-[450px] w-[280px] bg-gray-200 text-gray-700 border h-11 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            type="text"
            placeholder="Enter your e-mail..."
          />
          <button className="bg-transparent md:w-[180px] w-[100px] text-gray-500 font-semibold py-2 px-4 mx-0 md:mx-3 h-11  border border-gray-500 hover:border-transparent rounded">
            Subscribe
          </button>
        </div>

        <div className="w-full md:w-1/2">
          <p className="text-lg font-semibold  mb-3 text-white">CURRENCY</p>
          <div className="flex items-center gap-1 text-white mb-3">
            <Image src={"/assets/flag.svg"} width={24} height={24} alt="usa" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="6"
              height="6"
              viewBox="0 0 6 6"
              fill="none"
            >
              <path
                d="M3 0L4.48492 1.51508L6 3L4.48492 4.48492L3 6L1.51508 4.48492L0 3L1.51508 1.51508L3 0Z"
                fill="white"
              />
            </svg>
            <p>USA</p>
          </div>
          <p className="text-xs text-white">
            Transactions will be completed in Euros and a currency reference is
            available on hover.
          </p>
        </div>
      </div>

      <div className="border-t border-gray-300 my-4 w-full"></div>

      <div className="flex flex-col md:flex-row md:gap-64">
        <div className="mb-6 md:mb-0 md:mr-10">
          <p className="text-lg font-semibold mb-3 text-white">mettā muse</p>
          {mettaMuse.map((el: string) => (
            <p key={el} className="text-sm mb-2 text-white">
              {el}
            </p>
          ))}
        </div>

        <div className="mb-6 md:mb-0 md:mr-10">
          <p className="text-lg font-semibold mb-3 text-white">QUICK LINKS</p>
          {quickLinks.map((el: string) => (
            <p key={el} className="text-sm mb-2 text-white">
              {el}
            </p>
          ))}
        </div>

        <div className="mb-6 md:mb-0">
          <div className="mb-6 md:mb-0">
            <p className="text-lg font-semibold mb-3 text-white">FOLLOW US</p>
            <div className="flex gap-3">
              <Image
                src={"/assets/insta.svg"}
                width={23}
                height={23}
                alt="insta"
              />
              <Image
                src={"/assets/linkedin.svg"}
                width={24}
                height={24}
                alt="linkdn"
              />
            </div>
          </div>

          <div>
            <p className="text-lg font-semibold mt-3 md:mt-9 mb-3 text-white">
              mettā muse Accepts
            </p>
            <div className="flex gap-2">
              {/* Adjusted your Image rendering here */}
              <Image
                src={"/assets/gpay.svg"}
                width={40}
                height={40}
                alt="gpay"
              />
              <Image
                src={"/assets/mastercard.svg"}
                width={40}
                height={40}
                alt="icici"
              />
              <Image
                src={"/assets/pay.svg"}
                width={40}
                height={40}
                alt="paypal"
              />
              <Image
                src={"/assets/amex.svg"}
                width={40}
                height={40}
                alt="amex"
              />
              <Image
                src={"/assets/applepay.svg"}
                width={40}
                height={40}
                alt="applepay"
              />
              <Image
                src={"/assets/dpay.svg"}
                width={40}
                height={40}
                alt="opay"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
