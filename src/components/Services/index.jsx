import React from 'react';

const Services = () => {
    return (
        <>
            <div id="page_header" className="page-subheader site-subheader-cst ">
                <div className="bgback"></div>

                {/* Background */}
                <div className="kl-bg-source">
                    {/* Gradient overlay */}
                    <div className="kl-bg-source__overlay" style={{ background: 'rgba(118,3,186,1)', background: '-moz-linear-gradient(left, rgba(118,3,186,1) 0%, rgba(143,21,21,1) 100%)', background: '-webkit-gradient(linear, left top, right top, color-stop(0%,rgba(118,3,186,1)), color-stop(100%,rgba(143,21,21,1)))', background: '-webkit-linear-gradient(left, rgba(118,3,186,1) 0%,rgba(143,21,21,1) 100%)', background: '-o-linear-gradient(left, rgba(118,3,186,1) 0%,rgba(143,21,21,1) 100%)', background: '-ms-linear-gradient(left, rgba(118,3,186,1) 0%,rgba(143,21,21,1) 100%)', background: 'linear-gradient(to right, rgba(118,3,186,1) 0%,rgba(143,21,21,1) 100%)' }}>
                    </div>
                    {/*/ Gradient overlay */}
                </div>
                {/*/ Background */}

                {/* Sub-Header content wrapper */}
                <div className="ph-content-wrap d-flex min-400">
                    <div className="container align-self-center">
                        <div className="row">
                            <div className="col-sm-12">
                                {/* Sub-Header Titles */}
                                <div className="subheader-titles textcenter">
                                    {/* Main Title */}
                                    <h2 className="subheader-maintitle fw-extrabold reset-line-height">
                                    ASSISTANCE TECHNIQUE ET FORMATION
                                    </h2>
                                    {/*/ Main Title */}

                                    {/* Main Sub-Title */}
                                    <h4 className="subheader-subtitle">
                                    Nos professionnels ont plus de 15 ans d'expérience sur le marché national, offrant une assistance technique et des formations dans les domaines suivants :
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

                {/* Sub-header Bottom mask style 3 */}
                <div className="kl-bottommask kl-bottommask--mask3">
                    <svg width="2700px" height="57px" className="svgmask" viewBox="0 0 2700 57" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
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
                        <path d="M-2,57 L-2,34.007 L1268,34.007 L1284,34.007 C1284,34.007 1291.89,33.258 1298,31.024 C1304.11,28.79 1329,11 1329,11 L1342,2 C1342,2 1345.121,-0.038 1350,-1.64313008e-14 C1355.267,-0.03 1358,2 1358,2 L1371,11 C1371,11 1395.89,28.79 1402,31.024 C1408.11,33.258 1416,34.007 1416,34.007 L1432,34.007 L2702,34.007 L2702,57 L1350,57 L-2,57 Z" className="bmask-bgfill" filter="url(#filter-mask3)" fill="#fbfbfb"></path>
                    </svg>
                    <i className="fas fa-angle-down"></i>
                </div>
                {/*/ Sub-header Bottom mask style 3 */}
            </div>
            <section className="hg_section pt-80 bg-lightgray">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 wow fadeInUp" data-wow-offset="300" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
                            {/* Title element */}
                            <div className="text-left tbk-symbol--line tbk-icon-pos--after-title">
                                {/* Title with custom font size, black color and semibold style */}
                                <h2 className="black fs-xxl fw-semibold">
                                NOS SERVICES
                                </h2>

                                {/* Title bottom symbol */}
                                <div className="tbk__symbol ">
                                    <span></span>
                                </div>
                                {/*/ Title bottom symbol */}

                                {/* Sub-title with custom font size, lightgray color and thin style  */}
                                <h4 className="tbk__subtitle fs-l light-gray fw-thin">
                                Nos professionnels ont plus de 15 ans d'expérience sur le marché national, offrant une assistance technique et des formations dans les domaines suivants :
                                </h4>
                            </div>
                            {/*/ Title element */}
                        </div>
                        {/*/ col-md-12 col-sm-12 */}
                    </div>
                    {/*/ row */}
                </div>
                {/*/ container */}
            </section>

            <section className="hg_section bg-lightgray wow fadeInLeft" data-wow-offset="300" style={{ visibility: 'visible', animationName: 'fadeInLeft' }}>
                <div className="container">
                    <div className="row service-border">
                        <div className="col-sm-12 col-md-12 col-lg-8 ">
                            {/* Services box element modern style */}
                            <div className="services_box services_box--modern sb--hasicon">
                                {/* Service box wrapper */}
                                <div className="services_box__inner clearfix">
                                    {/* Icon content */}
                                    <div className="services_box__icon">
                                        {/* Icon wrapper */}
                                        <div className="services_box__icon-inner">
                                            {/* Icon = .icon-noun_65754  */}
                                        </div>
                                        {/*/ Icon wrapper */}
                                    </div>
                                    {/*/ Icon content */}

                                    {/* Content */}
                                    <div className="services_box__content">
                                        {/* Title */}
                                        <h4 className="services_box__title">
                                        Agriculture durable
                                        </h4>
                                        {/*/ Title */}

                                        {/* Description */}
                                        {/*/ Description */}

                                        {/* List wrapper */}
                                        <div className="services_box__list-wrapper">
                                            <span className="services_box__list-bg"></span>
                                            {/* List */}
                                            <ul className="services_box__list">
                                                <li><span className="services_box__list-text">Agriculture biologique et durable. </span></li>
                                                <li><span className="services_box__list-text">Préparation d'engrais organiques (bokashi, compost, répulsifs et bioferments). </span></li>
                                                <li><span className="services_box__list-text">Traitement et amélioration des sols. </span></li>
                                                <li><span className="services_box__list-text">Récupération des sols salino-sodiques. </span></li>
                                                <li><span className="services_box__list-text">Suppression des nématodes. </span></li>
                                            </ul>
                                            {/*/ List */}
                                        </div>
                                        {/*/ List wrapper */}
                                    </div>
                                    {/*/ Content */}
                                </div>
                                {/*/ Service box wrapper */}
                            </div>
                            {/*/ Services box element modern style */}
                        </div>
                        {/*/ col-sm-12 col-md-12 col-lg-4 */}
                        <div className="col-sm-12 col-md-12 col-lg-4 mt-15 mb-15 ">
                            {/* Image boxes style 4 element - bottom title */}
                            {/* Media container with custom min height = (h-700) */}
                            <div className="media-container custom-oh ">
                                {/* Background */}
                                <div className="kl-bg-source">
                                    {/* Image */}
                                    <div className="kl-bg-source__bgimage vh-100" style={{ backgroundImage: 'url(images/serv-agro.jpg)', backgroundRepeat: 'no-repeat', backgroundAttachment: 'scroll', backgroundPositionX: 'center', backgroundPositionY: 'top', backgroundSize: 'cover' }}>
                                    </div>
                                    {/*/ Image */}
                                </div>
                                {/*/ Background */}
                            </div>
                            {/*/ media-container */}
                            {/*/ col-sm-12 col-md-12 col-lg-6 offset-lg-1 */}
                            {/*/ Image boxes style 4 element - bottom title */}
                        </div>
                    </div>
                    {/*/ row */}
                </div>
                {/*/ container */}
            </section>

            <section className="hg_section bg-lightgray wow fadeInLeft" data-wow-offset="300" style={{ visibility: 'visible', animationName: 'fadeInLeft' }}>
                <div className="container">
                    <div className="row service-border">
                        <div className="col-sm-12 col-md-12 col-lg-8 ">
                            {/* Services box element modern style */}
                            <div className="services_box services_box--modern sb--hasicon ">
                                {/* Service box wrapper */}
                                <div className="services_box__inner clearfix">
                                    {/* Icon content */}
                                    <div className="services_box__icon">
                                        {/* Icon wrapper */}
                                        <div className="services_box__icon-inner">
                                            {/* Icon = .icon-process2  */}
                                        </div>
                                        {/*/ Icon wrapper */}
                                    </div>
                                    {/*/ Icon content */}

                                    {/* Content */}
                                    <div className="services_box__content">
                                        {/* Title */}
                                        <h4 className="services_box__title">
                                        Production animale
                                        </h4>
                                        {/*/ Title */}

                                        {/* List wrapper */}
                                        <div className="services_box__list-wrapper">
                                            <span className="services_box__list-bg"></span>
                                            {/* List */}
                                            <ul className="services_box__list">
                                                <li><span className="services_box__list-text">Traitement de la matière organique dans les fermes et les étables.</span></li>
                                                <li><span className="services_box__list-text">Nettoyage des installations, contrôle des mauvaises odeurs et des mouches.</span></li>
                                                <li><span className="services_box__list-text">Traitement des effluents.</span></li>
                                            </ul>
                                            {/*/ List */}
                                        </div>
                                        {/*/ List wrapper */}
                                    </div>
                                    {/*/ Content */}
                                </div>
                                {/*/ Service box wrapper */}
                            </div>
                            {/*/ Services box element modern style */}
                        </div>
                        {/*/ col-sm-12 col-md-12 col-lg-4 */}
                        <div className="col-sm-12 col-md-12 col-lg-4 mt-15 mb-15 ">
                            {/* Image boxes style 4 element - bottom title */}
                            {/* Media container with custom min height = (h-700) */}
                            <div className="media-container custom-oh ">
                                {/* Background */}
                                <div className="kl-bg-source">
                                    {/* Image */}
                                    <div className="kl-bg-source__bgimage vh-100" style={{ backgroundImage: 'url(images/serv-animal.jpg)', backgroundRepeat: 'no-repeat', backgroundAttachment: 'scroll', backgroundPositionX: 'center', backgroundPositionY: 'top', backgroundSize: 'cover' }}>
                                    </div>
                                    {/*/ Image */}
                                </div>
                                {/*/ Background */}
                            </div>
                            {/*/ media-container */}
                            {/*/ col-sm-12 col-md-12 col-lg-6 offset-lg-1 */}
                            {/*/ Image boxes style 4 element - bottom title */}
                        </div>
                    </div>
                    {/*/ row */}
                </div>
                {/*/ container */}
            </section>
            <section className="hg_section bg-lightgray wow fadeInLeft" data-wow-offset="300" style={{ visibility: 'visible', animationName: 'fadeInLeft' }}>
                <div className="container">
                    <div className="row service-border">
                        <div className="col-sm-12 col-md-12 col-lg-8">
                            {/* Services box element modern style */}
                            <div className="services_box services_box--modern sb--hasicon">
                                {/* Service box wrapper */}
                                <div className="services_box__inner clearfix">
                                    {/* Icon content */}
                                    <div className="services_box__icon">
                                        {/* Icon wrapper */}
                                        <div className="services_box__icon-inner">
                                            {/* Icon = .icon-process3 */}
                                        </div>
                                        {/*/ Icon wrapper */}
                                    </div>
                                    {/*/ Icon content */}

                                    {/* Content */}
                                    <div className="services_box__content">
                                        {/* Title */}
                                        <h4 className="services_box__title">
                                        Restauration écologique
                                        </h4>
                                        {/*/ Title */}
                                        {/* List wrapper */}
                                        <div className="services_box__list-wrapper">
                                            <span className="services_box__list-bg"></span>
                                            {/* List */}
                                            <ul className="services_box__list">
                                                <li><span className="services_box__list-text">Récupération des sols dégradés.</span></li>
                                                <li><span className="services_box__list-text">RAssainissement des sols contaminés par des hydrocarbures et des pesticides.</span></li>
                                                <li><span className="services_box__list-text">Décontamination des rivières, lacs et lagunes.</span></li>
                                                <li><span className="services_box__list-text">Contrôle des mauvaises odeurs et des mouches dans les décharges.</span></li>
                                                <li><span className="services_box__list-text">Traitement des déchets organiques domestiques et municipaux.</span></li>
                                                <li><span className="services_box__list-text">Traitement des fosses septiques.</span></li>
                                                <li><span className="services_box__list-text">Bacs à graisse dans les restaurants et supermarchés.</span></li>
                                                <li><span className="services_box__list-text">Restauración des réservoirs eutrophisés avec surpopulation d'algues.</span></li>
                                            </ul>
                                            {/*/ List */}
                                        </div>
                                        {/*/ List wrapper */}
                                    </div>
                                    {/*/ Content */}
                                </div>
                                {/*/ Service box wrapper */}
                            </div>
                            {/*/ Services box element modern style */}
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-4 mt-15 mb-15">
                            {/* Image boxes style 4 element - bottom title */}
                            {/* Media container with custom min height = (h-700) */}
                            <div className="media-container custom-oh">
                                {/* Background */}
                                <div className="kl-bg-source">
                                    {/* Image */}
                                    <div className="kl-bg-source__bgimage vh-100" style={{ backgroundImage: 'url(images/serv-ambiente.jpg)', backgroundRepeat: 'no-repeat', backgroundAttachment: 'scroll', backgroundPositionX: 'center', backgroundPositionY: 'top', backgroundSize: 'cover' }}>
                                    </div>
                                    {/*/ Image */}
                                </div>
                                {/*/ Background */}
                            </div>
                            {/*/ media-container */}
                            {/*/ Image boxes style 4 element - bottom title */}
                        </div>
                        {/*/ col-sm-12 col-md-12 col-lg-4 */}
                    </div>
                    {/*/ row */}
                </div>
                {/*/ container */}
            </section>

        </>
    )
}
export default Services;