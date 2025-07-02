let hasClicked = false;
let winStreak = 0;
let lossStreak = 0;
let num = Math.floor((Math.random() + 10) * (Math.random() * 8900 + 1));
console.log(num);
if (num % 7 === 0) {
  console.log(num + " is divisible by 7");
} else {
  console.log(num + " is NOT divisible by 7");
}
document.querySelector(".guess").textContent = num;
document.querySelector(".again").addEventListener("click", function () {
  document.querySelector(".meow").style.backgroundColor = "#000000";
  num = Math.floor((Math.random() + 10) * (Math.random() * 8900 + 1));
  document.querySelector(".guess").textContent = num;
  hasClicked = false;
  document.querySelector(".meow").style.backgroundImage = "none";
});

document.querySelector(".clickY").addEventListener("click", function () {
  if (num % 7 === 0 && !hasClicked) {
    document.querySelector(".guess").textContent = num + " is divisible by 7";
    document.querySelector(".meow").style.backgroundColor = "#008000";
    hasClicked = true;
    winStreak++;
    document.querySelector(".win").textContent = winStreak;
    // document.querySelector(".clickY").style.backgroundColor = "#FFFFFF";
  } else if (num % 7 !== 0 && !hasClicked) {
    document.querySelector(".guess").textContent =
      num + " is NOT divisible by 7";
    // document.querySelector(".clickN").style.backgroundColor = "#FFFFFF";
    document.querySelector(".meow").style.backgroundImage =
      "url('k4f58dzs.png')";
    hasClicked = true;
    lossStreak++;
    document.querySelector(".lose").textContent = lossStreak;
  }
});

document.querySelector(".clickN").addEventListener("click", function () {
  if (num % 7 !== 0 && !hasClicked) {
    document.querySelector(".guess").textContent =
      num + " is NOT divisible by 7";
    // document.querySelector(".clickN").style.backgroundColor = "#FFFFFF";
    document.querySelector(".meow").style.backgroundColor = "#008000";
    hasClicked = true;
    winStreak++;
    document.querySelector(".win").textContent = winStreak;
  } else if (num % 7 === 0 && !hasClicked) {
    document.querySelector(".guess").textContent = num + " is divisible by 7";
    document.querySelector(".meow").style.backgroundImage =
      "url('k4f58dzs.png')";
    hasClicked = true;
    lossStreak++;
    document.querySelector(".win").textContent = lossStreak;
    // document.querySelector(".clickY").style.backgroundColor = "#FFFFFF";
  }
});
