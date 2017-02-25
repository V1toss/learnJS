/**
 * Created by Karetko Victor on 25.02.2017.
 * Write a function which takes a ROT13 encoded string as input and returns a decoded string.
 * All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
 */
function rot13(str) { // LBH QVQ VG!
    var result = [];
    for (var i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) < 65 || str.charCodeAt(i) > 90) {
            result.push(str.charAt(i));
        } else if (str.charCodeAt(i) > 77) {
            result.push(String.fromCharCode(str.charCodeAt(i) - 13));
        } else {
            result.push(String.fromCharCode(str.charCodeAt(i) + 13));
        }
    }
    return result.join("");
}

rot13("SERR PBQR PNZC");