const smartwatchBrands = {

    apple: {
        title: "Apple",
        description: "Apple is one of the leading brands in the smartwatch industry.",
        history: "Apple introduced its first Apple Watch in 2015 and has continued to develop its wearable technology.",
        products: "Apple Watch Series, Apple Watch SE and Apple Watch Ultra.",
        technologies: "watchOS, health monitoring, ECG, fitness tracking and safety features."
    },

    samsung: {
        title: "Samsung",
        description: "Samsung is a major technology company with a strong smartwatch lineup.",
        history: "Samsung entered the smartwatch market with its Galaxy Gear in 2013.",
        products: "Galaxy Watch series and Galaxy Watch Ultra.",
        technologies: "Wear OS, health tracking, sleep monitoring and advanced sensors."
    },

    huawei: {
        title: "Huawei",
        description: "Huawei is known for its smartwatches and wearable technologies.",
        history: "Huawei has expanded its wearable technology lineup with a focus on health and fitness.",
        products: "Huawei Watch GT, Watch Fit and Watch Ultimate.",
        technologies: "Advanced health monitoring, GPS, fitness tracking and long battery life."
    },

    xiaomi: {
        title: "Xiaomi",
        description: "Xiaomi offers smartwatches and wearable devices across different price ranges.",
        history: "Xiaomi has expanded its wearable product range through its smart bands and smartwatches.",
        products: "Xiaomi Watch, Redmi Watch and Xiaomi Smart Band.",
        technologies: "Fitness tracking, heart rate monitoring, GPS and smart connectivity."
    },

    garmin: {
        title: "Garmin",
        description: "Garmin is widely recognized for its GPS and sports-focused smartwatches.",
        history: "Garmin has a long history of developing GPS technology and wearable devices.",
        products: "Fenix, Forerunner, Venu and Instinct series.",
        technologies: "GPS navigation, sports tracking, health monitoring and performance analytics."
    },

    amazfit: {
        title: "Amazfit",
        description: "Amazfit focuses on smartwatches designed for everyday use and fitness.",
        history: "Amazfit has developed a wide range of wearable products for health and sports tracking.",
        products: "Amazfit GTR, GTS, T-Rex and Balance series.",
        technologies: "Zepp OS, health monitoring, GPS and fitness tracking."
    }

};

const smartwatchBrandCards = document.querySelectorAll(".smartwatch-brand-card");

const smartwatchBrandInformation = document.getElementById("smartwatchBrandInformation");

const smartwatchBrandTitle = document.getElementById("smartwatchBrandTitle");

const smartwatchBrandDescription = document.getElementById("smartwatchBrandDescription");

const smartwatchBrandDetails = document.getElementById("smartwatchBrandDetails");

smartwatchBrandCards.forEach(card => {

    card.addEventListener("click", function () {

        const brandName = this.dataset.brand;

        if (smartwatchBrandInformation.style.display === "block" &&
            smartwatchBrandTitle.textContent === smartwatchBrands[brandName].title) {

            smartwatchBrandInformation.style.display = "none";
            return;
        }

        const brand = smartwatchBrands[brandName];

        smartwatchBrandTitle.textContent = brand.title;

        smartwatchBrandDescription.textContent = brand.description;

        smartwatchBrandDetails.innerHTML = `
            <div class="smartwatch-detail-item">
                <h3>Brand History</h3>
                <p>${brand.history}</p>
            </div>

            <div class="smartwatch-detail-item">
                <h3>Main Products</h3>
                <p>${brand.products}</p>
            </div>

            <div class="smartwatch-detail-item">
                <h3>Key Technologies</h3>
                <p>${brand.technologies}</p>
            </div>
        `;

        smartwatchBrandInformation.style.display = "block";

    });

});