const container = document.querySelector('.container');
const colorSelector = document.querySelector('.colorSelector')

for (i = 0; i < 256; i++) {
    let div = document.createElement('div');
    container.appendChild(div);
    div.classList.add('squares');
}

const squares = document.querySelectorAll('.squares');

squares.forEach(function(item) {
    item.addEventListener('mouseover', e => e.target.style.backgroundColor = colorSelector.value) 
});