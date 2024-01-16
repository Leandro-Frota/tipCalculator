const inputBill = document.getElementById('inputBill');
const btn5Perc = document.getElementById('btn5Perc');
const btn10Perc = document.getElementById('btn10Perc');
const btn15Perc = document.getElementById('btn15Perc');
const btn25Perc = document.getElementById('btn25Perc');
const btn50Perc = document.getElementById('btn50Perc');
const form = document.querySelector('form');

console.log(form)

form.addEventListener('click',function(e){
    const evento = e.target
    if(evento == btn5Perc){
    const result = inputBill.value*0.05
    console.log(result)
    console.log(evento)
    }else if(evento==btn10Perc){
        const result = inputBill.value*0.10
        console.log(result)
        console.log(evento)

    }else if(evento==btn15Perc){
        const result = inputBill.value*0.15
        console.log(result)
        console.log(evento)
    }else if(evento==btn25Perc){
        const result = inputBill.value*0.25
        console.log(result)
        console.log(evento)
    }else if(btn50Perc){
        const result = inputBill.value*0.50
        console.log(result)
        console.log(evento)
    }
})

