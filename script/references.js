var script = document.createElement('script')

script.setAttribute('src', 'https://code.jquery.com/jquery-3.2.1.min.js')
document.head.appendChild(script)

window.addEventListener('load', function () {
  // 処理前に Loading 画像を表示

  /* ------------------------------
  Loading イメージ表示関数
  引数： msg 画面に表示する文言
  ------------------------------ */
  function dispLoading(msg) {
    // 引数なし（メッセージなし）を許容
    $('.main__contents').append(
      "<div id='loading'><img src='/img/loading.gif' /></div>"
    )
  }

  /* ------------------------------
  Loading イメージ削除関数
  ------------------------------ */
  function removeLoading() {
    $('#loading').remove()
  }

  dispLoading('処理中...')

  $.ajax({
    url: './json/paper.json',
    dataType: 'json',
    async: true,
    success: function (data) {
      const update_date = new Date(data.updated)
      const year = update_date.getFullYear()
      const month = update_date.getMonth()
      const date = update_date.getDate()
      $('.update_date').text(`${year}年${month + 1}月${date}日現在`)
      // Lading 画像を消す
      removeLoading()
      var web_server_order = 0
      var citation_order = 1
      var PMID_order = 2
      var DOI_order = 3
      var title_order = 4
      var first_author_order = 5
      var Journal_order = 6
      var e_pub_date_order = 7
      var elementArray = data.data
      var elementArray_service = []
      for (var i = 0; i < elementArray.length; i++) {
        elementArray_service.push(elementArray[i][0])
      }
      elementArray_service = _.rest(elementArray_service, 2)
      elementArray_service = _.uniq(elementArray_service)
      var filterList = {}
      for (var i = 0; i < elementArray_service.length; i++) {
        var service_name = elementArray_service[i]
        filterList[service_name] = elementArray.filter((list) => {
          return list[0] === service_name
        })
      }

      var element = ''
      var names = Object.keys(filterList)
      names = names.sort(function (name_1, name_2) {
        return filterList[name_2].length - filterList[name_1].length
      })
      element += '<table class="papers_citing_table"><tbody>'
      for (i = 0; i < names.length; i++) {
        var indivisual_service = filterList[names[i]]
        indivisual_service = indivisual_service.filter((data) => {
          return data[1] !== 'Original'
        })
        var nameslength = indivisual_service.length

        element +=
          '<tr><td><div class="filName" data-category="' +
          names[i] +
          '">' +
          names[i] +
          '</div></td>' +
          '<td><p class="quote_num">' +
          nameslength +
          '</p></td></tr>'
      }
      element += '</tbody></table>'

      function displayList() {
        if (document.documentElement.lang === 'en') {
          $('.publications__wrapper').append(element)
        } else if (document.documentElement.lang === 'ja') {
          $('.publications__wrapper').append(element)
        }
      }
      displayList()

      $(document).on('click', '.filName', function () {
        names = $(this).html()
        displayIndividual(names)
      })

      $(document).on('click', '.quote_num', function () {
        var name_div = $(this).parent().prev().find('div')
        names = name_div.html()
        displayIndividual(names)
      })

      function displayIndividual(names) {
        location.hash = names
        var arranged_name = names.replace('%20', ' ')
        $('.main__content-title').text(arranged_name)
        //filterListをarranged_nameのものだけにフィルタリングして新しい配列
        $('.publications__wrapper').empty()
        var service_array = []
        service_array = filterList[arranged_name]
        service_array = service_array.filter((data) => {
          return data[1] !== 'Original'
        })
        var results = ''

        for (var i = 0; i < service_array.length; i++) {
          const pubmed =
            service_array[i][2] === 'NA'
              ? 'NA'
              : `<a href="https://www.ncbi.nlm.nih.gov/pubmed/?term=${service_array[i][2]}" target="_blank">${service_array[i][2]}</a>`
          let pub_date = service_array[i][e_pub_date_order]
          if (pub_date && pub_date !== 'NA') {
            pub_date = new Date(pub_date)
            pub_date = `${pub_date.getFullYear()}-${
              pub_date.getMonth() + 1
            }-${pub_date.getDate()}`
          } else {
            pub_date = 'NA'
          }
          results +=
            '<div class="publications__column__wrapper">' +
            '<h4 class="publications__column__title">' +
            service_array[i][title_order] +
            '</h4>' +
            '<p class="publications__column__pubmed"><span class="publications__column__title-small">PubMed: </span>' +
            pubmed +
            '</p>' +
            '<p class="publications__column__DOI"><span class="publications__column__title-small">DOI: </span><a href="' +
            service_array[i][DOI_order] +
            '">' +
            service_array[i][DOI_order] +
            '</a></p>' +
            '<div class="publications__column__wrapper-small">' +
            '<i class="fa fa-user" aria-hidden="true"></i>' +
            '<p>' +
            service_array[i][first_author_order] +
            '</p>' +
            '<i class="fa fa-clock-o" aria-hidden="true"></i>' +
            '<p>' +
            pub_date +
            '</p>' +
            '<i class="fa fa-book" aria-hidden="true"></i>' +
            '<p>' +
            service_array[i][Journal_order] +
            '</p>' +
            '<i class="fa fa-quote-right" aria-hidden="true"></i>' +
            '<p>' +
            service_array[i][citation_order] +
            '</p>' +
            '</div>' +
            '</div>'
        }
        $('.publications__wrapper').append(results)
      }

      //ハッシュ値が変わった時の画面遷移
      window.addEventListener(
        'hashchange',
        function () {
          if (location.hash === '') {
            $('.publications__wrapper').empty()
            displayList()
          } else {
            var service__title = location.hash.slice(1)
            displayIndividual(service__title)
          }
        },
        false
      )

      if (location.hash === '') {
      } else {
        var service__title = location.hash.slice(1)
        displayIndividual(service__title)
      }
    },
  })
})
