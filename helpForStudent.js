function findMaxDigit() {
  let num = document.getElementById("numberInput").value;
  let strNum = num.toString();

  let maxDigit = Math.max(...strNum); //розкладаємо обєкт на елементи та записуємо найбільший
  let count = strNum.split(maxDigit).length - 1; //перерахування кількості максимального чсила

  document.getElementById(
    "result"
  ).innerText = `Максимальна цифра: ${maxDigit}, Кількість: ${count}`;
}
