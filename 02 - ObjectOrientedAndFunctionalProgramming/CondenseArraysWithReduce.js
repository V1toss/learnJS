/**
 * Created by Karetko Victor on 25.02.2017.
 *
 * Use the reduce method to sum all the values in array and assign it to singleVal.
 */

var array = [4,5,6,7,8];
var singleVal = 0;

singleVal = array.reduce(function(prevVal, currVal) {
    return prevVal + currVal;
}, 0);