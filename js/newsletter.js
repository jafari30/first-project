const newsletterForm = document.querySelector(".newsletter-form");
const newsletterEmail = newsletterForm.querySelector('input[type= "email"]');
const newsletterMessage = document.querySelector(".newsletter-message");

console.log("Newsletter JavaScript connected");

newsletterForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = newsletterEmail.value.trim();

    if (email === "") {
        newsletterMessage.textContent = "Please enter your email address.";
        newsletterMessage.computedStyleMap.color = "#dc2626";
        return;
    }

    if (!newsletterEmail.checkValidity()) {
        newsletterMessage.textContent = "Please enter a valid email address.";
        newsletterMessage.computedStyleMap.color = "#dc2626";
        return;
    }

    newsletterMessage.textContent = "Thank you for your interest in TechNova!";
    newsletterMessage.computedStyleMap.color = "#16a34a";

    newsletterEmail.value = "";
});