var num1 = window.prompt("Primeiro número: ")
num1 = parseInt(num1)
var num2 = window.prompt("Segundo número: ")
num2 = parseInt(num2)

var soma = num1 + num2
var subtracao = num1 - num2
var multiplicacao = num1 * num2
var divisao = num1 / num2


document.write("Soma: ", soma)
document.write("<hr>")
document.write("Subtração: ", subtracao)
document.write("<hr>")
document.write("Multiplicação: ", multiplicacao)
document.write("<hr>")
document.write("Divisão: ", divisao)
document.write("<hr>")
document.write("Exponenciação: ", Math.pow(num1, num2))
