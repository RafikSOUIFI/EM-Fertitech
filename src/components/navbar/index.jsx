import React from 'react';
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = ({ setIsSideBarOpen }) => {
  const navigate = useNavigate()
  const showSideBar = () => {
    document.body.style.overflow = 'hidden';
    setIsSideBarOpen(true)
  }

  const location = useLocation();
  const headerStyle = location.pathname === "/contact" 
        ? { background: "#000000", color: "#ffffff" }
        : {};
  
  return (
    <header id="header" className="site-header cta_button header--no-sticked" data-header-style="3" style={headerStyle}>
      <div className="kl-main-header">
        <div className="site-header-main-wrapper">
          <div className="siteheader-container container">
            <div className="site-header-row site-header-main d-flex flex-row justify-content-between">
              {/* Left Section - Social Icons */}
              <div className="site-header-main-left col d-flex justify-content-start align-items-center">
                <div>
                  <ul className="topnav social-icons sc--clean">
                    <li>
                      <a href="https://www.facebook.com/profile.php?id=61564874696176" target="noopener noreferrer" title="Facebook">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/emro_japan/" target="noopener noreferrer" title="Instagram">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.youtube.com/channel/UC_7veybfIf04vSHvkywl9Uw" target="noopener noreferrer" title="Youtube">
                        <i className="fab fa-youtube"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Center Section - Logo */}
              <div className="site-header-main-center col d-flex justify-content-center align-items-center">
                <div className="logo-container hasInfoCard logosize--yes d-flex">
                  <h1 className="site-logo logo align-self-center" id="logo">
                    <a onClick={() => { navigate("/"); window.location.reload() }}>
                      <img src="images/logo-EMFertitech.png" className="logo-img" alt="EM Fertitech" title="EM Fertitech" />
                    </a>
                  </h1>
                </div>
              </div>

              {/* Right Section - Menu and Contact */}
              <div className="site-header-main-right col d-flex justify-content-end align-items-center">
                <div className="topnav support--panel align-self-center">
                  <a href="distribuidores.html">
                    <label htmlFor="support_p" className="topnav-item spanel-label">
                      <i className="fas fa-store"></i>
                      <span className="topnav-item--text">POINTS DE VENTE</span>
                    </label>
                  </a>
                </div>

                {/* Main Menu */}
                <div className="main-menu-wrapper">
                  <div id="zn-res-menuwrapper">
                    <a className="zn-res-trigger zn-header-icon" onClick={() => showSideBar()}></a>
                  </div>

                  {/* <div id="main-menu" className="main-nav zn_mega_wrapper">
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
