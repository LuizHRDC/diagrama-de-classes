"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.incluirProjeto = incluirProjeto;
exports.pesquisarProjeto = pesquisarProjeto;
exports.removerProjeto = removerProjeto;
exports.listarProjetos = listarProjetos;
const Gerente_1 = require("./Gerente");
const ProjetoWeb_1 = require("./ProjetoWeb");
const ProjetoAplicativo_1 = require("./ProjetoAplicativo");
const projetos = [];
function incluirProjeto(tipo, nome, nivel, custo, nomeGerente, detalhes) {
    const gerente = new Gerente_1.Gerente(nomeGerente);
    if (!nome || !nivel || !nomeGerente || custo <= 0) {
        throw new Error("Todos os campos obrigatórios devem ser preenchidos corretamente.");
    }
    if (tipo === "Web") {
        const { linguagem, bd } = detalhes;
        projetos.push(new ProjetoWeb_1.ProjetoWeb(tipo, nome, nivel, custo, gerente, linguagem, bd));
    }
    else if (tipo === "Aplicativo") {
        const { plataforma, tamanho } = detalhes;
        projetos.push(new ProjetoAplicativo_1.ProjetoAplicativo(tipo, nome, nivel, custo, gerente, plataforma, tamanho));
    }
    else {
        throw new Error("Tipo de projeto invalido.");
    }
    console.log("Projeto incluido com sucesso!");
}
function pesquisarProjeto(nome) {
    return projetos.find(p => p.getNome().toLowerCase() === nome.toLowerCase());
}
function removerProjeto(nome) {
    const index = projetos.findIndex(p => p.getNome().toLowerCase() === nome.toLowerCase());
    if (index !== -1) {
        projetos.splice(index, 1);
        console.log("\nProjeto removido com sucesso!");
    }
    else {
        throw new Error("Projeto nao encontrado.");
    }
}
function listarProjetos() {
    console.log("\n=== Lista de Projetos ===");
    projetos.forEach(projeto => console.log("\n" + projeto.toString()));
}
incluirProjeto("Web", "Sistema E-commerce", "Estratégico", 50000, "Luiz", { linguagem: "JavaScript", bd: "MongoDB" });
incluirProjeto("Aplicativo", "App Delivery", "Operacional", 30000, "Maria", { plataforma: "Android", tamanho: 15000 });
listarProjetos();
const resultado = pesquisarProjeto("Sistema E-commerce");
if (resultado) {
    console.log("\nProjeto encontrado:");
    console.log(resultado.toString());
}
else {
    console.log("Projeto não encontrado.");
}
removerProjeto("App Delivery");
listarProjetos();
