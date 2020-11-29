import { Box, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles(() => ({
  root: () => ({
    "& h1": () => ({}),
    "& img": () => ({
      borderRadius: 10,
    }),
  }),
}));

const Project = (props) => {
  const {
    project: { image, gradient, highlight },
  } = props;

  const classes = useStyles({ gradient, highlight: highlight });

  return (
    <Box container className={classes.root}>
      <img src={image} alt="hej" />
    </Box>
  );
};

export default Project;
