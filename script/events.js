var script = document.createElement('script');

script.setAttribute('src', 'https://code.jquery.com/jquery-3.2.1.min.js');
document.head.appendChild(script);

script.addEventListener('load', function () {
  $('.news__individual-wrapper').css('display', 'block');
  
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
});
