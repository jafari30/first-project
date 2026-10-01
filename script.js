console.log("AI Details javascript connected")

const aiImage = document.querySelector(".ai-detail-image");
const aiContent = document.querySelector(".ai-detail-content");

aiImage.classList.add("show");
setTimeout(function () {
    aiContent.classList.add("show");
}, 500);

const readmore = document.querySelector(".ai-read-more");

const extraInfo = document.querySelector(".ai-extra-info");
const extraItems = document.querySelectorAll(".ai-extra-item");

// extraItems.forEach(function (item,index) {
//     setTimeout(function () {
//         item.classList.add("show");
//     }, index * 150);
// });

readmore.addEventListener("click",function (event) {

    event.preventDefault();
    // console.log("Read More clicked")
    // console.log(event);
    // console.log(event.target);
    // console.log(event.target.classList);

    event.target.classList.toggle("clicked");
    
    extraInfo.classList.toggle("show");

    if (extraInfo.classList.contains("show")) {

        extraItems.forEach(function (item, index) {
            setTimeout(function () {
                item.classList.add("show");
            }, index * 600);
        });
        readmore.innerHTML = 'Read Less <i class="bi bi-arrow-right"></i>';
    } else {
        extraItems.forEach(function (item) {
            item.classList.remove("show");
        });
        readmore.innerHTML = 'Read More <i class="bi bi-arrow-right"></i>';
    }
});

