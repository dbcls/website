var script = document.createElement('script');

script.setAttribute('src', 'https://code.jquery.com/jquery-3.2.1.min.js');
document.head.appendChild(script);

script.addEventListener('load', function () {
  /***左サイドバーの動作ここから***/
  //変動要素: main__contents-"event"
  var client_h = document.getElementById('main__contents-kashiwa').clientHeight;

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
});
