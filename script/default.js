// Content Security Policy
// var meta = document.createElement('META')
// meta.setAttribute('HTTP-EQUIV', 'Content-Security-Policy')
// meta.setAttribute('CONTENT', `default-src 'self'; 
//         script-src 'self' 'unsafe-inline' 'unsafe-eval' code.jquery.com www.googletagmanager.com; 
//         font-src 'self' fonts.googleapis.com fonts.gstatic.com;`)
// document.head.appendChild(meta)

var script = document.createElement('script')
var script_sticky = document.createElement('script')
var link_favicon = document.createElement('link')

var tags = {
  'public_relations': '広報',
  'services': 'サービス',
  'events': 'イベント',
  'registration': '募集',
  'other': 'その他'
}

script.setAttribute('src', 'https://code.jquery.com/jquery-3.2.1.min.js')
script_sticky.setAttribute('src', '/script/stickyfill.min.js')
link_favicon.setAttribute('rel', 'icon')
link_favicon.setAttribute('type', 'image/png')
link_favicon.setAttribute('href', '/img/favicon.png')
document.head.appendChild(script)
document.head.appendChild(script_sticky)
document.head.appendChild(link_favicon)

/* ------------------------------
 Loading イメージ表示関数
 引数： msg 画面に表示する文言
 ------------------------------ */
function dispLoading(msg) {
  // 引数なし（メッセージなし）を許容
  $(".main__contents").append("<div id='loading'><img src='/img/loading.gif' /></div>");

}

/* ------------------------------
 Loading イメージ削除関数
 ------------------------------ */
function removeLoading() {
  $("#loading").remove();
}

