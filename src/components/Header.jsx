// Imports
import { useEffect, useState } from "react";
import profilePic from "/public/images/church-pfp.png";
import { Link } from "react-router-dom";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle blur-on-scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      {/* Left Section */}
      <div className="left-section">
        <img src={profilePic} alt="logo" />
        <p>Destiny Christian Church International</p>
      </div>

      {/* Nav */}
      <nav>
        <ul className={isMenuOpen ? "active" : ""}>
          <li>
            <Link to="/" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setIsMenuOpen(false)}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="/sermons" onClick={() => setIsMenuOpen(false)}>
              Sermons
            </Link>
          </li>
          <li>
            <Link to="/events" onClick={() => setIsMenuOpen(false)}>
              Events
            </Link>
          </li>
          <li>
            <Link to="/ministries" onClick={() => setIsMenuOpen(false)}>
              Ministries
            </Link>
          </li>
          <li>
            <Link to="/give" onClick={() => setIsMenuOpen(false)}>
              Give
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>

        {/* Hamburger */}
        <div
          className={`hamburger-menu ${isMenuOpen ? "active" : ""}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
