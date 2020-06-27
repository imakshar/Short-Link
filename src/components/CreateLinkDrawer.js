import React, { useState, useEffect } from "react";
import {
    Box,
    Drawer,
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Icon,
    makeStyles,
    TextField,
    Button,
    CircularProgress,
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { useMutation } from "react-apollo";
import { CREATE_SHORTLINK, SHORT_LINKS, UPDATE_LINK_INFO } from "../queries";
import { useSnackbar } from "notistack";
const useStyles = makeStyles((theme) => ({
    drawer: {
        width: 400,
    },
}));
const initialState = {
    title: "ShortLink - Power of the URL",
    original_url: "",
    short_url: "",
};
const CreateLinkDrawer = ({ isOpen, toggleDrawer, editMode, editModeData }) => {
    const classes = useStyles();
    const { enqueueSnackbar } = useSnackbar();
    useEffect(() => {
        if (editMode) {
            setState(editModeData);
        }
    }, [editModeData, editMode]);
    const [state, setState] = useState(initialState);
    const [create_link_call, { loading }] = useMutation(CREATE_SHORTLINK, {
        update(cache, { data }) {
            let { short_links } = cache.readQuery({
                query: SHORT_LINKS,
            });
            cache.writeQuery({
                query: SHORT_LINKS,
                data: {
                    short_links: [data.create_shortLink, ...short_links],
                },
            });
            enqueueSnackbar("Link Added", {
                variant: "success",
                autoHideDuration: 2000,
                anchorOrigin: {
                    vertical: "top",
                    horizontal: "center",
                },
            });
            setValidationError(null);
            setState(initialState);
            toggleDrawer();
        },
        onError(error) {
            setValidationError(error.graphQLErrors[0].message);
        },
    });
    const [update_link_call, res] = useMutation(UPDATE_LINK_INFO, {
        update(cache, { data }) {
            let { short_links } = cache.readQuery({
                query: SHORT_LINKS,
            });
            let updatedData = short_links.map((e) => {
                if (e.id === data.update_link_info.id) {
                    e = {
                        ...data.update_link_info,
                    };
                }
                return e;
            });
            cache.writeQuery({
                query: SHORT_LINKS,
                data: {
                    short_links: updatedData,
                },
            });
            enqueueSnackbar("Link Updated", {
                variant: "success",
                autoHideDuration: 2000,
                anchorOrigin: {
                    vertical: "top",
                    horizontal: "center",
                },
            });
            setValidationError(null);
            setState(initialState);
            toggleDrawer();
        },
        onError(error) {
            setValidationError(error.graphQLErrors[0].message);
        },
    });
    const [validationError, setValidationError] = useState(false);
    const handleChange = (key) => (event) => {
        let value = event.target.value;
        setState((s) => ({
            ...s,
            [key]: value,
        }));
    };
    const handleSubmit = () => {
        if (state.original_url) {
            if (editMode) {
                update_link_call({
                    variables: {
                        ...state,
                        title: state.title || initialState.title,
                    },
                });
            } else {
                create_link_call({
                    variables: {
                        ...state,
                        title: state.title || initialState.title,
                    },
                });
            }
        } else {
            setValidationError("Original URL can't be empty");
        }
    };
    const [submitting, setSubmitting] = useState(false);
    useEffect(() => {
        if (loading || res.loading) {
            setSubmitting(true);
        } else {
            setSubmitting(false);
        }
    }, [loading, res.loading]);
    const handleClose = () => {
        setState(initialState);
        toggleDrawer();
    };
    return (
        <Drawer anchor="right" open={isOpen} onClose={handleClose}>
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                width="100%"
                className={classes.drawer}
            >
                <Box width="100%">
                    <AppBar position="relative" color="secondary">
                        <Toolbar variant="regular">
                            <Box
                                display="flex"
                                alignItems="center"
                                justifyContent="space-between"
                                width="100%"
                            >
                                <Box width="100%">
                                    <Typography variant="h6" color="inherit">
                                        Create Short Link
                                    </Typography>
                                </Box>
                                <Box>
                                    <IconButton
                                        onClick={toggleDrawer}
                                        color="inherit"
                                    >
                                        <Icon>close</Icon>
                                    </IconButton>
                                </Box>
                            </Box>
                        </Toolbar>
                    </AppBar>
                </Box>
                <Box mt={2} px={2} width="100%">
                    <Box width="100%" my={2}>
                        <TextField
                            fullWidth
                            variant="outlined"
                            label="Title"
                            value={state.title}
                            onChange={handleChange("title")}
                        />
                    </Box>
                    <Box width="100%" my={2}>
                        <TextField
                            fullWidth
                            variant="outlined"
                            label="Paste your long url here..."
                            value={state.original_url}
                            onChange={handleChange("original_url")}
                        />
                    </Box>
                    <Box width="100%" my={2}>
                        <TextField
                            fullWidth
                            variant="outlined"
                            label="Custom Url ?"
                            value={state.short_url}
                            onChange={handleChange("short_url")}
                        />
                    </Box>
                    <Box width="100%" my={2}>
                        <Button
                            fullWidth
                            color="secondary"
                            variant="contained"
                            onClick={handleSubmit}
                            disabled={loading}
                        >
                            {submitting ? (
                                <CircularProgress color="primary" />
                            ) : editMode ? (
                                "Save"
                            ) : (
                                "Create"
                            )}
                        </Button>
                    </Box>
                    <Box width="100%" my={2}>
                        <Typography variant="subtitle2" color="textSecondary">
                            Note: If you don't have custom url, don't worry we
                            will make one for you.
                        </Typography>
                    </Box>
                    {validationError ? (
                        <Box width="100%" my={2}>
                            <Alert severity="error">{validationError}</Alert>
                        </Box>
                    ) : null}
                </Box>
            </Box>
        </Drawer>
    );
};

export default CreateLinkDrawer;
