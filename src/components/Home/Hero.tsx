"use client";
import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { IHeroSlide } from "./HeroSlide";
import Slider from "react-slick";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi2";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PrevArrow = ({ onClick }: { onClick?: () => void }) => (
  <button
    onClick={onClick}
    className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/50 
      hover:bg-black/75 transition-all duration-200 group"
  >
    <HiOutlineChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
  </button>
);

const NextArrow = ({ onClick }: { onClick?: () => void }) => (
  <button
    onClick={onClick}
    className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/50 
      hover:bg-black/75 transition-all duration-200 group"
  >
    <HiOutlineChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
  </button>
);

export default function Hero() {
  const [slides, setSlides] = useState<IHeroSlide[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch slides data
  const fetchSlides = useCallback(async () => {
    try {
      const response = await fetch("/api/hero-slides");
      if (!response.ok) throw new Error("Failed to fetch slides");
      const data = await response.json();
      setSlides(data);
    } catch (error) {
      console.error("Error fetching slides:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchSlides();
  }, [fetchSlides]);

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    dotsClass: "slick-dots custom-dots",
  };

  if (isLoading || slides.length === 0) {
    return null;
  }

  return (
    <section className="relative w-full overflow-hidden">
      <div className="block lg:hidden">
        <Slider {...settings} className="hero-slider">
          {slides.map((slide, idx) => (
            <div key={idx} className="relative h-[300px]">
              <Image
                src={slide.imageUrl}
                alt={slide.title}
                fill
                className="object-cover"
                priority={idx === 0}
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* Desktop Slider */}
      <div className="hidden lg:block">
        <Slider {...settings} className="hero-slider">
          {slides.map((slide, idx) => (
            <div key={idx} className="relative h-[300px] lg:h-[350px] xl:h-[500px] 2xl:h-[600px]">
              <Image
                src={slide.imageUrl}
                alt={slide.title}
                fill
                className="object-cover"
                priority={idx === 0}
              />
            </div>
          ))}
        </Slider>
      </div>
    </section >
  );
}