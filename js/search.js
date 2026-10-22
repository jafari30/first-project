const searchInput = document.getElementById("searchInput");
const searchToggle = document.getElementById("searchToggle");
const searchResults = document.getElementById("searchResults");

const pages = [{
    title: "Artificial Intelligence",
    keywords: "AI artificial intelligence",
    url: "ai-details.html"
    },

    {
        title: "Mobile Technology",
        keywords: "Mobile smartphone phone",
        url: "mobile-details.html"
    },

    {
         title: "Computer Technology",
         keywords: "Computer laptop PC",
         url: "computer-details.html"
    },

    {
        title: "Gaming Technology",
        keywords: "Gaming games video game",
        url: "gaming-details.html"
    },

    {
        title: "Smartphone Reviews",
        keywords: "Smartphone review mobile phone reviews",
        url: "smartphone-review.html"
    },

    {
        title: "Computer Reviews",
        keywords: "Computer review laptop reviews",
        url: "computer-review.html"
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
        link.textContent = page.title;
        link.className = "search-result-item";

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