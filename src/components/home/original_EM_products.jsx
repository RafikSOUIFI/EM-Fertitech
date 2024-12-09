import React, { useState } from 'react';
import seguridad_producto from "../../assets/images/productos/em_123.png";

const OriginalProduct = () => {
    const [activePoint, setActivePoint] = useState(null);

    const handleMouseEnter = (targetClass) => {
        setActivePoint(targetClass);
    };

    const handleMouseLeave = () => {
        setActivePoint(null);
    };

    return (
        <section className="hg_section--relative">
            <div className="kl-bg-source">
                <div
                    className="kl-bg-source__bgimage"
                    style={{
                        backgroundImage: "url(images/stage-bg.jpg)",
                        backgroundRepeat: "no-repeat",
                        backgroundAttachment: "scroll",
                        backgroundPosition: "right top",
                        backgroundSize: "cover"
                    }}
                ></div>
                <div
                    className="kl-bg-source__bgimage"
                    style={{
                        backgroundImage: "url(images/bg-shadow.png)",
                        backgroundRepeat: "no-repeat",
                        backgroundAttachment: "scroll",
                        backgroundPosition: "center top",
                        backgroundSize: "auto"
                    }}
                ></div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-5 align-self-center">
                        <div className="stage-ibx d-flex justify-content-center">
                            <div className="stage-ibx__stage">
                                <img
                                    src={seguridad_producto}
                                    className="stage-ibx__stage-img img-fluid"
                                    alt="Dispositivos de Seguridad de Productos Bieom"
                                    title="Dispositivos de Seguridad de Productos Bieom"
                                />
                                <span
                                    style={{ top: '4px', right: '121px', opacity: 1 }}
                                    className={`stage-ibx__point kl-ib-point-1 ${activePoint === 'kl-ib-point-1' ? 'kl-ib-point-active' : ''}`}
                                    data-title="Logo de la Technologie EM® sur le couvercle."
                                ></span>
                                <span
                                    style={{ top: '0px', right: '50px', opacity: 1 }}
                                    className={`stage-ibx__point kl-ib-point-2 ${activePoint === 'kl-ib-point-2' ? 'kl-ib-point-active' : ''}`}
                                    data-title="Scellé de sécurité intact."
                                ></span>
                                <span
                                    style={{ top: '27px', right: '85px', opacity: 1 }}
                                    className={`stage-ibx__point kl-ib-point-3 ${activePoint === 'kl-ib-point-3' ? 'kl-ib-point-active' : ''}`}
                                    data-title="Couverture en plastique thermorétractable."
                                ></span>
                                <span
                                    style={{ top: '48px', left: '56px', opacity: 1 }}
                                    className={`stage-ibx__point kl-ib-point-4 ${activePoint === 'kl-ib-point-4' ? 'kl-ib-point-active' : ''}`}
                                    data-title="Valve de sécurité interne (pour les contenants de 20 L)."
                                ></span>
                                <span
                                    style={{ top: '241px', left: '78px', opacity: 1 }}
                                    className={`stage-ibx__point kl-ib-point-5 ${activePoint === 'kl-ib-point-5' ? 'kl-ib-point-active' : ''}`}
                                    data-title="Étiquette métallisée."
                                ></span>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-6">
                        <div className="kl-title-block clearfix text-left tbk-symbol-- tbk-icon-pos--after-title">
                            <h3 className="tbk__title kl-font-alt fs-xl fw-bold">
                            Reconnaître les produits originaux de la technologie EM®
                            </h3>
                            <p>Vérifiez les éléments suivants:</p>
                        </div>
                        <div
                            className="kl-iconbox kl-iconbox--fleft text-left"
                            data-target-element=".kl-ib-point-1"
                            onMouseEnter={() => handleMouseEnter('kl-ib-point-1')}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className="kl-iconbox__inner">
                                <div className="kl-iconbox__icon-wrapper">
                                    <i className="kl-iconbox__icon fas fa-shield-alt"></i>
                                </div>
                                <div className="kl-iconbox__content-wrapper">
                                    <div className="kl-iconbox__el-wrapper kl-iconbox__desc-wrapper">
                                        <p className="kl-iconbox__desc">
                                        Logo de la Technologie EM® sur le couvercle.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="kl-iconbox kl-iconbox--fleft text-left"
                            data-target-element=".kl-ib-point-2"
                            onMouseEnter={() => handleMouseEnter('kl-ib-point-2')}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className="kl-iconbox__inner">
                                <div className="kl-iconbox__icon-wrapper">
                                    <i className="kl-iconbox__icon fas fa-shield-alt"></i>
                                </div>
                                <div className="kl-iconbox__content-wrapper">
                                    <div className="kl-iconbox__el-wrapper kl-iconbox__desc-wrapper">
                                        <p className="kl-iconbox__desc">
                                            Scellé de sécurité intact.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="kl-iconbox kl-iconbox--fleft text-left"
                            data-target-element=".kl-ib-point-3"
                            onMouseEnter={() => handleMouseEnter('kl-ib-point-3')}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className="kl-iconbox__inner">
                                <div className="kl-iconbox__icon-wrapper">
                                    <i className="kl-iconbox__icon fas fa-shield-alt"></i>
                                </div>
                                <div className="kl-iconbox__content-wrapper">
                                    <div className="kl-iconbox__el-wrapper kl-iconbox__desc-wrapper">
                                        <p className="kl-iconbox__desc">
                                            Couverture en plastique thermorétractable.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="kl-iconbox kl-iconbox--fleft text-left"
                            data-target-element=".kl-ib-point-4"
                            onMouseEnter={() => handleMouseEnter('kl-ib-point-4')}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className="kl-iconbox__inner">
                                <div className="kl-iconbox__icon-wrapper">
                                    <i className="kl-iconbox__icon fas fa-shield-alt"></i>
                                </div>
                                <div className="kl-iconbox__content-wrapper">
                                    <div className="kl-iconbox__el-wrapper kl-iconbox__desc-wrapper">
                                        <p className="kl-iconbox__desc">
                                            Valve de sécurité interne (pour les contenants de 20 L).
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="kl-iconbox kl-iconbox--fleft text-left"
                            data-target-element=".kl-ib-point-5"
                            onMouseEnter={() => handleMouseEnter('kl-ib-point-5')}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className="kl-iconbox__inner">
                                <div className="kl-iconbox__icon-wrapper">
                                    <i className="kl-iconbox__icon fas fa-shield-alt"></i>
                                </div>
                                <div className="kl-iconbox__content-wrapper">
                                    <div className="kl-iconbox__el-wrapper kl-iconbox__desc-wrapper">
                                        <p className="kl-iconbox__desc">
                                            Étiquette métallisée.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="clearfix"></div>
            <div className="kl-bottommask kl-bottommask--shadow_ud"></div>
        </section>
    );
};

export default OriginalProduct;