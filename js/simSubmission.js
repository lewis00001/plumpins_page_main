const feedbackElement = document.getElementById('feedback');

const formElement = document.forms[0];

formElement.addEventListener('submit', function (e) {
    e.preventDefault();

    let formData = {
        name: formElement.name.value,
        email: formElement.email.value,
        message: formElement.eBody.value
    };

    if (formData.name === "" || formData.email === "" || formData.message === "") {
        feedbackElement.innerHTML = 'Please complete all fields before submitting.';
        feedbackElement.style.display = "block";
        feedbackElement.style.color = "lightcoral";
    } else {
        feedbackElement.innerHTML = 'Hi ' + formElement.name.value + '. ' +
            'Thank you for contacting us. We\'ll get back to you as soon as we can. Have a great day.';
        feedbackElement.style.display = "block";
        feedbackElement.style.color = "#dddd64";
    };
});