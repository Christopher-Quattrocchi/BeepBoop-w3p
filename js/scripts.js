//UI Logic
window.addEventListener("load", function () {
    document.querySelector("form#input-form").addEventListener("submit", handleSubmission);
  })
  
  function handleSubmission(event) {//handles the UI
    event.preventDefault();
    const upOrDown = document.querySelector("select#updown").value;
    const inputNumber = parseInt(document.getElementById("input-text").value);
    const inputName = document.getElementById("input-name").value;
    if (upOrDown === "up") {
      const outputString = beepBoop(inputNumber, inputName);
      const validation = validationCheck(inputNumber, inputName);
      if (validation === true) {
        outputFunction(outputString);
      } else {
        outputFunction(validation);
      }
    } else {
      const outputString = beepBoop(inputNumber, inputName);
      const reverseString = outputString.reverse();
      const validation = validationCheck(inputNumber, inputName);
      if (validation === true) {
        outputFunction(reverseString);
      } else {
        outputFunction(validation);
      }
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
  
  function validationCheck(inputNumber, inputName) {//Checks for valid number that won't blow up the computer and checks for name
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
  
  