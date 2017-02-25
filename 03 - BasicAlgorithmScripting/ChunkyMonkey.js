/**
 * Created by Karetko Victor on 25.02.2017.
 * Write a function that splits an array (first argument) into groups the
 * length of size (second argument) and returns them as a two-dimensional array.
 */
function chunkArrayInGroups(arr, size) {
    var resultArray = [];
    var index = 0;
    while(index < arr.length) {
        resultArray.push(arr.slice(index, index+size));
        index += size;
    }
    return resultArray;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
