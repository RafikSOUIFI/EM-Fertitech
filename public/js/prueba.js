jQuery(window).bind("load unload", function($){

	'use strict';
	
/* ==============================================
Page Loader
============================================== */	

	if(document.getElementById("pageloader")) {
		jQuery("#pageloader .spinner").delay(0).fadeOut(100);
		jQuery("#pageloader").delay(70).fadeOut(1000);
		
		jQuery('a.ex-link').bind('click', function(event) {
			
			if(!jQuery(this).attr('href') || jQuery(this).parents("#navigation-mobile").length > 0 || jQuery(this).attr('href').indexOf(".jpg") >= 0 || jQuery(this).attr('href').indexOf(".png") >= 0) {
	//			alert('false');
				return false;
			} 
			
			var $href = jQuery(this).attr('href').toString();
	
			if($href.indexOf("http://") >= 0 && jQuery(this).attr('target') != '_blank') {
				var Exlink = this.getAttribute('href');		
				jQuery('#pageloader').fadeIn(150, function(){	
					jQuery("#pageloader .spinner").fadeIn(200);
					document.location.href = Exlink;
				});
				return false;
				event.preventDefault;
			}
			
		});
	}
	
	if(jQuery('#page-title.page-title-animated').length > 0) {
		//alert('exists!');
		jQuery("#page-title.page-title-animated").delay(400).slideDown(500,'easeOutExpo');
		jQuery("#page-title.page-title-animated h1").delay(900).animate({'opacity':1});
	}
	
	
	
	
/* ==============================================
Sticky Navigation
============================================== */

	if(jQuery("#navigation_sticky").length > 0) {
	
		var offset = jQuery(this).scrollTop();
		
		var navigation = jQuery("#navigation");
		var extraTop = navigation.height();
		var navigationSticky = jQuery("#navigation_sticky");
		
		if(jQuery("#topbar").length > 0) {
			extraTop = extraTop + jQuery('#topbar').height();
		}
		
		if(jQuery("#nav-bottom").length > 0) {
			extraTop = extraTop + jQuery('#nav-bottom').height();
		}
		
		if(offset > extraTop+30) {
			navigationSticky.addClass('navigation-sticky-visible');
		} else if(offset < extraTop+30) {
			//navigationStick.animate({'top':'-100px'});
			navigationSticky.removeClass('navigation-sticky-visible');
		}
		
		jQuery(window).scroll(function () {
			
			var offset = jQuery(this).scrollTop();
			
			var navigation = jQuery("#navigation");
			var extraTop = navigation.height();
			var navigationSticky = jQuery("#navigation_sticky");
			
			if(jQuery("#topbar").length > 0) {
				extraTop = extraTop + jQuery('#topbar').height();
			}
			
			if(jQuery("#nav-bottom").length > 0) {
				extraTop = extraTop + jQuery('#nav-bottom').height();
			}
			
			if(jQuery("#first").length > 0 && jQuery("#site-navigation").hasClass('style-transparent')) {
				extraTop = jQuery("#first").height()-30;
			}else if(jQuery("#first").length > 0) {
				extraTop = extraTop + jQuery("#first").height();
			}
			
			if(jQuery('#page-title.page-title-animated').length > 0) {
				extraTop = jQuery("#page-title").height()-30;
			}
			
			//if(navigationSticky.hasClass('navbar-style-default')) {
				//alert('HAS: '+topbarHeight+'  '+offset);
				if(offset > extraTop+30) {
					navigationSticky.addClass('navigation-sticky-visible');
				} else if(offset < extraTop+30) {
					navigationSticky.removeClass('navigation-sticky-visible');
				}
			//}

		 });
	 }
	 
/* ==============================================
Big Search
============================================== */

if(jQuery(".header-search-open").length > 0) {
	jQuery('.header-search-open').on('click', function() {
		jQuery(this).closest('.nav-inner').find('.logo').animate({'opacity':0});
		jQuery(this).closest('.nav-inner').find('.nav-menu,.mobile-nav-button-popup').animate({'opacity':0});
		jQuery(this).closest('.nav-inner').find('.header-big-search').fadeIn();
		jQuery(this).closest('.nav-inner').find('.header-big-search input').focus();
	});
	
	jQuery('.header-search-close').on('click', function() {		
		jQuery(this).closest('.nav-inner').find('.header-big-search').fadeOut(150);
		jQuery(this).closest('.nav-inner').find('.logo').animate({'opacity':1});
		jQuery(this).closest('.nav-inner').find('.nav-menu,.mobile-nav-button-popup').animate({'opacity':1});
	});
}

/* ==============================================
Tooltips
============================================== */


	jQuery(".vntd-tooltip").each(function() {
		jQuery(this).hover(function() {
			jQuery(this).find('span').css('display', 'block').stop().animate({'opacity': 1}, 100);
		}, function() {
			jQuery(this).find('span').delay(200).animate({'opacity': 0}, 200).css('display', 'none');
		});
	});

/* ==============================================
FIT VIDEOS
============================================== */
	
    //$(".fit-vids").fitVids();

/* ==============================================
NAVIGATION DROP DOWN MENU
=============================================== */	

	jQuery('.nav-menu > .nav > .menu-item-has-children, .nav-menu .menu-item-has-children:not(".mega-menu") .menu-item-has-children, .vntd-nav-cart').each(function() {
		
		var hoverTimer;
		var hoverTimer2;
		var navElement = jQuery(this);
		
		navElement.hover(function() {

			    hoverTimer = setTimeout(function() { 
			        navElement.find('.dropdown-menu, .nav-cart-products').first().stop(true, true).fadeIn(250);
			    }, 300);
			    
			    clearTimeout(hoverTimer2); 
			},
			function() { 
				hoverTimer2 = setTimeout(function() { 
				    navElement.find('.dropdown-menu, .nav-cart-products').first().stop(true, true).fadeOut(250);  
				}, 400);
				
				clearTimeout(hoverTimer); 
			}

		);
		
	});
 	
// 	var ua = navigator.userAgent.toLowerCase();
// 	if(ua.indexOf("android") > -1) {
//		jQuery('.menu-item-has-children a').attr('href' ,'#');
//		
// 	}
 	
 	jQuery('a.dropdown-toggle, .dropdown-menu a').bind('touchend', function(){
 	        var href = jQuery(this).attr('href');
 	        location.href = href;
 	})
 	
 	jQuery('body').on('touchstart.dropdown', '.dropdown-menu, .work-image', function (e) { e.stopPropagation(); });
 	
 	
 	
/* ==============================================
Twitter Slider Style
=============================================== */	
	
	jQuery('#sidebar .tweet-Slider').each(function() {
		jQuery(this).flexslider({
	        animation: "fade",
			selector: "li",
			controlNav: true,
			directionNav: false,
			touch: true, 
			slideshowSpeed: 3000 
	//		direction: "vertical",
	     });
	
	});

     
/* ==============================================
Widget Tabbed
=============================================== */	

	jQuery('.widget-tabbed').each(function() {
		
		var $parent = jQuery(this);
		
		jQuery('.widget-tabbed-nav li').on('click', function() {
			$parent.find('.widget-tabbed-nav li').removeClass('active-tab');
			jQuery(this).addClass('active-tab');
			$parent.find('.content-item').hide();
			$parent.find('.content-item.content-item-'+jQuery(this).data('tab')).fadeIn();
			//alert('.content-item.content-item-'+jQuery(this).data('tab'));
		});
	
	}); 
	
	
/* ==============================================
FEATURED WORKS SLIDER
=============================================== */	


	jQuery(".vntd-carousel").each(function() {
		var owl = jQuery(this);
		
		owl.on('initialized.owl.carousel', function(event) {
		    owl.closest('.vntd-carousel-holder').css({'opacity':1, 'max-height':'9999px'});
		});
		
		var $cols,$cols_600,$cols_768;
		
		$cols = jQuery(this).data('cols');
		
		if($cols == 5 || $cols == 4 || $cols == 3) {
			$cols_768 = 3;
		} else if($cols == 2) {
			$cols_768 = 2;
		} else {
			$cols_768 = 1;
		}
		
		owl.owlCarousel({
		 	items : $cols,
		 	// Responsive Settings
		 	responsive : {
		 	    0 : {
		 	        items : 1,
		 	    },
		 	    480 : {
		 	        items: 1,
		 	    },
		 	    600 : {
		 	         items: 2,
		 	     },
		 	    768 : {
		 	        items: $cols_768,
		 	    },
		 	    1170 : {
		 	    	items: $cols
		 	    }
		 	},
			// End Responsive Settings
			autoplay : true,
			dots : jQuery(this).data('dots'),
			nav : jQuery(this).data('nav'),
			mouseDrag : true,
		 	stopOnHover : true,
		 	slideSpeed : 700,
		 	paginationSpeed : 900,
		 	rewindSpeed : 1100,
		 	margin: jQuery(this).data('margin'),
		 	callbacks: true,
		 	autoplayHoverPause: true,
		 	autoplayTimeout: 7000,
		 	loop: true
		 });
		 
	});
	
	jQuery(".product .images .thumbnails").each(function() {
		var owl = jQuery(this);
		
		if(owl.children().length <= 4) return null;
		
		owl.on('initialized.owl.carousel', function(event) {
		    owl.css({'opacity':1, 'max-height':'9999px'});
		});
		
		owl.owlCarousel({
		 	items : 4,
		 	// Responsive Settings
		 	responsive : {
		 	    0 : {
		 	        items : 4,
		 	    },
		 	    480 : {
		 	        items: 4,
		 	    },
		 	    768 : {
		 	        items: 4,
		 	    },
		 	    1170 : {
		 	    	items: 4
		 	    }
		 	},
			// End Responsive Settings
			autoplay : false,
			dots : false,
			nav : true,
			mouseDrag : true,
		 	stopOnHover : true,
		 	slideSpeed : 700,
		 	paginationSpeed : 900,
		 	rewindSpeed : 1100,
		 	margin: 4,
		 	callbacks: true,
		 	autoplayHoverPause: true,
		 	autoplayTimeout: 7000
		 });
		 
	});
	
/* ==============================================
Testimonial Tabs
============================================== */

jQuery(".vntd-testimonials-tabs").each(function() {

	var navElements = jQuery(this).find('.testimonial-avatar').not('.not-clickable');
	
	navElements.each(function() {
		var position = jQuery(this).closest('.item').position();
		jQuery(this).closest('.item').find('.testimonial-content-arrow').css("left",position.left-66);
	});
	
	navElements.on('hover', function() {
		navElements.closest('.item').removeClass('active-item');
		jQuery(this).closest('.item').addClass('active-item');
	});
	//jQuery(this).find(

});

/* ==============================================
Animated Elements
============================================== */

jQuery('.animated,.wpb_animate_when_almost_visible').appear(function() {
    var elem = jQuery(this);
    
    if (elem.hasClass('animatedSlider')) return false;
    
    var animation = elem.data('animation');		    
    if(!animation) {
    	animation = 'fadeInLeft';
    }
    if ( !elem.hasClass('visible') ) {
    	
       	var animationDelay = elem.data('animation-delay');
        if ( animationDelay ) {
            setTimeout(function(){
                elem.addClass( animation + " visible" );
            }, animationDelay);
        } else {
            setTimeout(function(){
                elem.addClass( animation + " visible" );
            }, 300);
        }
    }
});

/* ==============================================
MAGNIFIC POPUP
=============================================== */	
	
	jQuery('.mp-image').each(function() {
		jQuery(this).magnificPopup({type:'image'});
	});
	
	//for single image
	jQuery('.mp-image').each(function() {
		jQuery(this).magnificPopup({type:'image'});
	});
	jQuery('.mp-video, mp-map').each(function() {
		jQuery(this).magnificPopup({type:'iframe'});
	});

	//	for image gallery
	jQuery('.mp-gallery').each(function() { // the containers for all your galleries
	    jQuery(this).magnificPopup({
	        delegate: 'a', // the selector for gallery item
	        type: 'image',
	        fixedContentPos: false,
	        gallery: {
	          enabled:true
	        }
	    });
	});
	
	//	for lightbox gallery in Swiper
//	jQuery('.mp-gallery-swiper').each(function() { // the containers for all your galleries
//	    jQuery(this).magnificPopup({
//	        delegate: 'li.swiper-slide', // the selector for gallery item
//	        type: 'image',
//	        fixedContentPos: false,
//	        gallery: {
//	          enabled:true
//	        }
//	    });
//	});
	
	jQuery('.portfolio-items,.vntd-portfolio-carousel').each(function() { // the containers for all your galleries
	    jQuery(this).magnificPopup({
	        delegate: 'span.overlay-icon-zoom', // the selector for gallery item
	        type: 'image',
	        fixedContentPos: false,
	        gallery: {
	          enabled:true
	        }
	    });
	}); 

/* ==============================================
PRETTY PHOTO
=============================================== */

	jQuery("a[data-rel^='prettyPhoto']").each(function() {
		jQuery(this).prettyPhoto({
			theme: "light_square",
			default_width: 700,
			default_height: 400,
		});
	});

/* ==============================================
Fit Videos
=============================================== */

//     jQuery(".fitvid").fitVids();

/* ==============================================
CUSTOM IMAGE SLIDER
=============================================== */	
     
     if(jQuery('.vntd-image-slider').length > 0) {
     	var swiper = new Swiper('.vntd-image-slider', {
     		pagination: '.swiper-pagination',
     		paginationClickable: true,
     		nextButton: '.swiper-button-next',
     		prevButton: '.swiper-button-prev',
     		loop: true,   
     		onInit: function() {
     			jQuery('.vntd-image-slider li a').each(function() {
     				jQuery(this).magnificPopup({ 
     				  type: 'image',
     				  gallery: {
     				     enabled:true
     				   }
     					// other options
     				});
     			});
     			
     		}		
     	});	
     }

/* ==============================================
FULLSCREEN VIDEO PLAYER
=============================================== */	

jQuery(".player").each(function() {
	jQuery(this).mb_YTPlayer();
});


/* ==============================================
SOFT SCROLL EFFECT FOR NAVIGATION LINKS
=============================================== */	

	jQuery('.nav-menu a,.scroll,.ex-link a,a.ex-link,.slide-button,.page-numbers').bind('click', function(event) {
	
		if(jQuery(this).hasClass('ex-link') && document.getElementById("pageloader") || jQuery(this).closest('li').hasClass('ex-link') && document.getElementById("pageloader")) {
			if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
				jQuery('.mbYTP_wrapper').addClass('mobile-bg');
				jQuery('section , div').addClass('b-scroll');
				jQuery('.animated').addClass('visible');
			}
			else{
				//if (jQuery.browser.mozilla) {}
				//else if (jQuery.browser.safari) {}
				//else{
					// Select to link
					
				//}
			}
			var Exlink = this.getAttribute('href');		
			// Fade In Page Loader
				jQuery('#pageloader').fadeIn(350, function(){	
					jQuery(".mid").fadeIn();
					jQuery(".outter").fadeIn();	  
					document.location.href = Exlink;
				});
				return false;
		
		}
		
		var $anchor = jQuery(this);
		var headerH = jQuery('#navigation, #navigation-sticky').outerHeight();
		
		jQuery('html,body').stop().animate({ 
			scrollTop: jQuery($anchor.attr('href')).offset().top - headerH + 10 + "px"
		},1200, 'easeInOutExpo');
		event.preventDefault();
	});

//jQuery(window).load(function(){
//	'use strict';
//	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
//		jQuery('.mbYTP_wrapper').addClass('mobile-bg');
//		jQuery('section , div').addClass('b-scroll');
//		jQuery('.animated').addClass('visible');
//	}
//	else{
//		if (jQuery.browser.mozilla) {}
//		else if (jQuery.browser.safari) {}
//		else{
//			// Select to link
//			jQuery('a.ex-link, .ex-link a').click(function(){
//				var Exlink = this.getAttribute('href');		
//				// Fade In Page Loader
//		  		jQuery('#pageloader').fadeIn(350, function(){		  
//				    document.location.href = Exlink;
//			  	});
//			  return false;
//			});
//		}
//
//		//ANIMATED ITEMS
//	    jQuery('.animated').appear(function() {
//		    var elem = $(this);
//		    var animation = elem.data('animation');
//		    if ( !elem.hasClass('visible') ) {
//		       	var animationDelay = elem.data('animation-delay');
//		        if ( animationDelay ) {
//		            setTimeout(function(){
//		                elem.addClass( animation + " visible" );
//		            }, animationDelay);
//		        } else {
//		            elem.addClass( animation + " visible" );
//		        }
//		    }
//		});
//
//	}
//
//}); 
   

/* ==============================================
BACK TO TOP BUTTON
=============================================== */	
	
	// hide #back-top first
	jQuery("#back-top").hide();
	
	// fade in #back-top
	jQuery(window).scroll(function () {
		if (jQuery(this).scrollTop() > 500) {
			jQuery('#back-top').fadeIn();
		} else {
			jQuery('#back-top').fadeOut();
		}
	});

/* ============================================== */
/*	PORTFOLIO ITEMS
/* ============================================== */

		var $container = jQuery('.vntd-grid-container');
		
		function columnNumber(cols,containerWidth) {
			var windowSize = jQuery(window).width();
			var columns;
			
			if(windowSize > 1100) {
				columns = cols;
			} else if(windowSize > 960) {
				if(cols == 4) {
					columns = 3;
				} else {
					columns = cols;
				}
			} else if(windowSize > 680) {
				if(cols == 4 || cols == 3) {
					columns = 2;
				} else {
					columns = cols
				}
			} else {
				columns = 1;
			}
			
			//alert(windowSize+" COLS: "+columns+" | "+containerWidth/cols);
			
			return containerWidth/columns;
		}
		
		if($container.length > 0) {
			var $extra = 5;
			var $extraClass = '';
			
			if($container.hasClass('grid-style-thumb_bg')) {
				$extra = 0;				
			}
			
			if($container.find('.post').width() < 440) {
				$extraClass = 'post-size-medium';
				$container.find('.post').each(function() {				
					jQuery(this).addClass($extraClass);				
				});
			}
			
			$container.isotope({
				masonry: { 
					columnWidth: columnNumber($container.data('cols'),$container.width()) - $extra
				},
				itemSelector : '.item'			
			});
			
			jQuery(window).resize(function () {
				if(jQuery('.vntd-grid-container').length) {
					
					jQuery('.vntd-grid-container').isotope({						
						
						masonry: { columnWidth: columnNumber($container.data('cols'),$container.width()) - $extra }
					});	
					
					//if($container.hasClass('grid-style-thumb_bg')) {
						if($container.find('.post').width() < 440) {
							//alert($extraClass);
							$container.find('.post').each(function() {							
								jQuery(this).addClass('post-size-medium');		
								
								//alert('done');					
							});
							
						} else if($container.find('.post').hasClass($extraClass)) {
						
							$container.find('.post').each(function() {
								jQuery(this).removeClass('post-size-medium');
							});
							
						}
					//}
				}
					    	
		    });
		    
		    $container.closest('.blog-inner').animate({
		        'opacity': 1
		    }, 400);
		}

});
 

