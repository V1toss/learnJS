/**
 * Created by Karetko Victor on 25.02.2017.
 * Truncate a string (first argument) if it is longer than the given maximum string
 * length (second argument). Return the truncated string with a ... ending.
 * Note that inserting the three dots to the end will add to the string length.
 * However, if the given maximum string length num is less than or equal to 3, then
 * the addition of the three dots does not add to the string length in determining the truncated string.
 */
function truncateString(str, num) {
    var result = '';
    if (num >= str.length) {
        result = str;
    } else if (num > 3 && num < str.length) {
        result = str.substring(0, num - 3) + '...';
    } else {
        result = str.substring(0, num) + '...';
    }
    return result;
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);
