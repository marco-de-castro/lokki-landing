"use client";

import React, { useEffect, useState } from "react";

const useCases = [
  {
    id: 1,
    image: "/clean-page/carousel/ecommerce1.png",
  },
  {
    id: 2,
    image: "/clean-page/carousel/irreconocible 1.png",
  },
  {
    id: 3,
    image: "/clean-page/carousel/inclusion 1.png",
  },
 {
  id: 4,
    image: "/clean-page/carousel/hormiga 1.png",
  },
  {
  id: 5,
    image: "/clean-page/carousel/egamming 1.png",
  },




];

export default function UseCaseCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % useCases.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full flex justify-center bg-[#ddecc7] py-8">
      <div className="w-full max-w-[1440px] px-8">
        <div className="relative h-[450px] w-full overflow-hidden rounded-[40px] shadow-lg bg-white/30 border border-black/5">
          {useCases.map((useCase, index) => (
            <div
              key={useCase.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              <img
                src={useCase.image}
                alt={`Use case ${useCase.id}`}
                className="w-full h-full object-contain"
              />
            </div>
          ))}

          {/* Indicators */}
          <div className="absolute bottom-8 left-16 flex gap-2">
            {useCases.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-1.5 transition-all duration-300 rounded-full ${
                  currentIndex === index ? "w-10 bg-black" : "w-3 bg-black/20"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
