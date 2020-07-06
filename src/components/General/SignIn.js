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
import { useMutation } from "react-apollo";
import { SIGNIN } from "../../queries";
import Alert from "@material-ui/lab/Alert";
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
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const initialState = {
    email: "",
    password: "",
};
export default function SignIn(props) {
    const classes = useStyles();
    const [state, setState] = useState(initialState);
    const [signin_call, { data, error, loading }] = useMutation(SIGNIN);

    const handelCacel = () => {
        props.history.push("/");
    };
    const handelSubmit = async (event) => {
        event.preventDefault();

        signin_call({
            variables: {
                ...state,
            },
        })
            .then()
            .catch((error) => {});
        return false;
    };
    useEffect(() => {
        if (data && !error && data?.signin) {
            localStorage.setItem("short_link_auth", data.signin.token);
            window.location.href = "/";
        }
    }, [data, error]);
    const handleChange = (key) => (event) => {
        let value = event.target.value;
        setState((s) => ({
            ...s,
            [key]: value,
        }));
    };
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <form className={classes.form} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        type="email"
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        value={state.email}
                        onChange={handleChange("email")}
                        disabled={loading}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        value={state.password}
                        disabled={loading}
                        autoComplete="current-password"
                        onChange={handleChange("password")}
                    />
                    <Box
                        display="flex"
                        alignItems="center"
                        width="100%"
                        justifyContent="space-between"
                    >
                        <Box width="100%" pr={2}>
                            {loading ? (
                                <CircularProgress />
                            ) : (
                                <Button
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                    disabled={
                                        loading ||
                                        !(
                                            state.email.length &&
                                            state.password.length
                                        )
                                    }
                                    onClick={handelSubmit}
                                >
                                    Sign In
                                </Button>
                            )}
                        </Box>
                        <Box width="100%" pl={2}>
                            <Button
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                                onClick={handelCacel}
                                disabled={loading}
                            >
                                Cancel
                            </Button>
                        </Box>
                    </Box>
                    <Grid container justify="flex-end">
                        <Grid item xs>
                            <Link href="/forgot_passeord" variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>
                        {error ? (
                            <Grid item sm={12} md={12}>
                                <Box width="100%" pb={2}>
                                    <Alert severity="error">
                                        {error?.graphQLErrors[0]?.message}
                                    </Alert>
                                </Box>
                            </Grid>
                        ) : null}
                        <Grid item>
                            <Link href="/signup" variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={8}>
                <Copyright />
            </Box>
        </Container>
    );
}
