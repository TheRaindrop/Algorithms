const findMaxCrossingSubarray = (A, low, mid, high) => {
    let leftSum, rightSum = Number.NEGATIVE_INFINITY
    let sum = 0
    let maxLeft, maxRight = mid
    for (let i = mid; i >= low; i--) {
        sum += A[i]
        if (sum > leftSum) {
            leftSum = sum
            maxLeft = i
        }
    }
    sum = 0
    for (let i = mid + 1; i <= high; i++) {
        sum += A[j]
        if (sum > rightSum) {
            rightSum = sum
            maxRight = j
        }
    }
    return (maxLeft, maxRight, leftSum + rightSum)
}