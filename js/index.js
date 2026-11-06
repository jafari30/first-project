const mobileMenuToggle = document.getElementById("mobileMenuToggle");
const mainNav = document.querySelector("header nav");

mobileMenuToggle.addEventListener("click", function () {
    mainNav.classList.toggle('active');

    const isOpen = mainNav.classList.contains("active");

    mobileMenuToggle.setAttribute("aria-expanded" , isOpen);
    mobileMenuToggle.innerHTML = isOpen ? '<i class="bi bi-x-lg"></i>' : '<i class="bi bi-list"></i>';
});


const brainTrigger = document.querySelector(".brain-trigger");
const hero = document.querySelector(".hero");

brainTrigger.addEventListener("click", function () {
    hero.classList.toggle("icons-visible");
});





// **************************************************************


const articleHeading = document.querySelector(".latest-articles .section-heading");
const articleCards = document.querySelectorAll(".latest-articles .article-card");

const articleObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (entry.target === articleHeading) {
                articleHeading.classList.add("show");
                articleCards.forEach((card,index) => {
                    setTimeout(() => {
                        card.classList.add("show"); 
                        }, (index + 1)*200);
                    });
                }
               
            

            articleObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15
});

if (articleHeading) {
    articleObserver.observe(articleHeading);
}

// ***********************************************************
const featuredHeading = document.querySelector(".featured-section .section-heading");
const featuredCard = document.querySelector(".featured-section .featured-card");
const featuredObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (entry.target === featuredHeading) {
                featuredHeading.classList.add("show");
                setTimeout(() => {
                    featuredCard.classList.add("show");
                }, 300);
            }

            featuredObserver.unobserve(entry.target);
        }
                });
            }, {
                threshold: 0.15
            });
            if (featuredHeading) {
                featuredObserver.observe(featuredHeading);
            }



            // **************************************************************
const reviewsHeading = document.querySelector(".reviews-section .section-heading");
const reviewCards = document.querySelectorAll(".reviews-section .review-card");
const reviewsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (entry.target === reviewsHeading) {
                reviewsHeading.classList.add("show");
                reviewCards.forEach((card, index) => {
                    setTimeout(() => {
                        card.classList.add("show");
                    }, (index + 1)*200);
                    });

                }

                reviewsObserver.unobserve(entry.target);
            }
                });

            }, {
                threshold: 0.15
            });

            if (reviewsHeading) {
                reviewsObserver.observe(reviewsHeading);
            }

            // **********************************************************************************
 const newsletterContent = document.querySelector(".newsletter-section .newsletter-content");

 const newsletterItems = newsletterContent ? newsletterContent.children: [];

            const newsletterObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {

                        Array.from(newsletterItems).forEach((item, index) => {
                            setTimeout(() => {
                                item.classList.add("show");
                            }, index * 200);
                        });

                        newsletterObserver.unobserve(entry.target);
                    }
                });
            }, {
                threshold: 0.15
            });

            if (newsletterContent) {
                newsletterObserver.observe(newsletterContent);
            }
                    
            


          

   




        

