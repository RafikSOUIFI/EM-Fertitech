import React from 'react';
import products from '../../assets/images/productos/allProducts.png'

const Welcome = () => {
  return (
    <section className="hg_section bg-white pt-80 pb-80">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-5 align-self-center wow fadeInLeft" data-wow-offset="300" style={{ visibility: 'visible', animationName: 'fadeInLeft' }}>
            <div className="kl-title-block clearfix text-left tbk-symbol-- tbk-icon-pos--after-title">
              <h3 className="tbk__title kl-font-alt fs-xl fw-bold">
                BIENVENUE
              </h3>
              <p>
              Bienvenue chez EM Fertitech ! Nous sommes une entreprise Tunisienne qui produit, développe et transfère la Technologie EM® (biotechnologie) pour renforcer la productivité agricole et aquacole, protéger l’environnement et veiller à la santé humaine, aujourd’hui et pour l’avenir. Nous sommes ici pour vous aider !
              </p>
              <a href="à propos de nous" rel="noopener noreferrer" className="btn-element btn btn-fullcolor" title="">
                <span>Notre culture</span>
              </a>
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-7">
            <div className="img-cultura floating" style={{ width: '80%' }}>
              <img src={products} className="stage-ibx__stage-img img-fluid" alt="Bieom" title="Bioem" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
