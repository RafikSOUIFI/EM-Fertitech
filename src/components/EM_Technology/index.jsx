import React, { useEffect, useState } from 'react';

const EM_Technology = () => {
    const [opacity, setOpacity] = useState(1);
    const [transform, setTransform] = useState('translate3d(0px, 0px, 0px) scale3d(1, 1, 1)');
    const [transform_1, setTransform_1] = useState('translate3d(0px, 0px, 0px) scale3d(1, 1, 1)')
    const [openTimeLine, setOpenTimeLine] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            // Define the scroll position where the transition should start and end
            const scrollStart = 0;
            const scrollEnd = 300; // Adjust based on when you want the effect to end

            // Get the current scroll position
            const scrollPosition = window.scrollY;

            // Calculate the progress (between 0 and 1)
            let progress = (scrollPosition - scrollStart) / (scrollEnd - scrollStart);
            progress = Math.min(Math.max(progress, 0), 1); // Clamp the progress between 0 and 1

            // Interpolate opacity and transform values based on scroll progress
            const newOpacity = 1 - 0.9 * progress; // opacity goes from 1 to 0.1
            const translateY = 300 * progress; // translateY goes from 0px to 300px
            const scale = 1 + 0.5 * progress; // scale goes from 1 to 1.5

            setOpacity(newOpacity);
            setTransform(`translate3d(0px, ${translateY}px, 0px) scale3d(${scale}, ${scale}, ${scale})`);
            setTransform_1(`translate3d(0px, ${translateY * 0.66}px, 0px) scale3d(1, 1, 1)`);
        };

        // Attach the scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener on component unmount
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <div id="slideshow" className="kl-slideshow static-content__slideshow scrollme" style={{ backgroundColor: "#f8f9fa" }}>
                <div className="bgback"></div>
                <div className="th-sparkles"></div>
                <div className="kl-slideshow-inner static-content__wrapper static-content--fullscreen d-flex justif-content-center">
                    <div className="static-content__source animateme"
                        style={{
                            opacity: opacity,
                            transform: transform,
                        }}
                        data-when="span" data-from="0" data-to="0.75" data-easing="linear" data-translatey="300" data-opacity="0.1" data-scale="1.5">
                        <div className="kl-bg-source">
                            <div className="kl-bg-source__bgimage" style={{
                                backgroundImage: "url(images/rev_slider_assets/exp_bg6.jpg)",
                                backgroundRepeat: "no-repeat",
                                backgroundAttachment: "scroll",
                                backgroundPosition: "center",
                                backgroundSize: "cover"
                            }}></div>
                            <div className="kl-bg-source__overlay"></div>
                        </div>
                    </div>
                    <div className="container align-self-center">
                        <div className="kl-slideshow-safepadding sc__container animateme ptop-300"
                            style={{
                                opacity: opacity,
                                transform: transform_1,
                            }}
                            data-when="span" data-from="0" data-to="0.75" data-translatey="200" data-opacity="0.1" data-easing="linear">
                            <div className="kl-title-block">
                                <h3 className="tbk__title fs-xxxxl fw-thin black mb-20">
                                TECHNOLOGIE EM®
                                </h3>
                                <h4 className="tbk__subtitle black fw-normal">
                                Depuis 1980, nous développons une biotechnologie probiotique et naturelle.
                                </h4>
                                <h4 className="tbk__subtitle black fw-semibold w-70">
                                    “Pour une société fondée sur les principes de sécurité, faible coût, haute qualité, partage d'informations et joie.” (Dr. Teruo Higa)
                                </h4>
                            </div>
                        </div>
                    </div>
                    <a className="tonext-btn js-tonext-btn" href="#" data-endof=".kl-slideshow">
                        <span className="mouse-anim-icon"></span>
                    </a>
                </div>
            </div>
            <section className="hg_section pt-80 pb-20">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-5 wow fadeIn" data-wow-offset="300" style={{ visibility: "visible", animationName: "fadeIn" }}>
                            <img className="img-fluid" src="images/higasensei-l.jpg" alt="" />
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-7">
                            <div className="col-full d-flex">
                                <div className="row">
                                    <div className="col-md-12 col-sm-12 align-self-center wow fadeInRight" data-wow-offset="300" style={{ visibility: "visible", animationName: "fadeInRight" }}>
                                        <div className="kl-title-block text-left pb-20">
                                            <h2 className="tbk__title kl-font-alt fw-extrabold mb-30">
                                            ORIGINE DE LA TECHNOLOGIE EM®
                                            </h2>
                                        </div>
                                        <div className="text_box">
                                            <p>
                                                <strong>La Technologie EM® (biotechnologie) a été développée dans les années 1980 par le Dr Teruo Higa à Okinawa, au Japon.</strong>
                                            </p>
                                            <p>
                                            Dans son livre Une révolution pour sauver la Terre, le Dr Teruo Higa raconte sa découverte ainsi que sa vision particulière du monde et les possibilités extraordinaires offertes par la <strong>Technologie EM® (biotechnologie)</strong> pour contribuer à résoudre les problèmes de production, d'environnement et de santé grâce aux <strong>EM® (Microorganismes Efficaces®).</strong>
                                            </p>
                                            <p>
                                            La <strong>Technologie EM® (Biotechnologie)</strong> est un inoculant biologique composé de microorganismes à action symbiotique, extraits de la nature. Ces microorganismes ne sont ni nocifs, ni pathogènes, ni génétiquement modifiés, ni chimiquement synthétisés. Ils sont largement utilisés dans l'alimentation humaine et sont classés par l'<strong>OMS au niveau de biosécurité 1, étant totalement sûrs pour l'homme, les animaux et l'environnement.</strong>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="hg_section pt-20 pb-80">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-5">
                            <div className="col-full d-flex">
                                <div className="row">
                                    <div className="col-md-12 col-sm-12 align-self-center wow fadeInLeft" data-wow-offset="300" style={{ visibility: "visible", animationName: "fadeInLeft" }}>
                                        <div className="kl-title-block text-left pb-20">
                                            <h2 className="tbk__title kl-font-alt fw-extrabold mb-30">
                                            QU'EST-CE QUE LA TECHNOLOGIE EM® ?
                                            </h2>
                                        </div>
                                        <div className="text_box">
                                            <p>
                                            EM® est l'abréviation <strong>Microorganismes Efficaces®</strong>, un mélange de trois types de micro-organismes bénéfiques, aérobiques et anaérobiques, hautement efficaces: des bactéries photosynthétiques (Rhodopseudomonas spp.), des bactéries lactiques (Lactobacillus spp.) et des levures (Saccharomicetes spp.), entre autres.
                                            </p>
                                            <p>
                                            Ces micro-organismes présents dans la nature accélèrent la décomposition de la matière organique et favorisent un processus de fermentation antioxydant, éliminant les mauvaises odeurs et contribuant à la régénération et l'équilibre de l'écosystème. Cette <strong>biotechnologie probiotique et naturelle</strong> est conçue pour la restauration environnementale, la purification de l'eau, la production durable et la santé humaine.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-12 col-lg-7 wow fadeIn" data-wow-offset="100" style={{ visibility: "visible", animationName: "fadeIn" }}>
                            <div className="ptcarousel ptcarousel--frames-modern">
                                <div className="hg_general__carousel-wrapper">
                                    <div className="hg_general__carousel cfs--default js-slick" data-slick='{"infinite":true,"slidesToShow":1,"slidesToScroll":1,"autoplay":false,"autoplaySpeed":9000,"easing":"easeOutExpo","fade":true,"arrows":true,"dots":false}'>
                                        <div className="item kl-has-overlay cfs--item">
                                            <div className="img-intro">
                                                <img src="images/microorganismos/lactiques.jpg" className="img-responsive" alt="Bactéries lactiques" title="Bactéries lactiques" />
                                            </div>
                                        </div>
                                        <div className="item kl-has-overlay cfs--item">
                                            <div className="img-intro">
                                                <img src="images/microorganismos/levures.jpg" className="img-responsive" alt="Bactéries lactiques" title="Bactéries lactiques" />
                                            </div>
                                        </div>
                                        <div className="item kl-has-overlay cfs--item">
                                            <div className="img-intro">
                                                <img src="images/microorganismos/photosynthétique.jpg" className="img-responsive" alt="Bactéries photosynthétiques" title="Bactéries photosynthétiques" />
                                            </div>
                                        </div>
                                        <div className="item kl-has-overlay cfs--item">
                                            <div className="img-intro">
                                                <img src="images/microorganismos/higa.jpg" className="img-responsive" alt="Dr. Teruo Higa" title="Dr. Teruo Higa" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="menu" className="hg_section p-0">
                <div className="container-fluid no-pad-cols">
                    <div className="row">
                        <div className="col-sm-12 col-md-12">
                            <div className="media-container style2 h-400 d-flex">
                                <div className="kl-bg-source kl-bgSource-imageParallax js-KyHtmlParallax is-fixed">
                                    <div className="kl-bg-source__bgimage" style={{ backgroundImage: "url(images/bg.jpg)" }}>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-7 col-lg-7 kl-title-block align-self-center offset-1 white wow fadeInLeft" data-wow-offset="300" style={{ visibility: "visible", animationName: "fadeInLeft" }}>
                                    <h4 className="tbk__title italic">
                                    Plus de 54 usines et plus de 30 centres de recherche travaillent quotidiennement pour trouver de nouvelles applications pour cette technologie.
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="hg_section p-0">
                <div className="container-fluid no-pad-cols">
                    <div className="row">
                        <div className="col-sm-12 col-md-12">
                            <div className="media-container style2 h-400 d-flex">
                                <div className="kl-bg-source kl-bgSource-imageParallax js-KyHtmlParallax is-fixed">
                                    <div className="kl-bg-source__bgimage" style={{ backgroundImage: "url(images/bg2.jpg)" }}>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-7 col-lg-7 kl-title-block text-right right-section-large align-self-center white wow fadeInRight" data-wow-offset="300" style={{ visibility: "visible", animationName: "fadeInRight" }}>
                                    <h4 className="tbk__title italic">
                                    La Technologie EM® (biotechnologie) est utilisée dans plus de 145 pays à travers le monde.
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
{/* 
            <section className="hg_section bg-green pt-80 section--background-logo">
                <div className={`container time-line-desc ${openTimeLine ? 'is-opened' : ''}`}>
                    <div className="row">
                        <div className="col-sm-12 col-md-12">
                            <div className="kl-title-block tbk-symbol-- tbk-icon-pos--after-title text-center wow fadeInUp" data-wow-offset="300" style={{ visibility: "visible", animationName: "fadeInUp" }}>
                                <h3 className="tbk__title kl-font-alt fw-extrabold mb-30 green">
                                    LA TECNOLOGÍA EM® EN EL TIEMPO
                                </h3>
                            </div>
                            <div className="timeline_bar time-line-desc-inner wow fadeInUp" data-wow-offset="100" style={{ visibility: "visible", animationName: "fadeInUp" }}>
                                <div className="row">
                                    <div className="col-sm-12 end_timeline green">
                                        <p className="pl-0">1960 › ESTABLECIMIENTO</p>
                                    </div>
                                    <div className="col-sm-12 col-md-6 offset-md-6 green" data-align="right">
                                        <div className="timeline_box">
                                            <div className="date">1960</div>
                                            <p>
                                                El Dr. Higa estudió diversos microorganismos y descubrió la combinación óptima de microbios, nombrándolo <strong>"EM®"</strong>, un acrónimo de <strong>"Microorganismos Eficaces®”</strong>.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-6 green">
                                        <div className="timeline_box">
                                            <div className="date">1968</div>
                                            <p>
                                                El Dr. Higa comenzó el desarrollo de EM·1® y fue pionero en el uso de variedad de cepas de microbios en un cóctel líquido combinado con múltiples aplicaciones.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-6 offset-md-6 green" data-align="right">
                                        <div className="timeline_box">
                                            <div className="date">1972</div>
                                            <p>
                                                El Dr. Teruo Higa, es un prestigioso ingeniero agrícola japonés, quien descubrió <strong>La Tecnología EM® (biotecnología)</strong> mientras era profesor de horticultura en el Colegio de Agricultura de la Universidad de Ryukyus en Okinawa, Japón.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-6 green">
                                        <div className="timeline_box">
                                            <div className="date">1982</div>
                                            <p>
                                                Salió al mercado japonés el primer lote de esta producción con el nombre comercial <strong>"EM® "</strong>, para ayudar a recuperar la salud del planeta.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-6 offset-md-6 green" data-align="right">
                                        <div className="timeline_box">
                                            <div className="date">1994</div>
                                            <p>
                                                Publicó su libro <strong>“An EARTH Saving Revolution”</strong>, presentando los resultados de su investigación que perfeccionó la mezcla de organismos y que llamó <strong>Microorganismos Eficaces®” (EM®)</strong>.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-6 green">
                                        <div className="timeline_box">
                                            <div className="date">2008</div>
                                            <p>
                                                El Dr. Higa visitó Perú y ofreció conferencias en la <strong>Universidad Nacional “Santiago Antúnez de Mayolo” (Huaráz) y en la Universidad Nacional Agraria - La Molina (Lima)</strong>. Reafirmó los efectos provechosos de la Tecnología EM® (biotecnología) en la producción agraria y el medio ambiente; tal como ya se ha demostrado en 145 países.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-6 offset-md-6 green" data-align="right">
                                        <div className="timeline_box">
                                            <div className="date">2015</div>
                                            <p>
                                                Se difunde la película SOSEI (Renacimiento) del director Japonés Tetsu Shirato, que demuestra el rol crucial y potencial de los <strong>"EM®"( Microorganismos Eficaces®”)</strong> para combatir los problemas actuales de contaminación ambiental.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 end_timeline green">
                                        <p className="pl-0">PRESENTE</p>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center pt-10">
                                <a href="" className="time-line-more-toggle btn-element btn btn-success" data-target=".time-line-desc" data-target-class="is-opened" data-more-text="ver más" data-less-text="ver menos" onClick={(e) => { e.preventDefault(); setOpenTimeLine(!openTimeLine) }}>
                                    <span className="pr-5 fas fa-chevron-down"></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            <section className="hg_section--relative pt-100 pb-100">
                {/* Video Background */}
                <div className="kl-bg-source">
                    {/* Video background container */}
                    <div className="kl-video-container kl-bg-source__video">
                        {/* Video wrapper */}
                        <div
                            className="kl-video-wrapper video-grid-overlay"
                        >
                            {/* Self Hosted Video Source */}
                            <div
                                className="kl-video valign halign"
                                style={{ width: "100%", height: "100%" }}
                                data-setup='{
            "position": "absolute", 
            "loop": true, 
            "autoplay": true,
            "muted": true,
            "youtube":"P-aMS487aYA", 
            "fallback_image":"images/rev_slider_assets/exp_bg2.jpg", 
            "video_ratio": "1.7778"
          }'
                            ></div>
                            {/* Self Hosted Video Source */}
                        </div>
                        {/*/ Video wrapper */}
                    </div>
                    {/*/ Video background container (.kl-bg-source__video) */}

                    {/* Gradient overlay */}
                    <div
                        className="kl-bg-source__overlay"
                        style={{ background: "rgba(61,61,61,0.7)" }}
                    ></div>
                    {/*/ Gradient overlay */}
                </div>
                {/*/ Video Background */}

                <div
                    className="container wow fadeIn"
                    data-wow-offset="200"
                    style={{ visibility: "visible", animationName: "fadeIn" }}
                >
                    <div className="row">
                        <div className="col-md-12">
                            <div className="text-center">
                                <h4 className="fs-xxl fw-thin text-white mb-20">
                                POURQUOI UTILISER LA TECHNOLOGIE EM® ?
                                </h4>
                                <h5 className="fs-l fw-thin mb-80 text-white opacity7">
                                Voici quelques raisons.
                                </h5>
                            </div>
                            {/* /.text-center text-white */}
                        </div>
                        {/*/ .col-md-12 */}

                        <div className="col-sm-12 col-md-12 col-lg-4">
                            <div className="stg-alignleft text-center-xs mb-60">
                                {/* Icon */}
                                <i className="kl-icon fas fa-share ico-size-xxs custom-color hidden-xs"></i>

                                {/* Content */}
                                <div className="content text-white opacity9">
                                    <p>
                                    La Technologie EM® (biotechnologie) a démontré un pouvoir hautement régénérateur sur la matière organique et peut avoir diverses applications dans les domaines de l'agriculture, de l'aquaculture, de l'environnement et de la santé humaine.
                                    </p>
                                </div>
                                {/* /.content */}
                            </div>
                            {/* / stg-alignleft mb-50 */}
                        </div>
                        {/* / col-sm-12 col-md-12 col-lg-4 */}

                        <div className="col-sm-12 col-md-12 col-lg-4">
                            <div className="stg-alignleft text-center-xs mb-60">
                                {/* Icon */}
                                <i className="kl-icon fas fa-share ico-size-xxs custom-color hidden-xs"></i>

                                {/* Content */}
                                <div className="content text-white opacity9">
                                    <p>
                                    Le concentré de microorganismes de la Technologie EM® (biotechnologie) comprend des espèces aérobies (qui respirent de l'oxygène) et photosynthétiques, qui, en coexistant et en se complétant, génèrent un fort pouvoir antioxydant.
                                    </p>
                                </div>
                                {/* /.content */}
                            </div>
                            {/* /.icon-box stg-alignleft mb-50 */}
                        </div>
                        {/* / col-sm-12 col-md-12 col-lg-4 */}

                        <div className="col-sm-12 col-md-12 col-lg-4">
                            <div className="stg-alignleft text-center-xs mb-60">
                                {/* Icon */}
                                <i className="kl-icon fas fa-share ico-size-xxs custom-color hidden-xs"></i>

                                {/* Content */}
                                <div className="content text-white opacity9">
                                    <p>
                                    Ces microorganismes ne sont ni nocifs, ni pathogènes, ni génétiquement modifiés, ni chimiquement synthétisés ; c'est pourquoi la Technologie EM® (biotechnologie) constitue une excellente alternative propre pour accompagner les processus de production durable.
                                    </p>
                                </div>
                                {/* /.content */}
                            </div>
                            {/* /.icon-box stg-alignleft mb-50 */}
                        </div>
                        {/* / col-sm-12 col-md-12 col-lg-4 */}

                        <div className="col-md-12">
                            <div className="text-center text-white">
                                <span className="fs-xmall fw-thin opacity7">
                                Mais le facteur le plus important est que...
                                </span>

                                <p>
                                La Technologie EM® (biotechnologie) a pour objectif de promouvoir de nouvelles méthodes de contribution sociale, car elle est accessible à tous (rentable) et facile à appliquer.
                                </p>
                            </div>
                            {/* /.text-center text-white */}
                        </div>
                        {/* / .col-md-12 */}
                    </div>
                    {/*/ row */}
                </div>
                {/*/ container */}
            </section>
        </>
    )
}
export default EM_Technology;