//UI Logic
window.addEventListener("load", function () {
  document.querySelector("form#input-form").addEventListener("submit", handleSubmission);
})

function handleSubmission(event) {//handles the UI
  event.preventDefault();
  const upOrDown = document.querySelector("select#updown").value;
  const nameYesNo = document.querySelector("select#namechoice").value;
  const isThereName = nameChecker(inputName);
  const inputNumber = parseInt(document.getElementById("input-text").value);
  const inputName = document.getElementById("input-name").value;
  if (upOrDown === "up") {
    
    const outputArray = beepBoop(inputNumber, inputName, nameYesNo);
    const numberCheck = numberChecker(inputNumber);
    const nameCheck = nameChecker(inputName, nameYesNo);
    if (numberCheck === true && nameCheck === true) {
      outputFunction(outputArray);
    } else if (numberCheck !== true) {
      outputFunction(numberCheck);
    } else if (nameCheck !== true) {
      outputFunction(nameCheck);
    }
  } else {
    const outputArray = beepBoop(inputNumber, inputName, nameYesNo);
    const reverseArray = outputArray.reverse();
    const numberCheck = numberChecker(inputNumber);
    const nameCheck = nameChecker(inputName, nameYesNo);
    if (numberCheck === true && nameCheck === true) {
      outputFunction(reverseArray);
    } else if (numberCheck !== true) {
      outputFunction(numberCheck);
    } else if (nameCheck !== true) {
      outputFunction(nameCheck);
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

function numberChecker(inputNumber) {
  if (inputNumber < 0 || inputNumber > 3000 || !/^\d+$/.test(inputNumber)) {
    return "Enter a non-negative number under 3000";
  } else {
    return true;
  }
}

function nameChecker(inputName) {
 if (!/^[a-zA-Z\s]+$/.test(inputName) || inputName.trim().length === 0) {
    return false;
  } else {
    return true;
  }
}



//Business Logic
function beepBoop(inputNumber, inputName, nameYesNo) {
  const outputArray = [];
  for (let i = 0; i <= inputNumber; i++) {
    if (i.toString().includes("3") && nameYesNo === "yes") {
      outputArray.push("Won't you be my neighbor," + inputName + "?");
    } else if (i.toString().includes("3")) {
      outputArray.push("Won't you be my neighbor?");
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

