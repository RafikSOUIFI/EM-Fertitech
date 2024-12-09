import React, { useEffect } from 'react';
import Slideshow from './slideshow';
import Welcome from './welcome';
import Uses from './uses';
import Products from './products';
import OriginalProduct from './original_EM_products';
import NearestRepresentative from './nearest_representative';

const Home = ({ isScrolled, setIsScrolled }) => {
    useEffect(() => {
        // Create the script element
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.innerHTML = `
            var revapi12,
            tpj = jQuery;
            tpj(document).ready(function() {
                if (tpj("#rev_slider_12_1").revolution == undefined) {
                    revslider_showDoubleJqueryError("#rev_slider_12_1");
                } else {
                    revapi12 = tpj("#rev_slider_12_1").show().revolution({
                        sliderType: "standard",
                        sliderLayout: "fullscreen",
                        dottedOverlay: "none",
                        delay: 12000,
                        particles: {
                            startSlide: "first",
                            endSlide: "last",
                            zIndex: "1",
                            particles: {
                                number: {
                                    value: 100
                                },
                                color: {
                                    value: "#ffffff"
                                },
                                shape: {
                                    type: "circle",
                                    stroke: {
                                        width: 0,
                                        color: "#ffffff",
                                        opacity: 1
                                    },
                                    image: {
                                        src: ""
                                    }
                                },
                                opacity: {
                                    value: 0.75,
                                    random: true,
                                    min: 0.25,
                                    anim: {
                                        enable: false,
                                        speed: 3,
                                        opacity_min: 0,
                                        sync: false
                                    }
                                },
                                size: {
                                    value: 2,
                                    random: true,
                                    min: 0.5,
                                    anim: {
                                        enable: false,
                                        speed: 40,
                                        size_min: 1,
                                        sync: false
                                    }
                                },
                                line_linked: {
                                    enable: false,
                                    distance: 150,
                                    color: "#ffffff",
                                    opacity: 0.4,
                                    width: 1
                                },
                                move: {
                                    enable: true,
                                    speed: 1,
                                    direction: "top",
                                    random: true,
                                    min_speed: 3,
                                    straight: false,
                                    out_mode: "out"
                                }
                            },
                            interactivity: {
                                events: {
                                    onhover: {
                                        enable: false,
                                        mode: "repulse"
                                    },
                                    onclick: {
                                        enable: false,
                                        mode: "repulse"
                                    }
                                },
                                modes: {
                                    grab: {
                                        distance: 400,
                                        line_linked: {
                                            opacity: 0.5
                                        }
                                    },
                                    bubble: {
                                        distance: 400,
                                        size: 40,
                                        opacity: 0.4
                                    },
                                    repulse: {
                                        distance: 200
                                    }
                                }
                            }
                        },
                        navigation: {
                            keyboardNavigation: "off",
                            keyboard_direction: "horizontal",
                            mouseScrollNavigation: "off",
                            mouseScrollReverse: "default",
                            onHoverStop: "off",
                            arrows: {
                                style: "uranus",
                                enable: true,
                                hide_onmobile: false,
                                hide_onleave: false,
                                tmp: '',
                                left: {
                                    h_align: "right",
                                    v_align: "bottom",
                                    h_offset: 60,
                                    v_offset: 10
                                },
                                right: {
                                    h_align: "right",
                                    v_align: "bottom",
                                    h_offset: 10,
                                    v_offset: 10
                                }
                            }
                        },
                        responsiveLevels: [1240, 1024, 778, 480],
                        visibilityLevels: [1240, 1024, 778, 480],
                        gridwidth: [1240, 1024, 778, 480],
                        gridheight: [868, 768, 960, 720],
                        lazyType: "smart",
                        parallax: {
                            type: "scroll",
                            origo: "slidercenter",
                            speed: 400,
                            speedbg: 1500,
                            speedls: 1000,
                            levels: [5, 10, 15, 20, 25, 30, 35, 40, 60, 46, -10, -15, -20, -25, -30, 55],
                        },
                        shadow: 0,
                        spinner: "off",
                        stopLoop: "off",
                        stopAfterLoops: -1,
                        stopAtSlide: -1,
                        shuffle: "off",
                        autoHeight: "off",
                        fullScreenAutoWidth: "on",
                        fullScreenAlignForce: "off",
                        hideThumbsOnMobile: "off",
                        hideSliderAtLimit: 0,
                        hideCaptionAtLimit: 0,
                        hideAllCaptionAtLilmit: 0,
                        debugMode: false,
                        fallbacks: {
                            simplifyAll: "off",
                            nextSlideOnWindowFocus: "off",
                            disableFocusListener: false,
                        }
                    });
                }
                RsParticlesAddOn(revapi12);
            }); /*ready*/
        `;

        // Append the script to the body
        document.body.appendChild(script);

        // Cleanup function to remove the script when the component unmounts
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <>
            <Slideshow />
            <Welcome />
            <Uses />
            <Products />
            <OriginalProduct />
            <NearestRepresentative />
            <div className={`bubble-box ads-box ${isScrolled ? 'bb--anim-hide' : 'bb--anim-show'}`}>
                <div className="bb--inner">
                    <a href="" aria-label="Visit EM Products">
                        <img src="images/rev_slider_assets/logo-EM.png" alt="EM Product Logo" className="img-responsive" />
                    </a>
                </div>
                <span className="bb--close">
                    <i className="fas fa-times" aria-hidden="true" onClick={() => setIsScrolled(true)}></i>
                </span>
            </div>
        </>
    )
}
export default Home;