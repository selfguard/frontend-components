"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Navbar;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Navbar() {
  let apiURL = "https://selfguard.xyz/api";
  let securedocURL = "https://demo-filestorage.selfguard.xyz";
  let custodyURL = "https://demo-custody.selfguard.xyz";
  let paymentURL = 'https://demo-payments.selfguard.xyz';
  return /*#__PURE__*/_react.default.createElement("footer", {
    className: "bd-footer py-4 mt-5 bg-light"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "container py-4 px-4 px-md-3"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "row"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "col-lg-3 mb-3"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "https://selfguard.xyz",
    className: "navbar-brand vertical"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: "/logo.png",
    width: "30",
    height: "30",
    className: "d-inline-block",
    alt: ""
  }), /*#__PURE__*/_react.default.createElement("h5", {
    className: "d-inline-block",
    style: {
      margin: 0,
      marginLeft: '5px',
      color: 'black'
    }
  }, /*#__PURE__*/_react.default.createElement("b", null, "SelfGuard"))), /*#__PURE__*/_react.default.createElement("ul", {
    className: "list-unstyled small text-muted"
  }, /*#__PURE__*/_react.default.createElement("li", {
    className: "mb-2"
  }, "Universal API for Encryption and Tokenization"))), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-6 col-lg-2 offset-lg-1 mb-3"
  }, /*#__PURE__*/_react.default.createElement("h5", null, "Links"), /*#__PURE__*/_react.default.createElement("ul", {
    className: "list-unstyled"
  }, /*#__PURE__*/_react.default.createElement("li", {
    className: "mb-1"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "https://selfguard.xyz/home",
    style: {
      color: 'black',
      textDecoration: 'none'
    }
  }, "Home")), /*#__PURE__*/_react.default.createElement("li", {
    className: "mb-1"
  }, /*#__PURE__*/_react.default.createElement("a", {
    style: {
      color: 'black',
      textDecoration: 'none'
    },
    href: apiURL
  }, "API")), /*#__PURE__*/_react.default.createElement("li", {
    className: "mb-1"
  }, /*#__PURE__*/_react.default.createElement("a", {
    style: {
      color: 'black',
      textDecoration: 'none'
    },
    href: paymentURL
  }, "Payments")), /*#__PURE__*/_react.default.createElement("li", {
    className: "mb-1"
  }, /*#__PURE__*/_react.default.createElement("a", {
    style: {
      color: 'black',
      textDecoration: 'none'
    },
    href: custodyURL
  }, "Custody")), /*#__PURE__*/_react.default.createElement("li", {
    className: "mb-1"
  }, /*#__PURE__*/_react.default.createElement("a", {
    style: {
      color: 'black',
      textDecoration: 'none'
    },
    href: securedocURL
  }, "File Storage")))), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-6 col-lg-2 mb-3"
  }, /*#__PURE__*/_react.default.createElement("h5", null, "Community"), /*#__PURE__*/_react.default.createElement("ul", {
    className: "list-unstyled"
  }, /*#__PURE__*/_react.default.createElement("li", {
    className: "mb-1"
  }, /*#__PURE__*/_react.default.createElement("a", {
    style: {
      color: 'black',
      textDecoration: 'none'
    },
    href: 'https://discord.gg/vKbqDwV9PQ'
  }, "Discord")), /*#__PURE__*/_react.default.createElement("li", {
    className: "mb-1"
  }, /*#__PURE__*/_react.default.createElement("a", {
    style: {
      color: 'black',
      textDecoration: 'none'
    },
    href: 'https://twitter.com/selfguardxyz'
  }, "Twitter")))))));
}