"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Page = Page;
exports.options = exports.functions = void 0;

require("core-js/modules/es.promise.js");

var _selfguardClient = _interopRequireDefault(require("selfguard-client"));

var _axios = _interopRequireDefault(require("axios"));

var _session = _interopRequireDefault(require("supertokens-auth-react/recipe/session"));

var _style = require("./style");

const _excluded = ["DefaultComponent"],
      _excluded2 = ["DefaultComponent"],
      _excluded3 = ["DefaultComponent"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

_session.default.addAxiosInterceptors(_axios.default);

let api_key = process.env.REACT_APP_SELFGUARD_API_KEY; //display of the auth component

function Page(_ref) {
  let {
    DefaultComponent
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      marginTop: '20px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "navbar-brand vertical text-center",
    style: {
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "/logo.png",
    width: "70",
    height: "70",
    className: "d-inline-block",
    alt: ""
  }), /*#__PURE__*/React.createElement("h1", {
    className: "d-inline-block",
    style: {
      margin: 0,
      marginLeft: '5px',
      color: 'black'
    }
  }, /*#__PURE__*/React.createElement("b", null, "SelfGuard - File Storage")))), /*#__PURE__*/React.createElement(DefaultComponent, props), /*#__PURE__*/React.createElement("p", {
    className: "text-center",
    style: {
      marginTop: '20px'
    }
  }, " Powered by SelfGuard "), /*#__PURE__*/React.createElement("div", {
    className: "text-center",
    style: {
      marginTop: '10px'
    }
  }, /*#__PURE__*/React.createElement("h6", {
    style: {
      lineHeight: '25px'
    }
  }, "When you initially sign up and create an account, a ", /*#__PURE__*/React.createElement("b", null, "public/private key encrypted by your password"), " is created. "), /*#__PURE__*/React.createElement("h6", {
    style: {
      lineHeight: '25px'
    }
  }, "Your public key is used to ", /*#__PURE__*/React.createElement("b", null, "asymmetric ally encrypt the data keys"), " used for encryptions."), /*#__PURE__*/React.createElement("h6", {
    style: {
      lineHeight: '25px'
    }
  }, "Your private key is used to ", /*#__PURE__*/React.createElement("b", null, "asymmetric ally decrypt the data keys"), " use for decryptions.")), /*#__PURE__*/React.createElement("div", {
    className: "col-12 text-center",
    style: {
      marginTop: "50px",
      paddingBottom: '10px'
    }
  }, /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement("div", {
    className: "navbar-brand vertical text-center",
    style: {
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "/logo.png",
    width: "40",
    height: "40",
    className: "d-inline-block",
    alt: ""
  }), /*#__PURE__*/React.createElement("h3", {
    className: "d-inline-block",
    style: {
      margin: 0,
      marginLeft: '5px'
    }
  }, /*#__PURE__*/React.createElement("b", null, "SelfGuard"))), /*#__PURE__*/React.createElement("p", null, "\xA9 2022 SelfGuard Inc. All rights reserved.")));
}

const functions = originalImplementation => {
  return _objectSpread(_objectSpread({}, originalImplementation), {}, {
    signIn: async function signIn(input) {
      let status = await originalImplementation.signIn(input);

      if (status.status === "OK") {
        let password = input.formFields[1].value;
        let sg = new _selfguardClient.default(api_key); //setup Selfguard Instnace

        let keys = await sg.getKeyPairs();
        let private_key = sg.decryptWithPassword(keys[0].encrypted_private_key, password);
        window.storage.setItem("private_key", private_key);
        window.storage.setItem("public_key", keys[0].public_key);
      }

      return status;
    },
    signUp: async function signUp(input) {
      let status = await originalImplementation.signUp(input);

      if (status.status === "OK") {
        let password = input.formFields[1].value;
        let sg = new _selfguardClient.default(api_key); //setup Selfguard Instnace

        let key_pair = sg.createKeyPair('rsa'); //Generate Key Pair

        await sg.uploadKeyPair(key_pair, password); //Upload Key Pair

        window.storage.setItem("private_key", key_pair.private_key);
        window.storage.setItem("public_key", key_pair.public_key);
      }

      return status;
    }
  });
};

exports.functions = functions;
const options = {
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
    functions
  },
  emailVerificationFeature: {
    mode: "REQUIRED"
  },
  style: _style.style
};
exports.options = options;