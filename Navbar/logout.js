import { signOut } from "supertokens-auth-react/recipe/emailpassword";

export default function Logout() {

    async function logoutClicked() {
      window.storage.removeItem('api_key');
      await signOut();
    }
    return (
      <li className="nav-item vertical">
        <button href='#' onClick={logoutClicked.bind(this)} className="btn btn-outline-dark nav-link vertical" type="submit">Logout</button>
      </li>
    );
}
