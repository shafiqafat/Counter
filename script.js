let counter = 0;

const counterDisplay = document.getElementById('counter');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const resetBtn = document.getElementById('reset');

increaseBtn.addEventListener('click', () => {
    counter++;
    updateCounter();
    changeColor('green');
});

decreaseBtn.addEventListener('click', () => {
    counter--;
    updateCounter();
    changeColor('red');
});

resetBtn.addEventListener('click', () => {
    counter = 0;
    updateCounter();
    changeColor('black');
});

function updateCounter() {
    counterDisplay.textContent = counter;
}

function changeColor(color) {
    counterDisplay.style.color = color;
}
