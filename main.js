const form = document.getElementById('form-validacao');
const numA = document.getElementById('num-a');
const numB = document.getElementById('num-b');
const campoError = document.querySelector('.error-message');
const campoSuccess = document.querySelector('.success-message');

function validaNumero(numeroA, numeroB){
    return numeroB > numeroA

}

form.addEventListener('submit', function(e){
    let formValido = false;

    e.preventDefault();

    formValido = validaNumero(numA.value, numB.value);

    if (formValido) {
        numA.style.border = '';
        campoError.style.display = 'none';
     
    campoSuccess.style.display = 'block';
    }else{
        campoSuccess.style.display = 'none';
        numA.style.border = '1px solid red';
        campoError.style.display = 'block';
    }
});


