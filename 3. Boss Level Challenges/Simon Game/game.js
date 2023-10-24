var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

function nextSequence() {
  //Random Number Generation
  var randomNumber = Math.floor(Math.random() * 4);
  console.log(randomNumber);

  var randomChoosenColour = buttonColours[randomNumber];

  gamePattern.push(randomChoosenColour);

  $(document).keydown(function () {
    // This will add animation to button clicking
    $("#" + randomChoosenColour)
      .fadeOut(100)
      .fadeIn(100);
    //This will play audio on the basis of button clicked
    var audio = new Audio("sounds/" + randomChoosenColour + ".mp3");
    // To Play audio
    audio.play();
  });

  $(".btn").click(function () {
    var useChoosenColour = $(this).attr("id");
    console.log(useChoosenColour);
    userClickedPattern.push(useChoosenColour);
    console.log(userClickedPattern);
  });
}

function playSound(name) {
  $(".btn").click(function () {
    // This will add animation to button clicking
    $(this).fadeOut(100).fadeIn(100);
    //This will play audio on the basis of button clicked
    var audio = new Audio("sounds/" + randomChoosenColour + ".mp3");
    // To Play audio
    audio.play();
  });
}

nextSequence();
