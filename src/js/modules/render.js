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
        <div class="goal__task ${compleateStatus ? "complete" : "no-complete"
        }" id="${id}">
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
          ${
            compleateStatus
              ? `<svg width="118" height="89" viewBox="0 0 118 89" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="path-1-inside-1_522_18" fill="white">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M112.633 4.70497C106.37 -1.50932 96.2562 -1.47042 90.0419 4.79184L44.2006 50.9871L26.0999 32.8865C20.1292 26.9158 10.4487 26.9158 4.47803 32.8865C-1.49268 38.8572 -1.49268 48.5376 4.47803 54.5083L33.5334 83.5637C33.8497 83.88 34.1765 84.1796 34.5125 84.4624C40.803 90.1683 50.5325 89.963 56.5748 83.874L112.72 27.2958C118.934 21.0335 118.895 10.9192 112.633 4.70497Z"/>
                </mask>
                <path d="M90.0419 4.79184L91.4616 6.20061L91.4616 6.20061L90.0419 4.79184ZM112.633 4.70497L111.224 6.12461L111.224 6.12461L112.633 4.70497ZM44.2006 50.9871L42.7864 52.4014L44.206 53.821L45.6202 52.3959L44.2006 50.9871ZM26.0999 32.8865L27.5141 31.4722L27.5141 31.4722L26.0999 32.8865ZM4.47803 32.8865L5.89225 34.3007L5.89225 34.3007L4.47803 32.8865ZM4.47803 54.5083L5.89225 53.0941L5.89225 53.0941L4.47803 54.5083ZM33.5334 83.5637L34.9476 82.1495L34.9476 82.1495L33.5334 83.5637ZM34.5125 84.4624L35.8562 82.981L35.8287 82.9561L35.8003 82.9322L34.5125 84.4624ZM56.5748 83.874L55.1552 82.4653L55.1552 82.4653L56.5748 83.874ZM112.72 27.2958L111.3 25.887L111.3 25.887L112.72 27.2958ZM91.4616 6.20061C96.8978 0.72239 105.746 0.688364 111.224 6.12461L114.041 3.28532C106.995 -3.707 95.6146 -3.66323 88.6223 3.38308L91.4616 6.20061ZM45.6202 52.3959L91.4616 6.20061L88.6223 3.38308L42.7809 49.5784L45.6202 52.3959ZM24.6857 34.3007L42.7864 52.4014L45.6148 49.5729L27.5141 31.4722L24.6857 34.3007ZM5.89225 34.3007C11.0819 29.111 19.496 29.111 24.6857 34.3007L27.5141 31.4722C20.7623 24.7205 9.81558 24.7205 3.06382 31.4722L5.89225 34.3007ZM5.89225 53.0941C0.702584 47.9044 0.702585 39.4903 5.89225 34.3007L3.06382 31.4722C-3.68794 38.224 -3.68794 49.1708 3.06382 55.9225L5.89225 53.0941ZM34.9476 82.1495L5.89225 53.0941L3.06382 55.9225L32.1192 84.9779L34.9476 82.1495ZM35.8003 82.9322C35.508 82.6861 35.2234 82.4253 34.9476 82.1495L32.1192 84.9779C32.476 85.3347 32.845 85.673 33.2247 85.9926L35.8003 82.9322ZM55.1552 82.4653C49.8697 87.7915 41.358 87.9715 35.8562 82.981L33.1688 85.9437C40.248 92.3651 51.1952 92.1345 57.9944 85.2828L55.1552 82.4653ZM111.3 25.887L55.1552 82.4653L57.9944 85.2828L114.139 28.7045L111.3 25.887ZM111.224 6.12461C116.702 11.5609 116.736 20.4088 111.3 25.887L114.139 28.7045C121.132 21.6582 121.088 10.2776 114.041 3.28532L111.224 6.12461Z" fill="#E3FF73" mask="url(#path-1-inside-1_522_18)"/>
                </svg>`
              : Math.floor(percentPointToFinish) +
                '<span class="percent">%</span>'
          }
          </div>
          <div class="hiden">
            <div class="goal__data ${compleateStatus ? "complete" : "no-complete"
        }"">
              <div class="goal__calculate ${compleateStatus ? 'hide' : 'show'}">
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
  
              <div class="goal__wrap ${compleateStatus ? "complete" : "no-complete"
        }"">
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

  document
    .querySelectorAll('[data-action="remove-goal"]')
    .forEach(removeBtn => {
      removeBtn.addEventListener('click', e => {
        removeGoal(e.target.closest('.goal__task').id);
      });
    });

  document.querySelectorAll('[data-action="edit"]').forEach(editBtn => {
    editBtn.addEventListener('click', e => {
      editeGoal(e.target.closest('.goal__task').id);
    });
  });

  document.querySelectorAll('[data-action="history"]').forEach(historyBtn => {
    historyBtn.addEventListener('click', e => {
      showHistory(e.target.closest('.goal__task').id);
    });
  });

  /// OPEN THE MODAL WHEN WE WANT TO REMOVE A GOAL.
  document
    .querySelectorAll('[data-action="discard-change"]')
    .forEach(discardBtn => {
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
