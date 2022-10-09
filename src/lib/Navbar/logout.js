import { signOut } from "supertokens-auth-react/recipe/emailpassword";
import { useSessionContext } from 'supertokens-auth-react/recipe/session';
import { useEthers } from '@usedapp/core'

export default function Logout() {
  let session = useSessionContext();
  const { deactivate, account } = useEthers()
  async function logoutClicked() {
    window.storage.removeItem('api_key');
    window.storage.removeItem('public_key');
    window.storage.removeItem('private_key');
    if(account) {
      deactivate();
    }
    else await signOut();
  }
  return (session.doesSessionExist || account) && (
    <li className="nav-item vertical">
      <button href='#' onClick={logoutClicked.bind(this)} className="btn btn-outline-dark nav-link vertical" type="submit">Logout</button>
    </li>
  );
}