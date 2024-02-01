function quickSortASC(arr) {
	if(arr.length < 2) {
  return arr;
  }
	let pivot = arr[arr.length-1];
  let left = [];
  let right = [];
    for (let i = 0; i < arr.length-1; i++) {
			if(arr[i] < pivot) {
      left.push(arr[i])
      } else {
      right.push(arr[i])
      }
    }
    return [...quickSortASC(left), pivot, ...quickSortASC(right)];
}

function quickSortDSC(arr) {
	if(arr.length < 2) {
  return arr;
  }
	let pivot = arr[arr.length-1];
  let left = [];
  let right = [];
    for (let i = 0; i < arr.length-1; i++) {
			if(arr[i] > pivot) {
      left.push(arr[i])
      } else {
      right.push(arr[i])
      }
    }
    return [...quickSortDSC(left), pivot, ...quickSortDSC(right)];
}


const arr = [8,20,-2,4,-6]
console.log(quickSortASC(arr)) // [-6, -2, 4, 8, 20]
console.log(quickSortDSC(arr)) // [20, 8, 4, -2, -6]

//Worst case = O[n^2]
//avg case = O[nlogn]
