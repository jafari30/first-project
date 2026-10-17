const computerBrandCards = document.querySelectorAll(".computer-brand-card");
let selectedBrand = null;


const brandInformation = document.querySelector("#computerBrandInformation");
brandInformation.hidden = true;
const brandInfoTitle = document.querySelector("#brandInfoTitle");
const brandInfoDescription = document.querySelector("#brandInfoDescription");
const brandHistory = document.querySelector("#brandHistory");
const brandProducts = document.querySelector("#brandProducts");
const brandTechnologies = document.querySelector("#brandTechnologies");
const brandStrengths = document.querySelector("#brandStrengths");
const brandOperatingSystem = document.querySelector("#brandOperatingSystem");

const appleOriginalInfo = {
    history: brandHistory.textContent,
    products: brandProducts.textContent,
    technologies: brandTechnologies.textContent,
    strengths: brandStrengths.textContent,
    operatingSystem: brandOperatingSystem.textContent
};

console.log(appleOriginalInfo);

const computerBrandsData = {
    apple: {
        title: "Apple",
        description: "Apple is known for combining hardware, software and industrial design in its computers."
        
    },
    dell: {
        title: "Dell",
        description: "Dell is a global technology company known for its laptops, desktop computers, workstations and business technology solutions." 
    }
};

computerBrandCards.forEach(function (card) {
    card.addEventListener("click", function () {
        computerBrandCards.forEach(function (item) {
            item.classList.remove("active");
        });
        card.classList.add("active");

        const brandName = card.dataset.brand;

        if (selectedBrand === brandName) {
            selectedBrand = null;
            brandInformation.hidden = true;
            card.classList.remove("active");
            return;
        }

        if (brandName === "apple") {
            brandHistory.textContent = appleOriginalInfo.history;
            brandProducts.textContent = appleOriginalInfo.products;
            brandTechnologies.textContent = appleOriginalInfo.technologies;
            brandStrengths.textContent = appleOriginalInfo.strengths;
            brandOperatingSystem.textContent = appleOriginalInfo.operatingSystem;
        }
        


        const brandData = computerBrandsData[brandName];
        console.log(brandData);

        if (!brandData) {
            console.log("Information not added for:", brandName);
            return;
        }

        selectedBrand = brandName;
        brandInformation.hidden = false;
        card.classList.add("active");

        
        brandInfoDescription.textContent = brandData.description;
        brandInformation.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
        
        
        const formattedBrandName = brandName.charAt(0).toUpperCase() + brandName.slice(1);
        brandInfoTitle.textContent = formattedBrandName;
        
    });
});

// اطلاعات بخش دل
