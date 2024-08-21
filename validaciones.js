// Validación de sitio

/* $(document).ready(function (){
    alert("Sitio Listo!");
}); */


const div = document.querySelector("div_card");

const requestURL = "http://127.0.0.1:5500/assets/json/productos.json";

const request = new XMLHttpRequest();

request.open("GET", requestURL);

request.responseType = "json";
request.send();

request.onload = function () {
    const productos = request.response;
    productos_item(productos);
};

function productos_item(jsonObj) {
    const prod = jsonObj["$productos_array"];

    for (var i=0; i<prod.length; i++){
        const myProducto = document.createElement("article");
        const myImg = document.createElement("img");
        const myH4 = document.createElement("h4");
        const myDescripcion = document.createElement("p");
        const myPrecio = document.createElement("p");

        myImg.src = prod[i].imagen_producto;
        myH4.textContent = prod[i].nombre_producto;
        myDescripcion.textContent = prod[i].descripcion_producto;
        myPrecio.textContent = prod[i].precio_producto;
    

        myProducto.appendChild(myImg);
        myProducto.appendChild(myH4);
        myProducto.appendChild(myDescripcion);
        myProducto.appendChild(myPrecio);

        div.appendChild(myProducto);

        /* var currentDiv = document.getElementById("div"[i]);
        document.body.insertBefore(div, currentDiv); */
    }

};


$("form#contacto").on("submit", function(){
    var nombre = $.trim($("#nombre") .val());
    var email = $.trim($("#email") .val());
    var mensaje = $.trim($("#mensaje") .val());
    var error = [];

    if (nombre == ""){
        error.push("Por favor, complete el nombre");
    }

    if (email == ""){
        error.push("Por favor, complete el email");
    }

    if (mensaje == ""){
        error.push("Por favor, complete el mensaje");
    }

    if (error.length > 0){
        alert(error.join("\n"));
        return false;
    }
    return true;
});


$(document).addEventListener("DOMContentLoaded", function(){
    let formulario = document.getElementById("contacto");
    formulario.addEventListener("submit", function() {
        formulario.reset()
    });
});



