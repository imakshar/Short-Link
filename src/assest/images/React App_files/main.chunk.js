(this["webpackJsonpfrontend-boiler"] = this["webpackJsonpfrontend-boiler"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/Loader/loading.css":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/components/Loader/loading.css ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".lds-ellipsis {\n    display: inline-block;\n    position: relative;\n    width: 80px;\n    height: 80px;\n}\n.lds-ellipsis div {\n    position: absolute;\n    top: 33px;\n    width: 13px;\n    height: 13px;\n    border-radius: 50%;\n    background: black;\n    animation-timing-function: cubic-bezier(0, 1, 1, 0);\n}\n.lds-ellipsis div:nth-child(1) {\n    left: 8px;\n    animation: lds-ellipsis1 0.6s infinite;\n}\n.lds-ellipsis div:nth-child(2) {\n    left: 8px;\n    animation: lds-ellipsis2 0.6s infinite;\n}\n.lds-ellipsis div:nth-child(3) {\n    left: 32px;\n    animation: lds-ellipsis2 0.6s infinite;\n}\n.lds-ellipsis div:nth-child(4) {\n    left: 56px;\n    animation: lds-ellipsis3 0.6s infinite;\n}\n@keyframes lds-ellipsis1 {\n    0% {\n        transform: scale(0);\n    }\n    100% {\n        transform: scale(1);\n    }\n}\n@keyframes lds-ellipsis3 {\n    0% {\n        transform: scale(1);\n    }\n    100% {\n        transform: scale(0);\n    }\n}\n@keyframes lds-ellipsis2 {\n    0% {\n        transform: translate(0, 0);\n    }\n    100% {\n        transform: translate(24px, 0);\n    }\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-client */ "./node_modules/apollo-client/bundle.esm.js");
/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-cache-inmemory */ "./node_modules/apollo-cache-inmemory/lib/bundle.esm.js");
/* harmony import */ var apollo_link_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-link-http */ "./node_modules/apollo-link-http/lib/bundle.esm.js");
/* harmony import */ var apollo_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! apollo-link */ "./node_modules/apollo-link/lib/bundle.esm.js");
/* harmony import */ var apollo_utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! apollo-utilities */ "./node_modules/apollo-utilities/lib/bundle.esm.js");
/* harmony import */ var apollo_link_ws__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! apollo-link-ws */ "./node_modules/apollo-link-ws/lib/bundle.esm.js");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var apollo_link_context__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! apollo-link-context */ "./node_modules/apollo-link-context/lib/bundle.esm.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./constants.js */ "./src/constants.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! notistack */ "./node_modules/notistack/dist/notistack.esm.js");
/* harmony import */ var _components_Home__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/Home */ "./src/components/Home.js");
/* harmony import */ var _theme_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./theme.js */ "./src/theme.js");
/* harmony import */ var _components_Routes_Routes_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/Routes/Routes.js */ "./src/components/Routes/Routes.js");
/* harmony import */ var _components_Dashboard_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/Dashboard.js */ "./src/components/Dashboard.js");
/* harmony import */ var _components_General_SignIn_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/General/SignIn.js */ "./src/components/General/SignIn.js");
/* harmony import */ var _components_General_SignUp_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/General/SignUp.js */ "./src/components/General/SignUp.js");
var _jsxFileName = "/Users/developer1/Documents/shortLink - FrontEnd/src/App.js";

/* -------------------------------------------------------------------------- */

/*                               Apollo Imports                               */

/* -------------------------------------------------------------------------- */









/* -------------------------------------------------------------------------- */

/*                               App Boilerplate                              */

/* -------------------------------------------------------------------------- */





/* -------------------------------------------------------------------------- */

/*                                 Components                                 */

/* -------------------------------------------------------------------------- */







/* -------------------------------------------------------------------------- */

/*                               Create ws Link                               */

/* -------------------------------------------------------------------------- */

const wsLink = new apollo_link_ws__WEBPACK_IMPORTED_MODULE_6__["WebSocketLink"]({
  uri: _constants_js__WEBPACK_IMPORTED_MODULE_9__["WS_URL"],
  options: {
    reconnect: true,
    connectionParams: {
      authToken: localStorage.getItem("short_link_auth")
    }
  }
});
const authLink = Object(apollo_link_context__WEBPACK_IMPORTED_MODULE_8__["setContext"])((_, {
  headers
}) => {
  /* ------ get the authentication token from local storage if it exists ------ */
  const token = localStorage.getItem("short_link_auth");
  /* ------- return the headers to the context so httpLink can read them ------ */

  return {
    headers: { ...headers,
      authorization: token ? `Bearer ${token}` : ""
    }
  };
});
/* -------------------------------------------------------------------------- */

/*                               Create HttpLink                              */

/* -------------------------------------------------------------------------- */

const httpLink = authLink.concat(new apollo_link_http__WEBPACK_IMPORTED_MODULE_3__["HttpLink"]({
  uri: _constants_js__WEBPACK_IMPORTED_MODULE_9__["API_URL"] + "/graphql"
}));
const link = Object(apollo_link__WEBPACK_IMPORTED_MODULE_4__["split"])( // split based on operation type
({
  query
}) => {
  const definition = Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_5__["getMainDefinition"])(query);
  return definition.kind === "OperationDefinition" && definition.operation === "subscription";
}, wsLink, httpLink);
const client = new apollo_client__WEBPACK_IMPORTED_MODULE_1__["ApolloClient"]({
  link,
  cache: new apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_2__["InMemoryCache"]({
    addTypename: false
  })
});

function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["CssBaseline"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_7__["ApolloProvider"], {
    client: client,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["ThemeProvider"], {
    theme: _theme_js__WEBPACK_IMPORTED_MODULE_14__["theme"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(notistack__WEBPACK_IMPORTED_MODULE_12__["SnackbarProvider"], {
    maxSnack: 4,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__["BrowserRouter"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__["Switch"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 29
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__["Route"], {
    exact: true,
    path: "/",
    title: "Home ",
    component: _components_Home__WEBPACK_IMPORTED_MODULE_13__["default"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 33
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__["Route"], {
    exact: true,
    path: "/signin",
    title: "Signin ",
    component: _components_General_SignIn_js__WEBPACK_IMPORTED_MODULE_17__["default"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 33
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__["Route"], {
    exact: true,
    path: "/signup",
    title: "Signup ",
    component: _components_General_SignUp_js__WEBPACK_IMPORTED_MODULE_18__["default"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 33
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Routes_Routes_js__WEBPACK_IMPORTED_MODULE_15__["PrivateRoute"], {
    exact: true,
    path: "/dashboard",
    title: "Home",
    component: _components_Dashboard_js__WEBPACK_IMPORTED_MODULE_16__["default"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 33
    }
  })))))));
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/assest/images/chill.png":
/*!*************************************!*\
  !*** ./src/assest/images/chill.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/chill.c03d5351.png";

/***/ }),

/***/ "./src/assest/images/landingPageImg.jpg":
/*!**********************************************!*\
  !*** ./src/assest/images/landingPageImg.jpg ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/landingPageImg.c3b5e57e.jpg";

/***/ }),

/***/ "./src/assest/images/linkShare.png":
/*!*****************************************!*\
  !*** ./src/assest/images/linkShare.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/linkShare.5e3d46e1.png";

/***/ }),

/***/ "./src/components/CreateLinkDrawer.js":
/*!********************************************!*\
  !*** ./src/components/CreateLinkDrawer.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_lab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/lab */ "./node_modules/@material-ui/lab/esm/index.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/lib/react-apollo.esm.js");
