import { renderListGoal } from './render';
import { radioButtonInstance } from './radioButton';
import { currencyList } from './currencyList';
import { saveDataLocalStorage } from './saveData';
import { reset } from './reset';
import { percentageToFinish } from './percentage';

/// Get value from each item and add it in data array
export const addNewGoal = (
  goalData,
  currentGoal,
  goalNameInput,
  goalAmountInput,
  goalInitialValue,
) => {
  const dataArrIndex = goalData.findIndex(item => item.id === currentGoal.id);
  console.log('Data arr index ' + dataArrIndex);
  let historyClone = JSON.parse(JSON.stringify(currentGoal.history || []));

  const goalObj = {
    id: `${goalNameInput.value
      .toLowerCase()
      .split(' ')
      .join('-')}-${+new Date()}`,
    name: goalNameInput.value,
    amount: goalAmountInput.value,
    currency: radioButtonInstance.getActiveItemRadio(),
    accumulation: 0 || +goalInitialValue.value,
    compleateStatus: false,
    history: historyClone,
  };

  if (dataArrIndex === -1) {
    goalData.unshift(goalObj);
    // for (let i = 0; i < 20; i++) {
    //   goalData.unshift(goalObj);
    // }
  } else {
    goalData[dataArrIndex] = goalObj;
  }

  percentageToFinish(goalObj);
  saveDataLocalStorage(goalData);
  renderListGoal('goal-list', goalData, currencyList);

  /// MOVE TO ANOTHER FUNCTION (RESET)
  //   radioButtonInstance.removeClassActiveRadio();
  reset();
};
