import { Box, Container, Grow, makeStyles, Slide } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import UseAnimations from "react-useanimations";
import github from "react-useanimations/lib/github";
import linkedin from "react-useanimations/lib/linkedin";
import menu from "react-useanimations/lib/menu2";
import vima from "../assets/vima_no_text.svg";
import content from "../content/content.json";
import useResize from "../hooks/useResize";

const useStyles = makeStyles(() => ({
  root: {
    zIndex: 999,
    position: "fixed",
    top: 0,
    left: "50%",
    transform: "translateX(-50%)",
    backgroundColor: "#22223a",
    width: "100%",
    "& p": {
      fontSize: ".8rem",
    },
  },
  right: {
    fontSize: "1.2rem",
    marginLeft: "2em",
    color: "#e17c69",
    fontWeight: 800,
    cursor: "pointer",
  },
  hamP: {
    fontSize: "1.2rem",
    color: "#e17c69",
    fontWeight: 800,
    cursor: "pointer",
  },
  modal: {
    paddingTop: "1em",
    paddingBottom: "1em",
    position: "fixed",
    bottom: "46px",
    right: 0,
    width: "100%",
    backgroundColor: "#22223a",
    zIndex: 1,
    overflowY: "hidden",
  },
  navbar: {
    zIndex: 999999,
  },
  hamRoot: {
    bottom: 0,
    width: "100%",
    zIndex: 999,
    position: "fixed",
    left: "50%",
    transform: "translateX(-50%)",
    backgroundColor: "#22223a",
  },
}));

const items = content["nav-items"];

const Navbar = ({ callback }) => {
  const classes = useStyles();
  const width = useResize();

  const [loaded, setLoaded] = useState(false);
  const [open, setOpen] = useState(false);

  const goTo = (x) => {
    callback(x);
  };

  const openLinkedIn = () => {
    window.open("https://www.linkedin.com/in/viktor-malmedal/");
  };

  const openGitHub = () => {
    window.open("https://github.com/JohnVicke");
  };

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 1500);
  }, []);

  if (width < 425) {
    return (
      <Box>
        <Box display="flex" justifyContent="space-between" style={{ padding: "0.5em " }} className={classes.hamRoot}>
          <Box display="flex" className="navbar-left">
            <UseAnimations strokeColor="#e17c69" loop size={30} animation={github} onClick={openGitHub} />
            <UseAnimations strokeColor="#e17c69" loop size={30} animation={linkedin} onClick={openLinkedIn} />
          </Box>
          <img src={vima} alt="vima" className={classes.vima} style={{ width: "30px", marginRight: "30px" }} />
          <UseAnimations
            reverse={open}
            onClick={() => setOpen(!open)}
            strokeColor="#e17c69"
            size={30}
            animation={menu}
          />
        </Box>
        <Slide in={open} direction="up">
          <Box className={classes.modal}>
            <Box display="flex" flexDirection="column" justifyContent="space-between" alignItems="center">
              {items.map((x, i) => (
                <Grow in={loaded} style={{ transformOrigin: "0 0 0" }} {...(open ? { timeout: 50 * (i + 2) } : {})}>
                  <p onClick={() => goTo(x)} className={classes.hamP}>
                    {x}
                  </p>
                </Grow>
              ))}
            </Box>
          </Box>
        </Slide>
      </Box>
    );
  }

  return (
    <Box className={classes.root}>
      <Container maxWidth="lg">
        <Box display="flex" justifyContent="space-between" style={{ padding: ".5em 0" }} className="navbar">
          <Box width="60px" display="flex" justifyContent="space-between" className="navbar-left">
            <UseAnimations strokeColor="#e17c69" loop size={25} animation={github} onClick={openGitHub} />
            <UseAnimations strokeColor="#e17c69" loop size={25} animation={linkedin} onClick={openLinkedIn} />
          </Box>
          <Box display="flex" justifyContent="space-between">
            {items.map((x, i) => (
              <Grow in={loaded} style={{ transformOrigin: "0 0 0" }} {...(loaded ? { timeout: 1000 * (i + 2) } : {})}>
                <p onClick={() => goTo(x)} className={classes.right}>
                  {x}
                </p>
              </Grow>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
