import { radioButtonInstance } from './radioButton.js';
import { removeAllErrorMessage } from './checkForm.js';


const goalFormStart = document.getElementById('form-dialog');
const historyList = document.getElementById('history-list');
const history = document.getElementById('history');

const closeBtn = document.getElementById('close-button');
const newGoalBtn = document.getElementById('button');

/// Clear input fields from values
export const reset = () => {
  document.getElementById('form-dialog').reset();

  radioButtonInstance.removeClassActiveRadio();
  removeAllErrorMessage();
  document.querySelector('.dialog__title').innerText = 'New goal';
  newGoalBtn.innerText = 'Create goal';
  closeBtn.innerText = 'Discard';

  closeBtn.style.cssText = '';

  //   removeClassActiveRadio();
  //   currentGoal = {};

  historyList.innerHTML = '';
  goalFormStart.classList.remove('hide');
  newGoalBtn.classList.remove('hide');
  history.classList.add('hide');
};
