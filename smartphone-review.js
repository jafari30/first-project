const brandCards = document.querySelectorAll(".brand-card");
const brandSelectButtons = document.querySelectorAll(".brand-select-btn");
const selectedBrands = [];

const comparisonResults = document.querySelector("#comparisonResults");
comparisonResults.hidden = false;
const comparisonResultsContent = document.querySelector("#comparisonResultsContent");
const compareSelectedBtn = document.querySelector("#compareSelectedBtn");
const selectedBrandsCount = document.querySelector("#selectedBrandsCount");

const brandInformation = document.querySelector("#brandInformation");

const brandInfoTitle = document.querySelector("#brandInfoTitle");

const brandHistory = document.querySelector("#brandHistory");

const brandInnovation = document.querySelector("#brandInnovation");

const brandGlobal = document.querySelector("#brandGlobal");

const brandSales = document.querySelector("#brandSales");





// Information about smartphone brands
const brandData = {
    Samsung: {
        history: "Samsung Electronics was established in 1969 in South Korea. It has become one of the world's major smartphone manufacturers ghmhjghjgjh.",

        innovation: "Samsung develops foldable smartphones, AMOLED displays, advanced camera systems and mobile technologies.",

        global: "Samsung sells smartphones across many regions, including Asia, Europe, North America and other global markets.",

        sales: "Samsung is a major global smartphone brand, offering products across budget, mid-range and premium segments."
    },

    Apple: {
        history: "Apple was founded in 1976 in the United States. The first iPhone was introduced in 2007.",

        innovation: "Apple focuses on its own mobile processors, camera technology, software integration and the iOS ecosystem.",

        global: "Apple sells iPhones in many countries and has a strong international retail and distribution network.",

        sales: "Apple competes strongly in the premium smartphone market, with the iPhone as its main smartphone product."
 },

    Xiaomi: {
        history: "Xiaomi was founded in 2010 in China and launched its first smartphone in 2011.",

        innovation: "Xiaomi develops smartphone camera systems, fast-charging technologies and connected devices.",

        global: "Xiaomi sells smartphones in China and numerous international markets, including parts of Europe and Asia.",

        sales: "Xiaomi competes across budget, mid-range and premium smartphone segments."
    },

    Google: {
        history: "Google was founded in 1998 in the United States. Its Pixel smartphone line was introduced in 2016.",

        innovation: "Google focuses on Android software, computational photography and AI-powered smartphone features.",

        global: "Google offers Pixel smartphones in selected countries and continues to develop its international smartphone business.",

        sales: "Google's Pixel smartphones compete in selected smartphone markets, with an emphasis on software, photography and AI."
    }
};


brandCards.forEach(function (card) {
    card.addEventListener("click", function () {
        const brandName = card.querySelector("h3").textContent;

        if(!brandInformation.hidden && brandInfoTitle.textContent === brandName) {
            brandInformation.hidden = true;
            return;
        }

        // دریافت معلومات برند انتخاب شده
        const information = brandData[brandName];
        
        // نمایش اطلاعات
        brandInfoTitle.textContent = brandName;
        brandHistory.textContent = information.history;
        brandInnovation.textContent = information.innovation;
        brandGlobal.textContent = information.global;
        brandSales.textContent = information.sales;

        brandInformation.hidden = false;
    });
});

brandSelectButtons.forEach(function (button) {
    button.addEventListener("click", function (event) {
        event.stopPropagation();
        const card = button.closest(".brand-card");
        const brandName = card.querySelector("h3").textContent;

        if (!selectedBrands.includes(brandName)) {
            selectedBrands.push(brandName);

            button.textContent = "Added ✓";
        } else {
            const brandIndex = selectedBrands.indexOf(brandName);
            selectedBrands.splice(brandIndex, 1);
            button.textContent = "Add to Compare";
        }
        selectedBrandsCount.textContent = selectedBrands.length;
        console.log(selectedBrands);

        
    });
});


compareSelectedBtn.addEventListener("click", function () {
    comparisonResultsContent.innerHTML = "";

    console.log(selectedBrands);

    if (selectedBrands.length < 2) {
        alert("Please select at least two brands to compare.");
        return;
    }
    selectedBrands.forEach(function (brandName) {
        const information = brandData[brandName];
        const brandBox = document.createElement("div");
        brandBox.classList.add("comparison-brand-box");

        brandBox.innerHTML = ` <h3>${brandName}</h3>
        <h4>History</h4>
        <p>${information.history}</p>

        <h4>Innovation</h4>
        <p>${information.innovation}</p>

        <h4>Global Presence</h4>
        <p>${information.global}</p>

        <h4>Sales & Market</h4>
        <p>${information.sales}</p>
        `;

        comparisonResultsContent.appendChild(brandBox);
                   
    });
});