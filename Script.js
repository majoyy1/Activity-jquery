// ---------------- REGISTER VALIDATION ----------------
$("#registerForm").validate({
  rules: {
    regUsername: "required",
    regPassword: "required",
    confirmPassword: {
      equalTo: "[name='regPassword']"
    }
  },
  messages: {
    regUsername: "Enter username",
    regPassword: "Enter password",
    confirmPassword: "Passwords must match"
  },
  submitHandler: function(form, event) {
    event.preventDefault(); // stop refresh

    let newUser = {
      username: $("[name='regUsername']").val(),
      password: $("[name='regPassword']").val()
    };

    // Save to sessionStorage
    sessionStorage.setItem("registeredUser", JSON.stringify(newUser));

    alert("Registration successful! You can now login.");
    window.location.href = "index.html"; // back to login page
  }
});


// ---------------- LOGIN VALIDATION ----------------
$("#loginForm").validate({
  rules: {
    username: "required",
    password: "required"
  },
  messages: {
    username: "Enter your username",
    password: "Enter your password"
  },
  submitHandler: function(form, event) {
    event.preventDefault(); // stop refresh

    let username = $("[name='username']").val();
    let password = $("[name='password']").val();

    // Get registered account (if any)
    let storedUser = JSON.parse(sessionStorage.getItem("registeredUser"));

    // Check credentials: static admin or registered account
    if ((username === "admin" && password === "12345") ||
        (storedUser && username === storedUser.username && password === storedUser.password)) {
      
      // Save active session
      sessionStorage.setItem("username", username);

      // Redirect to landing page
      window.location.href = "landing.html";
    } else {
      alert("Invalid login. Try again.");
    }
  }
});
