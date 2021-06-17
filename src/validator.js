const validator = {

  isValid: (creditCardNumber) => {

    let sum = 0;
    const convertToArray = Array.from(creditCardNumber).reverse();

    for(let index = 1; index < convertToArray.length; index += 2){ // Buscar posición par

      const multiplyEvens = Number(convertToArray[index]) * 2;

      if (multiplyEvens >= 10) {
        const convertToString = multiplyEvens.toString(); // Para manipular cada dígito
        const firstPosition = convertToString[0];
        const lastPosition = convertToString[1];
        convertToArray[index] = Number(firstPosition) + Number(lastPosition);
      } else {
        convertToArray[index] = multiplyEvens;
      }
    }

    convertToArray.forEach(element => sum = sum + Number(element))

    return (sum % 10 === 0) ? true : false;
  },

  maskify: (creditCardNumber) =>  {
   
    const convertCreditCardNumberToArray = Array.from(creditCardNumber);
    const regExpArr = /\d$/g;
    for(let index = 0; index < convertCreditCardNumberToArray.length - 4; index++){
      convertCreditCardNumberToArray[index] = convertCreditCardNumberToArray[index].replace(regExpArr, '#');
    }
  
    let newCreditCardNumber = convertCreditCardNumberToArray.toString();

    while(newCreditCardNumber.indexOf(',') != -1 ) {
      newCreditCardNumber = newCreditCardNumber.toString().replace(',', '');
    }
    return newCreditCardNumber;
  }, 

  franchiseCard: (creditCardNumber) => {
    // Objeto con expresiones regulares para cada tarjeta 
    const regExpFranchise = {
      amex: /^3[47][0-9]{13}$/,
      diners: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
      discover: /^6(?:011|5[0-9]{2})[0-9]{12}$/,
      jcb: /^(?:2131|1800|35\d{3})\d{11}$/,
      maestro: /^(5018|5020|5038|5612|5893|6304|6759|6761|6762|6763|0604|6390)\d+$/,
      visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
      mastercard: /^5[1-5][0-9]\d+$/,
    }

    for(let key in regExpFranchise) {
      if  ( regExpFranchise[key].test(creditCardNumber) ) {
        return key;
      }
    }
    return 'otro';
  }
};

export default validator;