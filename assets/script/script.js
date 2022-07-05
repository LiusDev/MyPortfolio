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
AboutTabs();
function AboutTabs() {
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
}
// -----------------------------

// Portfolio Item Details Popup
PortfolioItemDetailsPopup();
function PortfolioItemDetailsPopup() {
    document.addEventListener("click", (e) => {
        if (e.target.classList.contains('myworks__item--btn') || e.target.classList.contains('myworks__item--thumbnail')) {
            toggleMyWorksPopup();
            document.querySelector('.myworks__popup').scrollTo(0,0);
            myWorksItemDetails(e.target.parentElement);
        }
    })
    
    function toggleMyWorksPopup() {
        document.querySelector('.myworks__popup').classList.toggle('open');
        document.body.classList.toggle('hide--scrolling');
        document.querySelector('.main').classList.toggle('fade--out')
    }
    
    document.querySelector('.mwp__header--close').addEventListener("click", toggleMyWorksPopup);
    document.addEventListener("click", (e) => {
        if(e.target.classList.contains('mwp__inner')) {
            toggleMyWorksPopup();
        }
    })
    
    function myWorksItemDetails(myWorksItem) {
        document.querySelector('.mwp__header--thumbnail img').src = 
        myWorksItem.querySelector('.myworks__item--thumbnail img').src;
    
        document.querySelector('.mwp__content--header h3').innerHTML = 
        myWorksItem.querySelector('.myworks__item--title').innerHTML;
    
        document.querySelector('.mwp__content--body').innerHTML = 
        myWorksItem.querySelector('.myworks__item--details').innerHTML;
    }
}
// -----------------------------