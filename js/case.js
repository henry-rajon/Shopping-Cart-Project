/*
1. add event handler into case-plus button
2. get input value from case input using (.value)
3. convert string to number 
4. update new case number 
5. set the new case number 

*/

// function updateCaseNumber(isIncrease) {
//     const caseInputField = document.getElementById('case-input');
//     const previousCaseNumberString = caseInputField.value;
//     const previousCaseNumber = parseInt(previousCaseNumberString);
//     let newCaseNumber;
//     if (isIncrease) {
//         newCaseNumber = previousCaseNumber + 1;
//     }
//     else {
//         newCaseNumber = previousCaseNumber -1;
//     }
//     caseInputField.value = newCaseNumber;
//     return newCaseNumber;
// }


function updateCaseTotal(newCaseNumber) {
    const previousCaseTotal = document.getElementById('case-total');
    const newCaseTotal = newCaseNumber * 50;
    previousCaseTotal.innerText = newCaseTotal;
}



document.getElementById('btn-case-plus').addEventListener('click', function () {
    const newCaseNumber = updateCaseAndPhoneNumber(true, 'case-input');
    updateCaseTotal(newCaseNumber);

    const phoneTotal = getPhoneAndCaseTotalInput('phone-total');
    const caseTotal = getPhoneAndCaseTotalInput('case-total');
    getInputElementById(phoneTotal, caseTotal);



    // const subTotalString = subTotalElement.innerText;
    // const subTotal = parseFloat(subTotalString);
    // console.log(subTotal)

    
})

document.getElementById('btn-case-minus').addEventListener('click', function () {
    const newCaseNumber = updateCaseAndPhoneNumber(false, 'case-input');
    updateCaseTotal(newCaseNumber);

    const phoneTotal = getPhoneAndCaseTotalInput('phone-total');
    const caseTotal = getPhoneAndCaseTotalInput('case-total');
    getInputElementById(phoneTotal, caseTotal);
})