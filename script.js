const heightInput = document.getElementById("height");
const weightInput = document.getElementById("weight");
const clickBtn = document.getElementById("check");
const displayField = document.getElementById("displayField");
const actualWeight = document.getElementById("actualWeight");

clickBtn.addEventListener("click", () => {
  let height = heightInput.value;
  let weight = weightInput.value;

  let BMI = weight / (height * height);
  if (BMI < 18.5) {
    displayField.textContent = "UnderWeight";
    actualWeight.textContent = `Increase your weight until 18.5`;
  } else if (BMI > 18.5 && BMI < 24.9) {
    displayField.textContent = "Normal";
  } else if (BMI > 25 && BMI < 29.9) {
    displayField.textContent = "OverWeight";
  } else if (BMI > 30) {
    displayField.textContent = "Obese";
  }
});
