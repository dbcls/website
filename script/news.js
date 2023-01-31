var script = document.createElement('script');

script.setAttribute('src', 'https://code.jquery.com/jquery-3.2.1.min.js');
document.head.appendChild(script);

script.addEventListener('load', function () {
  var containerEl = document.querySelector('.news__individual-wrapper');

  var mixer = mixitup(containerEl, {
    multifilter: {
      enable: true,
    },
  });
  var prepage = '';
  prepage = document.referrer;
  if (prepage === '') {
    prepage = 'direct';
  } else {
    prepage = prepage.match('.+/(.+?)([?#;].*)?$')[1];
  }
  if (prepage === 'events.html' || prepage === 'events-en.html') {
    setTimeout(function () {
      $('.tag-event').trigger('click');
    }, 0);
    setTimeout(function () {
      $('.news__individual-wrapper').css('display', 'block');
    }, 500);
  } else {
    $('.news__individual-wrapper').css('display', 'block');
  }

  $('.post__individual').each(function () {
    var tag_className = $(this).attr('class');
    tag_className = tag_className.match(/\[\"(.+?)\"\]/g);
    tag_className = tag_className[0].match(/\"(.+?)\"/g);
    tag_className = tag_className.join(' ');
    tag_className = tag_className.replace(/"/g, '');
    $(this).addClass(tag_className);
  });
});
