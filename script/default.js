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

script.setAttribute('src', 'https://code.jquery.com/jquery-3.2.1.min.js');
script_sticky.setAttribute('src', '/script/stickyfill.min.js');
link_favicon.setAttribute('rel', 'icon');
link_favicon.setAttribute('type', 'image/png');
link_favicon.setAttribute('href', '/img/favicon.ico');
document.head.appendChild(script);
document.head.appendChild(script_sticky);
document.head.appendChild(link_favicon);

const tags = {
  public_relations: '広報',
  services: 'サービス',
  events: 'イベント',
  registration: '募集',
  other: 'その他',
};

const addColorTags = (tags) => {
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
  const setTagNamesToJp = () => {
    $('.tag_name').each(function () {
      var tag_en = $(this).text();
      tag_en = $.trim(tag_en);
      var tag_ja = tags[tag_en];
      $(this).text(tag_ja);
    });
  };
  //ページのタグ名を日本語に変換
  var lang = $('html').attr('lang');
  if (lang === 'ja' || file_name === 'news.html' || path.indexOf('ja') >= 0) {
    setTagNamesToJp();
  }
};

var initialize = {
  index: function () {
    addColorTags(tags);
  },
  news: function () {
    addColorTags(tags);
  },
  post: function () {
    addColorTags(tags);
    marked($('.markdown-body').html());
  },
  about: function () {},
  history: function () {},
  funding: function () {},
  faq: function () {},
  policy: function () {},
  logotype: function () {},
  research: function () {},
  publications: function () {},
  references: function () {},
  services: function () {},
  events: function () {
    addColorTags(tags);
  },
  members: function () {},
  access: function () {},
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
