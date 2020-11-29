import { Box, Container, makeStyles } from "@material-ui/core";
import React from "react";
import Feedback from "../assets/360_feedback.svg";
//import Alanify from "../assets/alanify.svg";
import Mottagning from "../assets/mottagning300.svg";
import Pomodoro from "../assets/pomodoro.svg";
import useResize from "../hooks/useResize";
import FeaturedProject from "./FeaturedProject";
import Project from "./Project";
import SwipeableTextMobileStepper from "./SwipeableTextMobileStepper";

const useStyles = makeStyles(() => ({
  projects: {
    marginTop: "4em",
    "& h3": {
      letterSpacing: "0.4em",
      color: "#fff",
      textTransform: "uppercase",
      margin: "0.5em 0",
    },
    "& h2": {
      textAlign: "center",
      letterSpacing: "0.4em",
      color: "#fff",
      textTransform: "uppercase",
      margin: "0.5em 0",
    },
  },
}));

const projects = [
  {
    header: "Employee evaluation",
    info: "kjasdkjaskjdjalksdjklasjkldjaklsjkdl",
    image: Feedback,
    gradient: "#181D29",
    highlight: "#83D6BB",
  },
  {
    header: "Freshmen kickoff",
    info: "akjsfjkakjfsaskjf",
    image: Mottagning,
  },
  {
    header: "Pomodoro timer",
    gradient: "#C13A3A",
    highlight: "#C13A3A",
    image: Pomodoro,
  },
];

const Projects = () => {
  const classes = useStyles();
  const width = useResize();
  return (
    <Box>
      <Container maxWidth="lg">
        <FeaturedProject />
        <Box className={classes.projects} data-aos="fade-up" data-aos-delay="200">
          {width > 959 ? (
            <Box display="flex" flexDirection="row" justifyContent="space-between">
              {projects.map((project) => {
                return <Project key={project.header} project={project} />;
              })}
            </Box>
          ) : (
            <>
              <h2>Other projects</h2>
              <SwipeableTextMobileStepper steps={projects} />
            </>
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default Projects;
