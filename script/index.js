var script = document.createElement('script');

script.setAttribute('src', 'https://code.jquery.com/jquery-3.2.1.min.js');
document.head.appendChild(script);

script.addEventListener('load', function () {
  $('.news__individual-wrapper').css('display', 'block');

  // Swiper Library https://swiperjs.com/
  const swiper = new Swiper('.thumbnail-carousel', {
    spaceBetween: 5,
    slidesPerView: 4,
    direction: 'vertical',
  });
  const swiper2 = new Swiper('.main-carousel', {
    autoplay: {
      delay: 100,
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
  window.__swiper2 = swiper2;
  $('.main-image__wrapper')
    .on('mouseenter', (e) => {
      swiper2.autoplay.stop();
    })
    .on('mouseleave', (e) => {
      swiper2.autoplay.start();
    });
});
