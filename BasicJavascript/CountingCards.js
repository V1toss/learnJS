
var count = 0;

function cc(card) {
  // Only change code below this line
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
  // Only change code above this line
}

// Add/remove calls to test your function.
// Note: Only the last will display
cc(2); cc(3); cc(7); cc('K'); cc('A');