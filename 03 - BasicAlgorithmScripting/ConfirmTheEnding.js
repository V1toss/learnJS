/**
 * Created by Karetko Victor on 25.02.2017.
 *
 * Check if a string (first argument, str) ends with the given target string (second argument, target).
 * Do not use the built-in method .endsWith() to solve the challenge.
 */

function confirmEnding(str, target) {
    return str.substring(str.length - target.length, str.length) == target;
}

confirmEnding("Bastian", "n");
