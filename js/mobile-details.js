const mobileImage = document.querySelector(".mobile-detail-image");
const mobileContent = document.querySelector(".mobile-detail-content");

mobileImage.classList.add("show");
mobileContent.classList.remove("show");
setTimeout(function () {
    mobileImage.classList.add("show");
}, 100);

setTimeout(function () {
    mobileContent.classList.add("show");
}, 600);






const mobileCards = document.querySelectorAll(".mobile-info-card");
const mobileExtraInfo = document.querySelector(".mobile-card-extra-info");
const mobileExtraContent = document.querySelectorAll(".mobile-card-extra-content");

mobileCards.forEach(function (card) {
    card.addEventListener("click", function () {
        const cardName = card.dataset.card;
        const selectedContent = document.querySelector('.mobile-card-extra-content[data-card="' + cardName + '"]');

        mobileCards.forEach(function (item) {
            item.classList.remove("active");
        });
        card.classList.add("active");

         if (selectedContent.classList.contains("show")) {
            selectedContent.classList.remove("show");
            mobileExtraInfo.classList.remove("show");
            // برای رفت و برگشت رنگ کادر
            card.classList.remove("active");
            return;
        }

        mobileExtraContent.forEach(function(content) {
            content.classList.remove("show");
        });

        selectedContent.classList.add("show");
        mobileExtraInfo.classList.add("show");

        
    });
});