"use client";

import { useState } from "react";

const menus = [
  ["Home", "home"],
  ["About", "about"],
  ["Portofolio", "portofolio"],
  ["Proccess", "proccess"],
  ["Contact", "contact"],
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed left-5 right-5 top-2 z-50 text-gray-400 transition-colors duration-300 hover:text-white">
      <div className="flex h-12 items-center justify-between rounded-full bg-zinc-900 px-12 sm:px-12 md:px-12 lg:px-12">
        <a className="w-25 text-[10px] leading-3 tracking-wide text-white">
          VIREYA
          <br />
          CAPITAL
          <br />
          PARTNERS
        </a>

        <div className="hidden gap-3 md:flex">
          {menus.map(([name, link]) => (
            <a
              key={link}
              href={`#${link}`}
              className="border-b-2 py-1 border-transparent px-3 text-sm text-gray-400 hover:border-white hover:text-white"
            >
              {name}
            </a>
          ))}
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-xl text-white md:hidden"
        >
          {isOpen ? "×" : "☰"}
        </button>
      </div>

      {isOpen && (
        <div className="absolute w-full mt-2 rounded-2xl bg-zinc-900 p-3 md:hidden">
          {menus.map(([name, link]) => (
            <a
              key={link}
              href={`#${link}`}
              onClick={() => setIsOpen(false)}
              className="block rounded-xl border-transparent px-3 py-3 text-sm text-gray-400 transition-colors hover:bg-white/5 hover:text-white"
            >
              {name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
