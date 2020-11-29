import { Box, Container, FormControl, makeStyles, TextField, withStyles } from "@material-ui/core";
import React from "react";
import StyledButton from "./StyledButton";

const StyledTextField = withStyles({
  root: {
    "& label": {
      color: "#fff",
    },
    "& label.Mui-focused": {
      color: "#fff",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "green",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#E17C69",
      },
      "&:hover fieldset": {
        borderColor: "#E17C69",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#E17C69",
      },
    },
  },
})(TextField);

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    margin: "4em 0",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  header: {
    width: "100%",
    maxWidth: "600px",
    "& h2": {
      fontSize: "2rem",
      color: "#fff",
      letterSpacing: "0.1em",
    },
    "& p": {
      fontSize: "1rem",
    },
  },
  form: {
    marginTop: "2em",
    width: "100%",
    maxWidth: "600px",
    display: "flex",
    alignSelf: "center",
    margin: "0 auto",
  },
  input: {
    marginBottom: "1em",
  },
  button: {
    alignSelf: "center",
    width: "20%",
  },
});

const Contact = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="lg">
      <Box className={classes.root}>
        <Box className={classes.header}>
          <h2>Ok, Lets create something great!</h2>
          <p>
            If you like my work and have some cool project to work on, send me a direct message or contact me through my
            social sites.
          </p>
        </Box>

        <FormControl className={classes.form}>
          <StyledTextField className={classes.input} label="Email" variant="outlined" />
          <StyledTextField multiline className={classes.input} rows={10} label="Message" variant="outlined" />
          <StyledButton className={classes.button}>Send</StyledButton>
        </FormControl>
      </Box>
    </Container>
  );
};

export default Contact;
