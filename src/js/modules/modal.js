import { reset } from './reset';

/// CLICK NEW GOAL BUTTON
export const openModalWindow = dialogSelector => {

  const newItemBtn = document.getElementById('new-goal-item');
  const discardBtn = document.getElementById('close-button');
  const modalWindow = document.getElementById(`${dialogSelector}`);

  newItemBtn.addEventListener('click', () => {
    reset();
    modalWindow.showModal();
  });

  discardBtn.addEventListener('click', () => {
    reset();
    modalWindow.close();
  });
};
