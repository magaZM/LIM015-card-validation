export let validity;

const validator = {

  isValid: (creditCardNumber) => {
    
    const convertToArray = Array.from(creditCardNumber).reverse();

    let sum = 0;

    for(let index = 1; index < convertToArray.length; index += 2){
    
      const multiplyPairs = convertToArray[index] * 2;

      if (multiplyPairs >= 10) {
        const convertToString = multiplyPairs.toString();
        const firstPosition = convertToString[0];
        const lastPosition = convertToString[1];
        convertToArray[index] = Number(firstPosition) + Number(lastPosition);
      } else {
        convertToArray[index] = multiplyPairs;
      }
    }

    convertToArray.forEach(element => sum = sum + Number(element))

    if(sum % 10 === 0){
      validity = 'Válida';
      return true;
    }else {
      validity = 'Inválida';
      return false;
    }
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

    const regExpFranchise = {
      'American Express': /^3[47][0-9]{13}$/,
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
    return 'Marca no encontrada';
  }
};

export default validator;