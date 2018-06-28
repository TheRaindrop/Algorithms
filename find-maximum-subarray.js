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

const findMaximumSubarray = (A, low, high) => {
    if (high === low) {
        return (low, high, A[low])
    } else {
        let mid = Math.ceil((low + high) / 2)
        let leftLow, leftHigh, leftSum = findMaximumSubarray(A, low, mid)
        let rightLow, rightHigh, rightSum = findMaximumSubarray(A, mid + 1, high)
        let crossLow, crossHigh, crossSum = findMaxCrossingSubarray(A, low, mid, high)

        if (leftSum >= rightSum && leftSum >= crossSum) {
            return { leftLow, leftHigh, leftSum }
        } else if (rightSum >= leftSum && rightSum >= crossSum) {
            return { rightLow, rightHigh, rightSum }
        } else {
            return { crossLow, crossHigh, crossSum }
        }
    }

}