/* harmony import */ var _queries__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../queries */ "./src/queries.js");
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! notistack */ "./node_modules/notistack/dist/notistack.esm.js");
var _jsxFileName = "/Users/developer1/Documents/shortLink - FrontEnd/src/components/CreateLinkDrawer.js";






const useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  drawer: {
    width: 400
  }
}));
const initialState = {
  title: "ShortLink - Power of the URL",
  original_url: "",
  short_url: ""
};

const CreateLinkDrawer = ({
  isOpen,
  toggleDrawer,
  editMode,
  editModeData
}) => {
  const classes = useStyles();
  const {
    enqueueSnackbar
  } = Object(notistack__WEBPACK_IMPORTED_MODULE_5__["useSnackbar"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (editMode) {
      setState(editModeData);
    }
  }, [editModeData, editMode]);
  const [state, setState] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialState);
  const [create_link_call, {
    loading
  }] = Object(react_apollo__WEBPACK_IMPORTED_MODULE_3__["useMutation"])(_queries__WEBPACK_IMPORTED_MODULE_4__["CREATE_SHORTLINK"], {
    update(cache, {
      data
    }) {
      let {
        short_links
      } = cache.readQuery({
        query: _queries__WEBPACK_IMPORTED_MODULE_4__["SHORT_LINKS"]
      });
      cache.writeQuery({
        query: _queries__WEBPACK_IMPORTED_MODULE_4__["SHORT_LINKS"],
        data: {
          short_links: [data.create_shortLink, ...short_links]
        }
      });
      enqueueSnackbar("Link Added", {
        variant: "success",
        autoHideDuration: 2000,
        anchorOrigin: {
          vertical: "top",
          horizontal: "center"
        }
      });
      setValidationError(null);
      setState(initialState);
      toggleDrawer();
    },

    onError(error) {
      setValidationError(error.graphQLErrors[0].message);
    }

  });
  const [update_link_call, res] = Object(react_apollo__WEBPACK_IMPORTED_MODULE_3__["useMutation"])(_queries__WEBPACK_IMPORTED_MODULE_4__["UPDATE_LINK_INFO"], {
    update(cache, {
      data
    }) {
      let {
        short_links
      } = cache.readQuery({
        query: _queries__WEBPACK_IMPORTED_MODULE_4__["SHORT_LINKS"]
      });
      let updatedData = short_links.map(e => {
        if (e.id === data.update_link_info.id) {
          e = { ...data.update_link_info
          };
        }

        return e;
      });
      cache.writeQuery({
        query: _queries__WEBPACK_IMPORTED_MODULE_4__["SHORT_LINKS"],
        data: {
          short_links: updatedData
        }
      });
      enqueueSnackbar("Link Updated", {
        variant: "success",
        autoHideDuration: 2000,
        anchorOrigin: {
          vertical: "top",
          horizontal: "center"
        }
      });
      setValidationError(null);
      setState(initialState);
      toggleDrawer();
    },

    onError(error) {
      setValidationError(error.graphQLErrors[0].message);
    }

  });
  const [validationError, setValidationError] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const handleChange = key => event => {
    let value = event.target.value;
    setState(s => ({ ...s,
      [key]: value
    }));
  };

  const handleSubmit = () => {
    if (state.original_url) {
      if (editMode) {
        update_link_call({
          variables: { ...state,
            title: state.title || initialState.title
          }
        });
      } else {
        create_link_call({
          variables: { ...state,
            title: state.title || initialState.title
          }
        });
      }
    } else {
      setValidationError("Original URL can't be empty");
    }
  };

  const [submitting, setSubmitting] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
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

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Drawer"], {
    anchor: "right",
    open: isOpen,
    onClose: handleClose,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    className: classes.drawer,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    width: "100%",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["AppBar"], {
    position: "relative",
    color: "secondary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Toolbar"], {
    variant: "regular",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 29
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    width: "100%",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 33
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h6",
    color: "inherit",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 37
    }
  }, "Create Short Link")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 33
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["IconButton"], {
    onClick: toggleDrawer,
    color: "inherit",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 37
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 41
    }
  }, "close"))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    mt: 2,
    px: 2,
    width: "100%",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    width: "100%",
    my: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    fullWidth: true,
    variant: "outlined",
    label: "Title",
    value: state.title,
    onChange: handleChange("title"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 25
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    width: "100%",
    my: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    fullWidth: true,
    variant: "outlined",
    label: "Paste your long url here...",
    value: state.original_url,
    onChange: handleChange("original_url"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 25
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    width: "100%",
    my: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    fullWidth: true,
    variant: "outlined",
    label: "Custom Url ?",
    value: state.short_url,
    onChange: handleChange("short_url"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 25
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    width: "100%",
    my: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    fullWidth: true,
    color: "secondary",
    variant: "contained",
    onClick: handleSubmit,
    disabled: loading,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 25
    }
  }, submitting ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CircularProgress"], {
    color: "primary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 33
    }
  }) : editMode ? "Save" : "Create")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    width: "100%",
    my: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "subtitle2",
    color: "textSecondary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 25
    }
  }, "Note: If you don't have custom url, don't worry we will make one for you.")), validationError ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    width: "100%",
    my: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_lab__WEBPACK_IMPORTED_MODULE_2__["Alert"], {
    severity: "error",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 29
    }
  }, validationError)) : null)));
};

/* harmony default export */ __webpack_exports__["default"] = (CreateLinkDrawer);

/***/ }),

/***/ "./src/components/Dashboard.js":
/*!*************************************!*\
  !*** ./src/components/Dashboard.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react_scrollbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-scrollbar */ "./node_modules/react-scrollbar/dist/scrollArea.js");
/* harmony import */ var react_scrollbar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_scrollbar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _PieChart_PieChart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PieChart/PieChart */ "./src/components/PieChart/PieChart.js");
/* harmony import */ var _CreateLinkDrawer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CreateLinkDrawer */ "./src/components/CreateLinkDrawer.js");
/* harmony import */ var _Loader_Loading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Loader/Loading */ "./src/components/Loader/Loading.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/lib/react-apollo.esm.js");
/* harmony import */ var _queries__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../queries */ "./src/queries.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../constants */ "./src/constants.js");
var _jsxFileName = "/Users/developer1/Documents/shortLink - FrontEnd/src/components/Dashboard.js";










const useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  root: {
    "&:hover": {
      cursor: "pointer"
    }
  },
  listitemHighlightActive: {
    background: "rgba(241, 238,246,0.75)",
    cursor: "pointer"
  },
  listitemHighlightHeader: {
    borderBottom: "2px solid " + theme.palette.secondary.dark,
    background: "rgba(241, 238,246,0.75)"
  }
}));

