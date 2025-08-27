/* =====================================
All JavaScript fuctions Start
======================================*/
(function ($) {
	
    'use strict';
/*--------------------------------------------------------------------------------------------
	document.ready ALL FUNCTION START
---------------------------------------------------------------------------------------------*/	

// Home 1 banner slider function by = swiper-bundle.min.js ________//
function av_home_bnr_1(){
	var swiper = new Swiper('.home-1-slider', {

			loop: true,
			spaceBetween: 30,
			effect: "fade",
			navigation: {
			  nextEl: ".swiper-button-next",
			  prevEl: ".swiper-button-prev",
			},
			pagination: {
			  el: ".swiper-pagination",
			  clickable: true,
			},
			//autoplay:false,
			autoplay: {
				delay: 7000,
				disableOnInteraction: true,
			}
	});
}

// Home 2 banner slider function by = swiper-bundle.min.js ________//
function av_home_bnr_2(){
	var swiper = new Swiper('.home-2-slider', {

			loop: true,
			spaceBetween: 30,
			effect: "fade",
			navigation: {
			  nextEl: ".swiper-button-next",
			  prevEl: ".swiper-button-prev",
			},
			pagination: {
			  el: ".swiper-pagination",
			  clickable: true,
			},

			autoplay: {
			delay: 7000,
			disableOnInteraction: true,
			}
	});
}


// Home 3 banner slider function by = swiper-bundle.min.js ________//
function av_home_bnr_3(){
	var swiper = new Swiper('.home-3-slider', {

			loop: true,
			spaceBetween: 30,
			effect: "fade",
			navigation: {
			  nextEl: ".swiper-button-next",
			  prevEl: ".swiper-button-prev",
			},
			pagination: {
			  el: ".swiper-pagination",
			  clickable: true,
			},
			
			autoplay: {
			delay: 7000,
			disableOnInteraction: true,
			}
	});
}

//testimonial function by = owl.carousel.js________//	
function av_testi_carousel(){
	jQuery('.kv-testimonial-carousel').owlCarousel({
		loop:true,
		autoplay:true,
		margin:30,
		autoplayTimeout:3000,
		nav:false,
		dots: true,
		navText: ['<i class="feather feather-chevron-left"></i>', '<i class="feather feather-chevron-right"></i>'],
		responsive:{
			0:{
				items:1
			},
			768:{
				items:1,
			},
			1200:{
				items:1
			}
		}
	});
}

//testimonial function by = owl.carousel.js________//	
function av_testi2_carousel(){
	jQuery('.kv-testimonial2-carousel').owlCarousel({
		loop:true,
		autoplay:true,
		margin:30,
		autoplayTimeout:3000,
		nav:false,
		dots: true,
		navText: ['<i class="feather feather-chevron-left"></i>', '<i class="feather feather-chevron-right"></i>'],
		responsive:{
			0:{
				items:1
			},
			768:{
				items:1,
			},
			1024:{
				items:2
			}
		}
	});
}


// blog carousel function by = owl.carousel.js________//	
function av_blog_carousel(){
	jQuery('.kv-blog-carousel').owlCarousel({
		loop:true,
		autoplay:true,
		margin:30,
		autoplayTimeout:3000,
		nav:true,
		dots: false,
		navText: ['<i class="feather feather-arrow-left"></i>', '<i class="feather feather-arrow-right"></i>'],
		responsive:{
			0:{
				items:1
			},
			768:{
				items:2,
			},
			1200:{
				items:3
			}
		}
	});
}

// Project carousel function by = owl.carousel.js________//	
function av_project_carousel(){
	jQuery('.kv-project-carousel').owlCarousel({
		loop:true,
		autoplay:true,
		margin:30,
		autoplayTimeout:3000,
		nav:true,
		dots: false,
		navText: ['<i class="feather feather-arrow-left"></i>', '<i class="feather feather-arrow-right"></i>'],
		responsive:{
			0:{
				items:1
			},
			768:{
				items:2,
			},
			1200:{
				items:4
			}
		}
	});
}

// Services2 carousel function by = owl.carousel.js________//	
function kv_services2_carousel(){
	jQuery('.kv_services2_carousel').owlCarousel({
		loop:true,
		autoplay:true,
		margin:30,
		autoplayTimeout:3000,
		nav:false,
		dots: true,
		navText: ['<i class="feather feather-arrow-left"></i>', '<i class="feather feather-arrow-right"></i>'],
		responsive:{
			0:{
				items:1
			},
			768:{
				items:2,
			},
			1200:{
				items:3
			}
		}
	});
}

// Featured Project carousel function by = owl.carousel.js________//	
function av_featured_carousel(){
	jQuery('.kv-featured-carousel').owlCarousel({
		loop:true,
		autoplay:true,
		margin:30,
		autoplayTimeout:3000,
		nav:true,
		dots: false,
		navText: ['<i class="feather feather-arrow-left"></i>', '<i class="feather feather-arrow-right"></i>'],
		responsive:{
			0:{
				items:1
			},
			768:{
				items:2,
			},
			1200:{
				items:3
			}
		}
	});
}

//  Counter Section function by = counterup.min.js
function counter_section(){
	jQuery('.counter').counterUp({
		delay: 10,
		time: 3000
	});	
}	

// > Video responsive function by = custom.js ========================= //	
function video_responsive(){	
	jQuery('iframe[src*="youtube.com"]').wrap('<div class="embed-responsive embed-responsive-16by9"></div>');
	jQuery('iframe[src*="vimeo.com"]').wrap('<div class="embed-responsive embed-responsive-16by9"></div>');	
}  

// > magnificPopup for video function	by = magnific-popup.js ===================== //	
function magnific_video(){	
	jQuery('.mfp-video').magnificPopup({
		type: 'iframe',
	});
}

// Vertically center Bootstrap modal popup function by = custom.js ==============//
function popup_vertical_center(){	
	jQuery(function() {
		function reposition() {
			var modal = jQuery(this),
			dialog = modal.find('.modal-dialog');
			modal.css('display', 'block');
			
			// Dividing by two centers the modal exactly, but dividing by three 
			// or four works better for larger screens.
			dialog.css("margin-top", Math.max(0, (jQuery(window).height() - dialog.height()) / 2));
		}
		// Reposition when a modal is shown
		jQuery('.modal').on('show.bs.modal', reposition);
		// Reposition when the window is resized
		jQuery(window).on('resize', function() {
			jQuery('.modal:visible').each(reposition);
		});
	});
}

// > Main menu sticky on top  when scroll down function by = custom.js ========== //		
function sticky_header(){
	if(jQuery('.sticky-header').length){
		var sticky = new Waypoint.Sticky({
			element: jQuery('.sticky-header')
		});
	}
}

// > Sidebar sticky  when scroll down function by = theia-sticky-sidebar.js ========== //		
function sticky_sidebar(){		
	$('.sticky-sidebar')
		.theiaStickySidebar({
			additionalMarginTop: 100
		});		
}

// > page scroll top on button click function by = custom.js ===================== //	
function scroll_top(){
	jQuery("button.scroltop").on('click', function() {
		jQuery("html, body").animate({
			scrollTop: 0
		}, 1000);
		return false;
	});

	jQuery(window).on("scroll", function() {
		var scroll = jQuery(window).scrollTop();
		if (scroll > 900) {
			jQuery("button.scroltop").fadeIn(1000);
		} else {
			jQuery("button.scroltop").fadeOut(1000);
		}
	});
}

// > input Placeholder in IE9 function by = custom.js ======================== //	
function placeholderSupport(){
/* input placeholder for ie9 & ie8 & ie7 */
	jQuery.support.placeholder = ('placeholder' in document.createElement('input'));
	/* input placeholder for ie9 & ie8 & ie7 end*/
	/*fix for IE7 and IE8  */
	if (!jQuery.support.placeholder) {
		jQuery("[placeholder]").on('focus', function () {
			if (jQuery(this).val() === jQuery(this).attr("placeholder")) jQuery(this).val("");
		}).blur(function () {
			if (jQuery(this).val() === "") jQuery(this).val(jQuery(this).attr("placeholder"));
		}).blur();

		jQuery("[placeholder]").parents("form").on('submit', function () {
			jQuery(this).find('[placeholder]').each(function() {
				if (jQuery(this).val() === jQuery(this).attr("placeholder")) {
						jQuery(this).val("");
				}
			});
		});
	}
	/*fix for IE7 and IE8 end */
}	

// > Nav submenu show hide on mobile by = custom.js
function mobile_nav(){
	jQuery(".sub-menu, .mega-menu").parent('li').addClass('has-child');
	jQuery("<div class='fa fa-angle-right submenu-toogle'></div>").insertAfter(".has-child > a");

	jQuery('.has-child a+.submenu-toogle').on('click',function(ev) {

		jQuery(this).parent().siblings(".has-child ").children(".sub-menu, .mega-menu").slideUp(500, function(){
			jQuery(this).parent().removeClass('nav-active');
		});

		jQuery(this).next(jQuery('.sub-menu, .mega-menu')).slideToggle(500, function(){
			jQuery(this).parent().toggleClass('nav-active');
		});

		ev.stopPropagation();
	});

}
	 
// Mobile side drawer function by = custom.js
function mobile_side_drawer(){
	jQuery('#mobile-side-drawer').on('click', function () { 
		jQuery('.mobile-sider-drawer-menu').toggleClass('active');
	});
}	

//  > Top Search bar Show Hide function by = custom.js =================== //	
function site_search(){
	jQuery('a[href="#search"]').on('click', function(event) {                    
	jQuery('#search').addClass('open');
	jQuery('#search > form > input[type="search"]').focus();
});
			
jQuery('#search, #search button.close').on('click keyup', function(event) {
	if (event.target === this || event.target.className === 'close') {
		jQuery(this).removeClass('open');
	}
});  
}	

//  Client logo Carousel function by = owl.carousel.js ========================== //
function home_client_carousel(){
jQuery('.home-client-carousel').owlCarousel({
	loop:true,
	nav:false,
	dots: true,				
	margin:5,
	autoplay:true,
	navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
	responsive:{
		0:{
			items:2,
		},
		480:{
			items:3,
		},			
		767:{
			items:4,
		},
		1000:{
			items:4
		}
	}
});
}

//  Client logo Carousel function by = owl.carousel.js ========================== //
function home_client_carousel_3(){
	jQuery('.home-client-carousel3').owlCarousel({
		loop:true,
		nav:false,
		dots: false,				
		margin:30,
		autoplay:true,
		autoplayTimeout: 1500,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		responsive:{
			0:{
				items:2,
			},
			480:{
				items:3,
			},			
			767:{
				items:4,
			},
			1000:{
				items:6
			}
		}
	});
}

//Wow Animation
function wow_animation(){
	new WOW().init();

	var wow = new WOW(
		{
		  animateClass: 'animated',
		  offset:       100,
		  callback:     function(box) {
			console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
		  }
		}
	  );
	  wow.init();

}

// > skills bar function function by  = custom.js ========================= //

/* 2.1 skills bar tooltips*/
function progress_bar_tooltips() {
	jQuery(function () { 
		jQuery('[data-toggle="tooltips"]').tooltip({trigger: 'manual'}).tooltip('show');
	});  
}

/* 2.2 skills bar widths*/

function progress_bar_width() {	
	jQuery( window ).on('scroll', function() {   
		jQuery(".progress-bar").each(function(){
		progress_bar_width = jQuery(this).attr('aria-valuenow');
		jQuery(this).width(progress_bar_width + '%');
		});
	}); 
}

// > Tooltip function by = isotope.pkgd.min.js ========================= //
	var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
	var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
	return new bootstrap.Tooltip(tooltipTriggerEl)
})

