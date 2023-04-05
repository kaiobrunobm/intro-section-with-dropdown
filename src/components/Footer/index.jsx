import React from "react";

const Footer = () => {
  return (
    <footer className="flex justify-center items-start gap-5 mt-2 lg:justify-start lg:mx-[17.5rem]">
      <img className="h-4" src="/public/client-databiz.svg" alt="Databiz" />
      <img
        className="h-6"
        src="/public/client-audiophile.svg"
        alt="Audio phile"
      />
      <img className="h-4" src="/public/client-meet.svg" alt="Meet" />
      <img className="h-5" src="/public/client-maker.svg" alt="Maker" />
    </footer>
  );
};

export default Footer;
