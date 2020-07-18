(function () {
  "use strict";
  const modalTrigger = document.querySelectorAll('[data-modal-trigger]');

  for (let i = 0; i < modalTrigger.length; i++) {
    modalTrigger[i].addEventListener('click', toggleModal);
  }

  function toggleModal(e) {
    if (e.target !== e.currentTarget) {
      return;
    }
    // const modalTriggerVal = e.target.dataset.modalTrigger;
    const modalTriggerVal = e.target.getAttribute('data-modal-trigger');
    const modalTarget = document.querySelector(`[data-modal-target=${modalTriggerVal}]`)
    modalTarget.classList.toggle('show-modal')
  }
}());
