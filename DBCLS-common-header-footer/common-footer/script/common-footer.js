var script = document.createElement('script')
script.setAttribute('src', 'https://code.jquery.com/jquery-3.2.1.min.js')
document.head.appendChild(script)

setTimeout(function(){
  $('body').append('<footer>')
  $('footer').attr('id', 'dbcls-common-footer')
  $('footer').load('common-footer.html')
}, 100)