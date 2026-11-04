const mobileMenuToggle = document.getElementById("mobileMenuToggle");
const mainNav = document.querySelector("header nav");

mobileMenuToggle.addEventListener("click", function () {
    mainNav.classList.toggle('active');

    const isOpen = mainNav.classList.contains("active");

    mobileMenuToggle.setAttribute("aria-expanded" , isOpen);
    mobileMenuToggle.innerHTML = isOpen ? '<i class="bi bi-x-lg"></i>' : '<i class="bi bi-list"></i>';
});


const brainTrigger = document.querySelector(".brain-trigger");
const hero = document.querySelector(".hero");

brainTrigger.addEventListener("click", function () {
    hero.classList.toggle("icons-visible");
});