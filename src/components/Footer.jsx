import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <section className="footer__contact">
        <div className="container">
          <form className="footer__form" action="#">
            <h4>¿Creamos algo juntos?</h4>
            <input type="email" name="" id="" placeholder="Déjame tu email" />
            <button type="submit" className="form__btn">
              Enviar
            </button>
          </form>
          <div className="footer__social">
            <Link to="#" className="social__icons">
              <FaGithub size="50px" />
            </Link>
            <Link to="#" className="social__icons">
              <FaLinkedin size="50px" />
            </Link>
            <Link to="#" className="social__icons">
              <FaInstagram size="50px" />
            </Link>
          </div>
        </div>
      </section>
      <section className="footer__details">
        <div className="container">
          <p>© Christan Fernandez - 2021</p>
          <p>Designed with 💙 by @christian_fer94</p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
