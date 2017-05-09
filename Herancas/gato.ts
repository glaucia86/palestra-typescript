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

class Gato extends Animal {
    constructor(
        public nome: string, 
        public preco: number, 
        public raca:string, 
        private idade: number
    ) {
        super(nome, preco, raca);
    }
    comprarGato() {
        super.caminhar(); //herdo também os métodos da classe mãe.
        
        console.log(`Nome do gato...: ${this.nome}. O seu valor é...: 
        R$ ${this.preco} e a raça é...: ${this.raca} 
        com idade de....: ${this.idade} meses!`);
    }
}

let gato = new Gato('Felicia', 1000, 'Persa', 2);
gato.comprarGato();