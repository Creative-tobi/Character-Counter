function CharacterCount() {
  let msg = document.getElementById("leave").value;
  let call = msg.length;
  document.getElementById("count").textContent = call;

  //Displaying the error meessage
  let result = document.getElementById("end");
  if (call == 400) {
    result.innerHTML = "You have reached the maximun character limit";
    result.style.color = "red";
  }
}

//using event listener to invoke the function
var text = document.getElementById("leave");
text.addEventListener("input", CharacterCount); //won't need to click button before it work i.e works as user is inputing

// verifying gmail
let check = document.getElementById("text");
function submit() {
  if (check.value.includes("@") && check.value.includes(".")) {
    document.getElementById("end2").innerHTML = " ";
  } else {
    document.getElementById("end2").innerHTML = " E-mails Only";
    document.getElementById("end2").style.color = "red";
  }
}

//using event listener
var sub = document.getElementById("mit");
sub.addEventListener("click", submit); //the "click" refer to when a button is click or 
// when the stuff with the id is clicked even if it's not a button
