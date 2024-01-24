const initApp = () => {
  const form = document.querySelector("form");
  const input = document.querySelector("input");
  const errorSection = document.querySelector(".error-section");
  const errorIcon = document.querySelector(".error-icon")

  const createInputErrorMessage = (message) => {
    const errorText = document.createElement("p");
    errorText.textContent = message;
    errorText.classList.add("errorMsg");
    return errorText;
  };

  const validateEmail = (email) => {
    if (!email) {
      return false;
    }
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const showErrorMessage = () => {
    if (!errorSection.childElementCount) {
      const message = "Please provide a valid email";
      const errorText = createInputErrorMessage(message);
      errorSection.appendChild(errorText);
      input.classList.toggle("errorInputIndicator");
      errorIcon.classList.remove("hide");
    }
  };

  const resetError = ()=>{
    if(errorSection.childElementCount){
      input.classList.remove("errorInputIndicator");
      while(errorSection.children.length){
        errorSection.children[0].remove()
      }
      errorIcon.classList.add("hide");
    }
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!input.value || !validateEmail(input.value)) {
      showErrorMessage();
      return;
    }

    console.log('submitted')
  });

  input.addEventListener("input",resetError)
};

document.addEventListener("DOMContentLoaded", initApp);
