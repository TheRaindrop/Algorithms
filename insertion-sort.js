const insertionSort = (a) => {
    for (let i = 1; i < a.length; i++) {
        let key = a[i]  //this is the insertion-sort's point
        let j = i - 1
        while (j >= 0 && a[j] > key) {
            a[j+1] = a[j]
            j--
        }
        // for (j = i - 1; j >= 0; j--){
        //     if (a[j] > key) a[j+1] = a[j]
        //     else break
        // }
        a[j+1] = key
    }
    return a
}