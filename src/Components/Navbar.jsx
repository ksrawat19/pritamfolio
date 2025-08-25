import { useState } from 'react';
import "../style/navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">RAWAT</div>
      <button className={`navbar-toggle ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <div className="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>
      <ul className={`navbar-list ${isOpen ? 'active' : ''}`}>
        {['Home', 'Projects', 'About', 'Contact'].map((item, index) => (
          <li
            key={item}
            className="navbar-item"
            style={{ '--i': index }}
            onClick={() => setIsOpen(false)}
          >
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;