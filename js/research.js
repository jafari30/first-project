const researchForm = document.querySelector("#submitArticleForm");
const formMessage = document.querySelector(".article-form-message");

researchForm.addEventListener("submit", function (event) {
    event.preventDefault();

    formMessage.textContent = "Thank you! Your article details have been cheaked. This demo does not save or publish article yet";

    formMessage.style.color = "#15803d";
});


// // نمایش دکمه explore
// const exploreArticleButton = document.querySelector('.research-button');
// const publishedArticlesSection = document.querySelector('#publishedArticles');

// exploreArticleButton.addEventListener('click', function (event) {
//     event.preventDefault();
//     publishedArticlesSection.style.display = 'block';
//     publishedArticlesSection.scrollIntoView({
//         behavior: 'smooth'
//     });
// });


// // نمایش دکمه submit 
// const submitArticleLink = document.querySelector('.research-submit-link');
// const submitArticleSection = document.querySelector('#submitArticle');

// submitArticleLink.addEventListener('click', function (event) {
//     event.preventDefault();

//     submitArticleSection.style.display = 'block';
//     submitArticleSection.scrollIntoView({
//         behavior: 'smooth'
//     });
// });

const exploreArticlesButton = document.querySelector(".research-button");
const submitArticleLink = document.querySelector(".research-submit-link");
const publishedArticlesSection = document.querySelector("#publishedArticles");
const submitArticleSection = document.querySelector("#submitArticle");

exploreArticlesButton.addEventListener("click", function (event) {
    event.preventDefault();

    const isHidden = publishedArticlesSection.style.display === "none";

    publishedArticlesSection.style.display = isHidden ? "block" : "none";
    submitArticleSection.style.display = "none";

    if (isHidden) {
        publishedArticlesSection.scrollIntoView({
            behavior: "smooth"
        });
    }
});


submitArticleLink.addEventListener("click", function (event) {
    event.preventDefault();

    const isHidden = submitArticleSection.style.display === "none";

    submitArticleSection.style.display = isHidden ? "block" : "none";
    publishedArticlesSection.style.display = "none";

    if (isHidden) {
        submitArticleSection.scrollIntoView({
            behavior: "smooth"
        });
    }
});