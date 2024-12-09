import React from 'react';
import "./index.css"
import slide_1 from "../../../assets/images/rev_slider_assets/banner_1.jpg";
import slide_2 from "../../../assets/images/rev_slider_assets/banner_2.jpg";
import slide_3 from "../../../assets/images/rev_slider_assets/banner_3.jpg"
const Slideshow = () => {
    const handleScrollDown = () => {
        // Scroll down by 1 viewport height
        window.scrollBy({
            top: window.innerHeight, // 1 viewport height
            behavior: "smooth",      // Smooth scrolling
        });
    };
    return (
        <div className="kl-slideshow uh_light_gray kl-revolution-slider">
            <div className="bgback"></div>
            <div
                id="rev_slider_12_1_wrapper"
                className="rev_slider_wrapper fullscreen-container"
                data-alias="overexposure-transition"
                data-source="gallery"
                style={{ background: 'transparent', padding: '0px' }}
            >
                <div
                    id="rev_slider_12_1"
                    className="rev_slider fullscreenbanner"
                    style={{ display: 'none' }}
                    data-version="5.4.6.3"
                >
                    <ul>
                        <li
                            data-index="rs-32"
                            data-transition="brightnesscross"
                            data-slotamount="default"
                            data-hideafterloop="0"
                            data-hideslideonmobile="off"
                            data-easein="default"
                            data-easeout="default"
                            data-masterspeed="default"
                            data-thumb="images/rev_slider_assets/100x50_exp_bg1.jpg"
                            data-rotate="0"
                            data-saveperformance="off"
                            data-title="Slide"
                            data-param1=""
                            data-param2=""
                            data-param3=""
                            data-param4=""
                            data-param5=""
                            data-param6=""
                            data-param7=""
                            data-param8=""
                            data-param9=""
                            data-param10=""
                            data-description=""
                        >
                            <img
                                src={slide_1}
                                alt=""
                                data-lazyload="images/rev_slider_assets/exp_bg1-agro.jpg"
                                data-bgposition="center center"
                                data-bgfit="cover"
                                data-bgrepeat="no-repeat"
                                data-bgparallax="6"
                                className="rev-slidebg"
                                data-no-retina
                            />

                            <div
                                id="rrzm_32"
                                className="rev_row_zone rev_row_zone_middle"
                                style={{ zIndex: 11 }}
                            >
                                {/* LAYER NR. 1 */}
                                <div
                                    className="tp-caption rs-parallaxlevel-4"
                                    id="slide-32-layer-7"
                                    data-x="['left','left','left','left']"
                                    data-hoffset="['100','100','100','100']"
                                    data-y="['middle','middle','middle','middle']"
                                    data-voffset="['0','0','0','0']"
                                    data-width="none"
                                    data-height="none"
                                    data-whitespace="nowrap"
                                    data-type="row"
                                    data-columnbreak="2"
                                    data-responsive_offset="on"
                                    data-responsive="on"
                                    data-frames='[{"delay":10,"speed":300,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                                    data-margintop="[0,0,0,0]"
                                    data-marginright="[0,0,0,0]"
                                    data-marginbottom="[0,0,0,0]"
                                    data-marginleft="[0,0,0,0]"
                                    data-textalign="['inherit','inherit','inherit','inherit']"
                                    data-paddingtop="[0,0,0,0]"
                                    data-paddingright="[50,50,30,30]"
                                    data-paddingbottom="[0,0,0,0]"
                                    data-paddingleft="[50,50,30,30]"
                                    style={{
                                        zIndex: 5,
                                        whiteSpace: 'nowrap',
                                        fontSize: '20px',
                                        lineHeight: '22px',
                                        fontWeight: 400,
                                        color: '#ffffff',
                                        letterSpacing: '0px'
                                    }}
                                >
                                    {/* LAYER NR. 2 */}
                                    <div
                                        className="tp-caption"
                                        id="slide-32-layer-8"
                                        data-x="['left','left','left','left']"
                                        data-hoffset="['100','100','100','100']"
                                        data-y="['top','top','top','top']"
                                        data-voffset="['100','100','100','100']"
                                        data-width="none"
                                        data-height="none"
                                        data-whitespace="nowrap"
                                        data-type="column"
                                        data-responsive_offset="on"
                                        data-responsive="off"
                                        data-frames='[{"delay":"+0","speed":300,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                                        data-columnwidth="50%"
                                        data-verticalalign="top"
                                        data-margintop="[0,0,0,0]"
                                        data-marginright="[0,0,0,0]"
                                        data-marginbottom="[0,0,0,0]"
                                        data-marginleft="[0,0,0,0]"
                                        data-textalign="['inherit','inherit','inherit','inherit']"
                                        data-paddingtop="[0,0,0,0]"
                                        data-paddingright="[20,20,0,0]"
                                        data-paddingbottom="[0,0,0,0]"
                                        data-paddingleft="[0,0,0,0]"
                                        style={{ zIndex: 6, width: "100%" }}
                                    >
                                        {/* LAYER NR. 3 */}
                                        <div
                                            className="tp-caption tp-resizeme"
                                            id="slide-32-layer-1"
                                            data-x="['left','left','left','left']"
                                            data-hoffset="['0','50','50','40']"
                                            data-y="['top','top','top','top']"
                                            data-voffset="['0','170','170','167']"
                                            data-fontsize="['60','50','40','40']"
                                            data-lineheight="['90','75','60','60']"
                                            data-letterspacing="['15','15','10','7']"
                                            data-width="['100%','100%','561','401']"
                                            data-height="none"
                                            data-whitespace="normal"
                                            data-type="text"
                                            data-responsive_offset="on"
                                            data-frames='[{"delay":"+290","split":"chars","splitdelay":0.05,"speed":2000,"split_direction":"forward","frame":"0","from":"opacity:0;","color":"#000000","to":"o:1;","ease":"Power4.easeInOut"},{"delay":"wait","speed":1000,"frame":"999","color":"transparent","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                                            data-margintop="[0,0,0,0]"
                                            data-marginright="[0,0,0,0]"
                                            data-marginbottom="[30,31,26,26]"
                                            data-marginleft="[0,0,0,0]"
                                            data-textalign="['inherit','inherit','inherit','inherit']"
                                            data-paddingtop="[0,0,0,0]"
                                            data-paddingright="[0,0,0,0]"
                                            data-paddingbottom="[0,0,0,0]"
                                            data-paddingleft="[0,0,0,0]"
                                            style={{
                                                zIndex: 8,
                                                minWidth: '100%',
                                                maxWidth: '100%',
                                                whiteSpace: 'normal',
                                                fontSize: '60px',
                                                lineHeight: '90px',
                                                fontWeight: 400,
                                                color: '#007e43',
                                                letterSpacing: '15px',
                                                display: 'block',
                                                fontFamily: "'Poppins', sans-serif",
                                                textTransform: 'uppercase'
                                            }}
                                        >
                                            AGRICULTURE DURABLE
                                        </div>
                                        {/* LAYER NR. 4 */}
                                        <div
                                            className="tp-caption tp-shape tp-shapewrapper tp-resizeme"
                                            id="slide-32-layer-3"
                                            data-x="['left','left','left','left']"
                                            data-hoffset="['0','53','53','42']"
                                            data-y="['top','top','top','top']"
                                            data-voffset="['0','440','498','373']"
                                            data-width="50"
                                            data-height="1"
                                            data-whitespace="['normal','nowrap','nowrap','nowrap']"
                                            data-type="shape"
                                            data-responsive_offset="on"
                                            data-frames='[{"delay":"+1490","speed":2000,"frame":"0","from":"sX:0;opacity:0;","to":"o:1;","ease":"Power4.easeInOut"},{"delay":"wait","speed":1000,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                                            data-margintop="[0,0,0,0]"
                                            data-marginright="[0,0,0,0]"
                                            data-marginbottom="[0,0,0,0]"
                                            data-marginleft="[0,0,0,0]"
                                            data-textalign="['inherit','inherit','inherit','inherit']"
                                            data-paddingtop="[0,0,0,0]"
                                            data-paddingright="[0,0,0,0]"
                                            data-paddingbottom="[0,0,0,0]"
                                            data-paddingleft="[0,0,0,0]"
                                            style={{ zIndex: 9, display: "block", backgroundColor: "rgb(0,0,0)" }}
                                        ></div>
                                    </div>
                                    {/* LAYER NR. 5 */}
                                    <div
                                        className="tp-caption"
                                        id="slide-32-layer-9"
                                        data-x="['left','left','left','left']"
                                        data-hoffset="['100','100','100','100']"
                                        data-y="['top','top','top','top']"
                                        data-voffset="['100','100','100','100']"
                                        data-width="none"
                                        data-height="none"
                                        data-whitespace="nowrap"
                                        data-type="column"
                                        data-responsive_offset="on"
                                        data-responsive="off"
                                        data-frames='[{"delay":"+0","speed":300,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                                        data-columnwidth="10%"
                                        data-verticalalign="top"
                                        data-margintop="[0,0,0,0]"
                                        data-marginright="[0,0,0,0]"
                                        data-marginbottom="[0,0,0,0]"
                                        data-marginleft="[0,0,0,0]"
                                        data-textalign="['inherit','inherit','inherit','inherit']"
                                        data-paddingtop="[0,0,0,0]"
                                        data-paddingright="[0,0,0,0]"
                                        data-paddingbottom="[0,0,0,0]"
                                        data-paddingleft="[0,0,0,0]"
                                        style={{ zIndex: 10, width: "100%" }}
                                    ></div>
                                </div>
                                {/* LAYER NR. 6 */}
                                <div
                                    className="tp-caption rs-parallaxlevel-5"
                                    id="slide-32-layer-10"
                                    data-x="['left','left','left','left']"
                                    data-hoffset="['100','100','100','100']"
                                    data-y="['middle','middle','middle','middle']"
                                    data-voffset="['0','0','0','0']"
                                    data-width="none"
                                    data-height="none"
                                    data-whitespace="nowrap"
                                    data-type="row"
                                    data-columnbreak="2"
                                    data-responsive_offset="on"
                                    data-responsive="on"
                                    data-frames='[{"delay":10,"speed":300,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                                    data-margintop="[0,0,0,0]"
                                    data-marginright="[0,0,0,0]"
                                    data-marginbottom="[0,0,0,0]"
                                    data-marginleft="[0,0,0,0]"
                                    data-textalign="['inherit','inherit','inherit','inherit']"
                                    data-paddingtop="[0,0,0,0]"
                                    data-paddingright="[50,50,30,30]"
                                    data-paddingbottom="[0,0,0,0]"
                                    data-paddingleft="[50,50,30,30]"
                                    style={{
                                        zIndex: 11,
                                        whiteSpace: 'nowrap',
                                        fontSize: '20px',
                                        lineHeight: '22px',
                                        fontWeight: 400,
                                        color: '#ffffff',
                                        letterSpacing: '0px'
                                    }}
                                >
                                    {/* LAYER NR. 7 */}
                                    <div
                                        className="tp-caption"
                                        id="slide-32-layer-11"
                                        data-x="['left','left','left','left']"
                                        data-hoffset="['100','100','100','100']"
                                        data-y="['top','top','top','top']"
                                        data-voffset="['100','100','100','100']"
                                        data-width="none"
                                        data-height="none"
                                        data-whitespace="nowrap"
                                        data-type="column"
                                        data-responsive_offset="on"
                                        data-responsive="off"
                                        data-frames='[{"delay":"+0","speed":300,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                                        data-columnwidth="50%"
                                        data-verticalalign="top"
                                        data-margintop="[0,0,0,0]"
                                        data-marginright="[0,0,0,0]"
                                        data-marginbottom="[0,0,0,0]"
                                        data-marginleft="[0,0,0,0]"
                                        data-textalign="['inherit','inherit','inherit','inherit']"
                                        data-paddingtop="[0,0,0,0]"
                                        data-paddingright="[0,0,0,0]"
                                        data-paddingbottom="[0,0,0,0]"
                                        data-paddingleft="[0,0,0,0]"
                                        style={{ zIndex: 12, width: "100%" }}
                                    ></div>

                                    {/* LAYER NR. 8 */}
                                    <div
                                        className="tp-caption"
                                        id="slide-32-layer-12"
                                        data-x="['left','left','left','left']"
                                        data-hoffset="['100','100','100','100']"
                                        data-y="['top','top','top','top']"
                                        data-voffset="['100','100','100','100']"
                                        data-width="none"
                                        data-height="none"
                                        data-whitespace="nowrap"
                                        data-type="column"
                                        data-responsive_offset="on"
                                        data-responsive="off"
                                        data-frames='[{"delay":"+0","speed":300,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                                        data-columnwidth="50%"
                                        data-verticalalign="top"
                                        data-margintop="[0,0,0,0]"
                                        data-marginright="[0,0,0,0]"
                                        data-marginbottom="[0,0,0,0]"
                                        data-marginleft="[0,0,0,0]"
                                        data-textalign="['inherit','inherit','inherit','inherit']"
                                        data-paddingtop="[0,0,0,0]"
                                        data-paddingright="[0,0,0,0]"
                                        data-paddingbottom="[0,0,0,0]"
                                        data-paddingleft="[20,20,0,0]"
                                        style={{ zIndex: 13, width: "100%" }}
                                    >
                                        {/* LAYER NR. 9 */}
                                        <div
                                            className="tp-caption tp-resizeme"
                                            id="slide-32-layer-4"
                                            data-x="['left','left','left','left']"
                                            data-hoffset="['0','540','814','633']"
                                            data-y="['top','top','top','top']"
                                            data-voffset="['0','440','410','298']"
                                            data-width="100%"
                                            data-height="none"
                                            data-whitespace="normal"
                                            data-type="text"
                                            data-responsive_offset="on"
                                            data-frames='[{"delay":"+1990","speed":2000,"frame":"0","from":"opacity:0;","color":"#f5811f","to":"o:1;","ease":"Power4.easeInOut"},{"delay":"wait","speed":1000,"frame":"999","color":"transparent","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                                            data-margintop="[0,0,40,40]"
                                            data-marginright="[0,0,0,0]"
                                            data-marginbottom="[40,40,40,40]"
                                            data-marginleft="[0,0,0,0]"
                                            data-textalign="['inherit','inherit','inherit','inherit']"
                                            data-paddingtop="[0,0,0,0]"
                                            data-paddingright="[0,0,0,0]"
                                            data-paddingbottom="[0,0,0,0]"
                                            data-paddingleft="[0,0,0,0]"
                                            style={{
                                                zIndex: 14,
                                                minWidth: "100%",
                                                maxWidth: "100%",
                                                whiteSpace: "normal",
                                                fontSize: "15px!important",
                                                lineHeight: "30px",
                                                fontWeight: 700,
                                                color: "#000000",
                                                letterSpacing: "3px",
                                                display: "block",
                                                fontFamily: "'Poppins', sans-serif",
                                                textTransform: "uppercase",
                                            }}
                                        >

                                            <p className='slide_text'>
                                                Des sols sains constituent la base de la production d'aliments sains.
                                            </p>
                                        </div>

                                        {/* LAYER NR. 10 */}

                                        <a
                                            href='agriculture'
                                            className="tp-caption rev-btn tp-resizeme"
                                            target="_self"
                                            id="slide-32-layer-5"
                                            data-x="['left','left','left','left']"
                                            data-hoffset="['0','540','53','42']"
                                            data-y="['top','top','bottom','bottom']"
                                            data-voffset="['0','600','53','42']"
                                            data-width="none"
                                            data-height="none"
                                            data-whitespace="['normal','nowrap','nowrap','nowrap']"
                                            data-type="button"
                                            data-actions=""
                                            data-responsive_offset="on"
                                            data-frames='[{"delay":"+1990","speed":2000,"frame":"0","from":"opacity:0;fbr:0%;","to":"o:1;fbr:100;","ease":"Power4.easeInOut"},{"delay":"wait","speed":2000,"frame":"999","to":"opacity:0;fbr:0%;","ease":"Power4.easeInOut"},{"frame":"hover","speed":"500","ease":"Power3.easeInOut","to":"o:1;rX:0;rY:0;rZ:0;z:0;fbr:90%;","style":"c:rgba(255,255,255,1);bs:solid;bw:0 0 0 0;"}]'
                                            data-margintop="[0,0,0,0]"
                                            data-marginright="[0,0,0,0]"
                                            data-marginbottom="[0,0,0,0]"
                                            data-marginleft="[0,0,0,0]"
                                            data-textalign="['inherit','inherit','inherit','inherit']"
                                            data-paddingtop="[0,0,0,0]"
                                            data-paddingright="[0,0,0,0]"
                                            data-paddingbottom="[0,0,0,0]"
                                            data-paddingleft="[0,0,0,0]"
                                            style={{
                                                zIndex: 15,
                                                whiteSpace: 'normal',
                                                fontSize: '15px',
                                                lineHeight: '60px',
                                                fontWeight: 400,
                                                color: 'rgba(255, 255, 255, 1)',
                                                letterSpacing: '5px',
                                                display: 'inline-block',
                                                fontFamily: "'Poppins', sans-serif",
                                                textTransform: 'uppercase',
                                                backgroundColor: 'rgb(229, 69, 43)',
                                                borderColor: 'rgba(0, 0, 0, 1)',
                                                outline: 'none',
                                                boxShadow: 'none',
                                                boxSizing: 'border-box',
                                                MozBoxSizing: 'border-box',
                                                WebkitBoxSizing: 'border-box',
                                                cursor: 'pointer',
                                                textDecoration: 'none'
                                            }}
                                        >
                                            <p className='slide_button'>savoir plus</p>
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </li>
                        <li
                            data-index="rs-33"
                            data-transition="brightnesscross"
                            data-slotamount="default"
                            data-hideafterloop="0"
                            data-hideslideonmobile="off"
                            data-easein="default"
                            data-easeout="default"
                            data-masterspeed="default"
                            data-thumb="images/rev_slider_assets/100x50_exp_bg5.jpg"
                            data-rotate="0"
                            data-saveperformance="off"
                            data-title="Slide"
                            data-param1=""
                            data-param2=""
                            data-param3=""
                            data-param4=""
                            data-param5=""
                            data-param6=""
                            data-param7=""
                            data-param8=""
                            data-param9=""
                            data-param10=""
                            data-description=""
                        >
                            <img
                                src={slide_2}
                                alt=""
                                data-lazyload="images/rev_slider_assets/exp_bg2-animal.jpg"
                                data-bgposition="center center"
                                data-bgfit="cover"
                                data-bgrepeat="no-repeat"
                                data-bgparallax="6"
                                className="rev-slidebg"
                                data-no-retina
                            />
                            <div id="rrzm_33" className="rev_row_zone rev_row_zone_middle" style={{ zIndex: 11 }}>
                                {/* LAYER NR. 12 */}
                                <div
                                    className="tp-caption rs-parallaxlevel-4"
                                    id="slide-33-layer-7"
                                    data-x="['left','left','left','left']"
                                    data-y="['middle','middle','middle','middle']"
                                    data-voffset="['0','0','0','0']"
                                    data-width="none"
                                    data-height="none"
                                    data-whitespace="nowrap"
                                    data-type="row"
                                    data-columnbreak="2"
                                    data-responsive_offset="on"
                                    data-responsive="off"
                                    data-frames='[{"delay":10,"speed":300,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                                    data-margintop="[0,0,0,0]"
                                    data-marginright="[0,0,0,0]"
                                    data-marginbottom="[0,0,0,0]"
                                    data-marginleft="[0,0,0,0]"
                                    data-paddingtop="[0,0,0,0]"
                                    data-paddingright="[30,30,30,30]"
                                    data-paddingbottom="[0,0,0,0]"
                                    style={{
                                        zIndex: 5,
                                        whiteSpace: "nowrap",
                                        fontSize: "20px",
                                        lineHeight: "22px",
                                        fontWeight: 400,
                                        color: "#ffffff",
                                        letterSpacing: "0px"
                                    }}
                                >
                                    {/* LAYER NR. 13 */}
                                    <div
                                        className="tp-caption"
                                        id="slide-33-layer-8"
                                        data-x="['left','left','left','left']"
                                        data-hoffset="['100','100','100','100']"
                                        data-y="['top','top','top','top']"
                                        data-voffset="['100','100','100','100']"
                                        data-width="none"
                                        data-height="none"
                                        data-whitespace="nowrap"
                                        data-type="column"
                                        data-responsive_offset="on"
                                        data-responsive="off"
                                        data-frames='[{"delay":"+0","speed":300,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                                        data-columnwidth="90%"
                                        data-verticalalign="top"
                                        data-margintop="[0,0,0,0]"
                                        data-marginright="[0,0,0,0]"
                                        data-marginbottom="[0,0,0,0]"
                                        data-marginleft="[0,0,0,0]"
                                        data-textalign="['inherit','inherit','inherit','inherit']"
                                        data-paddingtop="[0,0,0,0]"
                                        data-paddingright="[20,20,0,0]"
                                        data-paddingbottom="[0,0,0,0]"
                                        data-paddingleft="[0,0,0,0]"
                                        style={{
                                            zIndex: 6,
                                            width: "100%"
                                        }}
                                    >
                                        {/* LAYER NR. 15 */}
                                        <div
                                            className="tp-caption tp-resizeme"
                                            id="slide-33-layer-1"
                                            data-x="['left','left','left','left']"
                                            data-hoffset="['0','50','50','40']"
                                            data-y="['top','top','top','top']"
                                            data-voffset="['0','170','170','167']"
                                            data-fontsize="['60','50','40','40']"
                                            data-lineheight="['90','75','60','60']"
                                            data-letterspacing="['15','15','10','7']"
                                            data-width="['100%','100%','561','401']"
                                            data-height="none"
                                            data-whitespace="normal"
                                            data-type="text"
                                            data-responsive_offset="on"
                                            data-frames='[{"delay":"+290","split":"chars","splitdelay":0.05000000000000000277555756156289135105907917022705078125,"speed":2000,"split_direction":"forward","frame":"0","from":"opacity:0;","color":"#000000","to":"o:1;","ease":"Power4.easeInOut"},{"delay":"wait","speed":1000,"frame":"999","color":"transparent","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                                            data-margintop="[0,0,0,0]"
                                            data-marginright="[0,0,0,0]"
                                            data-marginbottom="[30,31,26,26]"
                                            data-marginleft="[0,0,0,0]"
                                            data-textalign="['inherit','inherit','inherit','inherit']"
                                            data-paddingtop="[0,0,0,0]"
                                            data-paddingright="[0,0,0,0]"
                                            data-paddingbottom="[0,0,0,0]"
                                            data-paddingleft="[0,0,0,0]"
                                            style={{
                                                zIndex: 8,
                                                minWidth: "100%",
                                                maxWidth: "100%",
                                                whiteSpace: "normal",
                                                fontSize: "60px",
                                                lineHeight: "90px",
                                                fontWeight: 400,
                                                color: "#007e43",
                                                letterSpacing: "15px",
                                                display: "block",
                                                fontFamily: "'Poppins', sans-serif",
                                                textTransform: "uppercase"
                                            }}
                                        >
                                            PRODUCTION ANIMALE
                                        </div>
                                        <div
                                            className="tp-caption tp-shape tp-shapewrapper tp-resizeme"
                                            id="slide-33-layer-3"
                                            data-x="['left','left','left','left']"
                                            data-hoffset="['0','53','53','42']"
                                            data-y="['top','top','top','top']"
                                            data-voffset="['0','440','498','373']"
                                            data-width="50"
                                            data-height="1"
                                            data-whitespace="['normal','nowrap','nowrap','nowrap']"
                                            data-type="shape"
                                            data-responsive_offset="on"
                                            data-frames='[{"delay":"+1490","speed":2000,"frame":"0","from":"sX:0;opacity:0;","to":"o:1;","ease":"Power4.easeInOut"},{"delay":"wait","speed":1000,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                                            data-margintop="[0,0,0,0]"
                                            data-marginright="[0,0,0,0]"
                                            data-marginbottom="[0,0,0,0]"
                                            data-marginleft="[0,0,0,0]"
                                            data-textalign="['inherit','inherit','inherit','inherit']"
                                            data-paddingtop="[0,0,0,0]"
                                            data-paddingright="[0,0,0,0]"
                                            data-paddingbottom="[0,0,0,0]"
                                            data-paddingleft="[0,0,0,0]"
                                            style={{
                                                zIndex: 9,
                                                display: "block",
                                                backgroundColor: "rgb(0,0,0)"
                                            }}
                                        >
                                        </div>
                                    </div>
                                    {/* LAYER NR. 17 */}
                                    <div
                                        className="tp-caption"
                                        id="slide-33-layer-9"
                                        data-x="['left','left','left','left']"
                                        data-hoffset="['100','100','100','100']"
                                        data-y="['top','top','top','top']"
                                        data-voffset="['100','100','100','100']"
                                        data-width="none"
                                        data-height="none"
                                        data-whitespace="nowrap"
                                        data-type="column"
                                        data-responsive_offset="on"
                                        data-responsive="off"
                                        data-frames='[{"delay":"+0","speed":300,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                                        data-columnwidth="50%"
                                        data-verticalalign="top"
                                        data-margintop="[0,0,0,0]"
                                        data-marginright="[0,0,0,0]"
                                        data-marginbottom="[0,0,0,0]"
                                        data-marginleft="[0,0,0,0]"
                                        data-textalign="['inherit','inherit','inherit','inherit']"
                                        data-paddingtop="[0,0,0,0]"
                                        data-paddingright="[0,0,0,0]"
                                        data-paddingbottom="[0,0,0,0]"
                                        data-paddingleft="[0,0,0,0]"
                                        style={{
                                            zIndex: 10,
                                            width: "100%"
                                        }}
                                    >
                                    </div>
                                </div>
                                {/* LAYER NR. 18 */}
                                <div
                                    className="tp-caption rs-parallaxlevel-5"
                                    id="slide-33-layer-10"
                                    data-x="['left','left','left','left']"
                                    data-hoffset="['100','100','100','100']"
                                    data-y="['middle','middle','middle','middle']"
                                    data-voffset="['0','0','0','0']"
                                    data-width="none"
                                    data-height="none"
                                    data-whitespace="nowrap"
                                    data-type="row"
                                    data-columnbreak="2"
                                    data-responsive_offset="on"
                                    data-responsive="off"
                                    data-frames='[{"delay":10,"speed":300,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                                    data-margintop="[0,0,0,0]"
                                    data-marginright="[0,0,0,0]"
                                    data-marginbottom="[0,0,0,0]"
                                    data-marginleft="[0,0,0,0]"
                                    data-textalign="['inherit','inherit','inherit','inherit']"
                                    data-paddingtop="[0,0,0,0]"
                                    data-paddingright="[50,50,30,30]"
                                    data-paddingbottom="[0,0,0,0]"
                                    data-paddingleft="[50,50,30,30]"
                                    style={{
                                        zIndex: 11,
                                        whiteSpace: 'nowrap',
                                        fontSize: '20px',
                                        lineHeight: '22px',
                                        fontWeight: 400,
                                        color: '#ffffff',
                                        letterSpacing: '0px'
                                    }}
                                >
                                    <div
                                        className="tp-caption"
                                        id="slide-33-layer-11"
                                        data-x="['left','left','left','left']"
                                        data-hoffset="['100','100','100','100']"
                                        data-y="['top','top','top','top']"
                                        data-voffset="['100','100','100','100']"
                                        data-width="none"
                                        data-height="none"
                                        data-whitespace="nowrap"
                                        data-type="column"
                                        data-responsive_offset="on"
                                        data-responsive="off"
                                        data-frames='[{"delay":"+0","speed":300,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                                        data-columnwidth="50%"
                                        data-verticalalign="top"
                                        data-margintop="[0,0,0,0]"
                                        data-marginright="[0,0,0,0]"
                                        data-marginbottom="[0,0,0,0]"
                                        data-marginleft="[0,0,0,0]"
                                        data-textalign="['inherit','inherit','inherit','inherit']"
                                        data-paddingtop="[0,0,0,0]"
                                        data-paddingright="[0,0,0,0]"
                                        data-paddingbottom="[0,0,0,0]"
                                        data-paddingleft="[0,0,0,0]"
                                        style={{ zIndex: 12, width: '100%' }}
                                    >
                                    </div>
                                    {/* LAYER NR. 20 */}
                                    <div
                                        className="tp-caption"
                                        id="slide-33-layer-12"
                                        data-x="['left','left','left','left']"
                                        data-hoffset="['100','100','100','100']"
                                        data-y="['top','top','top','top']"
                                        data-voffset="['100','100','100','100']"
                                        data-width="none"
                                        data-height="none"
                                        data-whitespace="nowrap"
                                        data-type="column"
                                        data-responsive_offset="on"
                                        data-responsive="off"
                                        data-frames='[{"delay":"+0","speed":300,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                                        data-columnwidth="50%"
                                        data-verticalalign="top"
                                        data-margintop="[0,0,0,0]"
                                        data-marginright="[0,0,0,0]"
                                        data-marginbottom="[0,0,0,0]"
                                        data-marginleft="[0,0,0,0]"
                                        data-textalign="['inherit','inherit','inherit','inherit']"
                                        data-paddingtop="[0,0,0,0]"
                                        data-paddingright="[0,0,0,0]"
                                        data-paddingbottom="[0,0,0,0]"
                                        data-paddingleft="[20,20,0,0]"
                                        style={{ zIndex: 13, width: '100%' }}
                                    >
                                        {/* LAYER NR. 21 */}
                                        <div
                                            className="tp-caption tp-resizeme"
                                            id="slide-33-layer-4"
                                            data-x="['left','left','left','left']"
                                            data-hoffset="['0','540','814','633']"
                                            data-y="['top','top','top','top']"
                                            data-voffset="['0','440','410','298']"
                                            data-fontsize="['15','14','14','14']"
                                            data-width="100%"
                                            data-height="none"
                                            data-whitespace="normal"
                                            data-type="text"
                                            data-responsive_offset="on"
                                            data-frames='[{"delay":"+1990","speed":2000,"frame":"0","from":"opacity:0;","color":"#f5811f","to":"o:1;","ease":"Power4.easeInOut"},{"delay":"wait","speed":1000,"frame":"999","color":"transparent","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                                            data-margintop="[0,0,40,40]"
                                            data-marginright="[0,0,0,0]"
                                            data-marginbottom="[40,40,40,40]"
                                            data-marginleft="[0,0,0,0]"
                                            data-textalign="['inherit','inherit','inherit','inherit']"
                                            data-paddingtop="[0,0,0,0]"
                                            data-paddingright="[0,0,0,0]"
                                            data-paddingbottom="[0,0,0,0]"
                                            data-paddingleft="[0,0,0,0]"
                                            style={{
                                                zIndex: 14,
                                                minWidth: '100%',
                                                maxWidth: '100%',
                                                whiteSpace: 'normal',
                                                fontSize: '15px !important',
                                                lineHeight: '30px',
                                                fontWeight: 700,
                                                color: '#000000',
                                                letterSpacing: '3px',
                                                display: 'block',
                                                fontFamily: "'Poppins', sans-serif",
                                                textTransform: 'uppercase',
                                            }}
                                        >
                                            Améliore la digestibilité et l'utilisation des minéraux et, par conséquent, le gain de poids des animaux.
                                        </div>
                                        {/* LAYER NR. 22 */}
                                        <a
                                            href='elevage'
                                            className="tp-caption rev-btn tp-resizeme"
                                            target="_self"
                                            id="slide-34-layer-5"
                                            data-x="['left','left','left','left']"
                                            data-hoffset="['0','540','53','42']"
                                            data-y="['top','top','bottom','bottom']"
                                            data-voffset="['0','600','53','42']"
                                            data-width="none"
                                            data-height="none"
                                            data-whitespace="['normal','nowrap','nowrap','nowrap']"
                                            data-type="button"
                                            data-actions=""
                                            data-responsive_offset="on"
                                            data-frames='[{"delay":"+1990","speed":2000,"frame":"0","from":"opacity:0;fbr:0%;","to":"o:1;fbr:100;","ease":"Power4.easeInOut"},{"delay":"wait","speed":2000,"frame":"999","to":"opacity:0;fbr:0%;","ease":"Power4.easeInOut"},{"frame":"hover","speed":"500","ease":"Power3.easeInOut","to":"o:1;rX:0;rY:0;rZ:0;z:0;fbr:90%;","style":"c:rgba(255,255,255,1);bs:solid;bw:0 0 0 0;"}]'
                                            data-margintop="[0,0,0,0]"
                                            data-marginright="[0,0,0,0]"
                                            data-marginbottom="[0,0,0,0]"
                                            data-marginleft="[0,0,0,0]"
                                            data-textalign="['inherit','inherit','inherit','inherit']"
                                            data-paddingtop="[0,0,0,0]"
                                            data-paddingright="[50,50,50,50]"
                                            data-paddingbottom="[0,0,0,0]"
                                            data-paddingleft="[50,50,50,50]"
                                            style={{
                                                zIndex: 15,
                                                whiteSpace: 'normal',
                                                fontSize: '15px',
                                                lineHeight: '60px',
                                                fontWeight: 400,
                                                color: 'rgba(255,255,255,1)',
                                                letterSpacing: '5px',
                                                display: 'inline-block',
                                                fontFamily: "'Poppins', sans-serif",
                                                textTransform: 'uppercase',
                                                backgroundColor: 'rgb(229,69,43)',
                                                borderColor: 'rgba(0,0,0,1)',
                                                outline: 'none',
                                                boxShadow: 'none',
                                                boxSizing: 'border-box',
                                                cursor: 'pointer',
                                                textDecoration: 'none',
                                            }}
                                        >
                                            savoir plus
                                        </a>
                                    </div>
                                </div>
                            </div>

                        </li>
                        <li
                            data-index="rs-34"
                            data-transition="brightnesscross"
                            data-slotamount="default"
                            data-hideafterloop="0"
                            data-hideslideonmobile="off"
                            data-easein="default"
                            data-easeout="default"
                            data-masterspeed="default"
                            data-thumb="images/rev_slider_assets/100x50_exp_bg2.jpg"
                            data-rotate="0"
                            data-saveperformance="off"
                            data-title="Slide"
                            data-param1=""
                            data-param2=""
                            data-param3=""
                            data-param4=""
                            data-param5=""
                            data-param6=""
                            data-param7=""
                            data-param8=""
                            data-param9=""
                            data-param10=""
                            data-description=""
                        >
                            {/* MAIN IMAGE */}
                            <img
                                src={slide_3}
                                alt=""
                                data-lazyload="images/rev_slider_assets/exp_bg8-ambiente.jpg"
                                data-bgposition="center center"
                                data-bgfit="cover"
                                data-bgrepeat="no-repeat"
                                data-bgparallax="6"
                                className="rev-slidebg"
                                data-no-retina
                            />
                            <div id="rrzm_34" className="rev_row_zone rev_row_zone_middle" style={{ zIndex: 11 }}>
                                {/* LAYER NR. 23 */}
                                <div className="tp-caption rs-parallaxlevel-4" id="slide-34-layer-7" data-x="['left','left','left','left']" data-hoffset="['100','100','100','100']" data-y="['top','top','top','top']" data-voffset="['0','0','0','0']" data-width="none" data-height="none" data-whitespace="nowrap" data-type="row" data-columnbreak="2" data-responsive_offset="on" data-responsive="off" data-frames='[{"delay":10,"speed":300,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]' data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]" data-marginleft="[0,0,0,0]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[50,50,30,30]" data-paddingbottom="[0,0,0,0]" style={{ zIndex: 5, whiteSpace: 'nowrap', fontSize: '20px', lineHeight: '22px', fontWeight: 400, color: '#ffffff', letterSpacing: '0px' }}>
                                    {/* LAYER NR. 24 */}
                                    <div className="tp-caption" id="slide-34-layer-8" data-x="['left','left','left','left']" data-hoffset="['100','100','100','100']" data-y="['top','top','top','top']" data-voffset="['100','100','100','100']" data-width="none" data-height="none" data-whitespace="nowrap" data-type="column" data-responsive_offset="on" data-responsive="off" data-frames='[{"delay":"+0","speed":300,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]' data-columnwidth="100%" data-verticalalign="top" data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]" data-marginleft="[0,0,0,0]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[20,20,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 6, width: '100%' }}>
                                        {/* LAYER NR. 26 */}
                                        <div className="tp-caption tp-resizeme" id="slide-34-layer-1" data-x="['left','left','left','left']" data-hoffset="['0','0','0','40']" data-y="['top','top','top','top']" data-voffset="['0','170','170','167']" data-fontsize="['60','50','40','40']" data-lineheight="['90','75','60','60']" data-letterspacing="['15','15','10','7']" data-width="['100%','100%','561','401']" data-height="none" data-whitespace="normal" data-type="text" data-responsive_offset="on" data-frames='[{"delay":"+290","split":"chars","splitdelay":0.05000000000000000277555756156289135105907917022705078125,"speed":2000,"split_direction":"forward","frame":"0","from":"opacity:0;","color":"#000000","to":"o:1;","ease":"Power4.easeInOut"},{"delay":"wait","speed":1000,"frame":"999","color":"transparent","to":"opacity:0;","ease":"Power3.easeInOut"}]' data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[30,31,26,26]" data-marginleft="[0,0,0,0]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 8, minWidth: '100%', maxWidth: '100%', whiteSpace: 'normal', fontSize: '60px', lineHeight: '90px', fontWeight: 400, color: '#f5811f', letterSpacing: '15px', display: 'block', fontFamily: "'Poppins', sans-serif", textTransform: 'uppercase' }}>
                                            Le monde avec la technologie EM®
                                        </div>
                                        {/* LAYER NR. 27 */}
                                        <div className="tp-caption tp-shape tp-shapewrapper tp-resizeme" id="slide-34-layer-3" data-x="['left','left','left','left']" data-hoffset="['0','53','53','42']" data-y="['top','top','top','top']" data-voffset="['0','440','498','373']" data-width="100" data-height="1" data-whitespace="['normal','nowrap','nowrap','nowrap']" data-type="shape" data-responsive_offset="on" data-frames='[{"delay":"+1490","speed":2000,"frame":"0","from":"sX:0;opacity:0;","to":"o:1;","ease":"Power4.easeInOut"},{"delay":"wait","speed":1000,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]' data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]" data-marginleft="[0,0,0,0]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 9, display: 'block', backgroundColor: 'rgb(0,0,0)' }}>
                                        </div>
                                    </div>
                                    {/* LAYER NR. 28 */}
                                    <div className="tp-caption " id="slide-34-layer-9" data-x="['left','left','left','left']" data-hoffset="['100','100','100','100']" data-y="['top','top','top','top']" data-voffset="['100','100','100','100']" data-width="none" data-height="none" data-whitespace="nowrap" data-type="column" data-responsive_offset="on" data-responsive="off" data-frames='[{"delay":"+0","speed":300,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]' data-columnwidth="40%" data-verticalalign="top" data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]" data-marginleft="[0,0,0,0]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 10, width: '100%' }}>
                                    </div>
                                </div>
                                {/* LAYER NR. 29 */}
                                <div className="tp-caption rs-parallaxlevel-5" id="slide-34-layer-10" data-x="['left','left','left','left']" data-hoffset="['100','100','100','100']" data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']" data-width="none" data-height="none" data-whitespace="nowrap" data-type="row" data-columnbreak="2" data-responsive_offset="on" data-responsive="off" data-frames='[{"delay":10,"speed":300,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]' data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]" data-marginleft="[0,0,0,0]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[50,50,30,30]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[50,50,30,30]" style={{ zIndex: 11, whiteSpace: 'nowrap', fontSize: '20px', lineHeight: '22px', fontWeight: 400, color: '#ffffff', letterSpacing: '0px' }}>
                                    {/* LAYER NR. 30 */}
                                    <div className="tp-caption" id="slide-34-layer-11" data-x="['left','left','left','left']" data-hoffset="['100','100','100','100']" data-y="['top','top','top','top']" data-voffset="['100','100','100','100']" data-width="none" data-height="none" data-whitespace="nowrap" data-type="column" data-responsive_offset="on" data-responsive="off" data-frames='[{"delay":"+0","speed":300,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]' data-columnwidth="50%" data-verticalalign="top" data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]" data-marginleft="[0,0,0,0]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 12, width: '100%' }}>
                                    </div>
                                    {/* LAYER NR. 31 */}
                                    <div className="tp-caption" id="slide-34-layer-12" data-x="['left','left','left','left']" data-hoffset="['100','100','100','100']" data-y="['top','top','top','top']" data-voffset="['100','100','100','100']" data-width="none" data-height="none" data-whitespace="nowrap" data-type="column" data-responsive_offset="on" data-responsive="off" data-frames='[{"delay":"+0","speed":300,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]' data-columnwidth="50%" data-verticalalign="top" data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]" data-marginleft="[0,0,0,0]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[20,20,0,0]" style={{ zIndex: 13, width: '100%' }}>
                                        {/* LAYER NR. 32 */}
                                        <div className="tp-caption tp-resizeme" id="slide-34-layer-4" data-x="['left','left','left','left']" data-hoffset="['0','540','814','633']" data-y="['top','top','top','top']" data-voffset="['0','440','410','298']" data-fontsize="['15','14','14','14']" data-width="100%" data-height="none" data-whitespace="normal" data-type="text" data-responsive_offset="on" data-frames='[{"delay":"+1990","speed":2000,"frame":"0","from":"opacity:0;","color":"#f5811f","to":"o:1;","ease":"Power4.easeInOut"},{"delay":"wait","speed":1000,"frame":"999","color":"transparent","to":"opacity:0;","ease":"Power3.easeInOut"}]' data-margintop="[0,0,40,40]" data-marginright="[0,0,0,0]" data-marginbottom="[40,40,40,40]" data-marginleft="[0,0,0,0]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 14, minWidth: '100%', maxWidth: '100%', whiteSpace: 'normal', fontSize: '15px', lineHeight: '30px', fontWeight: 700, color: '#ffffff', letterSpacing: '3px', display: 'block', fontFamily: "'Poppins', sans-serif", textTransform: 'uppercase' }}>
                                            Nous restituons les conditions originelles de l'écosystème et corrigeons les impacts environnementaux.
                                        </div>
                                        {/* LAYER NR. 33 */}
                                        <div className="tp-caption rev-btn tp-resizeme" id="slide-33-layer-5" data-x="['left','left','left','left']" data-hoffset="['0','540','53','42']" data-y="['top','top','bottom','bottom']" data-voffset="['0','600','53','42']" data-width="none" data-height="none" data-whitespace="['normal','nowrap','nowrap','nowrap']" data-type="button" data-actions='[{"event":"click","action":"scrollbelow","offset":"px","delay":"","speed":"2000","ease":"Power3.easeInOut"}]' data-responsive_offset="on" data-frames='[{"delay":"+1990","speed":2000,"frame":"0","from":"opacity:0;fbr:0%;","to":"o:1;fbr:100;","ease":"Power4.easeInOut"},{"delay":"wait","speed":2000,"frame":"999","to":"opacity:0;fbr:0%;","ease":"Power4.easeInOut"},{"frame":"hover","speed":"500","ease":"Power3.easeInOut","to":"o:1;rX:0;rY:0;rZ:0;z:0;fbr:90%;","style":"c:rgba(255,255,255,1);bs:solid;bw:0 0 0 0;"}]' data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]" data-marginleft="[0,0,0,0]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[50,50,50,50]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[50,50,50,50]" style={{ zIndex: 15, whiteSpace: 'normal', fontSize: '15px', lineHeight: '60px', fontWeight: 400, color: 'rgba(255,255,255,1)', letterSpacing: '5px', display: 'inline-block', fontFamily: "'Poppins', sans-serif", textTransform: 'uppercase', backgroundColor: 'rgb(229,69,43)', borderColor: 'rgba(0,0,0,1)', outline: 'none', boxShadow: 'none', boxSizing: 'border-box', cursor: 'pointer' }}>
                                            savoir plus
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div className="tp-bannertimer tp-bottom" style={{ height: '10px', background: 'rgb(229,69,43)' }}></div>
                    <a className="tonext-btn js-tonext-btn" data-endof=".kl-slideshow" onClick={handleScrollDown}>
                        <span className="mouse-anim-icon"></span>
                    </a>
                </div>
            </div>
            <style>{`
        #rev_slider_12_1 .uranus.tparrows {
          width: 50px;
          height: 50px;
          background: rgba(255, 255, 255, 0);
        }
        #rev_slider_12_1 .uranus.tparrows:before {
          width: 50px;
          height: 50px;
          line-height: 50px;
          font-size: 30px;
          transition: all 0.3s;
          -webkit-transition: all 0.3s;
        }
        #rev_slider_12_1 .uranus.tparrows:hover:before {
          opacity: 0.75;
        }
      `}</style>
        </div>
    );
};

export default Slideshow;
