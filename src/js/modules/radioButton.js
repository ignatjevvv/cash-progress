import { checkFormRadio } from "./checkForm";

class RadioButton {
  constructor(radiosCurrencyBtn, currencyTypeRadio) {
    this.radiosCurrencyBtn = document.querySelectorAll(radiosCurrencyBtn);
    this.currencyTypeRadio = document.querySelectorAll(`.${currencyTypeRadio}`);
  }

  radioIsSelect = false;

  /// Added class "active" for label currenct type
  addClassActiveForRadio() {
    this.radiosCurrencyBtn.forEach(item => {
      item.addEventListener('click', e => {
        checkFormRadio();
        this.removeClassActiveRadio();
        e.target.parentNode.classList.add('active');
      });
    });
  }

  /// Get element who has active class
  getActiveItemRadio() {
    for (let radio of this.radiosCurrencyBtn) {
      if (radio.checked) {
        return radio.value;
      }
    }

    return this.radioIsSelect;
  }

  /// Remove active class from buttons that are not selected
  removeClassActiveRadio() {
    this.currencyTypeRadio.forEach(item => {
      item.classList.remove('active');
    });
  }
}

export const radioButtonInstance = new RadioButton(
  'input[type="radio"]',
  'dialog__currency-option',
);
