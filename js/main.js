(function($) {
	"use strict";

	$(window).on('load', function() {
	    $(".preloader").fadeOut("slow", function() {
	        $(".preloader-left").addClass("slide-left");
	    });
	    $("body").css("overflow-y", "auto");
	});
})(jQuery);