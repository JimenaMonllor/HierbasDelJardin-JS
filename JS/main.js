// PRODUCTOS
const productos = [
    // MATES
    {
        id: " mate-01",
        titulo: "Mate Rosa",
        imagen: "./img/mates/01.jpg",
        categoria: {
            nombre: "Mates",
            id: "mates"
        },
        precio: 3500
    },
    {
        id: "mate-02",
        titulo: "Mate Negro",
        imagen: "./img/mates/02.jpg",
        categoria: {
            nombre: "Mates",
            id: "mates"
        },
        precio: 3500
    },
    {
        id: "mate-03",
        titulo: "Mate Amarillo",
        imagen: "./img/mates/03.jpg",
        categoria: {
            nombre: "Mates",
            id: "mates"
        },
        precio: 3500
    },
    {
        id: "mate-04",
        titulo: "Mate Blanco",
        imagen: "./img/mates/04.jpg",
        categoria: {
            nombre: "Mates",
            id: "mates"
        },
        precio: 3500
    },

    // HIERBAS
    {
        id: "hierba-01",
        titulo: "Mix Amanecer",
        imagen: "./img/hierbas/01.jpg",
        categoria: {
            nombre: "Hierbas",
            id: "hierbas"
        },
        precio: 1500
    },
    {
        id: "hierba-02",
        titulo: "Mix Bienestar",
        imagen: "./img/hierbas/02.jpg",
        categoria: {
            nombre: "Hierbas",
            id: "hierbas"
        },
        precio: 1500
    },
    {
        id: "hierba-03",
        titulo: "Mix Brisa Lima",
        imagen: "./img/hierbas/03.jpg",
        categoria: {
            nombre: "Hierbas",
            id: "hierbas"
        },
        precio: 1500
    },
    {
        id: "hierba-04",
        titulo: "Mix Calma",
        imagen: "./img/hierbas/04.jpg",
        categoria: {
            nombre: "Hierbas",
            id: "hierbas"
        },
        precio: 1500
    },
    {
        id: "hierba-05",
        titulo: "Mix Choco Chai",
        imagen: "./img/hierbas/05.jpg",
        categoria: {
            nombre: "Hierbas",
            id: "hierbas"
        },
        precio: 1500
    },
    {
        id: "hierba-06",
        titulo: "Mix Coco Mate",
        imagen: "./img/hierbas/06.jpg",
        categoria: {
            nombre: "Hierbas",
            id: "hierbas"
        },
        precio: 1500
    },
    {
        id: "hierba-07",
        titulo: "Mix Expreso",
        imagen: "./img/hierbas/07.jpg",
        categoria: {
            nombre: "Hierbas",
            id: "hierbas"
        },
        precio: 1500
    },
    {
        id: "hierba-08",
        titulo: "Mix Florida",
        imagen: "./img/hierbas/08.jpg",
        categoria: {
            nombre: "Hierbas",
            id: "hierbas"
        },
        precio: 1500
    },
    {
        id: "hierba-09",
        titulo: "Mix Naranjo",
        imagen: "./img/hierbas/09.jpg",
        categoria: {
            nombre: "Hierbas",
            id: "hierbas"
        },
        precio: 1500
    },
    {
        id: "hierba-10",
        titulo: "Mix Tradicional",
        imagen: "./img/hierbas/10.jpg",
        categoria: {
            nombre: "Hierbas",
            id: "hierbas"
        },
        precio: 1500
    },
    // CONDIMENTOS
    {
        id: "Condimento-01",
        titulo: "Pimentón Ahumado",
        imagen: "./img/condimentos/01.jpg",
        categoria: {
            nombre: "Condimentos",
            id: "condimentos"
        },
        precio: 1000
    },
    {
        id: "Condimento-02",
        titulo: "Romero",
        imagen: "./img/condimentos/02.jpg",
        categoria: {
            nombre: "Condimentos",
            id: "condimentos"
        },
        precio: 1000
    },
    {
        id: "Condimento-03",
        titulo: "Ajo",
        imagen: "./img/condimentos/03.jpg",
        categoria: {
            nombre: "Condimentos",
            id: "condimentos"
        },
        precio: 1000
    },
    {
        id: "Condimento-04",
        titulo: "Caji Cayena",
        imagen: "./img/condimentos/04.jpg",
        categoria: {
            nombre: "Condimentos",
            id: "condimentos"
        },
        precio: 1000
    },
    {
        id: "Condimento-05",
        titulo: "Albahaca",
        imagen: "./img/condimentos/05.jpg",
        categoria: {
            nombre: "Condimentos",
            id: "condimentos"
        },
        precio: 1000
    },
    {
        id: "Condimento-06",
        titulo: "Comino",
        imagen: "./img/condimentos/06.jpg",
        categoria: {
            nombre: "Condimentos",
            id: "condimentos"
        },
        precio: 1000
    },
    {
        id: "Condimento-07",
        titulo: "Curry Suave",
        imagen: "./img/condimentos/07.jpg",
        categoria: {
            nombre: "Condimentos",
            id: "condimentos"
        },
        precio: 1000
    },
    {
        id: "Condimento-08",
        titulo: "Tomillo",
        imagen: "./img/condimentos/08.jpg",
        categoria: {
            nombre: "Condimentos",
            id: "condimentos"
        },
        precio: 1000
    },
    {
        id: "Condimento-09",
        titulo: "Laurel",
        imagen: "./img/condimentos/09.jpg",
        categoria: {
            nombre: "Condimentos",
            id: "condimentos"
        },
        precio: 1000
    },
    {
        id: "Condimento-10",
        titulo: "Pimienta",
        imagen: "./img/condimentos/10.jpg",
        categoria: {
            nombre: "Condimentos",
            id: "condimentos"
        },
        precio: 1000
    }
];


const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");


function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
            <div class="producto-data"> 
            
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">$${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
            </div>
        `;

        contenedorProductos.append(div);
    })

    actualizarBotonesAgregar();
}

cargarProductos(productos);

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos") {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }

    })
});

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();
} else {
    productosEnCarrito = [];
}

function agregarAlCarrito(e) {
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }

    actualizarNumerito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}