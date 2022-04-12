function digitize(num){
    //make number a string and split it 
    //reverse array
    //make array integers again and return
    return String(num).split('').map(Number).reverse()
}

digitize(9238) //should return [8,3,2,9]
console.log(digitize(330),[0,3,3])
// can't do it this way. Have to use map. woof