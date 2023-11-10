let text = "这是一个走字效果的示例。";
let index = 0;
let displayElement = document.getElementById("textDisplay");

function displayText() {
    if (index < text.length) {
        displayElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(displayText, 100);  // 每100毫秒显示一个字符
    }
}

displayText();
