import React from "react";
const AuthRequired = (props) => {
    return localStorage.getItem("short_link_auth") ? (
        <React.Fragment>{props.children}</React.Fragment>
    ) : props.fallback ? (
        <React.Fragment>{props.fallback}</React.Fragment>
    ) : null;
};

export default AuthRequired;