var initialize = {
  'index': function () {
    var lang = $('html').attr('lang')
    $('.news__individual-wrapper').css('display', 'block')
    var url = window.location;
    var path = url.href.split('/');
    var file_name = path.pop();
    var tags_key = Object.keys(tags)
    tags_key.map(function (data) {
      $('a[tag="' + data + '"]').before('<img src="/img/icon_tag_' + data + '.svg" class="news__tag-icon" alt="" >')
    })


    //タグ名を日本語に変換
    if (lang === 'ja') {
      $('.tag_name').each(function () {
        var tag_en = $(this).text()
        tag_en = $.trim(tag_en)
        var tag_ja = tags[tag_en]
        $(this).text(tag_ja)
      })
    }

    function slideSwitch() {
      var $active = $('.main-image__contents DIV.active');

      if ($active.length == 0) $active = $('.main-image__contents DIV:last');

      // use this to pull the divs in the order they appear in the markup
      var $next = $active.next().length ? $active.next() :
        $('.main-image__contents DIV:first');

      // uncomment below to pull the divs randomly
      // var $sibs  = $active.siblings();
      // var rndNum = Math.floor(Math.random() * $sibs.length );
      // var $next  = $( $sibs[ rndNum ] );


      $active.addClass('last-active');

      $next.css({
          opacity: 0.0
        })
        .addClass('active')
        .animate({
          opacity: 1.0
        }, 1000, function () {
          $active.removeClass('active last-active');
        });
    }

    setInterval(function () {
      slideSwitch()
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
  },
  'news': function () {
    var prepage = ''
    prepage = document.referrer
    if (prepage === "") {
      prepage = 'direct'
    } else {
      prepage = prepage.match(".+/(.+?)([\?#;].*)?$")[1]
    }
    if (prepage === 'events.html' || prepage === 'events-en.html') {
      setTimeout(function () {
        $('.tag-event').trigger('click')
      }, 0)
      setTimeout(
        function () {
          $('.news__individual-wrapper').css('display', 'block')
        }, 500)
    } else {
      $('.news__individual-wrapper').css('display', 'block')
    }
    var url = window.location;
    var path = url.href.split('/');
    var file_name = path.pop();
    var tags_key = Object.keys(tags)
    tags_key.map(function (data) {
      $('a[tag="' + data + '"]').before('<img src="/img/icon_tag_' + data + '.svg" class="news__tag-icon" alt="" >')
    })
    //タグ名を日本語に変換
    if (file_name === 'news.html') {
      $('.tag_name').each(function () {
        var tag_en = $(this).text()
        tag_en = $.trim(tag_en)
        var tag_ja = tags[tag_en]
        $(this).text(tag_ja)
      })
    }

    $('.post__individual').each(function () {
      var tag_className = $(this).attr('class')
      tag_className = tag_className.match(/\[\"(.+?)\"\]/g)
      tag_className = tag_className[0].match(/\"(.+?)\"/g)
      tag_className = tag_className.join(' ')
      tag_className = tag_className.replace(/"/g, '')
      $(this).addClass(tag_className)
    })
  },
  'post': function () {
    var url = window.location;
    var path = url.href.split('/');
    var file_name = path.pop();
    var tags_key = Object.keys(tags)
    tags_key.map(function (data) {
      $('a[tag="' + data + '"]').before('<img src="/img/icon_tag_' + data + '.svg" class="news__tag-icon" alt="" >')
    })
    marked($('.markdown-body').html())
    //タグ名を日本語に変換
    if (path.indexOf("ja") >= 0) {
      $('.tag_name').each(function () {
        var tag_en = $(this).text()
        tag_en = $.trim(tag_en)
        var tag_ja = tags[tag_en]
        $(this).text(tag_ja)
      })
    }
    //個別記事のサイト外URLにtarget="_blank"
    $(document).ready(function () {
      $("a[href^='http']:not([href*='" + location.hostname + "'])").attr('target', '_blank');
    })
  },
  'about': function () {
    $('.lazy-mail').each(function () {
      var self = this;
      setTimeout(function () {
        var $target = jQuery(self);
        var address = $target.data("address").split("_at_").join("@").split("_dot_").join(".");
        $target
          .attr("href", "mailto:" + address)
          .text(address);
      }, 1000);
    });
  },
  'history': function () {
    var table_height = $('.table-history').height()
    $('.history__vertival-line').css('height', table_height)
    $('.history__vertival-dotted').css('top', table_height + 12)
  },
  'funding': function () {},
  'faq': function () {},
  'policy': function () {},
  'logotype': function () {},
  'research': function () {},
  'publications': function () {},
  'references': function () {
    // 処理前に Loading 画像を表示
    dispLoading("処理中...");

    $.ajax({
      url: "./json/paper.json",
      dataType: "json",
      async: true,
      success: function (data) {
        const update_date = new Date(data.updated)
        const year = update_date.getFullYear()
        const month = update_date.getMonth()
        const date = update_date.getDate()
        $('.update_date').text(`${year}年${month + 1}月${date}日現在`)
        // Lading 画像を消す
        removeLoading();
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

        var element = "";
        var names = Object.keys(filterList);
        names = names.sort(function (name_1, name_2) {
          return filterList[name_2].length - filterList[name_1].length
        })
        element += '<table class="papers_citing_table"><tbody>';
        for (i = 0; i < names.length; i++) {
          var indivisual_service = filterList[names[i]]
          indivisual_service = indivisual_service.filter(data => {
            return data[1] !== 'Original'
          })
          var nameslength = indivisual_service.length;

          element +=
            '<tr><td><div class="filName" data-category="' + names[i] + '">' + names[i] + '</div></td>' +
            '<td><p class="quote_num">' + nameslength + '</p></td></tr>';
        }
        element += '</tbody></table>';

        function displayList() {
          if (document.documentElement.lang === "en") {
            $(".publications__wrapper").append(element);
          } else if (document.documentElement.lang === "ja") {
            $(".publications__wrapper").append(element);
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
          service_array = service_array.filter(data => {
            return data[1] !== 'Original'
          })
          var results = "";
          
          for (var i = 0; i < service_array.length; i++) {

            const pubmed = service_array[i][2] === "NA" ? "NA" : `<a href="https://www.ncbi.nlm.nih.gov/pubmed/?term=${service_array[i][2]}" target="_blank">${service_array[i][2]}</a>`
            let pub_date = service_array[i][e_pub_date_order]
            if (pub_date && pub_date !== 'NA') {
              pub_date =  new Date(pub_date)
              pub_date = `${pub_date.getFullYear()}-${pub_date.getMonth() + 1}-${pub_date.getDate()}`
            } else {
              pub_date = 'NA'
            }
            results +=
              '<div class="publications__column__wrapper">' +
              '<h4 class="publications__column__title">' + service_array[i][title_order] + '</h4>' +
              '<p class="publications__column__pubmed"><span class="publications__column__title-small">PubMed: </span>' + pubmed + '</p>' +
              '<p class="publications__column__DOI"><span class="publications__column__title-small">DOI: </span><a href="' + service_array[i][DOI_order] + '">' + service_array[i][DOI_order] + '</a></p>' +
              '<div class="publications__column__wrapper-small">' +
              '<i class="fa fa-user" aria-hidden="true"></i>' +
              '<p>' + service_array[i][first_author_order] + '</p>' +
              '<i class="fa fa-clock-o" aria-hidden="true"></i>' +
              '<p>' + pub_date + '</p>' +
              '<i class="fa fa-book" aria-hidden="true"></i>' +
              '<p>' + service_array[i][Journal_order] + '</p>' +
              '<i class="fa fa-quote-right" aria-hidden="true"></i>' +
              '<p>' + service_array[i][citation_order] + '</p>' +
              '</div>' +
              '</div>'
          }
          $('.publications__wrapper').append(results);
        }

        //ハッシュ値が変わった時の画面遷移
        window.addEventListener('hashchange', function () {
          if (location.hash === '') {
            $('.publications__wrapper').empty()
            displayList()
          } else {
            var service__title = location.hash.slice(1)
            displayIndividual(service__title)
          }
        }, false)

        if (location.hash === '') {} else {
          var service__title = location.hash.slice(1)
          displayIndividual(service__title)
        }
      }
    })
  },
  'services': function () {
    var repos_name = '';
    var tags_array
    var url = window.location;
    var path = url.href.split('/');
    var file_name = path.pop();
    if (file_name.match(/#[\w_]/)) {
      file_name = file_name.replace('services.html#', '')
      file_name = file_name.replace('services-en.html#', '')
      $(".facet_section").addClass("off");
      displayRepos(file_name)
    } else {
      servicesFrontDisplay();
    }

    function servicesFrontDisplay() {
      $.ajax({
        url: "../json/services.json",
        dataType: "json",
        async: true,
        success: function (data) {
          var elementArray = data;
          //column1に"Y"のあるrowをとってくる
          var publication_order = getOrder("other", "掲載")
          var symbolYList = elementArray.filter((YList) => {
            return YList[publication_order] === "Y";
          })
          var element = "";

          function getOrder(type, target) {
            var order = 0
            if (type === 'category') {
              for (var i = 0; i < elementArray.length; i++) {
                if (elementArray[1][i] === target) {
                  order = i
                }
              }
            } else if (type === 'other') {
              for (var i = 0; i < elementArray.length; i++) {
                if (elementArray[0][i] === target) {
                  order = i
                }
              }
            }
            return order
          }

          var service_name_order = getOrder('other', 'services_name_en')
          var core_service_name_order = getOrder('other', 'services_name_ja')
          var keyword_ja_order = getOrder('other', 'explanation_ja')
          var keyword_en_order = getOrder('other', 'explanation_en')
          var url_order = getOrder('other', 'URL')

          var database_integration_order = getOrder('category', 'Database integration/データベース統合')
          var materials_order = getOrder('category', 'Materials/教材・資料')
          var genome_order = getOrder('category', 'Genome/ゲノム')
          var gene_order = getOrder('category', 'Gene/遺伝子')
          var gene_expression_order = getOrder('category', 'Gene expression/遺伝子発現')
          var NGS_order = getOrder('category', 'NGS')
          var disease_order = getOrder('category', 'Disease/疾患')
          var natural_language_processing_order = getOrder('category', 'Natural language processing/自然言語処理')
          var SPARQL_order = getOrder('category', 'SPARQL Search/SPARQL検索')
          var RDF_creation_order = getOrder('category', 'RDF creation/RDF作成')

          var biologist_order = getOrder(
            "category",
            "Database user/データベース利用者"
          );
          var application_order = getOrder(
            "category",
            "Database application developer (REST API, SPARQL)/アプリケーション開発者 (REST API, SPARQL)"
          );
          var data_scientist_order = getOrder(
            "category",
            "Data scientist/大規模データ解析者 (一括DL)"
          );
          var provider_order = getOrder(
            "category",
            "Data provider/データ所有者"
          );
          var image_order = getOrder('other', '画像')

          function getClassName(num) {
            var tagName = []
            if (symbolYList[num][database_integration_order] === 'Y') {
              tagName.push("database-integration");
            }
            if (symbolYList[num][materials_order] === 'Y') {
              tagName.push("materials");
            }
            if (symbolYList[num][genome_order] === 'Y') {
              tagName.push("genome");
            }
            if (symbolYList[num][gene_order] === "Y") {
              tagName.push("gene");
            }
            if (symbolYList[num][gene_expression_order] === "Y") {
              tagName.push("gene-expression");
            }
            if (symbolYList[num][NGS_order] === "Y") {
              tagName.push("NGS");
            }
            if (symbolYList[num][disease_order] === "Y") {
              tagName.push("disease");
            }
            if (symbolYList[num][natural_language_processing_order] === "Y") {
              tagName.push("natural-language-processing");
            }
            if (symbolYList[num][SPARQL_order] === "Y") {
              tagName.push("SPARQL");
            }
            if (symbolYList[num][RDF_creation_order] === "Y") {
              tagName.push("RDF-creation");
            }
            if (symbolYList[num][biologist_order] === 'Y') {
              tagName.push('biologist')
            }
            if (symbolYList[num][application_order] === 'Y') {
              tagName.push('application')
            }
            if (symbolYList[num][data_scientist_order] === 'Y') {
              tagName.push('data-scientist')
            }
            if (symbolYList[num][provider_order] === 'Y') {
              tagName.push('provider')
            }
            return tagName
          }

          var tagMapping = {
            'database-integration': {
              'ja': 'データベース統合',
              'en': 'Database integration'
            },
            'materials': {
              'ja': '教材・資料',
              'en': 'Materials'
            },
            'genome': {
              'ja': 'ゲノム',
              'en': 'Genome'
            },
            'gene': {
              'ja': '遺伝子',
              'en': 'Gene'
            },
            'gene-expression': {
              'ja': '遺伝子発現',
              'en': 'Gene expression'
            },
            'NGS': {
              'ja': 'NGS',
              'en': 'NGS'
            },
            'disease': {
              'ja': '疾患',
              'en': 'Disease'
            },
            'natural-language-processing': {
              'ja': '自然言語処理',
              'en': 'Natural language processing'
            },
            'SPARQL': {
              'ja': 'SPARQL検索',
              'en': 'SPARQL Search'
            },
            'RDF-creation': {
              'ja': 'RDF作成',
              'en': 'RDF creation'
            },
            'biologist': {
              'ja': 'データベース利用者',
              'en': 'Database user'
            },
            'application': {
              'ja': 'アプリケーション開発者',
              'en': 'Database application developer'
            },
            'data-scientist': {
              'ja': '大規模データ解析者',
              'en': 'Data scientist'
            },
            'provider': {
              'ja': ' データ所有者',
              'en': 'Data provider'
            }
          }

          //file名の取得
          for (var i = 0; i < symbolYList.length; i++) {
            var tagArray = getClassName(i)
            var tagName = tagArray.join(' ')

            function addTagLine(array, lang) {
              var categoryTag = '<div class="tag_wrapper">'
              if (lang === 'ja') {
                for (var j = 0; j < array.length; j++) {
                  var category_name = array[j]
                  let user = ''
                  if (
                    category_name === "biologist" ||
                    category_name === "application" ||
                    category_name === "data-scientist" ||
                    category_name === "provider"
                  ) {
                    user = 'user'
                  }
                  categoryTag +=
                    '<div class="service_category card ' + user + ' tag_element ' + array[j] + '">' +
                    tagMapping[category_name].ja +
                    "</div>";
                }
              } else if (lang === 'en') {
                for (var j = 0; j < array.length; j++) {
                  var category_name = array[j]
                  let user = ''
                  if (
                    category_name === "biologist" ||
                    category_name === "application" ||
                    category_name === "data-scientist" ||
                    category_name === "provider"
                  ) {
                    user = 'user'
                  }
                  categoryTag +=
                    '<div class="service_category card ' + user + ' tag_element ' +
                    array[j] +
                    '">' +
                    tagMapping[category_name].en +
                    "</div>";
                }
              }
              categoryTag += "</div>"
              return categoryTag
            }

            var service_name_hash = symbolYList[i][service_name_order]
            service_name_hash = service_name_hash.replace(/ /g, '_')
            if (service_name_hash.indexOf('/') !== -1) {
              service_name_hash = encodeURIComponent(service_name_hash)
            }

            var lang = $('html').attr('lang')
            if (lang === 'ja') {
              element += '<article class="article__section contener-type-box mix ' + tagName + '">' +
                '<div id="repos_image0" class="repos_image">' +
                '<a href="' + symbolYList[i][url_order] + '" target="_blank">' +
                '<img src="./img/service_assets/' + symbolYList[i][image_order] + '" alt="' + symbolYList[i][service_name_order] + '" class="object-fit-img img_services" /></a></div>' +
                '<div id="repos_name' + i + '" class="repos_name">' +
                '<p class="name name_ja" id="' + symbolYList[i][service_name_order] + '">' + symbolYList[i][core_service_name_order] + '</p>' +
                '<div class="keyword"><p>' + symbolYList[i][keyword_ja_order] + '</p></div>' +
                addTagLine(tagArray, 'ja') +
                '<div class="btn-box">' +
                '<a class="page_btn more_btn" target="_blank" href="#' + service_name_hash + '">' + '詳細' + '</a>' +
                '<a href="' + symbolYList[i][url_order] + '" class="page_btn access_btn" target="_blank">アクセス</a>' +
                '</div></div>'
            } else if (lang === 'en') {
              element += '<article class="article__section contener-type-box mix ' + tagName + '">' +
                '<div id="repos_image0" class="repos_image">' +
                '<a href="' + symbolYList[i][url_order] + '" target="_blank">' +
                '<img src="./img/service_assets/' + symbolYList[i][image_order] + '" alt="' + symbolYList[i][service_name_order] + '" class="object-fit-img img_services" /></a></div>' +
                '<div id="repos_name' + i + '" class="repos_name">' +
                '<p class="name name_en" id="' + symbolYList[i][service_name_order] + '">' + symbolYList[i][service_name_order] + '</p>' +
                '<div class="keyword"><p>' + symbolYList[i][keyword_en_order] + '</p></div>' +
                addTagLine(tagArray, 'en') +
                '<div class="btn-box">' +
                '<a class="page_btn more_btn" target="_blank" href="#' + service_name_hash + '">' + 'more' + '</a>' +
                '<a href="' + symbolYList[i][url_order] + '" class="page_btn access_btn" target="_blank">Access</a>' +
                '</div></div>'
            }

            element += '</article>'

          }
          $("#service_list").append(element);
          var containerEl = document.querySelector('.service__wrapper');
          mixitup(containerEl, {
            multifilter: {
              enable: true
            },
            debug: {
              enable: true
            },
            callbacks: {
              onMixStart: function (state, futureState) {
                $('[data-filter=".mix"]').removeClass('active')
                window.scrollTo({
                  top: 0,
                  left: 0,
                  behavior: 'smooth'
                });
              }
            }
          });
        }
      })
    }

    //詳細ボタンクリックでREADME表示
    // $(document).on('click', '.more_btn', function () {
    //   var service_name = $(this)
    //     .parent()
    //     .siblings(".name")
    //     .attr("id");
    //   service_name = service_name.replace(/ /g, '_')
    //   if(service_name.indexOf('/') !== -1) {
    //     service_name = encodeURIComponent(service_name)
    //   }
    //   location.hash = service_name
    // })

    //リポジトリ個別ページ
    function displayRepos(repos_name) {
      $('title').text(`${decodeURIComponent(repos_name.replace(/\_/g, ' '))} | DBCLS`)

      $('html,body').scrollTop(0);
      var md_data = ''
      $.ajax({
        type: 'get',
        url: "../json/services.json",
        dataType: "json"
      }).done(function (data) {
        var services_array = data
        var publication_order = getOrder("掲載");
        var services_array_Y = services_array.filter((services_array) => {
          return (services_array[publication_order] === "Y");
        })

        function getOrder(target) {
          var order = 0
          for (var i = 0; i < services_array.length; i++) {
            if (services_array[0][i] === target) {
              order = i
            }
          }
          return order
        }
        var service_name_order = getOrder('services_name_en')
        var core_service_name_order = getOrder('services_name_ja')

        function checkCore(name) {
          var coreName = ''
          var sameTypeServices = []
          for (var i = 0; i < services_array_Y.length; i++) {
            var service = services_array_Y[i][service_name_order]
            var core_service = services_array_Y[i][core_service_name_order]
            name = name.replace(/_/g, ' ')
            if (service === name) {
              coreName = services_array_Y[i][core_service_name_order]
            }
          }
          for (var i = 0; i < services_array_Y.length; i++) {
            var service = services_array_Y[i][service_name_order]
            var core_service = services_array_Y[i][core_service_name_order]
            if (core_service === coreName) {
              sameTypeServices.push(services_array_Y[i][service_name_order])
            }
          }
          return sameTypeServices
        }

        repos_name = decodeURIComponent(repos_name);
        var clicked_service = repos_name.replace('_ja', '')
        clicked_service = clicked_service.replace('_en', '')
        var md_array = checkCore(clicked_service)
        var md_array_modified = []

        md_array.forEach(function (data) {
          data = data.replace(/ /g, '_')
          data = data.replace(/\//g, '_')
          if (repos_name.slice(-3) === '_ja') {
            data = data + '_ja'
          } else if (repos_name.slice(-3) === '_en') {
            data = data + '_en'
          }
          md_array_modified.push(data)
        })
        $('.service__wrapper').empty()

        md_array_modified.map(data => {
          var url = window.location;
          var path = url.href.split('/');
          var file_name = path.pop();
          var lang = ''
          if (file_name.match(/services-en\.html/)) {
            lang = 'en'
          } else {
            lang = 'ja'
          }
          var repos_name = data + '_' + lang
          display_description(repos_name)
        })

        function display_description(repos_name) {
          $.ajax({
            type: 'get',
            url: './services/' + repos_name + '.md'
          }).done(function (result) {
            var arranged_data = ''
            arranged_data = marked(result)
            $('.service__wrapper').append($('<div/>').attr({
              'class': 'markdown-body'
            }).html(arranged_data))
          })
        }
      })
    }

    //ハッシュ値が変わった時の画面遷移
    window.addEventListener('hashchange', function () {
      if (location.hash === '') {
        $('.facet_section').removeClass('off')
        $('.service__wrapper').empty()
        var containerEl = document.querySelector('.service__wrapper');
        var mixer = mixitup(containerEl, {
          multifilter: {
            enable: true
          },
          debug: {
            enable: true
          }
        });
        mixer.destroy()
        servicesFrontDisplay()
      } else {
        var service__title = location.hash.slice(1)
        $('.facet_section').addClass('off')
        displayRepos(service__title)
      }
    }, false)
  },
  'events': function () {
    $('.news__individual-wrapper').css('display', 'block')
    var url = window.location;
    var path = url.href.split('/');
    var file_name = path.pop();
    var tags_key = Object.keys(tags)
    tags_key.map(function (data) {
      $('a[tag="' + data + '"]').before('<img src="/img/icon_tag_' + data + '.svg" class="news__tag-icon" alt="" >')
    })
    //タグ名を日本語に変換
    var lang = $('html').attr('lang')
    if (lang === 'ja') {
      $('.tag_name').each(function () {
        var tag_en = $(this).text()
        tag_en = $.trim(tag_en)
        var tag_ja = tags[tag_en]
        $(this).text(tag_ja)
      })
    }

    $.ajax({
      url: "../json/services.json",
      dataType: "json",
      async: true,
      success: function (data) {
        var events_array = data

        function getOrder(target) {
          var order = 0
          for (var i = 0; i < events_array.length; i++) {
            if (events_array[0][i] === target) {
              order = i
            }
          }
          return order
        }
        var event_active_order = getOrder('Event掲載')
        var service_name_order = getOrder('services_name_en')
        var explanation_ja_order = getOrder('explanation_ja')
        var explanation_en_order = getOrder('explanation_en')
        var event_img_order = getOrder('画像')
        var explanation_order = 0
        var url_order = getOrder('URL')
        var url = window.location;
        var path = url.href.split('/');
        var file_name = path.pop();
        var events_array = events_array.filter(data => {
          return data[event_active_order] === 'Y'
        })
        if (lang === 'ja') {
          explanation_order = explanation_ja_order
        } else if (lang === 'en') {
          explanation_order = explanation_en_order
        }

        var elements = ''
        for (var i = 0; i < events_array.length; i++) {
          elements += '<article class="article__section event__section-ja">' +
            // '<img src="/img/event_assets/' + events_array[i][event_img_order] + '">' +
            '<div class="article__section__inner">' +
            '<h4>' + events_array[i][service_name_order] + '</h4>' +
            '<p>' + events_array[i][explanation_order] + '</p>' +
            '<a href = "' + events_array[i][url_order] + '" class = "page_btn more_btn" > more </a>' +
            '</div>' +
            '</article>'
        }
        $('.section-wrapper').append(elements)
      }
    })

    /***左サイドバーの動作ここから***/
    //変動要素: main__contents-"event"
    //mein一つ目セクションの高さの取得
    var client_h = document.getElementById('main__contents-event').clientHeight;

    //クリックでactiveが切り替わる
    $('ul.sub__navigation-wrapper li').on('click', function () {
      $('ul.sub__navigation-wrapper li').removeClass('active');
      $(this).addClass('active');
    })
    //取得したある高さまで、移動
    $(".sub_2").on('click', function () {
      window.scrollTo(0, client_h);
    })
    $(".sub_1").on('click', function () {
      window.scrollTo(0, 0);
    })
    //==>スクロールでactiveが切り替わる
    $(window).scroll(function () {
      if ($(this).scrollTop() > client_h) {
        $('ul.sub__navigation-wrapper li.sub_1').removeClass('active');
        $('ul.sub__navigation-wrapper li.sub_2').addClass('active');
      } else if ($(this).scrollTop() < client_h) {
        $('ul.sub__navigation-wrapper li.sub_2').removeClass('active');
        $('ul.sub__navigation-wrapper li.sub_1').addClass('active');
      }
    })
    /***左サイドバーの動作ここまで***/
  },
  'members': function () {
    $.when(
      $.getJSON('../json/members.json'),
      $.getJSON('../json/services.json')
    ).done(function (data, data_services) {
      var lang = $('html').attr('lang')
      var element = "";
      var element_collaborators = ""
      var listSubNav = "";
      var listSubNav_en = ""
      var listSubNav_collaborators = ""
      var listSubNav_collaborators_en = ""
      data = data[0]
      var name_ja_order = getOrder('name ja')
      var name_en_order = getOrder('name en')
      var image_order = getOrder('画像')
      var position_ja_order = getOrder('position_ja')
      var position_en_order = getOrder('position_en')
      var keyword_order = getOrder('keyword')
      var keyword_en_order = getOrder('keyword-en')
      var orcid_order = getOrder('ORCID')
      var research_map_order = getOrder('Researchmap')
      var googleScholar_order = getOrder('Google Scholar')
      var github_order = getOrder('github')
      var mail_order = getOrder('mail')
      var website_order = getOrder('Website')
      var non_publish_order = getOrder('いずれのIDも掲載しない')

      for (var j = 1; j < data.length; j++) {
        if (data[j][position_ja_order].match(/客員/) || data[j][position_ja_order].match(/外来/)) {
          listSubNav_collaborators += '<li><a href="#' + data[j][name_ja_order] + '">' + data[j][name_ja_order] + '</a></li>';
        } else {
          listSubNav += '<li><a href="#' + data[j][name_ja_order] + '">' + data[j][name_ja_order] + '</a></li>';
        }
      }
      for (var j = 1; j < data.length; j++) {
        if (data[j][position_ja_order].match(/客員/) || data[j][position_ja_order].match(/外来/)) {
          listSubNav_collaborators_en += '<li><a href="#' + data[j][name_en_order] + '">' + data[j][name_en_order] + '</a></li>';
        } else {
          listSubNav_en += '<li><a href="#' + data[j][name_en_order] + '">' + data[j][name_en_order] + '</a></li>';
        }
      }

      function judgeExist(data, className, linkName, lang) {
        var elements = ''
        if (data) {
          if (linkName === 'Mail') {
            data = 'mailto:' + data
          } else if (linkName === 'GitHub') {
            data = 'https://github.com/' + data
          } else if (linkName === 'ORCID') {
            data = 'https://orcid.org/' + data
          } else if (linkName === 'researchmap') {
            if (lang === "en") {
              data = ' https://researchmap.jp/' + data + '?lang=en'
            } else {
              data = ' https://researchmap.jp/' + data
            }
          }
          elements = '<a href="' + data + '" class="' + className + '" target="_blank">' + linkName + '</a>'
        } else {
          elements = ''
        }
        return elements
      }

      function getOrder(target) {
        var order = 0
        for (var i = 1; i < data.length; i++) {
          if (data[0][i] === target) {
            order = i
          }
        }
        return order
      }

      if (lang === 'ja') {
        $("#memberList").append(listSubNav);
        $("#memberList-collaborators").append(listSubNav_collaborators)

        for (var i = 1; i < data.length; i++) {
          var name_ja = data[i][name_ja_order]
          var name_en = data[i][name_en_order]
          var image = data[i][image_order]
          var position = data[i][position_ja_order]
          //var position_en = data[i][]
          var keyword = data[i][keyword_order]
          //var keyword_en = data[i][]
          var orcid = data[i][orcid_order]
          var research_map = data[i][research_map_order]
          var googleScholar = data[i][googleScholar_order]
          var github = data[i][github_order]
          var mail = data[i][mail_order]
          var website = data[i][website_order]
          var non_publish = data[i][non_publish_order]
          var link_section = judgeExist(mail, 'btn-mail', 'Mail') +
            judgeExist(github, 'btn-github', 'GitHub') +
            judgeExist(orcid, 'btn-orcid', 'ORCID') +
            judgeExist(research_map, 'btn-researchmap', 'researchmap') +
            judgeExist(googleScholar, 'btn-gs', 'Google Scholar') +
            judgeExist(website, 'btn-web', 'Website')
          if (non_publish === 'Yes') {
            link_section = judgeExist(mail, 'btn-mail', 'Mail')
          }
          if (position.match(/客員/) || position.match(/外来/)) {
            element_collaborators += '<div class="content__member" id="' + name_ja + '">' +
              '<div class="repos_image">' + '<img src="./img/member/' + image + '" alt="' + name_ja + '" class="img_member"></div>' +
              '<ul><li class="position">' + position + '</li>' +
              '<li class="repos_name"><span class="name_ja">' + name_ja + '</span><span class="name_en">' + name_en + '</span></li>' +
              '<li class="keyword">' + keyword + '</li>' +
              '<li class="PIC">担当サービス：<div class="member-list__services"></div></li>' +
              '<li class="links"><div class="btn-box">' +
              link_section +
              '</div></li></ul></div>';
          } else {
            element += '<div class="content__member" id="' + name_ja + '">' +
              '<div class="repos_image">' + '<img src="./img/member/' + image + '" alt="' + name_ja + '" class="img_member"></div>' +
              '<ul><li class="position">' + position + '</li>' +
              '<li class="repos_name"><span class="name_ja">' + name_ja + '</span><span class="name_en">' + name_en + '</span></li>' +
              '<li class="keyword">' + keyword + '</li>' +
              '<li class="PIC">担当サービス：<div class="member-list__services"></div></li>' +
              '<li class="links"><div class="btn-box">' +
              link_section +
              '</div></li></ul></div>';
          }
        }
      } else if (lang === 'en') {
        $("#memberList").append(listSubNav_en);
        $("#memberList-collaborators").append(listSubNav_collaborators_en)

        for (var i = 1; i < data.length; i++) {
          var name_ja = data[i][name_ja_order]
          var name_en = data[i][name_en_order]
          var image = data[i][image_order]
          var position = data[i][position_en_order]
          //var position_en = data[i][]
          var keyword = data[i][keyword_order]
          var keyword_en = data[i][keyword_en_order]
          var orcid = data[i][orcid_order]
          var research_map = data[i][research_map_order]
          var googleScholar = data[i][googleScholar_order]
          var github = data[i][github_order]
          var mail = data[i][mail_order]
          var website = data[i][website_order]
          var non_publish = data[i][non_publish_order]
          var link_section = ''
          link_section = judgeExist(mail, 'btn-mail', 'Mail') +
            judgeExist(github, 'btn-github', 'GitHub') +
            judgeExist(orcid, 'btn-orcid', 'ORCID') +
            judgeExist(research_map, 'btn-researchmap', 'researchmap', 'en') +
            judgeExist(googleScholar, 'btn-gs', 'Google Scholar') +
            judgeExist(website, 'btn-web', 'Website')

          if (non_publish === 'Yes') {
            link_section = judgeExist(mail, 'btn-mail', 'Mail')
          }
          if (position.match(/Guest/) || position.match(/Visiting/)) {
            element_collaborators += '<div class="content__member" id="' + name_en + '">' +
              '<div class="repos_image">' + '<img src="./img/member/' + image + '" alt="' + name_en + '" class="img_member"></div>' +
              '<ul><li class="position">' + position + '</li>' +
              '<li class="repos_name"><span class="name_ja">' + name_ja + '</span><span class="name_en">' + name_en + '</span></li>' +
              '<li class="keyword">' + keyword_en + '</li>' +
              '<li class="PIC">Responsible for：<div class="member-list__services"></div></li>' +
              '<li class="links"><div class="btn-box">' +
              link_section +
              '</div></li></ul></div>';
          } else {
            element += '<div class="content__member" id="' + name_en + '">' +
              '<div class="repos_image">' + '<img src="./img/member/' + image + '" alt="' + name_en + '" class="img_member"></div>' +
              '<ul><li class="position">' + position + '</li>' +
              '<li class="repos_name"><span class="name_ja">' + name_ja + '</span><span class="name_en">' + name_en + '</span></li>' +
              '<li class="keyword">' + keyword_en + '</li>' +
              '<li class="PIC">Responsible for：<div class="member-list__services"></div></li>' +
              '<li class="links"><div class="btn-box">' +
              link_section +
              '</div></li></ul></div>';
          }
        }
      }
      $("#member-list").append(element);
      $("#member-list-collaborators").append(element_collaborators);

      //担当サービスの実装

      data_services = data_services[0]
      data_services = data_services.filter(data => {
        return data[1] === "Y";
      })

      $('.btn-mail').each(function () {
        const mail = $(this).attr("href").replace("mailto:", "")
        let charged_services = data_services.filter(service => {
          return service[8] === mail || service[9] === mail || service[10] === mail
        }).map(service => service[4])
        if (charged_services.length > 0) {
          var charge_tag = $(this).parent().parent().siblings('.PIC').find('.member-list__services')
          $(charge_tag).text(charged_services.join(',').replace(/,/g, ', '))
        } else {
          var charge_tag = $(this).parent().parent().siblings('.PIC')
          $(charge_tag).remove()
        }
      })
    })

    $(document).on('click', '#memberList li a', function () {
      setTimeout(function () {
        var offset = $(window).scrollTop()
        var windowHeight = $(window).height()
        var offsetPlus = offset - windowHeight * .4
        $(window).scrollTop(offsetPlus)
      }, 0)
    })
  },
  'access': function () {

    /***左サイドバーの動作ここから***/
    //変動要素: main__contents-"event"
    var client_h = document.getElementById('main__contents-kashiwa').clientHeight;

    //クリックでactiveが切り替わる
    $('ul.sub__navigation-wrapper li').on('click', function () {
      $('ul.sub__navigation-wrapper li').removeClass('active');
      $(this).addClass('active');
    })
    //取得したある高さまで、移動
    $(".sub_2").on('click', function () {
      window.scrollTo(0, client_h);
    })
    $(".sub_1").on('click', function () {
      window.scrollTo(0, 0);
    })
    //スクロールでactiveが切り替わる
    $(window).scroll(function () {
      if ($(this).scrollTop() > client_h) {
        $('ul.sub__navigation-wrapper li.sub_1').removeClass('active');
        $('ul.sub__navigation-wrapper li.sub_2').addClass('active');
      } else if ($(this).scrollTop() < client_h) {
        $('ul.sub__navigation-wrapper li.sub_2').removeClass('active');
        $('ul.sub__navigation-wrapper li.sub_1').addClass('active');
      }
    })
    /***左サイドバーの動作ここまで***/
  },
  'contact': function () {}
};

script.addEventListener('load', function () {
  $(function () {
    var pageType = $('html').attr('data-page-type')
    initialize[pageType]()

    var page_map = {
      'index': 'index',
      'post': 'index',
      'news': 'index',
      'about': 'about',
      'history': 'about',
      'faq': 'about',
      'policy': 'about',
      'logotype': 'about',
      'research': 'research',
      'publications': 'research',
      'services': 'services',
      'references': 'services',
      'events': 'events',
      'members': 'members',
      'access': 'access',
      'contact': 'contact'
    }

    var parent_type = ''
    var children_pages = Object.keys(page_map)
    var current_class_name = ''
    children_pages.map(child => {
      if (child === pageType) {
        parent_type = page_map[pageType]
      }
    })

    current_class_name = '.' + parent_type
    $('.header__nav__contents' + current_class_name).find('a').css('border-bottom', '2px solid white')

    //header言語切り替え
    var url = window.location;
    var path = url.href;

    $('.lang-en span').on('click', function () {
      if (path.match(/\/ja\/\d+\/\d+\/\d+\//)) {
        window.location.href = path.replace('/ja/', '/en/')
      } else if (url.href.match(/services\.html#/)) {
        var link = url.href
        var link = link.replace('services.html', 'services-en.html')
        window.location.href = link
      } else {
        var link = pageType + '-en.html'
        window.location.href = link
      }
    })

    $('.lang-ja span').on('click', function () {
      if (path.match(/\/en\/\d+\/\d+\/\d+\//)) {
        window.location.href = path.replace('/en/', '/ja/')
      } else if (url.href.match(/services-en\.html#/)) {
        var link = url.href
        var link = link.replace('services-en.html', 'services.html')
        window.location.href = link
      } else {
        var link = pageType + '.html'
        window.location.href = link
      }
    })

    //sticky IE対応
    var elements = document.querySelectorAll('.sticky');
    Stickyfill.add(elements);

  })
})
