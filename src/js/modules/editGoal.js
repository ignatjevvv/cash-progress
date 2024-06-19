import { goalData } from "./goalDada";
import { reset } from "./reset";
import { setCurrentGoal } from "./state";

// let currentGoal = {};
const btn = document.getElementById('button');
const goalNameInput = document.getElementById('dialog-name');
const goalAmountInput = document.getElementById('dialog-amount');
const goalInitialValue = document.getElementById('dialog-initial');
const radiosCurrencyBtn = document.querySelectorAll('input[type="radio"]');
const dialogWindows = document.getElementById('dialog');

/// EDITE GOAL.
export const editeGoal = goalID => {
  reset();
  console.log('+++ GOAL DATA', goalData);
  const dataArrIndex = goalData.findIndex(item => item.id === goalID);
  let currentGoal = goalData[dataArrIndex];
  setCurrentGoal(goalData[dataArrIndex]);

  goalNameInput.value = currentGoal.name;
  goalAmountInput.value = currentGoal.amount;
  goalInitialValue.value = currentGoal.accumulation;

  console.log('+++');
  console.log(currentGoal);

  radiosCurrencyBtn.forEach(item => {
    if (item.value === currentGoal.currency) {
      item.parentNode.classList.add('active');
    }
  });

  dialogWindows.querySelector('.dialog__title').innerText = 'Edit goal';
  btn.innerText = 'Save goal';
  dialogWindows.showModal();
};
