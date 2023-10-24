var randomNumber1 = Math.random();
randomNumber1 = randomNumber1 * 6;
randomNumber1 = Math.ceil(randomNumber1);
console.log(randomNumber1);

var randomNumber2 = Math.random();
randomNumber2 = randomNumber2 * 6;
randomNumber2 = Math.ceil(randomNumber2);
console.log(randomNumber2);

function changeImage(randomNumber1) {
  if (randomNumber1 === 1) {
    document.querySelector("img.img1").setAttribute("src", "images/dice1.png");
  }
  if (randomNumber1 === 2) {
    document.querySelector("img.img1").setAttribute("src", "images/dice2.png");
  }
  if (randomNumber1 === 3) {
    document.querySelector("img.img1").setAttribute("src", "images/dice3.png");
  }
  if (randomNumber1 === 4) {
    document.querySelector("img.img1").setAttribute("src", "images/dice4.png");
  }
  if (randomNumber1 === 5) {
    document.querySelector("img.img1").setAttribute("src", "images/dice5.png");
  }
  if (randomNumber1 === 6) {
    document.querySelector("img.img1").setAttribute("src", "images/dice6.png");
  }
}

function change2ndImage(randomNumber2) {
  if (randomNumber2 === 1) {
    document.querySelector("img.img2").setAttribute("src", "images/dice1.png");
  }
  if (randomNumber2 === 2) {
    document.querySelector("img.img2").setAttribute("src", "images/dice2.png");
  }
  if (randomNumber2 === 3) {
    document.querySelector("img.img2").setAttribute("src", "images/dice3.png");
  }
  if (randomNumber2 === 4) {
    document.querySelector("img.img2").setAttribute("src", "images/dice4.png");
  }
  if (randomNumber2 === 5) {
    document.querySelector("img.img2").setAttribute("src", "images/dice5.png");
  }
  if (randomNumber2 === 6) {
    document.querySelector("img.img2").setAttribute("src", "images/dice6.png");
  }
}

function winner(randomNumber1, randomNumber2) {
  if (randomNumber1 > randomNumber2) {
    document.querySelector(".container h1").innerHTML =
      "&#128681; Player1 Wins";
  } else if (randomNumber1 < randomNumber2) {
    document.querySelector(".container h1").innerHTML =
      "Player2 Wins &#128681;";
  } else if (randomNumber1 === randomNumber2) {
    document.querySelector(".container h1").innerHTML = "It's a Draw";
  }
}

changeImage(randomNumber1);
change2ndImage(randomNumber2);
winner(randomNumber1, randomNumber2);
