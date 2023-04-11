const counterValue = document.getElementById("value");

document.querySelectorAll("#counter [data-action]").forEach(button => {
  button.addEventListener("click", () => {
    const action = button.dataset.action;
    const currentValue = parseInt(counterValue.textContent);
    const newValue = action === "increment" ? currentValue + 1 : currentValue - 1;
    counterValue.textContent = newValue;
  });
});