const Dashboard = () => {
  var _shortLinks$activeInd, _shortLinks$activeInd2, _shortLinks$activeInd3, _shortLinks$activeInd4;

  let {
    data,
    loading
  } = Object(react_apollo__WEBPACK_IMPORTED_MODULE_7__["useQuery"])(_queries__WEBPACK_IMPORTED_MODULE_8__["SHORT_LINKS"]);
  const classes = useStyles();
  const [activeIndex, setActiveIndex] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const [shortLinks, setShortLinks] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (data && (data === null || data === void 0 ? void 0 : data.short_links)) {
      setShortLinks(data.short_links);
    }
  }, [data]);
  const [clicksAvailable, setClicksAvailable] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [delete_call, res] = Object(react_apollo__WEBPACK_IMPORTED_MODULE_7__["useMutation"])(_queries__WEBPACK_IMPORTED_MODULE_8__["REMOVE_LINK"], {
    update(cache, {
      data
    }) {
      let {
        short_links
      } = cache.readQuery({
        query: _queries__WEBPACK_IMPORTED_MODULE_8__["SHORT_LINKS"]
      });
      let filteredData = short_links.filter(e => e.id !== short_links[activeIndex].id);
      cache.writeQuery({
        query: _queries__WEBPACK_IMPORTED_MODULE_8__["SHORT_LINKS"],
        data: {
          short_links: filteredData
        }
      });
    }

  });

  const handleListItemClick = index => event => {
    setActiveIndex(index);
  };

  const pieChartData = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => {
    let data = shortLinks.map(e => {
      if (e.clicks) {
        setClicksAvailable(true);
      }

      return {
        name: e.title,
        value: e.clicks || 1,
        url: e.short_url
      };
    });
    return data;
  }, [shortLinks]);
  const [isOpen, setIsOpen] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
    setEditMode({
      mode: false,
      data: {}
    });
  };

  const [editMode, setEditMode] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    mode: false,
    data: {}
  });

  const handleEdit = () => {
    setEditMode({
      mode: true,
      data: shortLinks[activeIndex]
    });
    setIsOpen(true);
  };

  const handleDelete = () => {
    delete_call({
      variables: {
        id: shortLinks[activeIndex].id
      }
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    container: true,
    spacing: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 9
    }
  }, !loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    sm: 12,
    md: 12,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    width: "100%",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    px: 4,
    pt: 10,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 29
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    onClick: toggleDrawer,
    color: "secondary",
    startIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 48
      }
    }, "add"),
    size: "large",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 33
    }
  }, "Create")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 29
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CreateLinkDrawer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    isOpen: isOpen,
    toggleDrawer: toggleDrawer,
    editMode: editMode.mode,
    editModeData: editMode.data,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 33
    }
  })))), shortLinks.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    container: true,
    spacing: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    sm: 12,
    xs: 12,
    md: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 29
    }
  }, clicksAvailable ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
    flexWrap: "wrap",
    px: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 37
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 41
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/clicks.png",
    width: "100",
    height: "50%",
    alt: "oops",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 45
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    pl: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 41
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PieChart_PieChart__WEBPACK_IMPORTED_MODULE_4__["default"], {
    data: pieChartData,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 45
    }
  }))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
    flexWrap: "wrap",
    px: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 37
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 41
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/noClicks.png",
    width: "70%",
    height: "300",
    alt: "oops",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 45
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 41
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    color: "textSecondary",
    variant: "h6",
    pt: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 45
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("em", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 49
    }
  }, "No link clicks available at this moment"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    sm: 6,
    xs: 12,
    md: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 29
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    pl: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 33
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["List"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 37
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
    className: classes.listitemHighlightHeader,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 41
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItemText"], {
    primary: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 209,
        columnNumber: 53
      }
    }, shortLinks.length, " ", "Links"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 45
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_scrollbar__WEBPACK_IMPORTED_MODULE_2___default.a, {
    style: {
      maxHeight: "65vh"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 41
    }
  }, shortLinks === null || shortLinks === void 0 ? void 0 : shortLinks.map((e, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    key: i,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 49
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
    onClick: handleListItemClick(i),
    className: activeIndex === i ? classes.listitemHighlightActive : classes.root,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 53
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItemText"], {
    primary: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
      color: "textPrimary",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 233,
        columnNumber: 65
      }
    }, e.title),
    secondary: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
      color: "primary",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 238,
        columnNumber: 65
      }
    }, e.short_url),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 57
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItemSecondaryAction"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245,
      columnNumber: 57
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "text",
    disabled: true,
    endIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 250,
        columnNumber: 69
      }
    }, "equalizer"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 61
    }
  }, e.clicks))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259,
      columnNumber: 53
    }
  }))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    sm: 6,
    xs: 12,
    md: 8,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266,
      columnNumber: 29
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
    flexWrap: "wrap",
    pt: 2,
    px: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267,
      columnNumber: 33
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    width: "100%",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276,
      columnNumber: 37
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "subtitle1",
    color: "textSecondary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277,
      columnNumber: 41
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("em", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281,
      columnNumber: 45
    }
  }, `Created at ${moment__WEBPACK_IMPORTED_MODULE_3___default()((_shortLinks$activeInd = shortLinks[activeIndex]) === null || _shortLinks$activeInd === void 0 ? void 0 : _shortLinks$activeInd.createdAt).fromNow()}`))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    width: "100%",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289,
      columnNumber: 37
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItemText"], {
    primary: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
      color: "textPrimary",
      variant: "h4",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 292,
        columnNumber: 49
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 296,
        columnNumber: 53
      }
    }, (_shortLinks$activeInd2 = shortLinks[activeIndex]) === null || _shortLinks$activeInd2 === void 0 ? void 0 : _shortLinks$activeInd2.title)),
    secondary: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
      color: "secondary",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 306,
        columnNumber: 49
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("em", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 307,
        columnNumber: 53
      }
    }, `${(_shortLinks$activeInd3 = shortLinks[activeIndex]) === null || _shortLinks$activeInd3 === void 0 ? void 0 : _shortLinks$activeInd3.original_url}`)),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290,
      columnNumber: 41
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    display: "flex",
    flexWrap: "no-wrap",
    justifyContent: "space-between",
    alignItems: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315,
      columnNumber: 37
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 321,
      columnNumber: 41
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItemText"], {
    primary: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
      color: "primary",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 324,
        columnNumber: 53
      }
    }, `${_constants__WEBPACK_IMPORTED_MODULE_9__["API_URL"]}/${(_shortLinks$activeInd4 = shortLinks[activeIndex]) === null || _shortLinks$activeInd4 === void 0 ? void 0 : _shortLinks$activeInd4.short_url}`),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322,
      columnNumber: 45
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 330,
      columnNumber: 41
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["IconButton"], {
    onClick: handleEdit,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 331,
      columnNumber: 45
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 332,
      columnNumber: 49
    }
  }, "edit"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 335,
      columnNumber: 41
    }
  }, res.loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CircularProgress"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 337,
      columnNumber: 49
    }
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["IconButton"], {
    onClick: handleDelete,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 339,
      columnNumber: 49
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 342,
      columnNumber: 53
    }
  }, "delete"))))))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    sm: 12,
    md: 8,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 351,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 352,
      columnNumber: 29
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 359,
      columnNumber: 33
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/bg1.png",
    width: "400",
    height: "400",
    alt: "oops",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 360,
      columnNumber: 37
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 367,
      columnNumber: 33
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    color: "textSecondary",
    variant: "h6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 368,
      columnNumber: 37
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("em", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 372,
      columnNumber: 41
    }
  }, "No Links Available")))))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    sm: 12,
    md: 12,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 380,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    pt: 25,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 381,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 388,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Loader_Loading__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 389,
      columnNumber: 29
    }
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Dashboard);

/***/ }),

