let input = document.querySelector("input");
let eye = document.querySelector(".bi");
let speak = document.querySelector(".speak");

speak.addEventListener("click", ()=> {
    speakText(input.value);
})

eye.addEventListener("click", () => {
    if (input.type == "text") {
        input.type = "password";
        eye.classList.remove("bi-eye-slash");
        eye.classList.add("bi-eye");
        speakText("Hide Password");
    } else {
        eye.classList.add("bi-eye-slash");
        eye.classList.remove("bi-eye");
        input.type = "text";
        speakText("Snow Password");
    }
});


function speakText(text) {
    window.speechSynthesis.cancel();
    var msg = new SpeechSynthesisUtterance();
    msg.text = text;
    msg.lang = "en-US";
    window.speechSynthesis.speak(msg);
  }
  