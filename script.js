const container = document.querySelector('.container');
const colorSelector = document.querySelector('.colorSelector');
const clearButton = document.querySelector('.clearButton');
const html = document.querySelector('html');
const rainbowButton = document.querySelector('.rainbowButton');

for (i = 0; i < 256; i++) {
    let div = document.createElement('div');
    container.appendChild(div);
    div.classList.add('squares');
}

const squares = Array.from(document.querySelectorAll('.squares'));
let isDrawing = false;

html.addEventListener('mouseup', () => isDrawing = false);
html.addEventListener('mousedown', () => isDrawing = true);

function addDrawFunctionality() {
    squares.forEach(function(item) {
        item.addEventListener('mousedown', e => {
            e.target.style.backgroundColor = colorSelector.value
            isDrawing = true
        }); 
    });

    squares.forEach(function(item) {
        item.addEventListener('mouseup', e => isDrawing = false);
    });

    squares.forEach(function(item) {
        item.addEventListener('mouseover', e => {
            if (isDrawing) e.target.style.backgroundColor = colorSelector.value;
        }); 
    });

}

addDrawFunctionality();

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
            addDrawFunctionality();
        }
        container.style.gridTemplateColumns = `repeat(${newGridSide}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${newGridSide}, 1fr)`;
        squares.forEach((element) => element.style.height = `${600/newGridSide}px}`);
        squares.forEach((element) => element.style.width = `${600/newGridSide}px}`);
        squares.forEach((element) => element.style.backgroundColor = '#FFFFFF');
        for (let i = 0; i < newGridArea; i++) {
            let div = squares[i];
            div.classList.remove('squares');
            div.style.userSelect = 'none';
            div.style.mozUserSelect = 'none';
            div.style.webkitUserDrag = 'none';
            div.style.webkitUserSelect = 'none';
            div.style.msUserSelect = 'none';
            container.appendChild(div);
        }
    }
});

let rainbowIsActive = false;
let rainbowAnimation;

rainbowButton.addEventListener('click', (e) => {
    if (rainbowIsActive === false) {
        rainbowIsActive = true;
        squares.forEach(function(item) {
            item.addEventListener('mousedown', e => {
                let randomColor = Math.floor(Math.random()*16777215).toString(16);
                e.target.style.backgroundColor = '#' + randomColor;
                isDrawing = true;
            }); 
        });

        squares.forEach(function(item) {
            item.addEventListener('mouseover', e => {
                let randomColor = Math.floor(Math.random()*16777215).toString(16);
                if (isDrawing) e.target.style.backgroundColor = '#' + randomColor;
            }); 
        });
        e.target.style.backgroundColor = 'black';
        rainbowAnimation = setInterval(() => {
            let randomColor = Math.floor(Math.random()*16777215).toString(16);
            rainbowButton.style.backgroundColor = '#' + randomColor;
        }, 100);
    } else {
        rainbowIsActive = false;
        addDrawFunctionality();
        clearInterval(rainbowAnimation);
        rainbowButton.style.backgroundColor = 'black';
    }
})