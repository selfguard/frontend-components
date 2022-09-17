"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signIn = signIn;
exports.signUp = signUp;

require("core-js/modules/es.promise.js");

var _selfguardClient = _interopRequireDefault(require("selfguard-client"));

var _axios = _interopRequireDefault(require("axios"));

var _session = _interopRequireDefault(require("supertokens-auth-react/recipe/session"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
}

async function signIn(password) {
  try {
    let api_key = await retrieveAPIKey(); //get api key

    let sg = new _selfguardClient.default(api_key, null, null, domain); //setup Selfguard Instnace

    let keys = await sg.getKeyPairs();
    let private_key = sg.decryptWithPassword(keys[0].encrypted_private_key, password);
    window.storage.setItem("api_key", api_key);
    window.storage.setItem("private_key", private_key);
    window.storage.setItem("public_key", keys[0].public_key);
  } catch (err) {
    console.log({
      err
    });
  }

  return;
}

async function signUp(password) {
  try {
    let api_key = await createAPIKey(); //Create API Key

    let sg = new _selfguardClient.default(api_key, null, null, domain); //Setup Selfguard Instnace

    let key_pair = sg.createKeyPair('rsa'); //Generate Key Pair

    await sg.uploadKeyPair(key_pair, password); //Upload Key Pair

    window.storage.setItem("private_key", key_pair.private_key);
    window.storage.setItem("public_key", key_pair.public_key);
    window.storage.setItem("api_key", api_key);
  } catch (err) {
    console.log({
      err
    });
  }

  return;
}