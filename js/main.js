document.querySelector(".button-1").addEventListener("click", function () {
  const radioInputs = document.querySelectorAll(
    '.format-options-1 input[type="radio"]',
  );

  let selectedValue = "";
  radioInputs.forEach((input) => {
    if (input.checked) {
      selectedValue = input.value;
    }
  });

  document.querySelector(".show-input-check-business").textContent =
    selectedValue;
  document.querySelector(".step-heading-1").textContent =
    "1. Choose your industry";
  document.querySelector(".format-options-1").style.display = "none";

  if (document.querySelector(".format-options-1").style.display === "none") {
    document.querySelector(".show-input-check-business").style.color =
      "#2E83FF";
    document.querySelector(".button-1").style.display = "none";
  }
  document.querySelector(".edit-checked").style.display = "flex";
});

document.querySelector(".edit-checked").addEventListener("click", function () {
  document.querySelector(".format-options-1").style.display = "grid";
  document.querySelector(".edit-checked").style.display = "none";
  document.querySelector(".show-input-check-business").style.color = "";
  document.querySelector(".button-1").style.display = "inline-block";
});

document
  .querySelectorAll('.format-option-2 input[type="radio"]')
  .forEach((input) => {
    input.addEventListener("change", function () {
      document.querySelector(".button-2").disabled = false;
    });
  });

document.querySelector(".button-2").addEventListener("click", function () {
  const radioInputs = document.querySelectorAll(
    '.format-option-2 input[type="radio"]',
  );

  let selectedValue = "";
  radioInputs.forEach((input) => {
    if (input.checked) {
      selectedValue = input.value;
    }
  });

  document.querySelector(".show-input-check-marketing").textContent =
    selectedValue;
  document.querySelector(".format-option-2").style.display = "none";

  if (document.querySelector(".format-option-2").style.display === "none") {
    document.querySelector(".show-input-check-marketing").style.color =
      "#2E83FF";
    document.querySelector(".button-2").style.display = "none";
  }

  document.querySelector(".edit-checked-2").style.display = "flex";
});

document
  .querySelector(".edit-checked-2")
  .addEventListener("click", function () {
    document.querySelector(".format-option-2").style.display = "flex";
    document.querySelector(".edit-checked-2").style.display = "none";
    document.querySelector(".show-input-check-marketing").style.color = "";
    document.querySelector(".button-2").style.display = "inline-block";
  });
