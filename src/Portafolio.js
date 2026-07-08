import React from "react";
import { About } from "./components/hero/About";
import { Form } from "./components/hero/Form/Form.jsx";
import { Home } from "./components/hero/Home";
import { Stats } from "./components/hero/Stats";
import { Timeline } from "./components/hero/Timeline";
import { Skills } from "./components/hero/Skills";
import { Proyects } from "./components/hero/Proyects/Proyects";
import { NavBar } from "./components/navBar/NavBar";
import { Footer } from "./components/hero/Footer";
import { FloatingCTA } from "./components/FloatingCTA";

export const Portafolio = () => {
  return (
    <>
      <NavBar />
      <Home />
      <About />
      <Stats />
      <Timeline />
      <Skills />
      <Proyects />
      <Form />
      <Footer />
      <FloatingCTA />
    </>
  );
};
