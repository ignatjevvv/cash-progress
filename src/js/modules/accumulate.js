import { saveDataLocalStorage } from './saveData';
import { goalData } from './goalDada';
import { renderListGoal } from './render';
import { currencyList } from './currencyList';
import { percentageToFinish } from './percentage';
import { checkCompletionStatus } from './complete';
import { recordTransactionHistory } from './history';

export const accumulateDeposit = (searchId, idBtn) => {
  const totalItem = goalData.find(item => {
    if (item.id === searchId) {
      return item;
    }
  });

  /// Get the amount from input target card
  let typeOperation = '+';
  const sum = document
    .getElementById(searchId)
    .getElementsByTagName('input')[0].value;

  if (+sum === 0) {
    return;
  }

  if (idBtn === 'withdraw-btn') {
    if (totalItem.accumulation < sum) {
      alert(`Withdrawals add to your savings limit!`);
      return;
    }
    typeOperation = '-';
    totalItem.accumulation -= +sum;
  } else {
    totalItem.accumulation += +sum;
  }

  saveDataLocalStorage(goalData);
  recordTransactionHistory(sum, totalItem, typeOperation);
  checkCompletionStatus(totalItem);
  percentageToFinish(totalItem);
  renderListGoal('goal-list', goalData, currencyList);
  saveDataLocalStorage(goalData);
  console.log(goalData);
};
