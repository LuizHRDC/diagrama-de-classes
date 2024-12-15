"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjetoAplicativo = void 0;
const Projeto_1 = require("./Projeto");
class ProjetoAplicativo extends Projeto_1.Projeto {
    constructor(tipo, nome, nivel, custo, gerente, plataforma, tamanho) {
        super(tipo, nome, nivel, custo, gerente);
        if (plataforma.toLowerCase() !== "android" && plataforma.toLowerCase() !== "ios") {
            throw new Error("A plataforma deve ser 'Android' ou 'iOS'.");
        }
        this.plataforma = plataforma;
        if (tamanho <= 0) {
            throw new Error("O tamanho deve ser maior que zero.");
        }
        this.tamanho = tamanho;
    }
    getPlataforma() {
        return this.plataforma;
    }
    setPlataforma(plataforma) {
        if (plataforma.toLowerCase() !== "android" && plataforma.toLowerCase() !== "ios") {
            throw new Error("A plataforma deve ser 'Android' ou 'iOS'.");
        }
        this.plataforma = plataforma;
    }
    getTamanho() {
        return this.tamanho;
    }
    setTamanho(tamanho) {
        if (tamanho <= 0) {
            throw new Error("O tamanho deve ser maior que zero.");
        }
        this.tamanho = tamanho;
    }
    toString() {
        return `${super.toString()}\nPlataforma: ${this.plataforma}\nTamanho: ${this.tamanho} kB`;
    }
}
exports.ProjetoAplicativo = ProjetoAplicativo;
