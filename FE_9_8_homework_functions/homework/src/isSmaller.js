function isSmaller( param1, param2 ) {
	return param1 === param2 ? false : !isBigger( param1, param2 );
}

console.log(	//DELETE
`isSmaller(1, 6): ${isSmaller(1, 6)} 
isSmaller(1, 1): ${isSmaller(1, 1)}
isSmaller(22, 6): ${isSmaller(22, 6)}
`);
