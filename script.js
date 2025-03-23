const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");
const message = document.getElementById("message");

let yesSize = 18;

noBtn.addEventListener("mouseover", () => {
    let x = Math.random() * (window.innerWidth - 100);
    let y = Math.random() * (window.innerHeight - 100);
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

noBtn.addEventListener("click", () => {
    yesSize *= 3;
    yesBtn.style.fontSize = yesSize + "px";
});

yesBtn.addEventListener("click", () => {
    message.textContent = "YOOOUPIII!!! 🎉😍";
});
