"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Navbar;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Navbar(_ref) {
  let {
    Children
  } = _ref;
  let apiURL = "https://selfguard.xyz/api";
  let securedocURL = "https://demo-filestorage.selfguard.xyz";
  let custodyURL = "https://demo-custody.selfguard.xyz";
  let paymentURL = 'https://demo-payments.selfguard.xyz';
  let notificationsURL = 'https://demo-notifications.selfguard.xyz';
  return /*#__PURE__*/_react.default.createElement("nav", {
    className: "navbar sticky-top navbar-dark navbar-expand-lg bg-dark",
    style: {
      marginBottom: '20px',
      borderBottom: '1px solid grey'
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "container-fluid"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "https://selfguard.xyz/home",
    className: "navbar-brand mb-0 h1 vertical"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: "/logo3.png",
    width: "30",
    height: "30",
    className: "d-inline-block",
    alt: ""
  }), /*#__PURE__*/_react.default.createElement("p", {
    className: "d-inline-block",
    style: {
      margin: 0,
      marginLeft: '5px'
    }
  }, "SelfGuard")), /*#__PURE__*/_react.default.createElement("button", {
    className: "navbar-toggler",
    type: "button",
    "data-bs-toggle": "collapse",
    "data-bs-target": "#navbarSupportedContent",
    "aria-controls": "navbarSupportedContent",
    "aria-expanded": "false",
    "aria-label": "Toggle navigation"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "navbar-toggler-icon"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "collapse navbar-collapse",
    id: "navbarSupportedContent"
  }, /*#__PURE__*/_react.default.createElement("ul", {
    className: "navbar-nav me-auto mb-2 mb-lg-0"
  }, /*#__PURE__*/_react.default.createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/_react.default.createElement("a", {
    className: "nav-link ".concat('/api' === window.location.pathname && 'active'),
    href: apiURL
  }, "API")), /*#__PURE__*/_react.default.createElement("li", {
    className: "nav-item dropdown",
    style: {
      minWidth: '280px'
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "nav-link dropdown-toggle",
    role: "button",
    "data-bs-toggle": "dropdown",
    "aria-expanded": "false"
  }, "Demos"), /*#__PURE__*/_react.default.createElement("ul", {
    className: "dropdown-menu"
  }, /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    className: "dropdown-item vertical4",
    href: paymentURL
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "bi bi-credit-card",
    style: {
      marginRight: '10px'
    }
  }), "Payments (web2/3)")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    className: "dropdown-item vertical4",
    href: securedocURL
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "bi bi-file-lock",
    style: {
      marginRight: '10px'
    }
  }), "File Storage (web2/3)")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("hr", {
    className: "dropdown-divider"
  })), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    className: "dropdown-item vertical4",
    href: custodyURL
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "bi bi-key",
    style: {
      marginRight: '10px'
    }
  }), "Custody (web3)")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    className: "dropdown-item vertical4",
    href: notificationsURL
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "bi bi-app-indicator",
    style: {
      marginRight: '10px'
    }
  }), "Notifications (web3)"))))), /*#__PURE__*/_react.default.createElement("ul", {
    className: "navbar-nav"
  }, /*#__PURE__*/_react.default.createElement("li", {
    className: "nav-item vertical",
    style: {
      marginRight: '10px'
    }
  }, /*#__PURE__*/_react.default.createElement("a", {
    className: "nav-link",
    href: "mailto:arjun@selfguard.xyz"
  }, "Contact")), Children && /*#__PURE__*/_react.default.createElement(Children, null)))));
}