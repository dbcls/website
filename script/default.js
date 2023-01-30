// Content Security Policy
// var meta = document.createElement('META')
// meta.setAttribute('HTTP-EQUIV', 'Content-Security-Policy')
// meta.setAttribute('CONTENT', `default-src 'self';
//         script-src 'self' 'unsafe-inline' 'unsafe-eval' code.jquery.com www.googletagmanager.com;
//         font-src 'self' fonts.googleapis.com fonts.gstatic.com;`)
// document.head.appendChild(meta)

var script = document.createElement('script');
var script_sticky = document.createElement('script');
var link_favicon = document.createElement('link');

var tags = {
  public_relations: '広報',
  services: 'サービス',
  events: 'イベント',
  registration: '募集',
  other: 'その他',
};

script.setAttribute('src', 'https://code.jquery.com/jquery-3.2.1.min.js');
script_sticky.setAttribute('src', '/script/stickyfill.min.js');
link_favicon.setAttribute('rel', 'icon');
link_favicon.setAttribute('type', 'image/png');
link_favicon.setAttribute('href', '/img/favicon.ico');
document.head.appendChild(script);
document.head.appendChild(script_sticky);
document.head.appendChild(link_favicon);

/* ------------------------------
 Loading イメージ表示関数
 引数： msg 画面に表示する文言
 ------------------------------ */
function dispLoading(msg) {
  // 引数なし（メッセージなし）を許容
  $('.main__contents').append(
    "<div id='loading'><img src='/img/loading.gif' /></div>"
  );
}

/* ------------------------------
 Loading イメージ削除関数
 ------------------------------ */
function removeLoading() {
  $('#loading').remove();
}

function showModal() {
  document.getElementById('overlay').style.display = 'block';
}

function hideModal() {
  document.getElementById('overlay').style.display = 'none';
}

