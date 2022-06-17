window.addEventListener("scroll", onScroll);

onScroll();
function onScroll() {
    showNavOnScroll();
}

function showNavOnScroll() {
    const menu = document.querySelector("#navigation");
    if (scrollY > 0) {
        menu.classList.add("scroll");
    } else {
        menu.classList.remove("scroll");
    }
}

function openMenu() {
    document.body.classList.add("menu-expanded");
}

function closeMenu() {
    document.body.classList.remove("menu-expanded");
}
