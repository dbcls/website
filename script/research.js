var script = document.createElement('script');
var material_icons = document.createElement('link');

script.setAttribute('src', 'https://code.jquery.com/jquery-3.2.1.min.js');
script_sticky.setAttribute('src', '/script/stickyfill.min.js');
material_icons.setAttribute('rel', 'stylesheet');
material_icons.setAttribute(
  'href',
  'https://fonts.googleapis.com/icon?family=Material+Icons'
);
document.head.appendChild(material_icons);

script.setAttribute('src', 'https://code.jquery.com/jquery-3.2.1.min.js');
document.head.appendChild(script);

script.addEventListener('load', function () {
  const lang = $('html').attr('lang');
  // Modal ViewのON/OFF toggle
  const toggles = $('.modal-toggle');
  const toggleArray = Array.from(toggles).entries();
  const modals = $('.modal');
  $('.modal__content').click((e) => e.stopPropagation());

  for (let [index, toggle] of toggleArray) {
    function toggleModal() {
      modals[index].classList.toggle('show-modal');
    }
    const toggleModalElements = [toggle, modals[index]];
    toggleModalElements.forEach((el) => {
      el.addEventListener('click', toggleModal);
    });
  }

  //Pageコード直後には animation 無効化
  let node = document.querySelector('.preload-transitions');
  node.classList.remove('preload-transitions');

  $.ajax({
    url: '../json/services-object.json',
    dataType: 'json',
    async: true,
    success: (data) => {
      tippy('.tooltip', {
        content: (el) => {
          const span = document.createElement('span');
          for (const [i, item] of data.entries()) {
            if (item.services_name_en !== el.getAttribute('id')) {
              continue;
            }
            const title = item[`services_name_${lang}`];
            const introduction = item[`explanation_${lang}`];
            span.innerHTML = `${title}<br>${introduction}`;
          }
          return span;
        },
        arrow: false,
        maxWidth: 220,
        duration: [300, 250],
      });
    },
  });
});
