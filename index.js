import Converter from "./Converter.js";

const from = document.getElementById("from");
const to = document.getElementById("to");
const question = document.getElementById("question");
const result = document.getElementById("result");

from.addEventListener("change", function () {
  from.value;
  to.value;
});

to.addEventListener("change", function () {
  from.value;
  to.value;
});

question.addEventListener("keyup", function () {
  if (to.value === "celcius") {
    const nilai = converter.toCelcius(from.value, question.value);
    return (result.value = nilai);
  } else if (to.value === "reamur") {
    const nilai = converter.toReamur(from.value, question.value);
    return (result.value = nilai);
  } else {
    const nilai = converter.toFahrenheit(from.value, question.value);
    return (result.value = nilai);
  }
});

const converter = new Converter();

const body = document.querySelector("body");
const button = document.getElementById("btn-color");

button.addEventListener("click", function () {
  const colorValue = document.getElementById("color-input").value;
  body.style.backgroundColor = colorValue;
});
