import { Container, Box, makeStyles } from "@material-ui/core";
import React, { useState, useEffect, useMemo, useRef } from "react";
import { useSpring, useSprings, animated, interpolate } from "react-spring";
import VisibilitySensor from "react-visibility-sensor";

const useStyles = makeStyles((theme, props) => ({
  root: (props) => ({
    "& h1": (props) => ({}),
    "& img": (props) => ({
      borderRadius: 10,
    }),
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
    <Box container className={classes.root}>
      <img src={image} />
    </Box>
  );
};

export default Project;
