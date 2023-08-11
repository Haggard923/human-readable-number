module.exports = function toReadable (number) {
  const units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const doubleDigits = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen','eighteen', 'nineteen'];
  const dozens = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  const str = String(number);

  const getUnit = (str, a) => {
    for (let i = 0; i <= units.length; i++) {
      if (str[a] == i) return units[i];
    }
  }
  const getDoubleDigit = (str, a) => {
    for (let i = 1; i <= doubleDigits.length; i++) {
      if (str[a] == i) return doubleDigits[i-1];
    }
  }
  const getDozen = (str, a) => {
    for (let i = 1; i <= dozens.length; i++) {
      if (str[a] == i) return dozens[i-1];
    }
  }

  const isZero = (str) => {
    for (let i = 0; i <= str.length; i++) {
      if (str[i] == 0) return true;
    }
  }

  if (str.length == 3 && isZero(str)) {
    return (str[1] == 0 && str[2] == 0) ?
    `${getUnit(str, 0)} hundred` :
    (str[1] == 0) ? 
    `${getUnit(str, 0)} hundred ${getUnit(str, 2)}` : 
    `${getUnit(str, 0)} hundred ${getDozen(str, 1)}`;
  } else if (str.length == 3) {
    return (str[1] == 1) ?
    `${getUnit(str, 0)} hundred ${getDoubleDigit(str, 2)}` :
    `${getUnit(str, 0)} hundred ${getDozen(str, 1)} ${getUnit(str, 2)}`;
  }

  if (str.length == 2 && isZero(str)) {
    return `${getDozen(str, 0)}`;
} else if (str.length == 2) {
  return (str[0] == 1) ?
  `${getDoubleDigit(str, 1)}` :
  `${getDozen(str, 0)} ${getUnit(str, 1)}`
}
  
  return `${getUnit(str, 0)}`;
}
