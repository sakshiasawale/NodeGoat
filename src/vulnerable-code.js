// SQL Injection
function getUserData(userId) {
  const query = "SELECT * FROM users WHERE id = " + userId; // vulnerable
  return db.execute(query);
}

// XSS
function displayUsername(username) {
  document.getElementById('user').innerHTML = username; // XSS
}

// Hardcoded secret
const API_KEY = "sk_live_1234567890abcdef";

// Command injection
function executeCommand(userInput) {
  const cmd = "ls " + userInput; // unsafe
  require('child_process').exec(cmd);
}