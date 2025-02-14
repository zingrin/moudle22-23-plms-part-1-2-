function isLeapYear(year){
    if (year % 4===0){
        return true;

    }
    else{
        return false;
    }
}
const islipi = isLeapYear(2043);
console.log(islipi)
// .......
function isLeapYear(year){
    if (year % 4===0){
        return true;

    }
    else{
        return false;
    }
}
const lipi = isLeapYear(2052);
console.log(lipi)
100 diye bhaag jabe na kintu 4 diye jai
  function isLeapYear2(year){
    if(year % 100 !==0 && year % 4===0){
        return true;
    }
   else if( year % 100 ===0 && year %  400===0){
    return true

    }
    else {
return false;
    }
  }
  const leap = isLeapYear2(2100);
  const leap2 = isLeapYear2(2400);
  const leap3 = isLeapYear2(1900);
  const leap4 = isLeapYear2(2052);
  console.log(leap,leap2,leap3,leap4)