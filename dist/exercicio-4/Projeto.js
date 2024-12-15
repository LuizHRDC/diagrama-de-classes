"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Projeto = void 0;
class Projeto {
    constructor(tipo, nome, nivel, custo, gerente) {
        if (custo <= 0) {
            throw new Error("O custo nao pode ser menor ou igual a zero.");
        }
        this.tipo = tipo;
        this.nome = nome;
        this.nivel = nivel;
        this.custo = custo;
        this.gerente = gerente;
    }
    getTipo() {
        return this.tipo;
    }
    getNome() {
        return this.nome;
    }
    getNivel() {
        return this.nivel;
    }
    getCusto() {
        return this.custo;
    }
    getGerente() {
        return this.gerente;
    }
    toString() {
        return `Projeto: ${this.nome} - ${this.nivel}\nCusto: ${this.custo}\nGerente: ${this.gerente.getNome()}\nTipo: ${this.tipo}`;
    }
}
exports.Projeto = Projeto;
