import React, { useState, useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { CircularProgress } from "@material-ui/core";
import { useMutation } from "react-apollo";
import { RESET_PASSWORD } from "../../queries";
import Axios from "axios";
import * as CONST from "../../constants";
import { useSnackbar } from "notistack";
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
    token: "",
    new_password: "",
    isEmailSubmitted: false,
};
const ForgotPassword = (props) => {
    const classes = useStyles();
    const { enqueueSnackbar } = useSnackbar();
    const [state, setState] = useState(initialState);
    const [loadingState, setLoadingState] = useState(false);
    const [rest_password_call, { data, loading, error }] = useMutation(
        RESET_PASSWORD
    );
    const handleChange = (type) => (event) => {
        let value = event.target.value;
        setState((s) => ({
            ...s,
            [type]: value,
        }));
    };
    const handleCancel = () => {
        props.history.push("/");
    };
    const handelSubmit = async () => {
        if (!state.isEmailSubmitted) {
            setLoadingState(true);
            Axios.post(`${CONST.API_URL}/api/forgot_password/${state.email}`)
                .then((res) => {
                    enqueueSnackbar(res.data.message, {
                        variant: "success",
                        autoHideDuration: 4000,
                        anchorOrigin: {
                            vertical: "top",
                            horizontal: "center",
                        },
                    });
                    setLoadingState(false);
                    setState((s) => ({
                        ...s,
                        isEmailSubmitted: true,
                    }));
                })
                .catch((error) => {
                    setLoadingState(false);
                    enqueueSnackbar(error.response.data.message, {
                        variant: "error",
                        autoHideDuration: 4000,
                        anchorOrigin: {
                            vertical: "top",
                            horizontal: "center",
                        },
                    });
                });
        } else {
            rest_password_call({
                variables: {
                    ...state,
                },
            }).catch((error) => {});
        }
    };
    useEffect(() => {
        if (error) {
            setLoadingState(false);
            enqueueSnackbar(error?.graphQLErrors[0]?.message, {
                variant: "error",
                autoHideDuration: 4000,
                anchorOrigin: {
                    vertical: "top",
                    horizontal: "center",
                },
            });
        }
    }, [error]);
    useEffect(() => {
        if (data && data.reset_password) {
            setLoadingState(false);
            enqueueSnackbar("Password has been rest successfully", {
                variant: "success",
                autoHideDuration: 4000,
                anchorOrigin: {
                    vertical: "top",
                    horizontal: "center",
                },
            });
            props.history.push("/signin");
        }
    }, [data]);
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    {state.isEmailSubmitted
                        ? "Set New Password"
                        : "Forgot Password"}
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
                        disabled={state.isEmailSubmitted}
                    />
                    {state.isEmailSubmitted ? (
                        <>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                type="token"
                                id="token"
                                label="Password Rest Token"
                                name="token"
                                autoComplete="token"
                                autoFocus
                                value={state.token}
                                onChange={handleChange("token")}
                                disabled={loading}
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                type="password"
                                id="New Password"
                                label="New Password"
                                name="New Password"
                                autoComplete="New Password"
                                autoFocus
                                value={state.new_password}
                                onChange={handleChange("new_password")}
                                disabled={loading}
                            />
                        </>
                    ) : null}

                    <Box
                        display="flex"
                        alignItems="center"
                        width="100%"
                        justifyContent="space-between"
                    >
                        <Box width="100%" pr={2}>
                            {loadingState || loading ? (
                                <CircularProgress />
                            ) : (
                                <Button
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                    disabled={
                                        loading ||
                                        (state.isEmailSubmitted &&
                                            !(
                                                state.email.length &&
                                                state.new_password.length &&
                                                state.token.length
                                            ))
                                    }
                                    onClick={handelSubmit}
                                >
                                    Submit
                                </Button>
                            )}
                        </Box>
                        <Box width="100%" pl={2}>
                            <Button
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                                onClick={handleCancel}
                                // disabled={loading}
                            >
                                Cancel
                            </Button>
                        </Box>
                    </Box>
                </form>
            </div>
        </Container>
    );
};

export default ForgotPassword;
