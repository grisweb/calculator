let expression = document.getElementById('input');

document.querySelectorAll('.keyboard__btn').forEach(function (button) {
    button.addEventListener('click', onButtonClick);
});

function onButtonClick(e) {
    e.preventDefault();
    if (e.target.innerHTML === 'C') {
        expression.value = '';
    } else if (e.target.innerHTML === '=') {
        expression.value = eval(expression.value);
    } else {
        expression.innerHTML += e.target.innerHTML;
        expression.value += e.target.innerHTML;
    }
}