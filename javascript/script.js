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
    const menuToggle = document.getElementById("menu_toggle");
    const menuList = document.getElementById("menu_list");
  
    menuToggle.addEventListener("click", function () {
      menuList.classList.toggle("show");
    });
  
    // Fecha o menu após clicar em um link
    document.querySelectorAll("#menu-list a").forEach(link => {
      link.addEventListener("click", function () {
        menuList.classList.remove("show");
      });
    });
  });