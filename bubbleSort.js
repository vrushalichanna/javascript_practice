function bubbleSortASC(arr) {
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < arr.length-1; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped)
}

function bubbleSortDSC(arr) {
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < arr.length-1; i++) {
            if (arr[i] < arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped)
}


const arr = [8,20,-2,4,-6]
bubbleSortASC(arr); //[-6,-2,4,8,20]
bubbleSortDSC(arr); //[20, 8, 4, -2, -6]
console.log(arr) //

//Big O = O[n^2]
