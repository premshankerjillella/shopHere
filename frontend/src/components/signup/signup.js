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
import {
    useHistory,
    Link
} from "react-router-dom";
import { useAuth, AuthProvider } from '../../AuthContext'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import axios from 'axios'
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

export default function Signup() {
    const useAuthHere = useAuth();
    const classes = useStyles();
    let history = useHistory();
    return (
        <Formik
            initialValues={{ username: "", email: "", password: "" }}
            onSubmit={(values, { setSubmitting }) => {
                axios.post('http://localhost:8000/ecommerce/register/', {
                    "username": values.username,
                    "email": values.email,
                    "password": values.password
                }).then((response) => {
                    console.log(response);
                }, (error) => {
                    console.log(error);
                });
                // useAuthHere.register(values.username, values.email, values.password);
                history.push("/signin");
            }}
            // here goes the validation
            validationSchema={Yup.object().shape({
                email: Yup.string()
                    .email()
                    .required("Required"),
                password: Yup.string()
                    .required("No password provided")
                    .min(8, "Password is too short")
                    .matches(/(?=.*[0-9])/, "Password should contain a number"),
                username: Yup.string()
                    .required("Required"),
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
                            <form className={classes.form} noValidate onSubmit={handleSubmit}>
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="username"
                                    label="Username"
                                    name="username"
                                    autoComplete="email"
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
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    value={values.email}
                                    onChange={handleChange} onBlur={handleBlur}
                                    className={errors.email && touched.email && "error"}
                                />
                                {errors.email && touched.email && (
                                    <div className="input-feedback">
                                        {errors.email}
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
                                    Sign Up
          </Button>
                            </form>
                        </div>
                    </Container>
                );
            }}
        </Formik>
    )
}