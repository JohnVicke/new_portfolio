import { Box } from "@material-ui/core";
import React, { useState, useEffect, useMemo } from "react";
import Feedback from "../assets/360_feedback.svg";
//import Alanify from "../assets/alanify.svg";
import Mottagning from "../assets/mottagning.svg";
import Pomodoro from "../assets/pomodoro.svg";
import Project from "./Project";

const Projects = () => {
  const projects = [
    {
      header: "Employee evaluation",
      info: "kjasdkjaskjdjalksdjklasjkldjaklsjkdl",
      image: Feedback,
      gradient: "#181D29",
      highlight: "#83D6BB",
    },
    /*{
      header: "Alanify",
      image: Alanify,
      background: "#FE5722",
    },
    {
      header: "Supa skallen av sig",
      info: "akjsfjkakjfsaskjf",
      image: Mottagning,
    },*/
    {
      header: "Pomodoro timer",
      gradient: "#C13A3A",
      highlight: "#C13A3A",
      image: Pomodoro,
    },
  ];
  return (
    <div>
      <div className="main">
        <Box display="flex" flexDirection="column">
          {projects.map((project) => {
            return <Project key={project.header} project={project} />;
          })}
        </Box>
      </div>
    </div>
  );
};

export default Projects;
