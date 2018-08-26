function getMin() {
	let min = arguments[0];
	for(let i = 1; i < arguments.length; i++) {
		if (arguments[i] < min) {
			min = arguments[i];
		}
	}
	return min;
}

console.log (
`getMin(-1, 8, 0, -30, 100): ${getMin (-1, 8, 0, -30, 100)}
getMin(1, 8, 0, 30, 100): ${getMin (1, 8, 0, 30, 100)}
getMin(30, 100, 986): ${getMin (30, 100, 986)}
`);