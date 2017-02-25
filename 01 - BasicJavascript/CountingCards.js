/**
 * Created by Karetko Victor on 23.02.2017.
 *
 * Write a card counting function. It will receive a card parameter and increment or decrement
 * the global count variable according to the card's value (see table). The function will then
 * return a string with the current count and the string "Bet" if the count is positive, or "Hold"
 * if the count is zero or negative. The current count and the player's decision ("Bet" or "Hold")
 * should be separated by a single space.
 */

var count = 0;

function cc(card) {
  if (card >= 2 && card <= 6) {
    count++;
  } else if (card >= 7 && card <= 9) {
    
  } else {
    count--;
  }
  
  if (count <= 0) {
    return count + " Hold";
  } else {
    return count + " Bet";
  }
}

cc(2); cc(3); cc(7); cc('K'); cc('A');