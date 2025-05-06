import React from "react";
import { ProductImage } from "../components/ProductImage.jsx";
import ProductInfo from "../components/ProductInfo.jsx";

export default function ProductDetail({ addNewProduct }) {
  return (
    <div className="bg-amber-100 flex justify-center items-center min-h-screen ">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:gap-0 min-[320px]:gap-10">
        <ProductImage></ProductImage>
        <ProductInfo addNewProduct={addNewProduct}></ProductInfo>
      </div>
    </div>
  );
}
