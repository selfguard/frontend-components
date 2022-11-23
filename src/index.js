import Footer from './Footer/index.js';
import Navbar from './Navbar/index.js';
import {SuperTokensOptions, getApiDomain, getWebsiteDomain} from './SuperTokens/index.js';
import Toastify from 'toastify-js'

let copy = (text) => {
  var textField = document.createElement('textarea')
  textField.innerText = text
  document.body.appendChild(textField)
  textField.select()
  document.execCommand('copy')
  textField.remove()
  Toastify({text:"Copied",style: {background: "linear-gradient(to right, #198754, #198751"}}).showToast();
}

let signUpURL = (redirect_to) => {
  if(!redirect_to) redirect_to = '/home';
  // return `https://us11.list-manage.com/contact-form?u=1684d49f48ea157c3bfc3fa52&form_id=0bf9e9f5ed5c0e6454564cce7e60bb0f`
  return 'https://selfguard.xyz/auth?redirectToPath=' + redirect_to;
}

const returnLibrary = () => {
  return {
    signUpURL,
    copy,
    SuperTokensOptions,
    getApiDomain,
    getWebsiteDomain,
    Footer,
    Navbar
  }
}

export default returnLibrary()