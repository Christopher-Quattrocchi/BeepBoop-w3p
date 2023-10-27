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
    let strArray = outputArray.join("");
    let newArray = [];
    for (let i= 0; i < (inputNumber + 1); i++) {
        let string = strArray[i];
        if (string.includes("3")) {
            newArray.push("Won't you be my neighbor?");
        } else if (string.includes("2")) {
            newArray.push("Boop!")
        } else {
            newArray.push(string);
        }
    }
    let outputString = newArray.join(" ");
    return outputString;
}