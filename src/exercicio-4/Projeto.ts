import { Gerente } from "./Gerente"

export class Projeto {
    private tipo: string
    private nome: string
    private nivel: string
    private custo: number
    private gerente: Gerente

    constructor(tipo: string, nome: string, nivel: string, custo: number, gerente: Gerente) {
        if (custo <= 0) {
            throw new Error("O custo nao pode ser menor ou igual a zero.")
        }
        this.tipo = tipo
        this.nome = nome
        this.nivel = nivel
        this.custo = custo
        this.gerente = gerente
    }

    getTipo(): string {
        return this.tipo
    }

    getNome(): string {
        return this.nome
    }

    getNivel(): string {
        return this.nivel
    }

    getCusto(): number {
        return this.custo
    }

    getGerente(): Gerente {
        return this.gerente
    }

    toString(): string {
        return `Projeto: ${this.nome} - ${this.nivel}\nCusto: ${this.custo}\nGerente: ${this.gerente.getNome()}\nTipo: ${this.tipo}`
    }
}