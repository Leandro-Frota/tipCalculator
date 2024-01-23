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
const inputBillContent = document.getElementById('inputBillContent')
const tipAccountResult = document.getElementById('tipAccountResult')
const btnReset = document.getElementById('btnReset')
const errorPeople = document.getElementById('errorPeople')


function recarregarPagina() {
    window.location.reload()
}

form.btn5Perc.addEventListener('click', function () {
    inputPeopleContent.style.border = "none"
    inputBillContent.style.border = "none"
    const people = inputPeople.value
    const bill = inputBill.value
    const result = (bill * 0.05) / people
    const resultPorPerson = (bill / people) + result
    errorPeople.innerText = ""

    if (people > 0 && bill > 0) {
        tipAmountResult.innerText = result.toFixed(2)
        tipAccountResult.innerText = resultPorPerson.toFixed(2)
    } else {
        errorPeople.innerText = "Can't be zero"
        inputPeopleContent.style.border = '1px solid red'
    }
})

form.btn10Perc.addEventListener('click', function () {
    inputPeopleContent.style.border = "none"
    inputBillContent.style.border = "none"
    const people = inputPeople.value
    const bill = inputBill.value
    const result = (bill * 0.10) / people
    const resultPorPerson = (bill / people) + result
    errorPeople.innerText = ""

    if (people > 0 && bill > 0) {
        tipAmountResult.innerText = result.toFixed(2)
        tipAccountResult.innerText = resultPorPerson.toFixed(2)
    } else {
        errorPeople.innerText = "Can't be zero"
        inputPeopleContent.style.border = '1px solid red'
    }

})

form.btn15Perc.addEventListener('click', function () {
    inputPeopleContent.style.border = "none"
    inputBillContent.style.border = "none"
    const people = inputPeople.value
    const bill = inputBill.value
    const result = (bill * 0.15) / people
    const resultPorPerson = (bill / people) + result
    errorPeople.innerText = ""

    if (people > 0 && bill > 0) {
        tipAmountResult.innerText = result.toFixed(2)
        tipAccountResult.innerText = resultPorPerson.toFixed(2)
    } else {
        errorPeople.innerText = "Can't be zero"
        inputPeopleContent.style.border = '1px solid red'
    }
})

form.btn25Perc.addEventListener('click', function () {
    inputPeopleContent.style.border = "none"
    inputBillContent.style.border = "none"
    const people = inputPeople.value
    const bill = inputBill.value
    const result = (bill * 0.25) / people
    const resultPorPerson = (bill / people) + result
    errorPeople.innerText = ""

    if (people > 0 && bill > 0) {
        tipAmountResult.innerText = result.toFixed(2)
        tipAccountResult.innerText = resultPorPerson.toFixed(2)
    } else {
        errorPeople.innerText = "Can't be zero"
        inputPeopleContent.style.border = '1px solid red'
    }
})

form.btn50Perc.addEventListener('click', function () {
    inputPeopleContent.style.border = "none"
    inputBillContent.style.border = "none"
    const people = inputPeople.value
    const bill = inputBill.value
    const result = (bill * 0.50) / people
    const resultPorPerson = (bill / people) + result
    errorPeople.innerText = ""

    if (people > 0 && bill > 0) {
        tipAmountResult.innerText = result.toFixed(2)
        tipAccountResult.innerText = resultPorPerson.toFixed(2)
    } else {
        errorPeople.innerText = "Can't be zero"
        inputPeopleContent.style.border = '1px solid red'
    }
})

form.inputPercTip.addEventListener('change', function () {

    const customTip = inputPercTip.value
    const people = inputPeople.value
    const bill = inputBill.value
    const result = (bill * (customTip / 100)) / people
    const resultPorPerson = (bill / people) + result
    errorPeople.innerText = ""

    console.log(result)

    if (people > 0 && bill > 0) {
        tipAmountResult.innerText = result.toFixed(2)
        tipAccountResult.innerText = resultPorPerson.toFixed(2)
        inputPeopleContent.style.border = "none"
        inputBillContent.style.border = "none"
    } else {
        errorPeople.innerText = "Can't be zero"
        inputPeopleContent.style.border = '1px solid red'
        inputBillContent.style.border = '1px solid red'
        inputPercTip.value = ""
    }
})

btnReset.addEventListener('click', recarregarPagina)

