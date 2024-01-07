"use client";
import React, { useState } from "react";
import Filter from "./Filter";
import Image from "next/image";
import { sortData } from "@/Constants/sortConstants";

const FilterInfo: React.FC = () => {
  const [showFilter, setShowFilter] = useState<boolean>(true);
  const [showSort, setShowSort] = useState<boolean>(false);
  const [sortVal, setSortVal] = useState<string>("recommended");

  return (
    <>
      <div className="md:hidden flex justify-evenly items-center">
        <button className="text-gray-900 text-lg font-simplon font-bold uppercase break-words">
          FILTER
        </button>
        <button
          onClick={() => setShowSort((prev) => !prev)}
          className="flex items-center text-gray-900 text-lg font-simplon font-bold uppercase break-words "
        >
          recommended
          <Image
            src={"/assets/arrow.svg"}
            alt="search"
            width={16}
            height={16}
          />
        </button>
      </div>
      <div className="hidden md:flex flex-row justify-between ">
        <div className="flex flex-row ml-28">
          <p>3425 Items</p>
          <button
            onClick={() => setShowFilter((prev) => !prev)}
            className=" flex flex-row ml-16 justify-center items-center"
          >
            <Image
              src={`/assets/arrow-${showFilter ? "left" : "right"}.svg`}
              alt="search"
              width={showFilter ? 16 : 14.8}
              height={showFilter ? 16 : 14.8}
            />
            <p className="text-custom-gray border-b-2">
              {showFilter ? "Hide Filter" : "Show Filter"}
            </p>
          </button>
        </div>
        <button
          onClick={() => setShowSort((prev) => !prev)}
          className="flex mr-32 justify-center items-center uppercase"
        >
          {sortVal !== "" ? sortVal : "recommended"}
          <Image
            className="ml-3"
            src={"/assets/arrow.svg"}
            alt="search"
            width={16}
            height={16}
          />
        </button>
      </div>
      {showSort && (
        <div className="flex mt-8 bg-white p-8 md:right-24 right-10 absolute z-20">
          <ul className="flex flex-col items-end">
            {sortData.map((sort: string) => (
              <div key={sort} className="flex flex-row items-center mt-5">
                {sortVal === sort ? (
                  <Image
                    className="mr-2"
                    src={"/assets/tick.svg"}
                    alt="search"
                    width={24}
                    height={24}
                  />
                ) : (
                  ""
                )}
                <li
                  key={sort}
                  className="uppercase"
                  onClick={() => {
                    setSortVal(sort);
                  }}
                >
                  {sort}
                </li>
              </div>
            ))}
          </ul>
        </div>
      )}
      {showFilter && <Filter />}
    </>
  );
};

export default FilterInfo;
