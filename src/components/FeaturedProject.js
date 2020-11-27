import { Box, Button, makeStyles } from "@material-ui/core";
import React from "react";
import { Parallax } from "react-scroll-parallax";
import Featured from "../assets/featured.svg";

const useStyles = makeStyles(() => ({
  root: {},
}));

const FeaturedProject = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <h1>Featured project</h1>
    </Box>
  );
};

export default FeaturedProject;
