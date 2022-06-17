
let dimension = 2;

function makeGrid(dimension) {
    const container = document.querySelector('.container');
    for (let i = 0; i < dimension * dimension; i++) {
        const div = document.createElement('div');
        div.textContent = `${i}`;
        container.appendChild(div)
        console.log(i)
    }
}

makeGrid(dimension)