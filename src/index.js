import Footer from './Footer/index.js';
import Navbar from './Navbar/index.js';
import {SuperTokensOptions, getApiDomain, getWebsiteDomain} from './SuperTokens/index.js';

let copy = (text) => {
  var textField = document.createElement('textarea')
  textField.innerText = text
  document.body.appendChild(textField)
  textField.select()
  document.execCommand('copy')
  textField.remove()
  Toastify({text:"Copied",style: {background: "linear-gradient(to right, #198754, #198751"}}).showToast();
}

const returnLibrary = () => {
  return {
    copy,
    SuperTokensOptions,
    getApiDomain,
    getWebsiteDomain,
    Footer,
    Navbar
  }
}

export default returnLibrary()