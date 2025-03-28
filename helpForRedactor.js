function capitalizeWordsASCII(str) {
  return str
    .split(/\b/)
    .map((word) => {
      if (
        word.length > 0 &&
        word.charCodeAt(0) >= 97 &&
        word.charCodeAt(0) <= 122
      ) {
        return String.fromCharCode(word.charCodeAt(0) - 32) + word.slice(1);
      }
      return word;
    })
    .join("");
}

function processText() {
  let inputText = document.getElementById("textInput").value;
  let resultText = capitalizeWordsASCII(inputText);
  document.getElementById("resultText").textContent = resultText;
}
