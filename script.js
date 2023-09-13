
const form = document.querySelector('form')

const nameInput = document.querySelector('#name')

const emailInput = document.querySelector('#email')

const cidadeInput = document.querySelector('#cidade')


form.addEventListener('submit', (event) => {
    event.preventDefault();

    if(nameInput.value === ""){
    alert("Por favor, preencha com seu nome");
    return;
    }
   
    if(emailInput.value === "") {
        alert("Por favor, preencha com seu email com @");
        return;
    }
   
    if(cidadeInput.value === "") {
        alert("Por favor, preencha com sua cidade");
        return
    }


    form.submit();
});

