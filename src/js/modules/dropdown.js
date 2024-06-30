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

          if (dropdown.className.includes('show-dropdown')) {
            dropdown.classList.remove('show-dropdown');
          } else {
            this.closeActiveDropdownMenu(dropdownButtons);
            dropdown.classList.add('show-dropdown');
          }

        } else {
          console.warn('No dropdown container found');
        }
      });
    });

    this.closeDropdowmMenu();
  }

  closeDropdowmMenu() {
    const dropdownItems = document.querySelectorAll('.goal__dropdown-name');

    dropdownItems.forEach(item => {
      item.addEventListener('click', () => {
        const dropdown = item.closest(`.${this.dropdownClass}`);
        dropdown.classList.toggle('show-dropdown');
      });
    });
  }

  closeActiveDropdownMenu(dropdownItems) {
    dropdownItems.forEach(item => {
      item.closest(`.${this.dropdownClass}`).classList.remove('show-dropdown');
    });
  }
}

export const dropdownMenu = new DropdownMenu(
  'goal__dropdown',
  'goal__dropdown-button',
);
