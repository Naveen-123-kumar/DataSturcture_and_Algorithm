
var distributeCandies = function (candyType) {
    let n = candyType.length;
    let count = n / 2;
    let set = new Set()
    for (let i = 0; i < n; i++) {
        set.add(candyType[i])
    }
    if (set.size >= count) {
        return count;
    } else {
        return set.size
    }

};