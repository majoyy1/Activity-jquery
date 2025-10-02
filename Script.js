$(document).ready(function() {

  // ---------------- REGISTER ----------------
  $("#registerForm").submit(function(e) {
    e.preventDefault();

    let fullName = $("[name='fullName']").val();
    let email = $("[name='email']").val();
    let username = $("[name='regUsername']").val();
    let password = $("[name='regPassword']").val();
    let confirmPassword = $("[name='confirmPassword']").val();

    if (!fullName || !email || !username || !password || !confirmPassword) {
      alert("All fields are required!");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Save account details
    let newUser = { fullName, email, username, password };
    sessionStorage.setItem("registeredUser", JSON.stringify(newUser));

    alert("Registration successful! You can now login.");
    window.location.href = "index.html";
  });


  // ---------------- LOGIN ----------------
  $("#loginForm").submit(function(e) {
    e.preventDefault();

    let username = $("[name='loginUsername']").val();
    let password = $("[name='loginPassword']").val();
    let storedUser = JSON.parse(sessionStorage.getItem("registeredUser"));

    if ((username === "admin" && password === "12345") ||
        (storedUser && username === storedUser.username && password === storedUser.password)) {

      sessionStorage.setItem("username", storedUser ? storedUser.fullName : username);
      window.location.href = "landing.html";
    } else {
      alert("Invalid login. Try again.");
    }
  });

});
