export function getAvg(scores) {
  return getTotalScore(scores) / scores.length;
}

function getTotalScore(scores) {
  console.log("get total scores", scores);

  return scores.reduce((score, count) => {
    return score + count;
  });
}
