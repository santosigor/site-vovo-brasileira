/*! * Tecnegocios - Soluções WEB | Copyright Restaurante Vovó Brasileira */

$(document).ready(function() {

	$('#vbCarousel').owlCarousel({
    loop:true,
    responsive:{
      0:{
        items:1
      }
    }
	});

	$('#vbCarouselCardapio').owlCarousel({
		nav: true,
		dots: false,
		margin: 20,
    responsive:{
      0:{ items:1 },
      768:{ items:2 },
      1024:{ items:3 }
    }
	});

	$('#vbCarouselFotos').owlCarousel({
		nav: true,
		dots: false,
    responsive:{
      0:{
        items:1
      }
    }
	});

  // Ancora
	$('.acr').on('click', function(e) {
	  e.preventDefault();
	  $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 800, 'linear');
	});

});