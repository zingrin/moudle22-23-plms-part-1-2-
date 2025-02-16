/**
 * first ---> 100
 * 101to200---> 90
 * above200--> 70
 * **/ 

function layerDiscountTotal(quantity){
    const first100price = 100;
    const second100price = 90;
    const above200price = 70;
    if(quantity <= 100){
        const total = quantity * first100price;
return total;
    }
    else if(quantity <= 200){
        const first100total = 100 * first100price;
        const remainingQuantity = quantity - 100;
        const remainingTotal = remainingQuantity * second100price;

        const total = first100price + remainingTotal
return total;
    }
    else{
        const first100total = 100 * first100price;
        const second100price = 100 * second100price;
        const remainingQuantity = quantity - 200;
        const remainingTotal = first100total + second100total + remaining100total;
        return total;


    }

}
const total = layerDiscountTotal(7);
console.log(total);
