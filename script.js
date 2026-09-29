console.log("AI Details javascript connected")

const aiImage = document.querySelector(".ai-detail-image");
const aiContent = document.querySelector(".ai-detail-content");

aiImage.classList.add("show");
setTimeout(function () {
    aiContent.classList.add("show");
}, 500);

const readmore = document.querySelector(".ai-read-more");

const extraInfo = document.querySelector(".ai-extra-info");

readmore.addEventListener("click",function (event) {
    console.log("Read More clicked")
    console.log(event);
    console.log(event.target);
    console.log(event.target.classList);
    event.target.classList.toggle("clicked");
    
    extraInfo.classList.toggle("show")
});

