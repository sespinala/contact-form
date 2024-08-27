const firstNameId = 'first-name';
const lastNameId = 'last-name';
const emailId = 'email';
const queryTypeName = 'query-type';
const messageId = 'message';
const consentId = 'consent';

const validErrorTextId = 'valid-error-text';
const requiredErrorTextId = 'required-error-text';

const inputRequiredClass = 'input-field-required';

const showError = (errorMessage, element) => {
  errorMessage.hidden = false;
  element.setAttribute('class', inputRequiredClass);
}

const hideError = (errorMessage, element) => {
  errorMessage.hidden = true;
  element.removeAttribute('class', inputRequiredClass);
}

const handleEmailInput = (event) => {
  const validErrorMessage = document.querySelector(`#${validErrorTextId}`);
  const requiredErrorMessage = document.querySelector(`#${requiredErrorTextId}`);

  const element = event.target;

  const isValid = element.validity.valid;
  const isValueMissing = element.validity.valueMissing;

  if (isValueMissing){
    showError(requiredErrorMessage, element);
  } else {
    if (!isValid) {
      showError(validErrorMessage, element);
    } else {
      hideError(validErrorMessage, element);
    }
    hideError(requiredErrorMessage, element);
  }
};

const handleInput = (id, event) => {
  const errorMessage = document.querySelector(`#${id}+span`);

  const element = event.target;

  const isValid = element.validity.valid;
  const isValueMissing = element.validity.valueMissing;

  if (isValueMissing){
    showError(errorMessage, element);
  } else {
    hideError(errorMessage, element);
  }
  console.log('holi');
};

document.addEventListener('DOMContentLoaded', () => {
  const firstNameElem = document.querySelector(`#${firstNameId}`);
  firstNameElem.addEventListener('input', (event) => handleInput(firstNameId, event));

  const lastNameElem = document.querySelector(`#${lastNameId}`);
  lastNameElem.addEventListener('input', (event) => handleInput(lastNameId, event));

  const emailElem = document.querySelector(`#${emailId}`);
  emailElem.addEventListener('input', (event) => handleEmailInput(event));

  const messageElem = document.querySelector(`#${messageId}`);
  messageElem.addEventListener('input', (event) => handleInput(messageId, event));
});
