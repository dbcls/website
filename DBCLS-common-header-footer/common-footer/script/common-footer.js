var script = document.createElement('script')
script.setAttribute('src', 'https://code.jquery.com/jquery-3.2.1.min.js')
document.head.appendChild(script)

setTimeout(function(){
  $('body').append('<footer>')
  $('footer').attr('id', 'dbcls-common-footer')
  var current_lang = $('html').attr('lang')
  if(current_lang === 'ja') {
	$('footer').load('common-footer.html')
  } else {
	$('footer').load('common-footer-en.html')
  }
}, 100)