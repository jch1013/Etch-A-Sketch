
let dimension = 6;

const container = document.querySelector('.container');
function makeGrid(dimension=5) {
    let gridWidth = "";
    for (let i = 0; i < dimension * dimension; i++) {
        const div = document.createElement('div');
        div.style.border = 'solid';
        div.classList.add('hoverbox');
        div.setAttribute('id', 'hoverbox');
        container.appendChild(div);
    }

    for (let i = 0; i < dimension; i++) {
        gridWidth += 'auto ';
    }
    console.log(gridWidth);
    container.style.gridTemplateColumns = gridWidth;
}


makeGrid(dimension);
eventListen(dimension);

function eventListen(dimension) {
    let box = document.querySelectorAll('.hoverbox');
    for (let i = 0; i < dimension ** 2; i++) {
        box[i].addEventListener('mouseenter', () => {
            box[i].style.backgroundColor = 'green';
    });
};
}


let eraseButton = document.querySelector('#erase');
eraseButton.addEventListener('click', () => {
    for (let i = 0; i < dimension ** 2; i++) {
        box[i].style.backgroundColor = 'white';
    }
});

let changeGrid = document.querySelector('#change-grid');
changeGrid.addEventListener('click', () => {
    const content = document.getElementById('containerID')
    while (content.firstChild) {
        content.removeChild(content.lastChild);
    }
    dimension = prompt("Enter a new dimension: ");
    makeGrid(dimension);
    eventListen(dimension);

})



