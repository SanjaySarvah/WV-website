import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo_white from "../assets/img/logo/logo-white.svg";
import Logo_black from '../assets/img/logo/logo2.webp';
import "../assets/css/main.css";
import "../assets/css/Header.css";

// Icons
import m01 from "../assets/img/icon/m_01.svg";
import m02 from "../assets/img/icon/m_02.svg";
import m03 from "../assets/img/icon/m_03.svg";
import m04 from "../assets/img/icon/m_04.svg";
import m05 from "../assets/img/icon/m_05.svg";
import m06 from "../assets/img/icon/m_06.svg";
import serviceheaderimg from "../assets/img/about/img04.png";

// Menu Data
const servicesData = [
  { title: "Niche Technology", subtitle: "Niche Technology", link: "/aboutusnichetechnologies", icon: m01 },
  { title: "Web Application", subtitle: "Streamlined Pricing", link: "/servicewebapplication", icon: m02 },
  { title: "Salesforce", subtitle: "Transform your customer.", link: "/servicesalesforcedevelopment", icon: m03 },
  { title: "Mobile Application", subtitle: "Happy to help you!", link: "/mobile-application", icon: m04 },
  { title: "Blockchain Solutions", subtitle: "Happy to help you!", link: "/blockchain-developmentcompany", icon: m05 },
  { title: "Digital Marketing", subtitle: "Explore our all casestudy.", link: "/digital-marketing-company", icon: m06 },
  { title: "Cloud Computing", subtitle: "Explore our all casestudy.", link: "/cloud-computing", icon: m06 },
  { title: "Custom Portal", subtitle: "Explore our all casestudy.", link: "/custom-portal", icon: m06 },
  { title: "Ecommerce Solution", subtitle: "Explore our all casestudy.", link: "/ecommerce-application-development", icon: m06 },
];

const industriesData = [
  { title: "Healthcare", subtitle: "Elevate real estate experiences ", link: "/healthcare-software-development", icon: m01 },
  { title: "E-Commerce", subtitle: "Strengthen customer relationships", link: "/ecommerce-industry", icon: m02 },
  { title: "Automotive", subtitle: "Empower automotive businesses", link: "/automotive-industry", icon: m03 },
  { title: "Manufacturing", subtitle: "Simplify operations and cut overhead", link: "/manufacturing-solutions", icon: m04 },
  { title: "Supply Chain", subtitle: "Enhance supply chain efficiency", link: "/supply-chain-management", icon: m05 },
  { title: "Education", subtitle: "Equip students and educators", link: "/education", icon: m06 },
];

