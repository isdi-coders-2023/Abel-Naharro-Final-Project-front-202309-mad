import { Link } from 'react-router-dom';
import './error.scss';

export function Error() {
  return (
    <section className="error">
      <div className="error-card">
        <div className="error-image">
          <img src="/img/image-error.jpeg" title="Icono error" />
        </div>
        <p>
          <span className="title">Ops!</span>
          <span className="message">404 - Page not found</span>
        </p>
        <div className="button-back">
          <Link to="/">Back to home</Link>
        </div>
      </div>
    </section>
  );
}
