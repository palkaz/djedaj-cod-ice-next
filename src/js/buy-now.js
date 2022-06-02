

 (() => {
    const refs = {
        openMenuBtn: document.querySelector(".data-modal3-open"),
        closeMenuBtn: document.querySelector(".data-modal3-close"), menu: document.querySelector(".data-modal3"),
        body: document.querySelector(".body"),
    }; refs.openMenuBtn.addEventListener("click", toggleMenu); refs.closeMenuBtn.addEventListener("click", toggleMenu);
    function toggleMenu() { refs.menu.classList.toggle("is-hidden"); refs.body.classList.toggle("no-scroll"); }
})();