/// CHECK GOAL COMPLETION STATUS.
export const checkCompletionStatus = goalItemObj => {
  if (goalItemObj.accumulation >= goalItemObj.amount) {
    goalItemObj.compleateStatus = true;
    console.log('Goal Item Complete 🥳');
  }
};
