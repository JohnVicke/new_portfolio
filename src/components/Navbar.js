import React, { useState, useEffect } from "react";
import NavItems from "./NavItems";
import UseAnimations from "react-useanimations";
import github from "react-useanimations/lib/github";
import linkedin from "react-useanimations/lib/linkedin";
import { Box, Container, Grow, makeStyles } from "@material-ui/core";
import content from "../content/content.json";
import useCursorHandlers from "../utils/useCursorHandlers";

const useStyles = makeStyles(() => ({
  root: {
    position: "fixed",
    top: 0,
    left: "50%",
    transform: "translateX(-50%)",
  },
  right: {
    fontSize: "1.2rem",
    marginLeft: "2em",
    color: "#e17c69",
    fontWeight: 800,
  },
}));

const items = content["nav-items"];

const Navbar = () => {
  const [loaded, setLoaded] = useState(false);

  const classes = useStyles();
  const cursorHandlers = useCursorHandlers();

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 1500);
  }, []);

  return (
    <Container maxWidth="xl" className={classes.root}>
      <Box display="flex" justifyContent="space-between" style={{ padding: "1em 0" }} className="navbar">
        <Box width="80px" display="flex" justifyContent="space-between" className="navbar-left">
          <UseAnimations strokeColor="#e17c69" loop size={30} animation={github} />
          <UseAnimations strokeColor="#e17c69" loop size={30} animation={linkedin} />
        </Box>
        <Box display="flex" justifyContent="space-between">
          {items.map((x, i) => (
            <Grow in={loaded} style={{ transformOrigin: "0 0 0" }} {...(loaded ? { timeout: 1000 * (i + 2) } : {})}>
              <p {...cursorHandlers} className={classes.right}>
                {x}
              </p>
            </Grow>
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default Navbar;
