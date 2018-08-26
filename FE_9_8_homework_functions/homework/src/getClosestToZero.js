function getClosestToZero() {
	let min = arguments[0];
	for(let i = 1; i < arguments.length; i++) {
		if (Math.abs(arguments[i]) < Math.abs(min)) {
			min = arguments[i];
		}
	}
	return min;
	/*getMin()
	let min = arguments[0];
	for(let i = 1; i < arguments.length; i++) {
		if (arguments[i] < min) {
			min = arguments[i];
		}
	}
	return min;*/
}


console.log(`
	getClosestToZero(9, 5, -4, -9): ${getClosestToZero(9, 5, -4, -9)} 
	getClosestToZero(9, 0, -4, -9): ${getClosestToZero(9, 0, -4, -9)}
	getClosestToZero(9, 2, -2, -9): ${getClosestToZero(9, 2, -2, -9)}
	`);