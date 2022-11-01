(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modall-open]"),
    closeModalBtn: document.querySelector("[data-modall-close]"),
      modal: document.querySelector("[data-modall]"),
      body: document.querySelector("body"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
      refs.body.classList.toggle("no-scroll");
  }
})();