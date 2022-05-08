function FixedAnime() {
  var headerH = $('#header').outerHeight(true);
	var scroll = $(window).scrollTop();
	if (scroll >= headerH){
    $('.openbtn').addClass('fadeDown');
    $('#header').addClass('dnone');
  }else{
    $('.openbtn').removeClass('fadeDown');
    $('#header').removeClass('dnone');
  }
}

$(window).scroll(function () {
  FixedAnime();
});

$(window).on('load', function () {
  FixedAnime();
});

$(".openbtn").click(function () {
  $(this).toggleClass('active');
  $("#header").toggleClass('panelactive');
});

$("#g-navi li a").click(function () {
  $(".openbtn").removeClass('active');
  $("#header").removeClass('panelactive');
});

$('#g-navi li a').click(function () {
  var elmHash = $(this).attr('href');
	var pos = $(elmHash).offset().top-0;
	$('body,html').animate({scrollTop: pos}, 1000);
	return false;
});
