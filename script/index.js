var script = document.createElement('script');

script.setAttribute('src', 'https://code.jquery.com/jquery-3.2.1.min.js');
document.head.appendChild(script);

script.addEventListener('load', function () {
  $('.news__individual-wrapper').css('display', 'block');

  // Swiper Library https://swiperjs.com/
  const swiper = new Swiper('.thumbnail-carousel', {
    spaceBetween: 5,
    slidesPerView: 6,
    direction: 'vertical',
  });
  const swiper2 = new Swiper('.main-carousel', {
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
    allowTouchMove: false,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    thumbs: {
      swiper: swiper,
    },
  });
});
