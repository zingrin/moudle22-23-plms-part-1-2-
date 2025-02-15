/**
 * chair--> 3 cft
 * table--> 10 cft
 * bed--> 50 cft
 * **/ 
function woodQuantity(chairQuantity,tableQuantity,bedQuantity){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;
    const chairTotalWood = chairQuantity * perChairWood;
    const tableTotalWood = tableQuantity * perTableWood ;
    const bedTotalWood = bedQuantity * perBedWood;
    const totalWood = chairTotalWood + tableTotalWood + bedTotalWood;
    return totalWood;
}
const wood = woodQuantity(0, 0, 1);
console.log('wood needed', wood);

/**
 *shirt price---> 500;

 *pant price ---> 300
 shoe price--->900
**/ 
function outFIT(shirt1,pant2,shoe3){
    const perShirt = 500;
    const perPant = 300;
    const perShoe = 900;
    const totalShirt =  shirt1 * perShirt;
    const totalPant = pant2 * perPant ;
    const totalShoe = shoe3 * perShoe ;
    const total = totalShirt + totalPant +totalShoe ;
    return total;
}
const dress = outFIT(0, 0, 1); 

console.log('dress needed', dress);