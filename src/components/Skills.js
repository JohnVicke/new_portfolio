import { Box, Container, makeStyles } from "@material-ui/core";
import React from "react";
import design from "../assets/design.svg";
import useResize from "../hooks/useResize";

const useStyles = makeStyles(() => ({
  root: {
    padding: (props) => (props.resize ? 0 : "1em 0"),
    width: "100%",
    backgroundColor: "#E17C69",
  },
  designSVG: {
    position: "absolute",
    top: 0,
    right: -30,
  },
  segTop: {
    maxHeight: "200px",
    display: "flex",
    justifyContent: "space-evenly",
    flexDirection: "column",
  },
  segP: {
    height: "200px",
  },
  seg: {
    backgroundColor: "#22223a",
    width: "100%",
    borderRadius: 10,
    padding: (props) => (props.resize ? "0" : "1em 0"),
    "& p": {
      textAlign: "center",
      margin: "1em",
      fontSize: "1rem",
    },
    "& h3": {
      fontSize: "1rem",
      textAlign: "center",
      color: "#E17C69",
      letterSpacing: "0.1em",
    },
    "& h2": {
      fontSize: "2rem",
      textAlign: "center",
      color: "#fff",
      letterSpacing: "0.1em",
      "& span": {
        color: "#E17C69",
        fontWeight: 200,
        fontStyle: "italic",
        fontSize: "1rem",
        margin: (props) => (props.resize ? "0 1em" : "0 0.3em"),
      },
    },
  },
}));

const segments = [
  {
    name: "Frontend",
    info:
      "I like to code things from scratch and bring my ideas to life. Whether it is in the browser, on a phone or an IOT device does'nt really matter.",
    skills: ["React", "Vue", "HTML", "CSS/SASS"],
  },
  {
    name: "Backend",
    info:
      "To have a functioning system, there has to be a robust backend supporting it. I love the logical problem solving that is required to create a solid backend",
    skills: ["Express", ".NET", "SQL", "NoSQL", "GraphQL"],
  },
  {
    name: "Design",
    info:
      "Having a good system is cool. But who wants to use a system that doesn't look the part? I like to experiment and mix old UI/UX principles with new innovative ways to design applications.",
    skills: ["Adobe Suite", "Figma", "Pen/Paper", "Sketch"],
  },
];

const Skills = () => {
  const width = useResize();
  const classes = useStyles({ reisze: width < 1054 });
  const getHeader = (i) => {
    switch (i) {
      case 0: {
        return (
          <Box>
            <h2 style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span>{"<div>"}</span>
              {segments[i].name}
              <span>{"</div>"}</span>
            </h2>
          </Box>
        );
      }
      case 1: {
        return (
          <Box>
            <h2 style={{ display: "flex", alignItems: "center", justifyContent: "center", marginLeft: "-1em" }}>
              <span>{"$"}</span>
              {segments[i].name}
            </h2>
          </Box>
        );
      }
      case 2: {
        return (
          <Box display="flex" justifyContent="center">
            <div style={{ position: "relative" }}>
              <h2>{segments[i].name}</h2>
              <img className={classes.designSVG} src={design} alt="d" />
            </div>
          </Box>
        );
      }
      default: {
        return;
      }
    }
  };

  const getMargin = (i) => {
    if (i === 1 && width > 1024) {
      return "1em";
    }
    return "1em 0";
  };
  return (
    <Box className={classes.root}>
      <Container maxWidth="lg">
        <Box
          display="flex"
          justifyContent="space-between"
          flexDirection={`${width > 1054 ? "row" : "column"}`}
          className={classes.segContainer}
        >
          {segments.map((seg, i) => (
            <Box key={i} className={classes.seg} style={{ margin: `${getMargin(i)}` }}>
              <Box className={classes.segTop}>
                <h2>{getHeader(i)}</h2>
                <p className={classes.segP}>{seg.info}</p>
                <h3>Technologies used:</h3>
              </Box>
              {seg.skills.map((x, j) => (
                <p key={x + j} data-aos={`${j % 2 === 0 ? "fade-right" : "fade-left"}`}>
                  {x}
                </p>
              ))}
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Skills;
