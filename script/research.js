var material_icons = document.createElement('link');

script_sticky.setAttribute('src', '/script/stickyfill.min.js');
material_icons.setAttribute('rel', 'stylesheet');
material_icons.setAttribute(
  'href',
  'https://fonts.googleapis.com/icon?family=Material+Icons'
);
document.head.appendChild(material_icons);

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
    url: '../json/services.json',
    dataType: 'json',
    async: true,
    success: (data) => {
      tippy('.tooltip', {
        content: (el) => {
          const div = document.createElement('div');
          // const h5 = document.createElement('h5');
          // const span = document.createElement('span');
          for (const [i, item] of data.entries()) {
            if (item.services_name_en !== el.getAttribute('id')) {
              continue;
            }
            const title = item[`services_name_${lang}`];
            const introduction = item[`explanation_${lang}`];
            div.innerHTML = `<h5><u>${title}</u></h5><p>${introduction}</p>`;
          }
          return div;
        },
        arrow: false,
        maxWidth: 220,
        duration: [300, 250],
      });
    },
  });
});
