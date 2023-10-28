//UI Logic
window.addEventListener("load", function() {
    document.querySelector("form#input-form").addEventListener("submit", handleSubmission);
    document.querySelector("form#input-form2").addEventListener("submit", bizarroOutput);

})

function handleSubmission(event) {//handles the UI for the first form
    event.preventDefault();
    const inputNumber = parseInt(document.getElementById("input-text").value);
    const inputName = document.getElementById("input-name").value;
    const outputString = beepBoop(inputNumber, inputName);
    const validation = validationCheck(inputNumber, inputName);
    if (validation === true) {
        outputFunction(outputString);
    } else {
        outputFunction(validation);
    }
    

}

function bizarroOutput (event) {//confusingly named funtion that outputs the alternate string
    event.preventDefault();
    const inputNumber2 = parseInt(document.getElementById("input-text2").value);
    const inputName2 = document.getElementById("input-name2").value;
    const outputString2 = boopBeep(inputNumber2, inputName2);
    const validation = validationCheck(inputNumber2, inputName2);
    if (validation === true) {
        outputFunction(outputString2);
    } else {
        outputFunction(validation);
    }
    
}

function outputFunction(output) {//this function reduces redundancy
    pEle = document.createElement("p");
    divEle = document.querySelector("div#output-div");
    document.querySelector("div#output-div").innerHTML = "";
    pEle.append(output);
    divEle.append(pEle);
}

function validationCheck(inputNumber, inputName) {//Checks for valid number that won't blow up the computer and checks for name because I don't feel like changing the lower function to deal with no name
    if (inputNumber < 0 || inputNumber > 1000 || !/^\d+$/.test(inputNumber)) {
        return "Enter a non-negative number under 1000";
    } else if (!/^[a-zA-Z\s]+$/.test(inputName) || inputName.trim().length === 0) {
        return "Enter a valid name";
    }
    else {
        return true;
    }
}


//Business Logic
function beepBoop(inputNumber, inputName) {
    const outputArray = [];
    for (let i = 0; i <= inputNumber; i++) {
        outputArray.push(i);//Build an array, starting with zero, up to input number
    }
    const strArray = outputArray.map(String);//turn outputArray into a string array so that .includes can be used on it
    const finalArray = [];
    for (let i= 0; i <= inputNumber; i++) {//builds altered array
        if (strArray[i].includes("3")) {
            finalArray.push("Won't you be my neighbor, " + inputName + "?");
        } else if (strArray[i].includes("2")) {
            finalArray.push("Boop!")
        } else if (strArray[i].includes("1")) {
            finalArray.push("Beep!")
        } else if (strArray[i].includes("5")) {
            finalArray.push("FIVE DETECTED")
        } else {
            finalArray.push(i);//index works in this case
        }
    }    
    return finalArray.join(" ");//turn array into a string, separated by space, and return it
}

function boopBeep(inputNumber2, inputName2) {//almost the same, but starting at input and counting down to 0
    const outputArray = [];
    for (let i = inputNumber2; i >= 0; i--) {
        outputArray.push(i);
    }
    const strArray = outputArray.map(String);
    const finalArray = [];
    for (let i= 0; i <= inputNumber2; i++) {
        if (strArray[i].includes("3")) {
            finalArray.push("Won't you be my neighbor, " + inputName2 + "?");
        } else if (strArray[i].includes("2")) {
            finalArray.push("Boop!")
        } else if (strArray[i].includes("1")) {
            finalArray.push("Beep!")
        } else {
            finalArray.push(strArray[i]);
        }
    }    
    return finalArray.join(" ");//turn array into a string, separated by space
}