// Given a credit card number, this function should return a string with the
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy!
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function (cardNumber) {
  var cardString = cardNumber.toString();
  var cardLength = cardString.length;
  var prefix1 = Number(cardString.slice(0, 1));
  var prefix2 = Number(cardString.slice(0, 2));
  var prefix3 = Number(cardString.slice(0, 3));
  var prefix4 = Number(cardString.slice(0, 4));
  var prefix6 = Number(cardString.slice(0, 6));

  if (cardLength === 14 && (prefix2 === 38 || prefix2 === 39)) {
    return "Diner's Club";
  }
  if (cardLength === 15 && (prefix2 === 34 || prefix2 === 37)) {
    return 'American Express';
  }
  if ((cardLength === 13 || cardLength === 16 || cardLength === 19) && (prefix1 === 4 && prefix4 !== 4903 && prefix4 !== 4905 && prefix4 !== 4911 && prefix4 !== 4936)) {
    return 'Visa';
  }
  if (cardLength === 16 && (prefix2 >= 51 && prefix2 <= 55)) {
    return 'MasterCard';
  }
  if ((cardLength === 16 || cardLength === 19) && ((prefix3 >= 644 && prefix3 <= 649) || prefix4 === 6011 || prefix2 === 65)) {
      return 'Discover';
  }
  if ((cardLength >= 12 && cardLength <= 19) && (prefix4 === 5018 || prefix4 === 5020 || prefix4 === 5038 || prefix4 === 6304)) {
      return 'Maestro';
      }

  if ((cardLength >= 16 && cardLength <= 19) && ((prefix6 >=  622126 && prefix6 <= 622925) || (prefix3 >= 624 && prefix3 <= 626) || (prefix4 >= 6282 && prefix4 <= 6288))) {
      return 'China UnionPay';
  } 

  if ((cardLength === 16 || cardLength === 18 || cardLength === 19) && (prefix4 === 4903 || prefix4 === 4905 || prefix4 === 4911 || prefix4 === 4936 || prefix4 === 6333 || prefix4 === 6759 || prefix6 === 564182 || prefix6 === 633110)) {
      return 'Switch';
  }

}

  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long
  // Visa always has a prefix of 4 and a length of 13, 16, or 19.
  // MasterCard always has a prefix of 51, 52, 53, 54, or 55 and a length of 16.

  // Once you've read this, go ahead and try to implement this function, then return to the console.
