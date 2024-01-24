function linearSearch(arr,target){
for(let i = 0; i<= arr[i]; i++) {
if(arr[i] === target) {
	return i
} 
}
return -1;
}

console.log(linearSearch([10,2,5,4,7], 5))
console.log(linearSearch([30,24,16,78,55], 55))
console.log(linearSearch([10,2,5,4,7], 9))


//Big O = O[n]
