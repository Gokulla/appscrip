"use client";
import React, { useState } from "react";
import Image from "next/image";
interface Data {
  item: { title: string; image: string };
}

const ProductItems: React.FC<Data> = ({ item }) => {
  const [isLike, setIsLike] = useState<boolean>(false);
  const toggleIsLike = () => {
    setIsLike((prev) => !prev);
  };
  return (
    <div className="flex flex-col md:m-8 m-4 md:w-[300px]  w-36 md:h-[447px] h-[260px]">
      <Image
        src={item.image}
        alt="search"
        width={300}
        height={400}
        className=" h-[200px] w-[150px] md:h-[399px] md:w-[300px]"
      />
      <h2
        className="
        truncate 
        font-SimplonNorm
        font-bold
        uppercase
        break-words 
        text-[#252020]
        text-[14px]"
      >
        {item.title}
      </h2>
      <div className="flex justify-between">
        <div className="mt-2">
          <p className="text-gray-500 md:text-xs text-[10px] font-simplon font-normal break-words">
            <span className="mr-1">Sign in</span>
            or Create an account to see pricing
          </p>
        </div>
        <Image
          onClick={toggleIsLike}
          className="flex justify-end md:h-6 md:w-6 h-3 w-3"
          src={`/assets/${isLike ? "heart-red" : "heart"}.svg`}
          alt="favorite"
          width={24}
          height={24}
        />
      </div>
    </div>
  );
};

export default ProductItems;
