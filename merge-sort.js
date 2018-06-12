const merge = (A, p, q, r) => {
    let n1 = q - p + 1
    let n2 = r - q
    let L = new Array(n1)
    let R = new Array(n2)
    for (let i = 0; i < n1; i++) {
        L[i] = A[p + i]
    }
    for (let i = 0; i < n2; i++) {
        R[i] = A[q + 1 + i]
    }
    // L[n1] = Number.POSITIVE_INFINITY
    // R[n2] = Number.POSITIVE_INFINITY
    let i = 0, j = 0
    for (let k = p; k <= r; k++) {
        if (L[i] <= R[j]) {
            A[k] = L[i]
            i++
        } else {
            A[k] = R[j]
            j++
        }
        if (i === L.length) {
            A = A.concat(R.splice(j))
            break
        } else if (j = R.length) {
            A = A.concat(L.splice(i))
            break
        }
    }
    console.log(A)
}

const mergeSort = (A, p = 0, r = A.length - 1) => {
    if (p < r) {
        let q = Math.floor((p + r) / 2)
        mergeSort(A, p, q)
        mergeSort(A, q + 1, r)
        merge(A, p, q, r)
    }
}
mergeSort([2,4,5,6,84,3,5])