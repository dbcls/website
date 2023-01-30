var script = document.createElement('script');

script.setAttribute('src', 'https://code.jquery.com/jquery-3.2.1.min.js');
document.head.appendChild(script);

script.addEventListener('load', function () {
  var tags = {
    public_relations: '広報',
    services: 'サービス',
    events: 'イベント',
    registration: '募集',
    other: 'その他',
  };
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
  var lang = $('html').attr('lang');
  if (lang === 'ja') {
    $('.tag_name').each(function () {
      var tag_en = $(this).text();
      tag_en = $.trim(tag_en);
      var tag_ja = tags[tag_en];
      $(this).text(tag_ja);
    });
  }

  $.ajax({
    url: '../json/services.json',
    dataType: 'json',
    async: true,
    success: function (data) {
      var events_array = data;

      function getOrder(target) {
        var order = 0;
        for (var i = 0; i < events_array.length; i++) {
          if (events_array[0][i] === target) {
            order = i;
          }
        }
        return order;
      }
      var event_active_order = getOrder('Event掲載');
      var service_name_order = getOrder('services_name_en');
      var explanation_ja_order = getOrder('explanation_ja');
      var explanation_en_order = getOrder('explanation_en');
      var event_img_order = getOrder('画像');
      var explanation_order = 0;
      var url_order = getOrder('URL');
      var url = window.location;
      var path = url.href.split('/');
      var file_name = path.pop();
      var events_array = events_array.filter((data) => {
        return data[event_active_order] === 'Y';
      });
      if (lang === 'ja') {
        explanation_order = explanation_ja_order;
      } else if (lang === 'en') {
        explanation_order = explanation_en_order;
      }

      var elements = '';
      for (var i = 0; i < events_array.length; i++) {
        elements +=
          '<article class="article__section event__section-ja">' +
          // '<img src="/img/event_assets/' + events_array[i][event_img_order] + '">' +
          '<div class="article__section__inner">' +
          '<h4>' +
          events_array[i][service_name_order] +
          '</h4>' +
          '<p>' +
          events_array[i][explanation_order] +
          '</p>' +
          '<a href = "' +
          events_array[i][url_order] +
          '" class = "page_btn more_btn" > more </a>' +
          '</div>' +
          '</article>';
      }
      $('.section-wrapper').append(elements);
    },
  });

  /***左サイドバーの動作ここから***/
  //変動要素: main__contents-"event"
  //mein一つ目セクションの高さの取得
  var client_h = document.getElementById('main__contents-event').clientHeight;

  //クリックでactiveが切り替わる
  $('ul.sub__navigation-wrapper li').on('click', function () {
    $('ul.sub__navigation-wrapper li').removeClass('active');
    $(this).addClass('active');
  });
  //取得したある高さまで、移動
  $('.sub_2').on('click', function () {
    window.scrollTo(0, client_h);
  });
  $('.sub_1').on('click', function () {
    window.scrollTo(0, 0);
  });
  //==>スクロールでactiveが切り替わる
  $(window).scroll(function () {
    if ($(this).scrollTop() > client_h) {
      $('ul.sub__navigation-wrapper li.sub_1').removeClass('active');
      $('ul.sub__navigation-wrapper li.sub_2').addClass('active');
    } else if ($(this).scrollTop() < client_h) {
      $('ul.sub__navigation-wrapper li.sub_2').removeClass('active');
      $('ul.sub__navigation-wrapper li.sub_1').addClass('active');
    }
  });
  /***左サイドバーの動作ここまで***/
});
