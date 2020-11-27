import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
import Skill from "./Skill";

const useStyles = makeStyles(() => ({
  root: {
    background: "#e17c69",
  },
}));

const segments = [
  {
    header: "Frontend development",
    icon: "Icon",
    description: "sasifjaksf",
    technologyUsed: [
      {
        text: "ReactJS",
        icon: "icon",
      },
      {
        text: "VueJS",
        icon: "icon",
      },
    ],
  },
  {
    header: "Backend development",
    icon: "Icon",
    description: "sasifjaksf",
    technologyUsed: [
      {
        text: "ExpressJS",
        icon: "icon",
      },
      {
        text: ".NET",
        icon: "icon",
      },
    ],
  },
  {
    header: "UI/UX",
    icon: "Icon",
    description: "sasifjaksf",
    technologyUsed: [
      {
        text: "Adobe suite",
        icon: "icon",
      },
      {
        text: "Figma",
        icon: "icon",
      },
    ],
  },
];

const Skills = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      {segments.map((seg) => (
        <Grid item xs={12} md={4}>
          <Skill info={seg} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Skills;
