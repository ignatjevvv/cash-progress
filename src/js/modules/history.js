import { goalData } from './goalDada';

const btn = document.getElementById('button');
const closeBtn = document.getElementById('close-button');
const goalFormStart = document.getElementById('form-dialog');
const dialogWindows = document.getElementById('dialog');
const history = document.getElementById('history');
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
  history.classList.remove('hide');
  dialogWindows.querySelector('.dialog__title').innerText = 'History';
  historyList.innerHTML = '';

  currentGoal.history.forEach(item => {
    historyList.innerHTML += `
                      <tr>
                    <td>
                      <div class="dialog__history-date">
                        <span class="dialog__history-month"
                          >${item.date.split(',')[0]}</span
                        >
                        <span class="dialog__history-time"
                          >${item.date.split(',')[1]}</span
                        >
                      </div>
                    </td>
                    <td>
                      <div class="dialog__history-amount">
                        <span class="dialog__history-month"
                          >${item.amount}</span
                        >
                      </div>
                    </td>
                    <td>
                      <div class="dialog__history-operation">
                        <span class="dialog__history-icon">
                          ${item.operation}
                        </span>
                      </div>
                    </td>
                  </tr>
    `;
  });

  closeBtn.innerText = 'Close';
  closeBtn.style.cssText = 'width: 100%;';
  
  btn.classList.add('hide');
  dialogWindows.showModal();
};
