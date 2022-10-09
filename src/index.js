import Footer from './Footer/index.js';
import Navbar from './Navbar/index.js';
import {SuperTokensOptions, getApiDomain, getWebsiteDomain} from './SuperTokens/index.js';

const returnLibrary = () => {
  return {
    SuperTokensOptions,
    getApiDomain,
    getWebsiteDomain,
    Footer,
    Navbar
  }
}
export default returnLibrary()