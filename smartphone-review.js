// انتخاب و لغو کارت های برند
const smartphoneSelectCards = document.querySelectorAll(".smartphone-select-card");
smartphoneSelectCards.forEach(function (card) {
    card.addEventListener("click", function () {

        const selectedCards = document.querySelectorAll(".smartphone-select-card.active");
        if (! card.classList.contains("active") && selectedCards.length >= 3) {
            return;
        }

        card.classList.toggle("active");
    });
});




// کلیک دکمه start/و انتخاب برند برای مقایسه
const startComparisonBtn = document.querySelector(".start-comparison-btn");
startComparisonBtn.addEventListener("click", function () {

    const selectedCards = document.querySelectorAll(".smartphone-select-card.active");
    // برای نمایش جدول
    const comparisonResult = document.querySelector(".comparison-result");
    const result = document.querySelector(".selected-brands-result");
    if (selectedCards.length < 2) {
        comparisonResult.style.display = "none";
        result.textContent = "Please select at least two brands.";
        return;
    }
    comparisonResult.style.display = "block";


    result.textContent = "Selected brands:";
    

    selectedCards.forEach(function (card) {

        const brandName = card.querySelector("h3").textContent;
        result.textContent += brandName + "";
    });

    // اتصال javascript به جدول
        const brand1 = document.querySelector(".comparison-brand-1");
        const brand2 = document.querySelector(".comparison-brand-2");
        const brand3 = document.querySelector(".comparison-brand-3");

        brand1.textContent = selectedCards[0]?(
            selectedCards[0].querySelector("h3").textContent === "Samsung" ?
            samsungModelSelect.options[
                smartphoneSelectCards.selectedIndex
            ].text:selectedCards[0].querySelector("h3").textContent
        ): "-";
        // selectedCards[0].querySelector("h3").textContent: "-";

        brand2.textContent = selectedCards[1]?
        selectedCards[1].querySelector("h3").textContent: "-";

        brand3.textContent = selectedCards[2]?
        selectedCards[2].querySelector("h3").textContent: "-";

        if (selectedCards[0]?.querySelector("h3").textContent === "sumsung") {
            brand1.textContent = samsungModelSelect.value || "select a model"; 
        } 
        if (samsungModelSelect[1]?.querySelector("h3").textContent === "Samsung") {
            brand2.textContent = samsungModelSelect.value || "select a model";
        }
        if (selectedCards[2]?.querySelector("h3").textContent === "sumsung") {
            brand3.textContent = samsungModelSelect.value || "select a model";
        }
    
});

// بخش انتخاب مدل های برند
const samsungModelSelect = document.querySelector(".smartphone-model-select");
