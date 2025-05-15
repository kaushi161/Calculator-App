function appendToDisplay(value){                   //ilakkam type wenna
    document.getElementById("display").value += value;
}

function clearDisplay(){                             //type krpuwa delete krnn
    document.getElementById("display").value = "";
}

function calculate(){
    try{
        const result = eval(document.getElementById("display").value);
        document.getElementById("display").value = result;
    }catch{
        document.getElementById("display").value = "Error";
    }
}