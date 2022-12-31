
function updatePhoneTotal(newPhoneNumber) {
    const previousPhoneTotal = document.getElementById('phone-total');
    const newPhoneTotal = newPhoneNumber * 1000;
    previousPhoneTotal.innerText = newPhoneTotal;
}

document.getElementById('btn-phone-plus').addEventListener('click', function () {
    const newPhoneNumber = updateCaseAndPhoneNumber(true, 'phone-input');
    updatePhoneTotal(newPhoneNumber);

    const phoneTotal = getPhoneAndCaseTotalInput('phone-total');
    const caseTotal = getPhoneAndCaseTotalInput('case-total');
    getInputElementById(phoneTotal, caseTotal);
    
})

document.getElementById('btn-phone-minus').addEventListener('click', function () {
    const newPhoneNumber = updateCaseAndPhoneNumber(false, 'phone-input');
    updatePhoneTotal(newPhoneNumber);

    const phoneTotal = getPhoneAndCaseTotalInput('phone-total');
    const caseTotal = getPhoneAndCaseTotalInput('case-total');
    getInputElementById(phoneTotal, caseTotal);
})