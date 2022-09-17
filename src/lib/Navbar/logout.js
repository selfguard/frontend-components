import { signOut } from "supertokens-auth-react/recipe/emailpassword";
import { useSessionContext } from 'supertokens-auth-react/recipe/session';

export default function Logout() {
  let session = useSessionContext();
  async function logoutClicked() {
    window.storage.removeItem('api_key');
    window.storage.removeItem('public_key');
    window.storage.removeItem('private_key');
    await signOut();
  }
  return session.doesSessionExist && (
    <li className="nav-item vertical">
      <button href='#' onClick={logoutClicked.bind(this)} className="btn btn-outline-dark nav-link vertical" type="submit">Logout</button>
    </li>
  );
}
