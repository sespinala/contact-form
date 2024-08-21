function hideElement(elem) {
  if (!elem) return;
  elem.hidden = true;
}

function hideErrorMessages() {
  const errorMessages = document.getElementsByClassName('error-text');
  for (const errorMessage of errorMessages) {
    this.hideElement(errorMessage);
  }
}

function showError(errorMessage, element) {
  errorMessage.hidden = false;
  element.setAttribute('class', 'input-field-required');
}

function hideError(errorMessage, element) {
  errorMessage.hidden = true;
  element.removeAttribute('class', 'input-field-required');
}

window.addEventListener('load', () => {
  this.hideErrorMessages();
});

// Input text
window.addEventListener('load', () => {
  const inputElements = document.querySelectorAll('input[type="text"]');

  for (let i = 0; i < inputElements.length; i++) {
    const element = inputElements[i];

    element.addEventListener('input', () => {
      const errorMessage = document.querySelector(`#${element.id}+span`);

      if (element.validity.valueMissing) {
        this.showError(errorMessage, element);
      } else {
        this.hideError(errorMessage, element);
      }
    });
  }
});

// Email
window.addEventListener('load', () => {
  const element = document.querySelector('input[type="email"]');

  element.addEventListener('input', () => {
    const errorMessage = document.querySelectorAll(`.email-container>span`);

    if (!element.validity.valid) {
      this.showError(errorMessage[0], element);
    } else {
      this.hideError(errorMessage[0], element);
    }

    if (element.validity.valueMissing) {
      this.hideError(errorMessage[0], element);
      this.showError(errorMessage[1], element);
    } else {
      this.hideError(errorMessage[1], element);
    }
  });
});

// Textarea
window.addEventListener('load', () => {
  const element = document.querySelector('textarea');

  element.addEventListener('input', () => {
    const errorMessage = document.querySelector(`#${element.id}+span`);

    if (element.validity.valueMissing) {
      this.showError(errorMessage, element);
    } else {
      this.hideError(errorMessage, element);
    }
  });
});

// Radiobutton
window.addEventListener('load', () => {
  const elements = document.querySelectorAll('input[type="radio"]');

  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    
    if (element.validity.valueMissing) {
        console.log('dfsfd')
    }
  }
  
});

// Checkbox
window.addEventListener('load', () => {
  const element = document.querySelector('input[type="checkbox"]');

  // element.addEventListener('input', () => {
  //   const errorMessage = document.querySelector(`.query-type-container__item-wrapper+span`);

  //   if (element.validity.valueMissing) {
  //     this.showError(errorMessage, element);
  //   } else {
  //     this.hideError(errorMessage, element);
  //   }
  // });
});

window.addEventListener('submit', (event) => {
    event.preventDefault();
});