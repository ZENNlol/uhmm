// Flashcards Data
const flashcards = [
  "Asset = Something you own",
  "Liability = Something you owe",
  "Equity = Owner's share of the company",
  "Revenue = Money earned",
  "Expense = Money spent"
];
let currentFlashcard = 0;

function nextFlashcard() {
  document.getElementById("flashcard-text").innerText = flashcards[currentFlashcard];
  currentFlashcard = (currentFlashcard + 1) % flashcards.length;
}

// Budget Tracker
let total = 0;
function addExpense() {
  const name = document.getElementById("expense-name").value;
  const amount = parseFloat(document.getElementById("expense-amount").value);
  if (!name || isNaN(amount)) return;
  total += amount;

  const li = document.createElement("li");
  li.innerText = `${name}: ₱${amount}`;
  document.getElementById("expense-list").appendChild(li);

  document.getElementById("total").innerText = total;
  document.getElementById("expense-name").value = "";
  document.getElementById("expense-amount").value = "";
}

// Login System
function showRegister() {
  document.getElementById("login-screen").classList.add("hidden");
  document.getElementById("register-screen").classList.remove("hidden");
}

function showLogin() {
  document.getElementById("register-screen").classList.add("hidden");
  document.getElementById("login-screen").classList.remove("hidden");
}

function register() {
  const username = document.getElementById("register-username").value;
  const password = document.getElementById("register-password").value;

  if (!username || !password) {
    alert("Fill all fields!");
    return;
  }
  localStorage.setItem(username, password);
  alert("Account created! Please login.");
  showLogin();
}

function login() {
  const username = document.getElementById("login-username").value;
  const password = document.getElementById("login-password").value;

  if (localStorage.getItem(username) === password) {
    document.getElementById("login-screen").classList.add("hidden");
    document.getElementById("app-screen").classList.remove("hidden");
    document.getElementById("nav").classList.remove("hidden");
  } else {
    alert("Invalid credentials!");
  }
}

function logout() {
  document.getElementById("app-screen").classList.add("hidden");
  document.getElementById("nav").classList.add("hidden");
  document.getElementById("login-screen").classList.remove("hidden");
}

function showSection(section) {
  document.getElementById("flashcards").style.display = "none";
  document.getElementById("budget").style.display = "none";
  document.getElementById(section).style.display = "block";
}
