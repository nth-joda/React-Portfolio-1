import React, { Suspense, lazy } from "react";

import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Experience from "./components/experience/Experience";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";
// Lazy load heavy/secondary components
const Portfolio = lazy(() => import("./components/portfolio/Portfolio"));
const Services = lazy(() => import("./components/services/Services"));
const Testimonials = lazy(() => import("./components/testimonials/Testimonials"));

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      {/* <Services /> */}
      <Suspense fallback={<div>Loading...</div>}>
        <Portfolio />
        {/* <Testimonials /> */}
      </Suspense>
      <Contact />
      <Footer />
    </>
  );
};

export default App;
