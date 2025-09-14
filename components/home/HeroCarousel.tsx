"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Image from "next/image";
import HeroText from "./HeroText";
import { useDeviceType } from "@/hooks/useDeviceTypes";

interface Slide {
  src: string;
}

const slides: Slide[] = [
  { src: "/assets/one.webp" },
  { src: "/assets/two.webp" },
  { src: "/assets/three.webp" },
  { src: "/assets/four.webp" },
];

export default function HeroCarousel({
  setShowSecondHeroText,
}: {
  setShowSecondHeroText: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const lastSlideRef = useRef<HTMLDivElement>(null);

  const [step, setStep] = useState(0);
  const totalSteps = slides.length + 2; // 4 slides + 2 extra states
  const device = useDeviceType();

  // Click handler
  useEffect(() => {
    const el = document.getElementsByTagName("main")[0];
    if (!el) return;

    const handleClick = () => {
      setStep((prev) => (prev + 1) % totalSteps);
    };

    el.addEventListener("click", handleClick);
    return () => el.removeEventListener("click", handleClick);
  }, [totalSteps]);

  // Width multipliers based on for Responsiveness
  const widthMultiplier =
    device === "desktop" ? 0.7 : device === "tablet" ? 0.8 : 1.0;
  const slideWidth =
    device === "desktop" ? "75vw" : device === "tablet" ? "80vw" : "100vw";

  // Compute offset per step
  const getOffset = useCallback(
    (step: number, containerWidth: number) => {
      switch (step) {
        case 0:
          return 0;
        case 1:
          return -(containerWidth * widthMultiplier * 0.55);
        case 2:
          return -(containerWidth * widthMultiplier * 1.6);
        case 3:
          return -(containerWidth * widthMultiplier * 3.6);
        default:
          return -(containerWidth * widthMultiplier * 4);
      }
    },
    [widthMultiplier]
  );

  // Animate track + last slide
  useEffect(() => {
    if (!trackRef.current || !containerRef.current) return;
    const containerWidth = containerRef.current.offsetWidth;

    if (step < slides.length) {
      const offset = getOffset(step, containerWidth);
      gsap.to(trackRef.current, {
        x: offset,
        duration: 1.5,
        ease: "power4.inOut",
      });

      // reset last slide styling when coming back
      if (lastSlideRef.current) {
        gsap.to(lastSlideRef.current, {
          width: slideWidth,
          height: "100vh",
          y: 0,
          duration: 1.5,
        });

        setShowSecondHeroText(false);
      }
    }

    // Step for last image full screen
    if (step === slides.length && lastSlideRef.current) {
      const offset = getOffset(step, containerWidth);
      gsap.to(trackRef.current, {
        x: offset,
        duration: 1.5,
        ease: "power4.inOut",
      });
      gsap.to(lastSlideRef.current, {
        width: "105vw",
        height: "100vh",
        x: 0,
        y: 0,
        duration: 1.5,
        ease: "power4.inOut",
      });
    }

    // Step for last image lifting up
    if (step === slides.length + 1 && lastSlideRef.current) {
      gsap.to(lastSlideRef.current, {
        width: "110vw",
        height: device === "mobile" ? "60vh" : "90vh",
        y: -containerRef.current!.offsetHeight / (device === "mobile" ? 6 : 2),
        duration: 1.5,
        ease: "power4.inOut",
      });

      setShowSecondHeroText(true);
    }
  }, [step, device, getOffset, slideWidth, setShowSecondHeroText]);

  return (
    <section
      ref={containerRef}
      className="h-screen w-screen overflow-hidden flex absolute select-none -z-10"
    >
      <div ref={trackRef} className="flex h-full gap-5">
        {/* Hero text (fixed left) */}
        <div className="flex-shrink-0 w-screen md:w-[50dvw] h-full">
          <HeroText title="Eros augue curabitur rutrum ibrium" />
        </div>

        {/* Carousel track */}
        {slides.map((slide, i) => (
          <div
            key={i}
            ref={i === slides.length - 1 ? lastSlideRef : null}
            className="flex-shrink-0 h-full"
            style={{ width: slideWidth }}
          >
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
