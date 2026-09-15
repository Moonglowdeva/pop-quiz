let score = 0;

let awnserInput;
let awnser;

// question 1 <3
awnserInput = prompt(`Does Callie main a Roller?
[1] true
[2] false
`);
awnser = Number(awnserInput);
if (Number.isNaN(awnser)) {
  alert("Please enter a number.");
} else if (awnser < 1 || awnser > 2) {
  alert("please enter 1 or 2.");
} else {
  if (awnser === 1) {
    alert("Correct!");
    score = score + 1;
  } else {
    alert("Incorrect.");
  }
}

// question 2 <3
answerInput = prompt(`What weapon does Marie use?
[1] E-liter 4K
[2] Snipewriter 5H
[3] Splat  Charger
[4] Classic Squiffer
`);
answer = Number(answerInput);
if (Number.isNaN(answer)) {
  alert("Please enter a number.");
} else if (answer < 1 || answer > 4) {
  alert("Please enter 1, 2, 3, or 4.");
} else {
  if (answer === 3) {
    alert("Correct!");
    score = score + 1;
  } else {
    alert("Incorrect.");
  }
}

// question 3 <3
answerInput = prompt(`What do the squid sisters say after their radio shows?
[1] Ink up
[2] Stay Fresh
[3] Stay Salty
`);
answer = Number(answerInput);
if (Number.isNaN(answer)) {
  alert("Please enter a number.");
} else if (answer < 1 || answer > 3) {
  alert("Please enter 1, 2, or 3.");
} else {
  if (answer === 2) {
    alert("Correct!");
    score = score + 1;
  } else {
    alert("Incorrect.");
  }
}

alert(`You've finished the quiz.
Your final score is ${score} out of 3.
`);

if (score === 0) {
  alert("You need to study more!");
} else if (score === 3) {
  alert("Wow! You're an expert!");
} else {
  alert("Not Bad!");
}
