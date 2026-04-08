console.log("Personalized Web App Started...");

// ================= SELECT ELEMENTS =================
const form = document.querySelector("#userForm");
const nameInput = document.querySelector("#name");
const ageInput = document.querySelector("#age");

const outputSection = document.querySelector("#output");
const greetingDiv = document.querySelector("#greeting");
const monthsDiv = document.querySelector("#months");
const accessDiv = document.querySelector("#access");
const quotesDiv = document.querySelector("#quotes");
const resetBtn = document.querySelector("#resetBtn");

// ================= FUNCTION: CALCULATE AGE IN MONTHS =================
function calculateMonths(age) {
  return age * 12;
}

// ================= FUNCTION: GREETING =================
function createGreeting(name) {
  return `Hello ${name} 👋`;
}

// ================= FUNCTION: AGE CHECK =================
function checkAccess(age) {
  if (age >= 18) {
    return "You can access adult content";
  } else {
    return "You are too young for adult content";
  }
}

// ================= FUNCTION: DISPLAY QUOTES =================
function showQuotes() {
  quotesDiv.innerHTML = ""; // clear previous quotes

  const quote = "Keep pushing, greatness is coming 💪";

  for (let i = 0; i < 5; i++) {
    quotesDiv.innerHTML += `<p>${quote}</p>`;
  }
}

// ================= FORM SUBMISSION =================
form.addEventListener("submit", function (event) {
  event.preventDefault(); // stop page refresh

  const name = nameInput.value.trim();
  const age = parseInt(ageInput.value);

  // Save data in localStorage
  localStorage.setItem("name", name);
  localStorage.setItem("age", age);

  // Show result section
  outputSection.classList.remove("hidden");

  // Display greeting
  greetingDiv.textContent = createGreeting(name);

  // Display age in months
  const months = calculateMonths(age);
  monthsDiv.textContent = `You are ${months} months old`;

  // Display age condition result
  accessDiv.textContent = checkAccess(age);

  // Display quotes
  showQuotes();
});

// ================= LOAD SAVED DATA ON REFRESH =================
window.addEventListener("load", function () {
  const savedName = localStorage.getItem("name");
  const savedAge = localStorage.getItem("age");

  if (savedName && savedAge) {
    outputSection.classList.remove("hidden");

    greetingDiv.textContent = createGreeting(savedName);

    const months = calculateMonths(savedAge);
    monthsDiv.textContent = `You are ${months} months old`;

    accessDiv.textContent = checkAccess(savedAge);

    showQuotes();
  }
});

// ================= RESET BUTTON =================
resetBtn.addEventListener("click", function () {
  localStorage.clear(); // remove saved data
  location.reload();   // refresh page
});