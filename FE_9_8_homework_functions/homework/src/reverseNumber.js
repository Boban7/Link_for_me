function reverseNumber(toReverse) {
  const NEGATIVE = toReverse < 0;
    
	let reverse = NEGATIVE ? '-' : '';    
	let stringToReverse = toReverse.toString();

	const LENGTH = stringToReverse.length;

    stringToReverse = NEGATIVE ? stringToReverse.substr(1) : stringToReverse;
	  
    for(let i = LENGTH; i > 0;){
      i--;
      reverse += stringToReverse.substr(i, 1);
    }
	return Number(reverse); 
}

console.log(`
reverseNumber(123) ${reverseNumber(123)}
reverseNumber(-456) ${reverseNumber(-456)}
reverseNumber(1000) ${reverseNumber(1000)}
reverseNumber(1010) ${reverseNumber(1010)}
`);