/*TICKERNEWS FUNCTiON*/
function nws_ticker_function() {
	jQuery(function(){
		var timer = !1;
		var _Ticker = jQuery("#T1").newsTicker();
		_Ticker.on("mouseenter",function(){
			var __self = this;
			timer = setTimeout(function(){
				__self.pauseTicker();
			},10);
		});
		_Ticker.on("mouseleave",function(){
			clearTimeout(timer);
			if(!timer) return !1;
			this.startTicker();
		});
	});
}


/*--------------------------------------------------------------------------------------------
	Window on load ALL FUNCTION START
---------------------------------------------------------------------------------------------*/
	// > masonry function function by = isotope.pkgd.min.js ========================= //	
	function masonryBox() {
		if ( jQuery().isotope ) {      
			var $container = jQuery('.masonry-outer');
				$container.isotope({
					itemSelector: '.masonry-item',
					transitionDuration: '1s',
					originLeft: true,
					stamp: '.stamp',
				});

			$container.imagesLoaded().progress( function() {
				$container.isotope('layout');
			});

			jQuery('.masonry-filter li').on('click',function() {                           
				var selector = jQuery(this).find("a").attr('data-filter');
				jQuery('.masonry-filter li').removeClass('active');
				jQuery(this).addClass('active');
				$container.isotope({ filter: selector });
				return false;
			});
		};
	}

