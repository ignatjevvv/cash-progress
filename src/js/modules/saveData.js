/// Save data in local storage.

export const saveDataLocalStorage = (goalData) => {
  localStorage.setItem('data', JSON.stringify(goalData));
};
