$(function () {

  $('.customers-words .carousel').slick({
    fade: true,
    prevArrow: '<div class="slick-prev slick-arrow"></div>',
    nextArrow: '<div class="slick-next slick-arrow"></div>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true,
          adaptiveHeight: true
        }
      }
    ]
  })

  $('.customers-words .carousel')
  .on('beforeChange', function (_event, _slick, _current, next) {
    $('.customers-words .globe img').attr('src', `./images/customers/globe-${next + 1}.gif`)
  })

})
