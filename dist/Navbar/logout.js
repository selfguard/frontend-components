"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Logout;

require("core-js/modules/es.promise.js");

var _react = _interopRequireDefault(require("react"));

var _emailpassword = require("supertokens-auth-react/recipe/emailpassword");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Logout() {
  async function logoutClicked() {
    window.storage.removeItem('api_key');
    await (0, _emailpassword.signOut)();
  }

  return /*#__PURE__*/_react.default.createElement("li", {
    className: "nav-item vertical"
  }, /*#__PURE__*/_react.default.createElement("button", {
    href: "#",
    onClick: logoutClicked.bind(this),
    className: "btn btn-outline-dark nav-link vertical",
    type: "submit"
  }, "Logout"));
}