const input = document.querySelector("#validation-input");

input.addEventListener("blur", () => {
  const length = Number(input.getAttribute("data-length"));
  if (input.value.length === length) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
});
