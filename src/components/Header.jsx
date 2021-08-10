import React, { useEffect, useState } from 'react';

const Header = () => {
  const [showFixed, setShowFixed] = useState(false);

  useEffect(() => {
    const onScroll = event => {
      if (window.scrollY > 0) {
        setShowFixed(true);
      } else {
        setShowFixed(false);
      }
    };
    document.addEventListener('scroll', onScroll);
    return () => document.removeEventListener('scroll', onScroll);
  }, [showFixed]);

  return (
    <header className={`header ${showFixed && 'header--fixed'}`}>
      <nav className="header__navbar">
        <div className="navbar__logo">
          <h2>{`<DevGeek />`}</h2>
        </div>
        <ul className="navbar__list">
          <li className="list__item">
            <a href="#">portafolio</a>
          </li>
          <li className="list__item">
            <a href="#">experiencia</a>
          </li>
          <li className="list__item">
            <a href="#">contacto</a>
          </li>
          <li className="list__item--cv">
            <a href="#">curriculum</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
