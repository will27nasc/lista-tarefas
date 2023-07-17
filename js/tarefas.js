const s = (el) => document.querySelector(el);
let inputValue = document.getElementById('activity');
let cont = 0;

function createLi() {
    let li = document.createElement('li');
    li.id = 'list-' + cont;
    li.innerText = s('#activity').value;   

    return li;
}

function createButton() {
    let button = document.createElement('button');
    button.id = 'button-' + cont;
    button.innerHTML = '<i class="bi bi-trash3-fill"></i>';

    button.addEventListener('click', (el)=>{
        el.currentTarget.parentElement.remove();
    });


    return button;
}

function valityInformation() {
    let inputCorrect = inputValue.value !== ''? true : false;
    return inputCorrect;
}

function addActivity() {
    let lista = createLi();
    let botao = createButton();
    let confirmation = valityInformation();

    if(confirmation) {
        s('#tarefas').append(lista);
        document.getElementById('list-' + cont++).append(botao);
        s('#saida-erro').innerText = '';
        inputValue.value = '';
        inputValue.focus();
    } else {
        s('#saida-erro').innerText = 'O campo tarefa não pode estar vazio!   ';
    }
} 

s('#save').addEventListener('click', addActivity);

