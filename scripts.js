function findMaxDigit() {
    let num = document.getElementById("numberInput").value; // Отримуємо введене число
    let strNum = num.toString(); // Перетворюємо в рядок (аналог str() у Python)
    
    let maxDigit = Math.max(...strNum); // Знаходимо найбільшу цифру (аналог max())
    let count = strNum.split(maxDigit).length - 1; // Рахуємо кількість входжень (аналог count() у Python)
    
    document.getElementById("result").innerText = `Максимальна цифра: ${maxDigit}, Кількість: ${count}`;
}

function capitalizeWordsASCII(str) {
    return str.split(/\b/).map(word => {
        if (word.length > 0 && word.charCodeAt(0) >= 97 && word.charCodeAt(0) <= 122) { 
            return String.fromCharCode(word.charCodeAt(0) - 32) + word.slice(1);
        }
        return word;
    }).join('');
}

function processText() {
    let inputText = document.getElementById("textInput").value;
    let resultText = capitalizeWordsASCII(inputText);
    document.getElementById("result").textContent = resultText;
}

function updateCountdown() {
    let today = new Date();
    let birthday = new Date(2025, 9, 17); // твій день народження (20 березня 2025)

    // Різниця між датами в мілісекундах
    let timeDiff = birthday - today;

    // Якщо день народження вже минув
    if (timeDiff <= 0) {
      document.getElementById("countdown").textContent = "День народження";
      return;
    }

    // Перетворення мілісекунд в дні, години, хвилини, секунди
    let days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    // Виведення відліку
    document.getElementById(
      "countdown"
    ).textContent = `До дня народження залишилось: ${days} днів ${hours} годин ${minutes} хвилин ${seconds} секунд.`;
  }

  // Оновлюємо відлік кожну секунду
  setInterval(updateCountdown, 1000);

  function generatePassword() {
    length = Math.floor(Math.random() * (20 - 8 + 1)) + 8;
    let password = "";
    for (let i = 0; i < length; i++) {
        let charCode = Math.floor(Math.random() * (126 - 33 + 1)) + 33; // ASCII 33-126 (! до ~)
        password += String.fromCharCode(charCode);
    }
    document.getElementById("password").value = password;
}

function copyPassword() {
    let passwordField = document.getElementById("password");
    if (passwordField.value) {
        navigator.clipboard.writeText(passwordField.value);
    } else {
        alert("Пароль не було скопійовано");
    }
}