// Sentence Smash
// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

// Example
// ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'
//Parameters: What about an empty string? what about one word string? 
//Return: returns concatinated strings
//Examples: 
//      ['Hi', 'my', 'name', 'is', 'devin'] => 'Hi my name is devin'
//      ['Coding', 'is', 'cool'] => 'Coding is cool'
//      ['We', 'don't', 'get', 'got'] => 'We don't get got'
//Psuedo code: write a function that concatinates strings 

function smash (words){
    return words.join(' ')
}

smash('Hi', 'my', 'name', 'is', 'devin') // => 'Hi my name is devin'
smash('cool') // => 'cool'
smash('We', 'don\'t', 'get', 'got') // => 'We don't get got'