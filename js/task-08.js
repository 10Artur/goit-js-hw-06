const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", (e) => {
    e.preventDefault();

    const emailInput = formEl.elements.email;
    const passwordInput = formEl.elements.password;

    if (emailInput.value === "" || passwordInput.value === "") {
        alert("Всі поля повинні бути заповнені!");
    } else {
        const dataForm = {
            email: emailInput.value,
            password: passwordInput.value,
        };
        console.log(dataForm);
    }
    e.currentTarget.reset();
});