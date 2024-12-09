import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Footer from './components/footer';
import Navbar from './components/navbar';
import Sidebar from './components/sidebar';
import Home from './components/home/home';
import Agriculture from './components/Agriculture';
import Livestock from './components/Livestock';
import ContactForm from './components/Contact/contact_form';
import AboutUs from './components/About_Us/indew';
import EM_Technology from './components/EM_Technology';
import Environment from './components/Environment';
import Aquaculture from './components/Aquaculture';
import Services from './components/Services';
import Catalog from './components/Catalog';
import Contact from './components/Contact/contact';
import SingleProduct from './components/Catalog/singleProduct';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [backToTop, setBackToTop] = useState(0)
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
      setBackToTop(window.scrollY)
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Function to scroll back to top smoothly
  const handleToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };


  const hideSideBar = () => {
    document.body.style.overflow = 'auto';
    setIsSideBarOpen(false)
  }

  return (
    <div className="App">
      <div className={backToTop > 200 ? 'BotonesWhatsAppCelular show' : 'BotonesWhatsAppCelular'}>
        <a
          href="https://api.whatsapp.com/send?phone=+21628642884&amp;text=Bonjour%2C%20j%27aimerais%20en%20savoir%20plus%20sur%20EM%20Fertitech" target="_blank" className="bg-whatsaap bg-wasap">
          <i className="fab fa-whatsapp mr-10"></i>WhatsApp</a>
        <a href="tel:+21628642884" className="bg-orange">
          <i className="fas fa-phone mr-10"></i>Appeler</a>
      </div>
      <div id="page_wrapper" className="zn_res_menu_visible">
        <Sidebar isSideBarOpen={isSideBarOpen} setIsSideBarOpen={setIsSideBarOpen} />
        {isSideBarOpen && <div className="overlay" onClick={() => hideSideBar()}></div>}
        <Navbar setIsSideBarOpen={setIsSideBarOpen} />
        <Routes>
          <Route path="/" element={<Home isScrolled={isScrolled} setIsScrolled={setIsScrolled} />} />
          <Route path="/agriculture" element={<Agriculture />} />
          <Route path="/elevage" element={<Livestock />} />
          <Route path="/à propos de nous" element={<AboutUs />} />
          <Route path="/EM Technology" element={<EM_Technology />} />
          <Route path="/environnement" element={<Environment />} />
          <Route path="/aquaculture" element={<Aquaculture />} />
          <Route path="/services" element={<Services />} />
          <Route path="/catalogue" element={<Catalog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/:name" element={<SingleProduct />} />

        </Routes>
        {location.pathname !== '/' && <ContactForm />}
        <Footer />
      </div>
      <a href="" id="totop" className={backToTop > 200 ? 'show' : ''} aria-label="Back to Top" onClick={handleToTop}></a>
    </div>
  );
}

export default App;
