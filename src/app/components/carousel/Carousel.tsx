"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

const slides = [
  "/images/carroussel/IMG-20200712-WA0003.jpg",
  "/images/carroussel/IMG-20200712-WA0001.jpg",
  "/images/carroussel/20201103_200448.jpg",
  "/images/carroussel/20200912_211006.jpg",
]

export default function Carousel() {
  return (
    <Swiper
      modules={[Autoplay]}
      loop={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      className="h-[calc(100vh-64px)] w-full"
    >
      {slides.map((src, index) => (
        <SwiperSlide key={index} className="relative w-full h-[calc(100vh-64px)]">
          <Image
            src={src}
            alt={`Slide ${index}`}
            fill
            className="object-cover z-0"
          />
          <div className="absolute bottom-0 left-0 w-full h-52 bg-gradient-to-t from-black/80 to-transparent z-10" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}