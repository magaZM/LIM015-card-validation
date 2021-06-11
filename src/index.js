// Importamos el objeto `validator`, que contiene las funciones `isValid` y `maskify`
import validator from './validator.js';
import { validity } from './validator.js';

// Elementos HTML
const btnVerify = document.querySelector('.btn');
const inputNumber = document.querySelector('#number');
const containerInput = document.querySelector('.container-input');
const containerResults = document.querySelector('.container-results');

// Variables Globales
let icon;
let creditCardNumber;

// Eventos 
document.addEventListener('DOMContentLoaded', startApp);
inputNumber.addEventListener('keyup', disabledBtn);
btnVerify.addEventListener('click', validateForm);
btnVerify.addEventListener("keydown", (e) => {
     if (e.keyCode === 13 || e.key === 'Enter') {  //checks whether the pressed key is "Enter"
        validateForm
     }
})

// Función para verificar cuando la página carga y desabilitar el botón
function startApp() {
    btnVerify.disabled = true;
    btnVerify.classList.add('disabled');
}

// Función para validar el número de tarjeta e imprimir los detalles de la operación
function validateForm() {
    creditCardNumber = inputNumber.value;
    const regEXp = /\D|\s$/;

    if (regEXp.test(creditCardNumber)){
        inputNumber.value = '';
        showAlert('Ingresa solo números por favor');
    }
    else {
        validator.isValid(creditCardNumber);
        validator.maskify(creditCardNumber);

        if (validator.isValid(creditCardNumber)){
            showAlert('Tarjeta Válida');
            showDetails();
        } else {
            showAlert('Tarjeta Inválida');
            showDetails();
        }
    }
}

// Función para habilitar el boton de verificar cuando escribe en el input
function disabledBtn() {

    if (inputNumber.value.length >= 13) {
        btnVerify.classList.remove('disabled');
        btnVerify.disabled = false;
    } else {
        startApp();
    }
}

// Función para eliminar mensajes de alerta
function deleteAlert() {
    // Verifica si existe una alerta y la remueve 
    const existsDiv = document.querySelector('.alert');
    if (existsDiv !== null) {
        const parentNode = existsDiv.parentNode;
        parentNode.removeChild( existsDiv );
    }
}

// Función para mostrar mensajes de alerta
function showAlert(message) {

    deleteAlert()
    const divAlert = document.createElement('div');
    divAlert.classList.add('text-center');
    

    if (validity === 'Válida'){
        icon = '<svg class="w-6 h-6" fill="none" stroke="currentColor" width="16px" color="green"  viewBox="5 5 15 15" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>'
        divAlert.classList.add('success', 'alert')
    } else {
        icon = '<svg class="w-6 h-6" fill="none" stroke="currentColor" width="12px" color="red" viewBox="5 5 15 15" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>'
        divAlert.classList.add('error', 'alert')
    }
    divAlert.innerHTML = `${icon} ${message}`;
    containerInput.insertBefore(divAlert, containerInput.children[0]);

}

// Función para mostrar mensaje con detalle de la operación
function showDetails() {

    // Muestra el container de resultados y agrega clase
    containerResults.style.display = 'block';
    containerResults.classList.add('modal-container');

    //Crea el contenido del container Resultados en un div
    const divDetails = document.createElement('div');
    divDetails.innerHTML = `
    <table>
        <thead>
            <tr> 
                <th colspan="2" class="text-center"> Detalles de la tarjeta: </th> 
            </tr>
        </thead>

        <tbody>
            <tr> 
                <th> Número de tarjeta:  </th>
                <td> ${validator.maskify(creditCardNumber)} </td>
            </tr>
            <tr> 
                <th> Marca de tarjeta:  </th>
                <td> ${validator.franchiseCard(creditCardNumber)} </td>
            </tr>
            <tr> 
                <th> Validación:  </th>
                <td> ${icon} ${validity} </td>
            </tr>
        </tbody>
    
    </table>
    <button type="submit" class="btn" id="goBack" >Reiniciar</button>
    `
    divDetails.classList.add('show', 'modal')
    containerResults.appendChild(divDetails);

    // Agrega evento al botón de goBack para volver a la ventana principal
    const btnGoBack = document.querySelector('#goBack');
    btnGoBack.addEventListener('click', () => {
        // Remueve la clase del modal
        containerResults.classList.remove('modal-active', 'show');
        // Limpia el input y el div con mensaje anterior
        inputNumber.value = '';
        containerResults.innerHTML = '';
        // oculta el div de resultados 
        containerResults.style.display = 'none';
        //Elimina mensajes de alerta
        deleteAlert()
    })
}