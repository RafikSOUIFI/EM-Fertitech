import React from 'react';

function Footer() {
    return (
        <footer id="footer" data-footer-style="4">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12 row w-100 d-flex justify-content-between text-center">
                        {/* Address */}
                        <div className="col-md-12 col-sm-12 col-lg-4 part-footer justify-content-start">
                            <a href="https://maps.app.goo.gl/fmhpD7fRYWrUCKhU7" target="_blank" rel="noopener noreferrer" className="footer-links">
                                <i className="glyphicon fas fa-map-marker-alt"></i>
                                <span> Mornag - Ben Arous, En face du salon de thé Havana</span>
                            </a>
                        </div>

                        {/* Email */}
                        <div className="col-md-12 col-sm-12 col-lg-4 part-footer justify-content-center text-center">
                            <a href="mailto:administracion@emfertitech.com" className="footer-links">
                                <i className="glyphicon fas fa-at"></i>
                                <span> administracion@emfertitech.com</span>
                            </a>
                        </div>

                        {/* Phone */}
                        <div className="col-md-12 col-sm-12 col-lg-4 part-footer justify-content-end text-center phone-footer">
                            <a href="tel:+21628642884" className="footer-links">
                                <i className="glyphicon fas fa-phone"></i>
                                <span> (+216) 28642884</span>
                            </a>
                        </div>
                    </div>

                    {/* Social Icons */}
                    <div className="col-sm-12 d-flex justify-content-between">
                        <div className="elm-socialicons m-auto">
                            <ul className="elm-social-icons sc--colored sh--rounded clearfix">
                                <li>
                                    <a href="https://api.whatsapp.com/send?phone=+21628642884&amp;text=Bonjour%2C%20j%27aimerais%20en%20savoir%20plus%20sur%20EM%20Fertitech" className="elm-sc-icon fab fa-whatsapp bg-icon" target="_blank" rel="noopener noreferrer" title="Whatsapp"></a>
                                </li>
                                <li>
                                    <a href="https://www.facebook.com/profile.php?id=61564874696176" className="elm-sc-icon fab fa-facebook-f bg-icon" target="_blank" rel="noopener noreferrer" title="Facebook"></a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/emro_japan/" className="elm-sc-icon fab fa-instagram bg-icon" target="_blank" rel="noopener noreferrer" title="Instagram"></a>
                                </li>

                                <li>
                                    <a href="https://www.youtube.com/channel/UC_7veybfIf04vSHvkywl9Uw" className="elm-sc-icon fab fa-youtube bg-icon" target="_blank" rel="noopener noreferrer" title="Youtube"></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>


            </div>
        </footer>
    );
}

export default Footer;