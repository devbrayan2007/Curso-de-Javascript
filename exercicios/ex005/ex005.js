var money = parseFloat(window.prompt("Seu dinheiro R$: "))

var fuel = parseFloat(money / 5)
var km = parseFloat(fuel * 20)

document.write(`Com R$ ${money}, você consegue comprar R$ ${fuel} de combustível e consegue andar ${km} km`)
