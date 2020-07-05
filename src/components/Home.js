import React from "react";
import {
    Grid,
    Card,
    CardContent,
    makeStyles,
    Typography,
    Box,
    CardMedia,
    Button,
    Avatar,
    IconButton,
} from "@material-ui/core";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Parallax from "./Header/Parallax";
import landingPageImg from "../assest/images/landingPageImg.jpg";
import linkShare from "../assest/images/linkShare.png";
import chill from "../assest/images/chill.png";
import RisedCard from "./General/RisedCard";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
const useStyles = makeStyles((theme) => ({
    title: {
        color: "white",
        textDecoration: "none",
        fontWeight: "700",
    },
    cardMedia: {
        width: "100%",
        height: 245,
    },
    primary: {
        color: theme.palette.primary.main + "!important",
    },
    primaryDark: {
        color: theme.palette.primary.dark + "!important",
    },
    secondary: {
        color: theme.palette.secondary.dark + "!important",
    },
    secondaryLight: {
        color: theme.palette.secondary.light + "!important",
    },
    avatar: {
        width: 100,
        height: 100,
    },
}));
const Home = (props) => {
    const classes = useStyles();
    const handleProfileClick = (type) => (event) => {
        if (type === "git") {
            window.open("https://github.com/imakshar");
        } else if (type === "tw") {
            window.open("https://twitter.com/iamAksharr");
        } else if (type === "gitlab") {
            window.open("https://gitlab.com/imakshar");
        } else if (type === "in") {
            window.open("https://www.linkedin.com/in/iamakshar");
        }
    };
    const handleClick = (type) => (event) => {
        if (type === "dashboard") {
            props.history.push("/dashboard");
        } else if (type === "signin") {
            props.history.push("/signin");
        }
    };
    return (
        <div>
            <Header
                color="transparent"
                changeColorOnScroll={{
                    height: 300,
                    color: "primaryLight",
                }}
            />
            <Parallax image={landingPageImg}>
                <Box>
                    <Grid container>
                        <Grid item sm={12} xs={12} md={12}>
                            <Box
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                                width="100%"
                                px={4}
                            >
                                <Box width="100%">
                                    <Typography
                                        variant="h4"
                                        className={classes.title}
                                        color="textPrimary"
                                    >
                                        URL shortening service and a link
                                        management platform...
                                    </Typography>
                                    <Box
                                        display="flex"
                                        justifyContent="flex-end"
                                        width="100%"
                                    >
                                        <Typography
                                            variant="h5"
                                            className={classes.title}
                                            color="textSecondary"
                                        >
                                            <em>
                                                a{" "}
                                                <strong
                                                    className={classes.primary}
                                                >
                                                    bit.ly{" "}
                                                </strong>
                                                short url clone
                                            </em>
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Parallax>
            <Grid container>
                <Grid item sm={12} md={12} xs={12} lg={12}>
                    <RisedCard>
                        <Card style={{ minHeight: 500 }}>
                            <CardContent>
                                <Grid container spacing={2}>
                                    <Grid item sm={12} xs={12} md={12}>
                                        <Box
                                            display="flex"
                                            justifyContent="center"
                                            width="100%"
                                        >
                                            <Typography
                                                variant="h5"
                                                color="textPrimary"
                                                className={classes.secondary}
                                            >
                                                <strong>
                                                    Let's Talk about product...
                                                </strong>
                                            </Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item sm={6} xs={12} md={4}>
                                        <CardMedia
                                            className={classes.cardMedia}
                                            image={linkShare}
                                        />
                                    </Grid>
                                    <Grid item sm={6} xs={12} md={8}>
                                        <Box
                                            display="flex"
                                            justifyContent="center"
                                            alignItems="center"
                                            width="100%"
                                            pt={6}
                                        >
                                            <Box>
                                                <Typography
                                                    variant="h5"
                                                    color="textPrimary"
                                                >
                                                    <span>
                                                        <strong
                                                            className={
                                                                classes.primary
                                                            }
                                                        >
                                                            Integrate seamlessly
                                                            with the tools you
                                                            love
                                                        </strong>
                                                        <br />
                                                        <em
                                                            className={
                                                                classes.secondaryLight
                                                            }
                                                        >
                                                            shortlink integrates
                                                            with nearly every
                                                            social media saving
                                                            you time and hassle.
                                                            Need to create links
                                                            at scale?
                                                            Shortlink’s got you
                                                            covered. Whether you
                                                            need 100 links or
                                                            100,000, the open
                                                            and flexible
                                                            Shortlink API makes
                                                            it simple and
                                                            seamless.
                                                        </em>
                                                    </span>
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </Grid>

                                    <Grid item sm={6} xs={12} md={8}>
                                        <Box
                                            display="flex"
                                            justifyContent="center"
                                            alignItems="center"
                                            width="100%"
                                            pt={6}
                                        >
                                            <Box>
                                                <Typography
                                                    variant="h5"
                                                    color="textPrimary"
                                                >
                                                    <span>
                                                        <strong
                                                            className={
                                                                classes.primary
                                                            }
                                                        >
                                                            Rest assured knowing
                                                            your links are
                                                            secure
                                                        </strong>
                                                        <br />
                                                        <em
                                                            className={
                                                                classes.secondaryLight
                                                            }
                                                        >
                                                            Shortlink is
                                                            dedicated to
                                                            ensuring your links
                                                            are safe and
                                                            reliable. Every link
                                                            you create using
                                                            Shortlink is
                                                            encrypted with HTTPS
                                                            to maximize
                                                            protection against
                                                            eavesdropping or
                                                            tampering by third
                                                            parties, keeping
                                                            your content safe
                                                            from the bad guys.
                                                        </em>
                                                    </span>
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </Grid>
                                    <Grid item sm={6} xs={12} md={4}>
                                        <CardMedia
                                            className={classes.cardMedia}
                                            image={chill}
                                        />
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} md={12} sm={12}>
                                    <Box
                                        display="flex"
                                        width="100%"
                                        justifyContent="center"
                                        py={4}
                                    >
                                        {localStorage.getItem(
                                            "short_link_auth"
                                        ) ? (
                                            <Box>
                                                <Button
                                                    variant="contained"
                                                    color="primary"
                                                    onClick={handleClick(
                                                        "dashboard"
                                                    )}
                                                >
                                                    Go to Dashboard
                                                </Button>
                                            </Box>
                                        ) : (
                                            <Box>
                                                <Button
                                                    variant="contained"
                                                    color="primary"
                                                    onClick={handleClick(
                                                        "signin"
                                                    )}
                                                >
                                                    Get Started for free
                                                </Button>
                                            </Box>
                                        )}
                                    </Box>
                                </Grid>
                                <Grid item xs={12} sm={12} md={12}>
                                    <Box
                                        display="flex"
                                        justifyContent="center"
                                        alignItems="center"
                                        alignContent="center"
                                        py={4}
                                        flexWrap="wrap"
                                        width="100%"
                                    >
                                        <Box>
                                            <Avatar
                                                className={classes.avatar}
                                                src="https://pbs.twimg.com/profile_images/1189062272867545088/JRyYc_Sf_400x400.jpg"
                                            />
                                        </Box>
                                        <Box
                                            width="100%"
                                            display="flex"
                                            justifyContent="center"
                                        >
                                            <Typography
                                                color="textSecondary"
                                                variant="h6"
                                            >
                                                Akshar Sarvaiya
                                            </Typography>
                                        </Box>
                                        <Button
                                            size="medium"
                                            onClick={handleProfileClick("git")}
                                            startIcon={
                                                <GitHubIcon
                                                    style={{ color: "black" }}
                                                />
                                            }
                                            disableElevation
                                        >
                                            GitHub
                                        </Button>
                                        <Button
                                            size="medium"
                                            onClick={handleProfileClick("tw")}
                                            startIcon={
                                                <TwitterIcon
                                                    style={{
                                                        color:
                                                            "rgb(29, 161, 242)",
                                                    }}
                                                />
                                            }
                                        >
                                            Twitter
                                        </Button>
                                        <Button
                                            size="medium"
                                            onClick={handleProfileClick("in")}
                                            startIcon={
                                                <LinkedInIcon
                                                    style={{
                                                        color: "#0073b1",
                                                    }}
                                                />
                                            }
                                        >
                                            LinkedIn
                                        </Button>
                                    </Box>
                                </Grid>
                            </CardContent>
                        </Card>
                    </RisedCard>
                </Grid>
            </Grid>

            <Footer />
        </div>
    );
};

export default Home;
