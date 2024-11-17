const header = document.querySelector("header");
const nav = document.querySelector("nav");
const buttonNav = document.getElementById("button__nav");
const headerResalt = document.querySelector(".header__resalt"); // Usar querySelector para simplificar
const personalPhoto = document.getElementById("personal_photo");
let isNavOpen = false;

const updatePersonalPhoto = () => {
  const widthWindow = window.innerWidth;
  const newSrc = widthWindow > 1000
      ? "./assets/images/photo desktop.webp"
      : "./assets/images/photo mobile.webp";

  if (personalPhoto.src !== newSrc) {
    personalPhoto.src = newSrc;
  }
};

updatePersonalPhoto();

const toggleClasses = (isActive) => {
  header.classList.toggle("header--active", isActive);
  headerResalt.classList.toggle("header_resalt--active", isActive);
  header.classList.toggle("header", !isActive);
  nav.classList.toggle("header_navigation", !isActive);
};

buttonNav.addEventListener("click", () => {
  isNavOpen = !isNavOpen;
  toggleClasses(isNavOpen);
});

window.addEventListener("resize", () => {
  updatePersonalPhoto();
  if (window.innerWidth > 1000) {
    isNavOpen = false;
    toggleClasses(false);
  }
});

window.addEventListener("scroll", () => {
  header.classList.toggle("scroling", window.scrollY > 0);
});

nav.addEventListener("click", (event) => {
  if (event.target.tagName === "A") {
    isNavOpen = false;
    toggleClasses(false);
  }
});
