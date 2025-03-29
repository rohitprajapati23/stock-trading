// Function to save personal information
function savePersonalInfo() {
    let fullName = document.getElementById("fullName").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let address = document.getElementById("address").value;

    alert("Personal Information Updated:\n" + fullName + "\n" + email + "\n" + phone + "\n" + address);
}

// Function to save security settings
function saveSecuritySettings() {
    let password = document.getElementById("password").value;
    let twoFA = document.getElementById("2fa").value;

    alert("Security Settings Updated:\nPassword: " + password + "\n2FA: " + twoFA);
}

// Function to apply the selected theme
function applyTheme(theme) {
    if (theme === "dark") {
        document.body.classList.add("dark-mode");
        document.body.classList.remove("light-mode");
        localStorage.setItem("theme", "dark"); // Save preference
    } else {
        document.body.classList.add("light-mode");
        document.body.classList.remove("dark-mode");
        localStorage.setItem("theme", "light"); // Save preference
    }
}

// Function to save user preferences
function savePreferences() {
    let theme = document.getElementById("theme").value;
    let notifications = document.getElementById("notifications").value;

    applyTheme(theme); // Apply theme

    alert("Preferences Updated:\nTheme: " + theme + "\nNotifications: " + notifications);
}

// Load theme on page load
window.onload = function () {
    let savedTheme = localStorage.getItem("theme") || "light"; // Default to light mode
    document.getElementById("theme").value = savedTheme;
    applyTheme(savedTheme);
};