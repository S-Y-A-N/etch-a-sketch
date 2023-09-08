// DOM Variables

const colorSelector = document.getElementById('colorSelector');

const colorBtn = document.getElementById('colorBtn');
const rainbowBtn = document.getElementById('rainbowBtn');
const eraserBtn = document.getElementById('eraserBtn');
const clearBtn = document.getElementById('clearBtn');

const gridRange = document.getElementById('gridRange');

const gridContainer = document.getElementById('gridContainer');
let gridPixels;

// Functions

function activeButton(e) {
    switch(e.target.id) {
        case 'colorBtn':
            colorBtn.classList.add('active');
            rainbowBtn.classList.remove('active');
            eraserBtn.classList.remove('active');
            break;
        case 'rainbowBtn':
            rainbowBtn.classList.add('active');
            colorBtn.classList.remove('active');
            eraserBtn.classList.remove('active');
            break;
        case 'eraserBtn':
            eraserBtn.classList.add('active');
            colorBtn.classList.remove('active');
            rainbowBtn.classList.remove('active');
            break;
    }
}

function createGrid(gridSize = 32) {
    gridContainer.innerHTML = '';
    gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;

    for(let i = 0; i < gridSize**2; i++) {
        const gridPixel = document.createElement('div');
        gridContainer.appendChild(gridPixel);
    }
    gridPixels = document.querySelectorAll('#gridContainer div');
}

function colorGrid(e) {
    if(colorBtn.classList.contains('active')) {
        let pixel = e.toElement;
        let color = colorSelector.value;
        pixel.style.backgroundColor = color;
    }
}

function rainbowGrid(e) {
    if(rainbowBtn.classList.contains('active')) {
        let R = Math.floor(Math.random() * 256);
        let G = Math.floor(Math.random() * 256);
        let B = Math.floor(Math.random() * 256);

        let pixel = e.toElement;
        let color = `rgb(${R}, ${G}, ${B}, 20%)`
        pixel.style.backgroundColor = color;
    }
}

function eraseGrid(e) {
    if(eraserBtn.classList.contains('active')) {
        let pixel = e.toElement;
        pixel.style.backgroundColor = '';
    }
}

function clearGrid() {
    gridPixels.forEach(pixel => {
        pixel.style.backgroundColor = '';
    });
}

// Event Listeners

window.addEventListener('load', () => {
    createGrid(gridRange.value);
    colorBtn.classList.add('active');
});

colorBtn.addEventListener('click', activeButton);
rainbowBtn.addEventListener('click', activeButton);
eraserBtn.addEventListener('click', activeButton);
clearBtn.addEventListener('click', clearGrid);

gridRange.addEventListener('input', () => createGrid(gridRange.value));

gridContainer.addEventListener('mousedown', colorGrid);
gridContainer.addEventListener('mousedown', rainbowGrid);
gridContainer.addEventListener('mousedown', eraseGrid);