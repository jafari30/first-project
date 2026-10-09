const smartphoneSelectedCards = document.querySelectorAll(".smartphone-select-card");
smartphoneSelectedCards.forEach(function (card) {
    card.addEventListener("click", function () {

        const selectCards = document.querySelectorAll(".smartphone-select-card.active");
        if (! card.classList.contains("active") && selectCards.length >= 3) {
            return;
        }

        card.classList.toggle("active");
    });
});

