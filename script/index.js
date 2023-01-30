var script = document.createElement('script');

script.setAttribute('src', 'https://code.jquery.com/jquery-3.2.1.min.js');
document.head.appendChild(script);

script.addEventListener('load', function () {
  var lang = $('html').attr('lang');
  $('.news__individual-wrapper').css('display', 'block');
  var url = window.location;
  var path = url.href.split('/');
  var file_name = path.pop();
  var tags_key = Object.keys(tags);
  tags_key.map(function (data) {
    $('a[tag="' + data + '"]').before(
      '<img src="/img/icon_tag_' +
        data +
        '.svg" class="news__tag-icon" alt="" >'
    );
  });

  //タグ名を日本語に変換
  if (lang === 'ja') {
    $('.tag_name').each(function () {
      var tag_en = $(this).text();
      tag_en = $.trim(tag_en);
      var tag_ja = tags[tag_en];
      $(this).text(tag_ja);
    });
  }

  function slideSwitch() {
    var $active = $('.main-image__contents DIV.active');

    if ($active.length == 0) $active = $('.main-image__contents DIV:last');

    // use this to pull the divs in the order they appear in the markup
    var $next = $active.next().length
      ? $active.next()
      : $('.main-image__contents DIV:first');

    // uncomment below to pull the divs randomly
    // var $sibs  = $active.siblings();
    // var rndNum = Math.floor(Math.random() * $sibs.length );
    // var $next  = $( $sibs[ rndNum ] );

    $active.addClass('last-active');

    $next
      .css({
        opacity: 0.0,
      })
      .addClass('active')
      .animate(
        {
          opacity: 1.0,
        },
        1000,
        function () {
          $active.removeClass('active last-active');
        }
      );
  }

  setInterval(function () {
    slideSwitch();
  }, 5000);

  // スライダー https://ja.splidejs.com/documents/
  var splide = new Splide('.splide', {
    type: 'fade',
    autoplay: true,
    rewind: true,
    interval: 5000,
    speed: 2000,
  });
  splide.mount();
});
