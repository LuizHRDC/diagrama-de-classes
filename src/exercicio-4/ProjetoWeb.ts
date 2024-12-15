import { Projeto } from "./Projeto"
import { Gerente } from "./Gerente"

export class ProjetoWeb extends Projeto {
    private linguagem: string
    private bd: string

    constructor(tipo: string, nome: string, nivel: string, custo: number, gerente: Gerente, linguagem: string, bd: string) {
        super(tipo, nome, nivel, custo, gerente)
        this.linguagem = linguagem
        this.bd = bd
    }

    getLinguagem(): string {
        return this.linguagem
    }

    setLinguagem(linguagem: string): void {
        this.linguagem = linguagem
    }

    getBd(): string {
        return this.bd
    }

    setBd(bd: string): void {
        this.bd = bd
    }

    toString(): string {
        return `${super.toString()}\nLinguagem: ${this.linguagem}\nBanco de Dados: ${this.bd}`
    }
}