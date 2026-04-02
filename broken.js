// Assignment Three - Buggy Starter Code
// Fix the bugs so all four features work correctly.

let helloBtn = document.querySelector("#helloBtn");
let greetingOutput = document.querySelector("#greetingOutput");


// BUG: Wrong ID used ("#themeButton" doesn't exist in HTML)
//  FIX: Changed to "#themeBtn" to match the actual button ID
let themeBtn = document.querySelector("#themeBtn");


let messageInput = document.querySelector("#messageInput");
let liveOutput = document.querySelector("#liveOutput");

let welcomeForm = document.querySelector("#welcomeForm");
let nameInput = document.querySelector("#nameInput");
let formOutput = document.querySelector("#formOutput");

// 1. Greeting Button
helloBtn.addEventListener("click", function() {
    greetingOutput.textContent = "Hello, student!";
});

// 2. Theme Toggle
themeBtn.addEventListener("click", function() {
       //  BUG: Class name was "darkmode" but CSS uses "dark-mode"
    //  FIX: Updated to match CSS exactly
    document.body.classList.toggle("dark-mode");
});

// 3. Live Input
messageInput.addEventListener("change", function() {
     // BUG 1: Used "change" event (only fires when leaving the input)
    //  BUG 2: Variable name typo "messageinput" instead of "messageInput"
    // FIX: Use "input" event and correct variable name
    liveOutput.textContent = messageInput.value;
});

// 4. Welcome Form
  // ❌ BUG: The "event" parameter was missing, so preventDefault() caused an error
// ✅ FIX: Added "event" as a parameter in the function
welcomeForm.addEventListener("submit", function(event) {
    event.preventDefault(); // prevents page from refreshing

    formOutput.textContent = "Welcome, " + nameInput.value;
});