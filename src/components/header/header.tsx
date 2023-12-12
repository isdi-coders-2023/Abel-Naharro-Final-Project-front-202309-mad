import { Link } from 'react-router-dom';
import './header.scss';

export function Header() {
  return (
    <header>
      <div className="header-logo">
        <img src="/img/icon.png" title="Icono Todotecnofertas" />
        <h1>
          Todo<span>tecnofertas</span>
        </h1>
      </div>
      <nav className="header-nav">
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
      </nav>
    </header>
  );
}