/***/ "./src/components/Footer/Footer.js":
/*!*****************************************!*\
  !*** ./src/components/Footer/Footer.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
var _jsxFileName = "/Users/developer1/Documents/shortLink - FrontEnd/src/components/Footer/Footer.js";


const useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  footer: {
    zIndex: "3",
    position: "relative",
    backgroundColor: "transparent !important"
  }
}));

const Footer = () => {
  const classes = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["AppBar"], {
    className: classes.footer,
    color: "primary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Toolbar"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    mx: 4,
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    width: "100%",
    alignContent: "flex-start",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    color: "textPrimary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 25
    }
  }, "\xA9 2020, made with", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    style: {
      paddingTop: 3,
      color: "red"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 29
    }
  }, "favorite"), "by Akshar Sarvaiya")))));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./src/components/General/AuthRequired.js":
/*!************************************************!*\
  !*** ./src/components/General/AuthRequired.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/developer1/Documents/shortLink - FrontEnd/src/components/General/AuthRequired.js";


const AuthRequired = props => {
  return localStorage.getItem("short_link_auth") ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 9
    }
  }, props.children) : props.fallback ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }, props.fallback) : null;
};

/* harmony default export */ __webpack_exports__["default"] = (AuthRequired);

/***/ }),

/***/ "./src/components/General/RisedCard.js":
/*!*********************************************!*\
  !*** ./src/components/General/RisedCard.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
var _jsxFileName = "/Users/developer1/Documents/shortLink - FrontEnd/src/components/General/RisedCard.js";



const useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(theme => ({
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3"
  },
  mainRaised: {
    margin: "-200px 30px 0px",
    borderRadius: "6px",
    boxShadow: "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  }
}));

const RisedCard = props => {
  const classes = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    pt: 2,
    width: "100%",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(classes.main, classes.mainRaised),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, props.children));
};

/* harmony default export */ __webpack_exports__["default"] = (RisedCard);

/***/ }),

/***/ "./src/components/General/SignIn.js":
/*!******************************************!*\
  !*** ./src/components/General/SignIn.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SignIn; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Avatar */ "./node_modules/@material-ui/core/esm/Avatar/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "./node_modules/@material-ui/core/esm/CssBaseline/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Link */ "./node_modules/@material-ui/core/esm/Link/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/esm/Box/index.js");
/* harmony import */ var _material_ui_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/LockOutlined */ "./node_modules/@material-ui/icons/LockOutlined.js");
/* harmony import */ var _material_ui_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/lib/react-apollo.esm.js");
/* harmony import */ var _queries__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../queries */ "./src/queries.js");
/* harmony import */ var _material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/lab/Alert */ "./node_modules/@material-ui/lab/esm/Alert/index.js");
var _jsxFileName = "/Users/developer1/Documents/shortLink - FrontEnd/src/components/General/SignIn.js";

















function Copyright() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
    variant: "body2",
    color: "textSecondary",
    align: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, "\xA9 2020, made with", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["Icon"], {
    style: {
      paddingTop: 3,
      color: "red"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, "favorite"), "by", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_5__["default"], {
    href: "https://www.linkedin.com/in/iamakshar/",
    variant: "body2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }, "Akshar Sarvaiya"));
}

const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__["makeStyles"])(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%",
    // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));
const initialState = {
  email: "j@x.co",
  password: "asdfghjk"
};
function SignIn(props) {
  var _error$graphQLErrors$;

  const classes = useStyles();
  const [state, setState] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialState);
  const [signin_call, {
    data,
    error,
    loading
  }] = Object(react_apollo__WEBPACK_IMPORTED_MODULE_13__["useMutation"])(_queries__WEBPACK_IMPORTED_MODULE_14__["SIGNIN"]);

  const handelCacel = () => {
    props.history.push("/");
  };

  const handelSubmit = async event => {
    event.preventDefault();
    signin_call({
      variables: { ...state
      }
    }).then().catch(error => {});
    return false;
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (data && !error && (data === null || data === void 0 ? void 0 : data.signin)) {
      localStorage.setItem("short_link_auth", data.signin.token);
      window.location.href = "/";
    }
  }, [data, error]);

  const handleChange = key => event => {
    let value = event.target.value;
    setState(s => ({ ...s,
      [key]: value
    }));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_11__["default"], {
    component: "main",
    maxWidth: "xs",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.paper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: classes.avatar,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_8___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 21
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
    component: "h1",
    variant: "h5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 17
    }
  }, "Sign in"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    className: classes.form,
    noValidate: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "outlined",
    margin: "normal",
    required: true,
    fullWidth: true,
    type: "email",
    id: "email",
    label: "Email Address",
    name: "email",
    autoComplete: "email",
    autoFocus: true,
    value: state.email,
    onChange: handleChange("email"),
    disabled: loading,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 21
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "outlined",
    margin: "normal",
    required: true,
    fullWidth: true,
    name: "password",
    label: "Password",
    type: "password",
    id: "password",
    value: state.password,
    disabled: loading,
    autoComplete: "current-password",
    onChange: handleChange("password"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 21
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_7__["default"], {
    display: "flex",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_7__["default"], {
    width: "100%",
    pr: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 25
    }
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["CircularProgress"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 33
    }
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    fullWidth: true,
    variant: "contained",
    color: "primary",
    className: classes.submit,
    disabled: loading || !(state.email.length && state.password.length),
    onClick: handelSubmit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 33
    }
  }, "Sign In")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_7__["default"], {
    width: "100%",
    pl: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    fullWidth: true,
    variant: "contained",
    color: "primary",
    className: classes.submit,
    onClick: handelCacel,
    disabled: loading,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 29
    }
  }, "Cancel"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
    container: true,
    justify: "flex-end",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 21
    }
  }, error ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
    item: true,
    sm: 12,
    md: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 29
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_7__["default"], {
    width: "100%",
    pb: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 33
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_15__["default"], {
    severity: "error",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 37
    }
  }, error === null || error === void 0 ? void 0 : (_error$graphQLErrors$ = error.graphQLErrors[0]) === null || _error$graphQLErrors$ === void 0 ? void 0 : _error$graphQLErrors$.message))) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
    item: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_5__["default"], {
    href: "/signup",
    variant: "body2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 29
    }
  }, "Don't have an account? Sign Up"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_7__["default"], {
    mt: 8,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Copyright, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 17
    }
  })));
}

/***/ }),

/***/ "./src/components/General/SignUp.js":
/*!******************************************!*\
  !*** ./src/components/General/SignUp.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SignUp; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Avatar */ "./node_modules/@material-ui/core/esm/Avatar/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "./node_modules/@material-ui/core/esm/CssBaseline/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Link */ "./node_modules/@material-ui/core/esm/Link/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/esm/Box/index.js");
/* harmony import */ var _material_ui_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/LockOutlined */ "./node_modules/@material-ui/icons/LockOutlined.js");
/* harmony import */ var _material_ui_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/lab/Alert */ "./node_modules/@material-ui/lab/esm/Alert/index.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/lib/react-apollo.esm.js");
/* harmony import */ var _queries__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../queries */ "./src/queries.js");
var _jsxFileName = "/Users/developer1/Documents/shortLink - FrontEnd/src/components/General/SignUp.js";

















const Joi = __webpack_require__(/*! @hapi/joi */ "./node_modules/@hapi/joi/dist/joi-browser.min.js");

function Copyright() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
    variant: "body2",
    color: "textSecondary",
    align: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, "\xA9 2020, made with", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["Icon"], {
    style: {
      paddingTop: 3,
      color: "red"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }, "favorite"), "by", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_5__["default"], {
    href: "https://www.linkedin.com/in/iamakshar/",
    variant: "body2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }, "Akshar Sarvaiya"));
}

