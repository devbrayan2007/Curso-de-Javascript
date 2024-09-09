var fahrenheit = window.prompt("Informe a temperatura em °F: ")
fahrenheit = parseFloat(fahrenheit)

var celsius = 5 * (fahrenheit - 32) / 9

document.write("Temperatura em ºC: ", celsius)