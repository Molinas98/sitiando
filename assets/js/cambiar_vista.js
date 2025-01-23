$(document).ready(function() {
  $(".vista").click(function(){
    if($(this).data('div') == "cuadricula") {
      if($(".cuadricula").hasClass('lista')) {
        $(".cuadricula").removeClass("lista");
        $('.col-12').removeClass("col-12").addClass("col-sm-6 col-xl-4")

      }
    } else {
      if(!$(".cuadricula").hasClass('lista')) {
        $(".cuadricula").addClass("lista");
        $('.col-sm-6.col-xl-4').removeClass("col-sm-6 col-xl-4").addClass("col-12")
      }
    }
    $(".vista").removeClass("selected");
    $(this).addClass("selected");
  });
  $(".ver-mapa").click(function(){
    if($(this).hasClass('selected')) {
      $(this).removeClass("selected");
      $('.locales-cerca').addClass("collapse");
    } else {
      $(this).addClass("selected");
      $('.locales-cerca').removeClass("collapse");
    }
  });
});
