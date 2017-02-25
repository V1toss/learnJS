/**
 * Created by Karetko Victor on 25.02.2017.
 * Use filter to create a new array with all the values from oldArray which are less than 6. The oldArray should not change.
 */

var oldArray = [1,2,3,4,5,6,7,8,9,10];

var newArray = oldArray.filter(function(val) {
    return val < 6;
});