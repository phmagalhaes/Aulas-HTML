document.addEventListener("DOMContentLoaded", function () {
    const loginform = document.getElementById("login-form");
    const errorMessage = document.getElementById("error-message");

    loginform.addEventListener("submit", function (e) {
        e.preventDefault();
        const username = loginform.username.value;
        const password = loginform.password.value;

        const senha = "123";
        const usuario = "pedro";

        if (username === usuario && password === senha) {
            window.location.href = 'home.html'
        } else {
            errorMessage.textContent = "Nome de usuário/senha incorretos";
            errorMessage.style.color = "red";
        }
    });
    

});

document.addEventListener("DOMContentLoaded", function () {
    const cadastroForm = document.getElementById("cadastro-form");
    const errorMessage = document.getElementById("error-message-cadastro");

    cadastroForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const password = cadastroForm.senha.value;
        const confirmpassword = cadastroForm.confirmarSenha.value;

        if (password === confirmpassword) {
            errorMessage.textContent = "Cadastro bem-sucedido!";
            errorMessage.style.color = "green";
        } else {
            errorMessage.textContent = "Senhas estão diferentes";
            errorMessage.style.color = "red";
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    homeMessage.textContent = 'Seja bem-vindo(a), ' + username + '!';
});

// document.addEventListener("DOMContentLoaded", function () {
//     const homeMessage = document.getElementById("home-message")
//     const homePage = document.getElementById("home-container")
//     homePage.addEventListener("submit", function (e) {
//         e.preventDefault();
//         homeMessage.textContent = username;
//     });
// });