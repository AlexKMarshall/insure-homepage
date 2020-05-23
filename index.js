const root = document.documentElement;
const body = document.getElementsByTagName("body")[0];
const fullWidthBackground = document.getElementsByClassName(
  "full-width-background"
)[0];

setVisibleWidth();
setLeftOffset();

window.addEventListener("resize", () => {
  setVisibleWidth();
  setLeftOffset();
});

function setVisibleWidth() {
  let bodyWidth = body.offsetWidth;
  root.style.setProperty("--visible-width", `${bodyWidth}px`);
}

function setLeftOffset() {
  const leftOffset = -1 * fullWidthBackground.getBoundingClientRect().left;
  root.style.setProperty("--left-offset", `${leftOffset}px`);
}

const heroInfo = document.getElementsByClassName("hero-info")[0];

console.log(heroInfo.getBoundingClientRect());
