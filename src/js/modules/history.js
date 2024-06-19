import { goalData } from './goalDada';


const btn = document.getElementById('button');
const goalFormStart = document.getElementById('form-dialog');
const dialogWindows = document.getElementById('dialog');
const historyList = document.getElementById('history-list');
let currentGoal = {};
/// RECORD HISTORY TRANSACTION
export const recordTransactionHistory = (sum, totalItem, typeOperation) => {
  totalItem.history.push({
    amount: sum,
    date: new Date().toLocaleString(),
    operation: typeOperation,
  });
};

/// SHOW HISTORY LIST
export const showHistory = goalID => {
  const dataArrIndex = goalData.findIndex(item => item.id === goalID);
  currentGoal = goalData[dataArrIndex];

  goalFormStart.classList.add('hide');
  historyList.classList.remove('hide');
  dialogWindows.querySelector('.dialog__title').innerText = 'History';
  historyList.innerHTML = '';

  currentGoal.history.forEach(item => {
    historyList.innerHTML += `
      <div class="dialog__history-item">
        <div class="dialog__history-date">
          <span class="dialog__history-month">${item.date.split(',')[0]}</span>
          <span class="dialog__history-time">${item.date.split(',')[1]}</span>
        </div>
        <div class="dialog__history-amount">
          <span class="dialog__history-month">${item.amount}</span>
        </div>
        <div class="dialog__history-operation">
          <span class="dialog__history-icon">
            <i class="ri-corner-right-down-line"></i>
          </span>
        </div>
      </div>
    `;
  });

  btn.innerText = 'Save goal';
  dialogWindows.showModal();
};
