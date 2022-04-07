$('.autoplay').slick({
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    dots: false,
    prevArrow: false,
    nextArrow: false,
});

$('.autoplay2').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    prevArrow:"<img class='a-left control-c prev slick-prev' src='src/img/gauche.svg'>",
    nextArrow:"<img class='a-right control-c next slick-next' src='src/img/droite.svg'>"
});

$('.left').click(function(){
    $('.slider').slick('slickPrev');
  })
  
  $('.right').click(function(){
    $('.slider').slick('slickNext');
  })