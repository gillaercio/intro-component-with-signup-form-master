const firstName = document.querySelector("#form-first-name");
const lastName = document.querySelector("#form-last-name");
const email = document.querySelector("#form-email");
const pass = document.querySelector("#form-password");

const fields = [
  {element: firstName, placeholder: "First Name", message: "First Name cannot be empty"},
  {element: lastName, placeholder: "Last Name", message: "Last Name cannot be empty"},
  {element: email, placeholder: "Email Address", message: "Looks like this is not an email"},
  {element: pass, placeholder: "Password", message: "Password cannot be empty"}
];

document.querySelector(".form-button").addEventListener("click", function (event) {
  event.preventDefault();

  fields.forEach(field => {
    const input = field.element;
    const errorMessage = input.nextElementSibling;

    let hasError = input.value.trim() === "";

    if (input === email && input.value.trim() !== "") {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      hasError = !emailPattern.test(input.value.trim());
    }

    if (hasError) {     
      if (input === email && input.value.trim() !== "") {
        input.placeholder = "email@example/com";
      } else {
        input.placeholder = "";
      }
      
      input.classList.add("error");
      input.dataset.placeholder = input.placeholder;
      input.value = "";

      input.style.borderWidth = "3px";
      input.style.borderColor = "var(--Red)";
      input.style.backgroundImage = "url('./assets/images/icon-error.svg')";
      input.style.backgroundRepeat = "no-repeat";
      input.style.backgroundPosition = "right 10px center";
      input.style.paddingRight = "40px";

      if (errorMessage) {
        errorMessage.textContent = field.message;
        errorMessage.style.visibility = "visible";
      }
    } else {
      input.classList.remove("error");
      input.style.borderColor = "var(--Grayish-Blue)";
      input.style.backgroundImage = "none";
      input.style.paddingRight = "20px";
      input.placeholder = input.dataset.placeholder || "";

      if (errorMessage) {
        errorMessage.textContent = "";
        errorMessage.style.visibility = "hidden";
      }
    }
  });
});

fields.forEach(field => {
  field.element.addEventListener("input", () => {
    const input = field.element;
    const errorMessage = input.nextElementSibling;

    input.classList.remove("error");
    input.placeholder = field.placeholder;
    input.style.borderWidth = "1px";
    input.style.borderColor = "var(--Grayish-Blue)";
    input.style.backgroundImage = "none";
    input.style.paddingRight = "20px";

    if(errorMessage) {
      errorMessage.textContent = "";
      errorMessage.style.visibility = "hidden";
    }
  });
});