// > page loader function by = custom.js ========================= //		
	function page_loader() {
		$('.loading-area').fadeOut(1000);
	}

/*--------------------------------------------------------------------------------------------
    Window on scroll ALL FUNCTION START
---------------------------------------------------------------------------------------------*/
	function color_fill_header() {
		var scroll = $(window).scrollTop();
		if(scroll >= 100) {
			$(".main-bar").addClass("color-fill");
		} else {
			(scroll = 100); $(".main-bar").removeClass("color-fill");
		}
	}

/*--------------------------------------------------------------------------------------------
	document.ready ALL FUNCTION START
---------------------------------------------------------------------------------------------*/
	jQuery(document).ready(function() {
		// Home 1 banner slider function by = swiper-bundle.min.js ________//
        av_home_bnr_1(),
		// Home 2 banner slider function by = swiper-bundle.min.js ________//
		av_home_bnr_2(),
		// Home 3 banner slider function by = swiper-bundle.min.js ________//
		av_home_bnr_3(),
		//testimonial function by = owl.carousel.js________//	
		av_testi_carousel(),
		//testimonial function by = owl.carousel.js________//	
		av_testi2_carousel(),
		// blog carousel function by = owl.carousel.js________//	
		av_blog_carousel(),
		// Project carousel function by = owl.carousel.js________//	
		av_project_carousel(),
		// Services2 carousel function by = owl.carousel.js________//	
		kv_services2_carousel(),
		// Featured Project carousel function by = owl.carousel.js________//	
		av_featured_carousel(),
		//  Counter Section function by = counterup.min.js ========================== //
		counter_section(),
		// > Top Search bar Show Hide function by = custom.js  		
		site_search(),	
		// > Video responsive function by = custom.js 
		video_responsive(),
		// > magnificPopup for video function	by = magnific-popup.js
		magnific_video(),
		// > Vertically center Bootstrap modal popup function by = custom.js
		popup_vertical_center();
		// > Main menu sticky on top  when scroll down function by = custom.js		
		sticky_header(),
	    // > Sidebar sticky  when scroll down function by = theia-sticky-sidebar.js ========== //		
		sticky_sidebar(),
		// > page scroll top on button click function by = custom.js	
		scroll_top(),
		// > input Placeholder in IE9 function by = custom.js		
		placeholderSupport(),
		// > Nav submenu on off function by = custome.js ===================//
		mobile_nav(),
		// Mobile side drawer function by = custom.js
		mobile_side_drawer(),
		//  Client logo Carousel function by = owl.carousel.js ========================== //
		home_client_carousel(),
		//Wow Animation ========================== //
		wow_animation(),
		//  Client logo Carousel function by = owl.carousel.js ========================== //
	    home_client_carousel_3(),
		//  Client logo Carousel function by = tickerNews.min.js ========================== //
		nws_ticker_function()
    	
	}); 	