const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__["makeStyles"])(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%",
    // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));
const schema = Joi.object({
  name: Joi.string().min(3).max(30).required().error(errs => {
    errs.forEach(err => {
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
  email: Joi.string().email({
    tlds: {
      allow: false
    }
  }),
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{8,30}$")).required().error(errs => {
    errs.forEach(err => {
      switch (err.code) {
        default:
          err.message = "Password Must be 8 character long";
      }
    });
    return errs;
  }),
  confirm_password: Joi.ref("password")
});
const initialState = {
  name: "Akshar",
  email: "J@x.com",
  password: "asdfghjk",
  confirm_password: "asdfghjk"
};
function SignUp() {
  var _error$graphQLErrors$;

  const classes = useStyles();
  const [state, setState] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialState);
  const [signup_call, {
    data,
    loading,
    error
  }] = Object(react_apollo__WEBPACK_IMPORTED_MODULE_14__["useMutation"])(_queries__WEBPACK_IMPORTED_MODULE_15__["SIGNUP"]);
  const [signin_call, res] = Object(react_apollo__WEBPACK_IMPORTED_MODULE_14__["useMutation"])(_queries__WEBPACK_IMPORTED_MODULE_15__["SIGNIN"]);
  const [client_error, setClient_erro] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();

  const handelSubmit = async event => {
    event.stopPropagation();
    event.preventDefault();

    try {
      await schema.validateAsync(state);
      const {
        confirm_password,
        ...rest
      } = state;
      signup_call({
        variables: { ...rest
        }
      }).then().catch(e => {});
    } catch (err) {
      if (err) {
        setClient_erro(err === null || err === void 0 ? void 0 : err.details[0].message);
      }
    }
  };

  const handelChange = key => event => {
    let value = event.target.value;
    setClient_erro("");
    setState(s => ({ ...s,
      [key]: value
    }));
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (data && !error && (data === null || data === void 0 ? void 0 : data.signup)) {
      signin_call({
        variables: {
          email: state.email,
          password: state.password
        }
      }).then().catch(e => {});
    }
  }, [data, error, signin_call, state]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    var _res$data;

    if (!(res === null || res === void 0 ? void 0 : res.loading) && (res === null || res === void 0 ? void 0 : (_res$data = res.data) === null || _res$data === void 0 ? void 0 : _res$data.signin)) {
      localStorage.setItem("short_link_auth", res.data.signin.token);
      window.location.href = "/";
    }
  }, [res.data, res.loading, res]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_11__["default"], {
    component: "main",
    maxWidth: "xs",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.paper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: classes.avatar,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_8___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 21
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
    component: "h1",
    variant: "h5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 17
    }
  }, "Sign up"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    className: classes.form,
    noValidate: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
    container: true,
    spacing: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
    item: true,
    xs: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__["default"], {
    autoComplete: "Name",
    name: "Name",
    variant: "outlined",
    required: true,
    fullWidth: true,
    id: "Name",
    label: "Name",
    autoFocus: true,
    value: state.name,
    onChange: handelChange("name"),
    disabled: loading,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 29
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
    item: true,
    xs: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "outlined",
    required: true,
    disabled: loading,
    value: state.email,
    fullWidth: true,
    id: "email",
    label: "Email Address",
    name: "email",
    autoComplete: "email",
    onChange: handelChange("email"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 29
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
    item: true,
    xs: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "outlined",
    required: true,
    value: state.password,
    fullWidth: true,
    name: "password",
    label: "Password",
    type: "password",
    id: "password",
    autoComplete: "password",
    disabled: loading,
    onChange: handelChange("password"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 29
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
    item: true,
    xs: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "outlined",
    required: true,
    fullWidth: true,
    value: state.confirm_password,
    disabled: loading,
    name: "confirm password",
    label: "Confirm Password",
    type: "password",
    id: "confirm_password",
    autoComplete: "confirm-password",
    onChange: handelChange("confirm_password"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 29
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
    container: true,
    justify: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
    item: true,
    sm: 12,
    md: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 25
    }
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_7__["default"], {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    py: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 33
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 37
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["CircularProgress"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 41
    }
  }))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    fullWidth: true,
    variant: "contained",
    color: "primary",
    className: classes.submit,
    onClick: handelSubmit,
    disabled: loading,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 33
    }
  }, "Sign Up"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
    container: true,
    justify: "flex-end",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
    item: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_5__["default"], {
    href: "/signin",
    variant: "body2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 29
    }
  }, "Already have an account? Sign in"))), client_error || error ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
    container: true,
    justify: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
    item: true,
    sm: 12,
    md: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256,
      columnNumber: 29
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_7__["default"], {
    width: "100%",
    pt: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257,
      columnNumber: 33
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_13__["default"], {
    severity: "error",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258,
      columnNumber: 37
    }
  }, client_error || (error === null || error === void 0 ? void 0 : (_error$graphQLErrors$ = error.graphQLErrors[0]) === null || _error$graphQLErrors$ === void 0 ? void 0 : _error$graphQLErrors$.message))))) : null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_7__["default"], {
    mt: 5,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Copyright, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269,
      columnNumber: 17
    }
  })));
}

/***/ }),

/***/ "./src/components/Header/Header.js":
/*!*****************************************!*\
  !*** ./src/components/Header/Header.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _General_AuthRequired__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../General/AuthRequired */ "./src/components/General/AuthRequired.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var _jsxFileName = "/Users/developer1/Documents/shortLink - FrontEnd/src/components/Header/Header.js";




const useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  transparent: {
    backgroundColor: "transparent !important",
    boxShadow: "none",
    paddingTop: "25px",
    color: "#FFFFFF",
    position: "fixed",
    zIndex: "1100"
  },
  primaryDark: {
    backgroundColor: theme.palette.primary.dark
  },
  primaryLight: {
    backgroundColor: theme.palette.primary.light
  },
  primaryMain: {
    backgroundColor: theme.palette.primary.main
  },
  secondaryDark: {
    backgroundColor: theme.palette.secondary.dark
  },
  secondaryLight: {
    backgroundColor: theme.palette.secondary.light
  },
  secondarymain: {
    backgroundColor: theme.palette.secondary.main
  }
}));

const Header = props => {
  const classes = useStyles();
  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["useHistory"])();
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    if (props.changeColorOnScroll) {
      window.addEventListener("scroll", headerColorChange);
    }

    return function cleanup() {
      if (props.changeColorOnScroll) {
        window.removeEventListener("scroll", headerColorChange);
      }
    };
  }); // const handleDrawerToggle = () => {
  //     setMobileOpen(!mobileOpen);
  // };

  const headerColorChange = () => {
    const {
      color,
      changeColorOnScroll
    } = props;
    const windowsScrollTop = window.pageYOffset;

    if (windowsScrollTop > changeColorOnScroll.height) {
      document.body.getElementsByTagName("header")[0].classList.remove(classes[color]);
      document.body.getElementsByTagName("header")[0].classList.add(classes[changeColorOnScroll.color]);
    } else {
      document.body.getElementsByTagName("header")[0].classList.add(classes[color]);
      document.body.getElementsByTagName("header")[0].classList.remove(classes[changeColorOnScroll.color]);
    }
  };

  const handleClick = type => event => {
    if (type === "dashboard") {
      history.push("/dashboard");
    } else if (type === "signin") {
      history.push("/signin");
    } else if (type === "signout") {
      localStorage.removeItem("short_link_auth");
      window.location.href = "/";
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["AppBar"], {
    className: classes.transparent,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Toolbar"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    px: 2,
    display: "flex",
    alignItems: "center",
    width: "100%",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    flexShrink: 1,
    width: "100%",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "text",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h6",
    color: "textPrimary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 29
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 33
    }
  }, "Short Link")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_General_AuthRequired__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    flexShrink: 2,
    px: 1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    className: classes.secondaryLight,
    variant: "contained",
    onClick: handleClick("dashboard"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 29
    }
  }, "Dashboard"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_General_AuthRequired__WEBPACK_IMPORTED_MODULE_2__["default"], {
    fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      flexShrink: 2,
      px: 1,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 29
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      className: classes.secondaryLight,
      variant: "contained",
      onClick: handleClick("signin"),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 33
      }
    }, "Login")),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    flexShrink: 2,
    px: 1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    className: classes.secondaryLight,
    variant: "contained",
    onClick: handleClick("signout"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 29
    }
  }, "Signout"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/components/Header/NavBar.js":
