document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form-contato");

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault(); // Impede o envio real do formulário
            alert("Mensagem enviada com sucesso!");
            form.reset();
        });
    }
});
// Scroll ativo no menu
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 70;
        const sectionHeight = section.offsetHeight;

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.getElementById("menu_toggle");
    const navMenu = document.getElementById("nav_menu");
    if (toggle && navMenu) {

        toggle.addEventListener("click", function () {
            navMenu.classList.toggle("active");
        });

        const links = navMenu.querySelectorAll("ul li a");
        links.forEach(link => {
            link.addEventListener("click",() => {
                navMenu.classList.remove("active");
            });
        });
  
    // Fecha o menu após clicar em um link
    navMenu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", function () {
        navMenu.classList.remove("show");
      });
    });
  }
});