// Document Ready

	( function ( $ ) {
		'use strict';
		
		jQuery(document).ready(function() {
		
			/* ==============================================
				Veented Slider
			=============================================== */
			
			if($('.veented-slider').length > 0) {
				
				if($('.veented-slider .veented-slider-fullscreen').length > 0) {
					var $height = $(window).height();
					var $extra = 0;
					
					var $wpAdminBar = jQuery('#wpadminbar');
					if ($wpAdminBar.length) {
						$extra = $extra + 28;
					}
					
					if (jQuery('#topbar').length > 0) {
						$extra = $extra + jQuery('#topbar').height();
					}
					
					if (!jQuery('#site-navigation').hasClass('style-transparent')) {
						$extra = $extra + jQuery('#site-navigation').height();
					}
					
					$('.veented-slider-holder').css('height',$height-$extra);
					
					jQuery(window).resize(function () {
						var $height = $(window).height();
						if($height > 400) {
							$('.veented-slider-holder').css('height',$height-$extra);
						}
					});
				}
								
				var previousSlideID = 0;
				
				var sliderSpeed = jQuery('.veented-slider').data('slider-speed');
				
				var swiper = new Swiper('.swiper-containers', {
					pagination: '.swiper-pagination',
					paginationClickable: true,
					nextButton: '.swiper-button-next',
					prevButton: '.swiper-button-prev',
					loop: true,
					autoplay: sliderSpeed,
					onInit: function() {
						setTimeout(function(){
						    $('.swiper-slide-active .veented-slide-title').addClass( "fadeInDown visible" );
						}, 30);
						setTimeout(function(){
						    $('.swiper-slide-active .veented-slide-paragraph').addClass( "fadeInDown visible" );
						}, 150);
						setTimeout(function(){
						    $('.swiper-slide-active .veented-slide-buttons').addClass( "fadeInDown visible" );
						}, 270);
//						$('.swiper-slide').removeClass('swiper-no-swiping');
					},
					onSlideChangeEnd: function() {
						
							
							$('.swiper-slide').not('.swiper-slide-active').find('.animated').stop().removeClass('visible').removeClass('fadeInDown');
							
							setTimeout(function(){
							    $('.swiper-slide-active .veented-slide-title').addClass( "fadeInDown visible" );
							}, 30);
							setTimeout(function(){
							    $('.swiper-slide-active .veented-slide-paragraph').addClass( "fadeInDown visible" );
							}, 150);
							setTimeout(function(){
							    $('.swiper-slide-active .veented-slide-buttons').addClass( "fadeInDown visible" );
							}, 270);
							
							var previousSlideID = $('.swiper-slide-active').data('swiper-slide-index');
//							alert(previousSlideID);
//							$('.swiper-slide').removeClass('swiper-no-swiping');
						
						
					},
					onSlideChangeStart: function() {
						
					}
				});	
			}		
		
		});
		
		/*jQuery('.animated,.wpb_animate_when_almost_visible').appear(function() {
		    var elem = jQuery(this);
		    var animation = elem.data('animation');		    
		    if(!animation) {
		    	animation = 'fadeInLeft';
		    }
		    if ( !elem.hasClass('visible') ) {
		    	
		       	var animationDelay = elem.data('animation-delay');
		        if ( animationDelay ) {
		            setTimeout(function(){
		                elem.addClass( animation + " visible" );
		            }, animationDelay);
		        } else {
		            setTimeout(function(){
		                elem.addClass( animation + " visible" );
		            }, 300);
		        }
		    }
		});*/
		
	}( jQuery ));