/*!*****************************************!*\
  !*** ./src/components/Header/NavBar.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var _jsxFileName = "/Users/developer1/Documents/shortLink - FrontEnd/src/components/Header/NavBar.js";



const useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  primaryDark: {
    backgroundColor: theme.palette.primary.dark
  },
  primaryLight: {
    backgroundColor: theme.palette.primary.light
  },
  primaryMain: {
    backgroundColor: theme.palette.primary.main
  },
  secondaryDark: {
    backgroundColor: theme.palette.secondary.dark
  },
  secondaryLight: {
    backgroundColor: theme.palette.secondary.light
  },
  secondarymain: {
    backgroundColor: theme.palette.secondary.main
  }
}));

const NavBar = () => {
  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useHistory"])();
  const classes = useStyles();

  const handleClick = type => event => {
    if (type === "dashboard") {
      history.push("/dashboard");
    } else if (type === "signout") {
      localStorage.removeItem("short_link_auth");
      window.location.href = "/";
    }
  };

  const handleLogoClick = () => {
    history.push("/");
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["AppBar"], {
    position: "fixed",
    className: classes.primaryLight,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Toolbar"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    px: 2,
    display: "flex",
    alignItems: "center",
    width: "100%",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    flexShrink: 1,
    width: "100%",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "text",
    onClick: handleLogoClick,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 29
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h6",
    color: "textPrimary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 33
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 37
    }
  }, "Short Link")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    flexShrink: 2,
    px: 1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "contained",
    className: classes.secondaryLight,
    onClick: handleClick("dashboard"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 29
    }
  }, "Dashboard")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    flexShrink: 2,
    px: 1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    className: classes.secondaryLight,
    variant: "contained",
    onClick: handleClick("signout"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 29
    }
  }, "Signout"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (NavBar);

/***/ }),

/***/ "./src/components/Header/Parallax.js":
/*!*******************************************!*\
  !*** ./src/components/Header/Parallax.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Parallax; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/developer1/Documents/shortLink - FrontEnd/src/components/Header/Parallax.js";
 // nodejs library to set properties for components

 // @material-ui/core components



const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(theme => ({
  parallax: {
    height: "90vh",
    maxHeight: "1000px",
    overflow: "hidden",
    position: "relative",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    margin: "0",
    padding: "0",
    border: "0",
    display: "flex",
    alignItems: "center"
  },
  filter: {
    "&:before": {
      background: "rgba(0, 0, 0, 0.5)"
    },
    "&:after,&:before": {
      position: "absolute",
      zIndex: "1",
      width: "100%",
      height: "100%",
      display: "block",
      left: "0",
      top: "0",
      content: "''"
    }
  },
  small: {
    height: "380px"
  }
}));
function Parallax(props) {
  let windowScrollTop;

  if (window.innerWidth >= 768) {
    windowScrollTop = window.pageYOffset / 3;
  } else {
    windowScrollTop = 0;
  }

  const [transform, setTransform] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState("translate3d(0," + windowScrollTop + "px,0)");
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    if (window.innerWidth >= 768) {
      window.addEventListener("scroll", resetTransform);
    }

    return function cleanup() {
      if (window.innerWidth >= 768) {
        window.removeEventListener("scroll", resetTransform);
      }
    };
  });

  const resetTransform = () => {
    var windowScrollTop = window.pageYOffset / 3;
    setTransform("translate3d(0," + windowScrollTop + "px,0)");
  };

  const {
    filter,
    className,
    children,
    style,
    image,
    small
  } = props;
  const classes = useStyles();
  const parallaxClasses = classnames__WEBPACK_IMPORTED_MODULE_3___default()({
    [classes.parallax]: true,
    [classes.filter]: filter,
    [classes.small]: small,
    [className]: className !== undefined
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: parallaxClasses,
    style: { ...style,
      backgroundImage: "url(" + image + ")",
      transform: transform
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 9
    }
  }, children);
}
Parallax.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  filter: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  style: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  image: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  small: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};

/***/ }),

/***/ "./src/components/Home.js":
/*!********************************!*\
  !*** ./src/components/Home.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _Header_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header/Header */ "./src/components/Header/Header.js");
/* harmony import */ var _Footer_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Footer/Footer */ "./src/components/Footer/Footer.js");
/* harmony import */ var _Header_Parallax__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Header/Parallax */ "./src/components/Header/Parallax.js");
/* harmony import */ var _assest_images_landingPageImg_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assest/images/landingPageImg.jpg */ "./src/assest/images/landingPageImg.jpg");
/* harmony import */ var _assest_images_landingPageImg_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assest_images_landingPageImg_jpg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assest_images_linkShare_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assest/images/linkShare.png */ "./src/assest/images/linkShare.png");
/* harmony import */ var _assest_images_linkShare_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assest_images_linkShare_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assest_images_chill_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assest/images/chill.png */ "./src/assest/images/chill.png");
/* harmony import */ var _assest_images_chill_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assest_images_chill_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/GitHub */ "./node_modules/@material-ui/icons/GitHub.js");
/* harmony import */ var _material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _General_RisedCard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./General/RisedCard */ "./src/components/General/RisedCard.js");
/* harmony import */ var _material_ui_icons_Twitter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/Twitter */ "./node_modules/@material-ui/icons/Twitter.js");
/* harmony import */ var _material_ui_icons_Twitter__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Twitter__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_LinkedIn__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/LinkedIn */ "./node_modules/@material-ui/icons/LinkedIn.js");
/* harmony import */ var _material_ui_icons_LinkedIn__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LinkedIn__WEBPACK_IMPORTED_MODULE_11__);
var _jsxFileName = "/Users/developer1/Documents/shortLink - FrontEnd/src/components/Home.js";












const useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  title: {
    color: "white",
    textDecoration: "none",
    fontWeight: "700"
  },
  cardMedia: {
    width: "100%",
    height: 245
  },
  primary: {
    color: theme.palette.primary.main + "!important"
  },
  primaryDark: {
    color: theme.palette.primary.dark + "!important"
  },
  secondary: {
    color: theme.palette.secondary.dark + "!important"
  },
  secondaryLight: {
    color: theme.palette.secondary.light + "!important"
  },
  avatar: {
    width: 100,
    height: 100
  }
}));

