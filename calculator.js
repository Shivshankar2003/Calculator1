var display=  document.querySelector("#inputBox");
function appendvalue(value){
    display.value += value;
}

function calculate(){
 display.value= eval(display.value)
}

function clearvalue(){
    display.value="";
}

function clearone(){
    let display= document.querySelector("#inputBox").value;
    display= display.substr(0,display.length-1);
    document.querySelector("#inputBox").value= display;
}



window.addEventListener('keyup' ,function(event){
    if(event.key>=0 && event.key<=9 || event.key=='+'||event.key=='*' ||event.key=='-' || event.key=='/' ||event.key=='%' ||event.key=='.'  ) {
        display.value+= event.key;
    }
    if(event.key == "Enter"){
        calculate();
    }
    if(event.key=="Backspace"){
        clearone();
    }
    if(event.key=="Delete"){
        clearvalue();
    }
})
