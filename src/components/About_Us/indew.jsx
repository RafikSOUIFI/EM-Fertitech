import React from 'react';

const AboutUs = () => {

    return (
        <>
            <div id="page_header" className="page-subheader site-subheader-cst uh_hg_def_header_style maskcontainer--mask6">
                <div className="bgback"></div>

                {/* Background */}
                <div className="kl-bg-source">
                    {/* Video background container */}
                    <div className="kl-video-container kl-bg-source__video">
                        {/* Video wrapper */}
                        <div className="kl-video-wrapper video-grid-overlay">
                            {/* Self Hosted Video Source */}
                            <div className="kl-video valign halign" style={{ width: "100%", height: "100%" }} data-setup='{
                    "position": "absolute",
                    "loop": true, 
                    "autoplay": true,
                    "muted": true,
                    "youtube":"P-aMS487aYA", 
                    "fallback_image":"images/rev_slider_assets/exp_bg2.jpg", 
                    "video_ratio": "1.7778"}'>
                            </div>
                            {/*/ Self Hosted Video Source */}
                        </div>
                        {/*/ Video wrapper */}
                    </div>
                    {/*/ Video background container */}

                    {/* Gradient overlay */}
                    <div className="kl-bg-source__overlay" style={{ background: "rgba(130,36,227,0.3)", background: "-moz-linear-gradient(left, rgba(130,36,227,0.3) 0%, rgba(51,158,221,0.4) 100%)", background: "-webkit-gradient(linear, left top, right top, color-stop(0%,rgba(130,36,227,0.3)), color-stop(100%,rgba(51,158,221,0.4)))", background: "-webkit-linear-gradient(left, rgba(130,36,227,0.3) 0%,rgba(51,158,221,0.4) 100%)", background: "-o-linear-gradient(left, rgba(130,36,227,0.3) 0%,rgba(51,158,221,0.4) 100%)", background: "-ms-linear-gradient(left, rgba(130,36,227,0.3) 0%,rgba(51,158,221,0.4) 100%)", background: "linear-gradient(to right, rgba(130,36,227,0.3) 0%,rgba(51,158,221,0.4) 100%)" }}>
                    </div>
                    {/*/ Gradient overlay */}
                </div>
                {/*/ Background */}

                {/* Animated Sparkles */}
                <div className="th-sparkles"></div>
                {/*/ Animated Sparkles */}

                {/* Sub-Header content wrapper */}
                <div className="ph-content-wrap d-flex min-500">
                    <div className="container align-self-center">
                        <div className="row">
                            <div className="col-sm-12">
                                {/* Sub-Header Titles */}
                                <div className="subheader-titles textcenter">
                                    {/* Main Title */}
                                    <h2 className="subheader-maintitle fs-xxxl fs-xs-xxl fw-extrabold reset-line-height">
                                        NOTRE ENTREPRISE
                                    </h2>
                                    {/*/ Main Title */}

                                    {/* Main Sub-Title */}
                                    <h4 className="subheader-subtitle">
                                        MIEUX NOUS CONNAÎTRE
                                    </h4>
                                    {/*/ Main Sub-Title */}
                                </div>
                                {/*/ Sub-Header Titles */}
                            </div>
                            {/*/ col-sm-12 */}
                        </div>
                        {/*/ row */}
                    </div>
                    {/*/ .container .align-self-center */}
                </div>
                {/*/ Sub-Header content wrapper .d-flex */}

                {/* Sub-Header bottom mask style 6 */}
                <div className="kl-bottommask kl-bottommask--mask6">
                    <svg width="2700px" height="57px" className="svgmask" viewBox="0 0 2700 57" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlnsXlink="https://www.w3.org/1999/xlink">
                        <defs>
                            <filter x="-50%" y="-50%" width="200%" height="200%" filterUnits="objectBoundingBox" id="filter-mask6">
                                <feOffset dx="0" dy="-2" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
                                <feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
                                <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0" in="shadowBlurOuter1" type="matrix" result="shadowMatrixOuter1"></feColorMatrix>
                                <feMerge>
                                    <feMergeNode in="shadowMatrixOuter1"></feMergeNode>
                                    <feMergeNode in="SourceGraphic"></feMergeNode>
                                </feMerge>
                            </filter>
                        </defs>
                        <g transform="translate(-1.000000, 10.000000)">
                            <path d="M0.455078125,18.5 L1,47 L392,47 L1577,35 L392,17 L0.455078125,18.5 Z" fill="#000000"></path>
                            <path d="M2701,0.313493752 L2701,47.2349598 L2312,47 L391,47 L2312,0 L2701,0.313493752 Z" fill="#fbfbfb" className="bmask-bgfill" filter="url(#filter-mask6)"></path>
                            <path d="M2702,3 L2702,19 L2312,19 L1127,33 L2312,3 L2702,3 Z" fill="#f5811f" className="bmask-customfill"></path>
                        </g>
                    </svg>
                </div>
                {/*/ Sub-Header bottom mask style 6 */}
            </div>
            <section className="hg_section bg-white pt-60 pb-40">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-7 align-self-center wow fadeInLeft" data-wow-offset="300" style={{ visibility: 'visible', animationName: 'fadeInLeft' }}>
                            <div className="kl-title-block clearfix text-left tbk-symbol-- tbk-icon-pos--after-title">

                                {/* Title with custom font, size and weight */}
                                <h2 className="tbk__title kl-font-alt fw-extrabold">
                                    QUI SOMMES-NOUS ?
                                </h2>
                                {/*/ Title */}

                                {/* Sub-Title with custom size and weight */}
                                <p>
                                    Nous sommes fiers de posséder plus de 15 ans d'expérience dans la production, le développement et le transfert de la <strong>Technologie EM® (biotechnologie)</strong>. Nous souhaitons que vous et votre entreprise atteigniez des résultats exceptionnels, en harmonie avec l'environnement et en protégeant la santé humaine, aujourd'hui et toujours.
                                </p>
                                {/*/ Sub-Title */}
                                <p>
                                    Nous bénéficions du soutien de notre partenaire EM Research Organization Inc. (EMRO) Japon, fondée en 1994 dans le but de contribuer à la construction d'une société plus humaine, propre et durable à travers la production et la commercialisation de la <strong>Technologie EM® (biotechnologie)</strong>.
                                </p>
                                <p>
                                    EM Fertitech est le producteur exclusif, authentique et certifié de la Technologie EM® pour le marché Tunisien, sous licence d'EMRO Japon.
                                </p>
                            </div>

                        </div>
                        {/*/ col-sm-12 col-md-12 */}
                        <div className="col-sm-12 col-md-12 col-lg-5 wow fadeIn" data-wow-offset="300" style={{ visibility: 'visible', animationName: 'fadeIn' }}>
                            {/* Stage icon box middle image */}
                            <div className="img-cultura floating">
                                {/* Image */}
                                <img src="images/productos/fam-todos.png" className="stage-ibx__stage-img img-fluid" alt="Bioem" title="Bioem" />
                                {/*/ Image */}
                            </div>
                            {/*/ Stage icon box middle image - .stage-ibx */}
                        </div>
                    </div>
                    {/*/ row */}
                </div>
                {/*/ container */}
            </section>
            {/* <section className="hg_section bg-green pt-80 section--background-logo">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-sm-12">
                            <div className="kl-title-block clearfix tbk--text-dark tbk--left text-center tbk-symbol--line_border tbk--colored tbk-icon-pos--after-title">
                                <h2 className="tbk__title kl-font-alt fw-extrabold mb-30 green">
                                    PUNTOS IMPORTANTES EN EL TIEMPO
                                </h2>
                            </div>
                            <div className="timeline green">
                                <div className="timeline__inner">
                                    <div className="row">                                        
                                        <div className="col-md-4">
                                            <div className="timeline__item wow fadeInUp" data-wow-offset="200" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
                                                <p className="timeline__year">2002</p>
                                                <p>
                                                    Desarrollo e investigación de la Tecnología EM®, en el Perú.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="timeline__item wow fadeInUp" data-wow-offset="250" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
                                                <p className="timeline__year">2007</p>
                                                <p>
                                                    Inicio producción de la Tecnología EM® , a nivel comercial para el sector agropecuario, acuícola y medio ambiental.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="timeline__item wow fadeInUp" data-wow-offset="300" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
                                                <p className="timeline__year">2018</p>
                                                <p>
                                                    Desarrollo del área de  salud y bienestar (producción de PROEM•1® para el cuidado de la salud humana).
                                                </p>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            <section className="hg_section--relative pt-80">
                <div className="kl-bg-source">
                    {/* Background image */}
                    <div className="kl-bg-source__bgimage" style={{ backgroundImage: 'url(images/man-791049_1280.jpg)', backgroundRepeat: 'no-repeat', backgroundAttachment: 'scroll', backgroundPositionX: 'center', backgroundPositionY: 'center', backgroundSize: 'cover' }}>
                    </div>
                    {/*/ Background image */}

                    {/* Background overlay */}
                    <div className="kl-bg-source__overlay" style={{ backgroundColor: 'rgba(53,53,53,0.26)' }}>
                    </div>
                    {/*/ Background overlay */}
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 wow fadeIn" data-wow-offset="300" style={{ visibility: 'visible', animationName: 'fadeIn' }}>
                            <div className="clearfix text-left tbk-symbol-- tbk-icon-pos--after-title white tbk-symbol--line tbk-icon-pos--after-title">
                                {/* Title with custom font, size and weight */}
                                <h2 className="tbk__title kl-font-alt fw-extrabold mb-30 ">
                                    NOTRE PHILOSOPHIE
                                </h2>
                                {/*/ Title */}

                                {/* Sub-Title with custom size and weight */}
                                <p>
                                    Nous encourageons l'utilisation de la <strong>Technologie EM® (biotechnologie)</strong> comme une alternative propre, sûre, durable et hautement rentable pour renforcer la production agroalimentaire et aquacole, la protection de l'environnement et la préservation de la santé humaine, aujourd'hui et toujours.
                                </p>
                                {/* Title bottom symbol */}
                                <div className="tbk__symbol">
                                    <span className="tbg"></span>
                                </div>
                                {/*/ Title bottom symbol */}
                            </div>
                        </div>
                        {/*/ col-sm-12 col-md-12 */}
                        <div className="col-sm-12 col-md-12 wow fadeIn" data-wow-offset="300" style={{ visibility: 'visible', animationName: 'fadeIn' }}>
                            {/* Recent Work carousel 1 style 2 element */}
                            <div className="recentwork_carousel recentwork_carousel--2 clearfix white">
                                <div className="row">
                                    <div className="col-sm-12 col-md-12 col-lg-4">
                                        {/* Left side */}
                                        <div className="custom mr-20 mb-sm-30">
                                            {/* Title element */}
                                            <div className="kl-title-block clearfix text-left tbk-symbol--line tbk-icon-pos--after-title pb-0">
                                                {/* Title */}
                                                <h3 className="tbk__title kl-font-alt fw-extrabold mb-30">
                                                    VISION PARTAGÉE
                                                </h3>
                                                {/*/ Title */}

                                                {/* Sub-title */}
                                                <h6 className="">
                                                    Nous partageons la philosophie japonaise de notre partenaire EM Research Organization Inc. (EMRO).
                                                </h6>

                                                {/* Title bottom symbol */}
                                                <div className="tbk__symbol">
                                                    <span className="tbg"></span>
                                                </div>
                                                {/*/ Title bottom symbol */}
                                            </div>
                                            {/*/ Title element */}
                                        </div>
                                        {/*/ custom mr-20 mb-sm-30 */}
                                        {/*/ Left side - .recentwork_carousel__left */}
                                    </div>
                                    {/*/ col-sm-12 col-md-12 col-lg-4 */}

                                    <div className="col-sm-12 col-md-12 col-lg-8">
                                        {/* Recent Work - carousel wrapper */}
                                        <div className="recentwork_carousel__crsl-wrapper">
                                            <div className="recent_works1 recentwork_carousel__crsl js-slick" data-slick='{
                                    "infinite": true,
                                    "slidesToShow": 3,
                                    "slidesToScroll": 1,
                                    "swipeToSlide": true,
                                    "autoplay": true,
                                    "autoplaySpeed": 3000,
                                    "speed": 500,
                                    "cssEase": "ease-in-out",
                                    "appendArrows": ".recentwork_carousel--2 .hgSlickNav",		
                                    "arrows": true,
                                    "responsive": [
                                        {
                                            "breakpoint": 1199,
                                            "settings": {
                                                "slidesToShow": 2
                                            }
                                        },
                                        {
                                            "breakpoint": 560,
                                            "settings": {
                                                "slidesToShow": 1
                                            }
                                        }
                                    ]
                                }'>
                                                {/* Item #1 */}
                                                <div className="recent-work_carousel-item black">
                                                    <div className="kl-icon-box  black">
                                                        <img className="item-valores img-fluid" src="images/iconos/seguridad-icon.png" alt="Seguridad" title="Seguridad" />
                                                        {/* Title with cutom size and margin */}
                                                        <h4 className="fs-s mt-10">
                                                        SÉCURITÉ
                                                        </h4>

                                                        {/* Content */}
                                                        <div className="content">
                                                            <p>
                                                            Nos produits sont sûrs, n'affectent ni l'environnement ni la santé humaine ou animale.
                                                            </p>
                                                        </div>
                                                        {/* /.content */}
                                                    </div>
                                                    {/* /.icon-box mb-50 */}
                                                </div>
                                                {/*/ Item #1 */}

                                                {/* Item #2 */}
                                                <div className="recent-work_carousel-item">
                                                    <div className="kl-icon-box  black">
                                                        <img className="item-valores img-fluid" src="images/iconos/vida-icon.png" alt="Seguridad" title="Seguridad" />
                                                        {/* Title with cutom size and margin */}
                                                        <h4 className="fs-s mt-10">
                                                        VIE
                                                        </h4>

                                                        {/* Content */}
                                                        <div className="content">
                                                            <p>
                                                            Nous contribuons à améliorer la qualité de vie de toutes les personnes, aujourd'hui et toujours.
                                                            </p>
                                                        </div>
                                                        {/* /.content */}
                                                    </div>
                                                    {/* /.icon-box mb-50 */}
                                                </div>
                                                {/*/ Item #2 */}

                                                {/* Item #3 */}
                                                <div className="recent-work_carousel-item">
                                                    <div className="kl-icon-box  black">
                                                        <img className="item-valores img-fluid" src="images/iconos/esperanza-icon.png" alt="Seguridad" title="Seguridad" />
                                                        {/* Title with cutom size and margin */}
                                                        <h4 className="fs-s mt-10">
                                                        ESPOIR
                                                        </h4>

                                                        {/* Content */}
                                                        <div className="content">
                                                            <p>
                                                            Nous aidons à construire un monde meilleur, fondé sur la coexistence et la coprosperité.
                                                            </p>
                                                        </div>
                                                        {/* /.content */}
                                                    </div>
                                                    {/* /.icon-box mb-50 */}
                                                </div>
                                                {/*/ Item #3 */}

                                                {/* Item #4 */}
                                                <div className="recent-work_carousel-item">
                                                    <div className="kl-icon-box  black">
                                                        <img className="item-valores img-fluid" src="images/iconos/sociedad-icon.png" alt="Seguridad" title="Seguridad" />
                                                        {/* Title with cutom size and margin */}
                                                        <h4 className="fs-s mt-10">
                                                        SOCIÉTÉ
                                                        </h4>

                                                        {/* Content */}
                                                        <div className="content">
                                                            <p>
                                                            Nous avançons ensemble vers notre objectif : le développement durable.
                                                            </p>
                                                        </div>
                                                        {/* /.content */}
                                                    </div>
                                                    {/* /.icon-box mb-50 */}
                                                </div>
                                                {/*/ Item #4 */}

                                                {/* Item #5 */}
                                                <div className="recent-work_carousel-item">
                                                    <div className="kl-icon-box  black">
                                                        <img className="item-valores img-fluid" src="images/iconos/sociedad-icon.png" alt="Seguridad" title="Seguridad" />
                                                        {/* Title with cutom size and margin */}
                                                        <h4 className="fs-s mt-10">
                                                        NATURE
                                                        </h4>

                                                        {/* Content */}
                                                        <div className="content">
                                                            <p>
                                                            Nous prenons soin de notre environnement et le protégeons.
                                                            </p>
                                                        </div>
                                                        {/* /.content */}
                                                    </div>
                                                    {/* /.icon-box mb-50 */}
                                                </div>
                                                {/*/ Item #5 */}

                                                {/* Item #6 */}
                                                <div className="recent-work_carousel-item">
                                                    <div className="kl-icon-box black">
                                                        <img className="item-valores img-fluid" src="images/iconos/facil-icon.png" alt="Seguridad" title="Seguridad" />
                                                        {/* Title with cutom size and margin */}
                                                        <h4 className="fs-s mt-10">
                                                        FACILE À APPLIQUER
                                                        </h4>

                                                        {/* Content */}
                                                        <div className="content">
                                                            <p>
                                                            Nos produits sont pratiques, sûrs et accessibles.
                                                            </p>
                                                        </div>
                                                        {/* /.content */}
                                                    </div>
                                                    {/* /.icon-box mb-50 */}
                                                </div>
                                                {/*/ Item #6 */}
                                            </div>
                                            {/*/ .recent_works1 .recentwork_carousel__crsl .js-slick */}
                                        </div>
                                        {/*/  Recent Work - carousel wrapper - .recentwork_carousel__crsl-wrapper */}
                                    </div>
                                    {/*/ col-sm-12 col-md-12 col-lg-8 */}
                                </div>
                                {/*/ row */}
                            </div>
                            {/*/ .recentwork_carousel */}
                        </div>
                        {/*/ col-sm-12 col-md-12 wow fadeIn */}
                    </div>
                    {/*/ row */}
                </div>
                {/*/ container */}
            </section>
            <section className="hg_section--relative pt-80 pb-80">
                <div className="kl-bg-source">
                    {/* Background image */}
                    <div className="kl-bg-source__bgimage bg-a"></div>
                    <div className="kl-bg-source__bgimage bg-b"></div>
                    {/*/ Background image */}
                </div>
                <div className="container-fluid">
                    <div className="row ">
                        <div className="col-sm-12 col-md-12 text-center wow fadeInUp" data-wow-offset="100" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
                            {/* Title bottom symbol */}
                            <div className="tbk__symbol ">
                                <span></span>
                            </div>
                            {/*/ Title bottom symbol */}

                            {/* Title with custom font size and thin style */}
                            <h2 className="tbk__title kl-font-alt fw-extrabold mb-30">
                                <span className="fw-semibold ">NOS RÉALISATIONS</span>
                            </h2>
                            <p>"La condition essentielle du bonheur humain est la capacité de faire ce que l'on aime véritablement, quel que soit le domaine, tout au long de la vie."</p>
                            <p>(P. 327, Teruo Higa , Une révolution qui sauve la Terre.)</p>
                            {/*/ Title with custom font size and thin style */}
                        </div>

                        <div className="col-sm-12 col-md-12 col-lg-5 ">
                            <div className="clearfix tbk--text-dark tbk-symbol--line tbk--colored">
                                {/* Features list */}
                                <ul className="features left">
                                    {/* Item #5 */}
                                    <li className="wow fadeInLeft" data-wow-offset="100" style={{ visibility: 'visible', animationName: 'fadeInLeft' }}>
                                        {/* Text */}
                                        <p>
                                        Les entreprises et producteurs qui travaillent avec nous mettent en place avec succès des programmes de production durables, améliorant ainsi leur productivité et leur écoefficacité.
                                        </p>
                                        {/*/ Text */}
                                    </li>
                                    {/*/ Item #5 */}

                                    {/* Item #2 */}
                                    <li className="logro-30mr wow fadeInLeft" data-wow-offset="120" style={{ visibility: 'visible', animationName: 'fadeInLeft' }}>
                                        {/* Text */}
                                        <div className="title">
                                        Nous sommes pionniers et références dans le développement de la <strong>Technologie EM® (biotechnologie)</strong> pour la production organique et durable en Tunisie.
                                        </div>
                                        {/*/ Text */}
                                    </li>
                                    {/*/ Item #2 */}
                                    {/* Item #3 */}
                                    <li className="logro-30mr wow fadeInLeft" data-wow-offset="140" style={{ visibility: 'visible', animationName: 'fadeInLeft' }}>
                                        {/* Text */}
                                        <p>
                                        Nos partenariats avec des organismes publics et privés soutiennent une recherche continue en agriculture, élevage, aquaculture et restauration environnementale.
                                        </p>
                                        {/*/ Text */}
                                    </li>
                                    {/*/ Item #3 */}
                                    {/* Item #7 */}
                                    <li className="wow fadeInLeft" data-wow-offset="160" style={{ visibility: 'visible', animationName: 'fadeInLeft' }}>
                                        {/* Text */}
                                        <p>
                                        Nous améliorons la performance environnementale des entreprises et des collectivités locales en promouvant la gestion efficace des ressources naturelles.
                                        </p>
                                        {/*/ Text */}
                                    </li>
                                    {/*/ Item #7 */}
                                </ul>
                                {/*/ Features list */}
                            </div>
                        </div>
                        {/*/ col-sm-12 col-md-12 col-lg-3 offset-lg-2 align-self-center pt-80 pb-80 */}

                        <div className="col-sm-12 col-md-12 col-lg-2 align-self-center">
                            <div className="stage-ibx d-flex justify-content-center align-self-center">
                                <div className="stage-ibx__stage_us">
                                    {/* Image */}
                                    <img src="images/logo-réalisations.png" className="stage-ibx__stage-img img-fluid" alt="" title="" />
                                    {/*/ Image */}
                                </div>
                                {/* /.stage-ibx .d-flex .justify-content-center */}
                            </div>
                        </div>
                        {/*/ col-sm-12 col-md-12 col-lg-6 offset-lg-1 */}

                        <div className="col-sm-12 col-md-12 col-lg-5 ">
                            <div className="clearfix tbk--text-dark text-left tbk-symbol--line tbk--colored">
                                {/* Features list */}
                                <ul className="features">
                                    {/* Item #1 */}
                                    <li className="wow fadeInRight" data-wow-offset="100" style={{ visibility: 'visible', animationName: 'fadeInRight' }}>
                                        {/* Text */}
                                        <p>
                                        Nos services de conseil et d'accompagnement ont obtenu des résultats extraordinaires en matière de production organique et durable.
                                        </p>
                                        {/*/ Text */}
                                    </li>
                                    {/*/ Item #1 */}
                                    {/* Item #6 */}
                                    <li className="logro-30ml wow fadeInRight" data-wow-offset="100" style={{ visibility: 'visible', animationName: 'fadeInRight' }}>
                                        {/* Text */}
                                        <p>
                                        Nous valorisons les pratiques agricoles traditionnelles en collaboration avec les petits producteurs, en préservant leur droit à une production responsable et respectueuse de notre diversité, contribuant ainsi à la "souveraineté alimentaire" de notre pays.
                                        </p>
                                        {/*/ Text */}
                                    </li>
                                    {/*/ Item #6 */}
                                    {/* Item #8 */}
                                    <li className="logro-30ml wow fadeInRight" data-wow-offset="100" style={{ visibility: 'visible', animationName: 'fadeInRight' }}>
                                        {/* Text */}
                                        <p>
                                        Notre <strong>Technologie EM® (biotechnologie)</strong> parvient à produire de manière durable des produits de haute qualité qui nourrissent et guérissent.
                                        </p>
                                        {/*/ Text */}
                                    </li>
                                    {/*/ Item #8 */}
                                    {/* Item #4 */}
                                    <li className="wow fadeInRight" data-wow-offset="100" style={{ visibility: 'visible', animationName: 'fadeInRight' }}>
                                        {/* Text */}
                                        <p>
                                        Nous avons formé plus de 50 000 producteurs et entreprises à l'utilisation de la <strong>Technologie EM® (biotechnologie)</strong> et à ses diverses applications.
                                        </p>
                                        {/*/ Text */}
                                    </li>
                                    {/*/ Item #4 */}
                                </ul>
                                {/*/ Features list */}
                            </div>
                        </div>
                        {/*/ col-sm-12 col-md-12 col-lg-3 offset-lg-2 align-self-center pt-80 pb-80 */}
                    </div>
                    {/*/ row */}
                </div>
                {/*/ container-fluid */}
            </section>

        </>
    )
}
export default AboutUs;