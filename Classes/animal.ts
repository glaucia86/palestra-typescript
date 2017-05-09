class Animal {
    //Propriedades da Classe:
    public nome: string;
    public preco: number;
    public raca: string;

    //Construtor simples
    constructor(nome: string, preco: number, raca: string) {
        this.nome = nome;
        this.preco = preco;
        this.raca = raca;
    }

    //Método da Classe:
    caminhar(metros: number = 0) {
        console.log(`O ${this.nome} percorreu ${metros} metros!`);
    }
}

let animal = new Animal('Jake', 900, 'Pischer');
animal.caminhar();