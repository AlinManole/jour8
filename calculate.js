var arguments = process.argv.slice(2)

var a = parseInt(arguments[0])
var b = parseInt(arguments[1])
var operator = arguments[2]


function calculate(a , b , operator){
    if ( operator === "+"){
       var plus = a + b 
       console.log(plus)
    } else if ( operator === "-") {
        var minus = a - b
        console.log(minus)
    } else if ( operator === "x") {
        var times = a * b
        console.log(times)
    } else if ( operator === "/") {
        var division = a / b
        console.log(division)
    } else if ( operator === "%") {
        var modulo = a % b
        console.log(modulo)
    }
}
calculate(a,b,operator)