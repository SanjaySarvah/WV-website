import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import Logo_black from "../assets/img/logo/logo-black02.svg";

// Menu data with icons
const servicesData = [
  { title: "Niche Technology", link: "/aboutusnichetechnologies", icon: "bi bi-globe" },
  { title: "Web Application", link: "/servicewebapplication", icon: "bi bi-window" },
  { title: "Salesforce", link: "/servicesalesforcedevelopment", icon: "bi bi-lightning" },
];

const industriesData = [
  { title: "Healthcare", link: "/healthcare-software-development", icon: "bi bi-heart-pulse" },
  { title: "E-Commerce", link: "/ecommerce-application-development", icon: "bi bi-cart" },
];

const technologiesData = [
  { title: "AI", link: "/artificial-intelligence-services", icon: "bi bi-cpu" },
  { title: "DevOps", link: "/devops", icon: "bi bi-gear" },
];

const MobileHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenu, setSubmenu] = useState(null);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => {
    setMenuOpen(false);
    setSubmenu(null);
  };

  const toggleSubmenu = (key) => {
    setSubmenu(submenu === key ? null : key);
  };

  return (
    <header className="mobile-header">
      <style>{`
        .mobile-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px 15px;
          background-color: #fff;
          border-bottom: 1px solid #ddd;
          position: relative;
          z-index: 10000;
        }
        .mobile-logo img {
          width: 220px;
        }
        .hamburger-btn {
          font-size: 28px;
          background: none;
          border: none;
        }
        .mobile-menu {
          position: fixed;
          top: 0;
          right: -100%;
          width: 80%;
          height: 100%;
          background-color: #fff;
          box-shadow: -3px 0 10px rgba(0,0,0,0.2);
          transition: right 0.3s ease-in-out;
          z-index: 9999;
          padding: 20px;
          overflow-y: auto;
        }
        .mobile-menu.open {
          right: 0;
        }
        .mobile-menu-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }
        .mobile-menu ul {
          list-style: none;
          padding: 0;
        }
        .mobile-menu li {
          margin-bottom: 12px;
        }
        .submenu-toggle {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: none;
          border: none;
          font-weight: bold;
          font-size: 16px;
          padding: 5px 0;
        }
        .submenu-toggle i {
          transition: transform 0.2s;
        }
        .mobile-submenu {
          padding-left: 20px;
          margin-top: 6px;
        }
        .mobile-overlay {
          position: fixed;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          background-color: rgba(0,0,0,0.5);
          z-index: 9998;
        }
        .mobile-menu a, .submenu-toggle {
          color: #333;
          text-decoration: none;
        }
        @media (min-width: 992px) {
          .mobile-header {
            display: none;
          }
        }
      `}</style>

      {/* Header Top */}
      <div className="mobile-logo">
        <Link to="/">
          <img src={Logo_black} alt="Logo" />
        </Link>
      </div>
      <button className="hamburger-btn" onClick={toggleMenu}>
        <i className="bi bi-list"></i>
      </button>

      {/* Slide Menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <div className="mobile-menu-header">
          <h4>Menu</h4>
          <button className="close-btn" onClick={closeMenu}>
            <i className="bi bi-x-lg"></i>
          </button>
        </div>

        <ul>
          <li>
            <Link to="/" onClick={closeMenu}>
              <i className="bi bi-house me-2"></i> Home
            </Link>
          </li>

          {/* Services */}
          <li>
            <button className="submenu-toggle" onClick={() => toggleSubmenu("services")}>
              <span><i className="bi bi-briefcase me-2"></i> Services</span>
              <i className={`bi ${submenu === "services" ? "bi-chevron-down" : "bi-chevron-right"}`}></i>
            </button>
            {submenu === "services" && (
              <ul className="mobile-submenu">
                {servicesData.map((item, index) => (
                  <li key={index}>
                    <Link to={item.link} onClick={closeMenu}>
                      <i className={`${item.icon} me-2`}></i> {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          {/* Technologies */}
          <li>
            <button className="submenu-toggle" onClick={() => toggleSubmenu("technologies")}>
              <span><i className="bi bi-cpu me-2"></i> Technologies</span>
              <i className={`bi ${submenu === "technologies" ? "bi-chevron-down" : "bi-chevron-right"}`}></i>
            </button>
            {submenu === "technologies" && (
              <ul className="mobile-submenu">
                {technologiesData.map((item, index) => (
                  <li key={index}>
                    <Link to={item.link} onClick={closeMenu}>
                      <i className={`${item.icon} me-2`}></i> {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          {/* Industries */}
          <li>
            <button className="submenu-toggle" onClick={() => toggleSubmenu("industries")}>
              <span><i className="bi bi-building me-2"></i> Industries</span>
              <i className={`bi ${submenu === "industries" ? "bi-chevron-down" : "bi-chevron-right"}`}></i>
            </button>
            {submenu === "industries" && (
              <ul className="mobile-submenu">
                {industriesData.map((item, index) => (
                  <li key={index}>
                    <Link to={item.link} onClick={closeMenu}>
                      <i className={`${item.icon} me-2`}></i> {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          {/* Other Pages */}
          <li>
            {/* <a href="https://worleyventure.com/career" onClick={closeMenu}>
              <i className="bi bi-people me-2"></i> Career
            </a> */}
            <Link to="/career" onClick={closeMenu}><b><i className="bi bi-people me-2"></i>Career</b></Link>
          </li>
          <li>
            {/* <a href="https://worleyventure.com/contact-us" onClick={closeMenu}>
              <i className="bi bi-envelope me-2"></i> Contact
            </a> */}
            <Link to="/contact-us" onClick={closeMenu}><b><i className="bi bi-envelope me-2"></i>Contact Us</b></Link>
          </li>
        </ul>
      </div>

      {/* Overlay */}
      {menuOpen && <div className="mobile-overlay" onClick={closeMenu}></div>}
    </header>
  );
};

export default MobileHeader;
