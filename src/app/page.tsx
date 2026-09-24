import React from "react";
import Home from "@/app/home/page"
import About from "@/app/about/page"
import Portofolio from "@/app/portofolio/page"
import Proccess from "@/app/proccess/page";
import Contact from "@/app/contact/page"

const page = () => {
  return (
    <div>
      <Home />
      <About />
      <Portofolio />
      <Proccess />
      <Contact />
    </div>
  );
};

export default page;
