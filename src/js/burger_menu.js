(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-burger-open]"),
    closeModalBtn: document.querySelector("[data-burger-close]"),
      modal: document.querySelector("[data-burger]"),
      body: document.querySelector("body"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
      refs.modal.classList.toggle("menu-is-hidden");
      refs.body.classList.toggle("no-scroll");
  }
})();