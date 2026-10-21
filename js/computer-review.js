const computerBrandCards = document.querySelectorAll(".computer-brand-card");
let selectedBrand = null;


const brandInformation = document.querySelector("#computerBrandInformation");
const dellBrandDetails = document.querySelector("#dellBrandDetails");
const appleBrandDetails = document.querySelector("#brandInfoDetails");
const lenovoBrandDetails = document.querySelector("#lenovoBrandDetails");
const hpBrandDetails = document.querySelector("#hpBrandDetails");
const asusBrandDetails = document.querySelector("#asusBrandDetails");
const acerBrandDetails = document.querySelector("#acerBrandDetails");
const msiBrandDetails = document.querySelector("#msiBrandDetails");
const samsungBrandDetails = document.querySelector("#samsungBrandDetails");
const microsoftBrandDetails = document.querySelector("#microsoftBrandDetails");
const gplusBrandDetails = document.querySelector("#gplusBrandDetails");
const lgBrandDetails = document.querySelector("#lgBrandDetails");
const huaweiBrandDetails = document.querySelector("#huaweiBrandDetails");
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

// console.log(appleOriginalInfo);

const computerBrandsData = {
    apple: {
        title: "Apple",
        description: "Apple is known for combining hardware, software and industrial design in its computers."
        
    },
    dell: {
        title: "Dell",
        description: "Dell is a global technology company known for its laptops, desktop computers, workstations and business technology solutions." 
    },
    lenovo: {
        title: "Lenovo",
        description: "Lenovo is a global technology company known for its laptops desktop computers, workstations and gaming computers."
    },
    hp: {
        title: "hp",
        description: "HP is a global technology company known for its laptops, desktop computers, workstations and printers."
    },
    asus: {
        title: "ASUS",
        description: "ASUS is a global technology company known for its laptops, computer components and gaming devices."
    },
    acer: {
        title: "Acer",
        description: "Acer is a global technology company known for its laptops, desktop computers, monitors and gaming devices."
    },
    msi: {
        title: "MSI",
        description: "MSI is a technology company known for its gaming laptops, desktop computers, motherboards and graphics cards."
    },
    samsung: {
        title: "samsung",
        description: "Samsung is a global technology company known for its Galaxy Book laptops, monitors, memory products and display technologies."
    },
    microsoft: {
        title: "Microsoft",
        description: "Microsoft is a global technology company known for Windows, Surface computers, productivity software and cloud services."
    },
    gplus: {
        title: "Gplus",
        description: "Gplus is a technology brand name associated with electronic products. Product details depend on the specific manufacture and model."
    },
    lg: {
        title: "LG",
        description: "LG is a South Korean technology company known for its monitors, display technologies, consumer electronics and gaming displays."
    },
    huawei: {
        title: "huawei",
        description: "Huawei is a global technology company known for its Matebook laptops, monitors, telecommunications equipment and connected devices."
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

            appleBrandDetails.hidden = true;
            dellBrandDetails.hidden = true;
            

            card.classList.remove("active");
            return;
        }

        appleBrandDetails.hidden = brandName !== "apple";
        dellBrandDetails.hidden = brandName !== "dell";
        lenovoBrandDetails.hidden = brandName !== "lenovo";
        hpBrandDetails.hidden = brandName !== "hp";
        asusBrandDetails.hidden = brandName !== "asus";
        acerBrandDetails.hidden = brandName !== "acer";
        msiBrandDetails.hidden = brandName !== "msi";
        samsungBrandDetails.hidden = brandName !== "samsung";
        microsoftBrandDetails.hidden = brandName !== "microsoft";
        gplusBrandDetails.hidden = brandName !== "gplus";
        lgBrandDetails.hidden = brandName !== "lg";
        huaweiBrandDetails.hidden = brandName !== "huawei";

        if (brandName === "apple") {
            brandHistory.textContent = appleOriginalInfo.history;
            brandProducts.textContent = appleOriginalInfo.products;
            brandTechnologies.textContent = appleOriginalInfo.technologies;
            brandStrengths.textContent = appleOriginalInfo.strengths;
            brandOperatingSystem.textContent = appleOriginalInfo.operatingSystem;
        }
        


        const brandData = computerBrandsData[brandName];
        // console.log(brandData);

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