/* ==============================================
COUNT FACTORS
=============================================== */	
  
	jQuery(function() {
			
			jQuery(".vntd-counter").appear(function(){
				var dataperc;
				jQuery('.vntd-counter').each(function(){
					//alert('found');
			       	dataperc = jQuery(this).data('perc'),
//			       	alert(dataperc);
					jQuery(this).find('.counter-number').delay(6000).countTo({
				        from: 0,
				        to: dataperc,
				        speed: 3000,
				        refreshInterval: 50,
		            
	        		});  
				});
			});
		});
	 
	(function($) {
	    $.fn.countTo = function(options) {
	        // merge the default plugin settings with the custom options
	        options = $.extend({}, $.fn.countTo.defaults, options || {});
	
	        // how many times to update the value, and how much to increment the value on each update
	        var loops = Math.ceil(options.speed / options.refreshInterval),
	            increment = (options.to - options.from) / loops;
	
	        return jQuery(this).each(function() {
	            var _this = this,
	                loopCount = 0,
	                value = options.from,
	                interval = setInterval(updateTimer, options.refreshInterval);
	
	            function updateTimer() {
	                value += increment;
	                loopCount++;
	                jQuery(_this).html(value.toFixed(options.decimals));
	
	                if (typeof(options.onUpdate) == 'function') {
	                    options.onUpdate.call(_this, value);
	                }
	
	                if (loopCount >= loops) {
	                    clearInterval(interval);
	                    value = options.to;
	
	                    if (typeof(options.onComplete) == 'function') {
	                        options.onComplete.call(_this, value);
	                    }
	                }
	            }
	        });
	    };
	
	    $.fn.countTo.defaults = {
	        from: 0,  // the number the element should start at
	        to: 100,  // the number the element should end at
	        speed: 1000,  // how long it should take to count between the target numbers
	        refreshInterval: 100,  // how often the element should be updated
	        decimals: 0,  // the number of decimal places to show
	        onUpdate: null,  // callback method for every time the element is updated,
	        onComplete: null,  // callback method for when the element finishes updating
	    };
	})(jQuery);



