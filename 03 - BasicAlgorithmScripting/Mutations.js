/**
 * Created by Karetko Victor on 25.02.2017.
 * Return true if the string in the first element of the array contains all
 * of the letters of the string in the second element of the array.
 */

function mutation(arr) {
    var result = true;
    for (var i = 0; i < arr[1].length; i++) {
        if (arr[0].toLowerCase().indexOf(arr[1][i].toLowerCase()) == -1) {
            result = false;
        }
    }
    return result;
}

mutation(["hello", "hey"]);