const colorBtn = document.getElementById('colorBtn');
const rainbowBtn = document.getElementById('rainbowBtn');
const eraserBtn = document.getElementById('eraserBtn');
const clearBtn = document.getElementById('clearBtn');

const gridContainer = document.getElementById('gridContainer');

const gridRange = document.getElementById('gridRange');

function createGrid(gridSize = 32) {
    gridContainer.innerHTML = '';
    gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`

    for(let i = 0; i < gridSize**2; i++) {
        const gridPixel = document.createElement('div');
        gridContainer.appendChild(gridPixel);
    }
}

function onRangeClick() {
    const value = gridRange.value;
    return value;
}

gridRange.addEventListener('input', () => createGrid(onRangeClick()))