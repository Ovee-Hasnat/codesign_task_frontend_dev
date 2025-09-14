"use client";

import HeroCarousel from "@/components/home/HeroCarousel";
import HeroText from "@/components/home/HeroText";
import gsap from "gsap";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const secondHeroTextRef = useRef<HTMLDivElement | null>(null);
  const [showSecondHeroText, setShowSecondHeroText] = useState(false);

  useEffect(() => {
    if (!showSecondHeroText || !secondHeroTextRef.current) return;

    const el = secondHeroTextRef.current;
    // gsap timeline
    const tl = gsap.timeline();
    tl.fromTo(
      el,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
        delay: 0.85,
      }
    );

    return () => {
      tl.kill();
    };
  }, [showSecondHeroText]);

  return (
    <>
      <Head>
        <link rel="preload" as="image" href="/assets/one.webp" />
        <link rel="preload" as="image" href="/assets/two.webp" />
        <link rel="preload" as="image" href="/assets/three.webp" />
        <link rel="preload" as="image" href="/assets/four.webp" />
      </Head>
      <main className="w-full h-full">
        <HeroCarousel setShowSecondHeroText={setShowSecondHeroText} />

        {showSecondHeroText && (
          <section
            aria-labelledby="hero-heading"
            className="w-screen h-screen px-4 md:w-[50dvw] flex items-center justify-self-end relative"
          >
            <div ref={secondHeroTextRef}>
              <HeroText title="Eros augue curabitur eu rutrum neque congue" />
            </div>
          </section>
        )}
      </main>
    </>
  );
}
