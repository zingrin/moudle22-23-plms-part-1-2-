/**
 * upto 1000:--->100
 * more than 101-200:--->99
 * more than 200:---> 70
 * 
 * **/ 


function discountedPrice(quantity){
    if(quantity <= 100){
const total = quantity * 100;
return total;
    }
    else if(quantity <= 200){
const total = quantity  * 99;
return total;
    }
    else{
        const total = quantity * 70;
        return total;
    }
}
const total = discountedPrice(5);
console.log(total);