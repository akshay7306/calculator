// display
function display(num){
    output.value +=num; // id.value=to get value
}

//clear =cl

function clearall(){
    output.value=''
}

function evaluateExp(){
    output.value=eval(output.value)
}

//remove last item

function removeLast(){
    currentExp=output.value
    output.value=currentExp.slice(0,-1)
}
