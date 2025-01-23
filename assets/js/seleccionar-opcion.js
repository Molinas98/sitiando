$(document).ready(function() {
    $('.tarjeta').hide();
    $('#editar').show();
    $('.opciones-cuenta li').first().addClass('seleccionado');
  
    $('.opciones-cuenta li').click(function() {
      $('.tarjeta').hide();
      $('#' + $(this).data('div')).show();
    });
    
    $('.opciones-cuenta li').click(function() {
      $('.opciones-cuenta li').removeClass('seleccionado');
      $(this).addClass('seleccionado');
    });

    $('.swallow__icon').click(function() {
      $('.cuerpos').toggle('collapse');
      $(this).toggleClass('show')
    });
    

    function checkScreenSize() {
      if ($(window).width() < 1200) {
          $('.cuerpos').css('display','none');
          $('.swallow__icon').removeClass('show');
      } else {
          $('.cuerpos').css('display','block');
          $('.swallow__icon').addClass('show');
      }
  }
  checkScreenSize();

  $(window).on('resize', function () {
      checkScreenSize();
  });
  });
  
