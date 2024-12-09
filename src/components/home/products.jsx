import React from 'react';
import {productsData} from '../../dammyData';

const Products = () => {
  return (
    <section className="hg_section pb-0">
      <div className="container-fluid">
        <div className="recentwork_carousel recentwork_carousel_v3">
          <div className="container recentwork_carousel__top-container">
            <div className="row">
              <div className="col-sm-12">
                <h3 className="recentwork_carousel__title m_title">NOS PRODUITS</h3>
                <a href="catalogue" className="btn btn-link">VOIR TOUT</a>
                <div className="hgSlickNav recentwork_carousel__controls clearfix"></div>
              </div>
            </div>
          </div>

          <div className="recentwork_carousel__crsl-wrapper">
            <div 
              className="recent_works3 recentwork_carousel__crsl js-slick" 
              data-slick='{"infinite": true,"slidesToShow": 4,"slidesToScroll": 1,"swipeToSlide": true,"autoplay": true,"autoplaySpeed": 3500,"speed": 500,"cssEase": "ease-in-out","arrows": true,"appendArrows": ".recentwork_carousel_v3 .hgSlickNav","responsive": [{"breakpoint": 1199,"settings": {"slidesToShow": 3}},{"breakpoint": 767,"settings": {"slidesToShow": 2}},{"breakpoint": 480,"settings": {"slidesToShow": 1}}]}'
            >
              {productsData.map((product) => (
                <div key={product.id} className="recent-work_carousel-item">
                  <a href={product.link} className="recentwork_carousel__link">
                    <div className="hover recentwork_carousel__hover">
                      <div>
                        <img src={product.imgSrc} alt={product.altText} title={product.title} />
                      </div>
                      <span className="hov recentwork_carousel__hov"></span>
                    </div>
                    <div className="details recentwork_carousel__details">
                      <span className="recentwork_carousel__cat">{product.category}</span>
                      <h4 className="recentwork_carousel__crsl-title">{product.title}</h4>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
