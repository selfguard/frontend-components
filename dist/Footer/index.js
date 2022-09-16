"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Navbar;

function Navbar() {
  let apiURL = "https://selfguard.xyz/api";
  let securedocURL = "https://demo-filestorage.selfguard.xyz";
  let custodyURL = "https://demo-custody.selfguard.xyz";
  let paymentURL = 'https://demo-payments.selfguard.xyz';
  return /*#__PURE__*/React.createElement("footer", {
    className: "bd-footer py-4 mt-5 bg-light"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container py-4 px-4 px-md-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-lg-3 mb-3"
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://selfguard.xyz",
    className: "navbar-brand vertical"
  }, /*#__PURE__*/React.createElement("img", {
    src: "/logo.png",
    width: "30",
    height: "30",
    className: "d-inline-block",
    alt: ""
  }), /*#__PURE__*/React.createElement("h5", {
    className: "d-inline-block",
    style: {
      margin: 0,
      marginLeft: '5px',
      color: 'black'
    }
  }, /*#__PURE__*/React.createElement("b", null, "SelfGuard"))), /*#__PURE__*/React.createElement("ul", {
    className: "list-unstyled small text-muted"
  }, /*#__PURE__*/React.createElement("li", {
    className: "mb-2"
  }, "Universal API for Encryption and Tokenization"))), /*#__PURE__*/React.createElement("div", {
    className: "col-6 col-lg-2 offset-lg-1 mb-3"
  }, /*#__PURE__*/React.createElement("h5", null, "Links"), /*#__PURE__*/React.createElement("ul", {
    className: "list-unstyled"
  }, /*#__PURE__*/React.createElement("li", {
    className: "mb-1"
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://selfguard.xyz/home",
    style: {
      color: 'black',
      textDecoration: 'none'
    }
  }, "Home")), /*#__PURE__*/React.createElement("li", {
    className: "mb-1"
  }, /*#__PURE__*/React.createElement("a", {
    style: {
      color: 'black',
      textDecoration: 'none'
    },
    href: apiURL
  }, "API")), /*#__PURE__*/React.createElement("li", {
    className: "mb-1"
  }, /*#__PURE__*/React.createElement("a", {
    style: {
      color: 'black',
      textDecoration: 'none'
    },
    href: paymentURL
  }, "Payments")), /*#__PURE__*/React.createElement("li", {
    className: "mb-1"
  }, /*#__PURE__*/React.createElement("a", {
    style: {
      color: 'black',
      textDecoration: 'none'
    },
    href: custodyURL
  }, "Custody")), /*#__PURE__*/React.createElement("li", {
    className: "mb-1"
  }, /*#__PURE__*/React.createElement("a", {
    style: {
      color: 'black',
      textDecoration: 'none'
    },
    href: securedocURL
  }, "File Storage")))), /*#__PURE__*/React.createElement("div", {
    className: "col-6 col-lg-2 mb-3"
  }, /*#__PURE__*/React.createElement("h5", null, "Community"), /*#__PURE__*/React.createElement("ul", {
    className: "list-unstyled"
  }, /*#__PURE__*/React.createElement("li", {
    className: "mb-1"
  }, /*#__PURE__*/React.createElement("a", {
    style: {
      color: 'black',
      textDecoration: 'none'
    },
    href: 'https://discord.gg/vKbqDwV9PQ'
  }, "Discord")), /*#__PURE__*/React.createElement("li", {
    className: "mb-1"
  }, /*#__PURE__*/React.createElement("a", {
    style: {
      color: 'black',
      textDecoration: 'none'
    },
    href: 'https://twitter.com/selfguardxyz'
  }, "Twitter")))))));
}