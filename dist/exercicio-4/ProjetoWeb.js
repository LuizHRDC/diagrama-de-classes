"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjetoWeb = void 0;
const Projeto_1 = require("./Projeto");
class ProjetoWeb extends Projeto_1.Projeto {
    constructor(tipo, nome, nivel, custo, gerente, linguagem, bd) {
        super(tipo, nome, nivel, custo, gerente);
        this.linguagem = linguagem;
        this.bd = bd;
    }
    getLinguagem() {
        return this.linguagem;
    }
    setLinguagem(linguagem) {
        this.linguagem = linguagem;
    }
    getBd() {
        return this.bd;
    }
    setBd(bd) {
        this.bd = bd;
    }
    toString() {
        return `${super.toString()}\nLinguagem: ${this.linguagem}\nBanco de Dados: ${this.bd}`;
    }
}
exports.ProjetoWeb = ProjetoWeb;
