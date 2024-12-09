import React, { useEffect } from 'react';

const NearestRepresentative = () => {
    useEffect(() => {
        // Load the Facebook SDK script
        if (!window.FB) {
            (function(d, s, id) {
                const fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) return;
                const js = d.createElement(s); 
                js.id = id;
                js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v10.0";
                fjs.parentNode.insertBefore(js, fjs);
            })(document, 'script', 'facebook-jssdk');
        } else {
            // If SDK already loaded, re-render
            window.FB.XFBML.parse();
        }
    }, []);
    return (
        <section className="hg_section--relative">
            {/* Background */}
            <div className="kl-bg-source">
                {/* Background image */}
                <div
                    className="kl-bg-source__bgimage"
                    style={{
                        backgroundImage: 'url(images/rev_slider_assets/exp_bg10.jpg)',
                        backgroundRepeat: 'no-repeat',
                        backgroundAttachment: 'scroll',
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                    }}
                ></div>

                {/* Background overlay */}
                <div
                    className="kl-bg-source__overlay"
                    style={{ backgroundColor: 'rgba(53,53,53,0.5)' }}
                ></div>
            </div>

            {/* Content Container */}
            <div className="container">
                <div className="row">
                    {/* Left Column */}
                    <div className="col-sm-12 col-md-12 col-lg-7">
                        <div className="infobox4">
                            <div className="row">
                                <div className="ib-content infobox3--light">
                                    <h3 className="ib-content__title m_title">
                                        <span className="fw-thin">
                                        Trouvez notre{' '}
                                            <span className="fw-semibold">
                                            représentant
                                            </span>
                                            , le plus proche !
                                        </span>
                                    </h3>

                                    {/* Button */}
                                    <div className="ib-button ib-button-1">
                                        <a
                                            href="contact"
                                            target="_self"
                                            className="ib-button-1 btn btn-lined"
                                        >
                                            VOIR LA CARTE
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column with Facebook Page Embed */}
                    <div className="col-sm-12 col-md-12 col-lg-5">
                        <div id="fb-root"></div>
                        <div
                            className="fb-page"
                            data-href="https://www.facebook.com/emmicroorganismoseficaces.peru"
                            data-tabs="timeline"
                            data-width="500"
                            data-small-header="true"
                            data-adapt-container-width="true"
                            data-hide-cover="true"
                            data-show-facepile="true"
                        >
                            <blockquote
                                cite="https://www.facebook.com/emmicroorganismoseficaces.peru"
                                className="fb-xfbml-parse-ignore"
                            >
                                <a href="https://www.facebook.com/emmicroorganismoseficaces.peru">
                                    EM-Microorganismos Eficaces Perú
                                </a>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NearestRepresentative;
