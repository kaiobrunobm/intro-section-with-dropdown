import React from "react";

const Footer = () => {
  return (
    <footer className="flex justify-center items-start gap-5 mt-2 lg:justify-start lg:mx-[17.5rem]">
      <img
        className="h-4"
        src="/src/assets/images/client-databiz.svg"
        alt="Databiz"
      />
      <img
        className="h-6"
        src="/src/assets/images/client-audiophile.svg"
        alt="Audio phile"
      />
      <img
        className="h-4"
        src="/src/assets/images/client-meet.svg"
        alt="Meet"
      />
      <img
        className="h-5"
        src="/src/assets/images/client-maker.svg"
        alt="Maker"
      />
    </footer>
  );
};

export default Footer;
