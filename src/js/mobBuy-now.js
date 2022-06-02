(() => {
    const refs = {
        openMenuBtn: document.querySelector(".data-modal4-open"),
        closeMenuBtn: document.querySelector(".data-modal4-close"), menu: document.querySelector(".data-modal4"),
        body: document.querySelector(".body"),
    }; refs.openMenuBtn.addEventListener("click", toggleMenu); refs.closeMenuBtn.addEventListener("click", toggleMenu);
    function toggleMenu() { refs.menu.classList.toggle("is-hidden"); refs.body.classList.toggle("no-scroll"); }
})();