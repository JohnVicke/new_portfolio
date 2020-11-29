import React, { useState, useEffect, useRef, isValidElement, createRef } from "react";
import { Typewriter } from "react-typewriting-effect";
import ReactRotatingText from "react-rotating-text";
import LandingWeb from "./assets/landing_web.svg";
import LandingMob from "./assets/landing_mob.svg";
import "./Index.scss";
import Projects from "./components/Projects";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";

import { useMediaQuery } from "react-responsive";
import Navbar from "./components/Navbar";
import { Container, Box, Grid, makeStyles } from "@material-ui/core";
import Titles from "./components/Titles";
import FeaturedProject from "./components/FeaturedProject";
import Cursor from "./components/Cursor";
import useMousePosition from "./hooks/useMousePosition";
import CursorContextProvider from "./context/CursorContext";
import useCursorHandlers from "./utils/useCursorHandlers";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import image from "./assets/profile_picture.png";
import StyledButton from "./components/StyledButton";
import AOS from "aos";
import "aos/dist/aos.css";
import useResize from "./hooks/useResize";

const useStyles = makeStyles(() => ({
  headerCTA: {
    position: "relative",
    "& img": {
      borderRadius: 10,
      paddingTop: (props) => (props.isMobile ? "2em" : 0),
    },
  },
  headerButtons: {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    bottom: (props) => (props.isMobile ? 150 : 30),
    left: (props) => (props.isMobile ? "50%" : -20),
    transform: (props) => (props.isMobile ? "translateX(-50%)" : ""),
  },
  headerInfo: {
    marginRight: (props) => (props.isMobile ? "" : "4em"),
  },
}));

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 400, easing: "ease-in-out" });
  }, []);
  const width = useResize();
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const [iterations, setIterations] = useState(0);
  const [firstDone, setFirstDone] = useState(false);

  const classes = useStyles({ isMobile: width < 1024 });

  const goTo = (x) => {
    const elem = document.getElementById(x.replace(" ", ""));
    if (elem) elem.scrollIntoView();
  };

  const getLandingLogo = () => {
    return !isMobile ? (
      <object className="animated" type="image/svg+xml" data={LandingWeb}></object>
    ) : (
      <object className="animated-mobile" type="image/svg+xml" data={LandingMob}></object>
    );
  };

  const headingText = () => {
    if (width < 479) return <h1>Hi, I'm Viktor Malmedal</h1>;
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
      <Navbar callback={goTo} />
      <ParallaxProvider>
        <div className="background" />
        <div className="landing-container">{getLandingLogo()}</div>
        <div style={{ overflow: "hidden" }}>
          <Container maxWidth="lg">
            <Box className="about-me" display="flex" flexDirection="" justifyContent="space-between" id="aboutme">
              <Box className={classes.headerInfo}>
                {headingText()}
                <p style={{ marginTop: "1em" }}>
                  Since beginning my journey to become a software engineer I've gathered professionel experience working
                  as a software engineer where I've done remote work for agencies, consulted for startups and teached
                  code to new students in school.
                </p>
                <p style={{ marginTop: "1em" }}>
                  Developing applications and systems is truly a passion of mine which is reflected in the courses and
                  personal projects I’ve worked on over the years. In addition to my knowledge base, I actively seek out
                  new interesting technologies and stay up to date with the industry trends and advancements.
                </p>
                <p style={{ marginTop: "2em" }}>
                  TLDR: <span style={{ fontStyle: "italic" }}>I like to make cool stuff.</span>
                </p>
              </Box>
              <Box className={classes.headerCTA}>
                <Box className={classes.headerButtons}>
                  <StyledButton
                    onClick={() => window.open("https://johnvicke.github.io/resume/")}
                    style={{ marginBottom: "1em" }}
                  >
                    resume
                  </StyledButton>
                  <StyledButton onClick={() => goTo("contact")}>contact</StyledButton>
                </Box>
                <img
                  src={image}
                  style={{
                    minWidth: "250px",
                    maxWidth: `${width < 1024 ? "100%" : "400px"}`,
                    display: "block",
                    margin: "0 auto",
                    overflowX: "hidden",
                  }}
                />
              </Box>
            </Box>
          </Container>
          {width > 1024 && (
            <Box>
              <Titles />
            </Box>
          )}
          <div id="projects" style={{ margin: `${width > 1025 ? "0" : "4em 0"}` }}>
            <Projects />
          </div>
          <Box style={{ marginTop: width > 1025 ? "4em" : "8em" }} id="skills">
            <Skills />
          </Box>
          <Box id="contact">
            <Contact />
          </Box>
        </div>
        {width > 425 && <Footer />}
      </ParallaxProvider>
    </div>
  );
};

export default App;
