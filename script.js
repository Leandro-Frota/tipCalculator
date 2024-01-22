const form = document.querySelector('form');
const buttonSelectTips = document.getElementById('buttonSelectTips')
const inputBill = document.getElementById('inputBill');
const btn5Perc = document.getElementById('btn5Perc');
const btn10Perc = document.getElementById('btn10Perc');
const btn15Perc = document.getElementById('btn15Perc');
const btn25Perc = document.getElementById('btn25Perc');
const btn50Perc = document.getElementById('btn50Perc');
const inputPercTip = document.getElementById('inputPercTip')
const tipAmountResult = document.getElementById('tipAmountResult')
const inputPeople = document.getElementById('inputPeople')
const inputPeopleContent = document.getElementById('inputPeopleContent')
const tipAccountResult = document.getElementById('tipAccountResult')
const btnReset = document.getElementById('btnReset')

console.log(btnReset)

function recarregarPagina(){
    window.location.reload()
}

buttonSelectTips.addEventListener('click', function (e) {
    const evento = e.target
    const people = inputPeople.value
    const bill = inputBill.value
   
    errorPeople.innerText = ""


    if (evento == btn5Perc) {

        const result = (bill * 0.05) / people
        const resultPorPerson = (bill / people) + result

        if (result != NaN && result != Infinity) {
            tipAmountResult.innerText = result.toFixed(2)
            tipAccountResult.innerText = resultPorPerson.toFixed(2)

        } else {
            errorPeople.innerText = "Can't be zero"
            inputPeopleContent.style.border = '1px solid red'

        }
    } else if (evento == btn10Perc) {

        const result = (bill * 0.10) / people
        const resultPorPerson = (bill / people) + result

        if (result != NaN && result != Infinity) {
            tipAmountResult.innerText = result.toFixed(2)
            tipAccountResult.innerText = resultPorPerson.toFixed(2)

        } else {
            errorPeople.innerText = "Can't be zero"
            inputPeopleContent.style.border = '1px solid red'
        }
    } else if (evento == btn15Perc) {

        const result = (bill * 0.15) / people
        const resultPorPerson = (bill / people) + result

        if (result != NaN && result != Infinity) {
            tipAmountResult.innerText = result.toFixed(2)
            tipAccountResult.innerText = resultPorPerson.toFixed(2)

        } else {
            errorPeople.innerText = "Can't be zero"
            inputPeopleContent.style.border = '1px solid red'
        }
    } else if (evento == btn25Perc) {

        const result = (bill * 0.25) / people
        const resultPorPerson = (bill / people) + result

        if (result != NaN && result != Infinity) {
            tipAmountResult.innerText = result.toFixed(2)
            tipAccountResult.innerText = resultPorPerson.toFixed(2)
        } else {
            errorPeople.innerText = "Can't be zero"
            inputPeopleContent.style.border = '1px solid red'

        }

    } else if (btn50Perc == btn50Perc ) {

        const result = (bill * 0.50) / people
        const resultPorPerson = (bill / people) + result

        if (result != NaN && result != Infinity) {
            tipAmountResult.innerText = result.toFixed(2)
            tipAccountResult.innerText = resultPorPerson.toFixed(2)

        } else {
            errorPeople.innerText = "Can't be zero"
            inputPeopleContent.style.border = '1px solid red'

        }
    }

})

btnReset.addEventListener('click', recarregarPagina)

