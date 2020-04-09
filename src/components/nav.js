import React from 'react';
import { Link, Route } from 'react-router-dom';
import { HEADER_LINKS } from '../constants/GlobalConstants';

const HeaderLink = ({ to, label, exact }) => (
  <Route
    path={to}
    exact={exact}
    children={({ match }) => {
      return match ? (
        <span className="nav__item nav__item--active">{label}</span>
      ) : (
        <Link to={`.${to}`} className={`nav__item`}>
          {label}
        </Link>
      );
    }}
  />
);

const Nav = () => {
  return (
    <header>
      <nav className="nav">
        <div className="nav__inner">
          <section className="nav__section nav__section--logo">
            <Link to="./" className="nav__logo">
              Any Color React
            </Link>
          </section>
          <section className="nav__section nav__section--menu">
            <div className="nav__menu">
              {HEADER_LINKS.map(link => (
                <HeaderLink key={link.key} {...link} />
              ))}
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

export default React.memo(Nav);
