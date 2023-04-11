  const boxesContainer = document.querySelector('#boxes');
  const createBtn = document.querySelector('[data-create]');
  const destroyBtn = document.querySelector('[data-destroy]');
  const input = document.querySelector('input');

  function createBoxes(amount) {
    let size = 30;
    for (let i = 0; i < amount; i++) {
      const box = document.createElement('div');
      box.style.width = `${size}px`;
      box.style.height = `${size}px`;
      box.style.backgroundColor = getRandomHexColor();
      boxesContainer.appendChild(box);
      size += 10;
    }
  }

  function destroyBoxes() {
    boxesContainer.innerHTML = '';
  }

  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }

  createBtn.addEventListener('click', () => {
    const amount = Number(input.value);
    createBoxes(amount);
  });

  destroyBtn.addEventListener('click', () => {
    destroyBoxes();
  });
