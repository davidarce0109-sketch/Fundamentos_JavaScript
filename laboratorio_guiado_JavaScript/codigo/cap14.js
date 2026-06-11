let formulario =
document.querySelector("#formulario");

formulario.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();

        console.log("Formulario enviado");
    }
);

let nombre =
document.querySelector("#nombre");

formulario.addEventListener(
    "submit",
    function(event){

        event.preventDefault();

        console.log(nombre.value);

    }
);