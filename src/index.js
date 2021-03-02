module.exports = function toReadable (number) {
  let result = number ? '' : 'zero';
  let wS = number;
  let numBefore = false;
  let lib = [
    ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
  'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety', 'hundred'];

  while (wS > 0) {
    if (wS < 20) {
      if (numBefore) {
        result += ' ';
      }
      result += lib[0][wS];
      wS -= wS;
    }

    else if (wS < 100) {
      for (let i = 9; i > 0; i--) {
        if ((wS % (i * 10)) < 10) {
          if (numBefore) {
            result += ' ';
          }
          result += lib[i - 1];
          numBefore = true;
          wS = wS - (i * 10);
          i -= 10; //exit loop
        }
      }
    }

    else if (wS < 1000) {
      for (let i = 9; i > 0; i--) {
        if ((wS % (i * 100)) < 100) {
          result += lib[0][i] + ' hundred'
          numBefore = true;
          wS = wS - (i * 100);
          i -= 10; //exit loop
        }
      }
    }
    else {
      result = 'err'
    }
  }
  return result;
}
