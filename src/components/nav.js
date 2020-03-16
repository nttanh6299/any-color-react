import React from 'react';
import { Link } from 'react-router-dom';
import { HEADER_LINKS } from '../constants/GlobalConstants';

const Nav = () => {
  return (
    <header>
      <nav className="nav">
        <div className="nav__inner">
          <section className="nav__section nav__section--logo">
            <Link to={HEADER_LINKS.main} className="nav__logo">
              AnyColorReact
            </Link>
          </section>
          <section className="nav__section nav__section--menu">
            <div className="nav__menu">
              <Link
                to={HEADER_LINKS.colors}
                className="nav__menu__item nav__menu__item--active"
              >
                Colors
              </Link>
              <Link to={HEADER_LINKS.gradients} className="nav__menu__item">
                Gradients
              </Link>
            </div>
          </section>
          <section className="nav__section nav__section--switch">
            <div className="nav_switch"></div>
          </section>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