var initialize = {
  index: function () {
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
  },
  news: function () {
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
    if (file_name === 'news.html') {
      $('.tag_name').each(function () {
        var tag_en = $(this).text();
        tag_en = $.trim(tag_en);
        var tag_ja = tags[tag_en];
        $(this).text(tag_ja);
      });
    }

    $('.post__individual').each(function () {
      var tag_className = $(this).attr('class');
      tag_className = tag_className.match(/\[\"(.+?)\"\]/g);
      tag_className = tag_className[0].match(/\"(.+?)\"/g);
      tag_className = tag_className.join(' ');
      tag_className = tag_className.replace(/"/g, '');
      $(this).addClass(tag_className);
    });
  },
  post: function () {
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
    marked($('.markdown-body').html());
    //タグ名を日本語に変換
    if (path.indexOf('ja') >= 0) {
      $('.tag_name').each(function () {
        var tag_en = $(this).text();
        tag_en = $.trim(tag_en);
        var tag_ja = tags[tag_en];
        $(this).text(tag_ja);
      });
    }
    //個別記事のサイト外URLにtarget="_blank"
    $(document).ready(function () {
      $("a[href^='http']:not([href*='" + location.hostname + "'])").attr(
        'target',
        '_blank'
      );
    });
  },
  about: function () {
    $('.lazy-mail').each(function () {
      var self = this;
      setTimeout(function () {
        var $target = jQuery(self);
        var address = $target
          .data('address')
          .split('_at_')
          .join('@')
          .split('_dot_')
          .join('.');
        $target.attr('href', 'mailto:' + address).text(address);
      }, 1000);
    });
  },
  history: function () {
    var table_height = $('.table-history').height();
    $('.history__vertival-line').css('height', table_height);
    $('.history__vertival-dotted').css('top', table_height + 12);
  },
  funding: function () {},
  faq: function () {},
  policy: function () {},
  logotype: function () {},
  research: function () {
    // Modal ViewのON/OFF toggle
    const triggers = $('.trigger');
    const triggerArray = Array.from(triggers).entries();
    const modals = $('.modal');
    $('.modal__content').click((e) => e.stopPropagation());
    const closeButtons = $('.btn-close');

    for (let [index, trigger] of triggerArray) {
      function toggleModal() {
        modals[index].classList.toggle('show-modal');
      }
      const toggleModalElements = [trigger, modals[index], closeButtons[index]];
      toggleModalElements.forEach((el) => {
        el.addEventListener('click', toggleModal);
      });
    }
  },
  publications: function () {},
  references: function () {
    // 処理前に Loading 画像を表示
    dispLoading('処理中...');

    $.ajax({
      url: './json/paper.json',
      dataType: 'json',
      async: true,
      success: function (data) {
        const update_date = new Date(data.updated);
        const year = update_date.getFullYear();
        const month = update_date.getMonth();
        const date = update_date.getDate();
        $('.update_date').text(`${year}年${month + 1}月${date}日現在`);
        // Lading 画像を消す
        removeLoading();
        var web_server_order = 0;
        var citation_order = 1;
        var PMID_order = 2;
        var DOI_order = 3;
        var title_order = 4;
        var first_author_order = 5;
        var Journal_order = 6;
        var e_pub_date_order = 7;
        var elementArray = data.data;
        var elementArray_service = [];
        for (var i = 0; i < elementArray.length; i++) {
          elementArray_service.push(elementArray[i][0]);
        }
        elementArray_service = _.rest(elementArray_service, 2);
        elementArray_service = _.uniq(elementArray_service);
        var filterList = {};
        for (var i = 0; i < elementArray_service.length; i++) {
          var service_name = elementArray_service[i];
          filterList[service_name] = elementArray.filter((list) => {
            return list[0] === service_name;
          });
        }

        var element = '';
        var names = Object.keys(filterList);
        names = names.sort(function (name_1, name_2) {
          return filterList[name_2].length - filterList[name_1].length;
        });
        element += '<table class="papers_citing_table"><tbody>';
        for (i = 0; i < names.length; i++) {
          var indivisual_service = filterList[names[i]];
          indivisual_service = indivisual_service.filter((data) => {
            return data[1] !== 'Original';
          });
          var nameslength = indivisual_service.length;

          element +=
            '<tr><td><div class="filName" data-category="' +
            names[i] +
            '">' +
            names[i] +
            '</div></td>' +
            '<td><p class="quote_num">' +
            nameslength +
            '</p></td></tr>';
        }
        element += '</tbody></table>';

        function displayList() {
          if (document.documentElement.lang === 'en') {
            $('.publications__wrapper').append(element);
          } else if (document.documentElement.lang === 'ja') {
            $('.publications__wrapper').append(element);
          }
        }
        displayList();

        $(document).on('click', '.filName', function () {
          names = $(this).html();
          displayIndividual(names);
        });

        $(document).on('click', '.quote_num', function () {
          var name_div = $(this).parent().prev().find('div');
          names = name_div.html();
          displayIndividual(names);
        });

        function displayIndividual(names) {
          location.hash = names;
          var arranged_name = names.replace('%20', ' ');
          $('.main__content-title').text(arranged_name);
          //filterListをarranged_nameのものだけにフィルタリングして新しい配列
          $('.publications__wrapper').empty();
          var service_array = [];
          service_array = filterList[arranged_name];
          service_array = service_array.filter((data) => {
            return data[1] !== 'Original';
          });
          var results = '';

          for (var i = 0; i < service_array.length; i++) {
            const pubmed =
              service_array[i][2] === 'NA'
                ? 'NA'
                : `<a href="https://www.ncbi.nlm.nih.gov/pubmed/?term=${service_array[i][2]}" target="_blank">${service_array[i][2]}</a>`;
            let pub_date = service_array[i][e_pub_date_order];
            if (pub_date && pub_date !== 'NA') {
              pub_date = new Date(pub_date);
              pub_date = `${pub_date.getFullYear()}-${
                pub_date.getMonth() + 1
              }-${pub_date.getDate()}`;
            } else {
              pub_date = 'NA';
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
              '</div>';
          }
          $('.publications__wrapper').append(results);
        }

        //ハッシュ値が変わった時の画面遷移
        window.addEventListener(
          'hashchange',
          function () {
            if (location.hash === '') {
              $('.publications__wrapper').empty();
              displayList();
            } else {
              var service__title = location.hash.slice(1);
              displayIndividual(service__title);
            }
          },
          false
        );

        if (location.hash === '') {
        } else {
          var service__title = location.hash.slice(1);
          displayIndividual(service__title);
        }
      },
    });
  },
  events: function () {
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
  },
  members: function () {
    $.when(
      $.getJSON('../json/members.json'),
      $.getJSON('../json/services.json')
    ).done(function (data, data_services) {
      var lang = $('html').attr('lang');
      var element = '';
      var element_collaborators = '';
      var listSubNav = '';
      var listSubNav_en = '';
      var listSubNav_collaborators = '';
      var listSubNav_collaborators_en = '';
      data = data[0];
      var name_ja_order = getOrder('name ja');
      var name_en_order = getOrder('name en');
      var image_order = getOrder('画像');
      var position_ja_order = getOrder('position_ja');
      var position_en_order = getOrder('position_en');
      var keyword_order = getOrder('keyword');
      var keyword_en_order = getOrder('keyword-en');
      var orcid_order = getOrder('ORCID');
      var research_map_order = getOrder('Researchmap');
      var googleScholar_order = getOrder('Google Scholar');
      var github_order = getOrder('github');
      var mail_order = getOrder('mail');
      var website_order = getOrder('Website');
      var non_publish_order = getOrder('いずれのIDも掲載しない');

      for (var j = 1; j < data.length; j++) {
        if (
          data[j][position_ja_order].match(/客員/) ||
          data[j][position_ja_order].match(/外来/)
        ) {
          listSubNav_collaborators +=
            '<li><a href="#' +
            data[j][name_ja_order] +
            '">' +
            data[j][name_ja_order] +
            '</a></li>';
        } else {
          listSubNav +=
            '<li><a href="#' +
            data[j][name_ja_order] +
            '">' +
            data[j][name_ja_order] +
            '</a></li>';
        }
      }
      for (var j = 1; j < data.length; j++) {
        if (
          data[j][position_ja_order].match(/客員/) ||
          data[j][position_ja_order].match(/外来/)
        ) {
          listSubNav_collaborators_en +=
            '<li><a href="#' +
            data[j][name_en_order] +
            '">' +
            data[j][name_en_order] +
            '</a></li>';
        } else {
          listSubNav_en +=
            '<li><a href="#' +
            data[j][name_en_order] +
            '">' +
            data[j][name_en_order] +
            '</a></li>';
        }
      }

      function judgeExist(data, className, linkName, lang) {
        var elements = '';
        if (data) {
          if (linkName === 'Mail') {
            data = 'mailto:' + data;
          } else if (linkName === 'GitHub') {
            data = 'https://github.com/' + data;
          } else if (linkName === 'ORCID') {
            data = 'https://orcid.org/' + data;
          } else if (linkName === 'researchmap') {
            if (lang === 'en') {
              data = ' https://researchmap.jp/' + data + '?lang=en';
            } else {
              data = ' https://researchmap.jp/' + data;
            }
          }
          elements =
            '<a href="' +
            data +
            '" class="' +
            className +
            '" target="_blank">' +
            linkName +
            '</a>';
        } else {
          elements = '';
        }
        return elements;
      }

      function getOrder(target) {
        var order = 0;
        for (var i = 1; i < data.length; i++) {
          if (data[0][i] === target) {
            order = i;
          }
        }
        return order;
      }

      if (lang === 'ja') {
        $('#memberList').append(listSubNav);
        $('#memberList-collaborators').append(listSubNav_collaborators);

        for (var i = 1; i < data.length; i++) {
          var name_ja = data[i][name_ja_order];
          var name_en = data[i][name_en_order];
          var image = data[i][image_order];
          var position = data[i][position_ja_order];
          //var position_en = data[i][]
          var keyword = data[i][keyword_order];
          //var keyword_en = data[i][]
          var orcid = data[i][orcid_order];
          var research_map = data[i][research_map_order];
          var googleScholar = data[i][googleScholar_order];
          var github = data[i][github_order];
          var mail = data[i][mail_order];
          var website = data[i][website_order];
          var non_publish = data[i][non_publish_order];
          var link_section =
            judgeExist(mail, 'btn-mail', 'Mail') +
            judgeExist(github, 'btn-github', 'GitHub') +
            judgeExist(orcid, 'btn-orcid', 'ORCID') +
            judgeExist(research_map, 'btn-researchmap', 'researchmap') +
            judgeExist(googleScholar, 'btn-gs', 'Google Scholar') +
            judgeExist(website, 'btn-web', 'Website');
          if (non_publish === 'Yes') {
            link_section = judgeExist(mail, 'btn-mail', 'Mail');
          }
          if (position.match(/客員/) || position.match(/外来/)) {
            element_collaborators +=
              '<div class="content__member" id="' +
              name_ja +
              '">' +
              '<div class="repos_image">' +
              '<img src="./img/member/' +
              image +
              '" alt="' +
              name_ja +
              '" class="img_member"></div>' +
              '<ul><li class="position">' +
              position +
              '</li>' +
              '<li class="repos_name"><span class="name_ja">' +
              name_ja +
              '</span><span class="name_en">' +
              name_en +
              '</span></li>' +
              '<li class="keyword">' +
              keyword +
              '</li>' +
              '<li class="PIC">担当サービス：<div class="member-list__services"></div></li>' +
              '<li class="links"><div class="btn-box">' +
              link_section +
              '</div></li></ul></div>';
          } else {
            element +=
              '<div class="content__member" id="' +
              name_ja +
              '">' +
              '<div class="repos_image">' +
              '<img src="./img/member/' +
              image +
              '" alt="' +
              name_ja +
              '" class="img_member"></div>' +
              '<ul><li class="position">' +
              position +
              '</li>' +
              '<li class="repos_name"><span class="name_ja">' +
              name_ja +
              '</span><span class="name_en">' +
              name_en +
              '</span></li>' +
              '<li class="keyword">' +
              keyword +
              '</li>' +
              '<li class="PIC">担当サービス：<div class="member-list__services"></div></li>' +
              '<li class="links"><div class="btn-box">' +
              link_section +
              '</div></li></ul></div>';
          }
        }
      } else if (lang === 'en') {
        $('#memberList').append(listSubNav_en);
        $('#memberList-collaborators').append(listSubNav_collaborators_en);

        for (var i = 1; i < data.length; i++) {
          var name_ja = data[i][name_ja_order];
          var name_en = data[i][name_en_order];
          var image = data[i][image_order];
          var position = data[i][position_en_order];
          //var position_en = data[i][]
          var keyword = data[i][keyword_order];
          var keyword_en = data[i][keyword_en_order];
          var orcid = data[i][orcid_order];
          var research_map = data[i][research_map_order];
          var googleScholar = data[i][googleScholar_order];
          var github = data[i][github_order];
          var mail = data[i][mail_order];
          var website = data[i][website_order];
          var non_publish = data[i][non_publish_order];
          var link_section = '';
          link_section =
            judgeExist(mail, 'btn-mail', 'Mail') +
            judgeExist(github, 'btn-github', 'GitHub') +
            judgeExist(orcid, 'btn-orcid', 'ORCID') +
            judgeExist(research_map, 'btn-researchmap', 'researchmap', 'en') +
            judgeExist(googleScholar, 'btn-gs', 'Google Scholar') +
            judgeExist(website, 'btn-web', 'Website');

          if (non_publish === 'Yes') {
            link_section = judgeExist(mail, 'btn-mail', 'Mail');
          }
          if (position.match(/Guest/) || position.match(/Visiting/)) {
            element_collaborators +=
              '<div class="content__member" id="' +
              name_en +
              '">' +
              '<div class="repos_image">' +
              '<img src="./img/member/' +
              image +
              '" alt="' +
              name_en +
              '" class="img_member"></div>' +
              '<ul><li class="position">' +
              position +
              '</li>' +
              '<li class="repos_name"><span class="name_ja">' +
              name_ja +
              '</span><span class="name_en">' +
              name_en +
              '</span></li>' +
              '<li class="keyword">' +
              keyword_en +
              '</li>' +
              '<li class="PIC">Responsible for：<div class="member-list__services"></div></li>' +
              '<li class="links"><div class="btn-box">' +
              link_section +
              '</div></li></ul></div>';
          } else {
            element +=
              '<div class="content__member" id="' +
              name_en +
              '">' +
              '<div class="repos_image">' +
              '<img src="./img/member/' +
              image +
              '" alt="' +
              name_en +
              '" class="img_member"></div>' +
              '<ul><li class="position">' +
              position +
              '</li>' +
              '<li class="repos_name"><span class="name_ja">' +
              name_ja +
              '</span><span class="name_en">' +
              name_en +
              '</span></li>' +
              '<li class="keyword">' +
              keyword_en +
              '</li>' +
              '<li class="PIC">Responsible for：<div class="member-list__services"></div></li>' +
              '<li class="links"><div class="btn-box">' +
              link_section +
              '</div></li></ul></div>';
          }
        }
      }
      $('#member-list').append(element);
      $('#member-list-collaborators').append(element_collaborators);

      //担当サービスの実装

      data_services = data_services[0];
      data_services = data_services.filter((data) => {
        return data[1] === 'Y';
      });

      $('.btn-mail').each(function () {
        const mail = $(this).attr('href').replace('mailto:', '');
        let charged_services = data_services
          .filter((service) => {
            return (
              service[8] === mail || service[9] === mail || service[10] === mail
            );
          })
          .map((service) => service[4]);
        if (charged_services.length > 0) {
          var charge_tag = $(this)
            .parent()
            .parent()
            .siblings('.PIC')
            .find('.member-list__services');
          $(charge_tag).text(charged_services.join(',').replace(/,/g, ', '));
        } else {
          var charge_tag = $(this).parent().parent().siblings('.PIC');
          $(charge_tag).remove();
        }
      });
    });

    $(document).on('click', '#memberList li a', function () {
      setTimeout(function () {
        var offset = $(window).scrollTop();
        var windowHeight = $(window).height();
        var offsetPlus = offset - windowHeight * 0.4;
        $(window).scrollTop(offsetPlus);
      }, 0);
    });
  },
  access: function () {
    /***左サイドバーの動作ここから***/
    //変動要素: main__contents-"event"
    var client_h = document.getElementById(
      'main__contents-kashiwa'
    ).clientHeight;

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
    //スクロールでactiveが切り替わる
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
  },
  contact: function () {},
};

script.addEventListener('load', function () {
  $(function () {
    var pageType = $('html').attr('data-page-type');
    initialize[pageType]();

    var page_map = {
      index: 'index',
      post: 'index',
      news: 'index',
      about: 'about',
      history: 'about',
      faq: 'about',
      policy: 'about',
      logotype: 'about',
      research: 'research',
      publications: 'research',
      services: 'services',
      references: 'services',
      events: 'events',
      members: 'members',
      access: 'access',
      contact: 'contact',
    };

    var parent_type = '';
    var children_pages = Object.keys(page_map);
    var current_class_name = '';
    children_pages.map((child) => {
      if (child === pageType) {
        parent_type = page_map[pageType];
      }
    });

    current_class_name = '.' + parent_type;
    $('.header__nav__contents' + current_class_name)
      .find('a')
      .css('border-bottom', '2px solid white');

    //header言語切り替え
    var url = window.location;
    var path = url.href;

    $('.lang-en span').on('click', function () {
      if (path.match(/\/ja\/\d+\/\d+\/\d+\//)) {
        window.location.href = path.replace('/ja/', '/en/');
      } else if (url.href.match(/services\.html#/)) {
        var link = url.href;
        var link = link.replace('services.html', 'services-en.html');
        window.location.href = link;
      } else {
        var link = pageType + '-en.html';
        window.location.href = link;
      }
    });

    $('.lang-ja span').on('click', function () {
      if (path.match(/\/en\/\d+\/\d+\/\d+\//)) {
        window.location.href = path.replace('/en/', '/ja/');
      } else if (url.href.match(/services-en\.html#/)) {
        var link = url.href;
        var link = link.replace('services-en.html', 'services.html');
        window.location.href = link;
      } else {
        var link = pageType + '.html';
        window.location.href = link;
      }
    });

    //sticky IE対応
    var elements = document.querySelectorAll('.sticky');
    Stickyfill.add(elements);
  });
});
