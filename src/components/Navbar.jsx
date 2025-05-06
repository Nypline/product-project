import React from "react";
import "../index.css";

export default function Navbar({ addProducts }) {
  return (
    <div className=" flex px-8 justify-between py-6 shadow-md sticky top-0 bg-white z-50">
      <h1 className="font-archivo text-xl font-bold">sneakers</h1>
      <div className="relative">
        <img src="/cart.svg" alt="cart"></img>
        <h1 className="w-6 h-6 bg-red-400 items-center flex justify-center rounded-full text-white absolute -top-4 -right-4">
          {addProducts}
        </h1>
      </div>
    </div>
  );
}
