import { Container, Box, makeStyles } from "@material-ui/core";
import React, { useState, useEffect, useMemo, useRef } from "react";
import { useSpring, useSprings, animated, interpolate } from "react-spring";
import VisibilitySensor from "react-visibility-sensor";

const useStyles = makeStyles((theme, props) => ({
  root: (props) => ({
    margin: "2rem",
    "& h1": (props) => ({}),
    "& img": (props) => ({}),
  }),
}));

const Project = (props) => {
  const {
    project: { image, header, gradient, info, highlight },
  } = props;

  const classes = useStyles({ gradient, highlight: highlight });

  const [open, setOpen] = useState(false);

  if (open) {
    return <Box>Open LOL!</Box>;
  }
  return (
    <Container maxWidth="xl" style={{ width: "100%" }}>
      <Box container className={classes.root}>
        <img src={image} />
        <h1>{header}</h1>
        <p>{info}</p>
      </Box>
    </Container>
  );
};

export default Project;
