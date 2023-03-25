import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black py-8">
      <div className="flex flex-col md:flex-row items-center">
        <div className="flex flex-1 flex-wrap items-center justify-center gap-12 mr-6">
          <ul className="flex text-white uppercase gap-12 text-xs">
            <li className="cursor-pointer">Pricing</li>
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">Contact</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
