//o(n)T o(k)S
//n-->no. of competitions; k-->no of teams
const home_Team = 1;
function tournamentWinner(competitions, results) {
  // Write your code here.
  const scores = {};
  let current;
  let currentBestScore = "";
  scores[currentBestScore] = 0;
  for (let i = 0; i < competitions.length; i++) {
    const [homeTeam, awayTeam] = competitions[i];
    let res = results[i];
    current = res === home_Team ? homeTeam : awayTeam;

    updateScore(current, 3, scores);
    if (scores[current] > scores[currentBestScore]) {
      currentBestScore = current;
    }
  }
  return currentBestScore;
}
function updateScore(team, pts, scores) {
  if (team in scores) scores[team] += pts;
  else {
    scores[team] = pts;
  }
  // if(!(team in scores)) scores[team]=0
  // scores[team]+=pts
}

//Another way but not as effficint as above but this too takes o(n)T & o(k)S
function tournamentWinner(competitions, results) {
  // Write your code here.
  let resIdx = 0;
  let current;
  const num = {};
  for (let el of competitions) {
    if (results[resIdx] === 0) {
      current = el[1];
      if (current in num) {
        num[current] += 3;
      } else {
        num[current] = 3;
      }
    } else {
      current = el[0];
      if (current in num) {
        num[current] += 3;
      } else {
        num[current] = 3;
      }
    }
    resIdx++;
  }
  let largest = 0;
  let winner = "";
  for (let prop in num) {
    if (num[prop] > largest) {
      largest = num[prop];
      winner = prop;
    }
  }
  return winner;
}
