(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react'), require('@babel/runtime/helpers/defineProperty'), require('@babel/runtime/helpers/asyncToGenerator'), require('@babel/runtime/helpers/objectWithoutProperties'), require('@babel/runtime/regenerator')) :
    typeof define === 'function' && define.amd ? define(['react', '@babel/runtime/helpers/defineProperty', '@babel/runtime/helpers/asyncToGenerator', '@babel/runtime/helpers/objectWithoutProperties', '@babel/runtime/regenerator'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global["react-awesome-buttons"] = factory(global.React, global._defineProperty, global._asyncToGenerator, global._objectWithoutProperties, global._regeneratorRuntime));
})(this, (function (React, _defineProperty, _asyncToGenerator, _objectWithoutProperties, _regeneratorRuntime) { 'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
    var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);
    var _asyncToGenerator__default = /*#__PURE__*/_interopDefaultLegacy(_asyncToGenerator);
    var _objectWithoutProperties__default = /*#__PURE__*/_interopDefaultLegacy(_objectWithoutProperties);
    var _regeneratorRuntime__default = /*#__PURE__*/_interopDefaultLegacy(_regeneratorRuntime);

    function Navbar$1() {
      var apiURL = "https://selfguard.xyz/api";
      var paymentURL = 'https://docs.selfguard.xyz';
      var notificationsURL = 'https://getnotified.xyz/';
      return /*#__PURE__*/React__default["default"].createElement("footer", {
        className: "bd-footer py-4 mt-2 bg-light"
      }, /*#__PURE__*/React__default["default"].createElement("div", {
        className: "container py-4 px-4 mt-2 px-md-3"
      }, /*#__PURE__*/React__default["default"].createElement("div", {
        className: "row"
      }, /*#__PURE__*/React__default["default"].createElement("div", {
        className: "col-lg-3 mb-3"
      }, /*#__PURE__*/React__default["default"].createElement("a", {
        href: "https://selfguard.xyz",
        className: "navbar-brand vertical"
      }, /*#__PURE__*/React__default["default"].createElement("img", {
        src: "/logo.png",
        width: "30",
        height: "30",
        className: "d-inline-block",
        alt: ""
      }), /*#__PURE__*/React__default["default"].createElement("h5", {
        className: "d-inline-block",
        style: {
          margin: 0,
          marginLeft: '5px',
          color: 'black'
        }
      }, /*#__PURE__*/React__default["default"].createElement("b", null, "SelfGuard"))), /*#__PURE__*/React__default["default"].createElement("ul", {
        className: "list-unstyled small text-muted"
      }, /*#__PURE__*/React__default["default"].createElement("li", {
        className: "mb-2"
      }, "Encryption Modules & Tooling"))), /*#__PURE__*/React__default["default"].createElement("div", {
        className: "col-6 col-lg-2 offset-lg-1 mb-3"
      }, /*#__PURE__*/React__default["default"].createElement("h5", null, "Links"), /*#__PURE__*/React__default["default"].createElement("ul", {
        className: "list-unstyled"
      }, /*#__PURE__*/React__default["default"].createElement("li", {
        className: "mb-1"
      }, /*#__PURE__*/React__default["default"].createElement("a", {
        href: "https://selfguard.xyz/home",
        style: {
          color: 'black',
          textDecoration: 'none'
        }
      }, "Home")), /*#__PURE__*/React__default["default"].createElement("li", {
        className: "mb-1"
      }, /*#__PURE__*/React__default["default"].createElement("a", {
        style: {
          color: 'black',
          textDecoration: 'none'
        },
        href: apiURL
      }, "Docs")), /*#__PURE__*/React__default["default"].createElement("li", {
        className: "mb-1"
      }, /*#__PURE__*/React__default["default"].createElement("a", {
        style: {
          color: 'black',
          textDecoration: 'none'
        },
        href: notificationsURL
      }, "Notifications")), /*#__PURE__*/React__default["default"].createElement("li", {
        className: "mb-1"
      }, /*#__PURE__*/React__default["default"].createElement("a", {
        style: {
          color: 'black',
          textDecoration: 'none'
        },
        href: paymentURL
      }, "File Storage")))), /*#__PURE__*/React__default["default"].createElement("div", {
        className: "col-6 col-lg-2 mb-3"
      }, /*#__PURE__*/React__default["default"].createElement("h5", null, "Community"), /*#__PURE__*/React__default["default"].createElement("ul", {
        className: "list-unstyled"
      }, /*#__PURE__*/React__default["default"].createElement("li", {
        className: "mb-1"
      }, /*#__PURE__*/React__default["default"].createElement("a", {
        style: {
          color: 'black',
          textDecoration: 'none'
        },
        href: 'https://discord.gg/vKbqDwV9PQ'
      }, "Discord")), /*#__PURE__*/React__default["default"].createElement("li", {
        className: "mb-1"
      }, /*#__PURE__*/React__default["default"].createElement("a", {
        style: {
          color: 'black',
          textDecoration: 'none'
        },
        href: 'https://twitter.com/selfguard_xyz'
      }, "Twitter")))))));
    }

    function Navbar(_ref) {
      var Children = _ref.Children;
      var apiURL = "https://selfguard.xyz/api";
      var securedocURL = "https://demo-filestorage.selfguard.xyz";
      var custodyURL = "https://demo-custody.selfguard.xyz";
      var paymentURL = 'https://demo-payments.selfguard.xyz';
      var notificationsURL = 'https://getnotified.xyz/Satoshi%20Nakamoto%20Fan%20Club';
      return /*#__PURE__*/React__default["default"].createElement("nav", {
        className: "navbar sticky-top navbar-dark navbar-expand-lg bg-dark",
        style: {
          marginBottom: '20px',
          borderBottom: '1px solid grey'
        }
      }, /*#__PURE__*/React__default["default"].createElement("div", {
        className: "container-fluid"
      }, /*#__PURE__*/React__default["default"].createElement("a", {
        href: "https://selfguard.xyz/home",
        className: "navbar-brand mb-0 h1 vertical"
      }, /*#__PURE__*/React__default["default"].createElement("img", {
        src: "/logo3.png",
        width: "30",
        height: "30",
        className: "d-inline-block",
        alt: ""
      }), /*#__PURE__*/React__default["default"].createElement("p", {
        className: "d-inline-block",
        style: {
          margin: 0,
          marginLeft: '5px'
        }
      }, "SelfGuard")), /*#__PURE__*/React__default["default"].createElement("button", {
        className: "navbar-toggler",
        type: "button",
        "data-bs-toggle": "collapse",
        "data-bs-target": "#navbarSupportedContent",
        "aria-controls": "navbarSupportedContent",
        "aria-expanded": "false",
        "aria-label": "Toggle navigation"
      }, /*#__PURE__*/React__default["default"].createElement("span", {
        className: "navbar-toggler-icon"
      })), /*#__PURE__*/React__default["default"].createElement("div", {
        className: "collapse navbar-collapse",
        id: "navbarSupportedContent"
      }, /*#__PURE__*/React__default["default"].createElement("ul", {
        className: "navbar-nav me-auto mb-2 mb-lg-0"
      }, /*#__PURE__*/React__default["default"].createElement("li", {
        className: "nav-item"
      }, /*#__PURE__*/React__default["default"].createElement("a", {
        className: "nav-link ".concat('/api' === window.location.pathname && 'active'),
        href: apiURL
      }, "API")), /*#__PURE__*/React__default["default"].createElement("li", {
        className: "nav-item dropdown",
        style: {
          minWidth: '280px'
        }
      }, /*#__PURE__*/React__default["default"].createElement("div", {
        className: "nav-link dropdown-toggle",
        role: "button",
        "data-bs-toggle": "dropdown",
        "aria-expanded": "false"
      }, "Demos"), /*#__PURE__*/React__default["default"].createElement("ul", {
        className: "dropdown-menu"
      }, /*#__PURE__*/React__default["default"].createElement("li", null, /*#__PURE__*/React__default["default"].createElement("a", {
        className: "dropdown-item vertical4",
        href: notificationsURL
      }, /*#__PURE__*/React__default["default"].createElement("i", {
        className: "bi bi-bell",
        style: {
          marginRight: '10px'
        }
      }), "Notifications (web3)")), /*#__PURE__*/React__default["default"].createElement("li", null, /*#__PURE__*/React__default["default"].createElement("a", {
        className: "dropdown-item vertical4",
        href: securedocURL
      }, /*#__PURE__*/React__default["default"].createElement("i", {
        className: "bi bi-file-lock",
        style: {
          marginRight: '10px'
        }
      }), "File Storage (web2/3)")), /*#__PURE__*/React__default["default"].createElement("li", null, /*#__PURE__*/React__default["default"].createElement("a", {
        className: "dropdown-item vertical4",
        href: custodyURL
      }, /*#__PURE__*/React__default["default"].createElement("i", {
        className: "bi bi-key",
        style: {
          marginRight: '10px'
        }
      }), "Custody (web3)")), /*#__PURE__*/React__default["default"].createElement("li", null, /*#__PURE__*/React__default["default"].createElement("a", {
        className: "dropdown-item vertical4",
        href: paymentURL
      }, /*#__PURE__*/React__default["default"].createElement("i", {
        className: "bi bi-credit-card",
        style: {
          marginRight: '10px'
        }
      }), "Payments (web2/3)"))))), /*#__PURE__*/React__default["default"].createElement("ul", {
        className: "navbar-nav"
      }, /*#__PURE__*/React__default["default"].createElement("li", {
        className: "nav-item vertical",
        style: {
          marginRight: '10px'
        }
      }, /*#__PURE__*/React__default["default"].createElement("a", {
        className: "nav-link",
        href: "mailto:arjun@selfguard.xyz"
      }, "Contact")), Children && /*#__PURE__*/React__default["default"].createElement(Children, null)))));
    }

    //styling of the auth components
    var style = {
      button: {
        backgroundColor: 'black',
        border: 'none',
        borderRadius: '0'
      },
      input: {
        backgroundColor: '#f3f8ff',
        border: 'none',
        borderRadius: 0,
        outline: 'none'
      },
      label: {
        display: 'none'
      },
      inputWrapper: {
        border: 'none',
        borderRadius: 0
      },
      formRow: {
        paddingBottom: '20px'
      },
      forgotPasswordLink: {
        display: 'none'
      },
      headerTitle: {
        fontWeight: 500
      },
      container: {
        zoom: 1.5,
        fontFamily: "'Roboto';",
        fontWeight: 200,
        background: '#c4c8d4',
        border: 'none',
        boxShadow: 'none',
        marginBottom: '0'
      },
      superTokensBranding: {
        display: 'none'
      }
    };

    var _excluded = ["DefaultComponent"],
      _excluded2 = ["DefaultComponent"],
      _excluded3 = ["DefaultComponent"];
    function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
    function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty__default["default"](target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
    // import {signIn, signUp} from './auth.js';

    //display of the auth component
    function Page(_ref) {
      var DefaultComponent = _ref.DefaultComponent,
        props = _objectWithoutProperties__default["default"](_ref, _excluded);
      return /*#__PURE__*/React__default["default"].createElement("div", {
        className: "container",
        style: {
          marginTop: '20px'
        }
      }, /*#__PURE__*/React__default["default"].createElement("div", {
        className: "text-center"
      }, /*#__PURE__*/React__default["default"].createElement("div", {
        className: "navbar-brand vertical text-center",
        style: {
          justifyContent: 'center'
        }
      }, /*#__PURE__*/React__default["default"].createElement("img", {
        src: "/logo.png",
        width: "70",
        height: "70",
        className: "d-inline-block",
        alt: ""
      }), /*#__PURE__*/React__default["default"].createElement("h1", {
        className: "d-inline-block",
        style: {
          margin: 0,
          marginLeft: '5px',
          color: 'black'
        }
      }, /*#__PURE__*/React__default["default"].createElement("b", null, "SelfGuard")))), /*#__PURE__*/React__default["default"].createElement(DefaultComponent, props), /*#__PURE__*/React__default["default"].createElement("p", {
        className: "text-center",
        style: {
          marginTop: '20px'
        }
      }, " Powered by SelfGuard "), /*#__PURE__*/React__default["default"].createElement("div", {
        className: "text-center",
        style: {
          marginTop: '10px'
        }
      }, /*#__PURE__*/React__default["default"].createElement("h6", {
        style: {
          lineHeight: '25px'
        }
      }, "When you initially sign up and create an account, a ", /*#__PURE__*/React__default["default"].createElement("b", null, "public/private key encrypted by your password"), " is created. "), /*#__PURE__*/React__default["default"].createElement("h6", {
        style: {
          lineHeight: '25px'
        }
      }, "Your public key is used to ", /*#__PURE__*/React__default["default"].createElement("b", null, "asymmetrically encrypt the data keys"), " used for encryptions."), /*#__PURE__*/React__default["default"].createElement("h6", {
        style: {
          lineHeight: '25px'
        }
      }, "Your private key is used to ", /*#__PURE__*/React__default["default"].createElement("b", null, "asymmetrically decrypt the data keys"), " use for decryptions.")), /*#__PURE__*/React__default["default"].createElement("div", {
        className: "col-12 text-center",
        style: {
          marginTop: "50px",
          paddingBottom: '10px'
        }
      }, /*#__PURE__*/React__default["default"].createElement("hr", null), /*#__PURE__*/React__default["default"].createElement("div", {
        className: "navbar-brand vertical text-center",
        style: {
          justifyContent: 'center'
        }
      }, /*#__PURE__*/React__default["default"].createElement("img", {
        src: "/logo.png",
        width: "40",
        height: "40",
        className: "d-inline-block",
        alt: ""
      }), /*#__PURE__*/React__default["default"].createElement("h3", {
        className: "d-inline-block",
        style: {
          margin: 0,
          marginLeft: '5px'
        }
      }, /*#__PURE__*/React__default["default"].createElement("b", null, "SelfGuard"))), /*#__PURE__*/React__default["default"].createElement("p", null, "\xA9 2022 SelfGuard Inc. All rights reserved.")));
    }
    function SuperTokensOptions(_signIn, _signUp) {
      return {
        getRedirectionURL: function () {
          var _getRedirectionURL = _asyncToGenerator__default["default"]( /*#__PURE__*/_regeneratorRuntime__default["default"].mark(function _callee(context) {
            return _regeneratorRuntime__default["default"].wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (!(context.action === "SUCCESS")) {
                      _context.next = 4;
                      break;
                    }
                    if (!(context.redirectToPath !== undefined)) {
                      _context.next = 3;
                      break;
                    }
                    return _context.abrupt("return", context.redirectToPath);
                  case 3:
                    return _context.abrupt("return", "/");
                  case 4:
                    return _context.abrupt("return", undefined);
                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));
          function getRedirectionURL(_x) {
            return _getRedirectionURL.apply(this, arguments);
          }
          return getRedirectionURL;
        }(),
        signInAndUpFeature: {
          defaultToSignUp: true
        },
        useShadowDom: false,
        override: {
          components: {
            EmailPasswordSignIn_Override: function EmailPasswordSignIn_Override(_ref2) {
              var DefaultComponent = _ref2.DefaultComponent,
                props = _objectWithoutProperties__default["default"](_ref2, _excluded2);
              return Page(_objectSpread({
                DefaultComponent: DefaultComponent
              }, props));
            },
            EmailPasswordSignUp_Override: function EmailPasswordSignUp_Override(_ref3) {
              var DefaultComponent = _ref3.DefaultComponent,
                props = _objectWithoutProperties__default["default"](_ref3, _excluded3);
              return Page(_objectSpread({
                DefaultComponent: DefaultComponent
              }, props));
            }
          },
          functions: function functions(originalImplementation) {
            return _objectSpread(_objectSpread({}, originalImplementation), {}, {
              signIn: function () {
                var _signIn2 = _asyncToGenerator__default["default"]( /*#__PURE__*/_regeneratorRuntime__default["default"].mark(function _callee2(input) {
                  var status, password;
                  return _regeneratorRuntime__default["default"].wrap(function _callee2$(_context2) {
                    while (1) {
                      switch (_context2.prev = _context2.next) {
                        case 0:
                          _context2.next = 2;
                          return originalImplementation.signIn(input);
                        case 2:
                          status = _context2.sent;
                          if (!(status.status === "OK")) {
                            _context2.next = 7;
                            break;
                          }
                          password = input.formFields[1].value;
                          _context2.next = 7;
                          return _signIn(password);
                        case 7:
                          return _context2.abrupt("return", status);
                        case 8:
                        case "end":
                          return _context2.stop();
                      }
                    }
                  }, _callee2);
                }));
                function signIn(_x2) {
                  return _signIn2.apply(this, arguments);
                }
                return signIn;
              }(),
              signUp: function () {
                var _signUp2 = _asyncToGenerator__default["default"]( /*#__PURE__*/_regeneratorRuntime__default["default"].mark(function _callee3(input) {
                  var status, password;
                  return _regeneratorRuntime__default["default"].wrap(function _callee3$(_context3) {
                    while (1) {
                      switch (_context3.prev = _context3.next) {
                        case 0:
                          _context3.next = 2;
                          return originalImplementation.signUp(input);
                        case 2:
                          status = _context3.sent;
                          if (!(status.status === "OK")) {
                            _context3.next = 7;
                            break;
                          }
                          password = input.formFields[1].value;
                          _context3.next = 7;
                          return _signUp(password);
                        case 7:
                          return _context3.abrupt("return", status);
                        case 8:
                        case "end":
                          return _context3.stop();
                      }
                    }
                  }, _callee3);
                }));
                function signUp(_x3) {
                  return _signUp2.apply(this, arguments);
                }
                return signUp;
              }()
            });
          }
        },
        emailVerificationFeature: {
          mode: "REQUIRED"
        },
        style: style
      };
    }
    function getApiDomain() {
      var apiPort = process.env.REACT_APP_API_PORT || 8080;
      var apiUrl = process.env.REACT_APP_API_URL || "http://localhost:".concat(apiPort);
      return apiUrl;
    }
    function getWebsiteDomain() {
      var websitePort = process.env.REACT_APP_WEBSITE_PORT || 3000;
      var websiteUrl = process.env.REACT_APP_WEBSITE_URL || "http://localhost:".concat(websitePort);
      return websiteUrl;
    }

    var copy = function copy(text) {
      var textField = document.createElement('textarea');
      textField.innerText = text;
      document.body.appendChild(textField);
      textField.select();
      document.execCommand('copy');
      textField.remove();
      Toastify({
        text: "Copied",
        style: {
          background: "linear-gradient(to right, #198754, #198751"
        }
      }).showToast();
    };
    var returnLibrary = function returnLibrary() {
      return {
        copy: copy,
        SuperTokensOptions: SuperTokensOptions,
        getApiDomain: getApiDomain,
        getWebsiteDomain: getWebsiteDomain,
        Footer: Navbar$1,
        Navbar: Navbar
      };
    };
    var index = returnLibrary();

    return index;

}));
