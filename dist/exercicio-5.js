"use strict";
//Devido à existência de outra classe Pedido no exercício 1, declarei este como "Pedido1"
class Pedido1 {
    constructor() {
        this.itens = [];
    }
    add(item) {
        this.itens.push(item);
    }
    recuperarValorTotal() {
        let total = this.itens
            .map((i) => i.recuperarValorTotal())
            .reduce((sum, v) => sum + v, 0);
        return total;
    }
    aplicarDescontoEmPorcentagem(desconto) {
        const porcentagem = desconto / 100;
        const total = this.recuperarValorTotal();
        const descontoEmReais = total * porcentagem;
        this.itens.forEach(item => item.aplicarDescontoEmReais(descontoEmReais / this.itens.length));
    }
    aplicarDescontoEmReais(desconto) {
        this.itens.forEach(item => item.aplicarDescontoEmReais(desconto));
    }
    removeItem(item) {
        const index = this.itens.findIndex((i) => i.nome === item);
        if (index > -1) {
            this.itens.splice(index, 1);
        }
    }
}
class ItemPedido {
    constructor(valor, nome, quantidade) {
        this.valor = valor;
        this.nome = nome;
        this.quantidade = quantidade;
    }
    recuperarValorTotal() {
        return this.valor * this.quantidade;
    }
    aplicarDescontoEmPorcentagem(desconto) {
        const porcentagem = desconto / 100;
        this.valor -= this.valor * porcentagem;
    }
    aplicarDescontoEmReais(desconto) {
        this.valor -= desconto;
    }
    removeItem(item) {
        throw new Error('Método não suportado em ItemPedido');
    }
}
const pedido1 = new Pedido1();
pedido1.add(new ItemPedido(100, "Produto 1", 1));
console.log("Valor total antes do desconto:", pedido1.recuperarValorTotal());
pedido1.aplicarDescontoEmPorcentagem(10);
console.log("Valor total após desconto:", pedido1.recuperarValorTotal());
pedido1.itens.forEach(item => {
    console.log(`Item: ${item.nome}, Valor: ${item.valor}`);
});
