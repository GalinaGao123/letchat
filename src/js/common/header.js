import $ from 'jquery'

$(function () {

  $('.site-header .dropdown').each(function() {
    const $dropdown = $(this)
    const $menu = $dropdown.find('.dropdown-menu')

    $dropdown.hover(
      function () {
        $menu.slideDown(200)
      },
      function () {
        $menu.hide()
      }
    )
  })
  
})
