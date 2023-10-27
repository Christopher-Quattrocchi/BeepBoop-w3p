//UI Logic
window.addEventListener("load", function() {
    document.querySelector("form#input-form").addEventListener("submit", handleSubmission);
    document.querySelector("form#input-form2").addEventListener("submit", bizarroOutput);

})

function handleSubmission(event) {
    event.preventDefault();
    const inputNumber = parseInt(document.getElementById("input-text").value);
    const inputName = document.getElementById("input-name").value;
    const outputString = beepBoop(inputNumber, inputName);
    
    pEle = document.createElement("p");
    divEle = document.querySelector("div#output-div");
    document.querySelector("div#output-div").innerHTML = "";
    pEle.append(outputString);
    divEle.append(pEle);

}

function bizarroOutput (event) {
    event.preventDefault();
    const inputNumber2 = parseInt(document.getElementById("input-text2").value);
    const inputName2 = document.getElementById("input-name2").value;
    const outputString2 = boopBeep(inputNumber2, inputName2);
    pEle = document.createElement("p");
    divEle = document.querySelector("div#output-div");
    document.querySelector("div#output-div").innerHTML = "";
    pEle.append(outputString2);
    divEle.append(pEle);
}

//Business Logic
function beepBoop(inputNumber, inputName) {
    const outputArray = [];
    for (let i = 0; i <= inputNumber; i++) {
        outputArray.push(i);//Build an array, starting with zero, up to input number
    }
    const strArray = outputArray.map(String);//turn outputArray into a string array so that .includes can be used on it
    const finalArray = [];
    for (let i= 0; i <= inputNumber; i++) {
        if (strArray[i].includes("3")) {
            finalArray.push("Won't you be my neighbor, " + inputName + "?");
        } else if (strArray[i].includes("2")) {
            finalArray.push("Boop!")
        } else if (strArray[i].includes("1")) {
            finalArray.push("Beep!")
        } else if (strArray[i].includes("5")) {
            finalArray.push("FIVE DETECTED")
        } else {
            finalArray.push(i);
        }
    }    
    return finalArray.join(" ");//turn array into a string, separated by space
}

function boopBeep(inputNumber2, inputName2) {
    const outputArray = [];
    for (let i = inputNumber2; i >= 0; i--) {
        outputArray.push(i);//Build an array, starting with zero, up to input number
    }
    const strArray = outputArray.map(String);//turn outputArray into a string array so that .includes can be used on it
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