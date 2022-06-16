// Loading
window.addEventListener('load', () => {
    document.querySelector('.main').classList.remove('hidden');
    document.querySelector('.home').classList.add('active');

    document.querySelector('.page__loader').classList.add('fade--out');
    setTimeout(() => {
        document.querySelector('.page__loader').style.display = 'none';
    }, 600);
});
// -----------------------------
window.onload=function(){

    // Toggle Navbar
    const navToggler = document.querySelector('.nav--toggler');
    navToggler.addEventListener("click", () => {
        hideSection();
        toggleNavbar();
        document.body.classList.toggle('hide--scrolling');
    })

    function hideSection() {
        document.querySelector('section.active').classList.toggle('fade--out')
    }

    function toggleNavbar() {
        document.querySelector('.header').classList.toggle('active')
    }
    // -----------------------------

    // Active Section
    document.addEventListener("click", (e) => {
        if (e.target.classList.contains('link-item') && e.target.hash !== "") {
            document.querySelector('.overlay').classList.add('active');
            navToggler.classList.add('hide');
            if (e.target.classList.contains('nav__item')) {
                toggleNavbar();
            } else {
                hideSection();
                document.body.classList.add('hide--scrolling');
            }
            setTimeout(() => {
                document.querySelector('section.active').classList.remove('active', 'fade--out');
                document.querySelector(e.target.hash).classList.add('active');
                window.scrollTo(0,0);
                document.body.classList.remove('hide--scrolling');
                navToggler.classList.remove('hide');
                document.querySelector('.overlay').classList.remove('active');
            }, 500)
        }
    })
    // -----------------------------

    // About Tabs
    const tabsContainer = document.querySelector('.about__tabs');
    const aboutSection = document.querySelector('.about');
    
    tabsContainer.addEventListener("click", (e) => {
        if (e.target.classList.contains('about__tabs--item') && !e.target.classList.contains('active')) {
            tabsContainer.querySelector('.active').classList.remove('active');
            e.target.classList.add('active');
            const target = e.target.getAttribute('data-target');
            aboutSection.querySelector('.tab__content.active').classList.remove('active');
            aboutSection.querySelector(target).classList.add('active');
        }
    })
    // -----------------------------

    // Portfolio Item Details Popup
    document.addEventListener("click", (e) => {
        if (e.target.classList.contains('portfolio__item--btn') || e.target.classList.contains('portfolio__item--thumbnail')) {
            console.log(e.target);
            togglePortfolioPopup();
            document.querySelector('.portfolio__popup').scrollTo(0,0);
            portfolioItemDetails(e.target.parentElement);
        }
    })

    function togglePortfolioPopup() {
        document.querySelector('.portfolio__popup').classList.toggle('open');
        document.body.classList.toggle('hide--scrolling');
        document.querySelector('.main').classList.toggle('fade--out')
    }

    document.querySelector('.pp__header--close').addEventListener("click", togglePortfolioPopup);
    document.addEventListener("click", (e) => {
        if(e.target.classList.contains('pp__inner')) {
            togglePortfolioPopup();
        }
    })

    function portfolioItemDetails(portfolioItem) {
        document.querySelector('.pp__header--thumbnail img').src = 
        portfolioItem.querySelector('.portfolio__item--thumbnail img').src;

        document.querySelector('.pp__content--header h3').innerHTML = 
        portfolioItem.querySelector('.portfolio__item--title').innerHTML;

        document.querySelector('.pp__content--body').innerHTML = 
        portfolioItem.querySelector('.portfolio__item--details').innerHTML;
    }
    // -----------------------------
}