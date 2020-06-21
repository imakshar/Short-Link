import React, { useState, useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Icon, CircularProgress } from "@material-ui/core";

import Alert from "@material-ui/lab/Alert";
import { useMutation } from "react-apollo";
import { SIGNUP, SIGNIN } from "../../queries";
const Joi = require("@hapi/joi");
function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            © 2020, made with
            <Icon style={{ paddingTop: 3, color: "red" }}>favorite</Icon>
            by{" "}
            <Link href="https://www.linkedin.com/in/iamakshar/" variant="body2">
                {"Akshar Sarvaiya"}
            </Link>
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: "100%", // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const schema = Joi.object({
    name: Joi.string()
        .min(3)
        .max(30)
        .required()
        .error((errs) => {
            errs.forEach((err) => {
                switch (err.code) {
                    case "string.min":
                        err.message = "Name Must be 3 characters long";
                        break;
                    case "string.max":
                        err.message = "Name Must be 30 less than characters";
                        break;
                    default:
                        err.message = "Name Can't be empty";
                }
            });
            return errs;
        }),
    email: Joi.string().email({ tlds: { allow: false } }),
    password: Joi.string()
        .pattern(new RegExp("^[a-zA-Z0-9]{8,30}$"))
        .required()
        .error((errs) => {
            errs.forEach((err) => {
                switch (err.code) {
                    default:
                        err.message = "Password Must be 8 character long";
                }
            });
            return errs;
        }),
    confirm_password: Joi.ref("password"),
});
const initialState = {
    name: "Akshar",
    email: "J@x.com",
    password: "asdfghjk",
    confirm_password: "asdfghjk",
};
export default function SignUp() {
    const classes = useStyles();
    const [state, setState] = useState(initialState);
    const [signup_call, { data, loading, error }] = useMutation(SIGNUP);
    const [signin_call, res] = useMutation(SIGNIN);
    const [client_error, setClient_erro] = useState();
    const handelSubmit = async (event) => {
        event.stopPropagation();
        event.preventDefault();

        try {
            await schema.validateAsync(state);
            const { confirm_password, ...rest } = state;
            signup_call({
                variables: {
                    ...rest,
                },
            })
                .then()
                .catch((e) => {});
        } catch (err) {
            if (err) {
                setClient_erro(err?.details[0].message);
            }
        }
    };
    const handelChange = (key) => (event) => {
        let value = event.target.value;
        setClient_erro("");
        setState((s) => ({
            ...s,
            [key]: value,
        }));
    };
    useEffect(() => {
        if (data && !error && data?.signup) {
            signin_call({
                variables: {
                    email: state.email,
                    password: state.password,
                },
            })
                .then()
                .catch((e) => {});
        }
    }, [data, error, signin_call, state]);

    useEffect(() => {
        if (!res?.loading && res?.data?.signin) {
            localStorage.setItem("short_link_auth", res.data.signin);
            window.location.href = "/";
        }
    }, [res.data, res.loading, res]);
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                autoComplete="Name"
                                name="Name"
                                variant="outlined"
                                required
                                fullWidth
                                id="Name"
                                label="Name"
                                autoFocus
                                value={state.name}
                                onChange={handelChange("name")}
                                disabled={loading}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                disabled={loading}
                                value={state.email}
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                onChange={handelChange("email")}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                value={state.password}
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="password"
                                disabled={loading}
                                onChange={handelChange("password")}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                value={state.confirm_password}
                                disabled={loading}
                                name="confirm password"
                                label="Confirm Password"
                                type="password"
                                id="confirm_password"
                                autoComplete="confirm-password"
                                onChange={handelChange("confirm_password")}
                            />
                        </Grid>
                    </Grid>
                    <Grid container justify="center">
                        <Grid item sm={12} md={12}>
                            {loading ? (
                                <Box
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="center"
                                    width="100%"
                                    py={2}
                                >
                                    <Box>
                                        <CircularProgress />
                                    </Box>
                                </Box>
                            ) : (
                                <Button
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                    onClick={handelSubmit}
                                    disabled={loading}
                                >
                                    Sign Up
                                </Button>
                            )}
                        </Grid>
                    </Grid>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Link href="/signin" variant="body2">
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>

                    {client_error || error ? (
                        <Grid container justify="center">
                            <Grid item sm={12} md={12}>
                                <Box width="100%" pt={2}>
                                    <Alert severity="error">
                                        {client_error ||
                                            error?.graphQLErrors[0]?.message}
                                    </Alert>
                                </Box>
                            </Grid>
                        </Grid>
                    ) : null}
                </form>
            </div>
            <Box mt={5}>
                <Copyright />
            </Box>
        </Container>
    );
}
