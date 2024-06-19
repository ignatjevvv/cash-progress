import { dropdownMenu } from './dropdown';
import { updateDashboardGoalsInfo } from './dashboardGoals';
import { removeGoal, dialogWindow } from './removeGoal';
import { editeGoal } from './editGoal';
import { accumulateDeposit } from './accumulate';
import { showHistory } from './history';
import { goalData } from './goalDada';

export const renderListGoal = (goalListElement, goalData, currencyList) => {
  const goalList = document.getElementById(goalListElement);
  updateDashboardGoalsInfo(goalData);

  goalList.innerHTML = '';
  goalData.forEach(
    ({
      id,
      name,
      amount,
      currency,
      accumulation,
      percentPointToFinish,
      compleateStatus,
    }) => {
      goalList.innerHTML += `
        <div class="goal__task" id="${id}">
        <div class="goal__dropdown" id="dropdown-content">
          <button class="goal__dropdown-button">
            <div class="goal__dropdown-dot"></div>
            <div class="goal__dropdown-dot"></div>
            <div class="goal__dropdown-dot"></div>
          </button>
  
          <ul class="goal__dropdown-menu">
            <li class="goal__dropdown-item">
              <i class="ri-pencil-line goal__dropdown-icon"></i>
              <span class="goal__dropdown-name" data-action="edit"
                >Edit</span
              >
            </li>
  
            <li class="goal__dropdown-item">
              <i class="ri-list-view goal__dropdown-icon"></i>
              <span class="goal__dropdown-name" data-action="history"
                >History</span
              >
            </li>
  
            <li class="goal__dropdown-item">
              <i class="ri-delete-bin-line goal__dropdown-icon"></i>
              <span class="goal__dropdown-name" data-action="remove" 
                >Remove</span
              >
            </li>
          </ul>
        </div>
  
        <div class="goal__inform">
          <div class="goal__progress" id="goal-progressbar">
              ${Math.floor(percentPointToFinish)}
            <span class="percent">%</span>
          </div>
  
          <div class="hiden ${compleateStatus ? 'hide' : 'show'}">
            <div class="goal__data">
              <div class="goal__calculate">
                <input
                  class="goal__amount"
                  type="number"
                  id="amount"
                  placeholder="0"
                  value="0"
                />
                <div class="goal__button">
                  <button
                    data-action="withdraw-btn"
                    class="button__minus"
                  >
                    -
                  </button>
                  <button
                    data-action="deposit-btn"
                    class="button__plus"
                  >
                    +
                  </button>
                </div>
              </div>
  
              <div class="goal__wrap">
                <div class="svg-container">
                  <svg width="240" height="144" viewBox="0 0 240 144" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path class="line" d="M-1.71609e-06 72L111 72C116.523 72 121 76.4772 121 82L121 105.382L121 144" stroke="#E3FF73" stroke-width="2"></path>
                      <path class="line" d="M240 74L129 74C123.477 74 119 69.5229 119 64L119 37V0" stroke="#E3FF73" stroke-width="2"></path>
                  </svg>
                </div>
                <div class="goal__statistic">
                  <div class="goal__statistic-item">
                    <span class="goal__statistic-amount">${accumulation}${
        currencyList[currency]
      }</span>
                    <label class="goal__statistic-name">Collected</label>
                  </div>
                  <div class="goal__statistic-item">
                    <span class="goal__statistic-amount">${
                      amount - accumulation
                    }${currencyList[currency]}</span>
                    <label class="goal__statistic-name">Remaining</label>
                  </div>
                  <div class="goal__statistic-item">
                    <span class="goal__statistic-amount">${amount}${
        currencyList[currency]
      }</span>
                    <label class="goal__statistic-name">Goal</label>
                  </div>
                  <div class="goal__statistic-item">
                    <span class="goal__statistic-amount">${percentPointToFinish}%</span>
                    <label class="goal__statistic-name">Progress</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <div class="goal__title">${name}</div>
  
        <div class="goal__dialog hide">
          <p class="goal__dialog-message">
            Do you really wont to remove your progress ?
          </p>
          <div class="goal__dialog-buttons">
            <button class="btn" data-action="remove-goal">
              Remove
            </button>
            <button class="btn" data-action="discard-change">
              Discard
            </button>
          </div>
        </div>
      </div>
    `;
    },
  );

  dropdownMenu.showDropdownMenu();
  assignEventHandlers();
};

function assignEventHandlers() {
  document.querySelectorAll('[data-action="remove"]').forEach(removeBtn => {
    removeBtn.addEventListener('click', e => {
      dialogWindow(e.target.closest('.goal__task'));
    });
  });

  document.querySelectorAll('[data-action="remove-goal"]').forEach(removeBtn => {
    removeBtn.addEventListener('click', e => {
      removeGoal(e.target.closest('.goal__task'));
    });
  });


  document.querySelectorAll('[data-action="edit"]').forEach(editBtn => {
    editBtn.addEventListener('click', e => {
      editeGoal(e.target.closest('.goal__task').id);
      console.log(e.target.closest('.goal__task').id);
    });
  });

  document.querySelectorAll('[data-action="history"]').forEach(historyBtn => {
    historyBtn.addEventListener('click', e => {
      showHistory(e.target.closest('.goal__task').id);
      console.log(e.target.closest('.goal__task').id);
    });
  });

  /// OPEN THE MODAL WHEN WE WANT TO REMOVE A GOAL.
  document.querySelectorAll('[data-action="discard-change"]').forEach(discardBtn => {
    discardBtn.addEventListener('click', e => {
      dialogWindow(e.target.closest('.goal__task'));
    });
  });


  document
    .querySelectorAll('[data-action="withdraw-btn"]')
    .forEach(withdrawBtn => {
      withdrawBtn.addEventListener('click', e => {
        accumulateDeposit(
          e.target.closest('.goal__task').id,
          e.target.dataset.action,
        );
      });
    });

  document
    .querySelectorAll('[data-action="deposit-btn"]')
    .forEach(depositBtn => {
      depositBtn.addEventListener('click', e => {
        accumulateDeposit(
          e.target.closest('.goal__task').id,
          e.target.dataset.action,
        );
      });
    });
}
