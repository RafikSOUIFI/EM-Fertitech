import React from 'react';

const Contact = () => {

    return (
        <>
            <section className="hg_section bg-white pt-80 pb-40">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-12">
                            {/* Grid icon box element 3 cols lined style */}
                            <div className="grid-ibx grid-ibx--cols-3 grid-ibx--style-lined-center grid-ibx--hover-shadow">
                                <div className="grid-ibx__inner">
                                    <div className="grid-ibx__row clearfix">
                                        {/* Item - height 300px */}
                                        <div className="grid-ibx__item h-300">
                                            <div className="grid-ibx__item-inner">
                                                {/* Title wrapper */}
                                                <div className="grid-ibx__title-wrp">
                                                    <h4 className="grid-ibx__title kl-font-alt fs-m">
                                                        ADRESSE
                                                    </h4>
                                                </div>
                                                {/*/ Title wrapper */}

                                                {/* Icon/Image wrapper */}
                                                <div className="grid-ibx__icon-wrp">
                                                    <span className="grid-ibx__icon fas fa-map-marked-alt fs-xxxl"></span>
                                                </div>
                                                {/*/ Icon/Image wrapper */}

                                                {/* Content wrapper */}
                                                <div className="grid-ibx__desc-wrp">
                                                    <p className="grid-ibx__desc">
                                                        Mornag - Ben Arous <br /> En face du salon de thé Havana
                                                    </p>
                                                </div>
                                                {/*/ Content wrapper */}
                                            </div>
                                        </div>
                                        {/*/ Item - height 300px */}

                                        {/* Item - height 300px */}
                                        <div className="grid-ibx__item h-300">
                                            <div className="grid-ibx__item-inner">
                                                <div className="grid-ibx__title-wrp">
                                                    <h4 className="grid-ibx__title kl-font-alt fs-m">
                                                        TÉLÉPHONES DE CONTACT
                                                    </h4>
                                                </div>
                                                <div className="grid-ibx__icon-wrp">
                                                    <span className="grid-ibx__icon fas fa-phone-volume fs-xxxl"></span>
                                                </div>
                                                <div className="grid-ibx__desc-wrp">
                                                    <p className="grid-ibx__desc">
                                                        (+216) 28642884
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        {/*/ Item - height 300px */}

                                        {/* Item - height 300px */}
                                        <div className="grid-ibx__item h-300">
                                            <div className="grid-ibx__item-inner">
                                                <div className="grid-ibx__title-wrp">
                                                    <h4 className="grid-ibx__title kl-font-alt fs-m">
                                                        E-MAIL
                                                    </h4>
                                                </div>
                                                <div className="grid-ibx__icon-wrp">
                                                    <span className="grid-ibx__icon fas fa-at fs-xxxl"></span>
                                                </div>
                                                <div className="grid-ibx__desc-wrp">
                                                    <p className="grid-ibx__desc">
                                                        administration@emfertitech.com
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        {/*/ Item - height 300px */}
                                    </div>
                                    {/*/ .grid-ibx__row */}
                                </div>
                                {/*/ .grid-ibx__inner */}
                            </div>
                            {/*/ Grid icon box element 3 cols lined style */}
                        </div>
                        {/*/ col-sm-12 col-md-12 */}
                    </div>
                    {/*/ row */}
                </div>
                {/*/ container */}
            </section>
            <div id="mapa" className="kl-slideshow static-content__slideshow scontent__maps">
                {/* Map with custom height */}
                {/* <div className="th-google_map" style={{ height: '550px' }}>
                </div> */}
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d632.1864754635023!2d10.283540986605454!3d36.68729917369583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e6!4m0!4m3!3m2!1d36.687381440061095!2d10.283553104939738!5e1!3m2!1sen!2stn!4v1733661054047!5m2!1sen!2stn"
                    width="100%"
                    height="550px"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Map"
                ></iframe>
                {/* end map */}

                {/* Bottom mask style 5 */}
                <div className="kl-bottommask kl-bottommask--mask5">
                    <svg
                        width="2700px"
                        height="64px"
                        className="svgmask"
                        viewBox="0 0 2700 64"
                        version="1.1"
                        xmlns="https://www.w3.org/2000/svg"
                        xmlnsXlink="https://www.w3.org/1999/xlink"
                    >
                        <defs>
                            <filter
                                x="-50%"
                                y="-50%"
                                width="200%"
                                height="200%"
                                filterUnits="objectBoundingBox"
                                id="filter-mask5"
                            >
                                <feOffset dx="0" dy="2" in="SourceAlpha" result="shadowOffsetInner1"></feOffset>
                                <feGaussianBlur stdDeviation="1.5" in="shadowOffsetInner1" result="shadowBlurInner1"></feGaussianBlur>
                                <feComposite
                                    in="shadowBlurInner1"
                                    in2="SourceAlpha"
                                    operator="arithmetic"
                                    k2="-1"
                                    k3="1"
                                    result="shadowInnerInner1"
                                ></feComposite>
                                <feColorMatrix
                                    values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.45 0"
                                    in="shadowInnerInner1"
                                    type="matrix"
                                    result="shadowMatrixInner1"
                                ></feColorMatrix>
                                <feMerge>
                                    <feMergeNode in="SourceGraphic"></feMergeNode>
                                    <feMergeNode in="shadowMatrixInner1"></feMergeNode>
                                </feMerge>
                            </filter>
                        </defs>
                        <path
                            d="M1892,0 L2119,44.993 L2701,45 L2701.133,63.993 L-0.16,63.993 L1.73847048e-12,45 L909,44.993 L1892,0 Z"
                            className="bmask-bgfill"
                            fill="#fbfbfb"
                            filter="url(#filter-mask5)"
                        ></path>
                        <path
                            d="M2216,44.993 L2093,55 L1882,6 L995,62 L966,42 L1892,0 L2118,44.993 L2216,44.993 L2216,44.993 Z"
                            fill="#f5811f"
                            className="bmask-customfill"
                            filter="url(#filter-mask5)"
                        ></path>
                    </svg>
                </div>
                {/*/ Bottom mask style 5 */}
            </div>
        </>
    )
}
export default Contact;