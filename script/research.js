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
  // Modal ViewのON/OFF toggle
  const triggers = $('.trigger');
  const triggerArray = Array.from(triggers).entries();
  const modals = $('.modal');
  $('.modal__content').click((e) => e.stopPropagation());
  const closeButtons = $('.btn-close');

  for (let [index, trigger] of triggerArray) {
    function toggleModal() {
      modals[index].classList.toggle('show-modal');
    }
    const toggleModalElements = [trigger, modals[index], closeButtons[index]];
    toggleModalElements.forEach((el) => {
      el.addEventListener('click', toggleModal);
    });
  }
});
