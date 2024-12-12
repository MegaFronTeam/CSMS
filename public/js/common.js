"use strict";

// import Swiper from '../libs/swiper/swiper-bundle.min.mjs';
// import JSCCommon from "./JSCCommon.js";

function eventHandler() {
	// const $ = jQuery;
	JSCCommon.init();

	function whenResize() {
		JSCCommon.setFixedNav();
	}

	window.addEventListener(
		"scroll",
		() => {
			JSCCommon.setFixedNav();
		},
		{passive: true}
	);
	window.addEventListener("resize", whenResize, {passive: true});

	whenResize();

	let defaultSl = {
		spaceBetween: 0,
		lazy: {
			loadPrevNext: true,
		},
		watchOverflow: true,
		loop: true,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		pagination: {
			el: " .swiper-pagination",
			type: "bullets",
			clickable: true,
			// renderBullet: function (index, className) {
			// 	return '<span class="' + className + '">' + (index + 1) + '</span>';
			// }
		},
	};

  const swiperTabs = new Swiper('.tabs-slider--js', {
		slidesPerView: 'auto',
		freeMode: true,
		watchOverflow: true,
		spaceBetween: 12,
	});

  const mediaSwiper = new Swiper(".gallerySlider__slider--js", {

		slidesPerView: 1,
		spaceBetween: 50,
    observeParents: true,
		navigation: {
			nextEl: ".gallerySlider .swiper-button-next",
			prevEl: ".gallerySlider .swiper-button-prev",
		},
		pagination: {
			el: ' .swiper-pagination',
			type: 'bullets',
			clickable: true, 
		},
    breakpoints: {
      992: {
        centeredSlides: true,
        initialSlide: 1,
        spaceBetween: 0,
      }
    }
	});
}
if (document.readyState !== "loading") {
	eventHandler();
} else {
	document.addEventListener("DOMContentLoaded", eventHandler);
}

// window.onload = function () {
// 	document.body.classList.add('loaded_hiding');
// 	window.setTimeout(function () {
// 		document.body.classList.add('loaded');
// 		document.body.classList.remove('loaded_hiding');
// 	}, 500);
// }
