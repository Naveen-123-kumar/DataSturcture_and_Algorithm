var findRelativeRanks = function (score) {
  let n = score.length;
  let result = [];
  for (let num of score) {
    let count = 0;
    for (let j = 0; j < n; j++) {
      if (score[j] > num) {
        count++;
      }
    }
    // console.log(count);
    switch (count) {
      case 0:
        result.push("Gold Medal");
        break;
      case 1:
        result.push("Silver Medal");
        break;
      case 2:
        result.push("Bronze Medal");
        break;
      default:
        result.push(`${count + 1}`);
    }
    // console.log("result",result)
  }

  return result;
};
let score = [10, 3, 8, 9, 4,1];
// findRelativeRanks(score);
console.log(findRelativeRanks(score));
