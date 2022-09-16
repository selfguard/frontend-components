"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Navbar;

var _session = require("supertokens-auth-react/recipe/session");

var _logout = _interopRequireDefault(require("./logout"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Navbar() {
  let session = (0, _session.useSessionContext)();
  let apiURL = "https://selfguard.xyz/api";
  let securedocURL = "https://demo-filestorage.selfguard.xyz";
  let custodyURL = "https://demo-custody.selfguard.xyz";
  let paymentURL = 'https://demo-payments.selfguard.xyz'; // let messagingURL = 'https://demo-messaging.selfguard.xyz';

  let notificationsURL = 'https://demo-notifications.selfguard.xyz';
  return /*#__PURE__*/React.createElement("nav", {
    className: "navbar sticky-top navbar-dark navbar-expand-lg bg-dark",
    style: {
      marginBottom: '20px',
      borderBottom: '1px solid grey'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container-fluid"
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://selfguard.xyz/home",
    className: "navbar-brand mb-0 h1 vertical"
  }, /*#__PURE__*/React.createElement("img", {
    src: "/logo3.png",
    width: "30",
    height: "30",
    className: "d-inline-block",
    alt: ""
  }), /*#__PURE__*/React.createElement("p", {
    className: "d-inline-block",
    style: {
      margin: 0,
      marginLeft: '5px'
    }
  }, "SelfGuard")), /*#__PURE__*/React.createElement("button", {
    className: "navbar-toggler",
    type: "button",
    "data-bs-toggle": "collapse",
    "data-bs-target": "#navbarSupportedContent",
    "aria-controls": "navbarSupportedContent",
    "aria-expanded": "false",
    "aria-label": "Toggle navigation"
  }, /*#__PURE__*/React.createElement("span", {
    className: "navbar-toggler-icon"
  })), /*#__PURE__*/React.createElement("div", {
    className: "collapse navbar-collapse",
    id: "navbarSupportedContent"
  }, /*#__PURE__*/React.createElement("ul", {
    className: "navbar-nav me-auto mb-2 mb-lg-0"
  }, /*#__PURE__*/React.createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/React.createElement("a", {
    className: "nav-link ".concat('/api' === window.location.pathname && 'active'),
    href: apiURL
  }, "API")), /*#__PURE__*/React.createElement("li", {
    className: "nav-item dropdown",
    style: {
      minWidth: '280px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "nav-link dropdown-toggle",
    role: "button",
    "data-bs-toggle": "dropdown",
    "aria-expanded": "false"
  }, "Demos"), /*#__PURE__*/React.createElement("ul", {
    className: "dropdown-menu"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    className: "dropdown-item vertical4",
    href: paymentURL
  }, /*#__PURE__*/React.createElement("i", {
    className: "bi bi-credit-card",
    style: {
      marginRight: '10px'
    }
  }), "Payments (web2/3)")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    className: "dropdown-item vertical4",
    href: securedocURL
  }, /*#__PURE__*/React.createElement("i", {
    className: "bi bi-file-lock",
    style: {
      marginRight: '10px'
    }
  }), "File Storage (web2/3)")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("hr", {
    className: "dropdown-divider"
  })), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    className: "dropdown-item vertical4",
    href: custodyURL
  }, /*#__PURE__*/React.createElement("i", {
    className: "bi bi-key",
    style: {
      marginRight: '10px'
    }
  }), "Custody (web3)")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    className: "dropdown-item vertical4",
    href: notificationsURL
  }, /*#__PURE__*/React.createElement("i", {
    className: "bi bi-app-indicator",
    style: {
      marginRight: '10px'
    }
  }), "Notifications (web3)"))))), /*#__PURE__*/React.createElement("ul", {
    className: "navbar-nav"
  }, /*#__PURE__*/React.createElement("li", {
    className: "nav-item vertical",
    style: {
      marginRight: '10px'
    }
  }, /*#__PURE__*/React.createElement("a", {
    className: "nav-link",
    href: "mailto:arjun@selfguard.xyz"
  }, "Contact")), session.doesSessionExist && /*#__PURE__*/React.createElement(_logout.default, null)))));
} //
// <li><a className="dropdown-item vertical" href={notificationsURL}>
// <i className="bi bi-app-indicator" style={{marginRight:'10px'}}></i>
// Notifications (web3)</a></li>
// <li><a className="dropdown-item vertical" href={messagingURL}>
// <i className="bi bi-chat-square" style={{marginRight:'10px'}}></i>
// Messaging (web3)</a></li>