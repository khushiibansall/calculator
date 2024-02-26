let input=""
let result= document.getElementById("final")
let calculating= document.getElementById("calculating")

function display(){
    let displayText = input.replace(/\×/g, "*").replace(/\÷/g, "/");
    calculating.innerText = displayText;
}


document.querySelectorAll(".number, .operator").forEach(button => {
    button.addEventListener("click", ()=>{
        input= input+ button.textContent;
        display()
    })
}) 

document.getElementById("equals").addEventListener("click", ()=>{
    try{
        let output= eval(calculating.innerText);
        result.textContent="= " + output;
        calculating.textContent="";

    }catch (error) {
        result.textContent = "Error";
        calculating.textContent = "";
        input = "";
}})

document.getElementById("clear").addEventListener("click",()=>{
    input=""
    result.textContent="0"
    calculating.textContent=""
})
