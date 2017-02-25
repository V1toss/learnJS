/**
 * Created by Karetko Victor on 25.02.2017.
 * Return the length of the longest word in the provided sentence.
 */

function findLongestWord(str) {
    var wordArray = str.split(' ');
    var maxLength = 0;
    for (var i = 0; i < wordArray.length; i++) {
        if (wordArray[i].length > maxLength) {
            maxLength = wordArray[i].length;
        }
    }
    return maxLength;
}

findLongestWord("The quick brown fox jumped over the lazy dog");