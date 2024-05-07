class Carrinho{
    constructor(itens, quantidadeTotal, valorTotal) {
        this.itens = itens;
        this.quantidadeTotal = quantidadeTotal;
        this.valorTotal = valorTotal;
    }

   
    /*adicionar(itens){
        this.itens += itens; 
    }

    remover(itens){
        this.itens -= itens;
    }*/

}

let carrinho = new Carrinho([
    {
        id: 01,
        nome: "Camisa",
        quantidade: 1,
        preco: 20
    },
    {
        id: 02,
        nome: "Calça",
        quantidade: 2,
        preco: 50
    }
    ], 3, 120);

    console.log(carrinho);


/*carrinho.adicionar(5);
console.log(carrinho.quantidadeTotal);

carrinho.remover(2);
console.log(carrinho.valorTotal);*/