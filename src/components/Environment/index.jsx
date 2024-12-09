import React from 'react';

const Environment = () => {
    return (
        <>
            <div id="page_header" className="page-subheader site-subheader-cst">
                <div className="bgback"></div>

                {/* Background */}
                <div className="kl-bg-source">
                    {/* Gradient overlay */}
                    <div className="kl-bg-source__overlay" style={{
                        background: "rgba(0,94,176,1)",
                        background: "-moz-linear-gradient(left, rgba(0,94,176,1) 0%, rgba(0,202,255,1) 100%)",
                        background: "-webkit-gradient(linear, left top, right top, color-stop(0%,rgba(0,94,176,1)), color-stop(100%,rgba(0,202,255,1)))",
                        background: "-webkit-linear-gradient(left, rgba(0,94,176,1) 0%,rgba(0,202,255,1) 100%)",
                        background: "-o-linear-gradient(left, rgba(0,94,176,1) 0%,rgba(0,202,255,1) 100%)",
                        background: "-ms-linear-gradient(left, rgba(0,94,176,1) 0%,rgba(0,202,255,1) 100%)",
                        background: "linear-gradient(to right, rgba(0,94,176,1) 0%,rgba(0,202,255,1) 100%)"
                    }}>
                    </div>
                    {/*/ Gradient overlay */}
                </div>
                {/*/ Background */}

                {/* Animated Sparkles */}
                <div className="th-sparkles"></div>
                {/*/ Animated Sparkles */}

                <div className="kl-bg-source">
                    {/* Background image */}
                    <div className="kl-bg-source__bgimage" style={{
                        backgroundImage: "url(images/rev_slider_assets/exp_bg-ambientel.jpg)",
                        backgroundRepeat: "no-repeat",
                        backgroundAttachment: "scroll",
                        backgroundPositionX: "center",
                        backgroundPositionY: "center",
                        backgroundSize: "cover"
                    }}></div>
                    {/*/ Background image */}

                    {/* Color overlay */}

                    {/*/ Color overlay */}
                </div>

                {/* Sub-Header content wrapper */}
                <div className="ph-content-wrap d-flex">
                    <div className="container align-self-center">
                        <div className="row">
                            <div className="col-sm-12">
                                {/* Sub-header titles */}
                                <div className="subheader-titles">
                                    <h2 className="subheader-maintitle">Utilisations et applications</h2>
                                    <h4 className="subheader-subtitle">Restauration écologique</h4>
                                </div>
                                {/*/ Sub-header titles */}
                            </div>
                            {/*/ col-sm-12 col-md-6 col-lg-6 */}
                        </div>
                        {/*/ row */}
                    </div>
                    {/*/ .container .align-self-center */}
                </div>
                {/*/ Sub-Header content wrapper .d-flex */}

                {/* Sub-header Bottom mask style 3 */}
                <div className="kl-bottommask kl-bottommask--mask3">
                    <svg width="5000px" height="57px" className="svgmask" viewBox="0 0 5000 57" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlnsXlink="https://www.w3.org/1999/xlink">
                        <defs>
                            <filter x="-50%" y="-50%" width="200%" height="200%" filterUnits="objectBoundingBox" id="filter-mask3">
                                <feOffset dx="0" dy="3" in="SourceAlpha" result="shadowOffsetInner1"></feOffset>
                                <feGaussianBlur stdDeviation="2" in="shadowOffsetInner1" result="shadowBlurInner1"></feGaussianBlur>
                                <feComposite in="shadowBlurInner1" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowInnerInner1"></feComposite>
                                <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.4 0" in="shadowInnerInner1" type="matrix" result="shadowMatrixInner1"></feColorMatrix>
                                <feMerge>
                                    <feMergeNode in="SourceGraphic"></feMergeNode>
                                    <feMergeNode in="shadowMatrixInner1"></feMergeNode>
                                </feMerge>
                            </filter>
                        </defs>
                        <path d="M9.09383679e-13,57.0005249 L9.09383679e-13,34.0075249 L2418,34.0075249 L2434,34.0075249 C2434,34.0075249 2441.89,33.2585249 2448,31.0245249 C2454.11,28.7905249 2479,11.0005249 2479,11.0005249 L2492,2.00052487 C2492,2.00052487 2495.121,-0.0374751261 2500,0.000524873861 C2505.267,-0.0294751261 2508,2.00052487 2508,2.00052487 L2521,11.0005249 C2521,11.0005249 2545.89,28.7905249 2552,31.0245249 C2558.11,33.2585249 2566,34.0075249 2566,34.0075249 L2582,34.0075249 L5000,34.0075249 L5000,57.0005249 L2500,57.0005249 L1148,57.0005249 L9.09383679e-13,57.0005249 Z" className="bmask-bgfill" filter="url(#filter-mask3)" fill="#fbfbfb"></path>
                    </svg>
                    <i className="fas fa-angle-down"></i>
                </div>
                {/*/ Sub-header Bottom mask style 3 */}
            </div>
            <section className="hg_section pt-80 pb-0">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-12">
                            <div className="hg-portfolio-carousel">
                                <div className="portfolio-item">
                                    <div className="row">
                                        <div className="col-sm-12 col-md-12 col-lg-6 mb-md-30 wow fadeInLeft" data-wow-offset="100" style={{ visibility: "visible", animationName: "fadeInLeft" }}>
                                            <div className="ptcontent">
                                                <div className="symbol-line">
                                                    <img src="images/iconos/ambiente-icon.png" alt="" />
                                                </div>
                                                <h3 className="title pt-content-title text-center">
                                                    <span className="name">Restauration écologique</span>
                                                </h3>
                                                <div className="pt-cat-desc">
                                                    <p>
                                                    Dans le traitement des eaux contaminées, les microorganismes présents dans la Technologie EM® accélèrent la décomposition naturelle des composés organiques grâce à un processus de fermentation, produisant des substances bioactives et éliminant les microorganismes pathogènes qui favorisent la putréfaction et la production de gaz nocifs. Cela permet de réduire la pollution de l'eau et les mauvaises odeurs. L'eau contaminée présente généralement des niveaux élevés de DBO, DQO, pH, E. coli et d'autres paramètres. L'application de la Technologie EM® réduit de manière significative les contaminants, offrant d'excellents résultats à court terme. Parmi les effets notables, on peut citer :
                                                    </p>
                                                </div>
                                                <ul className="features left">
                                                    <li className="wow fadeInLeft" data-wow-offset="100" style={{ visibility: "visible", animationName: "fadeInLeft" }}>
                                                        <p>Contrôle les odeurs désagréables.</p>
                                                    </li>
                                                    <li className="wow fadeInLeft" data-wow-offset="120" style={{ visibility: "visible", animationName: "fadeInLeft" }}>
                                                        <p>Réduit les populations de microorganismes pathogènes.</p>
                                                    </li>
                                                    <li className="wow fadeInLeft" data-wow-offset="140" style={{ visibility: "visible", animationName: "fadeInLeft" }}>
                                                        <p>Stabilise le pH.</p>
                                                    </li>
                                                    <li className="wow fadeInLeft" data-wow-offset="140" style={{ visibility: "visible", animationName: "fadeInLeft" }}>
                                                        <p>Augmente l'oxygène dissous.</p>
                                                    </li>
                                                    <li className="wow fadeInLeft" data-wow-offset="140" style={{ visibility: "visible", animationName: "fadeInLeft" }}>
                                                        <p>Réduit les boues (sédiments).</p>
                                                    </li>
                                                </ul>

                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-12 col-lg-6 wow fadeIn" data-wow-offset="100" style={{ visibility: "visible", animationName: "fadeIn" }}>
                                            <div className="ptcarousel ptcarousel--frames-modern">
                                                <div className="hg_general__carousel-wrapper">
                                                    <div className="hg_general__carousel cfs--default js-slick" data-slick='{
											"infinite": true,
											"slidesToShow": 1,
											"slidesToScroll": 1,
											"autoplay": false,
											"autoplaySpeed": 9000,
											"easing": "easeOutExpo",
											"fade": true,
											"arrows": true,
											"dots": false
										}'>
                                                        <div className="item kl-has-overlay cfs--item">
                                                            <div className="img-intro">
                                                                <img src="images/ambiente/apli-ambi-car-1.jpg" className="img-responsive" alt="" title="" />
                                                            </div>
                                                        </div>
                                                        <div className="item kl-has-overlay cfs--item">
                                                            <div className="img-intro">
                                                                <img src="images/ambiente/apli-ambi-car-2.jpg" className="img-responsive" alt="" title="" />
                                                            </div>
                                                        </div>
                                                        <div className="item kl-has-overlay cfs--item">
                                                            <div className="img-intro">
                                                                <img src="images/ambiente/apli-ambi-car-3.jpg" className="img-responsive" alt="" title="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="hg_section p-0">
                <div className="container-fluid">
                    <div className="row gutter pl-30 pr-30">
                        <div className="col-sm-12 col-md-12 col-lg-6 wow fadeIn" data-wow-offset="100" style={{ visibility: 'visible', animationName: 'fadeIn', marginTop: '30px' }}>
                            <div className="media-container custom-oh min-450">
                                <div className="kl-bg-source">
                                    <div className="kl-bg-source__bgimage vh-100" style={{ backgroundImage: 'url(images/ambiente/aplicacion-ambiente-1.jpg)', backgroundRepeat: 'no-repeat', backgroundAttachment: 'scroll', backgroundPositionX: 'center', backgroundPositionY: 'top', backgroundSize: 'cover' }}>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-4 offset-lg-1 align-self-center pt-80 pb-80">
                            <div className="tbk__symbol ">
                                <span></span>
                            </div>
                            <h2 className="tbk__title kl-font-alt fw-extrabold mb-30">
                                <span className="fw-semibold ">Dans la décontamination des sols.</span>
                            </h2>
                            <h5><span>La Technologie EM® a été utilisée avec succès dans la bioremédiation des sols contaminés. La méthodologie et les doses varient en fonction de la source de contamination et des caractéristiques spécifiques du sol contaminé. La Technologie EM® agit par la fixation, via chélation, des métaux lourds et des résidus agrochimiques, ainsi que par le compostage du sol contaminé, en neutralisant les résidus pétroliers et autres huiles.</span></h5>
                        </div>
                    </div>
                    <div className="row gutter pl-30 pr-30">
                        <div className="col-sm-12 col-md-12 col-lg-4 offset-lg-1 align-self-center pt-80 pb-80">
                            <div className="tbk__symbol ">
                                <span></span>
                            </div>
                            <h2 className="tbk__title kl-font-alt fw-extrabold mb-30">
                                <span className="fw-semibold ">Traitement des bacs collecteurs de graisse et des fosses septiques.</span>
                            </h2>
                            <h5><span>Une méthode simple et peu coûteuse pour traiter les bacs collecteurs de graisse et les fosses septiques est l'utilisation de la Technologie EM®. Les micro-organismes de l'EM® accélèrent le processus de décomposition des graisses et des huiles, nettoyant efficacement les collecteurs, les tuyaux et les réservoirs, évitant ainsi un nettoyage périodique. L'EM® aide également à éliminer les mauvaises odeurs des bacs et des fosses, et réduit la présence d'insectes et de rongeurs.</span></h5>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-6 offset-lg-1 wow fadeIn" data-wow-offset="100" style={{ visibility: 'visible', animationName: 'fadeIn' }}>
                            <div className="media-container custom-oh min-500">
                                <div className="kl-bg-source">
                                    <div className="kl-bg-source__bgimage vh-100" style={{ backgroundImage: 'url(images/ambiente/aplicacion-ambiente-2.jpg)', backgroundRepeat: 'no-repeat', backgroundAttachment: 'scroll', backgroundPositionX: 'center', backgroundPositionY: 'top', backgroundSize: 'cover' }}>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row gutter pl-30 pr-30">
                        <div className="col-sm-12 col-md-12 wow fadeIn" data-wow-offset="100" style={{ visibility: 'visible', animationName: 'fadeIn' }}>
                            <div className="media-container custom-oh min-300">
                                <div className="kl-bg-source">
                                    <div className="kl-bg-source__bgimage vh-100" style={{ backgroundImage: 'url(images/ambiente/aplicacion-relleno-sanitario.jpg)', backgroundRepeat: 'no-repeat', backgroundAttachment: 'scroll', backgroundPositionX: 'center', backgroundPositionY: 'bottom', backgroundSize: 'cover' }}>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-12 text-center align-self-center pt-40 pb-0">
                            <div className="tbk__symbol ">
                                <span></span>
                            </div>
                            <h2 className="tbk__title kl-font-alt fw-extrabold mb-30">
                                <span className="fw-semibold ">Gestion des déchets solides municipaux</span>
                            </h2>
                            <h5><span>Les déchets solides organiques peuvent être recyclés en fertilisants grâce à la Technologie EM®, produisant un compost de haute qualité. Elle peut également être appliquée dans les décharges municipales. En pulvérisant quotidiennement la Technologie EM® sur les déchets avant le processus de couverture et de compactage, il est possible de réduire la poussière, de contrôler les odeurs et d’augmenter le taux de compactage. Les effets notables incluent :</span></h5>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-5 offset-lg-1 align-self-center pt-0 pb-80">
                            <div className="clearfix tbk--text-dark text-left tbk-symbol--line tbk--colored">
                                <ul className="features left">
                                    <li className="wow fadeInLeft" data-wow-offset="100" style={{ visibility: 'visible', animationName: 'fadeInLeft' }}>
                                        <p>
                                        Convertit les déchets en compost organique inoffensif, utile et de très bonne qualité (texture terreuse, léger au toucher et sans odeur).
                                        </p>
                                    </li>
                                    <li className="wow fadeInLeft" data-wow-offset="120" style={{ visibility: 'visible', animationName: 'fadeInLeft' }}>
                                        <p>
                                        Empêche la prolifération des insectes vecteurs, comme les mouches, en éliminant leur milieu de développement.
                                        </p>
                                    </li>
                                    <li className="wow fadeInLeft" data-wow-offset="120" style={{ visibility: 'visible', animationName: 'fadeInLeft' }}>
                                        <p>
                                        Réduit considérablement le temps de compostage des déchets, le passant de plusieurs mois à 4-6 semaines.
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-5 align-self-center pt-0 pb-80">
                            <div className="clearfix tbk--text-dark text-left tbk-symbol--line tbk--colored">
                                <ul className="features left">
                                    <li className="wow fadeInLeft" data-wow-offset="120" style={{ visibility: 'visible', animationName: 'fadeInLeft' }}>
                                        <p>
                                        Augmente l'efficacité de la matière organique comme fertilisant. Pendant le processus de fermentation, des substances et composés tels que des acides aminés, enzymes, vitamines, substances bioactives, hormones et minéraux solubles sont libérés et synthétisés, améliorant ainsi les caractéristiques physiques, chimiques et microbiologiques du sol lorsqu'ils sont incorporés via le compost.
                                        </p>
                                    </li>
                                    <li className="wow fadeInLeft" data-wow-offset="100" style={{ visibility: 'visible', animationName: 'fadeInLeft' }}>
                                        <p>
                                        Élimine rapidement les mauvaises odeurs des déchets.
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Environment;