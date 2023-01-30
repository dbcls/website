var script = document.createElement('script');

script.setAttribute('src', 'https://code.jquery.com/jquery-3.2.1.min.js');
document.head.appendChild(script);

script.addEventListener('load', function () {
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
  });
