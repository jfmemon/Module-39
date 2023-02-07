const practiceCalculator = (num1, num2, str) => {
    if(str === 'add') {
        console.log(num1 + num2);
    }else if(str === 'subtract') {
        console.log(num1 - num2);
    }else if(str === 'multiply') {
        console.log(num1 * num2);
    }else if(str === 'divide') {
        console.log(num1 / num2);
    }else if(str === 'modulus') {
        console.log(num1 % num2);
    }else{
        console.log('Invalid operation.');
    }
}

practiceCalculator(20,5,'hello');


