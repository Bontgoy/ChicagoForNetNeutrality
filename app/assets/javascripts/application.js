// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require slick
//= require magnific-popup
//= require_tree .

// Slick

$(document).ready(function(){

	$('.uneven').slick({
	  dots: false,
	  infinite: true,
	  speed: 1000,
	  slidesToShow: 2,
	  // slidesToScroll: 4,
	  responsive: [
    	{
      	breakpoint: 1024,
      	settings: {
        	slidesToShow: 1,
        	// slidesToScroll: 3,
        	infinite: true,
        	dots: false
      	}
    	},
    	{
      	breakpoint: 600,
      	settings: {
        	slidesToShow: 1,
        	// slidesToScroll: 2,
        	dots: false
      	}
    	},
    	{
      	breakpoint: 480,
      	settings: {
        	slidesToShow: 1,
        	slidesToScroll: 1,
        	dots: false
      	}
    	}
  	]
	});
});

// magnific popup

$(function () {

  $('.mcgee-modal').magnificPopup({
    type: 'inline',
    alignTop: true,
    overflowY: 'scroll',
    fixedContentPos: true
  });

  $('.baker-modal').magnificPopup({
    type: 'inline',
    alignTop: true,
    overflowY: 'scroll',
    fixedContentPos: true
  });

  $('.biss-modal').magnificPopup({
    type: 'inline',
    alignTop: true,
    overflowY: 'scroll',
    fixedContentPos: true
  });

  $('.museum-modal').magnificPopup({
    type: 'inline',
    alignTop: true,
    overflowY: 'scroll',
    fixedContentPos: true
  });

  $('.singham-modal').magnificPopup({
    type: 'inline',
    alignTop: true,
    overflowY: 'scroll',
    fixedContentPos: true
  });

  $('.wozniak-modal').magnificPopup({
    type: 'inline',
    alignTop: true,
    overflowY: 'scroll',
    fixedContentPos: true
  });

  $('.copps-modal').magnificPopup({
    type: 'inline',
    alignTop: true,
    overflowY: 'scroll',
    fixedContentPos: true
  });
});
