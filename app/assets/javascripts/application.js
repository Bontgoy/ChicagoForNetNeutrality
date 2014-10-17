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
//= require magnific-popup
//= require_tree .

$(function () {

	$('.mcgee-modal').magnificPopup({
		type: 'inline',
		alignTop: true,
		overflowY: 'scroll',
	});

	$('.baker-modal').magnificPopup({
		type: 'inline',
		alignTop: true,
		overflowY: 'scroll'
	});

	$('.biss-modal').magnificPopup({
		type: 'inline',
		alignTop: true,
		overflowY: 'scroll'
	});

	$('.museum-modal').magnificPopup({
		type: 'inline',
		alignTop: true,
		overflowY: 'scroll'
	});

	$('.singham-modal').magnificPopup({
		type: 'inline',
		alignTop: true,
		overflowY: 'scroll'
	});

	$('.wozniak-modal').magnificPopup({
		type: 'inline',
		alignTop: true,
		overflowY: 'scroll'
	});

	$('.copps-modal').magnificPopup({
		type: 'inline',
		alignTop: true,
		overflowY: 'scroll'
	});
});
