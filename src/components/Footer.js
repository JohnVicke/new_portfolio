import { Box, Container, makeStyles } from "@material-ui/core";
import React from "react";
import vima from "../assets/vima_no_text.svg";
import arrow from "../assets/vima_arrow.svg";

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    backgroundColor: "#111128",
    padding: "0.5em 0",
    "& p": {
      fontSize: "1rem",
    },
  },
  vima: {
    width: "50px",
  },
  arrow: {
    width: "30px",
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Container maxWidth="xl">
        <Box display="flex" justifyContent="space-between" alignItems="center" className={classes.container}>
          <img src={vima} className={classes.vima} alt="vima" />
          <p>Malmedal, Viktor &copy;</p>
          <Box display="flex" alignItems="center" onClick={() => window.scrollTo(0, 0)}>
            <p style={{ marginRight: "20px" }}>Go to top</p>
            <img src={arrow} className={classes.arrow} alt="arrow" />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
