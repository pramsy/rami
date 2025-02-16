

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contato-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Impede o envio real do formulário
        alert("Mensagem enviada com sucesso!");
        form.reset();
    });
});
