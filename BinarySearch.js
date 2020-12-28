function bSearch(arr, elem) {
    let lo = 0,
        hi = arr.length - 1,
        mid = Math.floor((lo + hi) / 2);
    for (let i = arr.length; Math.floor(i) > 0; i /= 2) {
        if (elem === arr[mid])
            return mid;
        else if (elem < arr[mid])
            hi = mid - 1;
        else if (elem > arr[mid])
            lo = mid + 1;
        mid = Math.floor((lo + hi) / 2);
    }
    return -1
}

function bSearchRecursive(arr, elem, lo = 0, hi = arr.length - 1) {
    let mid = Math.floor((lo + hi) / 2);
    if (elem === arr[mid])
        return mid;
    else if (lo >= hi)
        return -1
    else if (elem < arr[mid])
        return bSearchRecursive(arr, elem, lo, mid - 1);
    else if (elem > arr[mid])
        return bSearchRecursive(arr, elem, mid + 1, hi);
}

let array = [1, 3, 4, 8, 16, 234, 500];
console.log({ array });
console.log(`'3' is in index ${bSearchRecursive(array, 3)}`)