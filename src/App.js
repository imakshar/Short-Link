import React from "react";

/* -------------------------------------------------------------------------- */
/*                               Apollo Imports                               */
/* -------------------------------------------------------------------------- */

import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { split } from "apollo-link";
import { getMainDefinition } from "apollo-utilities";
import { WebSocketLink } from "apollo-link-ws";
import { ApolloProvider } from "@apollo/react-hooks";
import { setContext } from "apollo-link-context";

/* -------------------------------------------------------------------------- */
/*                               App Boilerplate                              */
/* -------------------------------------------------------------------------- */

import * as CONSTS from "./constants.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import { SnackbarProvider } from "notistack";

/* -------------------------------------------------------------------------- */
/*                                 Components                                 */
/* -------------------------------------------------------------------------- */

import Home from "./components/Home";
import { theme } from "./theme.js";
import { PrivateRoute } from "./components/Routes/Routes.js";
import Dashboard from "./components/Dashboard.js";
import SignIn from "./components/General/SignIn.js";
import SignUp from "./components/General/SignUp.js";
import NotFoundPage from "./components/General/NotFoundPage.js";

/* -------------------------------------------------------------------------- */
/*                               Create ws Link                               */
/* -------------------------------------------------------------------------- */

const wsLink = new WebSocketLink({
    uri: CONSTS.WS_URL,
    options: {
        reconnect: true,
        connectionParams: {
            authToken: localStorage.getItem("short_link_auth"),
        },
    },
});

const authLink = setContext((_, { headers }) => {
    /* ------ get the authentication token from local storage if it exists ------ */

    const token = localStorage.getItem("short_link_auth");

    /* ------- return the headers to the context so httpLink can read them ------ */

    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : "",
        },
    };
});

/* -------------------------------------------------------------------------- */
/*                               Create HttpLink                              */
/* -------------------------------------------------------------------------- */

const httpLink = authLink.concat(
    new HttpLink({
        uri: CONSTS.API_URL + "/graphql",
    })
);

const link = split(
    // split based on operation type
    ({ query }) => {
        const definition = getMainDefinition(query);
        return (
            definition.kind === "OperationDefinition" &&
            definition.operation === "subscription"
        );
    },
    wsLink,
    httpLink
);

const client = new ApolloClient({
    link,
    cache: new InMemoryCache({
        addTypename: false,
    }),
});

function App() {
    return (
        <div>
            <CssBaseline />
            <ApolloProvider client={client}>
                <ThemeProvider theme={theme}>
                    <SnackbarProvider maxSnack={4}>
                        <Router>
                            <Switch>
                                <Route exact path="/" title="Home " component={Home}/>
                                <Route exact path="/signin" title="Signin " component={SignIn}/>
                                <Route exact path="/signup" title="Signup " component={SignUp}/>
                                <PrivateRoute  exact path="/Dashboard" title="Home" component={Dashboard} />
                                <Route  path="/" title="Error " component={NotFoundPage}/>
                            </Switch>
                        </Router>
                    </SnackbarProvider>
                </ThemeProvider>
            </ApolloProvider>
        </div>
    );
}

export default App;
