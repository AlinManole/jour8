const prompt = require("prompt");
const { resourceLimits } = require("worker_threads");

  prompt.start();

function playAgain(){

    prompt.get(['number'], function (err, result) {

    var min = 1;
    var max = 100;
 
    var number = Math.floor(Math.random() * (max - min + 1) + min)

    if (!result.number) {
        console.log("Error !!!")
    } else if (result.number < number ) {
        console.log("C'est plus !")
        playAgain()
    } else if ( result.number > number ){
        console.log("C'est moins !")
        playAgain()
    } else if ( result.number === number) {
        console.log("Bravo !!")
        playAgain()
    }

  });

}

playAgain()




