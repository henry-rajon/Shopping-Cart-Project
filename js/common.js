function updateCaseAndPhoneNumber(isIncrease, inputId) {
    const caseInputField = document.getElementById(inputId);
    const previousCaseNumberString = caseInputField.value;
    const previousCaseNumber = parseInt(previousCaseNumberString);
    let newCaseNumber;
    if (isIncrease) {
        newCaseNumber = previousCaseNumber + 1;
    }
    else {
        newCaseNumber = previousCaseNumber - 1;
    }
    caseInputField.value = newCaseNumber;
    return newCaseNumber;
}

function getPhoneAndCaseTotalInput(totalInputId) {
    const PhoneTotalInput = document.getElementById(totalInputId);
    const phoneTotalString = PhoneTotalInput.innerText;
    const phoneTotal = parseFloat(phoneTotalString);
    return phoneTotal;
}



function getInputElementById(phoneTotal, caseTotal) {
    const subTotalElement = document.getElementById('sub-total');

    const subTotal = phoneTotal + caseTotal;
    subTotalElement.innerText = subTotal;

    const taxInputElement = document.getElementById('tax');
    const taxTotal = subTotal * 0.1; 
    taxInputElement.innerText = taxTotal;

    const totalCostInput = document.getElementById('total');
    const totalCost = subTotal + taxTotal;
    totalCostInput.innerText = totalCost;
    
    
}