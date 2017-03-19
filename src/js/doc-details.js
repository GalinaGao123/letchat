import {initHighlighting} from 'highlight.js'

$(function(){
  initHighlighting()

  $('.emoji span').click(function(){
    $(this).removeClass('not-active').addClass('active').siblings().addClass('not-active').removeClass('active')
  })
})