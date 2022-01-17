function declareRed(){
    localStorage.setItem("winner", "red");
    localStorage.setItem("status", "declared");

}


function declareBlue(){
    localStorage.setItem("winner", "blue");
    localStorage.setItem("status", "declared");

}


function declareYellow(){
    localStorage.setItem("winner", "yellow");
    localStorage.setItem("status", "declared");

}



function declareCancel(){
    localStorage.setItem("winner", "cancel");
    localStorage.setItem("status", "declared");

}


function clearValues()
{
    localStorage.setItem("isStartCalledOnce","false")
}