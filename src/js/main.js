import '/scss/style.scss';
import { currencyList } from './modules/currencyList.js';
import { renderListGoal } from './modules/render.js';
import { addNewGoal } from './modules/addNewGoal.js';
import { openModalWindow } from './modules/modal.js';
import { radioButtonInstance } from './modules/radioButton.js';
import { goalData } from './modules/goalDada.js';
import { animation } from './modules/animation.js';
import { currentGoal } from './modules/state.js';
import { checkFormRadio } from './modules/checkForm.js';

document.addEventListener('DOMContentLoaded', () => {
  animation();
  renderListGoal('goal-list', goalData, currencyList);
  openModalWindow('dialog');

  radioButtonInstance.addClassActiveForRadio();

  /// CREATE NEW GOAL WHEN CLICK BUTTON IN MODAL WINDOW
  const goalNameInput = document.getElementById('dialog-name');
  const goalAmountInput = document.getElementById('dialog-amount');
  const goalInitialValue = document.getElementById('dialog-initial');

  const goalFormStart = document.getElementById('form-dialog');
  const buttonNewGoal = document.getElementById('button');
  const dialogWindows = document.getElementById('dialog');

  buttonNewGoal.addEventListener('click', () => {
    if (goalFormStart.reportValidity()) {
      dialogWindows.close();
      addNewGoal(
        goalData,
        currentGoal,
        goalNameInput,
        goalAmountInput,
        goalInitialValue,
      );
    } else {
      checkFormRadio();
    }
  });

  // goalFormStart.addEventListener('submit', (e) => {
  //   // addNewGoal(
  //   //   goalData,
  //   //   currentGoal,
  //   //   goalNameInput,
  //   //   goalAmountInput,
  //   //   goalInitialValue,
  //   // );
  // });

  // if (!goalData.length) {
  //   dialogWindows.showModal();
  // } else {
  //   renderListGoal();
  //   goalListContainer.classList.toggle('hide');
  // };
});
