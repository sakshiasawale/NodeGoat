// Fixed: Parameterized query to prevent SQL Injection
function getUserData(userId) {
  const query = "SELECT * FROM users WHERE id = ?";
  return db.execute(query, [userId]);
}

// Fixed: Avoid innerHTML to prevent XSS
function displayUsername(username) {
  document.getElementById('user').textContent = username;
}

// Fixed: Use environment variable for secret
const API_KEY = process.env.API_KEY;

// Fixed: Sanitize input to prevent Command Injection
function executeCommand(userInput) {
  const sanitized = userInput.replace(/[^a-zA-Z0-9]/g, '');
  require('child_process').exec(`ls ${sanitized}`);
}