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


// بخش سرچ article ها
const articleSearch = document.querySelector("#articleSearch");
const articleCategory = document.querySelector("#articleCategory");
const articleSort = document.querySelector("#articleSort");
const articleCards = document.querySelectorAll(".research-article-card");
const noArticlesMessage = document.querySelector("#noArticlesMessage");

function filterArticles() {
    const searchText = articleSearch.value.trim().toLowerCase();
    const selectedCategory = articleCategory.value;
    const sortOrder = articleSort.value;
    let visibleArticles = 0;

    articleCards.forEach(function (card) {
        const title = card.querySelector("h3").textContent.toLowerCase();
        const category = card.dataset.category;
        const matchesSearch = title.includes(searchText);
        const matchesCategory = selectedCategory === "all" || category === selectedCategory;

        card.style.display = matchesSearch && matchesCategory ? "" : "none";
        if (matchesSearch && matchesCategory) {
            visibleArticles++;
        }
  
    });

    const articlesList = document.querySelector(".research-articles-list");
    const sortedCards = Array.from(articleCards).sort(function (a, b) {
        const dateA = new Date(a.querySelector(".article-date").textContent.replace("published:", "").trim());
        const dateB = new Date(b.querySelector(".article-date").textContent.replace("published:", "").trim());

        return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
    });

    sortedCards.forEach(function (card) {
        articlesList.appendChild(card);
    });

    noArticlesMessage.style.display = visibleArticles === 0 ? "block" : "none";




}


articleSearch.addEventListener("input", filterArticles);
articleCategory.addEventListener("change", filterArticles);
articleSort.addEventListener("change", filterArticles);