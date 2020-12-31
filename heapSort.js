function maxHeapify(heap, i, n = heap.length - 1) {
    let leftindex = i * 2 + 1, rightindex = i * 2 + 2,
        largestindex = i;
    if (leftindex <= n && heap[leftindex] > heap[i]) {
        largestindex = leftindex;
    }
    if (rightindex <= n && heap[rightindex] > heap[largestindex]) {
        largestindex = rightindex;
    }
    if (largestindex === i)
        return;
    swap(heap, i, largestindex)
    maxHeapify(heap, largestindex, n);
}// O(hi) ; i = root -> O(lgn)

function buildMaxHeap(arr) {
    for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) // n/2
        maxHeapify(arr, i); // O(hi) = O(lgn - lgi)
}// O(n)

function swap(arr, i, j) {
    [arr[j], arr[i]] = [arr[i], arr[j]];
}

function heapSort(arr) {
    let n = arr.length - 1 //last node index
    buildMaxHeap(arr)// O(n)
    for (let i = 0; i < arr.length; i++) {
        swap(arr, 0, n); //swap first and last nodes
        maxHeapify(arr, 0, --n) //maintain heap property while excluding last node
    }// O(nlgn)
}// T(n) = n + nlgn = O(nlgn)

let array = [4, 1, 3, 2, 16, 9, 10, 14, 8, 7];
console.log({ "Before sorting": array });
heapSort(array);
console.log({ "After sorting": array });
