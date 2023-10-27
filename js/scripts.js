function beepBoop(inputNumber) {

    const outputString = textTransform(inputNumber);
    console.log(outputString);
}

function textTransform(inputNumber) {
    const outputArray = [];
    for (let i = 0; i <= inputNumber; i++) {
        outputArray.push(i);
    }
    let strArray = outputArray.map(String);
    let newArray = [];
    for (let i= 0; i < (inputNumber + 1); i++) {
        // let string = strArray[i];
        if (strArray[i].includes("3")) {
            newArray.push("Won't you be my neighbor?");
        } else if (strArray[i].includes("2")) {
            newArray.push("Boop!")
        } else if (strArray[i].includes("1")) {
            newArray.push("Beep!")
        } else {
            newArray.push(i);
        }
    }
    let outputString = newArray.join(" ");
    return outputString;
}