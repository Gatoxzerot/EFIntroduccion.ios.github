// Arreglo de objetos con detalles de cada departamento
const departamentos = [
    {
        imagen: "imagenes/departamento1.webp",
        empresa: "Inmobiliaria ABC",
        precio: "$200,000",
        areas: "100 m²"
    },
    {
        imagen: "imagenes/departamento2.jpg",
        empresa: "Inmobiliaria XYZ",
        precio: "$300,000",
        areas: "150 m²"
    },
    {
        imagen: "imagenes/departamento3.jpg",
        empresa: "Inmobiliaria QRS",
        precio: "$180,000",
        areas: "90 m²"
    },
    {
        imagen: "imagenes/departamento4.jpg",
        empresa: "Inmobiliaria DEF",
        precio: "$220,000",
        areas: "110 m²"
    },
    {
        imagen: "imagenes/departamento5.webp",
        empresa: "Inmobiliaria GHI",
        precio: "$280,000",
        areas: "130 m²"
    },
    {
        imagen: "imagenes/departamento6.jpg",
        empresa: "Inmobiliaria JKL",
        precio: "$240,000",
        areas: "120 m²"
    },
    {
        imagen: "imagenes/departamento7.webp",
        empresa: "Inmobiliaria MNO",
        precio: "$260,000",
        areas: "125 m²"
    },
    {
        imagen: "imagenes/departamento8.jpg",
        empresa: "Inmobiliaria STU",
        precio: "$310,000",
        areas: "155 m²"
    },
    {
        imagen: "imagenes/departamento9.jpg",
        empresa: "Inmobiliaria VWX",
        precio: "$195,000",
        areas: "95 m²"
    },
    {
        imagen: "imagenes/departamento10.avif",
        empresa: "Inmobiliaria YZ",
        precio: "$270,000",
        areas: "535 m²"
    }
];

let currentIndex = 0; // Índice actual de la imagen mostrada

// Función para mostrar la imagen actual y actualizar detalles
function showImage() {
    const imgElement = document.getElementById('image');
    const empresaElement = document.getElementById('empresa');
    const precioElement = document.getElementById('precio');
    const areasElement = document.getElementById('areas');

    imgElement.src = departamentos[currentIndex].imagen;
    empresaElement.textContent = `Empresa: ${departamentos[currentIndex].empresa}`;
    precioElement.textContent = `Precio: ${departamentos[currentIndex].precio}`;
    areasElement.textContent = `Área: ${departamentos[currentIndex].areas}`;
}

// Event listener para el botón Siguiente
document.getElementById('nextBtn').addEventListener('click', function() {
    currentIndex++;
    if (currentIndex >= departamentos.length) {
        currentIndex = 0; // Volver al inicio del arreglo cuando llega al final
        document.getElementById('message').innerText = "Has llegado al final de las imágenes.";
    }
    showImage();
});

// Event listener para el botón Anterior
document.getElementById('prevBtn').addEventListener('click', function() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = departamentos.length - 1; // Ir al final del arreglo cuando está en el inicio
        document.getElementById('message').innerText = "Has llegado al inicio de las imágenes.";
    }
    showImage();
});

// Mostrar la primera imagen al cargar la página
showImage();
