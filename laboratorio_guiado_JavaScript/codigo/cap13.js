let boton = document.querySelector("#btn");

boton.addEventListener("click", function() {
    console.log("click detectado");
});

boton.addEventListener("mouseover", function() {
    console.log("Mouse encima");
});

let input = document.querySelector("#nombre");

input.addEventListener("input", function() {
    console.log(input.value);
})