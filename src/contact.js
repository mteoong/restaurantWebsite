function contact() {
    const wrapper = document.querySelector(".wrapper")
    wrapper.remove();

    const contactWrapper = document.createElement('div');
    contactWrapper.classList.add("wrapper", "contact-wrapper");
    document.body.append(contactWrapper);

    const contactContent = document.createElement('div');
    contactContent.classList.add("contact-content");
    contactWrapper.append(contactContent);

    const titleContact = document.createElement('h1');
    titleContact.classList.add("title", "contact");
    titleContact.innerText = "CONTACT";
    contactContent.append(titleContact);

    const contactBox = document.createElement('div');
    contactBox.classList.add("contact-box");
    contactContent.append(contactBox);

    const form = document.createElement('form');
    form.classList.add("contact");
    contactBox.append(form);

    const messageUs = document.createElement('h1');
    messageUs.classList.add("form");
    messageUs.innerText = "Message us!";
    form.append(messageUs);

    const nameWrapper = document.createElement('div');
    nameWrapper.classList.add("form-item", "name-wrapper");
    form.append(nameWrapper);

    const name = document.createElement('input');
    name.setAttribute("type", "text");
    name.setAttribute('name', 'name');
    name.setAttribute('required', 'true');
    nameWrapper.append(name);

    const namePlaceholder = document.createElement('span');
    namePlaceholder.classList.add("placeholder");
    namePlaceholder.innerText = "Name";
    nameWrapper.append(namePlaceholder);

    const nameError = document.createElement('p');
    nameError.classList.add('error-message');
    nameWrapper.append(nameError);

    const emailWrapper = document.createElement('div');
    emailWrapper.classList.add("form-item", "email-wrapper");
    form.append(emailWrapper);

    const email = document.createElement('input');
    email.setAttribute("type", "email");
    email.setAttribute('name', 'email');
    email.setAttribute('required', 'true');
    emailWrapper.append(email);

    const emailPlaceholder = document.createElement('span');
    emailPlaceholder.classList.add("placeholder");
    emailPlaceholder.innerText = "Email";
    emailWrapper.append(emailPlaceholder);

    const emailError = document.createElement('p');
    emailError.classList.add('error-message');
    emailWrapper.append(emailError);

    const messageWrapper = document.createElement('div');
    messageWrapper.classList.add("form-item", "message-wrapper");
    form.append(messageWrapper);

    const message = document.createElement('textarea');
    message.setAttribute('name', 'message');
    message.setAttribute('required', 'true');
    messageWrapper.append(message);

    const messagePlaceholder = document.createElement('span');
    messagePlaceholder.classList.add("placeholder");
    messagePlaceholder.innerText = "Message";
    messageWrapper.append(messagePlaceholder);

    const messageError = document.createElement('p');
    messageError.classList.add('error-message');
    messageWrapper.append(messageError);

    const button = document.createElement('button');
    button.setAttribute('type', "submit");
    button.innerText = "Send";
    form.append(button);

    const mapElement = document.createElement('iframe');
    mapElement.setAttribute('src', "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1662934.3170323512!2d138.64871511315002!3d35.50629124814135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x605d1b87f02e57e7%3A0x2e01618b22571b89!2sTokyo%2C%20Japan!5e0!3m2!1sen!2sph!4v1624405283664!5m2!1sen!2sph");
    mapElement.setAttribute('width', '500');
    mapElement.setAttribute('height', '400');
    mapElement.setAttribute('style', 'border:0;');
    mapElement.setAttribute('loading', 'lazy');
    contactBox.append(mapElement);

    addFormValidation();
}

function addFormValidation() {
    const name = document.querySelector("input[name='name']");
    const nameError = document.querySelector(".name-wrapper > p");
    const email = document.querySelector("input[name='email']");
    const emailError = document.querySelector(".email-wrapper > p");
    const message = document.querySelector("textarea");
    const messageError = document.querySelector(".message-wrapper > p");
    const form = document.querySelector("form");

    form.addEventListener('submit', function(event) {
        if(!name.validity.valid || !email.validity.valid || !message.validity.valid) {
            event.preventDefault();
          }
    })

    name.addEventListener('input', function(event) {
        if(!name.validity.valueMissing) {
            name.classList.add("has-input");
        } else {
            name.classList.remove("has-input");
        }
        if(name.value.length > 50) {
            name.classList.add("error");
            nameError.innerText = "*This name is too long!"
            name.setCustomValidity("This name is too long!");
        } else {
            name.classList.remove("error");
            nameError.innerText = "";
            name.setCustomValidity("");
        }
    })

    email.addEventListener('input', function(event) {
        if(!email.validity.valueMissing) {
            email.classList.add("has-input");
        } else {
            email.classList.remove("has-input");
        }
        if(email.value.length > 62) {
            email.classList.add("error");
            emailError.innerText = "This email is too long!"
            email.setCustomValidity("This email is too long!");
        } else if (email.validity.typeMismatch) {
            email.classList.add("error");
            emailError.innerText = "Entered value needs to be an e-mail address.";
            email.setCustomValidity('Entered value needs to be an e-mail address.');
        } else {
            email.classList.remove("error");
            emailError.innerText = "";
            email.setCustomValidity("");
        }
    })

    message.addEventListener('input', function(event) {
        if(!message.validity.valueMissing) {
            message.classList.add("has-input");
        } else {
            message.classList.remove("has-input");
        }
        if(message.value.length > 500) {
            message.classList.add("error");
            messageError.innerText = "*Message must be shorter than 500 characters."
            message.setCustomValidity("Message must be shorter than 500 characters.");
        } else {
            message.classList.remove("error");
            messageError.innerText = "";
            message.setCustomValidity("");
        }
    })
}

export {contact};