import { goalData } from './goalDada.js';
import { renderListGoal } from './render';
import { saveDataLocalStorage } from './saveData';
import { currencyList } from './currencyList.js';
import { reset } from './reset.js';

export const removeGoal = goalID => {
  console.log(goalID);
  const indexItem = goalData.findIndex(item => item.id === goalID);
  goalData.splice(indexItem, 1);
  saveDataLocalStorage(goalData);
  renderListGoal('goal-lists', goalData, currencyList);
};

export const dialogWindow = goalID => {
  const parentDiv = goalID.closest('.goal__task');
  const dialogWindow = parentDiv.querySelector('.goal__dialog');

  // if (!dialogWindow) {
  //   parentDiv.classList.add('hide');
  //   return;
  // }

  dialogWindow.classList.toggle('hide');
  reset();
};
