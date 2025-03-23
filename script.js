const n1 = document.getElementById('n1');
const n2 = document.getElementById('n2');
const sortear = document.getElementById('sortear');

sortear.addEventListener('click', (event) => {
    const min = parseInt(n1.value);
    const max = parseInt(n2.value);
    const random = Math.floor(Math.random() * (max - min + 1)) + min;
    document.getElementById('res').innerText = random;
    event.preventDefault();
});
