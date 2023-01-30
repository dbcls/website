var script = document.createElement('script');

script.setAttribute('src', 'https://code.jquery.com/jquery-3.2.1.min.js');
document.head.appendChild(script);

script.addEventListener('load', function () {
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
});})