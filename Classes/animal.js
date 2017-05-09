var Animal = (function () {
    //Construtor simples
    function Animal(nome, preco, raca) {
        this.nome = nome;
        this.preco = preco;
        this.raca = raca;
    }
    //Método da Classe:
    Animal.prototype.caminhar = function (metros) {
        if (metros === void 0) { metros = 0; }
        console.log("O " + this.nome + " percorreu " + metros + " metros!");
    };
    return Animal;
}());
var animal = new Animal('Jake', 900, 'Pischer');
animal.caminhar();
//# sourceMappingURL=animal.js.map