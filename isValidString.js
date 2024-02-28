isValidOpenCloseString = (stringToTest) => {
    let count = 0 ;
    stringToTest.split('').every(character => {
      if(character === '('){
        count++;
    } else if(character === ')'){
      count--;
    }
    return count >= 0 ;
  })
  return count === 0 ? `${stringToTest} is valid` : `${stringToTest} is invalid`;
};

//should return valid
console.log(isValidOpenCloseString('()'));
//should return valid
console.log(isValidOpenCloseString('(hello, world)'));
//should return invalid
console.log(isValidOpenCloseString(')('));
//should return valid
console.log(isValidOpenCloseString('(Hello (,) world (!))'));
//should return invalid
console.log(isValidOpenCloseString(')()('));
//should return invalid
console.log(isValidOpenCloseString('())(()'));
