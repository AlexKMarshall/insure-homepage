const root = document.documentElement;
const body = document.getElementsByTagName("body")[0];
const pageContainer = document.querySelector(".page-container");
const toggler = document.querySelector("button.toggler");
const navMenu = document.querySelector("nav");

setVisibleWidth();
setLeftOffset();

window.addEventListener("resize", () => {
  setVisibleWidth();
  setLeftOffset();
});

toggler.addEventListener("click", () => {
  const wasMenuOpen = navMenu.classList.contains("active");

  toggler.setAttribute("aria-expanded", !wasMenuOpen);
  navMenu.classList.toggle("active");
});

function setVisibleWidth() {
  let bodyWidth = body.offsetWidth;
  root.style.setProperty("--visible-width", `${bodyWidth}px`);
}

function setLeftOffset() {
  const leftOffset = -1 * pageContainer.getBoundingClientRect().left;
  root.style.setProperty("--left-offset", `${leftOffset}px`);
}
