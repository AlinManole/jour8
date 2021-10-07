var arguments = process.argv.slice(2)
var num = parseInt(arguments[0])

function multiply(num) {
    if (!num) {
        console.log("Error !")
    } else if ( num === num ) {
        for( var i = 1 ; i <= 10; i++){
            var result = num * i
            console.log(`${num} x ${i} = ${result}`)
        }
    } else  {
        console.log("Error !")
    }
}

multiply(num)



