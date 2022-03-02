const container = document.querySelector('.container');

for (i = 0; i < 256; i++) {
    let div = document.createElement('div');
    container.appendChild(div);
    div.classList.add('squares');
}