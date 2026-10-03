console.log("AI Details javascript connected")

const aiImage = document.querySelector(".ai-detail-image");
const aiContent = document.querySelector(".ai-detail-content");

aiImage.classList.add("show");
setTimeout(function () {
    aiContent.classList.add("show");
}, 500);

const readmore = document.querySelector(".ai-read-more");

const extraInfo = document.querySelector(".ai-extra-info");



// گزینه Read More 
const extraItems = document.querySelectorAll(".ai-extra-item");

let animationTimers = []

function showExtraItems(items) {
    items.forEach(function (item, index) {
        const timer = setTimeout(function () {
            item.classList.add("show");
        }, index * 600);
        animationTimers.push(timer);
    }); 
}

// گزینه Read More 
readmore.addEventListener("click",function (event) {

    event.preventDefault();

    event.target.classList.toggle("clicked");
    
    extraInfo.classList.toggle("show");

    if (extraInfo.classList.contains("show")) {
       showExtraItems(extraItems);

        readmore.innerHTML = 'Read Less <i class="bi bi-arrow-right"></i>';
    } else {
        animationTimers.forEach(function (timer) {
            clearTimeout(timer);
            animationTimers = [];
        })

        extraItems.forEach(function (item) {
            item.classList.remove("show");
        });
        readmore.innerHTML = 'Read More <i class="bi bi-arrow-right"></i>';
    }
});

// توضیحات عنوان های کوچک



// const aiCard = document.querySelectorAll(".ai-info-card");
// const aiCardExtraInfo = document.querySelector(".ai-card-extra-info");
// console.log(aiCardExtraInfo);

// aiCard.forEach(function (card) {
//     card.addEventListener("click",function () {
//         console.log("Card clicked");
//         aiCardExtraInfo.classList.toggle("show");
//     });
// });
