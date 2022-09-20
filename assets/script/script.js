const $ = document.querySelector.bind(document);
// Loading
window.addEventListener('load', () => {
    $('.main').classList.remove('hidden');
    $('.home').classList.add('active');

    $('.page__loader').classList.add('fade--out');
    setTimeout(() => {
        $('.page__loader').style.display = 'none';
        $('.page__loader').classList.remove('fade--out');
    }, 600);
});
// -----------------------------
// Toggle Navbar
const navToggler = $('.nav--toggler');
navToggler.addEventListener("click", () => {
    hideSection();
    toggleNavbar();
    document.body.classList.toggle('hide--scrolling');
})

function hideSection() {
    $('section.active').classList.toggle('fade--out')
}

function toggleNavbar() {
    $('.header').classList.toggle('active')
}
// -----------------------------

// Active Section
document.addEventListener("click", (e) => {
    if (e.target.classList.contains('link-item') && e.target.hash !== "") {
        $('.overlay').classList.add('active');
        navToggler.classList.add('hide');
        if (e.target.classList.contains('nav__item')) {
            toggleNavbar();
        } else {
            hideSection();
            document.body.classList.add('hide--scrolling');
        }
        setTimeout(() => {
            $('section.active').classList.remove('active', 'fade--out');
            $(e.target.hash).classList.add('active');
            window.scrollTo(0,0);
            document.body.classList.remove('hide--scrolling');
            navToggler.classList.remove('hide');
            $('.overlay').classList.remove('active');
        }, 500)
    }
})
// -----------------------------

// About Tabs
aboutTabs();
function aboutTabs() {
    const tabsContainer = $('.about__tabs');
    const aboutSection = $('.about');
    
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
portfolioItemDetailsPopup();
function portfolioItemDetailsPopup() {
    document.addEventListener("click", (e) => {
        if (e.target.classList.contains('myworks__item--btn') || e.target.classList.contains('myworks__item--thumbnail')) {
            toggleMyWorksPopup();
            $('.myworks__popup').scrollTo(0,0);
            myWorksItemDetails(e.target.parentElement);
        }
    })
    
    function toggleMyWorksPopup() {
        $('.myworks__popup').classList.toggle('open');
        document.body.classList.toggle('hide--scrolling');
        $('.main').classList.toggle('fade--out')
    }
    
    $('.mwp__header--close').addEventListener("click", toggleMyWorksPopup);
    document.addEventListener("click", (e) => {
        if(e.target.classList.contains('mwp__inner')) {
            toggleMyWorksPopup();
        }
    })
    
    function myWorksItemDetails(myWorksItem) {
        $('.mwp__header--thumbnail img').src = 
        myWorksItem.querySelector('.myworks__item--thumbnail img').src;
    
        $('.mwp__header h3').innerHTML = 
        myWorksItem.querySelector('.myworks__item--title').innerHTML;
    
        $('.mwp__body').innerHTML = 
        myWorksItem.querySelector('.myworks__item--details').innerHTML;
    }
}
// -----------------------------