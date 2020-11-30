import { Box, Button, Fade, makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import StyledButton from "./StyledButton";

const useStyles = makeStyles(() => ({
  root: (props) => ({
    position: "relative",
    "& h1": () => ({}),
    "& img": (props) => ({
      transition: "0.3s all ease-in-out",
      opacity: props.open ? "20%" : "100%",
      borderRadius: 10,
    }),
  }),

  modal: {
    position: "absolute",
    width: "100%",
    maxWidth: 600,
    border: "none",
    borderRadius: 10,
    backgroundColor: "#22223a",
    padding: "1em",
  },

  buttonOut: {
    marginTop: "1em",
    color: "#e17c69",
    borderColor: "#e17c69",
    borderWidth: "2px",
    backgroundColor: "transparent",
    fontWeight: 800,
    borderRadius: 0,
    transition: "0.2s ease-in-out",
    "&:hover": {
      backgroundColor: "#e17c69",
      color: "#22223a",
    },
  },
  btnGroup: {
    position: "absolute",
    top: "40%",
    left: "50%",
    transform: "translateX(-50%)",
  },
}));

const Project = (props) => {
  const {
    project: { live, url, image },
  } = props;

  const [open, setOpen] = useState(false);

  const classes = useStyles({ open: open });

  const goToSource = () => {
    window.open(url);
  };

  const goToLive = () => {
    window.open(live);
  };

  return (
    <>
      <Box container className={classes.root} onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
        <img src={image} alt="hej" />
        {open && (
          <Fade in={open}>
            <Box display="flex" flexDirection="column" justifyContent="space-between" className={classes.btnGroup}>
              <StyledButton onClick={goToSource}>View source</StyledButton>
              {live && (
                <Button className={classes.buttonOut} variant="outlined" onClick={goToLive}>
                  Live site
                </Button>
              )}
            </Box>
          </Fade>
        )}
      </Box>
    </>
  );
};

export default Project;
