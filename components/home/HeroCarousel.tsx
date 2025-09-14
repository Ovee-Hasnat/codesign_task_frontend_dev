"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Image from "next/image";
import HeroText from "./HeroText";

interface Slide {
  src: string;
}

const slides: Slide[] = [
  { src: "/assets/one.png" },
  { src: "/assets/two.png" },
  { src: "/assets/three.png" },
  { src: "/assets/four.png" },
];

export default function HeroCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);

  // Click handler
  useEffect(() => {
    const el = containerRef.current;

    if (!el) return;

    const handleClick = () => {
      setCurrent((prev) => (prev + 1) % slides.length);
    };

    // el.addEventListener("click", handleClick);
    document.body.addEventListener("click", handleClick);
    return () => el.removeEventListener("click", handleClick);
  }, []);

  // Compute offset per slide
  const getOffset = (index: number, containerWidth: number) => {
    switch (index) {
      case 0:
        return 0;
      case 1:
        return -(containerWidth * 0.7 * 0.55);
      case 2:
        return -(containerWidth * 0.7 * 1.6);
      case 3:
        return -(containerWidth * 0.7 * 3.55);
      default:
        return 0;
    }
  };

  // Animate track
  useEffect(() => {
    if (!trackRef.current || !containerRef.current) return;
    const containerWidth = containerRef.current.offsetWidth;
    const offset = getOffset(current, containerWidth);

    gsap.to(trackRef.current, {
      x: offset,
      duration: 1.2,
      ease: "expo.inOut",
    });
  }, [current]);

  return (
    <section
      ref={containerRef}
      className="h-screen w-screen overflow-hidden flex relative -z-10 select-none"
    >
      <div ref={trackRef} className="flex h-full gap-5">
        {/* Hero text (fixed left) */}
        <div className="flex-shrink-0 w-[50dvw] h-full">
          <HeroText />
        </div>

        {/* Carousel track */}
        {slides.map((slide, i) => (
          <div key={i} className="flex-shrink-0 w-[75dvw] h-full">
            <Image
              src={slide.src}
              alt={`slide-${i}`}
              width={1800}
              height={1440}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
