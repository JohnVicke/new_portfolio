import React, { useState, useEffect, useRef, isValidElement } from "react";
import { Typewriter } from "react-typewriting-effect";
import ReactRotatingText from "react-rotating-text";
import LandingWeb from "./assets/landing_web.svg";
import LandingMob from "./assets/landing_mob.svg";
import "./Index.scss";
import Projects from "./components/Projects";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";

import { useMediaQuery } from "react-responsive";
import Navbar from "./components/Navbar";
import { Container, Box } from "@material-ui/core";
import Skills from "./components/Skills";
import FeaturedProject from "./components/FeaturedProject";
import Cursor from "./components/Cursor";
import useMousePosition from "./hooks/useMousePosition";
import CursorContextProvider from "./context/CursorContext";
import useCursorHandlers from "./utils/useCursorHandlers";

const App = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const [visible, setVisible] = useState(false);
  const [pVisible, setPVisible] = useState(false);
  const [iterations, setIterations] = useState(0);
  const [firstDone, setFirstDone] = useState(false);

  const getLandingLogo = () => {
    return !isMobile ? (
      <div class="svg-cursor">
        <object className="animated" type="image/svg+xml" data={LandingWeb}></object>
      </div>
    ) : (
      <object className="animated-mobile" type="image/svg+xml" data={LandingMob}></object>
    );
  };

  setTimeout(() => {
    setVisible(true);
  }, 2000);

  setTimeout(() => {
    setPVisible(true);
  }, 3000);

  const headingText = () => {
    if (iterations > 1) {
      return <h1>Hi, I'm Viktor Malmedal</h1>;
    } else {
      if (!firstDone) {
        return (
          <ReactRotatingText
            className="section-heading"
            items={["Hi, I'm Viktor "]}
            style={{ color: "#e17c69" }}
            deletingInterval={100}
            onTypingEnd={() => {
              setFirstDone(true);
            }}
          />
        );
      }
      return (
        <div style={{ display: "flex", flexDirection: "row" }}>
          <h1>Hi, I'm Viktor&nbsp;</h1>
          <ReactRotatingText
            className="section-heading"
            items={["Mlamedal", "Malmedal"]}
            style={{ color: "#e17c69" }}
            deletingInterval={100}
            onTypingEnd={() => {
              setTimeout(() => {
                setIterations(iterations + 1);
              }, 50);
            }}
          />
        </div>
      );
    }
  };

  return (
    <div className="root">
      <CursorContextProvider>
        <Navbar />
        <ParallaxProvider>
          <Cursor />
          <div className="background" />
          <div className="landing-container">{getLandingLogo()}</div>
          <Container maxWidth="xl">
            <div style={{ visibility: `${visible ? "visible" : "hidden"}` }}>
              <Parallax y={[-20, 20]}>
                <div className="about-me">
                  {visible && <>{headingText()}</>}
                  <p style={{ opacity: `${pVisible ? "100" : "0"}` }}>
                    Versatile software developer with an attention to speed, flexability and quality. Ambitious problem
                    solver that loves to create cool stuff. Interested in technoology and everything in its orbit.
                  </p>
                </div>
              </Parallax>
              <div className="projects-container">
                <FeaturedProject />
              </div>
              <Box>
                <Skills />
              </Box>
            </div>
          </Container>
        </ParallaxProvider>
      </CursorContextProvider>
    </div>
  );
};

export default App;
