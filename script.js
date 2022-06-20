
let dimension = 6;

const container = document.querySelector('.container');
function makeGrid(dimension) {
    let gridWidth = ""
    for (let i = 0; i < dimension * dimension; i++) {
        const div = document.createElement('div');
        div.textContent = `${i}`;
        div.style.border = 'solid';
        div.classList.add('hoverbox')
        container.appendChild(div)
    }

    for (let i = 0; i < dimension; i++) {
        gridWidth += 'auto '
    }
    console.log(gridWidth)
    container.style.gridTemplateColumns = gridWidth;
}

makeGrid(dimension)


let box = document.querySelectorAll('.hoverbox');
for (let i = 0; i < dimension ** 2; i++) {
    box[i].addEventListener('mouseenter', () => {
        box[i].style.backgroundColor = 'green';
    });
};

let eraseButton = document.querySelector('#erase');
eraseButton.addEventListener('click', () => {
    for (let i = 0; i < dimension ** 2; i++) {
        box[i].style.backgroundColor = 'white';
    }
});

let changeGrid = document.querySelector('#change-grid');
changeGrid.addEventListener('click', () => {
    dimension = prompt("Enter a new dimension: ")
    //container.classList.remove('.hoverbox')
    makeGrid(dimension);

})


