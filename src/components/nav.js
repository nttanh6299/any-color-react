import React from 'react';

const Nav = () => {
  return (
    <header>
      <nav className="nav">
        <div className="nav__inner">
          <section className="nav__section nav__section--logo">
            <a href="./" className="nav__logo">
              AnyColorReact
            </a>
          </section>
          <section className="nav__section nav__section--menu">
            <div className="nav__menu">
              <a href="#" className="nav__menu__item nav__menu__item--active">
                Colors
              </a>
              <a href="#" className="nav__menu__item">
                Gradients
              </a>
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
