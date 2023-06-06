const inputEl = document.querySelector("#validation-input");

function borderColor() {
    const inputDataLength = Number(inputEl.dataset.length);
    const inputValueLength = Number(inputEl.value.trim().length);
    if (inputDataLength === inputValueLength) {
        inputEl.classList.add("valid");
        inputEl.classList.remove("invalid");
    } else {
        inputEl.classList.add("invalid");
        inputEl.classList.remove("valid");
    }
}
inputEl.addEventListener("blur", borderColor);