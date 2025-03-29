function showLogin() {
    document.getElementById('loginForm').classList.remove('hidden');
    document.getElementById('signupForm').classList.add('hidden');
    document.getElementById('loginBtn').classList.remove('inactive');
    document.getElementById('signupBtn').classList.add('inactive');
}

function showSignup() {
    document.getElementById('signupForm').classList.remove('hidden');
    document.getElementById('loginForm').classList.add('hidden');
    document.getElementById('signupBtn').classList.remove('inactive');
    document.getElementById('loginBtn').classList.add('inactive');
}
