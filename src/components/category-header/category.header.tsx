import { SyntheticEvent } from 'react';
import './category.header.scss';

export function CategoryHeader() {
  const handleClickLeft = (event: SyntheticEvent) => {
    event.preventDefault();
    const scroll = document.querySelector('.category-list') as HTMLElement;
    scroll.scrollLeft -= 100;
  };
  const handleClickRight = (event: SyntheticEvent) => {
    event.preventDefault();
    const scroll = document.querySelector('.category-list') as HTMLElement;
    scroll.scrollLeft += 100;
  };

  return (
    <section className="sub-header" role="tabpanel">
      <div
        className="control-scroll-category"
        role="button"
        onClick={handleClickLeft}
      >
        <i className="fa-solid fa-angle-left"></i>
      </div>
      <ul className="category-list">
        <li>
          <a href="#">
            <i className="fa-solid fa-mobile-screen"></i> Mobiles
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa-solid fa-tablet-screen-button"></i> Tables
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa-solid fa-laptop"></i>Computers
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa-solid fa-gamepad"></i>Games
          </a>
        </li>
      </ul>
      <div className="control-scroll-category" onClick={handleClickRight}>
        <i className="fa-solid fa-angle-right"></i>
      </div>
    </section>
  );
}
