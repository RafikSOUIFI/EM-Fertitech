import React, { useEffect } from 'react';
import { products } from '../../dammyData';

const Catalog = () => {
    useEffect(() => {
        // Create script elements
        const script1 = document.createElement('script');
        script1.src = 'js/plugins/jquery.isotope.min.js';
        script1.type = 'text/javascript';

        const script2 = document.createElement('script');
        script2.src = 'js/trigger/kl-portfolio-sortable.js';
        script2.type = 'text/javascript';

        // Append the scripts to the body
        document.body.appendChild(script1);
        document.body.appendChild(script2);

        // Cleanup function to remove scripts when component unmounts
        return () => {
            document.body.removeChild(script1);
            document.body.removeChild(script2);
        };
    }, []);

    return (
        <>
            <div id="page_header" className="page-subheader site-subheader-cst ">
                <div className="bgback">
                </div>

                {/* Animated Sparkles */}
                <div className="th-sparkles"></div>
                {/*/ Animated Sparkles */}

                {/* Background */}
                <div className="kl-bg-source">
                    {/* Background image */}
                    <div className="kl-bg-source__bgimage" style={{ backgroundImage: 'url(images/productos/famille-complète.png)', backgroundRepeat: 'no-repeat', backgroundAttachment: 'scroll', backgroundPositionX: 'center', backgroundPositionY: 'center', backgroundSize: 'cover' }}></div>
                    {/*/ Background image */}
                    {/* Gradient overlay */}
                    <div className="kl-bg-source__overlay" style={{ backgroundColor: 'rgba(53,53,53,0.65)' }}></div>
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
                                        Catalogue avec filtre
                                    </h2>
                                    {/*/ Main Title */}

                                    {/* Main Sub-Title */}
                                    <h4 className="subheader-subtitle">
                                        Nos produits ne sont pas nocifs, classés par l'OMS au niveau de biosécurité 1, étant totalement sans danger pour l'homme, les animaux et l'environnement.
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

                {/* Bottom mask style 3 */}
                <div className="kl-bottommask kl-bottommask--mask3">
                    <svg width="5000px" height="57px" className="svgmask " viewBox="0 0 5000 57" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
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
                {/*/ Bottom mask style 3 */}
            </div>
            <section className="hg_section pt-80 pb-80">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-sm-12">
                            <div className="hg-portfolio-sortable">
                                <ul id="portfolio-nav" className="fixclear">
                                    {/* Nav all */}
                                    <li className="current"><a href="#" data-filter="*">Tous</a></li>

                                    {/* Nav #1 / */}
                                    <li className="filterButton"><a href="#" data-filter=".agriculture"><img src="images/iconos/agricultura-icon.png" alt="agriculture" />Agriculture</a></li>

                                    {/* Nav #2 /  */}
                                    <li className="filterButton"><a href="#" data-filter=".élevage"><img src="images/iconos/animal-icon.png" alt="Production animale" />Production animale</a></li>

                                    {/* Nav #2 /  */}
                                    <li className="filterButton"><a href="#" data-filter=".aquaculture"><img src="images/iconos/acuicultura-icon.png" alt="Aquaculture" />Aquaculture</a></li>

                                    {/* Nav #3 / */}
                                    <li className="filterButton"><a href="#" data-filter=".environnement"><img src="images/iconos/ambiente-icon.png" alt="Environnement" />Environnement</a></li>

                                    {/* Nav #4 / */}
                                    <li className="filterButton"><a href="#" data-filter=".santé"><img src="images/iconos/salud-icon.png" alt="Santé et bien-être" />Santé et bien-être</a></li>
                                </ul>
                                <div className="clear">
                                </div>
                                <ul id="thumbs" className="fixclear" data-columns="4">
                                    {products.map((product, index) => (
                                        <li
                                            key={index}
                                            className={`item kl-has-overlay ${product.category}`}
                                        >
                                            <div className="inner-item">
                                                <a href={product.link}>
                                                <div className="img-intro">
                                                    <img
                                                        src={product.imgSrc}
                                                        alt={product.imgAlt}
                                                        title={product.title}
                                                    />
                                                    <div className="overlay">
                                                        <div className="overlay-inner">
                                                            <span className="fas fa-external-link-alt"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                                </a>
                                                <h4 className="title">
                                                    <a href={product.link}>
                                                        <span className="name">{product.title}</span>
                                                    </a>
                                                </h4>
                                                <span className="moduleDesc">{(product.description).substring(0, 73)}...</span>
                                                <div className="clear"></div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <section className="hg_section bg-white pt-0 pb-60">
                <div className="container">
                    <div className="row">
                        <div className="ib2-style3 ib2-text-color-dark-theme ib2-custom" style={{ backgroundImage: 'url(images/certificado.jpg)', paddingBottom: '45px' }}>
                            <div className="ib2-inner">
                                <div className="col-xs-12 col-md-12">
                                    <h4 className="ib2-info-message">
                                        PRUDUCTOS APROBADOS PARA SU USO EN AGRICULTURA ORGÁNICA
                                    </h4>
                                </div>
                                <div className="col-xs-12 col-md-12" style={{ width: '77%', textAlign: 'center', margin: 'auto' }}>
                                    <img src="images/certificaciones-logo.png" alt="Certificaciones" title="Certificaciones" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
        </>
    )
}
export default Catalog;