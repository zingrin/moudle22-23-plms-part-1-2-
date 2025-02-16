// Task-1:
// Write a function to convert temperature from Celsius to Fahrenheit.

function Fahrenheit(Celsius){
    const Fahrenheit = (Celsius * 9/5)+32;
    
    return Fahrenheit + "f";
}
const output = Fahrenheit(99);
console.log(output);
// Task-2:
// You are given an array of numbers. Count how many times the a number is repeated in the array.

const  numbers = [5,6,11,12,98,5];

function findValue(values, inputValue) {
   let count = 0;
   for (const value of values) {
    if (value === inputValue) {
        count++
    }
    
}
return count;

}
   
const find = findValue(numbers , 5);
console.log(find);


// Task-3:
// Write a function to count the number of vowels in a string.
const str = "This is a sample string to count vowels.";
function vowelsString(strs){
    if (typeof strs !== 'string') {
        return "this is not string";
    }
strs = strs.toLowerCase();
let count = 0;
for (const value of strs) {
    if(value === "a" ){
        count++;
    }else if(value === "e" ){
        count++
    }else if(value === "i" ){
        count++
    }else if(value === "o" ){
        count++;
    }else if (value === "u" ) {
        count++
    }
} 
return count;
}  
const result = vowelsString(str);
console.log(result);

// Task-4:
// Write a function to find the longest word in a given string.


const sentence = "I am learning Programming to become a programmer";
const arr = sentence.split(' ')

function bigWord(data) {
    let bigWordSentence = '';
    for (let i = 0; i < data.length; i++) {
        if (data[i].length > bigWordSentence.length) {
            bigWordSentence = data[i];
        }
    }
    return bigWordSentence;
}
const result = bigWord(arr);
console.log(result)

// Task-5:
// Generate a random number between 10 to 20.
function randomNumer(max, min) {
    const random = Math.abs(Math.floor(Math.random() * (max - min + 1) + min));
    return random;
}
setInterval(() => {
    console.log(randomNumer(20, 10))
}, 100);

