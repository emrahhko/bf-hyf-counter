let counter = 0

const display = document.getElementById('counter');

const increment = document.getElementById('increment');

const reset = document.getElementById('reset');

const decrement = document.getElementById('decrement');

const incrementHandler = () => {
    counter = counter +1;
    document.getElementById('counter').innerText = counter;
    console.log('augmenter');
}

const decrementHandler = () => {
    counter = counter -1;
    document.getElementById('counter').innerText = counter;
    console.log('diminuer');
}

const resetHandler = () => {
    counter = 0;
    document.getElementById('counter').innerText = counter;
    console.log('remise a 0');
}

document.getElementById('increment').addEventListener('click', incrementHandler);
document.getElementById('decrement').addEventListener('click', decrementHandler);
document.getElementById('reset').addEventListener('click', resetHandler);