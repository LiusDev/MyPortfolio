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
     }, (error) => {
        console.log('FAILED...', error);
     });
}

document.querySelector('#contactSubmitBtn').onclick = SendEmail;