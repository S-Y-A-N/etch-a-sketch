// DOM Constants

const colorSelector = document.getElementById('colorSelector');
const rainbowBtn = document.getElementById('rainbowBtn');
const eraserBtn = document.getElementById('eraserBtn');
const clearBtn = document.getElementById('clearBtn');
const gridRange = document.getElementById('gridRange');

const gridContainer = document.getElementById('gridContainer');

// Functions

function createGrid(gridSize = 32) {
    gridContainer.innerHTML = '';
    gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`

    for(let i = 0; i < gridSize**2; i++) {
        const gridPixel = document.createElement('div');
        gridContainer.appendChild(gridPixel);
    }
}

// Event Listeners

window.addEventListener('load', () => createGrid(gridRange.value));
gridRange.addEventListener('input', () => createGrid(gridRange.value));