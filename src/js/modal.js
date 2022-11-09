!function() {
    for (var e = {
        openModalBtn: document.querySelectorAll("[data-modal-open]"),
        closeModalBtn: document.querySelector("[data-modal-close]"),
        modal: document.querySelector("[data-modal]"),
        body: document.querySelector("body"),
    }, t = 0; t < e.openModalBtn.length; t++)
      
      e.openModalBtn[t].addEventListener("click", o),
      e.closeModalBtn.addEventListener("click", o);
  
    function o() {
      e.modal.classList.toggle("is-hidden"),
      e.body.classList.toggle("no-scroll");
    }}()