import { Projeto } from "./Projeto"
import { Gerente } from "./Gerente"

export class ProjetoAplicativo extends Projeto {
    private plataforma: string
    private tamanho: number

    constructor(tipo: string, nome: string, nivel: string, custo: number, gerente: Gerente, plataforma: string, tamanho: number) {
        super(tipo, nome, nivel, custo, gerente)

        if (plataforma.toLowerCase() !== "android" && plataforma.toLowerCase() !== "ios") {
            throw new Error("A plataforma deve ser 'Android' ou 'iOS'.")
        }
        this.plataforma = plataforma

        if (tamanho <= 0) {
            throw new Error("O tamanho deve ser maior que zero.")
        }
        this.tamanho = tamanho
    }

    getPlataforma(): string {
        return this.plataforma
    }

    setPlataforma(plataforma: string): void {
        if (plataforma.toLowerCase() !== "android" && plataforma.toLowerCase() !== "ios") {
            throw new Error("A plataforma deve ser 'Android' ou 'iOS'.")
        }
        this.plataforma = plataforma
    }

    getTamanho(): number {
        return this.tamanho
    }

    setTamanho(tamanho: number): void {
        if (tamanho <= 0) {
            throw new Error("O tamanho deve ser maior que zero.")
        }
        this.tamanho = tamanho
    }

    toString(): string {
        return `${super.toString()}\nPlataforma: ${this.plataforma}\nTamanho: ${this.tamanho} kB`
    }
}