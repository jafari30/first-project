const searchInput = document.getElementById("searchInput");
const searchToggle = document.getElementById("searchToggle");
const searchResults = document.getElementById("searchResults");

const pages = [{
    title: "Artificial Intelligence",
    keywords: "AI artificial intelligence",
    url: "ai-details.html",
    icon: "bi bi-cpu"
    },

    {
        title: "Mobile Technology",
        keywords: "Mobile smartphone phone",
        url: "mobile-details.html",
        icon: "bi bi-phone"
    },

    {
         title: "Computer Technology",
         keywords: "Computer laptop PC",
         url: "computer-details.html",
         icon: "bi bi-laptop"
    },

    {
        title: "Gaming Technology",
        keywords: "Gaming games video game",
        url: "gaming-details.html",
        icon: "bi bi-controller"
    },

    {
        title: "Smartphone Reviews",
        keywords: "Smartphone review mobile phone reviews",
        url: "smartphone-review.html",
        icon: "bi bi-phone"
    },

    {
        title: "Computer Reviews",
        keywords: "Computer review laptop reviews",
        url: "computer-review.html",
        icon: "bi bi-laptop"
    },
];

function searchWebsite() {
    const query = searchInput.value.trim().toLowerCase();

    searchResults.innerHTML = "";
    if (query === "") {
        searchResults.style.display = "none";
        return;
    }

    const matches = pages.filter(function (page) {
        return (
            page.title.toLowerCase().includes(query) ||
            page.keywords.toLowerCase().includes(query)
        );
    });

    searchResults.style.display = "block";
    if (matches.length === 0) {
        searchResults.innerHTML = "<p>No Results found.</p>";
        return;
    }

    

    matches.forEach(function (page) {
        const link = document.createElement("a");
        link.href = page.url;
        // link.textContent = page.title;
        link.className = "search-result-item";

        const icon = document.createElement("i");
        icon.className = page.icon;

        const title = document.createElement("span");
        title.textContent = page.title;

        link.appendChild(icon);
        link.appendChild(title);

        searchResults.appendChild(link);
    });

}

searchToggle.addEventListener("click", searchWebsite);

searchInput.addEventListener("input", searchWebsite);

searchInput.addEventListener("keydown",
    function (event) {
        if (event.key === "Enter") {
            searchWebsite();

        }
    }
);

document.addEventListener("click", function (event) {
    const clickedInsideSearch = event.target.closest(".header-sections");

    if (!clickedInsideSearch) {
        searchResults.style.display = "none";
    }
});

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        searchResults.style.display = "none";
    }
});