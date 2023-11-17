// Criando uma calculadora de partidas rankeadas

let vitorias = 97;

let derrotas = 35;


function tabelaVitorias( vitorias) {
    if (vitorias < 10 ) return ('Ferro')
    if (vitorias >= 11 && vitorias <= 20) return ('Bronze')
    if (vitorias >= 21 && vitorias <= 50) return ('Prata')
    if (vitorias >= 51 && vitorias <= 80) return ('ouro')
    if (vitorias >= 81 && vitorias <= 90) return ('Diamante')
    if (vitorias >= 91 && vitorias <= 100) return ('Lendario')
    if (vitorias >= 101) return (' Imortal ')
  }


function calculadoraVitorias(vitorias, derrotas){
    return vitorias - derrotas;

}

let resultadoVitorias = calculadoraVitorias(vitorias, derrotas)

resultadoVitorias = parseInt(resultadoVitorias);

//Saida

console.log(`O Herói tem saldo de ${resultadoVitorias} e está no nível de ${tabelaVitorias(resultadoVitorias)}`)