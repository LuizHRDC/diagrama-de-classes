class Item {
    public valor: number
    public nome: string
    public descricao: string
  
    constructor(valor: number, nome: string, descricao: string) {
      this.valor = valor
      this.nome = nome
      this.descricao = descricao
    }
  }
  
  class Pedido {
    public itens: Array<Item>
    public valorTotal: number
  
    constructor() {
      this.itens = []
      this.valorTotal = 0
    }
  
    public adicionarItem(item: Item): void {
      this.itens.push(item)
      this.valorTotal += item.valor
    }
  }
  
  const item1 = new Item(30.0, "Garrafa", "Garrafa amarela 500ml")
  const item2 = new Item(45.0, "Caderno", "Caderno de 100 folhas")
  
  const pedido = new Pedido()
  pedido.adicionarItem(item1)
  pedido.adicionarItem(item2)
  
  console.log("Itens do pedido:", pedido.itens)
  console.log("Valor total do pedido:", pedido.valorTotal)