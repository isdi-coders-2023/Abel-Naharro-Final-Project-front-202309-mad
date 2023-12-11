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
            <a href="#">Sign Up</a>
          </li>
          <li>
            <a href="#">Sign In</a>
          </li>
          <li>
            <a href="#" className="button-share">
              + Share
            </a>
          </li>
        </ul>
        {/* <form>
          <input type="search" name="q" placeholder="Buscar" />
          <input type="submit" defaultValue="¡Vamos!" />
        </form> */}
      </nav>
    </header>
  );
}
