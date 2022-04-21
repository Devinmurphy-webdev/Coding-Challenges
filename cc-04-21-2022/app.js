// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

// Examples(Operator, value1, value2) --> output
// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7

//P:
//R:
//E:
//P: May be an if/then function. Take in values and align the first to establish the operation then use the other two values to complete the operation and return the output. 

function basicMath(operation, value1, value2){
    if(operation === '+'){
        return value1 + value2
    }else if(operation === '-'){
        return value1 - value2
    }else if(operation === '*'){
        return value1 * value2
    }else if(operation === '/'){
        return value1 / value2
    }
}
basicMath('+', 4, 8)
basicMath('-', 15, 18)
basicMath('*', 5, 5)
basicMath('/', 49, 7)