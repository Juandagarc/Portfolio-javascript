import React, { useState, useEffect } from 'react';
import './navbar.css';

const Navbar = () => {

  return (
    <nav className='navbar'>
      <a className='sub-home' href="/">
        Home
      </a>
      <div id="trapezoid">
        <div className="subnav">
          <a className="subnavbtn">
            About<i className="fa fa-caret-down"></i>
          </a>
        </div>
        <div className="subnav">
          <a className="subnavbtn" href='/proyects'>
            Proyects<i className="fa fa-caret-down"></i>
          </a>
        </div>
        <div className="subnav">
          <a className="subnavbtn">
            contact<i className="fa fa-caret-down"></i>
          </a>
        </div>
        <div className="subnav">
        <a className="subnavbtn" href="https://europa.eu/europass/eportfolio/api/eprofile/shared-profile/juan+david-garc%C3%ADa/543802c6-bdf0-49f1-9200-abc15769d492?view=html" target="_blank" rel="noopener noreferrer">
            CV<i className="fa fa-caret-down"></i>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
