import { Gerente } from "./Gerente"
import { Projeto } from "./Projeto"
import { ProjetoWeb } from "./ProjetoWeb"
import { ProjetoAplicativo } from "./ProjetoAplicativo"

const projetos: Projeto[] = []

export function incluirProjeto(tipo: string, nome: string, nivel: string, custo: number, nomeGerente: string, detalhes: any): void {
    const gerente = new Gerente(nomeGerente)

    if (!nome || !nivel || !nomeGerente || custo <= 0) {
        throw new Error("Todos os campos obrigatórios devem ser preenchidos corretamente.");
    }    
    if (tipo === "Web") {
        const { linguagem, bd } = detalhes
        projetos.push(new ProjetoWeb(tipo, nome, nivel, custo, gerente, linguagem, bd))
    } else if (tipo === "Aplicativo") {
        const { plataforma, tamanho } = detalhes
        projetos.push(new ProjetoAplicativo(tipo, nome, nivel, custo, gerente, plataforma, tamanho))
    } else {
        throw new Error("Tipo de projeto invalido.")
    }

    console.log("Projeto incluído com sucesso!")
}

export function pesquisarProjeto(nome: string): Projeto | undefined {
    return projetos.find(p => p.getNome().toLowerCase() === nome.toLowerCase())
}

export function removerProjeto(nome: string): void {
    const index = projetos.findIndex(p => p.getNome().toLowerCase() === nome.toLowerCase())

    if (index !== -1) {
        projetos.splice(index, 1)
        console.log("\nProjeto removido com sucesso!")
    } else {
        throw new Error("Projeto nao encontrado.")
    }
}

export function listarProjetos(): void {
    console.log("\n=== Lista de Projetos ===")
    projetos.forEach(projeto => console.log("\n"+projeto.toString()))
}

incluirProjeto("Web", "Sistema E-commerce", "Estratégico", 50000, "Luiz", { linguagem: "JavaScript", bd: "MongoDB" })
incluirProjeto("Aplicativo", "App Delivery", "Operacional", 30000, "Maria", { plataforma: "Android", tamanho: 15000 })

listarProjetos()

const resultado = pesquisarProjeto("Sistema E-commerce")

if (resultado) {
    console.log("\nProjeto encontrado:")
    console.log(resultado.toString())
} else {
    console.log("Projeto não encontrado.")
}

removerProjeto("App Delivery")

listarProjetos()