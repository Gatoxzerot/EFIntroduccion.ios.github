// Obtenemos referencia al botón y al elemento donde mostraremos el color
const colorButton = document.getElementById('color-button');
const colorDisplay = document.getElementById('color-display');

// Función para generar un color aleatorio en formato hexadecimal
function getRandomColor() {
    // Generamos tres componentes de color aleatorios (RGB)
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    
    // Convertimos a formato hexadecimal y lo devolvemos
    return '#' + r.toString(16).padStart(2, '0') +
                 g.toString(16).padStart(2, '0') +
                 b.toString(16).padStart(2, '0');
}

// Función para cambiar el color de fondo y mostrar el valor hexadecimal
function changeBackgroundColor() {
    const randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
    colorDisplay.textContent = randomColor;
}

// Escuchamos el evento click en el botón para cambiar el color
colorButton.addEventListener('click', changeBackgroundColor);
