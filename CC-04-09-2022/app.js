// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example:
// 348597 => [7,9,5,8,4,3]
// 0 => [0]

//P: Are you ever given an empty array or undefined? What then? Are you always give digits? 
//R: Whatever number was given it is now split up into an array and the order of the numbers is reversed. 
//E: if we were given 9238=> [8,3,2,9]
//                    330=> [0,3,3]
//                    undefined => not a number 
//P: make a funciton that takes in a number 
function digitize(num){
    //make number a string and split it 
    //reverse array
    //make array integers again and return
    return String(num).split('').map(Number).reverse()
}

digitize(9238) //should return [8,3,2,9]
console.log(digitize(330),[0,3,3])