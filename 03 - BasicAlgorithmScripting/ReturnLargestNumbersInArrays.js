/**
 * Created by Karetko Victor on 25.02.2017.
 *
 * Return an array consisting of the largest number from each provided sub-array.
 * For simplicity, the provided array will contain exactly 4 sub-arrays.
 */

function largestOfFour(arr) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        var minValue = arr[i][0];
        for (var j = 0; j < arr[i].length; j++) {
            if (arr[i][j] > minValue) {
                minValue = arr[i][j];
            }
        }
        result.push(minValue);

    }
    // You can do this!
    return result;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);