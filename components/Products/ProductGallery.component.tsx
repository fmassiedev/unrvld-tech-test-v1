"use client";

import Image from "next/image";
import { useState } from "react";

// NOTE: Originally built with the idea of a thumbnail gallery in mind
// but ran out of time to implement with dynamic variations.

type TImage = {
  id: string;
  url: string;
};

interface ProductGalleryProps {
  images: TImage | TImage[];
}

export default function ProductGallery({ images }: ProductGalleryProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Normalise images to always be an array
  const imageArray = Array.isArray(images) ? images : [images];

  return (
    <div className="">
      <div className="aspect-w-1 aspect-h-1 relative">
        <Image
          src={imageArray[activeImageIndex]?.url}
          alt="Active Product Image"
          fill
          sizes="50vw"
          className="object-cover rounded"
        />
      </div>
      <div className="flex justify-between gap-4">
        {imageArray.map((img, i) => (
          <div
            className="w-1/4 aspect-[1/1] relative gap-4 mt-4 cursor-pointer"
            key={img.id}
            onClick={() => setActiveImageIndex(i)}
          >
            <Image
              src={img.url}
              alt="Thumbnail"
              fill
              sizes="30vw"
              className="object-cover rounded"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
