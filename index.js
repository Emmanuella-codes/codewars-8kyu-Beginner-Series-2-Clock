// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Beginner Series #2 Clock</h1>`;

const past = (h, m, s) => {
  let millisecondsInH = 3600000 // 60minutes * 60seconds * 1000ms
  let millisecondsInM = 60000 // 60seconds * 1000ms 
  let millisecondsInS = 1000 // 1second = 1000ms
  let total = (h * millisecondsInH) + (m * millisecondsInM) + (s * millisecondsInS)
  return total
}
console.log(past(1, 1, 1))
console.log(past(1, 0, 0))
console.log(past(0, 0, 1))
console.log(past(0, 1, 0))
