"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Page = Page;
exports.default = SuperTokensOptions;

require("core-js/modules/es.promise.js");

var _selfguardClient = _interopRequireDefault(require("selfguard-client"));

var _axios = _interopRequireDefault(require("axios"));

var _session = _interopRequireDefault(require("supertokens-auth-react/recipe/session"));

var _style = require("./style");

var _react = _interopRequireDefault(require("react"));

const _excluded = ["DefaultComponent"],
      _excluded2 = ["DefaultComponent"],
      _excluded3 = ["DefaultComponent"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

let domain = process.env.REACT_APP_API_URL ? process.env.REACT_APP_API_URL : "http://localhost:8080";

async function createAPIKey(domain) {
  try {
    _session.default.addAxiosInterceptors(_axios.default);

    let result = await _axios.default.post(domain + "/createAPIKey");
    return result.data;
  } catch (err) {
    console.log({
      err
    });
  }
}

async function retrieveAPIKey() {
  try {
    _session.default.addAxiosInterceptors(_axios.default);

    let result = await _axios.default.post(domain + "/retrieveAPIKey");
    return result.data;
  } catch (err) {
    console.log({
      err
    });
  }
} //display of the auth component


function Page(_ref) {
  let {
    DefaultComponent
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "container",
    style: {
      marginTop: '20px'
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "text-center"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "navbar-brand vertical text-center",
    style: {
      justifyContent: 'center'
    }
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: "/logo.png",
    width: "70",
    height: "70",
    className: "d-inline-block",
    alt: ""
  }), /*#__PURE__*/_react.default.createElement("h1", {
    className: "d-inline-block",
    style: {
      margin: 0,
      marginLeft: '5px',
      color: 'black'
    }
  }, /*#__PURE__*/_react.default.createElement("b", null, "SelfGuard")))), /*#__PURE__*/_react.default.createElement(DefaultComponent, props), /*#__PURE__*/_react.default.createElement("p", {
    className: "text-center",
    style: {
      marginTop: '20px'
    }
  }, " Powered by SelfGuard "), /*#__PURE__*/_react.default.createElement("div", {
    className: "text-center",
    style: {
      marginTop: '10px'
    }
  }, /*#__PURE__*/_react.default.createElement("h6", {
    style: {
      lineHeight: '25px'
    }
  }, "When you initially sign up and create an account, a ", /*#__PURE__*/_react.default.createElement("b", null, "public/private key encrypted by your password"), " is created. "), /*#__PURE__*/_react.default.createElement("h6", {
    style: {
      lineHeight: '25px'
    }
  }, "Your public key is used to ", /*#__PURE__*/_react.default.createElement("b", null, "asymmetric ally encrypt the data keys"), " used for encryptions."), /*#__PURE__*/_react.default.createElement("h6", {
    style: {
      lineHeight: '25px'
    }
  }, "Your private key is used to ", /*#__PURE__*/_react.default.createElement("b", null, "asymmetric ally decrypt the data keys"), " use for decryptions.")), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-12 text-center",
    style: {
      marginTop: "50px",
      paddingBottom: '10px'
    }
  }, /*#__PURE__*/_react.default.createElement("hr", null), /*#__PURE__*/_react.default.createElement("div", {
    className: "navbar-brand vertical text-center",
    style: {
      justifyContent: 'center'
    }
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: "/logo.png",
    width: "40",
    height: "40",
    className: "d-inline-block",
    alt: ""
  }), /*#__PURE__*/_react.default.createElement("h3", {
    className: "d-inline-block",
    style: {
      margin: 0,
      marginLeft: '5px'
    }
  }, /*#__PURE__*/_react.default.createElement("b", null, "SelfGuard"))), /*#__PURE__*/_react.default.createElement("p", null, "\xA9 2022 SelfGuard Inc. All rights reserved.")));
}

function SuperTokensOptions(_signIn, _signUp) {
  return {
    getRedirectionURL: async context => {
      if (context.action === "SUCCESS") {
        if (context.redirectToPath !== undefined) {
          return context.redirectToPath;
        }

        return "/";
      }

      return undefined;
    },
    signInAndUpFeature: {
      defaultToSignUp: true
    },
    useShadowDom: false,
    override: {
      components: {
        EmailPasswordSignIn_Override: _ref2 => {
          let {
            DefaultComponent
          } = _ref2,
              props = _objectWithoutProperties(_ref2, _excluded2);

          return Page(_objectSpread({
            DefaultComponent
          }, props));
        },
        EmailPasswordSignUp_Override: _ref3 => {
          let {
            DefaultComponent
          } = _ref3,
              props = _objectWithoutProperties(_ref3, _excluded3);

          return Page(_objectSpread({
            DefaultComponent
          }, props));
        }
      },
      functions: originalImplementation => {
        return _objectSpread(_objectSpread({}, originalImplementation), {}, {
          signIn: async function signIn(input) {
            let status = await originalImplementation.signIn(input);

            if (status.status === "OK") {
              let password = input.formFields[1].value;
              await _signIn(password);
            }

            return status;
          },
          signUp: async function signUp(input) {
            let status = await originalImplementation.signUp(input);

            if (status.status === "OK") {
              let password = input.formFields[1].value;
              await _signUp(password);
            }

            return status;
          }
        });
      }
    },
    emailVerificationFeature: {
      mode: "REQUIRED"
    },
    style: _style.style
  };
}