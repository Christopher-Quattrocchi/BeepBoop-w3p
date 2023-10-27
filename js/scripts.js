function beepBoop(inputNumber) {

    const outputArray = arrayTransform(inputNumber);
    // const numString = inputNumber.toString();
    // const strArray = numString.split("");
    // const numArray = strArray.map(Number);
    // const outputString = arrayTransform(strArray);
    console.log(outputArray);
}

function arrayTransform(inputNumber) {
    const outputArray = [];
    for (let i = 0; i <= inputNumber; i++) {
        outputArray.push(i);
    
    }
    let outputString = outputArray.join(", ");
    return outputString;
}