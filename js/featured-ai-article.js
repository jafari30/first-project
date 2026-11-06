// const tocLinks = document.querySelectorAll(".article-toc a");
// const articleSections = document.querySelectorAll(".article-main section");

// console.log("TOC Links:", tocLinks.length);
// console.log("Article Sections:", articleSections.length);

// function updateActiveLink() {
//     let currentSection = articleSections[0]?.id;

//     articleSections.forEach(section => {
//         const sectionTop = section.getBoundingClientRect().top + window.scrollY;

//         if (window.scroll >= sectionTop - 180) {
//             currentSection = section.id;
//         }
//     });

//     tocLinks.forEach(link => {
//         link.classList.toggle("active", link.getAttribute("href") === `#${currentSection}`);

       
//     });
// }

// window.addEventListener("scroll", updateActiveLink);
// window.addEventListener("load", updateActiveLink);

// tocLinks.forEach(link => {
//     link.addEventListener("click", () => {
//         setTimeout(updateActiveLink, 100);
        
//     });
// });

