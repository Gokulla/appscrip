import React from "react";
import Image from "next/image";

const Navbar: React.FC = () => {
  return (
    <nav className={`flex flex-col justify-between flex-wrap p-4 text-black`}>
      <div className={`flex flex-1 flex-row justify-between bg-red`}>
        <div className="flex flex-row">
          <div className={`md:hidden flex items-center`}>
            <button
              type="button"
              className={`inline-flex items-center p-2 rounded-md text-sm text-black`}
              id="mobile-menu-button"
            >
              <Image
                className="self-center"
                src={"/assets/crumbread.svg"}
                alt="search"
                width={40}
                height={40}
              />
            </button>
          </div>
          <Image
            className="self-center md:ml-20"
            src={"/assets/logo.svg"}
            alt="search"
            width={36}
            height={36}
          />
        </div>
        <span
          className={`font-bold md:text-4xl text-2xl self-center font-inter md:ml-40`}
        >
          LOGO
        </span>
        <div className="flex flex-row gap-2 md:mr-20">
          <Image
            className="self-center"
            src={"/assets/search.svg"}
            alt="search"
            width={24}
            height={24}
          />{" "}
          <Image
            className="self-center"
            src={"/assets/heart.svg"}
            alt="search"
            width={24}
            height={24}
          />{" "}
          <Image
            className="self-center"
            src={"/assets/shopping-bag.svg"}
            alt="search"
            width={24}
            height={24}
          />{" "}
          <Image
            className="self-center hidden md:block"
            src={"/assets/profile.svg"}
            alt="search"
            width={24}
            height={24}
          />
          <span className="self-center hidden md:block">ENG</span>
          <Image
            className="self-center hidden md:block"
            src={"/assets/arrow.svg"}
            alt="search"
            width={24}
            height={24}
          />
        </div>
      </div>
      <div className={`hidden md:flex justify-center space-x-4 gap-12 my-10 `}>
        <a href="#" className={`px-3 py-2 rounded-md text-sm font-semibold`}>
          SHOP
        </a>
        <a href="#" className={`px-3 py-2 rounded-md text-sm font-semibold`}>
          SKILLS
        </a>
        <a href="#" className={`px-3 py-2 rounded-md text-sm font-semibold`}>
          STORIES
        </a>
        <a href="#" className={`px-3 py-2 rounded-md text-sm font-semibold`}>
          ABOUT
        </a>
        <a href="#" className={`px-3 py-2 rounded-md text-sm font-semibold`}>
          CONTACT US
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
