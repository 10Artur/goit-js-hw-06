const inputEl = document.querySelector("#validation-input");

function borderColor() {
    const inputDataLength = Number(inputEl.dataset.length);
    const inputValueLength = Number(inputEl.value.trim().length);
    if (inputDataLength === inputValueLength) {
        inputEl.classList.add("valid");
    } else {
        inputEl.classList.add("invalid");
    }
}
inputEl.addEventListener("blur", borderColor);