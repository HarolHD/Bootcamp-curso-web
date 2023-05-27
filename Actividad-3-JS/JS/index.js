let numero = 0;

const contador = document.getElementById('valor');
const disminuir = document.querySelector('.disminuir');
const resetear = document.querySelector('.resetear');
const aumentar = document.querySelector('.aumentar');

aumentar.addEventListener("click", () => {
    numero++;
    contador.innerHTML = numero;
});

disminuir.addEventListener("click", () => {
    if(numero==0){numero--}
    else{
        numero--;
        contador.innerHTML = numero;
    }
});

resetear.addEventListener("click", () =>{
    numero = 0;
    contador.innerHTML = numero;
});