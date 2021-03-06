/*! * Tecnegocios - Soluções WEB | Copyright Restaurante Vovó Brasileira */

$(document).ready(function() {

  // fixedNav();

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
    loop: true,
    center: true,
    responsive:{
      0:{ items:1 },
      768:{ items:2 }
    }
	});

  $('#vbCarouselReceitas').owlCarousel({
    nav: true,
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

  // se email foi enviado

  var baseUrl = window.location.hash;
  var id = (baseUrl.substring(baseUrl.lastIndexOf('#') + 1)); 
  if (id != '' && id == 'enviado'){
    $('.alert-warning').removeClass('d-none');
    $("html, body").animate({scrollTop: $('.vb-contato').offset().top - 80}, 500);
  }

  // $(window).scroll(function() {
    
  //   fixedNav();

  // });

  $('.vb-modal-open').click(function(e) {
    e.preventDefault();
    var modalOpen = $(this).attr('href');
    $('.vb-modal').hide();
    $(modalOpen).fadeIn('fast');
    $('html, body').css('overflow','hidden');
  });

  $('.vb-modal__close').click(function(e) {
    e.preventDefault();
    $('html, body').css('overflow','');
    $('.vb-modal').fadeOut('fast');
  });

});

// function fixedNav() {
//  if ($(this).scrollTop()>240) {
//     $('header nav').addClass('fixed');
//   } else {
//     $('header nav').removeClass('fixed');
//   }
// }

function Contato(){

  d = document.form;
  erro = false;
  vbElement = '';
              
  if($('#name').val()==""){
    erro=true; 
    vbElement += '#name, ';
  }
  if($('#email').val()==""){
    erro=true;
    vbElement += '#email, ';
  }
  if($('#message').val()==""){
    erro=true; 
    vbElement += '#message';
  }
  if (erro) {
    $(vbElement).addClass('vb-error');
  } else {
    $('form a').html('ENVIANDO...');
    d.submit();
  }
}

function vbFocusIpt(vb) {
  $(vb).removeClass('vb-error');
}