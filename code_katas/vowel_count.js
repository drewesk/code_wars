/*
 Return the number (count) of vowels in the given string.

 We will consider a, e, i, o, and u as vowels for this Kata.
 */

function getCount(str) {
  var vowelsCount;
  var match = str.match(/[aeiou]/gi);
  if (match === null) {
    vowelsCount = 0;
  } else {
    vowelsCount = match.length;
  }

  return vowelsCount;
}
