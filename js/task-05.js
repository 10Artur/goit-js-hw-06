const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

const getValue = (e) => {
    outputEl.textContent = e.currentTarget.value;
};
inputEl.addEventListener("input", getValue);