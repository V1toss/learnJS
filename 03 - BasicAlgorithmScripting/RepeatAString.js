/**
 * Created by Karetko Victor on 25.02.2017.
 * Repeat a given string (first argument) num times (second argument). Return an empty string if num is not a positive number.
 */

function repeatStringNumTimes(str, num) {
    var result = '';
    if (num > 0) {
        for (var i = 0; i < num; i++) {
            result += str;
        }
    } else {
        result = '';
    }
    return result;
}

repeatStringNumTimes("abc", 3);