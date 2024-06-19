import { radioButtonInstance } from './radioButton.js';
const goalFormStart = document.getElementById('form-dialog');
const historyList = document.getElementById('history-list');

/// Clear input fields from values
export const reset = () => {
  document.getElementById('form-dialog').reset();

  radioButtonInstance.removeClassActiveRadio();
  document.querySelector('.dialog__title').innerText = 'New goal';
  document.getElementById('button').innerText = 'Create goal';
  goalFormStart.classList.remove('hide');

  //   removeClassActiveRadio();
  //   currentGoal = {};

  historyList.innerHTML = '';
  historyList.classList.add('hide');
};
