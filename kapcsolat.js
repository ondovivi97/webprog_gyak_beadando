// A form validációja
function validateForm() {
    let isValid = true;

    // Minden mezőt ellenőrzünk
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const subject = document.getElementById('subject');
    const message = document.getElementById('message');

    // Név validáció
    if (name.value.length < 10) {
        isValid = false;
        name.classList.add('is-invalid');
    } else {
        name.classList.remove('is-invalid');
    }

    // Email validáció
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email.value)) {
        isValid = false;
        email.classList.add('is-invalid');
    } else {
        email.classList.remove('is-invalid');
    }

    // Telefonszám validáció (opcionális)
    const phoneRegex = /^\+36\s(20|30|70)\s\d{3}\s\d{4}$/;
        if (!phoneRegex.test(phone.value)) {
        isValid = false;
        phone.classList.add('is-invalid');
    } else {
        phone.classList.remove('is-invalid');
    }

    // Téma validáció
    if (subject.value.length < 10) {
        isValid = false;
        subject.classList.add('is-invalid');
    } else {
        subject.classList.remove('is-invalid');
    }

    // Üzenet validáció
    if (message.value.length < 10) {
        isValid = false;
        message.classList.add('is-invalid');
    } else {
        message.classList.remove('is-invalid');
    }

    return isValid;
}
