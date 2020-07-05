webpackHotUpdate("main",{

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

/***/ })

})
//# sourceMappingURL=main.c7255e9d6625ad8bbeb2.hot-update.js.map