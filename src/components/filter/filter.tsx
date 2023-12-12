import './filter.scss';

export function Filter() {
  return (
    <section className="filter" role="search">
      <div className="container">
        <h2>Filter</h2>
        <ul>
          <li>
            <a href="#" className="filter-on-fire">
              <i className="fa-solid fa-fire"></i> Offers On Fire!
            </a>
          </li>
          <li>
            <a href="#">Last Offers</a>
          </li>
        </ul>
      </div>
    </section>
  );
}
