var script = document.createElement('script');

script.setAttribute('src', 'https://code.jquery.com/jquery-3.2.1.min.js');
document.head.appendChild(script);

script.addEventListener('load', function () {
  $('.news__individual-wrapper').css('display', 'block');

  // Swiper Library https://swiperjs.com/
  const swiper = new Swiper('.thumbnail-carousel', {
    // autoplay: {
    //   delay: 1000,
    // },
    spaceBetween: 10,
    slidesPerView: 6,
    direction: 'vertical',
    // loopedSlides: 1,
  });
  const swiper2 = new Swiper('.main-carousel', {
    autoplay: {
      delay: 200000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
    allowTouchMove: false,
    // loopedSlides: 1,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    thumbs: {
      swiper: swiper,
    },
  });
});
