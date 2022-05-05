let equation = "0"
let result = eval(equation)
let firstButton = true
let ids = ["1","2","3","4","5","6","7","8","9","0","+","-","x","/","C","="]
let output = document.getElementById("output")

for(index in ids){
    let id = ids[index]
    let element = document.getElementById("num"+id)
    element.onclick = () => {click(id)}
}

function click(id){
    let last = getLastInput()
    console.log(last)

    if(last === "+" || last === "-" || last === "x" || last === "/"){
        if(id === "+" || id === "-" || id === "x" || id === "/"){
            removeLastInput() 
        }
    }

    if(id === "C"){
        equation = "0"
        updateMonitor(equation)
    }else if(id === "="){
        console.log(equation)
        result = eval(equation.replace("x", "*"))
        equation = result.toString()
        updateMonitor(result)
    }else{
        equation += id
        updateMonitor(equation)
    }
}

function updateMonitor(refresh){
    output.value = refresh
}

function getLastInput(){
    return equation.charAt(equation.length - 1)
}

function removeLastInput(){
    equation = equation.slice(0, -1)
}

//Change X to asterisk in program
//Changed X to an asterisk, however the display is a * which is what i dont want.., fine for now.