function updateScrollSpy() {
    jQuery('body').scrollspy({ 
    	target: '.nav-menu',
    	offset: 110
    });
}	

//jQuery(window).resize(function () {
//	//alert('hi');
//	updateScrollSpy();
//	jQuery('.scroll').each(function () {
//	      var $spy = $(this).scrollspy('refresh')
//	    });
//});




/* ==============================================
MOBILE BACKGROUND FOR VIDEO BACKGROUNDS
=============================================== */

//jQuery(window).load(function(){
//	'use strict';
//	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
//		jQuery('.mbYTP_wrapper').addClass('mobile-bg');
//		jQuery('section , div').addClass('b-scroll');
//		jQuery('.animated').addClass('visible');
//	}
//	else{
//		if (jQuery.browser.mozilla) {}
//		else if (jQuery.browser.safari) {}
//		else{
//			// Select to link
//			jQuery('a').bind('click',function(){
//				alert('hi');
//				var Exlink = this.getAttribute('href');		
//				// Fade In Page Loader
//		  		jQuery('#pageloader').each(function(){
//		  			jQuery(this).fadeIn(350, function(){		  
//		  			  document.location.href = Exlink;
//		  			});
//		  		});
//			  return false;
//			});
//		}
//
//		//ANIMATED ITEMS
//	    
//
//	}
//
//}); 

	
jQuery(document).ready(function() {
    
    /* ==============================================
    MOBILE NAV BUTTON
    =============================================== */	
    
    	jQuery( ".mobile-nav-button" ).bind('click',function() {
    	
    		var nav = jQuery('#navigation-mobile');

    		jQuery("#navigation-mobile").slideToggle("medium");

    	});
    	
    	jQuery( ".mobile-nav-button-popup" ).bind('click',function() {
    	
    		jQuery('#vntd-popup-menu').fadeIn();
    		
    	});
    	
    	// Mobile Navigation
    	
    	jQuery('#navigation-mobile a').bind('click', function(event) {
			var parent = jQuery(this).closest('li');
			event.preventDefault();

			if(parent.hasClass('menu-item-has-children')) {

				parent.find("> .dropdown-menu").slideToggle("medium");
				parent.attr('href', '#');
				
			} else {
				var linkURL = this.getAttribute('href');		
				document.location.href = linkURL;
			}
			
			
		});
    		
//		jQuery('#navigation-mobile a').bind('click', function(event) {
//			var parent = jQuery(this).closest('li');
//			event.preventDefault();
//
//			if(parent.hasClass('menu-item-has-children')) {
//
//				parent.find("> .dropdown-menu").slideToggle("medium");
//				parent.attr('href', '#');
//				
//			} else {
//				var linkURL = this.getAttribute('href');		
//				document.location.href = linkURL;
//			}
//			
//			
//		});
		
//		jQuery('#topbar').swipe({
//			click: function(event, target)
//			{
//				console.log("should click");
//			},
//	        tap: function()
//	        {
//	            alert('tapped');
//	        },
//	        swipe: function(event, direction, distance, duration, fingerCount)
//	        {
//	            alert('swiped');            
//	        }
//	        
//	    });
	    
//	    jQuery('#topbar').on('click', function() {
//	    	alert('test');
//	    });
    	
    	jQuery( "#vntd-popup-menu-close" ).bind('click',function() {
    		
    		jQuery('#vntd-popup-menu').fadeOut();
    		
    	});
    
    	jQuery('.nav-inner div.nav-menu ul.nav li a').click(function () {
    		if (jQuery(window).width() < 1000) {
    			jQuery(".nav-menu").slideToggle("2000")
    		}    		
    	});
		

});