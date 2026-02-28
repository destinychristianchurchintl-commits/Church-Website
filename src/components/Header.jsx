// Imports
import { useEffect, useState } from "react";
import profilePic from "/public/images/church-pfp.png";
import { Link } from "react-router-dom";

// Header component
function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Handle sticky blur effect
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    const hamburger = document.querySelector(".hamburger-menu");
    const navMenu = document.querySelector("nav ul");

    if (!hamburger || !navMenu) return; // safety check

    const toggleMenu = () => {
      navMenu.classList.toggle("active");
      const bars = document.querySelectorAll(".bar");
      bars.forEach((bar) => bar.classList.toggle("active"));
    };

    const closeMenu = (e) => {
      if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        navMenu.classList.remove("active");
        const bars = document.querySelectorAll(".bar");
        bars.forEach((bar) => bar.classList.remove("active"));
      }
    };

    hamburger.addEventListener("click", toggleMenu);
    document.addEventListener("click", closeMenu);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
      hamburger.removeEventListener("click", toggleMenu);
      document.removeEventListener("click", closeMenu);
    };
  }, []);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      {/* Left Header Side */}
      <div className="left-section">
        <img src={profilePic} alt="logo" />
      </div>

      {/* Nav */}
      <nav>
        <ul>
          <Link className="button" to="/">
            Home
          </Link>
          <Link className="button" to="/about">
            About Us
          </Link>
          <Link className="button" to="/contactus">
            Sermons
          </Link>
          <Link className="button" to="/chatnow">
            Events
          </Link>
          <Link className="button" to="/gallery">
            Ministries
          </Link>
          <Link className="button" to="/admin/upload">
            Give
          </Link>
          <Link className="button" to="/admin/upload">
            Contact
          </Link>
        </ul>

        {/* Hamburger Menu */}
        <div className="hamburger-menu">
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
