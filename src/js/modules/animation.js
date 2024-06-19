/// SCROLL TRIGER

export function animation() {
  const headerMenu = document.querySelector('.statistic__container');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 45) {
      headerMenu.classList.add('scroll');
    } else {
      headerMenu.classList.remove('scroll');
    }

    const goalItems = document.querySelectorAll('.goal__task');

    goalItems.forEach(item => {
      // 50 or 200
      if (item.getBoundingClientRect().top < 100) {
        item.classList.add('opacity-card');
      } else {
        item.classList.remove('opacity-card');
      }
    });
  });
}
