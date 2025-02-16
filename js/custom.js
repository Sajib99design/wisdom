
jQuery(document).ready(function(
	) {

	// Scroll to start
	jQuery('.scrolltotop').click(function(){
		jQuery('html').animate({'scrollTop' : '0px'}, 300);
		return false;
	});

	jQuery(window).scroll(function(){
		var upto = jQuery(window).scrollTop();
		if(upto > 500) {
			jQuery('.scrolltotop').fadeIn();
		} else {
			jQuery('.scrolltotop').fadeOut();
		}
	});

	// Scroll to end

 	//collapse the sidebar
     $('.menu-btn').click(function(){
       $('.sidebar-menu').addClass('active');
     });

     $('.close-btn').click(function(){
       $('.sidebar-menu').removeClass('active');
     });

	//  STICKY NAV
	 $( window ).scroll(function() {
		var height = $(window).scrollTop();
		if(height >= 100) {
			$('header').addClass('fixed-menu');
		} else {
			$('header').removeClass('fixed-menu');
		}
	});











	$(function () {
		var images = $('.small-image'),
			main_image = $('.main-image img'),
			currentIndex = 0,
			imageCount = images.length;
	
		// Function to update the main image
		function updateImage(index) {
			var clicked_image = images.eq(index).attr('src');
			if (main_image.attr('src') !== clicked_image) {
				main_image.fadeOut(600, function () {
					main_image.attr('src', clicked_image);
				}).fadeIn(600);
			}
		}
	
		// Event listener for manual clicks
		images.on('click', function () {
			currentIndex = images.index(this);
			updateImage(currentIndex);
		});
	
		// Auto slide every 2 seconds
		var autoSlide = setInterval(function () {
			currentIndex = (currentIndex + 1) % imageCount;
			updateImage(currentIndex);
		}, 6000); // 2000ms = 2 seconds
	
		// Dynamically create and append Previous and Next buttons
		var prevBtn = $('<button class="prev-btn"><i class="fa-solid fa-angle-left"></i></button>');
		var nextBtn = $('<button class="next-btn"><i class="fa-solid fa-chevron-right"></i></button>');
		main_image.parent().append(prevBtn).append(nextBtn);
	
		// "Previous" button functionality
		prevBtn.on('click', function () {
			clearInterval(autoSlide); // Pause auto slide when clicking
			currentIndex = (currentIndex - 1 + imageCount) % imageCount; // Wrap around if < 0
			updateImage(currentIndex);
			autoSlide = setInterval(function () { // Resume auto slide
				currentIndex = (currentIndex + 1) % imageCount;
				updateImage(currentIndex);
			}, 6000);
		});
	
		// "Next" button functionality
		nextBtn.on('click', function () {
			clearInterval(autoSlide); // Pause auto slide when clicking
			currentIndex = (currentIndex + 1) % imageCount; // Wrap around if > imageCount
			updateImage(currentIndex);
			autoSlide = setInterval(function () { // Resume auto slide
				currentIndex = (currentIndex + 1) % imageCount;
				updateImage(currentIndex);
			}, 6000);
		});
	});














	




   















//main
});