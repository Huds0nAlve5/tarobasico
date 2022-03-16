class Carta{
    constructor(nome, ataque, defesa, magia){
        this.nome = nome 
        this.atributos = {
            ataque,
            defesa,
            magia
        }
    }
}

var cartas = []
var goku = new Carta('Goku', 9, 8, 7)
var vegeta = new Carta('Vegeta', 8, 9, 7)
var piccolo = new Carta('Piccolo', 5, 5, 10)
cartas.push(goku, vegeta, piccolo)
var cartaUsuario
var cartaPC

function sortearCartas(){
    var numAleatorio = parseInt(Math.random() * cartas.length)
    cartaUsuario = cartas[numAleatorio]

    console.log(cartaUsuario)
    
    numAleatorio = parseInt(Math.random() * cartas.length)
    cartaPC = cartas[numAleatorio]
    while(cartaPC == cartaUsuario){
        numAleatorio = parseInt(Math.random() * cartas.length)
        cartaPC = cartas[numAleatorio]
    }

    console.log(cartaPC)

    var botaoSortear = document.getElementById('botao')
    var botaoJogar = document.getElementById('jogar')

    botaoSortear.disabled = true
    botaoJogar.disabled = false

    alocarAtributos()
}

function alocarAtributos(){
    var localAtributos = document.getElementById('localAtributos')
    var atributosDaCarta = ''
    
    for(atributo in cartaPC.atributos)
        atributosDaCarta += "<input name='atributo' class='atributo' type='radio' value='" + atributo + "'>" + atributo

    localAtributos.innerHTML = atributosDaCarta
}

function atributoSelecionado(){
    var atributos = document.getElementsByName('atributo')
    for(var i = 0; i < atributos.length; i++){
        if (atributos[i].checked){
            return atributos[i].value
        }
    }
}

function combate(){
    var atributoDoCombate = atributoSelecionado()
    var resultadofinal = document.getElementById('resultadofinal')
    console.log(atributoDoCombate)

    if(cartaUsuario.atributos[atributoDoCombate] > cartaPC.atributos[atributoDoCombate]){
        resultadofinal.innerHTML = 'Parabéns! Você ganhou!'
    }
    else if(cartaUsuario.atributos[atributoDoCombate] < cartaPC.atributos[atributoDoCombate]){
        resultadofinal.innerHTML = 'Você perdeu!'
    }
    else{
        resultadofinal.innerHTML = 'Empate!'
    }
}

function limparTela(){      /* fazer depois */
    var botaoSortear = getElementById('botao')
    var botaoJogar = getElementById('jogar')
}