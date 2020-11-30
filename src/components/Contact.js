import { Box, Container, Grid, makeStyles, Snackbar, TextField, withStyles } from "@material-ui/core";
import { Alert, AlertTitle } from "@material-ui/lab";
import emailjs from "emailjs-com";
import { Formik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import useResize from "../hooks/useResize";
import StyledButton from "./StyledButton";

const StyledTextField = withStyles({
  root: {
    "& label": {
      color: "#fff",
    },
    "& label.Mui-focused": {
      color: "#fff",
    },
    "& .MuiOutlinedInput-root": {
      color: "#fff",
      "& fieldset": {
        borderColor: "#E17C69",
      },
      "&:hover fieldset": {
        borderColor: "#E17C69",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#E17C69",
      },
      "&.MuiOutlinedInput-input": {
        color: "#fff",
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
    flexDirection: "column",
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
  const [sentEmail, setSentEmail] = useState({ success: false, header: "", msg: "" });
  const [sentEmailError, setSentEmailError] = useState({ success: false, header: "", msg: "" });

  const width = useResize();

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

        <Formik
          initialValues={{ email: "", name: "", message: "" }}
          onSubmit={async (values, { setSubmitting }) => {
            setSubmitting(true);
            try {
              await emailjs.send(
                process.env.REACT_APP_SERVICE_ID,
                process.env.REACT_APP_TEMPLATE_ID,
                {
                  email: values.email,
                  message: values.message,
                  name: values.name,
                },
                process.env.REACT_APP_USER_ID
              );
              setSentEmail({
                success: true,
                header: "Email sent, cool!",
                msg: `Thanks for your interest ${values.name}! I'll get back to you as soon as possible / Viktor Malmedal`,
              });
            } catch (e) {
              setSentEmailError({
                success: false,
                header: "Oops, something went wrong",
                msg:
                  "Sorry, seems like my email service is not working at the moment. Please try to contact me through some of my other social medias",
              });
            }
          }}
          validationSchema={Yup.object().shape({
            email: Yup.string().email().required("Required"),
            name: Yup.string().required("Required"),
            message: Yup.string().required("Required"),
          })}
        >
          {(props) => {
            const { values, touched, errors, isSubmitting, handleChange, handleSubmit } = props;
            return (
              <form onSubmit={handleSubmit} className={classes.form}>
                <Grid container spacing={width > 599 ? 3 : 0}>
                  <Grid item xs={12} sm={6}>
                    <StyledTextField
                      error={errors.email && touched.email}
                      name="email"
                      style={{ width: "100%" }}
                      className={classes.input}
                      label="Email"
                      variant="outlined"
                      value={values.email}
                      onChange={handleChange}
                      helperText={errors.name && touched.name && errors.name}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <StyledTextField
                      error={errors.name && touched.name}
                      name="name"
                      style={{ width: "100%" }}
                      className={classes.input}
                      label="Name"
                      variant="outlined"
                      value={values.name}
                      onChange={handleChange}
                      helperText={errors.name && touched.name && errors.name}
                    />
                  </Grid>
                </Grid>
                <StyledTextField
                  error={errors.message && touched.message}
                  name="message"
                  multiline
                  className={classes.input}
                  rows={10}
                  label="Message"
                  variant="outlined"
                  value={values.message}
                  helperText={errors.name && touched.name && errors.name}
                  onChange={handleChange}
                />
                <StyledButton type="submit" disabled={isSubmitting} className={classes.button}>
                  Send
                </StyledButton>
              </form>
            );
          }}
        </Formik>
        <Snackbar
          open={sentEmail.success}
          autoHideDuration={6000}
          onClose={() => setSentEmail({ ...sentEmail, success: false })}
        >
          <Alert onClose={() => setSentEmail({ ...sentEmail, success: false })}>
            <AlertTitle>{sentEmail.header}</AlertTitle>
            {sentEmail.msg}
          </Alert>
        </Snackbar>
        <Snackbar
          open={sentEmailError.failed}
          autoHideDuration={6000}
          onClose={() => setSentEmail({ ...sentEmailError, failed: false })}
        >
          <Alert onClose={() => setSentEmail({ ...sentEmailError, failed: false })}>
            <AlertTitle>{sentEmailError.header}</AlertTitle>
            {sentEmailError.msg}
          </Alert>
        </Snackbar>
      </Box>
    </Container>
  );
};

export default Contact;
