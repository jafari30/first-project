const headphoneBrandsData = {

    sony: {
        title: "Sony",
        description: "Sony is a leading audio technology brand known for its innovative headphones and advanced sound engineering.",
        details: [
            {
                title: "Brand History",
                text: "Sony is a Japanes technology company founded in 1946. It has become a major name is consumer electronics and audio products."
            },
            {
                title: "Main Products",
                text: "Sony offers wireless headphones,noise-canceling headphones, gaming headsets and professional audio products."
            },
            {
                title: "Key Technologies",
                text: "Sony is known for active noise cancellation, high-resolution audio and advanced wireless audio technologies."
            }
        ]
    },

    bose: {
        title: "Bose",
        description: "Bose is widely recognized for its premium audio products and noise-canceling headphone technology.",
        details: [
            {
                title: "Brand History",
                text: "Bose is an American audio company founded in 1964, focusing on research and innovation in sound technology."
            },
            {
                title: "Main Products",
                text: "Bose produces wireless headphones, noise-canceling headphones, earbuds and home audio systems",
            },
            {
                title: "Key Technologies",
                text: "Bose is known for noise cacellation, sound optimization and comfortable audio experiences."
            }
        ]
    },

    

    jbl: {
        title: "JBL",
        description: "JBL is a popular audio brand known for powerful sound, colorful designs and accessible audio products.",
        details: [
            {
                title: "Brand History",
                text: "JBL is an American audio brand founded in 1946 and known for its professional and consumer audio equipment."
            },
            {
                title: "Main Products",
                text: "JBL offers wireless headphones, gaming headsets, earbuds, speakers and professional audio equipment."
            },
            {
                title: "Key Technologies",
                text: "JBL focuses on powerful bass, wireless connectivity and immersive sound experiences."
            }
        ]
    },

    sennheiser: {
        title: "Sennheiser",
        description: "Sennheiser is known for high-quality audio engineering and professional sound equipment.",
        details: [
            {
                title: "Brand History",
                text: "Sennheiser is a German audio company founded in 1945, specializing in professional and consumer audio technology."
            },
            {
                title: "Main Products",
                text: "Its products include wireless headphones, studio headphones, earbuds and professional audio equipment."
            },
            {
                title: "Key Technologies",
                text: "Sennheiser focuses on sound clarity, audio precision and advanced acoustic engineering."
            }
        ]
    },

    apple: {
        title: "Apple",
        description: "Apple combines modern design, wireless connectivity and smart features in its personal audio products.",
        details: [
            {
                title: "Brand History",
                text: "Apple is an American technology company founded in 1976 and known for its connected hardware and software ecosystem."
            },
            {
                title: "Main Products",
                text: "Apple offers AirPods, AirPods Pro and AirPods Max audio products."
            },
            {
                title: "Key Technologies",
                text: "Apple focuses on spatial audio, active noise cancellation and seamless device integration."
            }
        ]
    },
 samsung: {
        title: "Samsung",
        description: "Samsung develops modern audio products with wireless features and integration with its Galaxy devices.",
        details: [
            {
                title: "Brand History",
                text: "Samsung is a South Korean technology company founded in 1938 and active in many areas of consumer electronics."
            },
            {
                title: "Main Products",
                text: "Samsung offers Galaxy Buds wireless earbuds and other personal audio products."
            },
            {
                title: "Key Technologies",
                text: "Samsung focuses on active noise cancellation, wireless connectivity and integration with Galaxy devices."
            }
        ]
    }

};

// ******************************************************************************************
const headphoneBrandCards = document.querySelectorAll(".headphone-brand-card");
const headphoneBrandTitle = document.getElementById("headphoneBrandTitle");
const headphoneBrandDescription = document.getElementById("headphoneBrandDescription");
const headphoneBrandDetails = document.getElementById("headphoneBrandDetails");


let selectedHeadphoneBrand = null;
headphoneBrandCards.forEach(card => {
    card.addEventListener("click", () => {
        const brandName = card.dataset.brand;

        if (selectedHeadphoneBrand === brandName) {
            headphoneBrandTitle.textContent = "Explore Headphone Brand";

            headphoneBrandDescription.textContent = "select a headphone brand above to discover its history, technologies, products and key strengths.";
            headphoneBrandDetails.innerHTML = "";
            selectedHeadphoneBrand = null;
            return;
        }
        const brand = headphoneBrandsData[brandName];
        if (!brand) return;
        selectedHeadphoneBrand = brandName;
        
        headphoneBrandTitle.textContent = brand.title;
        headphoneBrandDescription.textContent = brand.description;

        headphoneBrandDetails.innerHTML = "";
        brand.details.forEach(detail => {
            const detailItem = document.createElement("div");

            detailItem.innerHTML = `<h3>${detail.title}</h3>
            <p>${detail.text}</p>
            `;

            headphoneBrandDetails.appendChild(detailItem);
        });
    });
});