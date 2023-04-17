var script = document.createElement('script')

script.setAttribute('src', 'https://code.jquery.com/jquery-3.2.1.min.js')
document.head.appendChild(script)

window.addEventListener('load', function () {
  var table_height = $('.table-history').height()
  $('.history__vertival-line').css('height', table_height)
  $('.history__vertival-dotted').css('top', table_height + 12)
})