const technologies = [
  { title: "RPA", subtitle: "Automate repetitive tasks to boost productivity.", link: "/rpa-development-services", icon: m01 },
  { title: "Artificial Intelligence", subtitle: "Leverage AI to streamline", link: "/artificial-intelligence-services", icon: m02 },
  { title: "DevOps", subtitle: "Enhance teamwork", link: "/devops", icon: m03 },
  { title: "Data Science", subtitle: "Uncover data insights", link: "/data-engineering-services", icon: m04 },
  { title: "Machine Learning", subtitle: "Predict outcomes", link: "/machine-learning-development-company", icon: m05 },
  { title: "Web 3", subtitle: "Discover Web 3.0", link: "/web3", icon: m06 },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => {
    setMenuOpen(false);
    setOpenSubmenu(null);
  };

  const toggleSubmenu = (key) => {
    setOpenSubmenu(openSubmenu === key ? null : key);
  };

  // Close menu when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuOpen && !event.target.closest('.mobile-sidebar') && !event.target.closest('.mobile-toggle')) {
        closeMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [menuOpen]);

  // Prevent body scroll when mobile menu is open
  React.useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  const renderMegaMenu = (items) => (
    <ul className="submenu">
      <li>
        <div className="mega_menu_wrapper">
          <div className="container-fluid">
            <div className="mega_menu_wrapper_inner">
              <div className="row">
                <div className="col-xl-9">
                  <div className="megamenu_pages_wrapper mb-5">
                    <div className="row g-10">
                      {items.map((item, index) => (
                        <div className="col-xl-4 col-md-4" key={index}>
                          <Link className="iconbox_block_2" to={item.link}>
                            <span className="icon_title_wrap">
                              <small className="iconbox_icon">
                                <img src={item.icon} alt={item.title} />
                              </small>
                              <small className="iconbox_title">
                                {item.title}
                                <p className="menusubtitle">{item.subtitle}</p>
                              </small>
                            </span>
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="col-xl-3">
                  <img src={serviceheaderimg} alt="Mega Menu Visual" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  );

  return (
    <header className="header-area header-style-one header-transparent">
      <div className="xb-header stricky stricked-menu stricky-fixed original">
        <div className="container-fluid">
          <div className="header__wrap pd-70 ul_li_between">
                         <div className="header-logo">
               <Link to="/" className="logo01">
                 <img src={Logo_white} alt="Forley Ventures - White Logo" />
               </Link>
               <Link to="/" className="logo02">
                 <img src={Logo_black} alt="Forley Ventures - Black Logo" />
               </Link>
             </div>

            {/* Hamburger Toggle */}
            <div className="mobile-toggle d-lg-none">
              <button 
                onClick={toggleMenu} 
                className="hamburger"
                aria-label="Toggle mobile menu"
                aria-expanded={menuOpen}
              >
                <span className={`hamburger-line ${menuOpen ? 'open' : ''}`}></span>
                <span className={`hamburger-line ${menuOpen ? 'open' : ''}`}></span>
                <span className={`hamburger-line ${menuOpen ? 'open' : ''}`}></span>
              </button>
            </div>

            {/* Desktop Menu */}
            <div className="main-menu__wrap navbar-expand-xl d-none d-lg-block">
              <nav className="main-menu collapse navbar-collapse">
                <ul>
                  <li>
                    <Link to="/about-us"><span>About Us</span></Link>
                  </li>
                  <li className="menu-item-has-children megamenu">
                    <a href="#!" onClick={(e) => e.preventDefault()}><span>Services</span></a>
                    {renderMegaMenu(servicesData)}
                  </li>
                  <li className="menu-item-has-children megamenu">
                    <a href="#!" onClick={(e) => e.preventDefault()}><span>Technologies</span></a>
                    {renderMegaMenu(technologies)}
                  </li>
                  <li className="menu-item-has-children megamenu">
                    <a href="#!" onClick={(e) => e.preventDefault()}><span>Industries</span></a>
                    {renderMegaMenu(industriesData)}
                  </li>
                  <li>
                    <Link to="/career"><span>Career</span></Link>
                  </li>
                </ul>
              </nav>
            </div>

            {/* Header CTA */}
            <div className="header-contact d-none d-md-block">
              <Link to="/contact-us" className="thm-btn thm-btn--header btn-effect_1">
                Let's talk
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Menu */}
      <div className={`mobile-sidebar ${menuOpen ? "open" : ""}`}>
        <div className="mobile-sidebar-header">
          <button 
            onClick={closeMenu} 
            className="close-btn"
            aria-label="Close mobile menu"
          >
            ×
          </button>
        </div>
        <nav className="mobile-nav">
          <ul>
            <li>
              <Link to="/about-us" onClick={closeMenu}>About Us</Link>
            </li>
            <li>
              <button 
                className="submenu-toggle" 
                onClick={() => toggleSubmenu("services")}
                aria-expanded={openSubmenu === "services"}
              >
                Services
                <span className="toggle-icon">{openSubmenu === "services" ? "−" : "+"}</span>
              </button>
              {openSubmenu === "services" && (
                <ul className="mobile-submenu">
                  {servicesData.map((item, index) => (
                    <li key={`s-${index}`}>
                      <Link to={item.link} onClick={closeMenu}>{item.title}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li>
              <button 
                className="submenu-toggle" 
                onClick={() => toggleSubmenu("technologies")}
                aria-expanded={openSubmenu === "technologies"}
              >
                Technologies
                <span className="toggle-icon">{openSubmenu === "technologies" ? "−" : "+"}</span>
              </button>
              {openSubmenu === "technologies" && (
                <ul className="mobile-submenu">
                  {technologies.map((item, index) => (
                    <li key={`t-${index}`}>
                      <Link to={item.link} onClick={closeMenu}>{item.title}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li>
              <button 
                className="submenu-toggle" 
                onClick={() => toggleSubmenu("industries")}
                aria-expanded={openSubmenu === "industries"}
              >
                Industries
                <span className="toggle-icon">{openSubmenu === "industries" ? "−" : "+"}</span>
              </button>
              {openSubmenu === "industries" && (
                <ul className="mobile-submenu">
                  {industriesData.map((item, index) => (
                    <li key={`i-${index}`}>
                      <Link to={item.link} onClick={closeMenu}>{item.title}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li>
              <Link to="/career" onClick={closeMenu}>Career</Link>
            </li>
            <li>
              <Link to="/contact-us" onClick={closeMenu} className="mobile-cta">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Background Overlay */}
      {menuOpen && <div className="mobile-overlay" onClick={closeMenu}></div>}
    </header>
  );
};

export default Header;
