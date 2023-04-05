import React from "react";

const Main = () => {
  return (
    <main className="flex flex-col-reverse items-center lg:flex-row lg:justify-evenly">
      <div className="flex flex-col justify-center items-center lg:items-start">
        <h1 className="font-bold text-[2.3rem] my-4 lg:w-[29rem] lg:text-[4.3rem] lg:leading-none">
          Make remote work
        </h1>
        <p className="text-MediumGray text-center mx-2 text-paragraph lg:w-[26rem] lg:text-start">
          Get your team in sync, no matter your location. Streamline pocesses,
          create team rituals, and watch productivity soar.
        </p>
        <button className="bg-AlmostBlack border-2 text-AlmostWhite my-6 px-5 py-3 rounded-2xl text-center transition-all duration-300 hover:bg-AlmostWhite hover:text-AlmostBlack">
          Learn more
        </button>
      </div>
      <picture>
        <source
          srcSet="./public/images/image-hero-desktop.png"
          media="(min-width: 1440px)"
        />
        <img
          className="my-3 max-w-[375px]"
          src="./public/images/image-hero-mobile.png"
          alt="Hero"
        />
      </picture>
    </main>
  );
};

export default Main;
