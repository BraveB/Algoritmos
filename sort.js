customSort = (firstValue, secondValue)=> {
    const isLetter = (char) => /[a-zA-Z]/.test(char);
    const isDigit = (char) => /\d/.test(char);
    const isEven = (char) => parseInt(char) % 2 === 0;

    if (firstValue === secondValue) return 0;

    if (isLetter(firstValue) && isLetter(secondValue)) {
        if (firstValue.toUpperCase() === secondValue.toUpperCase()) {
            return firstValue.localeCompare(secondValue);
        }
        return firstValue.toUpperCase().localeCompare(secondValue.toUpperCase());
    }

    if (isDigit(firstValue) && isDigit(secondValue)) {
        if (isEven(firstValue) === isEven(secondValue)) {
            return parseInt(firstValue) - parseInt(secondValue);
        }
        return isEven(firstValue) ? 1 : -1;
    }

    if (isLetter(firstValue) && isDigit(secondValue)) return -1;
    if (isDigit(firstValue) && isLetter(b)) return 1;

    return 1;
}

sortCharacters = (inputStr) => {
  console.log("Sorted characters:", inputStr.split('').sort(customSort).join(''));
  };

const testingString = "0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^_`abcdefghijklmnopqrstuvwxyz{|}~€‚ƒ„…†‡ˆ‰Š‹ŒŽ‘’“”•–—˜™š›œžŸ¡¢£¤¥¦§¨©ª«¬®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿ";
console.log("Sorted characters:", testingString.split('').sort(customSort).join(''));
