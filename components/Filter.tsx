import React from "react";
import FilterCheckbox from "./FilterCheckbox";
import { filterData } from "@/Constants/filterConstants";

const Filter: React.FC = () => {
  return (
    <div className=" hidden md:block ml-28 mt-16 float-left w-1/6">
      <input id="customizble" type="checkbox" className=" h-5 w-5" />
      <label
        htmlFor="customizble"
        className=" text-gray-900 text-base font-simplon font-bold uppercase break-words ml-2"
      >
        CUSTOMIZBLE
      </label>
      {filterData.map((el) => (
        <FilterCheckbox
          key={el.id}
          title={el.title}
          categories={el.categories}
        />
      ))}
    </div>
  );
};

export default Filter;
