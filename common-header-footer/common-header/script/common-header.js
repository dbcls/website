var script = document.createElement('script')
script.setAttribute('src', 'https://code.jquery.com/jquery-3.2.1.min.js')
document.head.appendChild(script)

setTimeout(function(){
  $('body').prepend('<header>')
  $('header').addClass('dbcls-common-header')
  $('header').load('common-header.html')
}, 100)