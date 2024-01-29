function binarySearch(arr,target){
let leftIndex = 0;
let rightIndex = arr.length;
while(leftIndex <= rightIndex) {
let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
if(target === arr[middleIndex]) {
return middleIndex;
} if(target < arr[middleIndex]) {
rightIndex = middleIndex - 1;
} else {
leftIndex = middleIndex + 1;
}
}
return -1;
}

console.log(binarySearch([-2,5,7,9,11],11)) //4
console.log(binarySearch([-2,5,7,9,11], 7)) //2
console.log(binarySearch([-2,5,7,9,11], 15)) // -1


//Big O = O[logn]
