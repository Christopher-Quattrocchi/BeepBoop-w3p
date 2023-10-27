//UI Logic
window.addEventListener("load", function(){
    document.querySelector("form#input-form").addEventListener("submit", handleSubmission);
})

function handleSubmission(event) {
    event.preventDefault();
    const inputNumber = parseInt(document.getElementById("input-text").value);
    const outputString = beepBoop(inputNumber);
    pEle = document.createElement("p");
    divEle = document.querySelector("div#output-div");
    document.querySelector("div#output-div").innerHTML = "";
    pEle.append(outputString);
    divEle.append(pEle);

}


//Business Logic
function beepBoop(inputNumber) {
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