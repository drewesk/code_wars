/*
 Basic regex tasks. Write a function that takes in a numeric code of any length. The function will check if the code begins with 1, 2, or 3 and return true if so. Return false otherwise.

 You can assume the input will always be a nuber.
 */

function validateCode (number) {
  var validate = number
    .toString()
    .charAt(0)
    .match(/[1-3]/g);

  if(validate) {
    return true;
  } else {
    return false;
  }
}
