import React from 'react';

const ContactForm = () => {

    return (
        <section className="hg_section--relative p-0 marginTopClass">
                {/* Video section full width with icons and text */}
                <div className="container-fluid contacto">
                    {/* Custom min height: 500px (.min-500) */}
                    <div className="row gutter-0 min-560">
                        <div className="col-xs-12 col-md-6 bg-green-dark left-side wow fadeInLeft" data-wow-offset="200" style={{ visibility: "visible", animationName: "fadeInLeft" }}>

                            {/*/ col-xs-12 col-sm-6 col-md-6 col-lg-3 align-self-center justify-content-center text-center-xs */}

                            <div className="item col-sm-12 col-md-12">
                                {/* Title with custom alternative font, size, color and bottom margin */}
                                <h3 className="kl-iconbox__title kl-font-alt fs-xxl white mb-20">
                                Informations de contact
                                </h3>

                                {/* Description */}
                                <p className="kl-iconbox__desc white pb-40">
                                Si vous avez besoin de plus d'informations, n'hésitez pas à nous contacter, nous serons heureux de vous aider de toutes les manières possibles.
                                </p>

                                <div className="company-contacts">
                                    <address>
                                        <p>
                                            <i className="fas fa-map-marker-alt"></i>
                                            Mornag - Ben Arous, En face du salon de thé Havana
                                        </p>

                                        <p>
                                            <i className="fas fa-phone-volume"></i>
                                            (+216) 28 64 28 84
                                        </p>

                                        <p>
                                            <i className="fas fa-at"></i>
                                            <a href="mailto:administracion@emfertitech.com">administracion@emfertitech.com</a>
                                        </p>

                                        <ul className="social-icons-info">
                                            <li>
                                                <a href="https://api.whatsapp.com/send?phone=+21628642884&amp;text=Bonjour%2C%20j%27aimerais%20en%20savoir%20plus%20sur%20EM%20Fertitech" target="noopener noreferrer" title="Whatsapp">
                                                    <i className="fab fa-whatsapp"></i>
                                                </a>
                                            </li>
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
                                    </address>
                                </div>
                            </div>
                            {/*/ col-xs-12 col-sm-6 col-md-6 col-lg-9 align-self-center text-right text-center-xs */}
                        </div>

                        <div className="col-xs-12 col-md-6 bg-black right-side wow fadeInRight" data-wow-offset="200" style={{ visibility: "visible", animationName: "fadeInRight" }}>

                            {/*/ col-xs-12 col-sm-6 col-md-6 col-lg-3 align-self-center justify-content-center text-center-xs */}

                            <div className="item col-sm-12 col-md-12">
                                {/* Title with custom alternative font, size, color and bottom margin */}
                                <h3 className="kl-iconbox__title kl-font-alt fs-xxl white mb-20">
                                Restons en contact
                                </h3>

                                {/* Description */}
                                <p className="kl-iconbox__desc white pb-40">
                                Nous répondrons dans les plus brefs délais.
                                </p>

                                <div className="contactForm">
                                    <form action="#" method="post" className="f1 contact_form row" encType="multipart/form-data" data-h5-instanceid="0" noValidate>
                                        <div className="cf_response"></div>
                                        {/* Response wrapper */}
                                        <div className="cf_response"></div>

                                        <div className="col-sm-12">
                                            <label className="input-wrp">
                                                <i className="far fa-user"></i>
                                                <input className="textfield" type="text" name="name" id="cf_name" placeholder="Veuillez écrire votre nom" defaultValue="" tabIndex="1" maxLength="35" required />
                                            </label>
                                        </div>

                                        <div className="col-sm-12">
                                            <label className="input-wrp">
                                                <i className="fas fa-at"></i>
                                                <input className="textfield" type="text" name="email" id="cf_email" placeholder="Veuillez écrire votre e-mail" defaultValue="" tabIndex="1" maxLength="35" required pattern="((([a-zA-Z]|\d|[!#\$%&amp;'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-zA-Z]|\d|[!#\$%&amp;'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?" />
                                            </label>
                                        </div>

                                        <div className="col-sm-12">
                                            <label className="input-wrp">
                                                <i className="far fa-comment"></i>
                                                <textarea className="textfield" name="message" id="cf_message" cols="30" rows="10" placeholder="Votre commentaire" tabIndex="4" required></textarea>
                                            </label>
                                        </div>

                                        <div className="col-sm-12">
                                            {/* Contact form send button */}
                                            <button className="btn-element btn btn-lined lined-white btn-fullwidth" type="submit">
                                            ENVOYER UN MESSAGE
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            {/*/ col-xs-12 col-sm-6 col-md-6 col-lg-9 align-self-center text-left text-center-xs */}
                        </div>
                    </div>
                    {/*/ row gutter-0 min-500 */}
                </div>
                {/*/ Video section full width with icons and text */}
            </section>
    )
}
export default ContactForm;