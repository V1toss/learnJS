/**
 * Created by Karetko Victor on 25.02.2017.
 * Return the remaining elements of an array after chopping off n elements from the head.
 */
function slasher(arr, howMany) {

    return arr.slice(howMany, arr.length);
}

slasher([1, 2, 3], 2);
