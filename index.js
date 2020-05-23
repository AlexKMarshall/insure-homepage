const root = document.documentElement;
const body = document.getElementsByTagName("body")[0];
setVisibleWidth();

window.addEventListener("resize", () => {
  setVisibleWidth();
});

function setVisibleWidth() {
  let bodyWidth = body.offsetWidth;
  root.style.setProperty("--visible-width", `${bodyWidth}px`);
}
