//Gamelet: a starting point for writing games
//Author:
//Version: 1.0

/*Instructions:
include gamelet.js in an HTML document with and id of 'ball'.
The script will detect when the left or right arrow is pressed
and will move the ball element accordingly*/

const ball = document.getElementById("ball"); //Get the ball
document.addEventListener("keydown", handlekeyPress); //listen for keys
let position = 0; //set initial position

function handlekeyPress(e) {
  if (e.code === "ArrowLeft") {
    position = position - 350;
  }

  if (e.code === "ArrowRight") {
    position = position + 350;
  }

  if (position < 0) {
    position = 0;
  }
  refresh(); //reposition balln
}

// refresh changes the position of the ball
function refresh() {
  ball.style.left = position + "px";
}
