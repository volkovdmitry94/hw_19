const widthInput = document.getElementById('input_width');
const heightInput = document.getElementById('input_height');
const radiusInput = document.getElementById('input_radius');
const marginBottomInput = document.getElementById('input_margin');
const colorInput = document.getElementById('input_color');
const countInput = document.getElementById('input_count');

const elemToAdd = document.getElementById('playground');

document.getElementById('btn_show').addEventListener('click', () => {
    for (let i = 0; i < countInput.value; i++) {
        const newDiv = document.createElement('div');
        newDiv.style.width = `${widthInput.value}px`;
        newDiv.style.height = `${heightInput.value}px`;
        newDiv.style.borderRadius = `${radiusInput.value}px`;
        newDiv.style.marginBottom = `${marginBottomInput.value}px`;
        newDiv.style.backgroundColor = `${colorInput.value}`;
        elemToAdd.appendChild(newDiv);
    }
});