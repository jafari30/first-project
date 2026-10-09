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

// کلیک دکمه start/و انتخاب برند برای مقایسه
const startComparisonBtn = document.querySelector(".start-comparison-btn");
startComparisonBtn.addEventListener("click", function () {

    const selectedCards = document.querySelectorAll(".smartphone-select-card.active");
    const result = document.querySelector(".selected-brands-result");
    result.textContent = "Selected brands:";
    

    selectedCards.forEach(function (card) {

        const brandName = card.querySelector("h3").textContent;
        result.textContent += brandName + "";

        // اتصال javascript به جدول
        const brand1 = document.querySelector(".comparison-brand-1");
        const brand2 = document.querySelector(".comparison-brand-2");
        const brand3 = document.querySelector(".comparison-brand-3");

        brand1.textContent = selectedCards[0]?
        selectedCards[0].querySelector("h3").textContent: "-";

        brand2.textContent = selectedCards[1]?
        selectedCards[1].querySelector("h3").textContent: "-";

        brand3.textContent = selectedCards[2]?
        selectedCards[2].querySelector("h3").textContent: "-";
    
      
    });
    
});
