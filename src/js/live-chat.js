$(function(){
  
  $('.slick-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    speed: 1000,
    prevArrow: '<div class="slick-prev"></div>',
    nextArrow: '<div class="slick-next"></div>'
  });

  $('.slick-for').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    $('.tabs .tab').eq(nextSlide).addClass('current-tab').siblings().removeClass('current-tab');
  });

  $('.tabs .tab').each(function(index){
    $(this).click(function(){
      $(this).addClass('current-tab').siblings().removeClass('current-tab');
      $('.slick-for').slick('slickGoTo', index);
    });
  });

})