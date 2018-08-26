function isPrime(parameter) {
	return parameter !== null && typeof parameter === 'number';
}

console.log(
`isPrime(): ${isPrime()}
isPrime(0): ${isPrime(0)}
isPrime(10): ${isPrime(10)}
isPrime(-5): ${isPrime(-5)}
isPrime(3.14): ${isPrime(3.14)}
isPrime('589'): ${isPrime('589')}
isPrime('gf'): ${isPrime('gf')}
isPrime('4f'): ${isPrime('4f')}
`);