/*--------------------------------------------------------------------------------------------
	Window Load START
---------------------------------------------------------------------------------------------*/
	jQuery(window).on('load', function () {
		// > masonry function function by = isotope.pkgd.min.js		
		masonryBox(),
		color_fill_header(),
		// > skills bar function function by  = custom.js ========================= //
		/* 2.1 skills bar tooltips*/
		progress_bar_tooltips(),
		/* 2.2 skills bar widths*/
		progress_bar_width(),
		// > page loader function by = custom.js		
		page_loader();
	});

 /*===========================
	Window Scroll ALL FUNCTION START
===========================*/

	jQuery(window).on('scroll', function () {
	// > Window on scroll header color fill 
		color_fill_header();
	});
	

/*===========================
	Document on  Submit FUNCTION START
===========================*/

	// > Contact form function by = custom.js	
	jQuery(document).on('submit', 'form.cons-contact-form', function(e){
		e.preventDefault();
		var form = jQuery(this);
		/* sending message */
		jQuery.ajax({
			url: 'https://thewebmax.org/kvieera/phpmailer/mail.php',
			
			data: form.serialize() + "&action=contactform",
			type: 'POST',
			dataType: 'JSON',
			beforeSend: function() {
				jQuery('.loading-area').show();
			},

			success:function(data){
				jQuery('.loading-area').hide();
				if(data['success']){
				jQuery("<div class='alert alert-success'>"+data['message']+"</div>").insertBefore('form.cons-contact-form');
				}else{
				jQuery("<div class='alert alert-danger'>"+data['message']+"</div>").insertBefore('form.cons-contact-form');	
				}
			}
		});
		jQuery('.cons-contact-form').trigger("reset");
		return false;
	});

/*===========================
	Document on  Submit FUNCTION END
===========================*/	
	
})(window.jQuery);