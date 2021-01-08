const elementoInput = document.querySelector('#input1')
const elementoBotao = document.querySelector('#add')
const elementoBotaoDel = document.querySelector('#del')
const elementoLista = document.querySelector('ul')

const tarefas = []

function mostraTarefas() {

    elementoLista.innerHTML = ''

    for (tarefa of tarefas) {

        const itemLista = document.createElement('li')
        const posicaoItem = tarefas.indexOf(tarefa)

        itemLista.innerHTML = tarefa + `<span class="material-icons" onclick="deletarTarefa(${posicaoItem})"><a>delete</a></span>`

        elementoLista.appendChild(itemLista)
    }
}


mostraTarefas()

function addTarefa() {
    if (elementoInput.value == '') {
        alert('Primeiro escreva um ingrediente para adicionar')
    } else {
        textoTarefa = elementoInput.value
        tarefas.push(textoTarefa)
        mostraTarefas()
        elementoInput.value = ''
        document.getElementById('salvar').style.visibility = 'visible'
    }
}

function deletarTarefa(posicaoItem) {
    tarefas.splice(posicaoItem, 1)
    mostraTarefas()
    if(tarefas == ''){
        document.getElementById('salvar').style.visibility = 'hidden'
    }
}

function deletarTodasTarefas() {
    if (tarefas == '') {
        alert('Não existe nenhum item para excluir')
    } else {
        tarefas.splice(tarefas)
        mostraTarefas()
        document.getElementById('salvar').style.visibility = 'hidden'
    }

}

elementoBotao.setAttribute('onclick', 'addTarefa()')
elementoBotaoDel.setAttribute('onclick', 'deletarTodasTarefas()')
document.querySelector('#salvar').setAttribute('onclick' , 'salvar()')



function salvar(){
    let titulo = "Sua Receita"
    let blob = new Blob([tarefas],{type:"text/plain;charset=utf-8"})
    saveAs(blob, titulo + ".txt")
}

