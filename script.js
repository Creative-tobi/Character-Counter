
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
text.addEventListener("input", CharacterCount);


