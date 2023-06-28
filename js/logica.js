let clientes = [];
let carrito = [];
//mantenga esta estructura del arreglo productos
//el arreglo debe tener al menos 6 objetos los cual puede editar de acuerdo al rubro elegido
//el catalogo se debe dibujar a partir de los objetos de este arreglo
let productos = [
    { id: 1, nombre: "FOX", precio: 80000, stock: 20, url_foto: "img/bicicleta1.jpg", descripcion: "Aro 26, Naranja y Gris" },
    { id: 1, nombre: "FOX", precio: 90000, stock: 10, url_foto: "img/bicicleta2.jpg", descripcion: "Aro 26, Gris y Naranja" },
    { id: 1, nombre: "CUBE", precio: 90000, stock: 15, url_foto: "img/bicicleta3.jpg", descripcion: "Aro 28, Todoterreno" },
    { id: 1, nombre: "MAXXIS", precio: 70000, stock: 8, url_foto: "img/bicicleta4.jpg", descripcion: "Aro 28, Todoterreno" },
    { id: 1, nombre: "MAXXIS", precio: 95000, stock: 5, url_foto: "img/bicicleta5.jpg", descripcion: "Aro 26, Montaña" },
    { id: 1, nombre: "MAXXIS", precio: 80000, stock: 4, url_foto: "img/bicicleta6.jpg", descripcion: "Aro 27, Todoterreno" }
];
function dibujar_catalogo() {
    //leer el arreglo productos y dibujar dinamicamente los elementos del arreglo en el contenedor del catalogo
    for (let i = 0; i < productos.length; i++) {
        document.querySelector("#section").innerHTML +=
            `<article class="card col-md-3 p-md-2 m-md-2">
                <img src=${productos[i].url_foto} class="card-img-top" alt="bicicleta">
                    <div class="card-body">
                        <h5 class="card-title">Marca: ${productos[i].nombre}</h5>
                        <p class="card-text">Descripción: ${productos[i].descripcion}</p>
                        <p class="card-text">Valor: $${productos[i].precio}</p>
                        <p class="card-text">Stock: ${productos[i].stock} unidades</p>
                        <button onclick="agregar()" class="btn btn-primary">comprar</button>
                    </div>
            </article >`
    }
}
dibujar_catalogo();


//0 El precio de los productos estan en UF debe consultar el servicio web de la CMF y mostrar el precio en CLP
//1)cree una funcion constructora llamada Productos
//Los atributos de la funcion son: id, nombre, precio, stock, url_foto, descripcion
//2)Cree una funcion llamada agregar la cual debe recibir el id del producto para ser agregada al carrito
function agregar(id) {
    //dentro de la funcion debe recorrer el arreglo de productos validar si el producto esta en la lista, que posee stock y si es asi
    //crear una variable de tipo Producto, esta variable debe ser agregada a un arreglo llamado carrito.
    //el objeto dentro del carrito debe tener una propiedad llamada cantidad
    dibujar_carrito();
}
//Si el elemento que estamos intentando comprar ya esta en el arreglo carrito debemos incrementar su cantidad
//La cantidad siempre debe ser menor o igual a la cantidad de stock del producto, no se debe permitir agregar mas elementos que stock disponible
//3)Los elementos del arreglo carrito de deben dibujar en un contenedor carrito, se debe dibujar el carrito actualizado cada vez que alguien agrega algo al carro
function dibujar_carrito() {
    //Debe recuperar su contenedor del carrito con el estandar de ES6
    //Debe recorrer el arreglo y crear un html dinamico para poder mostrar en el carrito la cantidad de elementos, nombre del producto, su precio y su subtotal
    //Debe agregar 3 enlaces o botones por cada elemento en el carrito, uno para incrementar la cantidad, otro para disminuirla y el ultimo para eliminar el producto
    //cada vez que se precione un enlace el carrito se debe volver a dibujar
}
function aumentar_cantidad(id) {
    //edita el arreglo carrito para aumentar la cantidad del id indicado
    dibujar_carrito();
}
function disminuir_cantidad(id) {
    //edita el arreglo carrito para disminuir la cantidad del id indicado
    dibujar_carrito();
}
function eliminar(id) {
    //edita el arreglo carrito para eliminar el elemento del arreglo
    dibujar_carrito();
}
//////////PARTE 2//////////
//Cree un HTML que contenga un formulario de registro con al menos: correo, clave, confirmar clave
//al completar el formulario debe validar que las claves coincidan y que tengan al menos 8 caracteres(validadas por codigo javascript)
//Los campos no pueden estar vacios
//debe crear una funcion Constructora Clientes, al completar el formulario agregara un objeto de tipo Cliente al arreglo clientes.
function registrar() {
    //leer y validar datos de formulario
    //crear objeto Clientes
    //guardar en arreglo de clientes
    //guardar arreglo en localStorage
    localStorage.clientes = JSON.stringyfy(clientes);
}
//Cree un html en donde aparesca un formulario de login solicitando correo y contraseña
//la funcion login debe leer el arreglo clientes guardado en localStorage
//Si el correo y contraseña existen en el arreglo de clientes mostrara un alert con el mensaje ("Logueado") 
//Si el correo existe con otra clave mostrara en una alerta ("Contraseña incorrecta")
//Si No existe el correo en el arreglo mostrara en una alerta ("Usuario no existe favor registrese")
function login() {
    clientes = JSON.parse(localStorage.clientes);
    //validacion y generacion de mensajes
}