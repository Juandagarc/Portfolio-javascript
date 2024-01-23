import React, { useState, useEffect, useRef } from 'react';
import './navbar.css';

const Navbar = () => {
  const [showAllOptions, setShowAllOptions] = useState(window.innerWidth > 600);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);
  const [showButton, setShowButton] = useState(true); // Nuevo estado para controlar la visibilidad del botón
  const menuRef = useRef(null);

  const toggleOptions = (event) => {
    event.stopPropagation();
    setShowAllOptions(!showAllOptions);
    setShowButton(false); // Oculta el botón al hacer clic en él
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      if (window.innerWidth <= 600) {
        setShowAllOptions(false);
        setShowButton(true);
      }
    }
  };
  
  

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
      setShowAllOptions(window.innerWidth > 600);
      setShowButton(true); // Asegura que el botón esté visible al cambiar el tamaño de la ventana
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <nav className='navbar'>
      <a className='sub-home' href="/">
        Home
      </a>
      <div id="trapezoid" ref={menuRef}>
        {isMobile && showButton && (
          <div className="subnav">
            <a className="subnavbtn show-hide-button" onClick={(event) => toggleOptions(event)}>
              // Show Options <i className="fa fa-caret-down"></i>
            </a>
          </div>
        )}
        {showAllOptions && (
          <>
            <div className="subnav">
              <a className="subnavbtn" href='/about'>
                About<i className="fa fa-caret-down"></i>
              </a>
            </div>
            <div className="subnav">
              <a className="subnavbtn" href='/proyects'>
                Projects<i className="fa fa-caret-down"></i>
              </a>
            </div>
            <div className="subnav">
              <a className="subnavbtn" href='/contact'>
                Contact<i className="fa fa-caret-down"></i>
              </a>
            </div>
            <div className="subnav">
              <a className="subnavbtn" href="https://europa.eu/europass/eportfolio/api/eprofile/shared-profile/juan+david-garc%C3%ADa/543802c6-bdf0-49f1-9200-abc15769d492?view=html" target="_blank" rel="noopener noreferrer">
                CV<i className="fa fa-caret-down"></i>
              </a>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
