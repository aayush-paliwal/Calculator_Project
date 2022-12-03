// To print history on the screen
function getHistory(){
    return document.getElementById("history-value").innerText;
}

function printHistory(num){
    document.getElementById("history-value").innerText=num;
}

// To print result on the screen
function getOutput(){
    return document.getElementById("result-value").innerText;
}

function printOutput(num){
    if(num==""){
        document.getElementById("result-value").innerText=num;
    }
    else{
        document.getElementById("result-value").innerText=numberFormat(num);
    }
}

// For getting the comma separated value
function numberFormat(num){
    if(num=="-"){
        return "";
    }
    var n=Number(num);
    var value = n.toLocaleString("en-IN");     // To separate my number by commas
    return value;   
}

function reverseNumberFormat(num){
    return Number(num.replace(/,/g,""));
}

var operator=document.getElementsByClassName("operator");
for(var i=0;i<operator.length;i++){
    operator[i].addEventListener("click",function(){
        if(this.id=="clear"){
            printHistory("");
            printOutput(""); 
        }
        else if(this.id=="backspace"){
            var output = reverseNumberFormat(getOutput()).toString();
            if(output){                // If output has a value
                output = output.substr(0,output.length-1);
                printOutput(output);
            }
        }
        else{
            var output=getOutput();
            var history=getHistory();
            if(output=="" && history!=""){
                if(isNaN(history[history.length-1])){
                    history=history.substr(0,history.length-1);
                }
            }
            if(output!="" || history!=""){
                output=output=="" ? output:reverseNumberFormat(output);
                history=history+output;
                if(this.id=="="){
                    var result=eval(history);  
                    printOutput(result);
                    printHistory("");
                }
                else{
                    history=history+this.id;
                    printHistory(history);   
                    printOutput("");
                }
            }
        }
    })
}

var numbers=document.getElementsByClassName("number");
for(var i=0;i<numbers.length;i++){
    numbers[i].addEventListener("click",function(){
        var output=reverseNumberFormat(getOutput());
        if(output!=NaN){             // NaN - Not a Number
            output=output+this.id;
            printOutput(output);
        }
    });
}
