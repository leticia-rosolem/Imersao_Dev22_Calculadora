var nome = "Larissa"
var notaDoPrimeiroBimestre = 9
var notaDoSegundoBimestre = 7
var notaDoTerceiroBimestre = 7
var notaDoQuartoBimestre = 6

var notaFinal = (notaDoPrimeiroBimestre + notaDoSegundoBimestre + notaDoTerceiroBimestre + notaDoQuartoBimestre) / 4

var notaFixada = notaFinal.toFixed(1)

console.log("Bem vindo " + nome)
console.log(notaFixada)
console.log("Sua média final foi " + notaFixada)

if (notaFixada < 7){
  console.log ("Você reprovou")
}
if (notaFixada >= 7){
  console.log ("Parabéns, você foi aprovado")
}  



// comentário: Conceito de variáveis, strings, console.log (imprimir), tofixed (para fixar número) , matemática básica, concatenação (console.log)

//Desafio: só somar os valores e depois fazer a divisão, notas com duas casas decimais, verificar se passou ou não de ano, aprovado ou não. Estilizar o fundo, modificar a imagem, a cor do fundo, tentar escrever na página o que escrevemos no console. Conversor de temperatura.

