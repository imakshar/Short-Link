import React from "react";
import { Route, Redirect } from "react-router-dom";
import NavBar from "../Header/NavBar";

const Wrapper = (props) => {
    return (
        <React.Fragment>
            <NavBar />
            {props.children}
        </React.Fragment>
    );
};
const PrivateRoute = (props) => {
    const Component = props.component || props.render;
    return localStorage.getItem("short_link_auth") ? (
        <Route
            path={props.path}
            exact={props.exact || false}
            render={(props) => (
                <Wrapper>
                    <Component {...props} />
                </Wrapper>
            )}
        />
    ) : (
        <Redirect to="/signin" />
    );
};

export { PrivateRoute };
