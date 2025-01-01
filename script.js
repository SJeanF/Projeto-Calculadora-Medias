const form = document.getElementById('form')
let linhas = ''
const atividades = []
const notas = []
let notaMinima 

do {
notaMinima = prompt("Digite um número entre 0 e 10:");

// Converte a entrada para número
notaMinima = Number(notaMinima);

// Verifica se o número está fora do intervalo ou é inválido
if (isNaN(notaMinima) || notaMinima < 0 || notaMinima > 10 || !notaMinima) {
    alert("Entrada inválida. Por favor, insira um número de 0 a 10.");
}
} while (isNaN(notaMinima) || notaMinima < 0 || notaMinima > 10 || !notaMinima);


console.log(notaMinima)

form.addEventListener('submit', function(e) {
    e.preventDefault()
    
    adicionaLinha()
    atualizaTabela()
    atualizaMedia()
})

function adicionaLinha () {
    
    const elementAtividade = document.getElementById('atv')
    const elementNota = document.getElementById('nota')

    if (atividades.includes(elementAtividade.value)) {
        alert(`A atividade ${elementAtividade.value} já foi inserida`)
    } else {
        atividades.push(elementAtividade.value);
        notas.push(parseFloat(elementNota.value));
    
        let linha = '<tr>'
        linha += `<td>${elementAtividade.value}</td>`
        linha += `<td>${elementNota.value}</td>`
        linha += `<td>${elementNota.value >= notaMinima ? '<img src="imgs/EmojiFeliz.png" alt="um emoji feliz">' : '<img src="imgs/EmojiTriste.png" alt="um emoji triste"'}</td>`
        linha += '</tr>'
    
        linhas += linha

    }

    elementAtividade.value = ''
    elementNota.value = ''
}

function atualizaTabela() {
    const elementTabela = document.querySelector('tbody')
    elementTabela.innerHTML = linhas
}

function calculaMediaFinal() {
    let somaNotas = 0
    for (let i = 0; i < notas.length; i++) {
        somaNotas += notas[i]
    }

    const media = somaNotas / notas.length;
    return media;
}

function atualizaMedia() {
    const mediaFinal = calculaMediaFinal();

    document.getElementById('media-final-valor').innerHTML = mediaFinal.toFixed(2)
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinima ? '<span class="resultado aprovado">Aprovado</span>' : '<span class="resultado reprovado">Reprovado</span>'
}
