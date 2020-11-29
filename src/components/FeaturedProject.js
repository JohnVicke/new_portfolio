import React from "react";
import { Grid, Button, makeStyles } from "@material-ui/core";
import { Parallax } from "react-scroll-parallax";
import StyledButton from "./StyledButton";
import alanify from "../assets/alanify_new.png";
import useResize from "../hooks/useResize";

const useStyles = makeStyles(() => ({
  root: {},
  img: {
    maxWidth: "100%",
  },
  right: {
    "& h3": {
      letterSpacing: "0.4em",
      color: "#fff",
      textTransform: "uppercase",
      margin: "0.5em 0",
    },
  },
}));

const FeaturedProject = () => {
  const width = useResize();
  const classes = useStyles({ isMobile: width < 810 });

  const goToSource = (e) => {
    e.preventDefault();
    window.open("https://github.com/JohnVicke/Alanify");
  };

  return (
    <Grid container spacing={6} className={classes.root} data-aos="fade-up">
      {width > 959 && (
        <Grid item xs={12} sm={6}>
          <img className={classes.img} src={alanify} alt="lol" />
        </Grid>
      )}
      <Grid item className={classes.right} xs={12} md={6}>
        {width > 959 && <h3>featured project</h3>}
        <h1>Alanify </h1>
        <p>
          One feature I love on spotify is being able to discover new music with their "radio" feature. I often find new
          songs that I like but forget to add to playlists because I'm too focused on what I'm doing. Shouldn't it be
          possible to easily add the current song to a playlist via voice?
        </p>
        {width < 960 && (
          <Grid item xs={12} sm={6}>
            <img style={{ marginTop: "2em" }} className={classes.img} src={alanify} alt="lol" />
          </Grid>
        )}
        <StyledButton style={{ marginTop: "2em" }} onClick={goToSource}>
          View source
        </StyledButton>
      </Grid>
    </Grid>
  );
};

export default FeaturedProject;
