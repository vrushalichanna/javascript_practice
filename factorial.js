function factorial(n){
let result = 1;
for(let i=2; i<= n; i++) {
	result = result * i;
}
return result
}

console.log(factorial(1))
console.log(factorial(2))
console.log(factorial(3))
console.log(factorial(4))
console.log(factorial(5))
console.log(factorial(6))
console.log(factorial(8))

//Big O = O[n]

//rescursive Factorial Approch solution
function recursiveFactorial(n){
if(n === 0) {
	return 1
} 

return n * recursiveFactorial(n-1)
}

console.log(recursiveFactorial(1))
console.log(recursiveFactorial(2))
console.log(recursiveFactorial(4))
console.log(recursiveFactorial(5))
console.log(recursiveFactorial(6))
console.log(recursiveFactorial(8))

//Big O = O[n]
