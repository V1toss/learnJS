/**
 * Created by Karetko Victor on 25.02.2017.
 * Reverse the provided string.
 */
function palindrome(str) {
    var strReplace = str.replace(/[.,\/#!$%\^&\*;: {}=\-_`~()]/g,"").toLowerCase();
    var strReverse = strReplace.split('').reverse();

    return strReverse.join('') == strReplace;
}



palindrome("eye");

