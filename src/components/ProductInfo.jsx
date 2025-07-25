import React from "react";
import { useState } from "react";

const ProductInfo = ({ addNewProduct }) => {
  const [count, setCount] = useState(1);
  const incrementCount = () => {
    setCount(count + 1);
  };
  const decrementCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  return (
    <div className="bg-gray-900 text-white px-16 py-12 flex flex-col gap-6 justify-center xl:items-start min-[320px]:items-center rounded-xl">
      <h1 className="text-amber-400 font-semibold tracking-widest uppercase">
        Converse
      </h1>
      <h2 className="text-[52px] font-extrabold leading-tight text-white">
        Walk Star Trainer
      </h2>
      <p className="text-base text-gray-300 max-w-xl leading-relaxed">
        Designed for everyday adventure. With a durable rubber outsole and
        modern silhouette, this pair keeps you stylish and steady wherever the
        day takes you.
      </p>
      <div className="flex gap-4 items-center">
        <span className="font-bold text-2xl text-amber-400">Rp799.000</span>
        <span className="text-lg line-through text-gray-500">Rp999.000</span>
      </div>
      <div className="flex gap-2.5 pt-12">
        <button
          className="bg-gray-700 w-10 h-10 rounded-lg flex justify-center items-center cursor-pointer hover:bg-gray-600 transition"
          onClick={decrementCount}
        >
          -
        </button>
        <div className="bg-gray-800 w-10 h-10 rounded-lg flex justify-center items-center text-lg font-semibold border border-gray-600">
          {count}
        </div>
        <button
          className="bg-gray-700 w-10 h-10 rounded-lg flex justify-center items-center cursor-pointer hover:bg-gray-600 transition"
          onClick={incrementCount}
        >
          +
        </button>
        <button
          className="bg-amber-500  hover:bg-amber-600 w-40 h-10 rounded-lg flex justify-center items-center text-base font-semibold text-black ml-2.5 cursor-pointer transition duration-200"
          onClick={addNewProduct}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductInfo;