const Home = props => {
  const classes = useStyles();

  const handleProfileClick = type => event => {
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

  const handleClick = type => event => {
    if (type === "dashboard") {
      props.history.push("/dashboard");
    } else if (type === "signin") {
      props.history.push("/signin");
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    color: "transparent",
    changeColorOnScroll: {
      height: 300,
      color: "primaryLight"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header_Parallax__WEBPACK_IMPORTED_MODULE_4__["default"], {
    image: _assest_images_landingPageImg_jpg__WEBPACK_IMPORTED_MODULE_5___default.a,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    container: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    sm: 12,
    xs: 12,
    md: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    px: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 29
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    width: "100%",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 33
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h4",
    className: classes.title,
    color: "textPrimary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 37
    }
  }, "URL shortening service and a link management platform..."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    display: "flex",
    justifyContent: "flex-end",
    width: "100%",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 37
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h5",
    className: classes.title,
    color: "textSecondary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 41
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("em", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 45
    }
  }, "a", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
    className: classes.primary,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 49
    }
  }, "bit.ly", " "), "short url clone"))))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    container: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    sm: 12,
    md: 12,
    xs: 12,
    lg: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_General_RisedCard__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    style: {
      minHeight: 500
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CardContent"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 29
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    container: true,
    spacing: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 33
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    sm: 12,
    xs: 12,
    md: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 37
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 41
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h5",
    color: "textPrimary",
    className: classes.secondary,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 45
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 49
    }
  }, "Let's Talk about product...")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    sm: 6,
    xs: 12,
    md: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 37
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CardMedia"], {
    className: classes.cardMedia,
    image: _assest_images_linkShare_png__WEBPACK_IMPORTED_MODULE_6___default.a,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 41
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    sm: 6,
    xs: 12,
    md: 8,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 37
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    pt: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 41
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 45
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h5",
    color: "textPrimary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 49
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 53
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
    className: classes.primary,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 57
    }
  }, "Integrate seamlessly with the tools you love"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 57
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("em", {
    className: classes.secondaryLight,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 57
    }
  }, "shortlink integrates with nearly every social media saving you time and hassle. Need to create links at scale? Shortlink\u2019s got you covered. Whether you need 100 links or 100,000, the open and flexible Shortlink API makes it simple and seamless.")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    sm: 6,
    xs: 12,
    md: 8,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 37
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    pt: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 41
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 45
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h5",
    color: "textPrimary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 49
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 53
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
    className: classes.primary,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 57
    }
  }, "Rest assured knowing your links are secure"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 57
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("em", {
    className: classes.secondaryLight,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 57
    }
  }, "Shortlink is dedicated to ensuring your links are safe and reliable. Every link you create using Shortlink is encrypted with HTTPS to maximize protection against eavesdropping or tampering by third parties, keeping your content safe from the bad guys.")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    sm: 6,
    xs: 12,
    md: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256,
      columnNumber: 37
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CardMedia"], {
    className: classes.cardMedia,
    image: _assest_images_chill_png__WEBPACK_IMPORTED_MODULE_7___default.a,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257,
      columnNumber: 41
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 12,
    md: 12,
    sm: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263,
      columnNumber: 33
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    py: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264,
      columnNumber: 37
    }
  }, localStorage.getItem("short_link_auth") ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273,
      columnNumber: 45
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "contained",
    color: "primary",
    onClick: handleClick("dashboard"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274,
      columnNumber: 49
    }
  }, "Go to Dashboard")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285,
      columnNumber: 45
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "contained",
    color: "primary",
    onClick: handleClick("signin"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286,
      columnNumber: 49
    }
  }, "Get Started for free")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 12,
    sm: 12,
    md: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299,
      columnNumber: 33
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    py: 4,
    flexWrap: "wrap",
    width: "100%",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300,
      columnNumber: 37
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309,
      columnNumber: 41
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
    className: classes.avatar,
    src: "https://pbs.twimg.com/profile_images/1189062272867545088/JRyYc_Sf_400x400.jpg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310,
      columnNumber: 45
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315,
      columnNumber: 41
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    color: "textSecondary",
    variant: "h6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320,
      columnNumber: 45
    }
  }, "Akshar Sarvaiya")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    size: "medium",
    onClick: handleProfileClick("git"),
    startIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_8___default.a, {
      style: {
        color: "black"
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 331,
        columnNumber: 49
      }
    }),
    disableElevation: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 327,
      columnNumber: 41
    }
  }, "GitHub"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    size: "medium",
    onClick: handleProfileClick("tw"),
    startIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Twitter__WEBPACK_IMPORTED_MODULE_10___default.a, {
      style: {
        color: "rgb(29, 161, 242)"
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 343,
        columnNumber: 49
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 339,
      columnNumber: 41
    }
  }, "Twitter"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    size: "medium",
    onClick: handleProfileClick("in"),
    startIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_LinkedIn__WEBPACK_IMPORTED_MODULE_11___default.a, {
      style: {
        color: "#0073b1"
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 357,
        columnNumber: 49
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 353,
      columnNumber: 41
    }
  }, "LinkedIn"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    size: "medium",
    onClick: handleProfileClick("gitlab"),
    startIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_8___default.a, {
      style: {
        color: "black"
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 372,
        columnNumber: 49
      }
    }),
    disableElevation: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 366,
      columnNumber: 41
    }
  }, "GitLab")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 381,
      columnNumber: 37
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    color: "textSecondary",
    variant: "h6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 386,
      columnNumber: 41
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 390,
      columnNumber: 45
    }
  }, "Source Code Available at", " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["IconButton"], {
    size: "small",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 394,
      columnNumber: 49
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_8___default.a, {
    fontSize: "small",
    style: {
      color: "black"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 395,
      columnNumber: 53
    }
  })))))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Footer_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 412,
      columnNumber: 13
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./src/components/Loader/Loading.js":
/*!******************************************!*\
  !*** ./src/components/Loader/Loading.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _loading_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loading.css */ "./src/components/Loader/loading.css");
/* harmony import */ var _loading_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_loading_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/developer1/Documents/shortLink - FrontEnd/src/components/Loader/Loading.js";



const Loading = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "lds-ellipsis",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Loading);

/***/ }),

/***/ "./src/components/Loader/loading.css":
/*!*******************************************!*\
  !*** ./src/components/Loader/loading.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./loading.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/Loader/loading.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./loading.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/Loader/loading.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./loading.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/Loader/loading.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/PieChart/PieChart.js":
/*!*********************************************!*\
  !*** ./src/components/PieChart/PieChart.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/index.js");
var _jsxFileName = "/Users/developer1/Documents/shortLink - FrontEnd/src/components/PieChart/PieChart.js";


const data = [{
  name: "Group A",
  value: 400
}, {
  name: "Group B",
  value: 300
}, {
  name: "Group C",
  value: 300
}, {
  name: "Group D",
  value: 200
}];

const renderActiveShape = props => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", {
    x: cx,
    y: cy,
    dy: 8,
    textAnchor: "middle",
    fill: fill,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }, `Clicks ${payload.value}`), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["Sector"], {
    cx: cx,
    cy: cy,
    innerRadius: innerRadius,
    outerRadius: outerRadius,
    startAngle: startAngle,
    endAngle: endAngle,
    fill: fill,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["Sector"], {
    cx: cx,
    cy: cy,
    startAngle: startAngle,
    endAngle: endAngle,
    innerRadius: outerRadius + 6,
    outerRadius: outerRadius + 10,
    fill: fill,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: `M${sx},${sy}L${mx},${my}L${ex},${ey}`,
    stroke: fill,
    fill: "none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
    cx: ex,
    cy: ey,
    r: 2,
    fill: fill,
    stroke: "none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", {
    x: ex + (cos >= 0 ? 1 : -1) * 12,
    y: ey,
    textAnchor: textAnchor,
    fill: "#333",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }
  }, ` ${payload.name} `), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", {
    x: ex + (cos >= 0 ? 1 : -1) * 12,
    y: ey,
    dy: 18,
    textAnchor: textAnchor,
    fill: "#999",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 13
    }
  }, `(Rate ${(percent * 100).toFixed(2)}%)`));
};

const CustomPieChart = props => {
  const [activeIndex, setActiveIndex] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);

  const onPieEnter = (data, index) => {
    setActiveIndex(index);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["PieChart"], {
    width: 600,
    height: 400,
    margin: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    },
    cx: 100,
    cy: 100,
    innerRadius: 8,
    outerRadius: 8,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["Pie"], {
    dataKey: "value",
    activeIndex: activeIndex,
    activeShape: renderActiveShape,
    data: props.data || data,
    cx: 300,
    cy: 200,
    innerRadius: 60,
    outerRadius: 80,
    fill: "#8884d8",
    onMouseEnter: onPieEnter,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 13
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (CustomPieChart);

/***/ }),

