import React from 'react';

const Livestock = () => {

    return (
        <>
            <div id="page_header" className="page-subheader site-subheader-cst ">
                <div className="bgback"></div>

                {/* Background */}
                <div className="kl-bg-source">
                    {/* Gradient overlay */}
                    <div className="kl-bg-source__overlay" style={{ background: 'rgba(0,94,176,1)', background: '-moz-linear-gradient(left, rgba(0,94,176,1) 0%, rgba(0,202,255,1) 100%)', background: '-webkit-gradient(linear, left top, right top, color-stop(0%,rgba(0,94,176,1)), color-stop(100%,rgba(0,202,255,1)))', background: '-webkit-linear-gradient(left, rgba(0,94,176,1) 0%,rgba(0,202,255,1) 100%)', background: '-o-linear-gradient(left, rgba(0,94,176,1) 0%,rgba(0,202,255,1) 100%)', background: '-ms-linear-gradient(left, rgba(0,94,176,1) 0%,rgba(0,202,255,1) 100%)', background: 'linear-gradient(to right, rgba(0,94,176,1) 0%,rgba(0,202,255,1) 100%)' }}>
                    </div>
                    {/*/ Gradient overlay */}
                </div>
                {/*/ Background */}

                {/* Animated Sparkles */}
                <div className="th-sparkles"></div>
                {/*/ Animated Sparkles */}

                <div className="kl-bg-source">
                    {/* Background image */}
                    <div className="kl-bg-source__bgimage" style={{ backgroundImage: 'url(images/rev_slider_assets/exp_bg9.jpg)', backgroundRepeat: 'no-repeat', backgroundAttachment: 'scroll', backgroundPositionX: 'center', backgroundPositionY: 'center', backgroundSize: 'cover' }}></div>
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
                                    <h4 className="subheader-subtitle">Production animale</h4>
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
                    <svg width="5000px" height="57px" className="svgmask " viewBox="0 0 5000 57" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlnsXlink="https://www.w3.org/1999/xlink">
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
                            {/* Portfolio carousel content */}
                            <div className="hg-portfolio-carousel">
                                {/* Portfolio carousel item */}
                                <div className="portfolio-item">
                                    <div className="row">
                                        <div className="col-sm-12 col-md-12 col-lg-6 mb-md-30 wow fadeInLeft" data-wow-offset="100" style={{ visibility: 'visible', animationName: 'fadeInLeft' }}>
                                            <div className="ptcontent">

                                                <div className="symbol-line">
                                                    <img src="images/iconos/animal-icon.png" alt="" />
                                                </div>
                                                {/* Title */}
                                                <h3 className="title pt-content-title text-center">
                                                    <span className="name">Production animale</span>
                                                </h3>
                                                {/*/ Title */}

                                                {/* Item description */}
                                                <div className="pt-cat-desc">
                                                    <p>
                                                    La Technologie EM® est un excellent outil pour les unités de production animale en raison de ses effets en tant que probiotique, antigène et nettoyant naturel. La Technologie EM® est utilisée efficacement dans les systèmes de production bovine, avicole, porcine, ovine et dans l'élevage de cobayes.
                                                    </p>
                                                    <p>
                                                    La Technologie EM® peut être utilisée non seulement dans les installations, mais aussi dans le traitement des effluents et des déchets, dans l'eau offerte aux animaux et dans l'alimentation. Les meilleurs résultats sont obtenus en combinant les différentes applications.
                                                    </p>
                                                </div>
                                                {/*/ Item description */}

                                            </div>
                                            {/* end item content */}
                                        </div>
                                        {/*/ col-sm-12 col-md-12 col-lg-6 mb-md-30 */}

                                        <div className="col-sm-12 col-md-12 col-lg-6 wow fadeIn" data-wow-offset="100" style={{ visibility: 'visible', animationName: 'fadeIn' }}>
                                            {/* Portfolio Carousel element */}
                                            <div className="ptcarousel ptcarousel--frames-modern">
                                                <div className="hg_general__carousel-wrapper">
                                                    {/* Carousel */}
                                                    <div className="hg_general__carousel cfs--default js-slick" data-slick='{
                                            "infinite":true,
                                            "slidesToShow":1,
                                            "slidesToScroll":1,
                                            "autoplay":false,
                                            "autoplaySpeed":9000,
                                            "easing":"easeOutExpo",
                                            "fade":true,
                                            "arrows":true,
                                            "dots":false
                                        }'>
                                                        {/* Slide 1 */}
                                                        <div className="item kl-has-overlay cfs--item">
                                                            {/* Intro image */}
                                                            <div className="img-intro">
                                                                {/* Image */}
                                                                <img src="images/animal/apli-ani-car-1.jpg" className="img-responsive" alt="" title="" />
                                                                {/*/ Image */}
                                                            </div>
                                                            {/*/ Intro image */}
                                                        </div>
                                                        {/*/ Slide 1 */}

                                                        {/* Slide 2 */}
                                                        <div className="item kl-has-overlay cfs--item">
                                                            {/* Intro image */}
                                                            <div className="img-intro">
                                                                {/* Image */}
                                                                <img src="images/animal/apli-ani-car-2.jpg" className="img-responsive" alt="" title="" />
                                                                {/*/ Image */}
                                                            </div>
                                                            {/*/ Intro image */}
                                                        </div>
                                                        {/*/ Slide 2 */}

                                                        {/* Slide 3 */}
                                                        <div className="item kl-has-overlay cfs--item">
                                                            {/* Intro image */}
                                                            <div className="img-intro">
                                                                {/* Image */}
                                                                <img src="images/animal/apli-ani-car-3.jpg" className="img-responsive" alt="" title="" />
                                                                {/*/ Image */}
                                                            </div>
                                                            {/*/ Intro image */}
                                                        </div>
                                                        {/*/ Slide 3 */}
                                                    </div>
                                                    {/*/ .hg_general__carousel */}
                                                </div>
                                                {/*/ hg_general__carousel-wrapper */}
                                            </div>
                                            {/* end .ptcarousel .ptcarousel--frames-modern */}
                                        </div>
                                        {/*/ col-sm-12 col-md-12 col-lg-6 */}
                                    </div>
                                    {/*/ row */}
                                </div>
                                {/*/ Portfolio carousel item */}
                            </div>
                            {/* end portfolio-carousel */}

                        </div>
                        {/*/ col-sm-12 col-md-12 */}
                    </div>
                    {/*/ row */}
                </div>
                {/*/ container */}
            </section>
            <section className="hg_section p-0">
                <div className="container-fluid">
                    <div className="row gutter pl-30 pr-30">
                        <div className="col-sm-12 col-md-12 wow fadeIn" data-wow-offset="100" style={{ visibility: 'visible', animationName: 'fadeIn', marginTop: '30px' }}>
                            <div className="media-container custom-oh min-300">
                                <div className="kl-bg-source">
                                    <div className="kl-bg-source__bgimage vh-100" style={{ backgroundImage: 'url(images/animal/aplicacion-animal.jpg)', backgroundRepeat: 'no-repeat', backgroundAttachment: 'scroll', backgroundPositionX: 'center', backgroundPositionY: 'center', backgroundSize: 'cover' }}>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-12 text-center pt-40 pb-0">
                            <div className="tbk__symbol">
                                <span></span>
                            </div>
                            <h2 className="tbk__title kl-font-alt fw-extrabold mb-30">
                                <span className="fw-semibold">Installations d'hébergement.</span>
                            </h2>
                            <h5>
                                <span>L'objectif d'appliquer la Technologie EM® dans les installations d'hébergement des animaux est de réduire l'action des micro-organismes nuisibles responsables de la putréfaction. Parmi les effets de la Technologie EM®, on peut citer :</span>
                            </h5>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-5 offset-lg-1 align-self-center pt-0 pb-80">
                            <div className="clearfix tbk--text-dark text-left tbk-symbol--line tbk--colored">
                                <ul className="features left">
                                    <li className="wow fadeInLeft" data-wow-offset="100" style={{ visibility: 'visible', animationName: 'fadeInLeft' }}>
                                        <p>
                                        Elle réduit les mauvaises odeurs et les populations d'insectes nuisibles, grâce au processus de fermentation des excréments sur place.
                                        </p>
                                    </li>
                                    <li className="wow fadeInLeft" data-wow-offset="140" style={{ visibility: 'visible', animationName: 'fadeInLeft' }}>
                                        <p>
                                        Elle réduit le besoin et l'utilisation de désinfectants, ainsi que les coûts de production et d'entretien.
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-5 align-self-center pt-0 pb-80">
                            <div className="clearfix tbk--text-dark text-left tbk-symbol--line tbk--colored">
                                <ul className="features left">
                                    <li className="wow fadeInLeft" data-wow-offset="140" style={{ visibility: 'visible', animationName: 'fadeInLeft' }}>
                                        <p>
                                        Dans l'entretien des installations, elle réduit l'oxydation et la formation de rouille.
                                        </p>
                                    </li>
                                    <li className="wow fadeInLeft" data-wow-offset="120" style={{ visibility: 'visible', animationName: 'fadeInLeft' }}>
                                        <p>
                                        Elle diminue la consommation d'eau pour le lavage en mettant en place la gestion des litières sèches pour collecter les excréments et l'urine, réduisant ainsi la fréquence d'utilisation de l'eau.
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="row gutter pl-30 pr-30">
                        <div className="col-sm-12 col-md-12 col-lg-4 offset-lg-1 align-self-center pt-80 pb-80">
                            <div className="tbk__symbol">
                                <span></span>
                            </div>
                            <h2 className="tbk__title kl-font-alt fw-extrabold mb-30">
                                <span className="fw-semibold">Santé et bien-être animal</span>
                            </h2>
                            <div className="clearfix tbk--text-dark text-left tbk-symbol--line tbk--colored">
                                <ul className="features left">
                                    <li className="wow fadeInLeft" data-wow-offset="100" style={{ visibility: 'visible', animationName: 'fadeInLeft' }}>
                                        <p>
                                        Elle réduit l'incidence des maladies et du stress chez l'animal en améliorant les lignes de défense cellulaires grâce aux antioxydants générés par la Technologie EM®, ce qui entraîne une diminution du besoin en médicaments (vitamines, antibiotiques et agents hormonaux).
                                        </p>
                                    </li>
                                    <li className="wow fadeInLeft" data-wow-offset="120" style={{ visibility: 'visible', animationName: 'fadeInLeft' }}>
                                        <p>
                                        Elle augmente la conversion alimentaire et le gain de poids en enrichissant les micro-organismes du rumen.
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-6 offset-lg-1 wow fadeIn" data-wow-offset="100" style={{ visibility: 'visible', animationName: 'fadeIn' }}>
                            <div className="media-container custom-oh min-500">
                                <div className="kl-bg-source">
                                    <div className="kl-bg-source__bgimage vh-100" style={{ backgroundImage: 'url(images/animal/aplicacion-animal-2.jpg)', backgroundRepeat: 'no-repeat', backgroundAttachment: 'scroll', backgroundPositionX: 'center', backgroundPositionY: 'top', backgroundSize: 'cover' }}>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row gutter pl-30 pr-30">
                        <div className="col-sm-12 col-md-12 col-lg-6 wow fadeIn" data-wow-offset="100" style={{ visibility: 'visible', animationName: 'fadeIn' }}>
                            <div className="media-container custom-oh min-400">
                                <div className="kl-bg-source">
                                    <div className="kl-bg-source__bgimage vh-100" style={{ backgroundImage: 'url(images/animal/aplicacion-animal-3.jpg)', backgroundRepeat: 'no-repeat', backgroundAttachment: 'scroll', backgroundPositionX: 'center', backgroundPositionY: 'top', backgroundSize: 'cover' }}>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-4 offset-lg-1 align-self-center pt-80 pb-80">
                            <div className="tbk__symbol">
                                <span></span>
                            </div>
                            <h2 className="tbk__title kl-font-alt fw-extrabold mb-30">
                                <span className="fw-semibold">Gestion du fumier</span>
                            </h2>
                            <div className="clearfix tbk--text-dark text-left tbk-symbol--line tbk--colored">
                                <ul className="features left">
                                    <li className="wow fadeInLeft" data-wow-offset="100" style={{ visibility: 'visible', animationName: 'fadeInLeft' }}>
                                        <p>
                                        La Technologie EM® peut être utilisée pour la gestion et le traitement du fumier directement dans l'enclos, transformant les déchets en un engrais de haute qualité, enrichi en micro-organismes et substances bénéfiques.
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
export default Livestock;