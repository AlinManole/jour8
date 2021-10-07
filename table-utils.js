var arguments = process.argv.slice(2)

var num = parseInt(arguments[0])

function multiply(num) {
    if (!num) {
        console.log("Error !")
    } else if ( num === num ) {
        for( var i = 0 ; i <= 10; i++){
            var result = num * i
            console.log(`${num} x ${i} = ${result}`)
        }
    } else  {
        console.log("Error !")
    }
}

multiply(num)


console.log("=== Break Line ====")
console.log("=== Break Line ====")


function addition(num) {
    if (!num) {
        console.log("Error !")
    } else if ( num === num ) {
        for( var i = 0 ; i <= 10; i++){
            var result = num + i
            console.log(`${num} + ${i} = ${result}`)
        }
    } else  {
        console.log("Error !")
    }
}

addition(num)

module.exports = {
    multiply, addition
}


// module.exports = addition;
// module.exports = multiply;
