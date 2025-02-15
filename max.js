const disha = 56;
const salman = 95;
if(disha > salman){
    console.log('disha will get the strawberry')
}
else{
    console.log('salman will get strawberry')
} 

function getMax(num1, num2){
    if(num1 > num2){
        return num1;
    }
    else{
        return num2
    }
}
const max = getMax(78,100);
console.log('max of two is',max)


3ta songkha ki vbe hiseb kore

const jim = 80;
const tim = 89;
const kim = 168;
if(jim > tim && jim > kim){
    console.log('jim is the ultimate boss')
}
else if(tim > jim && tim > kim){
    console.log('tim is the boss')
}
else{
    console.log('kim is the kardshines boss')
}
// function
function maxOfThree (jim,tim,kim){
    if(jim > tim && jim > kim){
        return jim;
    }
    else if(tim > jim && tim > kim){
        return tim;
    }
    else{
        return kim;
    }
}
const max = maxOfThree(jim,tim,kim);
console.log('max of the numbers is',max);

// unlimited songkha khettre ja use korte hbe
const max = Math.max(12,1,56,5,65,8,1,99,1);
console.log('max isusing Math.max', max)