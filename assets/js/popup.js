$(document).ready(function () {
    $('.btn-producto').click(function () {
        $('#'+$(this).data('div')).removeClass("collapse");
        $('#'+$(this).data('div')).addClass('zoom-in-effect-2');
        $('.overlay').toggleClass("collapse");
        $('.carrusel-imagenes').slick('setPosition');

    });

    $('.cerrar_modal').click(function () {
        $('#'+$(this).data('div')).addClass("collapse");
        $('.overlay').toggleClass("collapse");
    });

    $('.pregunta').click(function(){
        let contenido = $(this).find(".boton").text();
        if (contenido.includes('+')) {
            $(this).find(".boton").html("-");
            } else {
            $(this).find(".boton").html("+");
            }
        });
        
    $('.vineta-color').hide();
    $('.contenedor-color').hover(function(){
        var img = $(this).find(".color-producto img") .attr('data-img');
        if (img) {
            $(this).parent().parent().parent().find('.pregunta .nombre-color').html(img);
            $(this).parent().parent().parent().find('.pregunta .vineta-color').show();
        }
        }, function(){
            $('.nombre-color').html("");
            $('.vineta-color').hide();
    });
});