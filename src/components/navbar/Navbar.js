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
      <nav className="navbar">
        <ul>
          <li><a onClick={scroll} data-id="landing">home</a></li>

          <li><a onClick={scroll} data-id="about">about</a></li>

          <li><a onClick={scroll} data-id="portfolio">portfolio</a></li>

          <li><a onClick={scroll} data-id="contact">contact</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;