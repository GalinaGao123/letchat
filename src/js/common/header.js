import $ from 'jquery'

$(function(){
  $('header .dropdown').each(function(index){
    $(this).hover(function(){
      $(this).find('.triangle').addClass('active')
      $(this).find('.nav-dropdown').slideDown(300)
    }, function(){
      $(this).find('.nav-dropdown').slideUp(300)
      $(this).find('.triangle').removeClass('active')
    })
  })
  $('.menu-btn').click(function(){
    $(this).toggleClass('open');
    $(this).find('.nav-dropdown.mobile-menu').slideToggle(300)
  });
})
