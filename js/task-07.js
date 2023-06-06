const inputEl = document.querySelector("#font-size-control");
const spanEl = document.querySelector("#text");

function fontSizeControl(e) {
    spanEl.style.fontSize = e.currentTarget.value + "px";
}
inputEl.addEventListener("input", fontSizeControl);