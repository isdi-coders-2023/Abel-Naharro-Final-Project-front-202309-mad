import './subheader.scss';

export function Subheader() {
  return (
    <section className="sub-header" role="tabpanel">
      <div className="control-scroll-category">
        <i className="fa-solid fa-angle-left"></i>
      </div>
      <ul>
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
      <div className="control-scroll-category">
        <i className="fa-solid fa-angle-right"></i>
      </div>
    </section>
  );
}
