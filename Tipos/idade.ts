function typeDemo(idade: number, tempoDeEmpresa: number) {
    console.log(
    `Você tem ${idade} anos de idade. E trabalha aqui há ${tempoDeEmpresa} anos na empresa.`
    );
}

typeDemo(30, 4);

/**
 * 
 * Tipos em TypeScript:
* Number: todos valores numéricos são representados por tipo number. Não há definições separadas 
para: inteiros, floats ou outros.

* String: é do tipo texto. E podem ser escritos com aspas simples ” ou aspas duplas “”.

* Boolean: true ou false. Se usar 0 ou 1 irá causar um erro de compilação.

* Any: uma variável com esse tipo pode ter uma variável setada para string, 
number ou qualquer outra coisa;

* Arrays: há duas possibilidades de sintaxes: my_arr: number[];  ou my_arr: Array;

* Void: usado em funções que não retornam valores.

 */