function RetornarHora(segundo) {  
    const data = new Date(segundo * 1000);
    return data.toLocaleTimeString('pt-BR',{hour12:false,timeZone:'GMT'});
}

let divHora = document.querySelector('#hora');
let segundos = 0;
let timer;

function iniciaRelogio(){
    timer = setInterval(() =>{
        segundos++;
        divHora.innerHTML = RetornarHora(segundos);
    },1000);
    divHora.classList.remove('pausado');
}

function zeraRelogio() {  
    clearInterval(timer);
    segundos = 0;
    divHora.innerHTML = RetornarHora(segundos);
    divHora.classList.remove('pausado');
}

function pausarRelogio() {  
    clearInterval(timer);
    divHora.classList.add('pausado');
}

document.querySelector('#btn-iniciar').addEventListener('click',function(){
    iniciaRelogio();
});

document.querySelector('#btn-pausar').addEventListener('click',function(){
    pausarRelogio();
});

document.querySelector('#btn-zerar').addEventListener('click',function(){
    zeraRelogio();
});
