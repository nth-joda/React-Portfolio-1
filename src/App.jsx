import React from "react";

import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Experience from "./components/experience/Experience";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";
import Testimonials from "./components/testimonials/Testimonials";
import Footer from "./components/footer/Footer";

// Particle background component
const PARTICLE_NUM = 200;
const PARTICLE_BASE_SIZE = 8;

function randomBetween(a, b) {
  return Math.random() * (b - a) + a;
}

const ParticlesBackground = () => {
  const particles = React.useMemo(() => {
    return Array.from({ length: PARTICLE_NUM }).map((_, i) => {
      const size = randomBetween(2, PARTICLE_BASE_SIZE);
      const left = randomBetween(0, 100);
      const startY = randomBetween(100, 110);
      const endY = -startY - randomBetween(0, 30);
      const duration = randomBetween(28000, 37000);
      const delay = randomBetween(0, 37000);
      const circleDelay = randomBetween(0, 4000);

      // Generate random control points for unpredictable movement
      const cp1x = randomBetween(0, 100);
      const cp1y = randomBetween(30, 80);
      const cp2x = randomBetween(0, 100);
      const cp2y = randomBetween(-30, 30);

      const moveKeyframes = `
        @keyframes move-frames-${i} {
          0% {
            transform: translate3d(${left}vw, ${startY}vh, 0);
          }
          33% {
            transform: translate3d(${cp1x}vw, ${cp1y}vh, 0);
          }
          66% {
            transform: translate3d(${cp2x}vw, ${cp2y}vh, 0);
          }
          100% {
            transform: translate3d(${left}vw, ${endY}vh, 0);
          }
        }
      `;

      // Inject keyframes into the document
      if (
        typeof document !== "undefined" &&
        !document.getElementById(`move-frames-${i}`)
      ) {
        const style = document.createElement("style");
        style.id = `move-frames-${i}`;
        style.innerHTML = moveKeyframes;
        document.head.appendChild(style);
      }

      return (
        <div
          key={i}
          style={{
            position: "absolute",
            width: `${size}px`,
            height: `${size}px`,
            top: 0,
            left: 0,
            pointerEvents: "none",
            animationName: `move-frames-${i}`,
            animationDuration: `${duration}ms`,
            animationDelay: `${delay}ms`,
            animationIterationCount: "infinite",
            animationTimingFunction: "linear",
            zIndex: 0,
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              mixBlendMode: "screen",
              background:
                "radial-gradient(hsl(40,100%,70%), hsl(40,100%,70%) 10%, hsla(40,100%,70%,0) 56%)",
              animation: `fade-frames 200ms infinite, scale-frames 2s infinite`,
              animationDelay: `${circleDelay}ms, 0ms`,
            }}
          />
        </div>
      );
    });
  }, []);

  // Global keyframes for all circles
  React.useEffect(() => {
    if (
      typeof document !== "undefined" &&
      !document.getElementById("particle-global-keyframes")
    ) {
      const style = document.createElement("style");
      style.id = "particle-global-keyframes";
      style.innerHTML = `
        @keyframes fade-frames {
          0% { opacity: 1; }
          50% { opacity: 0.7; }
          100% { opacity: 1; }
        }
        @keyframes scale-frames {
          0% { transform: scale3d(0.4,0.4,1);}
          50% { transform: scale3d(2.2,2.2,1);}
          100% { transform: scale3d(0.4,0.4,1);}
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        zIndex: -1,
        background: "#1c1d1f",
        pointerEvents: "none",
      }}
    >
      {particles}
    </div>
  );
};

const App = () => {
  return (
    <>
      <ParticlesBackground />
      <Header />
      <Nav />
      <About />
      <Experience />
      {/* <Services /> */}
      <Portfolio />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </>
  );
};

export default App;
