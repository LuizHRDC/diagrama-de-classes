"use strict";
class Circulo {
    constructor(raio) {
        if (raio <= 0) {
            throw new Error("O raio deve ser maior que zero.");
        }
        this.raio = raio;
    }
    desenhar() {
        console.log(`Desenho de círculo com raio ${this.raio}`);
    }
    redimensionar(fator = 1.5) {
        this.raio *= fator;
        console.log(`O círculo foi redimensionado e seu novo raio é ${this.raio}`);
    }
}
class Retangulo {
    constructor(comprimento, altura) {
        if (comprimento <= 0 || altura <= 0) {
            throw new Error("O valor do comprimento e da altura devem ser maiores que zero!");
        }
        this.comprimento = comprimento;
        this.altura = altura;
    }
    desenhar() {
        console.log(`Desenho de retângulo de comprimento ${this.comprimento} e de altura ${this.altura}`);
    }
    redimensionar(fator = 4) {
        this.comprimento *= fator;
        this.altura *= fator;
        console.log(`Retângulo redimensionado com seu novo comprimento de ${this.comprimento} e sua nova altura de ${this.altura}`);
    }
}
const circulo1 = new Circulo(7.5);
const circulo2 = new Circulo(15.0);
const retangulo1 = new Retangulo(12.0, 6.0);
const retangulo2 = new Retangulo(5.0, 2.5);
console.log("\nCírculo 1:");
circulo1.desenhar();
circulo1.redimensionar(2);
circulo1.desenhar();
console.log("\nCírculo 2:");
circulo1.desenhar();
circulo1.redimensionar();
circulo1.desenhar();
console.log("\nRetângulo 1:");
retangulo1.desenhar();
retangulo1.redimensionar();
retangulo1.desenhar();
console.log("\nRetângulo 2:");
retangulo2.desenhar();
retangulo2.redimensionar(2);
retangulo2.desenhar();
