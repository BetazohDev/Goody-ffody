const registrationForm = document.getElementById("registration-form");
const cancelButton = document.getElementById("cancel-button");
const logoutButton = document.getElementById("logout-button");

registrationForm.addEventListener("submit", function(e) {
	e.preventDefault();
	
	// Validation
	const name = document.getElementById("name").value;
	const email = document.getElementById("email").value;
	const password = document.getElementById("password").value;
	const confirmPassword = document.getElementById("confirm-password").value;
	
	if (name.trim() === "" || email.trim() === "" || password.trim() === "" || confirmPassword.trim() === "") {
		alert("Please fill out all fields.");
		return;
	}
	
	if (password !== confirmPassword) {
	}
}
)