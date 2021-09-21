const body = document.querySelector("body");

function onloadAction() {
  const loadPanel = document.createElement("div");
  const loadImg = document.createElement("img");

  loadImg.src = "./img/logo.png";

  loadImg.classList.add("loadImg");
  loadPanel.id = "loadPanel";

  loadPanel.appendChild(loadImg);
  body.appendChild(loadPanel);
}
onloadAction();
const loadedPanel = document.querySelector("#loadPanel");
window.addEventListener("load", () => loadedPanel.remove());
