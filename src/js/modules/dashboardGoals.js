const labelNumberGoals = document.getElementById('number-goals');
const labelRemainingTarget = document.getElementById('remaining-target');
const labelCompleateGoals = document.getElementById('complete-goals');

export const updateDashboardGoalsInfo = goalData => {
  const totalNumberGoals = goalData.length;
  const compleateCount = goalData.filter(item => item.compleateStatus).length;

  labelNumberGoals.innerText = totalNumberGoals;
  labelCompleateGoals.innerHTML = compleateCount;
  labelRemainingTarget.innerHTML = totalNumberGoals - compleateCount;
};
