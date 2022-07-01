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

const navMenu = document.getElementById('navMenu');

navMenu.addEventListener('click', (event) => {
  navMenu.classList.toggle("active");
  if (document.body.classList.contains("menu-expanded")) {
    closeMenu();
  } else {
    openMenu();
  }
});

