(() => {
    const refs = {
      openPopupBtn: document.querySelector("[data-modal-open]"),
      closePopupBtn: document.querySelector("[data-modal-close]"),
      modal: document.querySelector("[data-modal]"),
    };
  
    refs.openPopupBtn.addEventListener("click", togglepopup);
    refs.closePopupBtn.addEventListener("click", togglepopup);
  
    function toggleModal() {
      refs.popup.classList.toggle("is-hidden");
    }
  })();