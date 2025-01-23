$(document).ready(function() {
  $('.dato .semana').addClass('active');
            
  $('#tiempoSelector').on('change', function() {
      var selectedOption = $(this).val();
      $('.dato p').removeClass('active');
      $('.dato .' + selectedOption).addClass('active');
  });
});

