import React from 'react';
import scrollToElement from 'scroll-to-element';
import './Navbar.scss';

const Navbar = () => {
  function scroll(e) {
    const id = '#'+e.currentTarget.dataset.id;
    scrollToElement(id);
  }

  return (
    <div id="navbar">
      <div className="container">
        <nav className="navbar navbar-expand-lg bg-gradient-primary text-white">
          <a className="navbar-brand" onClick={scroll} data-id="landing">sHa</a>
          <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <i className="fas fa-chevron-down" style={{color: 'white'}}></i>
            <i className="fas fa-chevron-up"  style={{color: 'white'}}></i>
          </button>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <a className="nav-link text-uppercase"  onClick={scroll} data-id="landing">home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-uppercase"  onClick={scroll} data-id="about">about</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-uppercase"  onClick={scroll} data-id="portfolio">portfolio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-uppercase" onClick={scroll} data-id="contact">contact</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;