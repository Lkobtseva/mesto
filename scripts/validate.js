/*enableValidation({
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
  }); 


  const profileForm = document.forms.editor;
  const cardForm = document.forms.addCard;
  const name = form.elements.name;
  const about = form.elements.about;
  const title = form.elements.title;
  const link = form.elements.link;*/

function showError(inputElement, errorElement){
    inputElement.classList.add("popup__input_invalid");
    errorElement.textContent = inputElement.validationMessage;
};

function hideError(inputElement, errorElement){
    inputElement.classList.remove("popup__input_invalid");
    errorElement.textContent = inputElement.validationMessage;
};

function disabledButton (buttonElement) {
    buttonElement.disabled = "disabled";
        buttonElement.classList.add("popup__button_invalid");
}
function enabledButton (buttonElement) {
    buttonElement.disabled = false;
    buttonElement.classList.remove("popup__button_invalid");
}

  function checkInputValidity(inputElement, formElement) {
    const isInputValid = inputElement.validity.valid;
    const errorElement = formElement.querySelector(`#${inputElement.name}-error`)
    if(!isInputValid){
        showError(inputElement, errorElement);
    } else {
       hideError(inputElement, errorElement);
    }
  }

function toggleButtonState(buttonElement, isActive){
    if(!isActive) {
       disabledButton(buttonElement);
    } else {
        enabledButton();
    }
}







   function setEventListener(formElement) {
     const inputList = formElement.querySelectorAll('.popup__input');
     const submitButtonElement = formElement.querySelector('.popup__button');
     toggleButtonState(submitButtonElement, formElement.checkValidity());
   [...inputList].forEach(function(inputElement){
    toggleButtonState(submitButtonElement, formElement.checkValidity());
    inputElement.addEventListener('input', function(){
        checkInputValidity();
    });
   });

    formElement.addEventListener('submit', (evt) => {
        evt.preventDefault();
        if(!formElement.checkValidity()) return;
        });
   }



  function enableValidation() {
    const formsList = document.querySelectorAll('.popup__form');
    [...formsList].forEach(function (formElement){
        setEventListener(formElement);
    });

  }

  enableValidation()


 