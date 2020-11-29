import { Box, makeStyles } from "@material-ui/core";

import { Parallax, useController } from "react-scroll-parallax";
import React, { useEffect } from "react";

const useStyles = makeStyles(() => ({
  root: {
    height: "50vh",
    margin: "2em 0",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  outlined: {
    color: "transparent",
    WebkitTextStroke: "1px #e17c69",
    textTransform: "uppercase",
    fontSize: "clamp(2rem, 7.5vw, 12rem)",
  },
  filled: {
    textTransform: "uppercase",
    fontSize: "clamp(2rem, 7.5vw, 12rem)",
  },
}));

const segments = [
  ["DEVELOPER", "INNOVATION", "DEVELOPER", "EXPLORER"],
  ["DESIGN", "BACKEND", "FRONTEND", "DESIGN", "BACKEND"],
];

const Titles = ({ updateParallax }) => {
  const classes = useStyles();
  const { parallaxController } = useController();

  useEffect(() => {
    if (updateParallax) parallaxController.update();
  }, [updateParallax, parallaxController]);

  const getTransform = (i) => {
    if (i % 2 === 0) {
      return [-5, 5];
    }
    return [10, -10];
  };

  return (
    <Box className={classes.root}>
      {segments.map((segment, i) => (
        <Parallax x={getTransform(i)}>
          <Box display="flex" justifyContent="space-around">
            {segment.map((skill, j) => (
              <h1 className={j % 2 === 0 ? classes.outlined : classes.filled}>{skill}</h1>
            ))}
          </Box>
        </Parallax>
      ))}
    </Box>
  );
};

export default Titles;
