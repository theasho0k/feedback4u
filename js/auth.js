// auth.js
// Handles login and signup logic for Feedbackoooo

// Placeholder for user data structure
// { username, password, role: 'student' | 'faculty' }

function saveUser(user) {
  let users = JSON.parse(localStorage.getItem('users') || '[]');
  users.push(user);
  localStorage.setItem('users', JSON.stringify(users));
}

function getUsers() {
  return JSON.parse(localStorage.getItem('users') || '[]');
}

function findUser(username) {
  return getUsers().find(u => u.username === username);
}

function login(username, password) {
  const user = findUser(username);
  if (user && user.password === password) {
    localStorage.setItem('session', JSON.stringify({ username, role: user.role }));
    return true;
  }
  return false;
}

function logout() {
  localStorage.removeItem('session');
}

// Export functions for use in other scripts
window.auth = { saveUser, getUsers, findUser, login, logout }; 