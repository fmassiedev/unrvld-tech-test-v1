"use client";

import Image from "next/image";
import { useState } from "react";

const DUMMY_IMAGES = [
  {
    id: 1,
    url: "https://cdn.shopify.com/s/files/1/0688/1755/1382/products/slides.jpg?v=1675447358",
  },
  {
    id: 2,
    url: "https://cdn.shopify.com/s/files/1/0688/1755/1382/products/GreenSweatpants01.jpg?v=1675455387",
  },
  {
    id: 3,
    url: "https://cdn.shopify.com/s/files/1/0688/1755/1382/products/GreenTshirt01.jpg?v=1675455410",
  },
  {
    id: 4,
    url: "https://cdn.shopify.com/s/files/1/0688/1755/1382/products/GreenHoodie01.jpg?v=1675455175",
  },
];

export default function ProductGallery() {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  return (
    <div className="">
      <div className="aspect-w-1 aspect-h-1 relative">
        <Image
          src={DUMMY_IMAGES[activeImageIndex].url}
          alt=""
          fill
          sizes="50vw"
          className="object-cover rounded"
        />
      </div>
      <div className="flex justify-between gap-4">
        {DUMMY_IMAGES.map((img: { id: number; url: string }, i: number) => (
          <div
            className="w-1/4 aspect-[1/1] relative gap-4 mt-4 cursor-pointer"
            key={img.id}
            onClick={() => setActiveImageIndex(i)}
          >
            <Image src={img.url} alt="" fill sizes="30vw" className="object-cover rounded" />
          </div>
        ))}
      </div>
    </div>
  );
}
