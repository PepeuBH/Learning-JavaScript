var sumFunction = function(a, b) { //var sum is a normal function
    return a + b
}

console.log(sumFunction(1,2))

//sumFunction is the same as sumArrowFunction

var sumArrowFunction = (a, b) => a + b; //this is an arrow function 

console.log(sumArrowFunction(1, 2))