const messages = [
    "Are you sure?",
    "Really sure??",
    "Are you positive?",
    "Don't lie...",
    "Just think about it!",
    "Yeah I forgot you can't able to think",
    "Ok fine, I accept that you not mentally retarded...",
    "Just kidding, Accept the truth and move on"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 2}px`;
}

function handleYesClick() {
    window.location.href = "yesPage.html";
}