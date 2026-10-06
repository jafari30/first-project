const gamingCards = document.querySelectorAll(".gaming-info-card");
const gamingExtraInfo = document.querySelector(".gaming-card-extra-info");
const gamingExtraContents = document.querySelectorAll(".gaming-card-extra-content");

gamingCards.forEach(function (card) {
    card.addEventListener("click", function () {

        const cardName = card.dataset.card;

        const selectedContent = document.querySelector('.gaming-card-extra-content[data-card="' + cardName + '"]');

        gamingCards.forEach(function (item) {
            item.classList.remove("active");
        });
        card.classList.add("active");

        if (selectedContent.classList.contains("show")) {
            selectedContent.classList.remove("show");
            gamingExtraInfo.classList.remove("show");
            card.classList.remove("active");
            return;
        }

        gamingExtraContents.forEach(function (content) {
            content.classList.remove("show");

        });

        selectedContent.classList.add("show");
        gamingExtraInfo.classList.add("show");
    });
});