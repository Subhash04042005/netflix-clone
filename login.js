document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent default form submission

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (email === "" || password === "") {
    alert("Please fill in both fields.");
    return;
  }

  if (password.length < 4) {
    alert("Password must be at least 4 characters.");
    return;
  }

  // Set success message in sessionStorage
  sessionStorage.setItem("loginSuccess", "You have successfully signed in. Thank you!");
  

  // Redirect to index.html
  window.location.href = "index.html";
});
