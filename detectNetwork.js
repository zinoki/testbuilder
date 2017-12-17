// Given a credit card number, this function should return a string with the
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy!
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  var cardLength = cardNumber.toString().length;
      var prefix = cardNumber.toString().split('')[0];
          prefix += cardNumber.toString().split('')[1]
    //var prefix = Math.floor(cardNumber/(Math.exp(10, (cardLength-2))));
  if (cardLength === 14 && (prefix === '38' || prefix === '39')) {
    return "Diner's Club";
  }
  if (cardLength === 15 && (prefix === '34' || prefix === '37')) {
    return 'American Express';
  }
  if (cardLength === 16 && (prefix === '51' || prefix === '52' || prefix === '53' || prefix === '54' || prefix === '55')) {
    return 'MasterCard';
  }
  if (Math.floor(prefix/10) === 4 && (cardLength === 13 || cardLength === 16 || cardLength === 19)) {
    return 'Visa'
  }
}

  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long
  // Visa always has a prefix of 4 and a length of 13, 16, or 19.
  // MasterCard always has a prefix of 51, 52, 53, 54, or 55 and a length of 16.

  // Once you've read this, go ahead and try to implement this function, then return to the console.
