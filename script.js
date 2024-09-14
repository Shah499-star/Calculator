const resultElement=document.getElementById("result")
const clearBtn=document.getElementById("clear-button")
const deleteBtn=document.getElementById("delete-button")
const divisionBtn=document.getElementById("division-button")
const multiplyBtn=document.getElementById("multiply-button")
const substractBtn=document.getElementById("substract-button")
const addBtn=document.getElementById("add-button")
const decimalBtn=document.getElementById("decimal-button")
const equalBtn=document.getElementById("equal-button")
const numberBtns=document.querySelectorAll(".number")

// initialize the variables
let result='';
let operation='';
let previousOperand=0; 
// function to appned number
const appendNumber=(number)=>{
    if(number==='.'&& result.includes('.')) return
result +=number;
updateDisplay();

}


const updateDisplay=()=>{
    
    if(operation){
    resultElement.innerText=`${previousOperand}${operation}${result}`
    }
    else{
        resultElement.innerText=result;
    }
}
// function to select operators
const selectOperator=(operatorValue)=>{
if(result==='') return
if(operation !=='' && previousOperand !==''){
    calculateResult();
}
operation=operatorValue;
previousOperand=result;
result='';
updateDisplay();
}
// function to calculate results
const calculateResult=()=>{
let evaluteResult;
let pre=parseFloat(previousOperand);
let current=parseFloat(result)
if(isNaN(pre) || isNaN(current)) return
switch (operation) {
    case '+':
        evaluteResult=pre + current
        break;
    case '-':
        evaluteResult=pre - current
        break;
    case '*':
        evaluteResult=pre * current
        break;
    case '/':
        evaluteResult=pre / current
        break;

    default:
        return;
}
result=evaluteResult.toString()
operation=''
previousOperand=''
}
// function to clear display
const claerDisplay=()=>{
    result='';
    previousOperand='';
    operation='';
    updateDisplay()
}
// delete last digit
const deleteLastDigit=()=>{
    if(result==='') return
    result=result.slice(0,-1)
    updateDisplay()
}
// add event listner to numbers
numberBtns.forEach((button=>{
    button.addEventListener('click',()=>{
        appendNumber(button.innerText);
        
    })
}))
decimalBtn.addEventListener('click',()=>appendNumber('.'))
addBtn.addEventListener('click',()=>selectOperator('+'))
substractBtn.addEventListener('click',()=>selectOperator('-'))
multiplyBtn.addEventListener('click',()=>selectOperator('*'))
divisionBtn.addEventListener('click',()=>selectOperator('/'))
equalBtn.addEventListener('click',()=>{
    if(result==='') return
    calculateResult();
    updateDisplay();
})
clearBtn.addEventListener('click',claerDisplay)
deleteBtn.addEventListener('click',deleteLastDigit)

