function merge(arr, p, q, r) {
    let sub_1 = arr.slice(p, q + 1),
        sub_2 = arr.slice(q + 1, r + 1);
    for (let i = p; i <= r; i++) {
        if (sub_1.length > 0 && sub_2.length > 0) {
            if (sub_2[0] < sub_1[0])
                arr[i] = sub_2.shift()
            else
                arr[i] = sub_1.shift()
        } else {
            arr[i] = sub_1.shift() ?? sub_2.shift()
        }
    }
}

function mergeSort(arr, p = 0, r = arr.length - 1) {
    if (p < r) {
        let q = Math.floor((p + r) / 2);
        mergeSort(arr, p, q);       // T(n/2)
        mergeSort(arr, q + 1, r)    // T(n/2)
        merge(arr, p, q, r)         // n
        //  T(n) = 2T(n/2) + n  ; i=1
        //       = 4T(n/4) + 2n ; i=2
        //       = 8T(n/8) + 3n ; i=3
        //       = 2^iT(n/(2^i)) + i*n
        //       = nT(1) + nlgn ; i=lgn
        //       = O(nlgn)
    }
}

let array = [5, 2, 4, 6, 1, 3, 7, 8];
console.log({ "Before sorting": array });
mergeSort(array);
console.log({ "After sorting": array });
