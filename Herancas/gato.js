var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Gato = (function (_super) {
    __extends(Gato, _super);
    function Gato(nome, preco, raca, idade) {
        var _this = _super.call(this, nome, preco, raca) || this;
        _this.nome = nome;
        _this.preco = preco;
        _this.raca = raca;
        _this.idade = idade;
        return _this;
    }
    Gato.prototype.comprarGato = function () {
        _super.prototype.caminhar.call(this); //herdo também os métodos da classe mãe.
        console.log("Nome do gato...: " + this.nome + ". O seu valor \u00E9...: \n        R$ " + this.preco + " e a ra\u00E7a \u00E9...: " + this.raca + " \n        com idade de....: " + this.idade + " meses!");
    };
    return Gato;
}(Animal));
var gato = new Gato('Felicia', 1000, 'Persa', 2);
gato.comprarGato();
//# sourceMappingURL=gato.js.map