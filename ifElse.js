var johnWeight = 100; //100Kg
var johnHeight = 1.80; //1.80m

var markWeight = 130;
var markHeight = 1.80;

var johnBMI = johnWeight / (johnHeight^2);
var markBMI = markHeight / (markHeight^2);

var markHasmoreBMIthanJohn = markBMI > johnBMI;

console.log('markHasmoreBMIthanJohn = '+ markHasmoreBMIthanJohn);

// **********************************************************************

if (markBMI < johnBMI) {
    console.log('John is higher');
} else {
    console.log('mark is higher');
}

/************ Nested If Else********
 * 
 * if () { 

    } else if () {
        if {

        } else {

        }
    } else {
}
************************************/