/***/ "./src/components/Routes/Routes.js":
/*!*****************************************!*\
  !*** ./src/components/Routes/Routes.js ***!
  \*****************************************/
/*! exports provided: PrivateRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivateRoute", function() { return PrivateRoute; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Header_NavBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Header/NavBar */ "./src/components/Header/NavBar.js");
var _jsxFileName = "/Users/developer1/Documents/shortLink - FrontEnd/src/components/Routes/Routes.js";




const Wrapper = props => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header_NavBar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }
  }), props.children);
};

const PrivateRoute = props => {
  const Component = props.component || props.render;
  return localStorage.getItem("short_link_auth") ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: props.path,
    exact: props.exact || false,
    render: props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Wrapper, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, Object.assign({}, props, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 21
      }
    }))),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], {
    to: "/signin",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  });
};



/***/ }),

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/*! exports provided: API_URL, WS_URL, STORAGE_URL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_URL", function() { return API_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WS_URL", function() { return WS_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STORAGE_URL", function() { return STORAGE_URL; });
// export const API_URL = "http://localhost:3000" 
const API_URL = "http://192.168.43.84:3000";
const WS_URL = "ws://localhost:3000/graphql";
const STORAGE_URL = "http://localhost:3000/";

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
var _jsxFileName = "/Users/developer1/Documents/shortLink - FrontEnd/src/index.js";




react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }
})), document.getElementById("root")); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

_serviceWorker__WEBPACK_IMPORTED_MODULE_3__["unregister"]();

/***/ }),

/***/ "./src/queries.js":
/*!************************!*\
  !*** ./src/queries.js ***!
  \************************/
/*! exports provided: AUTH_USER, SHORT_LINKS, SIGNUP, SIGNIN, CREATE_SHORTLINK, UPDATE_LINK_INFO, REMOVE_LINK */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_USER", function() { return AUTH_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHORT_LINKS", function() { return SHORT_LINKS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGNUP", function() { return SIGNUP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGNIN", function() { return SIGNIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_SHORTLINK", function() { return CREATE_SHORTLINK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_LINK_INFO", function() { return UPDATE_LINK_INFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_LINK", function() { return REMOVE_LINK; });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);

/* -------------------------------------------------------------------------- */

/*                                   Queries                                  */

/* -------------------------------------------------------------------------- */

const AUTH_USER = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
    query auth_user {
        auth_user {
            id
            name
            email
        }
    }
`;
const SHORT_LINKS = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
    query short_links {
        short_links {
            id
            title
            original_url
            short_url
            clicks
            createdAt
            updatedAt
        }
    }
`;
/* -------------------------------------------------------------------------- */

/*                                  Mutations                                 */

/* -------------------------------------------------------------------------- */

const SIGNUP = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
    mutation signup($name: String!, $email: EmailAddress!, $password: String!) {
        signup(name: $name, email: $email, password: $password) {
            id
            name
            email
            createdAt
            updatedAt
        }
    }
`;
const SIGNIN = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
    mutation signin($email: EmailAddress!, $password: String!) {
        signin(email: $email, password: $password)
    }
`;
const CREATE_SHORTLINK = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
    mutation create_shortLink(
        $original_url: String!
        $title: String!
        $short_url: String
    ) {
        create_shortLink(
            original_url: $original_url
            title: $title
            short_url: $short_url
        ) {
            id
            title
            original_url
            short_url
            clicks
            createdAt
            updatedAt
        }
    }
`;
const UPDATE_LINK_INFO = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
    mutation update_link_info(
        $id: String!
        $original_url: String!
        $title: String!
        $short_url: String!
    ) {
        update_link_info(
            id: $id
            original_url: $original_url
            title: $title
            short_url: $short_url
        ) {
            id
            title
            original_url
            short_url
            clicks
            createdAt
            updatedAt
        }
    }
`;
const REMOVE_LINK = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
    mutation remove_link($id: String!) {
        remove_link(id: $id)
    }
`;
/* -------------------------------------------------------------------------- */

/*                                Subscriptions                               */

/* -------------------------------------------------------------------------- */

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
const isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.0/8 are considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) {}
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(registration => {
    registration.onupdatefound = () => {
      const installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = () => {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(error => {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl, {
    headers: {
      'Service-Worker': 'script'
    }
  }).then(response => {
    // Ensure service worker exists, and that we really are getting a JS file.
    const contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(registration => {
        registration.unregister().then(() => {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(() => {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    }).catch(error => {
      console.error(error.message);
    });
  }
}

/***/ }),

/***/ "./src/theme.js":
/*!**********************!*\
  !*** ./src/theme.js ***!
  \**********************/
/*! exports provided: theme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "theme", function() { return theme; });
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");

const defaultTheme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["createMuiTheme"])();
const theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["createMuiTheme"])({
  palette: {
    common: {
      black: "rgba(39, 10, 10, 1)",
      white: "rgba(255, 255, 255, 1)"
    },
    background: {
      paper: "#F8F8F8",
      default: "#F8F8F8"
    },
    primary: {
      light: "#ec407a",
      main: "#e91e63",
      dark: "#c2185b",
      contrastText: "#fff"
    },
    secondary: {
      light: "#4791db",
      main: "#1976d2",
      dark: "#115293",
      contrastText: "#fff"
    },
    error: {
      light: "#e57373",
      main: "#f44336",
      dark: "#d32f2f",
      contrastText: "#fff"
    },
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.54)",
      disabled: "rgba(0, 0, 0, 0.38)",
      hint: "rgba(0, 0, 0, 0.38)"
    }
  },
  status: {
    danger: "orange"
  },
  typography: {
    h3: {
      fontSize: "1.2rem",
      "@media (min-width:600px)": {
        fontSize: "1.5rem"
      },
      [defaultTheme.breakpoints.up("md")]: {
        fontSize: "2.4rem"
      }
    }
  },
  overrides: {
    MuiCard: {
      root: {// borderRadius: 10
      }
    },
    MuiButton: {
      root: {
        textTransform: "none"
      }
    }
  }
});

/***/ }),

/***/ 1:
/*!**************************************************************************************************************!*\
  !*** multi (webpack)/hot/dev-server.js ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/developer1/Documents/shortLink - FrontEnd/node_modules/webpack/hot/dev-server.js */"./node_modules/webpack/hot/dev-server.js");
__webpack_require__(/*! /Users/developer1/Documents/shortLink - FrontEnd/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/developer1/Documents/shortLink - FrontEnd/src/index.js */"./src/index.js");


/***/ })

},[[1,"runtime-main",0]]]);
//# sourceMappingURL=main.chunk.js.map