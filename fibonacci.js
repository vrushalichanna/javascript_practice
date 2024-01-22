function fibonacci(n){
const fib = [0,1]
for(let i = 2; i<= n; i++) {
	fib[i] = fib[i - 1] + fib[i - 2]
}
return fib
}

console.log(fibonacci(1))
console.log(fibonacci(2))
console.log(fibonacci(3))
console.log(fibonacci(4))
console.log(fibonacci(5))
console.log(fibonacci(6))
console.log(fibonacci(8))

//Big O = O[n]

//recursive approch solution
function recursiveFibonacci(n){
if(n<2) {
	return n
} 

return recursiveFibonacci(n-1) + recursiveFibonacci(n-2)
}

console.log(recursiveFibonacci(1))
console.log(recursiveFibonacci(2))
console.log(recursiveFibonacci(4))
console.log(recursiveFibonacci(5))
console.log(recursiveFibonacci(6))
console.log(recursiveFibonacci(8))

//Big O = O[1]
