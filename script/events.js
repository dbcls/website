var script = document.createElement('script')

script.setAttribute('src', 'https://code.jquery.com/jquery-3.2.1.min.js')
document.head.appendChild(script)

window.addEventListener('load', function () {
  $('.news__individual-wrapper').css('display', 'block')

  var lang = $('html').attr('lang')

  $.ajax({
    url: '../json/services.json',
    dataType: 'json',
    async: true,
    success: function (data) {
      var events_array = data

      var url = window.location
      var path = url.href.split('/')
      var file_name = path.pop()
      var events_array = events_array.filter((data) => {
        return data['Event掲載'] === true
      })
      var elements = ''
      for (var i = 0; i < events_array.length; i++) {
        elements +=
          '<article class="article__section event__section-ja">' +
          // '<img src="/img/event_assets/' + events_array[i]['画像'] + '">' +
          '<div class="article__section__inner">' +
          '<h4>' +
          events_array[i]['services_name_en'] +
          '</h4>' +
          '<p>' +
          events_array[i][`explanation_${lang}`] +
          '</p>' +
          '<a href = "' +
          events_array[i]['URL'] +
          '" class = "page_btn more_btn" > more </a>' +
          '</div>' +
          '</article>'
      }
      $('.section-wrapper').append(elements)
    },
  })
})
