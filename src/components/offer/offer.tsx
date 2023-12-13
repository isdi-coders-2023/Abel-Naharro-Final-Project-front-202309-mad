import './offer.scss';

export function Offer() {
  return (
    <section className="card-offer" role="contentinfo">
      <div className="content-image">
        <img src="https://placehold.co/200x200/webp" alt="offer image" />
      </div>
      <div className="content-info">
        <div className="content-info-header">
          <div className="buttons-vote">
            <button className="btn-vote-down" title="vote-down">
              <i className="fa-regular fa-thumbs-down"></i>
            </button>
            <span className="status">+1000</span>
            <button className="btn-vote-up" title="vote-up">
              <i className="fa-regular fa-thumbs-up"></i>
            </button>
          </div>
          <div className="created-at">
            <p>
              <i className="fa-regular fa-calendar-days"></i> 03/02/2023
            </p>
          </div>
        </div>
        <div className="title">Redmi Pad SE, 4 GB + 128 GB</div>
        <div className="subtitle">
          <span className="offer-price">144,45€</span>{' '}
          <span className="regular-price">199,99€</span>
          <span className="discount">(-28%)</span>
          <span className="brand-store">mi.com</span>
        </div>
        <div className="description">
          La Redmi Pad SE es una tableta de 11 pulgadas con una pantalla FHD+ de
          11" con 16,7 millones de colores y una tasa de refresco ...
        </div>
        <div className="author">
          <img src="https://placehold.co/25x25/webp" alt="author" />
          <p>Name</p>
        </div>
        <div className="offer-link">
          <a href="#">
            Go to Offer <i className="fa-solid fa-up-right-from-square"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
