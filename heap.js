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

// let array = [4, 1, 3, 2, 16, 9, 10, 14, 8, 7];
// console.log({ "Before sorting": array });
// heapSort(array);
// console.log({ "After sorting": array });

//////////////////////////////////////////////////////////////

// heap operations

function extractMax(heap) {
    swap(heap, 0, heap.length - 1); //swap the root (max) and last node
    let val = heap.pop();           // remove the last node
    maxHeapify(heap, 0)             // maintain heap property
    return val
} // O(lgn)

function max(heap) { return heap[0]; } // O(1)

function increaseKey(heap, i, val) {
    if (val < heap[i])
        return;
    heap[i] = val;
    for (let parent = Math.floor((i - 1) / 2) // iterate through node(i) parents
        ; i > 0 && heap[parent] < heap[i]    // if node(i) is greater than the parent then swap
        ; i = parent, parent = Math.floor((parent - 1) / 2)) { // T(n) = lgi
        swap(heap, i, parent)
    }
} // O(lgn)

function heapInsert(heap, val) {
    heap.push(val)
    for (let i = heap.length - 1, parent = Math.floor((i - 1) / 2) // iterate through node(i) parents
        ; i > 0 && heap[parent] < heap[i]    // if node(i) is greater than the parent then swap
        ; i = parent, parent = Math.floor((parent - 1) / 2)) { // T(n) = lgi ; i = n
        swap(heap, i, parent)
    }
} // O(lgn)

// let heap = [16, 14, 10, 8, 12, 9, 3, 2, 4, 1, 7];
// console.log({ heap });
// extractMax(heap);
// console.log({ heap });
// heapInsert(heap, 11)
// console.log({ heap });