/// SHOW DROPDOWN MENU

class DropdownMenu {
  constructor(dropdownClass, buttonMenu) {
    this.dropdownClass = dropdownClass;
    this.buttonMenu = buttonMenu;
  }

  showDropdownMenu() {
    const dropdownButtons = document.querySelectorAll(`.${this.buttonMenu}`);

    if (dropdownButtons.length === 0) {
      console.warn('No dropdown buttons found');
      return;
    }

    dropdownButtons.forEach(button => {
      button.addEventListener('click', () => {
        const dropdown = button.closest(`.${this.dropdownClass}`);
        if (dropdown) {
          dropdown.classList.toggle('show-dropdown');
        } else {
          console.warn('No dropdown container found');
        }
      });
    });

    this.closeDropdowmMenu();
  }

  closeDropdowmMenu() {
    const dropdownItems = document.querySelectorAll('.goal__dropdown-name');
    // console.log(dropdownItems);
    dropdownItems.forEach(item => {
      item.addEventListener('click', () => {
        const dropdown = item.closest(`.${this.dropdownClass}`);
        dropdown.classList.toggle('show-dropdown');
      });
    });
  }
}

export const dropdownMenu = new DropdownMenu(
  'goal__dropdown',
  'goal__dropdown-button',
);
