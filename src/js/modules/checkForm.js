import { radioButtonInstance } from './radioButton';

const elementInput = document.querySelectorAll('.dialog__data');
const goalFormStart = document.getElementById('form-dialog');

export const checkFormRadio = () => {
  if (!radioButtonInstance.getActiveItemRadio()) {
    showErrorMessage();
  } else {
    removeErrorMessage();
  }
};

const showErrorMessage = () => {
  const errorMessageElement = `
    <div class="error">
        <div class="error__container">
            <div class="error__text"><p>Select the currency</p></div>
        </div>
    </div>
    `;

  const elFirst = elementInput[0].querySelector('.dialog__input').value;
  const elSecond = elementInput[2].querySelector('.dialog__input').value;
  const errorElement = document.querySelector('.error');

  if (elFirst && elSecond && !errorElement) {
    elementInput[3].style.cssText = 'padding-bottom: 3rem;';
    elementInput[3].insertAdjacentHTML('afterbegin', errorMessageElement);
  }
};

const removeErrorMessage = () => {
  const errorElement = document.querySelector('.dialog__data .error');

  if (errorElement) {
    elementInput[3].style.cssText = '';
    errorElement.remove();
  }
};

const goalAmountInput = document.getElementById('dialog-amount');
const goalInitialValue = document.getElementById('dialog-initial');

const checkAmountValue = () => {
  if (goalAmountInput.value) {
    if (goalInitialValue.value > goalAmountInput.value) {
      alert('Initial value is bigger!');
      return false;
    } else {
      return true;
    }
  }
};

export const checkForm = () => {
  if (goalFormStart.reportValidity() && checkAmountValue()) {
    return true;
  } else {
    checkFormRadio();
    return false;
  }
  // return: true OR false;
};