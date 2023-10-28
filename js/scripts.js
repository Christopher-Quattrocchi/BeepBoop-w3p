//UI Logic
window.addEventListener("load", function () {
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
  
  function bizarroOutput(event) {//confusingly named funtion that outputs the alternate string
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
    const pEle = document.createElement("p");
    const ulEle = document.createElement("ul");
    const divEle = document.querySelector("div#output-div");
    document.querySelector("div#output-div").innerHTML = "";
    divEle.append(ulEle);
    for (let i = 0; i < output.length; i++) {
      if (!Array.isArray(output)) {
        pEle.append(output);
        divEle.append(pEle);
        break;
      } else {
        const liEle = document.createElement("li");
        liEle.append(output[i]);
        ulEle.append(liEle);
      }
    }
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
      if (i.toString().includes("3")) {
        outputArray.push("Won't you be my neighbor," + inputName + "?");
      } else if (i.toString().includes("2")) {
        outputArray.push("Boop!");
      } else if (i.toString().includes("1")) {
        outputArray.push("Beep!");
      } else if (i.toString().includes("5")) {
        outputArray.push("FIVE DETECTED!")
      } else {
        outputArray.push(i);//Build an array, starting with zero, up to input number
      }
  
    }
   
    return outputArray;//turn array into a string, separated by space, and return it
  }
  
  function boopBeep(inputNumber2, inputName2) {//almost the same, but starting at input and counting down to 0
    const finalArray = [];
    for (let i = inputNumber2; i >= 0; i--) {
      if (i.toString().includes("3")) {
        finalArray.push("Won't you be my neighbor, " + inputName2 + "?");
      } else if (i.toString().includes("2")) {
        finalArray.push("Boop!")
      } else if (i.toString().includes("1")) {
        finalArray.push("Beep!")
      } else {
        finalArray.push(i);
      }
    }
    return finalArray;//turn array into a string, separated by space
  }