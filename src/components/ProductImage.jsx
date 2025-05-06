import React from "react";
import { useState } from "react";

export const ProductImage = () => {
  const images = [
    "/product-1.jpg",
    "Product-2.jpg",
    "Product-3.jpg",
    "Product-4.jpg",
  ];
  const [selectedImage, setSelectedImage] = useState(images[0]);

  const changeImage = (newUrl) => {
    setSelectedImage(newUrl);
  };

  return (
    <div className="flex flex-col gap-4 pl-20 xl:pl-20 min-[320px]:pl-0 w-full items-center justify-center">
      <img
        className="rounded-lg w-[470px] h-[470px]"
        src={selectedImage}
        alt="product image"
      />
      <div className="flex gap-2 mt-2">
        {images.map((src, index) => (
          <img
            key={index}
            className={`rounded-lg w-28 h-28 cursor-pointer ${
              selectedImage === src ? " border-4 border-black" : ""
            }`}
            src={src}
            alt={`product image ${index + 1}`}
            onClick={() => changeImage(src)}
          />
        ))}
      </div>
    </div>
  );
};
