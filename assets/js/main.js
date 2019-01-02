$(document).ready(function() {

	$('#vbCarousel').owlCarousel({
    loop:true,
    responsive:{
      0:{
        items:1
      }
    }
	})

  // Ancora
	$('.acr').on('click', function(e) {
	  e.preventDefault();
	  $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 800, 'linear');
	});

});