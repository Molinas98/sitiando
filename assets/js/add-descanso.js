$(document).ready(function () {
    const diasSemana = ['lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado', 'domingo'];
    $('.check_dia').change(function() {
        if ($(this).is(':checked')) {
          // Acción cuando está checkeado
          $('.horario.' + $(this).data('dia')).prop('disabled', false);
        } else {
          // Acción cuando está desmarcado
          $('.horario.' + $(this).data('dia')).val('');
          $('.horario.' + $(this).data('dia')).prop('disabled', true);
        }
      });

    $(".bt_descanso").click(function() {
      $('.descanso.' + $(this).data('descanso')).closest('div').removeClass('collapse');
      $('.bt_descanso.' + $(this).data('descanso')).closest('div').removeClass('collapse');
    });

    $(".accion.descanso").click(function() {
      $('.descanso.' + $(this).data('descanso')).closest('div').addClass('collapse');
      $('.bt_descanso.' + $(this).data('descanso')).closest('div').addClass('collapse');
      $('.descanso.' + $(this).data('descanso')).val('');
    });

    $('#tipo_horario').change(function() {
      if ($(this).val() === '0') {
        $('.horarios').removeClass('collapse');
        
      } else {
        $('.horarios').addClass('collapse');
      }
    });
});
  
