const form = document.querySelector('form');
const buttonSelectTips = document.getElementById('buttonSelectTips')
const inputBill = document.getElementById('inputBill');
const btn5Perc = document.getElementById('btn5Perc');
const btn10Perc = document.getElementById('btn10Perc');
const btn15Perc = document.getElementById('btn15Perc');
const btn25Perc = document.getElementById('btn25Perc');
const btn50Perc = document.getElementById('btn50Perc');
const tipAmountResult = document.getElementById('tipAmountResult')
const inputPeople = document.getElementById('inputPeople')
const inputPeopleContent= document.getElementById('inputPeopleContent')


buttonSelectTips.addEventListener('click',function(e){
    const evento = e.target
    const people = inputPeople.value
    errorPeople.innerText = ""
 
   
    if(evento == btn5Perc){
 
    result = (inputBill.value*0.05)/people

    if(result!=NaN && result!=Infinity){
        tipAmountResult.innerText = result
   
    }else{
        errorPeople.innerText = "Can't be zero"
        inputPeopleContent.style.border = '1px solid red'
        console.log(inputPeopleContent.style)
    }
    
     
  

    }else if(evento==btn10Perc){
        const result = inputBill.value*0.10
        tipAmountResult.innerText = result

        if(result!=NaN && result!=Infinity){
            tipAmountResult.innerText = result
       
        }else{
            errorPeople.innerText = "Can't be zero"
            inputPeopleContent.style.border = '1px solid red'
            console.log(errorPeople)
        }
        

    }else if(evento==btn15Perc){

        const result = inputBill.value*0.15
        tipAmountResult.innerText = result

        if(result!=NaN && result!=Infinity){
            tipAmountResult.innerText = result
       
        }else{
            errorPeople.innerText = "Can't be zero"
            inputPeopleContent.style.border = '1px solid red'
            console.log(errorPeople)
        }
        

    }else if(evento==btn25Perc){

        const result = inputBill.value*0.25
        tipAmountResult.innerText = result

        if(result!=NaN && result!=Infinity){
            tipAmountResult.innerText = result
       
        }else{
            errorPeople.innerText = "Can't be zero"
            inputPeopleContent.style.border = '1px solid red'
            console.log(errorPeople)
        }
        

    }else if(btn50Perc){
        
        const result = inputBill.value*0.50
        tipAmountResult.innerText = result

        if(result!=NaN && result!=Infinity){
            tipAmountResult.innerText = result
       
        }else{
            errorPeople.innerText = "Can't be zero"
            inputPeopleContent.style.border = '1px solid red'
            console.log(errorPeople)
        }
        

    }

    
})

