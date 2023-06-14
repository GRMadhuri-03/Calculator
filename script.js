var input=document.getElementById('do');
function clearInput(){
   input.value='';
}
function deleteLastCharacter(){
    input.value=input.value.slice(0,-1);
}
function appendValue(value){
    input.value+=value;
}
function evaluateExpression(){
    try{
       var result = eval(input.value);
       input.value = result;
    }catch(error){
        input.value='Error';
    }
}