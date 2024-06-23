import { radioButtonInstance } from './radioButton';
const elementInmput = document.querySelectorAll('.dialog__data');

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

  const elFirst = elementInmput[0].querySelector('.dialog__input').value;
  const elSecond = elementInmput[2].querySelector('.dialog__input').value;
  const errorElement = document.querySelector('.error');

  if (elFirst && elSecond && !errorElement) {
    elementInmput[3].style.cssText = 'padding-bottom: 3rem;';
    elementInmput[3].insertAdjacentHTML('afterbegin', errorMessageElement);
  }
};

const removeErrorMessage = () => {
  const errorElement = document.querySelector('.dialog__data .error');

  if (errorElement) {
    elementInmput[3].style.cssText = '';
    errorElement.remove();
  }
};
