var script = document.createElement('script');

script.setAttribute('src', 'https://code.jquery.com/jquery-3.2.1.min.js');
document.head.appendChild(script);

script.addEventListener('load', function () {
  $('.news__individual-wrapper').css('display', 'block');

  // Swiper Library https://swiperjs.com/
  var swiper = new Swiper('.mySwiper', {
    autoplay: {
      delay: 2000,
    },
    spaceBetween: 10,
    slidesPerView: 6,
    freeMode: true,
    watchSlidesProgress: true,
    direction: 'vertical',
    // loopedSlides: 1,
  });
  var swiper2 = new Swiper('.mySwiper2', {
    autoplay: {
      delay: 2000,
      stopOnLastSlide: true,
    },
    // spaceBetween: 10,
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
