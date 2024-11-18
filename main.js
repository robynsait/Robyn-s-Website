// Code for intro message
const time = new Date().getHours();
let greeting;
const greetingElement = document.getElementById("greeting");

if (time < 12) {
  greeting = "Good morning, I'm Robyn.";
  greetingElement.style.color = "#ff5757";
} else if (time < 17) {
  greeting = "Good afternoon, I'm Robyn.";
  greetingElement.style.color = "#ffbd59";
} else {
  greeting = "Good evening, I'm Robyn.";
  greetingElement.style.color = "#5271ff";
} 

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("greeting").textContent = greeting;
});
// End code for intro message

// Code for copyright year
var CurrentYear = new Date().getFullYear()

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("copyyear").textContent = CurrentYear;
});
// End code for copyright year

// Alert button code
  function btnAlert() {
    alert("Hello world!");
  }
  function hoverText() {
    document.getElementById("btnAlert").textContent = "Let's see..!";
  }

  function resetText() {
    document.getElementById("btnAlert").textContent = "What does this button do?";
  }
// End alert button code

// Even odd list code 
    function populateList() {
      const list = document.getElementById('numbers');

      for (let i = 1; i <= 12; i++) {
        const li = document.createElement('li');
        
        if (i % 2 === 0) {
          li.textContent = `Even`;
        } else {
          li.textContent = `Odd`;
        }

        list.appendChild(li);
      }
    }

    populateList();
//End even off list code

