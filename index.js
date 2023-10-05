let display = document.getElementById("display");
let expression = "";

const appendToDisplay = (value) => {
  expression += value;
  display.value = expression;
};

const clearDisplay = () => {
  expression = "";
  display.value = "0";
};

const oneStepBack = () => {
  let currentExp = display.value;
  if (currentExp == "0") {
    return (display.value = "0");
  }
  display.value = currentExp.slice(0, -1);
};

const calculateAns = () => {
  try {
    expression = eval(expression).toString();
    display.value = expression;
  } catch (error) {
    if (display.value == "0") {
      return (display.value = "0");
    }
    display.value = "Invalid Expression";
  }
};
