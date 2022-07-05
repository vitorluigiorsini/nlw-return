window.addEventListener("scroll", onScroll);

onScroll();
function onScroll() {
  showNavOnScroll();
  backToTopButton();
}

function showNavOnScroll() {
  const menu = document.querySelector("#navigation");
  /*if (scrollY > 0) {
      menu.classList.add("scroll");
    } else {
      menu.classList.remove("scroll");
  }*/ /* código substituído */
  menu.classList.toggle("scroll", scrollY > 0);
}

function closeMenu() {
  document.body.classList.remove("menu-expanded");
  navMenu.classList.remove("active");
}

function actionMenu() {
  document.body.classList.toggle("menu-expanded");
  navMenu.classList.toggle("active");
}

const navMenu = document.getElementById('navMenu');

navMenu.addEventListener('click', (event) => {
  actionMenu();
});

function backToTopButton() {
  const backTTB = document.getElementById('backToTopButton');
  if (scrollY >= 300) {
    backTTB.classList.add('active');
  } else {
    backTTB.classList.remove('active');
  }
}

