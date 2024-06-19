export function percentageToFinish(goalItem) {
  goalItem.percentPointToFinish = Math.floor(
    (goalItem.accumulation / goalItem.amount) * 100,
  ).toFixed(2);
}
