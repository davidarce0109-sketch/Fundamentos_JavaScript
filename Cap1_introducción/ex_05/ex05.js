let a, b;
let c, d;
let suma, resta, multiplicacion, division, residuo, potencia;

a = parseInt(prompt("ingresa el primer numero: "));
b = parseFloat(prompt("ingresa el segundo numero: "));

//resultade de operaciones
suma = a + b;
resta = a - b;
multiplicacion = a * b;
division = a / b;
residuo = a % b;
potencia = a ** b;

// imprimir resultados
document.write("La suma es: ", suma, "<br>");
document.write("La resta es: ", resta, "<br>");
document.write("La multiplicacion es: ", multiplicacion, "<br>");
document.write("La division es: ", division, "<br>");
document.write("La residuo es: ", residuo, "<br>");
document.write("La potencia es: ", potencia, "<br>");
