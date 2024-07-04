import { radioButtonInstance } from './radioButton';

const errorMsg = ['Select the currency', 'Initial value is bigger then amount'];

const goalNameInput = document.getElementById('dialog-name');
const goalAmountInput = document.getElementById('dialog-amount');
const goalInitialInput = document.getElementById('dialog-initial');
const goalCurrencyRadio = document.getElementById('dialog-currency');

const elementInput = document.querySelectorAll('.dialog__data');
const goalFormStart = document.getElementById('form-dialog');

const arrElements = [goalInitialInput, goalCurrencyRadio];

export const checkFormRadio = () => {
  if (!radioButtonInstance.getActiveItemRadio()) {
    showErrorMessage(
      goalCurrencyRadio,
      goalNameInput,
      goalAmountInput,
      errorMsg[0],
    );
  } else {
    removeErrorMessage(goalCurrencyRadio);
  }
};

const showErrorMessage = (
  element,
  checkElementOne,
  checkElementTwo,
  errorMessage,
) => {
  const errorMessageElement = `
    <div class="error">
        <div class="error__container">
            <div class="error__text"><p>${errorMessage}</p></div>
        </div>
    </div>
    `;

  const errorElement = element.closest('.dialog__data').querySelector('.error');

  if (checkElementOne.value && checkElementTwo.value && !errorElement) {
    // element.style.cssText = 'padding-bottom: 3rem;';
    element
      .closest('.dialog__data')
      .insertAdjacentHTML('afterbegin', errorMessageElement);
  }
};

const removeErrorMessage = (...elements) => {
  elements.forEach(element => {
    const errorElement = element
      .closest('.dialog__data')
      .querySelector('.error');

    if (errorElement) {
      element.style.cssText = '';
      errorElement.remove();
    }
  });
};

export const removeAllErrorMessage = () => {
  removeErrorMessage(goalInitialInput, goalCurrencyRadio);
}

goalInitialInput.addEventListener('keyup', () => {
  checkInputInitialValue();
});

/// Check initial input value;
const checkInputInitialValue = () => {
  if (+goalInitialInput.value > +goalAmountInput.value) {
    showErrorMessage(
      goalInitialInput,
      goalInitialInput,
      goalAmountInput,
      errorMsg[1],
    );

    return false;
  } else {
    removeErrorMessage(goalInitialInput);
    return true;
  }
};

export const checkForm = () => {
  if (goalFormStart.reportValidity() && checkInputInitialValue()) {
    return true;
  } else {
    checkInputInitialValue();
    checkFormRadio();
    return false;
  }
  // return: true OR false;
};
