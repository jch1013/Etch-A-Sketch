
let dimension = 8;

function makeGrid(dimension) {
    const container = document.querySelector('.container');
    let gridWidth = ""
    for (let i = 0; i < dimension * dimension; i++) {
        const div = document.createElement('div');
        div.textContent = `${i}`;
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
console.log(box[0])

for (let i = 0; i < dimension ** 2; i++) {
    box[i].addEventListener('mouseenter', () => {
        box[i].style.backgroundColor = 'green';
    })
}


