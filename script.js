const container = document.querySelector('.container');
const colorSelector = document.querySelector('.colorSelector');
const clearButton = document.querySelector('.clearButton');

for (i = 0; i < 256; i++) {
    let div = document.createElement('div');
    container.appendChild(div);
    div.classList.add('squares');
}

const squares = Array.from(document.querySelectorAll('.squares'));

squares.forEach(function(item) {
    item.addEventListener('mouseover', e => e.target.style.backgroundColor = colorSelector.value) 
});

clearButton.addEventListener('click', () => {
    const newGridSide = prompt("Introduce the number of squares per side for the new grid. WARNING: You can't try more than 100 squares per side.");
    if (newGridSide > 100) {
        alert('You cannot try more than 100 squares per side');
    } else {
        while (container.firstChild) {
            container.removeChild(container.lastChild);
        }
        const newGridArea = newGridSide*newGridSide;
        if (newGridArea > 256) {
            let gridResidue = newGridArea-256;
            for (i = 0; i < gridResidue; i++) {
                let div = document.createElement('div');
                div.classList.add('squares');
                squares.push(div)
            }
            squares.forEach(function(item) {
                item.addEventListener('mouseover', e => e.target.style.backgroundColor = colorSelector.value) 
            });
        }
        container.style.gridTemplateColumns = `repeat(${newGridSide}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${newGridSide}, 1fr)`;
        squares.forEach((element) => element.style.height = `${600/newGridSide}px}`);
        squares.forEach((element) => element.style.width = `${600/newGridSide}px}`);
        squares.forEach((element) => element.style.backgroundColor = '#FFFFFF');
        for (let i = 0; i < newGridArea; i++) {
            let div = squares[i];
            div.classList.remove('squares');
            container.appendChild(div);
        }
    }
});