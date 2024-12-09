import React from 'react';

function Sidebar({isSideBarOpen, setIsSideBarOpen}) {
    const hideSideBar = () => {
        document.body.style.overflow = 'auto';
        setIsSideBarOpen(false)
      }
    return (
        <ul id="zn-res-menu" className={`col-md-4 ${isSideBarOpen ? 'zn-menu-visible' : ''}`}>
            <li className="zn_res_menu_go_back" onClick={() => hideSideBar()}>
                <a className="zn_res_back_icon" href="">
                    <span className="fas fa-chevron-left"></span>
                </a>
                <a className="img-menu">
                    <img src="images/logo-EMFertitech-menu.png" alt="EM Fertitech Logo" />
                </a>
                <a href="" className="zn-close-menu-button">
                    <span className="fas fa-times" ></span>
                </a>
            </li>
            <li className="menu-item-has-children menu-item-mega-parent zn_res_has_submenu">
                <a href="/">Accueil</a>
            </li>
            <li className="menu-item-has-children menu-item-mega-parent zn_res_has_submenu">
                <a href="à propos de nous">À propos de nous</a>
            </li>
            <li className="menu-item-has-children">
                <a href="EM Technology">Technologie EM</a>
            </li>
            <li className="menu-item-has-children zn_res_has_submenu">
                <span className="zn_res_submenu_trigger fas fa-chevron-right"></span>
                <a href="#">Utilisations et applications</a>
                <ul className="sub-menu clearfix">
                    <li className="zn_res_menu_go_back">
                        <a className="zn_res_back_icon" href="#">
                            <span className="fas fa-chevron-left"></span>
                        </a>
                        <a className="img-menu">
                            <img src="images/logo-EMFertitech-menu.png" alt="EM Fertitech Logo" />
                        </a>
                        <a href="#" className="zn-close-menu-button">
                            <span className="fas fa-times"></span>
                        </a>
                    </li>
                    <li><a href="agriculture">Agriculture</a></li>
                    <li><a href="elevage">Production animale</a></li>
                    <li><a href="environnement">Restauration écologique</a></li>
                    <li><a href="aquaculture">Aquaculture</a></li>
                </ul>
            </li>
            <li className="menu-item-has-children">
                <a href="services">Services</a>
            </li>
            <li className="menu-item-has-children">
                <a href="catalogue">Catalogue</a>
            </li>
            {/* <li className="menu-item-has-children menu-item-mega-parent">
                <a href="distribuidores.html">Representantes</a>
            </li> */}
            {/* <li className="menu-item-has-children menu-item-mega-parent">
                <a href="noticias.html">Noticias</a>
            </li> */}
            <li className="menu-item-has-children menu-item-mega-parent">
                <a href="contact">Contact</a>
            </li>
            <li className="footer-menu">
                <span className="title green">Contactez-nous à:</span>
                <span className="sub-title">
                    <a href="administration@emfertitech.com">administration@emfertitech.com</a>
                </span>
                <a href="https://api.whatsapp.com/send?phone=+51943603740&amp;text=Hola%20me%20gusta%c3%ada%20saber%20m%c3%a1s%20de%20Bioem" target="_self" title="Whatsapp">
                    <i className="fab fa-whatsapp"></i>
                </a>
                <a href="https://www.facebook.com/profile.php?id=61564874696176" target="_self" title="Facebook">
                    <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://www.instagram.com/emro_japan/" target="_self" title="Instagram">
                    <i className="fab fa-instagram"></i>
                </a>
                <a href="https://twitter.com/EmtmTecnologia" target="_self" title="Twitter">
                    <i className="fab fa-twitter"></i>
                </a>
                <a href="https://www.youtube.com/channel/UCQtVF4Vgg1iKWf3YhuTVotA" target="_self" title="Youtube">
                    <i className="fab fa-youtube"></i>
                </a>
            </li>
        </ul>
    );
}

export default Sidebar;
