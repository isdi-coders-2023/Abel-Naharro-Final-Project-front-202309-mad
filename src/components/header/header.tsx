import { Link } from 'react-router-dom';
import './header.scss';
import { useUsers } from '../../hooks/use.users';

export function Header() {
  const { loggedUser } = useUsers();

  return (
    <header>
      <div className="header-logo">
        <img src="/img/icon.png" title="Icono Todotecnofertas" />
        <h1>
          Todo<span>tecnofertas</span>
        </h1>
      </div>
      <nav className="header-nav">
        {!loggedUser ? (
          <ul>
            <li>
              <Link to="/sign-up">Sign Up</Link>
            </li>
            <li>
              <Link to="/sign-in">Sign In</Link>
            </li>
            <li>
              <Link className="button-share" to="/sign-in">
                + Share
              </Link>
            </li>
          </ul>
        ) : (
          <ul>
            <li className="info-user">
              {/* <Link to="/sign-in"></Link> */}
              <img src="https://placehold.co/25x25/webp" title="Icono user" />
              {loggedUser!.userName}
            </li>
            <li>
              <Link className="button-share" to="/share">
                + Share
              </Link>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}
