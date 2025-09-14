import React from "react";

interface HeroTextProps {
  title: string;
}

function HeroText({ title }: HeroTextProps) {
  return (
    <header className="max-w-[75%] mt-[200px] mx-auto text-center md:text-left">
      <h1 className="text-3xl md:text-4xl xl:text-5xl 2xl:text-[64px] font-medium leading-[120%]">
        {title}
      </h1>
      <p className="text-base md:text-lg xl:text-xl 2xl:text-2xl mt-10 leading-[150%] text-gray-700 dark:text-gray-300">
        Connection reesizing strikethrough frame project layer opacity. Rotate
        flatten align link invite plugin. Clip asset ellipse flatten hand align
        editor flatten. Device star union frame text vector. Select rectangle
        style select scrolling bold boolean.
      </p>
    </header>
  );
}

export default HeroText;
