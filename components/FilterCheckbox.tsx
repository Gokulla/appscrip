"use client";
import React, { useState } from "react";
import Image from "next/image";

interface Props {
  title: string;
  categories: string[];
}

const FilterCheckbox: React.FC<Props> = ({ title, categories }) => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const [filterValue, setFilterValue] = useState<string[]>([]);
  const toggleSubmenu = () => {
    setShowDropdown((prev) => !prev);
  };
  const showFilterValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val: string = e.target.value;
    if (e.target.checked) {
      setFilterValue((prev: string[]) => [...prev, val]);
    } else {
      setFilterValue(filterValue.filter((el) => el !== val));
    }
  };
  return (
    <div className="mt-8 ">
      <div
        className="flex flex-row items-center justify-between "
        onClick={toggleSubmenu}
      >
        <h2 className="uppercase">{title}</h2>
        <Image
          className="self-center hidden md:block"
          src={`/assets/${showDropdown ? "arrow-up" : "arrow"}.svg`}
          alt="search"
          width={24}
          height={24}
        />
      </div>
      <p onClick={toggleSubmenu}>
        {filterValue.length !== 0 ? filterValue.join(",") : "All"}
      </p>
      {showDropdown && (
        <div className="mt-6">
          <p
            className="text-custom-gray border-b-2 w-24"
            onClick={() => setFilterValue([])}
          >
            Unselect all
          </p>
          <ul>
            {categories.map((category) => (
              <li key={category} className="mt-4">
                <input
                  className=" h-4 w-4"
                  type="checkbox"
                  checked={filterValue.includes(category)}
                  value={category}
                  onChange={(e) => {
                    showFilterValue(e);
                  }}
                />
                <label> {category}</label>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FilterCheckbox;
