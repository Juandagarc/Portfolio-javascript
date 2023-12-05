
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Logo</div>
      <ul className="nav-list">
        <li className="nav-item">Inicio</li>
        <li className="nav-item">Acerca de</li>
        <li className="nav-item">Servicios</li>
        <li className="nav-item">Contacto</li>
      </ul>
    </nav>
  );
};

export default Navbar;
