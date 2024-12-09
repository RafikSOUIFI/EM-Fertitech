import React from 'react';

const Agriculture = () => {
    return (
        <>
            <div id="page_header" className="page-subheader site-subheader-cst">
                <div className="bgback"></div>

                {/* Background */}
                <div className="kl-bg-source">
                    {/* Gradient overlay */}
                    <div
                        className="kl-bg-source__overlay"
                        style={{
                            background: 'rgba(0,94,176,1)',
                            background: 'linear-gradient(to right, rgba(0,94,176,1) 0%, rgba(0,202,255,1) 100%)',
                        }}
                    ></div>
                </div>
                {/*/ Background */}

                {/* Animated Sparkles */}
                <div className="th-sparkles"></div>
                {/*/ Animated Sparkles */}

                <div className="kl-bg-source">
                    {/* Background image */}
                    <div
                        className="kl-bg-source__bgimage"
                        style={{
                            backgroundImage: 'url(images/rev_slider_assets/exp_bg7.jpg)',
                            backgroundRepeat: 'no-repeat',
                            backgroundAttachment: 'scroll',
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                        }}
                    ></div>
                </div>

                {/* Sub-Header content wrapper */}
                <div className="ph-content-wrap d-flex">
                    <div className="container align-self-center">
                        <div className="row">
                            <div className="col-sm-12">
                                {/* Sub-header titles */}
                                <div className="subheader-titles">
                                    <h2 className="subheader-maintitle">Utilisations et applications</h2>
                                    <h4 className="subheader-subtitle">Agriculture durable</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sub-header Bottom mask style 3 */}
                <div className="kl-bottommask kl-bottommask--mask3">
                    <svg
                        width="5000px"
                        height="57px"
                        className="svgmask"
                        viewBox="0 0 5000 57"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <defs>
                            <filter
                                x="-50%"
                                y="-50%"
                                width="200%"
                                height="200%"
                                filterUnits="objectBoundingBox"
                                id="filter-mask3"
                            >
                                <feOffset dx="0" dy="3" in="SourceAlpha" result="shadowOffsetInner1" />
                                <feGaussianBlur stdDeviation="2" in="shadowOffsetInner1" result="shadowBlurInner1" />
                                <feComposite
                                    in="shadowBlurInner1"
                                    in2="SourceAlpha"
                                    operator="arithmetic"
                                    k2="-1"
                                    k3="1"
                                    result="shadowInnerInner1"
                                />
                                <feColorMatrix
                                    values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.4 0"
                                    in="shadowInnerInner1"
                                    type="matrix"
                                    result="shadowMatrixInner1"
                                />
                                <feMerge>
                                    <feMergeNode in="SourceGraphic" />
                                    <feMergeNode in="shadowMatrixInner1" />
                                </feMerge>
                            </filter>
                        </defs>
                        <path
                            d="M9.09383679e-13,57.0005249 L9.09383679e-13,34.0075249 L2418,34.0075249 L2434,34.0075249 C2434,34.0075249 2441.89,33.2585249 2448,31.0245249 C2454.11,28.7905249 2479,11.0005249 2479,11.0005249 L2492,2.00052487 C2492,2.00052487 2495.121,-0.0374751261 2500,0.000524873861 C2505.267,-0.0294751261 2508,2.00052487 2508,2.00052487 L2521,11.0005249 C2521,11.0005249 2545.89,28.7905249 2552,31.0245249 C2558.11,33.2585249 2566,34.0075249 2566,34.0075249 L2582,34.0075249 L5000,34.0075249 L5000,57.0005249 L2500,57.0005249 L1148,57.0005249 L9.09383679e-13,57.0005249 Z"
                            className="bmask-bgfill"
                            filter="url(#filter-mask3)"
                            fill="#fbfbfb"
                        ></path>
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
                                        <div className="col-sm-12 col-md-12 col-lg-6 mb-md-30 wow fadeInLeft" data-wow-offset="100">
                                            <div className="ptcontent">

                                                <div className="symbol-line">
                                                    <img src="images/iconos/agricultura-icon.png" alt="Agricultura" />
                                                </div>
                                                {/* Title */}
                                                <h3 className="title pt-content-title text-center">
                                                    <span className="name">Agriculture durable</span>
                                                </h3>
                                                {/*/ Title */}

                                                {/* Item description */}
                                                <div className="pt-cat-desc">
                                                    <p>
                                                        La <strong>Technologie EM®</strong> en tant qu'inoculant microbien rétablit l'équilibre microbiologique du sol, améliore ses conditions physico-chimiques et augmente la production des cultures. De plus, elle favorise une agriculture et un environnement plus durables grâce à la conservation des ressources naturelles.
                                                    </p>
                                                    <p>
                                                        Parmi les effets de la <strong>Technologie EM®</strong> sur le développement des cultures, on trouve :
                                                    </p>
                                                </div>
                                                {/*/ Item description */}

                                            </div>
                                            {/* end item content */}
                                        </div>
                                        {/*/ col-sm-12 col-md-12 col-lg-6 mb-md-30 */}

                                        <div className="col-sm-12 col-md-12 col-lg-6 wow fadeIn" data-wow-offset="100">
                                            {/* Portfolio Carousel element */}
                                            <div className="ptcarousel ptcarousel--frames-modern">
                                                <div className="hg_general__carousel-wrapper">
                                                    {/* Carousel */}
                                                    <div className="hg_general__carousel cfs--default js-slick" data-slick='{"infinite":true,"slidesToShow":1,"slidesToScroll":1,"autoplay":false,"autoplaySpeed":9000,"easing":"easeOutExpo","fade":true,"arrows":true,"dots":false}'>
                                                        {/* Slide 1 */}
                                                        <div className="item kl-has-overlay cfs--item">
                                                            {/* Intro image */}
                                                            <div className="img-intro">

                                                                {/* Image */}
                                                                <img src="images/agro/apli-agro-car-1.jpg" className="img-responsive" alt="Agricultura Sostenible" title="Agricultura Sostenible" />
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
                                                                <img src="images/agro/apli-agro-car-2.jpg" className="img-responsive" alt="Agricultura Sostenible" title="Agricultura Sostenible" />
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
                                                                <img src="images/agro/apli-agro-car-3.jpg" className="img-responsive" alt="Agricultura Sostenible" title="Agricultura Sostenible" />
                                                                {/*/ Image */}
                                                            </div>
                                                            {/*/ Intro image */}
                                                        </div>
                                                        {/*/ Slide 3 */}
                                                        {/* Slide 4 */}
                                                        <div className="item kl-has-overlay cfs--item">
                                                            {/* Intro image */}
                                                            <div className="img-intro">

                                                                {/* Image */}
                                                                <img src="images/agro/apli-agro-car-4.jpg" className="img-responsive" alt="Agricultura Sostenible" title="Agricultura Sostenible" />
                                                                {/*/ Image */}
                                                            </div>
                                                            {/*/ Intro image */}
                                                        </div>
                                                        {/*/ Slide 4 */}
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
                        <div className="col-sm-12 col-md-12 col-lg-6 wow fadeIn" data-wow-offset="100"
                            style={{ visibility: 'visible', animationName: 'fadeIn' }}>
                            {/* Media container with custom min height = (h-700) */}
                            <div className="media-container custom-oh min-450" style={{ marginTop: '15px' }}>
                                {/* Background */}
                                <div className="kl-bg-source">
                                    {/* Image */}
                                    <div className="kl-bg-source__bgimage vh-100"
                                        style={{ backgroundImage: 'url(images/agro/aplicacion-agro.jpg)', backgroundRepeat: 'no-repeat', backgroundAttachment: 'scroll', backgroundPositionX: 'center', backgroundPositionY: 'top', backgroundSize: 'cover' }}>
                                    </div>
                                    {/*/ Image */}
                                </div>
                                {/*/ Background */}
                            </div>
                            {/*/ media-container */}
                        </div> {/*/ col-sm-12 col-md-12 col-lg-6 offset-lg-1 */}
                        <div className="col-sm-12 col-md-12 col-lg-4 offset-lg-1 align-self-center pt-80 pb-80">
                            {/* Title bottom symbol */}
                            <div className="tbk__symbol ">
                                <span></span>
                            </div>
                            {/*/ Title bottom symbol */}

                            {/* Title with custom font size and thin style */}
                            <h2 className="tbk__title kl-font-alt fw-extrabold mb-30">
                                <span className="fw-semibold ">En pépinières</span>
                            </h2>
                            {/*/ Title with custom font size and thin style */}

                            <div className="clearfix tbk--text-dark text-left tbk-symbol--line tbk--colored">

                                {/* Features list */}
                                <ul className="features left">
                                    {/* Item #5 */}
                                    <li className="wow fadeInLeft" data-wow-offset="100"
                                        style={{ visibility: 'visible', animationName: 'fadeInLeft' }}>
                                        {/* Text */}
                                        <p>
                                            La Technologie EM® augmente la vitesse et le pourcentage de germination des semences, grâce à son effet hormonal, similaire à celui de l’acide gibbérellique.
                                        </p>
                                        {/*/ Text */}
                                    </li>
                                    {/*/ Item #5 */}

                                    {/* Item #2 */}
                                    <li className="wow fadeInLeft" data-wow-offset="120"
                                        style={{ visibility: 'visible', animationName: 'fadeInLeft' }}>
                                        {/* Text */}
                                        <p>
                                            Elle stimule le vigueur et la croissance des tiges et des racines, depuis la germination jusqu'à l'émergence des jeunes plants, grâce à son effet en tant que rhizobactéries promotrices de la croissance végétale. Elle augmente également les chances de survie des jeunes plants.
                                        </p>
                                        {/*/ Text */}
                                    </li>
                                    {/*/ Item #2 */}
                                    {/* Item #3 */}
                                </ul>
                                {/*/ Features list */}
                            </div>

                        </div>

                    </div>
                    {/*/ row */}
                    <div className="row gutter pl-30 pr-30">
                        <div className="col-sm-12 col-md-12 col-lg-4 offset-lg-1 align-self-center pt-80 pb-80">
                            {/* Title bottom symbol */}
                            <div className="tbk__symbol ">
                                <span></span>
                            </div>
                            {/*/ Title bottom symbol */}

                            {/* Title with custom font size and thin style */}
                            <h2 className="tbk__title kl-font-alt fw-extrabold mb-30">
                                <span className="fw-semibold ">Sur les plantes</span>
                            </h2>
                            {/*/ Title with custom font size and thin style */}

                            <div className="clearfix tbk--text-dark text-left tbk-symbol--line tbk--colored">

                                {/* Features list */}
                                <ul className="features left">
                                    {/* Item #5 */}
                                    <li className="wow fadeInLeft" data-wow-offset="100"
                                        style={{ visibility: 'visible', animationName: 'fadeInLeft' }}>
                                        {/* Text */}
                                        <p>
                                            La Technologie EM® génère un mécanisme de suppression des insectes et des maladies sur les plantes, car elle peut induire la résistance systémique des cultures aux maladies.
                                        </p>
                                        {/*/ Text */}
                                    </li>
                                    {/*/ Item #5 */}

                                    {/* Item #2 */}
                                    <li className="wow fadeInLeft" data-wow-offset="120"
                                        style={{ visibility: 'visible', animationName: 'fadeInLeft' }}>
                                        {/* Text */}
                                        <p>
                                            Elle consomme les exsudats des racines, des feuilles, des fleurs et des fruits, empêchant la propagation des organismes pathogènes et le développement des maladies.
                                        </p>
                                        {/*/ Text */}
                                    </li>
                                    {/* Item #3 */}
                                    <li className="wow fadeInLeft" data-wow-offset="100"
                                        style={{ visibility: 'visible', animationName: 'fadeInLeft' }}>
                                        {/* Text */}
                                        <p>
                                            Elle augmente la croissance, la qualité et la productivité des cultures.
                                        </p>
                                        {/*/ Text */}
                                    </li>
                                    {/*/ Item #3 */}

                                    {/* Item #4 */}
                                    <li className="wow fadeInLeft" data-wow-offset="120"
                                        style={{ visibility: 'visible', animationName: 'fadeInLeft' }}>
                                        {/* Text */}
                                        <p>
                                            Promotes flowering, fruiting, and ripening due to its hormonal effects on meristematic
                                            areas.
                                        </p>
                                        {/*/ Text */}
                                    </li>
                                    {/*/ Item #4 */}
                                    {/* Item #5 */}
                                    <li className="wow fadeInLeft" data-wow-offset="120"
                                        style={{ visibility: 'visible', animationName: 'fadeInLeft' }}>
                                        {/* Text */}
                                        <p>
                                            Elle favorise la floraison, la fructification et la maturation, grâce à ses effets hormonaux sur les zones méristématiques.
                                        </p>
                                        {/*/ Text */}
                                    </li>
                                    {/*/ Item #5 */}
                                </ul>

                                {/*/ Features list */}
                            </div>

                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-6 offset-lg-1 wow fadeIn" data-wow-offset="100"
                            style={{ visibility: 'visible', animationName: 'fadeIn' }}>
                            {/* Media container with custom min height = (h-700) */}
                            <div className="media-container custom-oh min-700">
                                {/* Background */}
                                <div className="kl-bg-source">
                                    {/* Image */}
                                    <div className="kl-bg-source__bgimage vh-100"
                                        style={{ backgroundImage: 'url(images/agro/aplicacion-agro-2.jpg)', backgroundRepeat: 'no-repeat', backgroundAttachment: 'scroll', backgroundPositionX: 'center', backgroundPositionY: 'top', backgroundSize: 'cover' }}>
                                    </div>
                                    {/*/ Image */}
                                </div>
                                {/*/ Background */}
                            </div>
                            {/*/ media-container */}
                        </div>
                        {/*/ col-sm-12 col-md-12 col-lg-6 offset-lg-1 */}
                    </div>
                    {/*/ row */}
                    <div className="row gutter pl-30 pr-30">
                        <div className="col-sm-12 col-md-12 col-lg-6 wow fadeIn" data-wow-offset="100"
                            style={{ visibility: 'visible', animationName: 'fadeIn' }}>
                            {/* Media container with custom min height = (h-700) */}
                            <div className="media-container custom-oh min-800">
                                {/* Background */}
                                <div className="kl-bg-source">
                                    {/* Image */}
                                    <div className="kl-bg-source__bgimage vh-100"
                                        style={{ backgroundImage: 'url(images/agro/aplicacion-agro-3.jpg)', backgroundRepeat: 'no-repeat', backgroundAttachment: 'scroll', backgroundPositionX: 'center', backgroundPositionY: 'top', backgroundSize: 'cover' }}>
                                    </div>
                                    {/*/ Image */}
                                </div>
                                {/*/ Background */}
                            </div>
                            {/*/ media-container */}
                        </div> {/*/ col-sm-12 col-md-12 col-lg-6 offset-lg-1 */}
                        <div className="col-sm-12 col-md-12 col-lg-4 offset-lg-1 align-self-center pt-80 pb-80">
                            {/* Title bottom symbol */}
                            <div className="tbk__symbol ">
                                <span></span>
                            </div>
                            {/*/ Title bottom symbol */}

                            {/* Title with custom font size and thin style */}
                            <h2 className="tbk__title kl-font-alt fw-extrabold mb-30">
                                <span className="fw-semibold ">Sur les sols</span>
                            </h2>
                            {/*/ Title with custom font size and thin style */}

                            <div className="clearfix tbk--text-dark text-left tbk-symbol--line tbk--colored">

                                {/* Features list */}
                                <ul className="features left">
                                    {/* Item #5 */}
                                    <li className="wow fadeInLeft" data-wow-offset="100"
                                        style={{ visibility: 'visible', animationName: 'fadeInLeft' }}>
                                        {/* Text */}
                                        <p>
                                        Effets sur les conditions physiques du sol : La Technologie EM® améliore la structure et l'agrégation des particules du sol, réduit sa compaction, augmente les espaces poreux et améliore l'infiltration de l'eau. Elle diminue la fréquence des irrigations, car elle augmente la capacité des sols à absorber l'eau de pluie, tout en évitant l'érosion causée par le déplacement des particules.
                                        </p>
                                        {/*/ Text */}
                                    </li>
                                    {/*/ Item #5 */}

                                    {/* Item #2 */}
                                    <li className="wow fadeInLeft" data-wow-offset="120"
                                        style={{ visibility: 'visible', animationName: 'fadeInLeft' }}>
                                        {/* Text */}
                                        <p>
                                        Effets sur les conditions chimiques du sol : Elle améliore la disponibilité des nutriments dans le sol en les solubilisant, séparant les molécules qui les maintiennent fixées, laissant les éléments sous forme simple pour faciliter leur absorption par le système racinaire.
                                        </p>
                                        {/*/ Text */}
                                    </li>
                                    {/*/ Item #2 */}

                                    {/* Item #3 */}
                                    <li className="wow fadeInLeft" data-wow-offset="120"
                                        style={{ visibility: 'visible', animationName: 'fadeInLeft' }}>
                                        {/* Text */}
                                        <p>
                                        Effets sur la microbiologie du sol : Elle supprime ou contrôle les populations de micro-organismes pathogènes présents dans le sol, par concurrence. Elle augmente la biodiversité microbienne, créant les conditions nécessaires pour que les micro-organismes bénéfiques natifs prospèrent.
                                        </p>
                                        {/*/ Text */}
                                    </li>
                                    {/*/ Item #3 */}
                                </ul>
                                {/*/ Features list */}
                            </div>

                        </div>

                    </div>
                    {/*/ row */}
                </div>
                {/*/ container-fluid */}
            </section>
        </>
    );
};


export default Agriculture;
