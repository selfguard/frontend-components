"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Logout;

require("core-js/modules/es.promise.js");

var _emailpassword = require("supertokens-auth-react/recipe/emailpassword");

var _session = require("supertokens-auth-react/recipe/session");

function Logout() {
  let session = (0, _session.useSessionContext)();

  async function logoutClicked() {
    window.storage.removeItem('api_key');
    window.storage.removeItem('public_key');
    window.storage.removeItem('private_key');
    await (0, _emailpassword.signOut)();
  }

  return session.doesSessionExist && /*#__PURE__*/React.createElement("li", {
    className: "nav-item vertical"
  }, /*#__PURE__*/React.createElement("button", {
    href: "#",
    onClick: logoutClicked.bind(this),
    className: "btn btn-outline-dark nav-link vertical",
    type: "submit"
  }, "Logout"));
}