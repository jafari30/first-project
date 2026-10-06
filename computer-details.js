const computerCards = document.querySelectorAll(".computer-info-card");
const computerExtraInfo = document.querySelector(".computer-card-extra-info");
const computerExtraContents = document.querySelectorAll(".computer-card-extra-content");

computerCards.forEach(function (card) {
    card.addEventListener("click",function () {
        const cardName = card.dataset.card;

        computerCards.forEach(function (item) {
            item.classList.remove("active");
        });
        card.classList.add("active");
        console.log(cardName);

        const selectContent = document.querySelector('.computer-card-extra-content[data-card="' + cardName + '"]');

        if (selectContent.classList.contains("show")) {
            selectContent.classList.remove("show");
            computerExtraInfo.classList.remove("show");
            card.classList.remove("active");

            return;
        }

        
        console.log(selectContent);

        computerExtraContents.forEach(function(content) {
            content.classList.remove("show");
        });

        selectContent.classList.add("show");
        console.log("Extra information is showing")
        computerExtraInfo.classList.add("show");
    });
});