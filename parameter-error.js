function multiply(num1,num2) {
    if (typeof num1 !== 'number' || typeof num2 !=='number') {
      return 'please provide a number'  
    }
    const mult = num1 * num2;
    return mult;
    
}
const result = multiply(5,'seven')
console.log(result);
function fullName(first, second) {
  if(typeof first !== 'name' || typeof second !== 'name'){
    return 'please should be string'
  }
  const name = first + "" + second;
  return name;
}
const output = fullName('jonny', 'meaw');
console.log(output);

function getPrice(product) {
  if(typeof product !== 'object'){
    return 'please provide a number'
  }
  const price = product.price;
  return price;
}
const price = getPrice({name:'hair dry',price: 550, color: 'black'})
const price = getPrice(5);
console.log(price);
function getSecond(numbers) {
  if (Array.isArray(numbers) === false){
    return 'please provide an arry'
  }
  const number = numbers[1];
  return second;
  
}
const second = getPrice(67);
console.log(second);