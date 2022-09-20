var serviceID = 'service_yifq0m9';
var templateID = 'template_vrzbyop';
var templateParams = {
    name: '',
    email: '',
    subject: '',
    Subject: ''
};

function getData() {
    templateParams.name = document.querySelector('#contactName').value;
    templateParams.email = document.querySelector('#contactEmail').value;
    templateParams.subject = document.querySelector('#contactSubject').value;
    templateParams.Subject = document.querySelector('#contactMessage').value;
}

function SendEmail() {
    getData();
    emailjs.send(serviceID, templateID, templateParams)
    .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        contactSuccess();
    }, (error) => {
        // console.log('FAILED...', error);
        contactFailed();
    });
    document.querySelector('.page__loader').style.display = 'flex';
    setTimeout(() => {
            document.querySelector('.page__loader').classList.add('fade--out');
            toggleContactModalPopup();
        setTimeout(() => {
            document.querySelector('.page__loader').style.display = 'none';
            document.querySelector('.page__loader').classList.remove('fade--out');
        }, 600);
    }, 4000);
}

function toggleContactModalPopup() {
    document.querySelector('.contact__popup').classList.toggle('open');
    document.body.classList.toggle('hide--scrolling');
    document.querySelector('.main').classList.toggle('fade--out')
}

closeContactModalPopup();
function closeContactModalPopup() {
    document.querySelector('.contactp__header--close').addEventListener("click", ()=> {
        toggleContactModalPopup();
        setDefaultModalStyle();
    });
    document.addEventListener("click", (e) => {
        if(e.target.classList.contains('contactp__inner')) {
            toggleContactModalPopup();
            setDefaultModalStyle();
        }
    })
}
var sendingIcon = '<i class="fa-regular fa-paper-plane"></i>';
var successIcon = '<i class="fa-regular fa-circle-check"></i>';
var failedIcon = '<i class="fa-regular fa-circle-xmark"></i>';

function setDefaultModalStyle() {
    document.querySelector('.contactp__status-icon').style.color = 'var(--main-color)';
    document.querySelector('.contactp__status-icon').innerHTML = sendingIcon;
    document.querySelector('.contactp__header h3').innerHTML = 'Sending...';
    document.querySelector('.contactp__body p').innerHTML = '';
}

function contactSuccess() {
    document.querySelector('.contactp__status-icon').style.color = 'green';
    document.querySelector('.contactp__status-icon').innerHTML = successIcon;
    document.querySelector('.contactp__header h3').innerHTML = 'success!';
    document.querySelector('.contactp__body p').innerHTML = 'I will contact you soon';
}

function contactFailed() {
    document.querySelector('.contactp__status-icon').style.color = 'red';
    document.querySelector('.contactp__status-icon').innerHTML = failedIcon;
    document.querySelector('.contactp__header h3').innerHTML = 'failed!';
    document.querySelector('.contactp__body p').innerHTML = 'Please try again later';
}

document.querySelector('#contactSubmitBtn').onclick = SendEmail;