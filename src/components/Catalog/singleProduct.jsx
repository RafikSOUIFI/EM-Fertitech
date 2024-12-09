import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../../dammyData';

const SingleProduct = () => {
    const { name } = useParams();
    const product = products.find((product) => product.name === name);
    return (
        <>
            <div id="page_header" className="page-subheader site-subheader-cst" style={{ minHeight: '180px', important: true }}>
                <div className="bgback"></div>
                <div className="kl-bg-source">
                    <div
                        className="kl-bg-source__bgimage"
                        style={{
                            backgroundImage: 'url(images/ptf2.html)',
                            backgroundRepeat: 'no-repeat',
                            backgroundAttachment: 'scroll',
                            backgroundPositionX: 'center',
                            backgroundPositionY: 'center',
                            backgroundSize: 'cover',
                        }}
                    ></div>
                    <div
                        className="kl-bg-source__overlay"
                        style={{
                            background: 'rgba(0,94,176,0.8)',
                            backgroundImage:
                                'linear-gradient(to right, rgba(0,94,176,0.8) 0%, rgba(0,202,255,0.9) 100%)',
                        }}
                    ></div>
                </div>
                <div className="th-sparkles"></div>
                <div className="ph-content-wrap d-flex prod-olone">
                    <div className="container align-self-end">
                        <div className="row">
                            <div className="col-sm-12 col-md-6 col-lg-6">
                                <div className="subheader-titles">
                                    <h2 className="subheader-maintitle">{product.title}</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="kl-bottommask kl-bottommask--mask3">
                    <svg
                        width="5000px"
                        height="57px"
                        className="svgmask"
                        viewBox="0 0 5000 57"
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
                                id="filter-mask3"
                            >
                                <feOffset dx="0" dy="3" in="SourceAlpha" result="shadowOffsetInner1"></feOffset>
                                <feGaussianBlur stdDeviation="2" in="shadowOffsetInner1" result="shadowBlurInner1"></feGaussianBlur>
                                <feComposite
                                    in="shadowBlurInner1"
                                    in2="SourceAlpha"
                                    operator="arithmetic"
                                    k2="-1"
                                    k3="1"
                                    result="shadowInnerInner1"
                                ></feComposite>
                                <feColorMatrix
                                    values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.4 0"
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
                            d="M9.09383679e-13,57.0005249 L9.09383679e-13,34.0075249 L2418,34.0075249 L2434,34.0075249 C2434,34.0075249 2441.89,33.2585249 2448,31.0245249 C2454.11,28.7905249 2479,11.0005249 2479,11.0005249 L2492,2.00052487 C2492,2.00052487 2495.121,-0.0374751261 2500,0.000524873861 C2505.267,-0.0294751261 2508,2.00052487 2508,2.00052487 L2521,11.0005249 C2521,11.0005249 2545.89,28.7905249 2552,31.0245249 C2558.11,33.2585249 2566,34.0075249 2566,34.0075249 L2582,34.0075249 L5000,34.0075249 L5000,57.0005249 L2500,57.0005249 L1148,57.0005249 L9.09383679e-13,57.0005249 Z"
                            className="bmask-bgfill"
                            filter="url(#filter-mask3)"
                            fill="#fbfbfb"
                        ></path>
                    </svg>
                    <i className="fas fa-angle-down"></i>
                </div>
            </div>
            <section className="hg_section pt-40 pb-0"> 
  <div className="container">
    <div className="row">
      <div className="col-sm-12 col-md-12">
        <div className="row hg-portfolio-item mb-30">
          {/* Left side */}
          <div id="pinned-trigger" className="col-sm-12 col-md-5 col-lg-5">
            {/* Portfolio item content */}
            <div id="pinned-element" className="portfolio-item-content affixcontent mb-sm-50">
              {/* Page/Portfolio title */}
              <div className="symbol-line">
                <img src="images/iconos/agricultura-icon.png" alt="Agricultue icon" />
              </div>		
              <h1 className="page-title portfolio-item-title">Description</h1>
              <p>{product.description}</p>

              <h1 className="page-title portfolio-item-title">Avantages</h1>

              {/* Details */}
              <ul className="portfolio-item-details clearfix">
              {(product.benefits).map((benefit, index) => (
                <li key={index} className="portfolio-item-details-partners clearfix">
                  <span className="portfolio-item-details-label">{benefit}</span>
                </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right side */}
          <div className="col-sm-12 col-md-7 col-lg-7">
            {/* Portfolio item right */}
            <div className="portfolio-item-right mfp-gallery images">
              <a className="hoverLink" data-lightbox="mfp" data-mfp="image" title={product.title}>
                <span className="hoverBorderWrapper">
                  <img src= {product.img_1} className="img-fluid" alt="Product image" title={product.title} />
                  <span className="theHoverBorder"></span>
                </span>
              </a>

              {product.img_2 && <div className="hg_other_images portfolio-item-extraimages">
                <div className="portfolio-item-extraimg">
                  <a className="hoverLink" data-lightbox="mfp" data-mfp="image" title="EM•COMPOST® 20lt">
                    <span className="hoverBorderWrapper">
                      <img src= {product.img_2} className="img-fluid" alt="Product image" title={product.title} />
                      <span className="theHoverBorder"></span>
                    </span>
                  </a>
                </div>
              </div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


        </>
    )
}
export default SingleProduct;