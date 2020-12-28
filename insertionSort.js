function insertionSort(arr) {
    let tmp, j;
    for (let i = 1; i < arr.length; i++) {
        tmp = arr[i];
        for (j = i - 1; j > -1 && arr[j] > tmp; j--) {
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = tmp;
    }
}

let array = [5, 2, 4, 6, 1, 3, 7, 8];
console.log({ "Before sorting": array });
insertionSort(array);
console.log({ "After sorting": array });
