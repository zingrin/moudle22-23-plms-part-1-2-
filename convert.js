// 12 inch 1 feet
function inchToFeet(inch){
    const feet = inch /12;
return feet;
}
const shuvoHeight = inchToFeet(75);
// console.log(shuvoHeight);
// 75
function inchToFeet2(inch){
    const feetFraction = inch /12;
    const feetNumber = parseInt(feetFraction);
    const inchRemaining = inch % 12;
    const result = feetNumber + 'ft' + inchRemaining + 'inch'
    return result;
}

const shuvoHeight2 = inchToFeet2(75);
// console.log(shuvoHeight2);


// mile to kilometer
function mileToKilometer(mile){
    const kilo = mile * 1.60934;
    return kilo;
}
const kilo = mileToKilometer(8);
// console.log(kilo)

// kilometer to mile
function kilometerToMiles(kilo){
    const mile = kilo * 0.621371;
    return mile;
}
const mile = kilometerToMiles(10);
console.log(mile);