function validateEmail(email) {
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function validatePhone(phone) {
    let phonePattern = /^\d{10}$/; // Assumes a 10-digit phone number
    return phonePattern.test(phone);
}

function validatePassword(password) {
    return password.length >= 6;
}

function validateForm() {
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let password = document.getElementById("password").value;
    let isValid = true;
    
    if (!validateEmail(email)) {
        document.getElementById("emailError").innerText = "Invalid email format.";
        isValid = false;
    } else {
        document.getElementById("emailError").innerText = "";
    }
    
    if (!validatePhone(phone)) {
        document.getElementById("phoneError").innerText = "Phone number must be 10 digits.";
        isValid = false;
    } else {
        document.getElementById("phoneError").innerText = "";
    }
    
    if (!validatePassword(password)) {
        document.getElementById("passwordError").innerText = "Password must be at least 6 characters long.";
        isValid = false;
    } else {
        document.getElementById("passwordError").innerText = "";
    }
    
    return isValid;
}