// Flashcards Data
const flashcards = [
  { term: "Asset", def: "Something you own" },
  { term: "Liability", def: "Something you owe" },
  { term: "Equity", def: "Owner's share of the company" },
  { term: "Revenue", def: "Money earned" },
  { term: "Expense", def: "Money spent" }
];
let currentFlashcard = 0;

// Flip card
function flipCard() {
  document.querySelector(".flashcard").classList.toggle("flip");
}

// Next card
function nextFlashcard() {
  document.querySelector(".flashcard").classList.remove("flip");
  const card = flashcards[currentFlashcard];
  document.getElementById("flashcard-front").innerText = card.term;
  document.getElementById("flashcard-back").innerText = card.def;
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
    nextFlashcard(); // show first flashcard
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
  document.getElementById("flashcards").classList.add("hidden");
  document.getElementById("budget").classList.add("hidden");
  document.getElementById(section).classList.remove("hidden");
}
