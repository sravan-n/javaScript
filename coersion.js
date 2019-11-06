/************************************************************
 * JavaScript does type coersion
 * == Vs ===
 * === is strict euality, both type and value should be same
**************************************************************/

var x = '23'; // string 23
var y = 23; // number 23

if ( x == y) {
    console.log('JS does type coersion: 23 string == 23 number')
}

if ( x === y) {
    console.log('strict: type and value same');
} else {
    console.log('strict: type and value not same');
}
