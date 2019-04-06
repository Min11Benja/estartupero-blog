var title = document.getElementById("title");
var text = document.getElementById("text");
var next = document.getElementById("next");
var back = document.getElementById("back");

var progress = [
   ["Suscribete", "In order to activate your account you must accept the email, that was sent to you. If you do not receive the email within a 10 minutes check your spam folder."],
   ["Setup Account", "Add Profile picture and cool bio to add a little bit personality to your profile. If you don't have a profile picture you can select from our collection of profile pictures supplied to you."],
   ["Adjust your Settings", "If you want to get the most out of your experience try adjusting the settings to your liking and customize to your personal preferences."],
   ["Explore", "Explore. I am running out of dummy text to write about. Thank you for checking out this pen and have a great day!"]
];

var value = 0;

function setBubbleDefault() {
   document.getElementById("bubble-1").className = "bubble";
   document.getElementById("bubble-2").className = "bubble";
   document.getElementById("bubble-3").className = "bubble";
   document.getElementById("bubble-4").className = "bubble";
}

function setBubble() {
   if (value == 0) {
      document.getElementById("bubble-1").className = "bubble bubble-fill";
   } else if (value == 1) {
      document.getElementById("bubble-2").className = "bubble bubble-fill";
   } else if (value == 2) {
      document.getElementById("bubble-3").className = "bubble bubble-fill"
   } else if (value == 3) {
      document.getElementById("bubble-4").className = "bubble bubble-fill";
   }
}

setBubble();

function reloadData(x) {
   var defaultProg = progress[x];
   title.innerHTML = defaultProg[0];
   text.innerHTML = defaultProg[1];
}

reloadData(value);

next.onclick = function() {
   reloadData(value + 1);
   value += 1;
   setBubbleDefault();
   setBubble();
}

back.onclick = function() {
   reloadData(value - 1);
   value -= 1;
   setBubbleDefault();
   setBubble();
}