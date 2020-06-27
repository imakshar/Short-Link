import React, { useState, useEffect, useMemo } from "react";
import {
    Grid,
    Box,
    List,
    ListItem,
    ListItemText,
    Typography,
    Divider,
    makeStyles,
    ListItemSecondaryAction,
    Icon,
    Button,
    IconButton,
    CircularProgress,
} from "@material-ui/core";
import ScrollArea from "react-scrollbar";
import moment from "moment";
import PieChart from "./PieChart/PieChart";
import CreateLinkDrawer from "./CreateLinkDrawer";
import Loading from "./Loader/Loading";
import { useQuery, useMutation } from "react-apollo";
import { SHORT_LINKS, REMOVE_LINK } from "../queries";
import * as CONST from "../constants";
const useStyles = makeStyles((theme) => ({
    root: {
        "&:hover": {
            cursor: "pointer",
        },
    },
    listitemHighlightActive: {
        background: "rgba(241, 238,246,0.75)",
        cursor: "pointer",
    },
    listitemHighlightHeader: {
        borderBottom: "2px solid " + theme.palette.secondary.dark,
        background: "rgba(241, 238,246,0.75)",
    },
}));

const Dashboard = () => {
    let { data, loading } = useQuery(SHORT_LINKS);
    const classes = useStyles();
    const [activeIndex, setActiveIndex] = useState(0);
    const [shortLinks, setShortLinks] = useState([]);
    useEffect(() => {
        if (data && data?.short_links) {
            setShortLinks(data.short_links);
        }
    }, [data]);
    const [clicksAvailable, setClicksAvailable] = useState(false);
    const [delete_call, res] = useMutation(REMOVE_LINK, {
        update(cache, { data }) {
            let { short_links } = cache.readQuery({
                query: SHORT_LINKS,
            });
            let filteredData = short_links.filter(
                (e) => e.id !== short_links[activeIndex].id
            );

            cache.writeQuery({
                query: SHORT_LINKS,
                data: {
                    short_links: filteredData,
                },
            });
        },
    });
    const handleListItemClick = (index) => (event) => {
        setActiveIndex(index);
    };
    const pieChartData = useMemo(() => {
        let data = shortLinks.map((e) => {
            if (e.clicks) {
                setClicksAvailable(true);
            }
            return {
                name: e.title,
                value: e.clicks || 1,
                url: e.short_url,
            };
        });
        return data;
    }, [shortLinks]);
    const [isOpen, setIsOpen] = useState(false);
    const toggleDrawer = () => {
        setIsOpen(!isOpen);
        setEditMode({
            mode: false,
            data: {},
        });
    };
    const [editMode, setEditMode] = useState({
        mode: false,
        data: {},
    });
    const handleEdit = () => {
        setEditMode({
            mode: true,
            data: shortLinks[activeIndex],
        });
        setIsOpen(true);
    };

    const handleDelete = () => {
        delete_call({
            variables: {
                id: shortLinks[activeIndex].id,
            },
        });
    };
    return (
        <Grid container spacing={2}>
            {!loading ? (
                <React.Fragment>
                    <Grid item sm={12} md={12} xs={12}>
                        <Box
                            display="flex"
                            alignItems="center"
                            justifyContent="flex-end"
                            width="100%"
                        >
                            <Box px={4} pt={10}>
                                <Button
                                    onClick={toggleDrawer}
                                    color="secondary"
                                    startIcon={<Icon>add</Icon>}
                                    size="large"
                                >
                                    Create
                                </Button>
                            </Box>
                            <Box>
                                <CreateLinkDrawer
                                    isOpen={isOpen}
                                    toggleDrawer={toggleDrawer}
                                    editMode={editMode.mode}
                                    editModeData={editMode.data}
                                />
                            </Box>
                        </Box>
                    </Grid>
                    {shortLinks.length ? (
                        <React.Fragment>
                            <Grid item sm={12} xs={12} md={12}>
                                {clicksAvailable ? (
                                    <Box
                                        display="flex"
                                        width="100%"
                                        alignItems="center"
                                        justifyContent="flex-start"
                                        flexWrap="wrap"
                                    >
                                        <Box>
                                            <img
                                                src="/clicks.png"
                                                width="400"
                                                height="500"
                                                alt="oops"
                                            />
                                        </Box>
                                        <Box>
                                            <PieChart data={pieChartData} />
                                        </Box>
                                    </Box>
                                ) : (
                                    <Box
                                        display="flex"
                                        width="100%"
                                        alignItems="center"
                                        justifyContent="flex-start"
                                        flexWrap="wrap"
                                    >
                                        <Box>
                                            <img
                                                src="/noClicks.png"
                                                width="500"
                                                height="300"
                                                alt="oops"
                                            />
                                        </Box>
                                        <Box>
                                            <Typography
                                                color="textSecondary"
                                                variant="h6"
                                                pt={6}
                                            >
                                                <em>
                                                    No link clicks available at
                                                    this moment
                                                </em>
                                            </Typography>
                                        </Box>
                                    </Box>
                                )}
                            </Grid>
                            <Grid item sm={6} xs={12} md={4}>
                                <Box pl={2}>
                                    <List>
                                        <ListItem
                                            className={
                                                classes.listitemHighlightHeader
                                            }
                                        >
                                            <ListItemText
                                                primary={
                                                    <Typography>
                                                        {shortLinks.length}{" "}
                                                        Links
                                                    </Typography>
                                                }
                                            />
                                        </ListItem>
                                        <ScrollArea
                                            style={{ maxHeight: "65vh" }}
                                        >
                                            {shortLinks?.map((e, i) => (
                                                <React.Fragment key={i}>
                                                    <ListItem
                                                        onClick={handleListItemClick(
                                                            i
                                                        )}
                                                        className={
                                                            activeIndex === i
                                                                ? classes.listitemHighlightActive
                                                                : classes.root
                                                        }
                                                    >
                                                        <ListItemText
                                                            primary={
                                                                <Typography color="textPrimary">
                                                                    {e.title}
                                                                </Typography>
                                                            }
                                                            secondary={
                                                                <Typography color="primary">
                                                                    {
                                                                        e.short_url
                                                                    }
                                                                </Typography>
                                                            }
                                                        />
                                                        <ListItemSecondaryAction>
                                                            <Button
                                                                variant="text"
                                                                disabled
                                                                endIcon={
                                                                    <Icon>
                                                                        equalizer
                                                                    </Icon>
                                                                }
                                                            >
                                                                {e.clicks}
                                                            </Button>
                                                        </ListItemSecondaryAction>
                                                    </ListItem>
                                                    <Divider />
                                                </React.Fragment>
                                            ))}
                                        </ScrollArea>
                                    </List>
                                </Box>
                            </Grid>
                            <Grid item sm={6} xs={12} md={8}>
                                <Box
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="flex-start"
                                    width="100%"
                                    flexWrap="wrap"
                                    pt={2}
                                >
                                    <Box width="100%">
                                        <Typography
                                            variant="subtitle1"
                                            color="textSecondary"
                                        >
                                            <em>
                                                {`Created at ${moment(
                                                    shortLinks[activeIndex]
                                                        ?.createdAt
                                                ).fromNow()}`}
                                            </em>
                                        </Typography>
                                    </Box>
                                    <Box width="100%">
                                        <ListItemText
                                            primary={
                                                <Typography
                                                    color="textPrimary"
                                                    variant="h4"
                                                >
                                                    <strong>
                                                        {
                                                            shortLinks[
                                                                activeIndex
                                                            ]?.title
                                                        }
                                                    </strong>
                                                </Typography>
                                            }
                                            secondary={
                                                <Typography color="secondary">
                                                    <em>
                                                        {`${shortLinks[activeIndex]?.original_url}`}
                                                    </em>
                                                </Typography>
                                            }
                                        />
                                    </Box>

                                    <Box
                                        display="flex"
                                        flexWrap="no-wrap"
                                        justifyContent="space-between"
                                        alignItems="center"
                                    >
                                        <Box>
                                            <ListItemText
                                                primary={
                                                    <Typography color="primary">
                                                        {`${CONST.API_URL}/${shortLinks[activeIndex]?.short_url}`}
                                                    </Typography>
                                                }
                                            />
                                        </Box>
                                        <Box>
                                            <IconButton onClick={handleEdit}>
                                                <Icon>edit</Icon>
                                            </IconButton>
                                        </Box>
                                        <Box>
                                            {res.loading ? (
                                                <CircularProgress />
                                            ) : (
                                                <IconButton
                                                    onClick={handleDelete}
                                                >
                                                    <Icon>delete</Icon>
                                                </IconButton>
                                            )}
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                        </React.Fragment>
                    ) : (
                        <Grid item sm={12} md={8} xs={12}>
                            <Box
                                display="flex"
                                width="100%"
                                alignItems="center"
                                justifyContent="center"
                                flexWrap="wrap"
                            >
                                <Box>
                                    <img
                                        src="/bg1.png"
                                        width="400"
                                        height="500"
                                        alt="oops"
                                    />
                                </Box>
                                <Box>
                                    <Typography
                                        color="textSecondary"
                                        variant="h6"
                                    >
                                        <em>No Links Available</em>
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                    )}
                </React.Fragment>
            ) : (
                <Grid item sm={12} md={12} xs={12}>
                    <Box
                        display="flex"
                        width="100%"
                        alignItems="center"
                        justifyContent="center"
                        pt={25}
                    >
                        <Box>
                            <Loading />
                        </Box>
                    </Box>
                </Grid>
            )}
        </Grid>
    );
};

export default Dashboard;
