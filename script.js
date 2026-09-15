const typingText = "I THINK I LIKE YOU";
const typingElement = document.getElementById("typing");
const background = document.getElementById("background");
const yesButton = document.getElementById("yesBtn");
const thinkButton = document.getElementById("thinkBtn");
const response = document.getElementById("response");
const heartSymbols = ["❤️", "💖", "💕", "💗", "✨", "🌸", "💫", "🌷", "⭐"];

let index = 0;

function typeText() {
    if (index >= typingText.length) return;
    typingElement.textContent += typingText.charAt(index);
    index += 1;
    window.setTimeout(typeText, 65);
}

function addHeart(symbol = heartSymbols[Math.floor(Math.random() * heartSymbols.length)], celebration = false) {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.textContent = symbol;
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.fontSize = celebration ? "30px" : `${15 + Math.random() * 25}px`;
    heart.style.animationDuration = celebration ? "4s" : `${6 + Math.random() * 8}s`;
    heart.style.animationDelay = celebration ? "0s" : `${Math.random() * 8}s`;
    background.appendChild(heart);
    heart.addEventListener("animationend", () => heart.remove(), { once: true });
}

function showResponse(message) {
    response.innerHTML = message;
    response.style.display = "block";
}

function celebrate() {
    for (let count = 0; count < 20; count += 1) {
        window.setTimeout(() => addHeart("💖", true), count * 70);
    }
}

for (let count = 0; count < 50; count += 1) addHeart();

typeText();

yesButton.addEventListener("click", () => {
    showResponse("Yaaaay! 🥹💖<br>You made this moment unforgettable! ✨<br>Thank you for being honest with your feelings.");
    celebrate();
});

thinkButton.addEventListener("click", () => {
    showResponse("Take your time 😊🌸<br>No pressure at all. Your feelings matter. ❤️");
});
