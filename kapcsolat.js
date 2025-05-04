document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
  
    const fields = {
      name: { minLength: 10 },
      subject: { minLength: 10 },
      message: { minLength: 10 },
      email: {
        validate: value => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
      },
      phone: {
        optional: true,
        validate: value =>
          value === "" || /^\+36\s(20|30|70)\s\d{3}\s\d{4}$/.test(value)
      }
    };
  
    Object.keys(fields).forEach(fieldId => {
      const input = document.getElementById(fieldId);
      input.addEventListener("input", () => {
        validateField(fieldId);
      });
    });
  
    form.addEventListener("submit", e => {
      e.preventDefault();
      const allValid = Object.keys(fields).every(validateField);
      if (allValid) {
        alert("Sikeres beküldés!");
        form.reset();
        clearValidation();
      }
    });
  
    function validateField(fieldId) {
      const input = document.getElementById(fieldId);
      const value = input.value.trim();
      const rules = fields[fieldId];
      let valid = true;
  
      if (rules.minLength !== undefined) {
        valid = value.length >= rules.minLength;
      }
  
      if (rules.validate) {
        valid = rules.validate(value);
      }
  
      if (!valid) {
        input.classList.add("is-invalid");
        input.classList.remove("is-valid");
      } else {
        input.classList.remove("is-invalid");
        input.classList.add("is-valid");
      }
  
      return valid;
    }
  
    function clearValidation() {
      document.querySelectorAll(".form-control").forEach(input => {
        input.classList.remove("is-valid", "is-invalid");
      });
    }
  });
  

