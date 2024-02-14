const form = document.getElementById('form');
const nome = document.getElementById('nome');
const sobrenome = document.getElementById('Sobrenome');
const email = document.getElementById('email');
const senha = document.getElementById('senha');
const confirsenha = document.getElementById('confirsenha');
const celular = document.getElementById('celular');

form.addEventListener('submit', (event) =>{
    event.preventDefault();

    checkfinal();
})

function checkname(){
    const nomevalue = nome.value;
    
    if(nomevalue == ''){
        errorimput(nome, 'Nome Obrigatório');
    }
    else{
        pass(nome)
    }
}

function checkSobrenome(){
    const sobrenomevalue = sobrenome.value;

    if(sobrenomevalue == ''){
        errorimput(sobrenome, 'Sobrenome Obrigatório');
    }else{
        pass(sobrenome)
    }
}

function checkcelular(){
    const celularvalue = celular.value;

    if(celularvalue == ''){
        errorimput(celular, 'Celular Obrigatório');
    }else if(celularvalue.length < 10){
        errorimput(celular, 'Número invalido');
    }else{
        pass(celular);
    }
}

function checkemail(){
    const emailvalue = email.value;

    if(emailvalue == ''){
        errorimput(email, 'Email Obrigatório');
    }else{
        pass(email)
    }
}

function checksenha(){
    const senhavalue = senha.value;

    if(senhavalue == ''){
        errorimput(senha, 'Senha Obrigatória');        
    }else if(senhavalue.length < 8){
        errorimput(senha, 'Mínimo 8 caracteres')
    }else{
        pass(senha)
    }
}

function checkconfirmsenha(){
    const confirsenhavalue = confirsenha.value;
    const senhavalue = senha.value;

    if(confirsenhavalue == ''){
        errorimput(confirsenha, 'Obrigatório');
    }else if(confirsenhavalue !== senhavalue){
        errorimput(confirsenha, 'Senha invalída');
    }else{
        pass(confirsenha);
    }
}


function errorimput(input, message){

    const forItem = input.parentElement;
    const textmessage = forItem.querySelector('p')

    textmessage.innerText = message;
    forItem.className ='input error';
}

function pass(input){
    const forItem = input.parentElement;  
        forItem.setAttribute('class', 'input');
}

function checkfinal(){
    checkname()
    checkSobrenome()
    checkcelular()
    checkemail()
    checksenha()
    checkconfirmsenha()

    const inputs = form.querySelectorAll('.input');

    const isvalid = [...inputs].every((item) =>{
        return item.className === 'input'
    });
    if(isvalid){
        window.location = '../html/enter.html';
    }
}