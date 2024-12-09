import React from 'react';
import img_1 from "../../assets/images/rev_slider_assets/exp_bg4.jpg"
import img_2 from "../../assets/images/agro/aplicacion-agro.jpg"
import img_3 from "../../assets/images/rev_slider_assets/exp_bg5.jpg"
import img_4 from "../../assets/images/rev_slider_assets/exp_bg2-animal-2.jpg"
import img_5 from "../../assets/images/rev_slider_assets/exp_bg3.jpg"

const Uses = () => {
    const panels = [
        // {
        //     title: "SALUD Y BIENESTAR",
        //     text: "Productos que ayudan a mejorar la salud y el bienestar de las personas.",
        //     link: "bienestar.html",
        //     bgImage: img_1,
        // },
        {
            title: "AGRICULTURE",
            text: "Les sols sont une ressource non renouvelable, et leur conservation est essentielle pour la sécurité alimentaire et un avenir durable.",
            link: "/agriculture",
            bgImage: img_2,
        },
        {
            title: "ENVIRONNEMENT",
            text: "Nous rétablissons les conditions d'origine de l'écosystème et corrigeons les impacts environnementaux.",
            link: "/environnement",
            bgImage: img_3,
            overlayColor: "rgba(0,23,66,0.35)",
        },
        {
            title: "PRODUCTION ANIMALE",
            text: "Alors qu'un tiers de nos aliments est gaspillé… jusqu'à la moitié de nos déchets peut être compostée pour nourrir le sol.",
            link: "/elevage",
            bgImage: img_4,
        },
        {
            title: "AQUACULTURE",
            text: "Nous renforçons la production de poissons, mollusques et algues en eau douce ou salée.",
            link: "/aquaculture",
            bgImage: img_5,
        },
    ];

    return (
        <>
            <section id="aplicaciones" className="hg_section--relative pt-80 pb-0">
                <div className="kl-bg-source">
                    {/* Shadow top */}
                    <div
                        className="kl-bg-source__bgimage"
                        style={{
                            backgroundImage: 'url(images/bg-shadow.png)',
                            backgroundRepeat: 'no-repeat',
                            backgroundAttachment: 'scroll',
                            backgroundPosition: 'center top',
                            backgroundSize: 'auto'
                        }}
                    >
                    </div>
                    {/* / Shadow top */}
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-12">
                            {/* Title element */}
                            <div className="kl-title-block clearfix text-left tbk-symbol-- tbk-icon-pos--after-title">
                                {/* Title */}
                                <h3 className="tbk__title kl-font-alt fs-xl fw-bold">
                                    UTILISATIONS ET APPLICATIONS
                                </h3>
                                {/* / Title */}

                                {/* Sub-title */}
                                <h4 className="tbk__subtitle fw-thin">
                                    « …Si l'EM® devient une partie naturelle de notre quotidien, tout comme l'air et l'eau, autrement dit, si nous adoptons un mode de vie basé sur l'utilisation de l'EM® dans tous les aspects de la vie, alors, inévitablement, nous laisserons une planète propre à nos enfants et petits-enfants… »
                                    — Dr. Teruo Higa
                                </h4>
                                {/* / Sub-title */}
                            </div>
                            {/* / Title element */}
                        </div>
                    </div>
                </div>
            </section>
            <div className="kl-slideshow kl-slideshow-css3panels">
                <div className="fake-loading loading-1s"></div>
                <div className="css3panels-container css3panels--resize cssp-capt-animated cssp-capt-fadeout" data-panels="5">
                    {panels.map((panel, index) => (
                        <div key={index} className={`css3panel css3panel--${index + 1} cp-theme--light`}>
                            <div className="css3panel-inner" style={{ height: '700px' }}>
                                <div className="css3panel-mainimage-wrapper" style={{ height: '700px' }}>
                                    <div
                                        className="css3panel-mainimage"
                                        style={{ backgroundImage: `url(${panel.bgImage})` }}
                                    >
                                        <div
                                            className={`css3panel-mainimage css3panel-mainimage-effect anim--grayscale`}
                                            style={{ backgroundImage: `url(${panel.bgImage})` }}
                                        ></div>
                                        {panel.overlayColor && (
                                            <div className="css3p-overlay css3p--overlay-color" style={{ background: panel.overlayColor }}></div>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="css3panel-caption">
                                <a href={panel.link} target="_self" title={panel.title}>
                                    <h3 className="css3panel-title ff-alternative title-size-normal">{panel.title}</h3>
                                </a>
                                <div className="css3panel-text">{panel.text}</div>
                                <div className="css3panel-btn-area">
                                    <a href={panel.link} className="btn btn-fullcolor btn-skewed" target="_self" title="SABER MÁS">
                                        SAVOIR PLUS
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="clearfix"></div>
                <div className="kl-bottommask kl-bottommask--shadow_ud"></div>
            </div>
        </>
    );
};

export default Uses;
