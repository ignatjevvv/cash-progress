import '/scss/style.scss';
import { currencyList } from './modules/currencyList.js';
import { renderListGoal } from './modules/render.js';
import { addNewGoal } from './modules/addNewGoal.js';
import { openModalWindow } from './modules/modal.js';
import { radioButtonInstance } from './modules/radioButton.js';
import { goalData } from './modules/goalDada.js';
import { animation } from './modules/animation.js';
import { currentGoal } from './modules/state.js';


document.addEventListener('DOMContentLoaded', () => {
  animation();
  renderListGoal('goal-list', goalData, currencyList);
  openModalWindow('dialog');

  radioButtonInstance.addClassActiveForRadio();



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
