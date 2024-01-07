import React from "react";
import ProductItems from "./ProductItems";

export async function getData() {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  return data;
}

interface Data {
  id: number;
  title: string;
  image: string;
  price: number;
  category: string;
  description: string;
  rating: { rate: number; count: number };
}

const Product: React.FC = async () => {
  const data: Data[] = await getData();
  return (
    <div className="flex flex-wrap md:ml-18 ml-8 md:mt-10 mt-3">
      {data.map((item: Data) => (
        <ProductItems key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Product;
