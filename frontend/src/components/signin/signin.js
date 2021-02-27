import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Formik } from 'formik';
import * as Yup from 'yup';
import './signin.css'
import {
  useHistory,
  Link
} from "react-router-dom";
import { useAuth, AuthProvider } from '../../AuthContext'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  link: {
    color: "blue",
    "&:hover": {
      color: "blue",
      textDecoration: "None"
    }
  }
}));

export default function Signin() {
  const useAuthHere = useAuth();
  const classes = useStyles();
  let history = useHistory();
  return (
    <Formik
      initialValues={{ username: "", password: "" }}
      onSubmit={(values, { setSubmitting }) => {
        useAuthHere.login(values.username, values.password);
        history.push("/");
      }}
      // here goes the validation
      validationSchema={Yup.object().shape({
        username: Yup.string()
                    .required("Required"),

        password: Yup.string()
          .required("No password provided")
          .min(8, "Password is too short")
          .matches(/(?=.*[0-9])/, "Password should contain a number")
      })}
    >
      {props => {
        const {
          values,
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit
        } = props;
        return (
          <Container component="main" maxWidth="xs" >
            <CssBaseline />
            <div className={classes.paper}>
              <Typography component="h1" variant="h5">
                Sign in
        </Typography>
              <form className={classes.form} noValidate onSubmit={handleSubmit}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  value={values.username}
                  onChange={handleChange} onBlur={handleBlur}
                  className={errors.username && touched.username && "error"}
                />
                {errors.username && touched.username && (
                  <div className="input-feedback">
                    {errors.username}
                  </div>
                )}
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={values.password} onChange={handleChange} onBlur={handleBlur}
                />
                {errors.password && touched.password && (
                  <div className="input-feedback">
                    {errors.password}
                  </div>
                )}
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Sign In
          </Button>
                <Grid item>
                  <Link to="/signup" className={classes.link}>
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </form>
            </div>
          </Container>
        );
      }}
    </Formik>
  )
}