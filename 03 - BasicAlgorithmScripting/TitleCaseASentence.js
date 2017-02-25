/**
 * Created by Karetko Victor on 25.02.2017.
 * Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
 */
function titleCase(str) {
    var wordArray = str.toLowerCase().split(' ');
    var newArray = [];
    for (var i = 0; i < wordArray.length; i++) {
        newArray[i] = wordArray[i][0].toUpperCase() + wordArray[i].substring(1);
    }
    return newArray.join(' ');
}

titleCase("I'm a little tea pot");