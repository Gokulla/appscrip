import React from "react";
import FilterInfo from "./FilterInfo";
import Product from "./Product";

const ProductInfo: React.FC = () => {
  return (
    <div className=" md:mt-10 mt-5 relative">
      <FilterInfo />
      <Product />
    </div>
  );
};

export default ProductInfo;
