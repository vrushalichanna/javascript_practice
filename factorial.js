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
