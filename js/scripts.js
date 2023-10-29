//UI Logic
window.addEventListener("load", function () {
  document.querySelector("form#input-form").addEventListener("submit", handleSubmission);
})

function handleSubmission(event) {//handles the UI
  event.preventDefault();
  const upOrDown = document.querySelector("select#updown").value;
  const inputNumber = parseInt(document.getElementById("input-text").value);
  const inputName = document.getElementById("input-name").value;
  const isThereName = nameChecker(inputName);
  let outputArray = beepBoop(inputNumber, inputName, isThereName);
  const numberCheck = numberChecker(inputNumber);
  const reverseArray = outputArray.reverse();
  if (upOrDown === "up") {
    outputArray = outputArray.reverse();
  }
  utilityForSub(numberCheck, outputArray);
}

function utilityForSub(numberCheck, finalArray) {
  if (numberCheck === true) {
    outputFunction(finalArray);
  } else if (numberCheck !== true) {
    outputFunction(numberCheck);
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

function numberChecker(inputNumber) {//Verifies number input
  if (inputNumber < 0 || inputNumber > 3000 || !/^\d+$/.test(inputNumber)) {
    return "Enter a non-negative number under 3000";
  } else {
    return true;
  }
}

function nameChecker(inputName) {//make sure the name only gets displayed if the chars are alphabet
  if (!/^[a-zA-Z\s]+$/.test(inputName) || inputName.trim().length === 0) {
    return false;
  } else {
    return true;
  }
}

//Business Logic
function beepBoop(inputNumber, inputName, isThereName) {//builds ouput array
  const outputArray = [];
  for (let i = 0; i <= inputNumber; i++) {
    if (i.toString().includes("3") && isThereName === true) {
      outputArray.push("Won't you be my neighbor," + inputName + "?");
    } else if (i.toString().includes("3")) {
      outputArray.push("Won't you be my neighbor?");
    } else if (i.toString().includes("2")) {
      outputArray.push("Boop!");
    } else if (i.toString().includes("1")) {
      outputArray.push("Beep!");
    } else {
      outputArray.push(i);//Build an array, starting with zero, up to input number
    }
  }
  return outputArray;//turn array into a string, separated by space, and return it
}

